---
proofedDate: none
title: The solution: Nabu
content: How Nabu addresses execution, verification, safety, and distribution as a single integrated system.
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

# The Solution: Nabu

## Why the Pelagos Strategy Languag?

[PSL](glossary.md#psl), the Pelagos Strategy Language, is a constrained, verifiable, Domain-Specific Language (DSL) that gives the LLM fast, objective feedback about what is correct vs. invalid. Unlike general-purpose programming languages, PSL is intentionally not Turing-complete: it reduces complexity, improves determinism, and enables language-level safeguards without forcing rigid templates.

### Pelagos as the execution substrate

Pelagos provides a canonical stream of records, state diffs, attested external events and finality data. This collapses fragmented data and execution stacks into one consistent input/output model, making strategy research, verification, and execution materially simpler.

## Product: user flow and core concepts

### End-to-end user flow

The following steps illustrate the full lifecycle of a strategy on Nabu:

- Step 1 — **Strategize:** Create strategies via a chat-based interface (at launch, with a visual strategy editor on the roadmap).  
- Step 2 — **Explore:** Nabu proposes multiple variants and parameterizations.  
- Step 3 — **Validate:** each variant compiles into PSL and must satisfy deterministic rules before anything is deployed.  
- Step 4 — **Constrain:** attach explicit policy, such as daily loss cap, max slippage, venue allowlists, and kill switch.  
- Step 5 — **Test:** first in research simulation mode, computing performance and risk metrics, and rank variants. Results are delivered as structured Telegram reports.  
- Step 7 — **Promote:** determine which variant to deploy. Strategies execute automatically on fresh canonical inputs with event-driven triggers.  
- Step 8 — **Iterate:** fork, version, and refine based on observed receipts, metrics, and failure analysis.  
- (Optional) Step 9 — **Share:** publish performance details and terms while keeping proprietary logic private.

### Privacy guardrails

Throughout the strategy lifecycle, the user strategy is protected by Nabu’s guardrails. Strategy logic and parameters that are compiled into PSL are kept private and encrypted throughout execution. Strategies run inside Trusted Execution Environments ([TEEs](glossary.md#tee)) — hardware-backed secure enclaves operated by an allowlisted validator set — ensuring deterministic, confidential execution even in a distributed setting. Validators coordinate via Distributed Key Generation (DKG) and Threshold Signature Schemes ([TSS](glossary.md#tss)) to authorize actions without exposing private inputs.

Execution is driven by canonical state and event data aggregated by Pelagos across public blockchains and centralized exchanges. Resulting outbound actions — onchain transactions, [CEX](glossary.md#cex) orders, or abstract intents — are posted to public venues and logs as usual. After execution, sealed receipts and metrics are produced, enabling verifiable performance reporting with selective disclosure: users can share outcomes, constraints, and performance envelopes without revealing proprietary strategy logic.

### Research simulation mode

Nabu launches with a research-first simulation mode designed to validate strategies before any market risk is taken. Nabu simulates strategy actions against canonical market inputs spanning an Ethereum [DEX](glossary.md#dex) (Uniswap v2–style AMMs) and at least one centralized exchange, enabling realistic CEX ↔ DEX execution paths. The first version of the product focuses on simulated transactions and computed PnL; providing:

- **Outputs:** equity curve, trade list, and structured explanations of why trades occurred.  
- **Risk metrics:** volatility, drawdown, constraint hits.  
- **Variant comparison:** rank multiple generated candidates against a baseline.  
- **Delivery:** structured summaries and comparisons via Telegram bot.

Nabu treats strategy iteration as a competition, not a one-shot bot build. For a given strategy goal, multiple agents produce competing variants and parameterizations. Nabu evaluates these through the same simulation harness and the same policy constraints, then scores each candidate on objective metrics such as risk-adjusted return, drawdown profile, constraint adherence, and execution feasibility.

Each round produces three outcomes:

- **Promote:** the top-performing candidate advances to deployment candidacy and becomes the new baseline.  
- **Iterate:** mid-performing candidates must revise and resubmit, guided by structured feedback on where performance or constraints failed.  
- **Drop:** the weakest candidate is removed for that round.

This creates a tight loop of generate → simulate → rank → promote → iterate, ensuring rapid quality improvement without users overseeing endless experiments.

Incentives attach to measurable performance, not activity or hype. Competition wins can unlock higher simulation and variant limits, execution-fee credits, early access to new venues and intents, and distribution boosts on the feed and leaderboards. Because results are versioned and tied to receipts and metrics, the system rewards performance.

### Execution model: event-driven, execution-first

Nabu is built for strategy classes where timing, data freshness, and operational reliability dominate outcomes.

- **Event-driven triggers:** avoids polling intervals as the dominant term in reaction time.  
- **Canonical inputs:** Pelagos provides a fresh, consistent stream of market-relevant inputs.  
- **Time-to-first-action:** At launch, Nabu targets ~250ms p50 from relevant event to outbound transaction/order request.

### Intents, solvers, and agent-to-agent composition

Strategies do not hardcode venue integrations. They emit either external transactions to chains or CEXes or standardized intents: declarative specifications of a desired outcome, solution boundaries (constraints), and acceptance checks. Intents are expressed in a constrained, verifiable language (e.g., PSL-bounded predicates) so producers can specify what must be true and solvers can search how to satisfy it within the allowed space.

Pelagos allows intent execution to be verifiable end-to-end. Constraints and acceptance predicates can reference canonical inputs (state diffs, receipts, finality, venue data) and are evaluated deterministically before execution (eligibility) and after execution (outcomes). The result is sealed receipts linking intent → plan → execution → outcome, so solvers can be judged on correctness and quality rather than trust.

Solvers are pluggable executors. Given an intent and the latest canonical state, solvers return a proposed execution plan and quote. Nabu ships with a first-party solver, publishes a solver interface and reference implementation, and onboards verified solver partners after launch. Over time, a solver marketplace can compete on latency, fill quality, fees, reliability, and supported venues without forcing strategy rewrites.

Agent-to-agent composition uses the same interface. Producer agents (signal, risk, portfolio) express their needs precisely as PSL-bounded intents. Solver-side agents satisfy them by producing concrete execution plans that meet the acceptance checks. Monitoring agents can observe receipts, PnL, and propose controlled updates (e.g., parameter changes, tighter bounds, solver/venue switching), gated by simulation and policy.

### Risk controls

Nabu treats risk controls as part of the strategy object: explicit, enforceable, and visible to users. Controls are applied pre-trade and at runtime to prevent loss amplification from bugs, venue anomalies, or data issues.

At launch, Nabu offers the following controls:

- Daily loss cap  
- Max slippage  
- Venue allowlist  
- Kill switch

Additional standard controls are part of the [roadmap](./roadmap.md); as detailed in the [risk control catalog](technology.md#risk-control-catalog) .

## Social Layer

Nabu’s social layer is the information and coordination layer for strategies designed to become the single melting pot for crypto strategy operations.

### Home feed

The feed is the live stream of strategy reality. It surfaces new strategies, trending strategies, major releases, parameter changes, performance shifts, drawdowns, safety halts, solver failures, venue incidents, and conversations that matter. It is designed to answer three questions quickly: what’s working, what changed, and what should I look at next? Ranking is driven by reality signals such as adoption, volume, execution quality, risk events, and version deltas, not engagement bait.

### Strategy pages

Every strategy has a canonical page that acts like a terminal view. It shows the thesis, what the strategy does, risk profile, policy configuration, simulation method, and performance. Performance is versioned and users can compare releases and understand how outcomes differ across versions.

### Strategy rooms

Each strategy has a room where builders publish release notes, changes, and operational guidance. Users ask questions, followers share outcomes and the assistant can answer operational questions using concrete facts tied to the strategy artifacts and receipts: current exposure, slippage distribution, recent drawdowns, reasons for safety halts, failure rates by venue, and version-to-version deltas.

### Topic rooms, DMs, and private org spaces

Nabu supports global rooms for major categories and operational issues, including CEX ↔ DEX arbitrage, cross-chain strategies, yield loops, airdrop farming workflows, perps and funding, and infrastructure incidents. Direct messages and group chats support collaboration. Businesses can run private org spaces for internal coordination while using the same strategy artifacts, enforcement, and audit trail.

### Leaderboard

The leaderboard rewards strategies for shipping and real adoption. Status is earned through measurable operation: onboarding users, attracting TVL, generating real volume each epoch, sustaining execution quality, and operating within declared policies.

## Referral

Nabu’s referral program is designed to scale strategy adoption without turning the product into spam. It rewards users for bringing in people who actually operate strategies, contribute volume, add liquidity, and improve the ecosystem.

### How it works

Each user receives a referral link. When a referred user signs up and becomes active, both parties earn rewards. Rewards are tied to measurable usage rather than clicks or signups.

### What counts as active

A referral is only credited after the referred user completes defined activation steps. These steps are designed to map to real intent and real usage, for example:

- Connect at least one supported venue or wallet.  
- Run at least one research simulation or variant ranking run.  
- Deploy at least one strategy or enable one automated workflow.  
- Reach a minimum execution threshold, such as executed volume or a minimum number of successful actions over an epoch.

### Why it matters

Referrals strengthen the compounding loop. More operators bring more strategies and more volume. Volume attracts better solvers and venue integrations. Execution quality improves. Better outcomes drive further distribution through the feed, strategy pages, and strategy rooms.

## Landscape and differentiation

Nabu is positioned as execution-grade strategy manufacturing: high strategy throughput plus deterministic safety plus event-driven execution plus distribution.

Common market approaches:

- Polling-based workflow automation: accessible for slow strategies, but polling and orchestration dominate latency and failure modes.  
- LLM-to-code generation + user-run bots: expressive, but verification burden, safety, and operations shift to the user.  
- Venue-specific intent routers (onchain): strong best-execution for narrow action types (often swaps), but limited strategy expressiveness and confidentiality.  
- Professional HFT/MEV stacks: excellent execution but inaccessible to most users due to infrastructure and expertise requirements.

Nabu differentiates itself by addressing the core tradeoffs between strategy expressiveness, safety, execution latency, and distribution:

- Strategy throughput: generate and rank many variants quickly.  
- Deterministic safety: PSL + enforceable policy reduces hallucinations without rigid templates.  
- Event-driven execution: sub-second time-to-first-action for latency-sensitive strategies.  
- Confidentiality and selective disclosure: supports social distribution without alpha leakage.  
- Platform direction: standardized intents and solvers to extend execution beyond any single venue.  
- Social layer: pages, feed, rooms turn performance into distribution and coordination.
