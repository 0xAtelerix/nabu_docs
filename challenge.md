---
proofedDate: none
title: "The challenge"
content: The core execution problems in automated trading today, including latency, reliability, privacy leakage, and limited strategy throughput that prevent safe and scalable automation.
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

# The Challenge

## Problem

Automated trading is an execution problem disguised as an automation problem. The gap is not "can an LLM write something?" The gap is turning many hypotheses into safe and profitable solutions. Any solution must provide low-latency execution without building a bespoke infrastructure stack. The higher the gap between an onchain or offchain event and an action, the lower the probability a strategy will succeed.

### Strategy throughput bottleneck

Strategies tend to break when markets matter most — not because the idea is wrong, but because the system coordinating execution can’t keep up. Hypothesis velocity tends to remain high, while deployment velocity is low — meaning that while users conceive of many strategies per day, they can only safely implement only a few per week. 

Unconstrained LLM code generation increases iteration speed but shifts correctness and security onto the user — creating tradeoffs that span flexibility, performance, and correctness. DIY bots require glue code across RPCs, indexers, oracles, [CEX](glossary.md#cex) APIs, and infrastructure, all requiring continuous maintenance. Furthermore, systems that are correct tend to be limited and slow (e.g., simple APY based choices or price-threshold strategies), while flexible, general-purpose strategies require extensive debugging, testing, and operational overhead, raising the bar for user expertise and technical skills.

### Latency and reliability gap

Polling-based triggers create unavoidable blind spots: the market can move and revert between checks. Multi-hop stacks compound latency and increase operational failure probability. The more venues you add ([DEXs](glossary.md#dex) + CEXs + perps), the more fragile the stack becomes without an execution-first substrate. Entire classes of arbitrage and fast trading depend on reaction time.

### Privacy and control gaps

Strategy logic is often visible to platform operators or inferable from public traces, tying social distribution to alpha leakage. Custody models force bad trade-offs: either users self-host everything, or they accept custodial control and lose revocation and scope limits. Privacy focused protocols and confidential execution paths are typically unsupported in mainstream automation stacks.

### What power users actually need

- High strategy throughput: generate, test, and iterate many variants quickly.  
- Execution-grade performance: event-driven triggers, sub-second time-to-first-action, and predictable failure handling.  
- Privacy: proprietary strategies should not be visible to operators or copied from public traces.  
- Non-custodial control: users must retain revocation and scope controls for onchain and (where possible) CEX execution.

### The 10x thesis

Nabu targets order-of-magnitude improvements that are directly felt by users and compound at the system level:

- Ten times more hypotheses tested per week through variant creation and ranking.  
- Ten times more strategy classes unlocked through event-driven execution.  
- Ten times faster iteration through compiler-grade feedback instead of debugging loops.  
- Ten times lower operational overhead by removing bespoke stacks.
