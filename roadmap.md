---
proofedDate: none
title: "Roadmap"
content: What functionality is available today versus what is planned, and how execution, safety, and strategy capabilities evolve over time.
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

# Roadmap

## Current capabilities and roadmap

The following table depicts what is shipping at launch and details some of the functionality that will ship as the roadmap is delivered:

| Capability | MVP / Alpha | Nabu v1 | Nabu v2 | Future |
| :---- | :---- | :---- | :---- | :---- |
| Strategy authoring | Chat-first | Visual strategy editor (plus chat) | Templates + strategy libraries | Agent-to-agent composition |
| Verification | [PSL](glossary.md#psl) compile + structured errors | Stronger semantic checks + debugging roles | Formal verification for selected classes | Verified strategy certifications |
| Testing | Basic dry runs | Research simulation + variant ranking (Telegram) | High-fidelity simulation + backtesting | Full historical research suite |
| Execution venues | Ethereum [DEXs](glossary.md#dex) 1-2 [CEX](glossary.md#cex) integrations | More CEXs + more chains including Solana | Perpetuals | Non-EVM + privacy focused ecosystems |
| Execution class | Event-driven automation | Low-latency trading + arbitrage classes | Perps + multi-leg execution | Cross-venue execution at scale |
| Solvers | First-party | First-party + solver docs | Verified solver partners | Open solver registry |
| Agent competition | Basic multi-variant generation + ranking | Competition ladder: promote best, iterate mid, drop worst + rewards | Competition leagues by strategy class + team competition | Permissionless agent marketplace + on-chain attestations of competition performance |
| Social layer | Strategy pages (basic), Feed | Performance details (selective disclosure) | Profit share, topic rooms, DMs, private org spaces | Full creator marketplace |
| Growth / Referrals | Referral links | Activation-gated referrals + rewards + anti-abuse | Tiered rewards + team/org invites + partner referral tracks | Creator/affiliate revenue share + ecosystem programs |
| Safety controls | Allowlist + kill switch | + daily loss cap, max slippage | Expanded risk suite | Institutional policy packs |

See the [risk control catalog](technology.md#risk-control-catalog) for the full policy surface.

Notes: Nabu launches with:

- Research simulation (simulate transactions and measure outcomes): higher-fidelity simulation and historical backtesting follow.  
- Ethereum DEX automation and 1–2 CEX integrations: coverage expands thereafter.
