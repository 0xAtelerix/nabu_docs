---
proofedDate: none
title: "Strategy flywheel"
content: How confidential execution, objective performance measurement, and distribution reinforce each other to create a self-improving execution and strategy ecosystem.
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

# Strategy flywheel

Nabu is designed to benefit from the positive flywheel that links confidential execution, objective performance, and distribution into a self-reinforcing system.

Confidential execution enables creators to run monetizable strategies without exposing proprietary logic. Because strategies can be evaluated and shared based on verifiable outcomes rather than trust, high-performing strategies attract more users. User adoption, in turn, draws solvers, improving execution quality. Better execution increases strategy profitability, which further strengthens distribution and creator incentives. This flywheel is further supported by several system-level capabilities:

- **Canonical market stream:** Pelagos provides a consistent stream of finalized receipts, state diffs, and attested external data. This reduces fragmentation across venues and enables reliable, multi-venue automation.  
- **Verifiable strategy language ([PSL](glossary.md#psl)):** strategies either compile under strict, deterministic semantics or they do not. This creates a fast correction loop for both LLMs and users, preventing unsafe or ambiguous behavior from reaching execution.
- **Execution-first design:** event-driven triggers, explicit failure handling, and enforced policies align with real trading failure modes, allowing strategies to operate correctly under volatility, latency, and partial failure.  
- **Intent/solver ecosystem:** strategies specify desired outcomes, while solvers compete to satisfy them. Solvers are evaluated on objective criteria such as correctness, latency, and fill quality, enabling execution quality to improve continuously over time.  
- **Productized distribution:** strategy pages, feeds, and rooms tie discovery and discussion directly to performance. As strategies attract users, users attract data and solver competition, further reinforcing execution quality.  
- **Unified execution surface:** solver plugins can integrate with API-accessible onchain and Web2 services (CEXs, custodians, risk systems, reporting/alerting) so strategies can coordinate across venues without assembling bespoke glue code.

Together, these elements reinforce the flywheel, enabling better execution which produces better strategies, better strategies drive distribution, and distribution improves execution — compounding value for creators, solvers, and the platform over time.
