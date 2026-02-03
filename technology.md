---
proofedDate: none
title: "Nabu technology"
content: A technical overview of Nabu’s execution model, trust boundaries, key management, and risk controls, clarifying how confidential strategies are executed safely and verifiably.
notes: >
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Nabu technical overview

### Pelagos and sequencing

- **Block time target:** ~250–360ms internal blocks, with optional centralized sequencing for specific performance modes.  
- **Consensus and consumption:** validators run full nodes for external chains and confirm blocks/receipts in a Directed Acyclic Graph (DAG)-based consensus; applications consume state diffs and receipts as a stream.

### Confidential strategy execution (high level)

- Strategy logic is encrypted to an epoch public key derived from the active validator set (via regular [DKG](glossary.md#dkg-distributed-key-generation)). Strategies are decrypted and executed only inside allowlisted [TEEs](glossary.md#tee), and signing of external transactions and requests is performed via threshold protocols. Execution produces outbound transactions/orders without a public linkage between a specific strategy and a specific outbound action.

This allows creators to share performance and terms without exposing proprietary logic, enabling social trading and profit-sharing at scale.

#### Visibility and trust boundaries

| Artifact / Data | User | TEEs (confidential execution) | Validators (DKG + [TSS](glossary.md#tss)) | Solvers (optional) | Public chain / mempool | [CEX](glossary.md#cex) venue |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Strategy logic ([PSL](glossary.md#psl))** | Full | Full (decrypted & executed) | No (only epoch key material, no plaintext) | No (unless user explicitly shares) | No | No |
| **Strategy parameters** | Full | Full | No | No (unless shared) | No | No |
| **Intents** (if used) | Full | Produced/consumed (may be internal) | May see authorization-relevant parts only (via approvals), not full logic | May receive intent constraints to compute execution plan | No | No |
| **Risk policy** (loss cap, slippage, allowlists, kill switch) | Full | Enforced | May see policy-relevant approvals/limits | May see constraints needed for planning | No | No |
| **Outbound chain transaction (payload)** | Can reconstruct from own strategy + receipts; also visible on explorer | Constructs/sign-request; does **not** TSS-sign | **TSS-signs + broadcasts, not connected to strategies** | May generate tx plan (if intents path) | **Yes** (tx hash, calldata, state changes) | N/A |
| **Outbound CEX order request** | Visible to user (via receipts) | Final signing with **user CEX key** occurs here after validator approval | **Approves via TSS** (returns approval signature), does not submit to CEX | May generate order plan (if intents path) | No | **Yes (to that CEX)** |
| **Sealed receipts** (inputs + constraints + outcomes) | Full (private) | Produces / packages | Contributes signatures/approvals referenced by receipts | No by default | No | No |
| **Performance metrics** (PnL, drawdown, Sharpe, etc.) | Full | Computes/derives | No by default | No by default | Not inherently | Not inherently |
| **Public performance envelope** (selectively disclosed) | Optional publish | Can produce proof material | Not required (unless attestation scheme) | Not required | Optional (only what user publishes) | Optional |

### CEX key model

This section describes how CEX credentials are handled within the trust and visibility boundaries defined in the table defining the visibility and trust boundaries.

- For venues that support key import/compatible models, users import a corresponding public key; signing occurs via distributed threshold signing among TEEs (e.g., GG20/FROST-style flows).

- For other venues, users encrypt their CEX API keys to the Pelagos epoch public key; execution uses enclave-only access and policy-bound usage.

### Risk control catalog

Nabu’s policy model implements execution-grade risk controls across multiple layers — strategy, account, and venue — reflecting established best practices in automated trading. The controls listed below present the full policy surface the system is [designed to support at v1](roadmap.md) for the subset of controls explicitly marked as designated for the MVP launch of Nabu.

Trusted execution environments are relied on for confidentiality, integrity, and attestation, but are treated as fallible components rather than sources of availability guarantees.

- Core exposure limits:  
  - Max position size per asset; max gross/net exposure; concentration limits.  
  - Max leverage and margin utilization (derivatives).  
- Pre-trade validations:  
  - Order size caps; notional caps; price collars / price band checks; fat-finger protection.  
  - Slippage ceilings; minimum liquidity checks; gas/fee ceilings (where applicable).  
- Execution throttles and stability:  
  - Rate limits / order throttles; max open orders; cancel-on-disconnect equivalents.  
  - Cooldowns after repeated failures or consecutive losses.  
  - Latency watchdogs, heartbeat requirements, and timeouts.
- Data sanity and manipulation resistance:  
  - Oracle deviation guards; stale-data checks; cross-source consistency checks  
  - Venue status checks (halts, degraded mode), circuit breakers  
- Operational controls:  
  - Kill switch (global and per-strategy); venue allowlists/denylists  
  - Key permission scoping; audit logs/receipts; emergency rotation procedures

These controls track established industry practice for automated trading risk management (pre-trade checks, throttles, kill-switches, and volatility controls).
