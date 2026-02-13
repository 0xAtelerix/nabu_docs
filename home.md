---
proofedDate: none
title: Why now?
content: >-
  Why advances in LLMs shift the bottleneck from strategy expression to
  verification, safety, and execution, and why execution-grade substrates are
  now required for AI-driven trading.
notes: ''
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

# Why now?

LLMs drastically reduce the cost of expressing strategy hypotheses. They move the bottleneck to verification, safety, and execution. The challenge now is how to turn many hypotheses into deterministic, low-latency automation that can run unattended.

## The market shift

Most AI trading products today fall into two buckets:

* Workflow glue optimized for slow automation, or (
* Unconstrained code generation that shifts debugging, safety, and operations to the user.

Neither is designed for execution-grade arbitrage and multi-venue trading.

Nabu is designed around a different premise: the winning products will be execution substrates that own data freshness, correctness, confidentiality, and operational reliability, and, therefore, unlock strategy classes that polling automation and DIY scripts cannot sustain.

Nabu expands the AI frontier from low-stakes automation to execution-grade trading and arbitrage: low-latency cross-[DEX](glossary.md#dex) and DEX-[CEX](glossary.md#cex) strategies today, and perps, non-EVM, prediction markets and privacy-focused ecosystems as the platform expands.

Nabu is a response to the following theses:

* Strategy creation should feel like interacting with a market-literate assistant that produces many candidates, not a single brittle bot.
* Every strategy must be deterministic, inspectable, and policy-bound — safe enough to run unattended.
* Creators should be able to share performance and terms without revealing proprietary alpha.
* Execution should be separated from strategy logic. Agent-to-agent composition allows intent-producing agents to specify outcomes, constraints, and acceptance checks in [PSL](glossary.md#psl); solver agents translate those PSL-bounded intents into executable transactions/orders across venues.
* Deployed strategies are living artifacts: monitoring agents observe sealed receipts and realized PnL, detect drift/regime changes, and propose controlled updates (parameter changes, venue routing changes, tighter risk bounds). Updates are versioned and can be gated by simulation/competition-style evaluation before promotion.

<figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>
