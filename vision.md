---
proofedDate: none
title: Vision
content: The shift from manual crypto operations to strategy- and agent-driven execution, and why users need a single surface to create, run, and coordinate strategies, with guardrails in place, at scale.
notes: > 
  todo in place 1 image
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

# Vision

The long-term shift is clear, crypto won’t be operated by humans clicking through ten interfaces. It will be operated by strategies. People will describe outcomes and constraints, and automation will do the repetitive work: monitoring, moving capital, executing actions, handling retries, and stopping safely when conditions break.

Nabu is built for that world. Trading and arbitrage are the first wedge, but the superapp scope is broader: yield farming, liquidity management, borrow-and-loop, claim-and-compound, airdrop farming workflows, cross-chain repositioning, and any future strategy class that can be expressed as outcomes with limits. If a strategy needs to route funds, rotate venues, hedge exposure, claim rewards, rebalance, or unwind, it happens inside Nabu under explicit permissions and policy, with a clear record of what happened and why.

Over time, Nabu will become the front-end for agentic finance. Strategies and specialized agents compose, users and teams collaborate around the same strategy objects, and distribution is native.

That is the superapp end state: one surface to create, execute, coordinate, and distribute strategies across the entire crypto stack, so users can do whatever strategies they want and connect wherever they need without leaving Nabu.

Nabu supports a strategy lifecycle that enables rapid iteration without sacrificing determinism, safety, or execution quality, turning strategy development into an ongoing operating loop:

- **Strategy creation:** rapidly generate dozens to hundreds of strategy variants, verify them deterministically, test them, and select the best-performing version.  
- **Research-first evaluation:** simulate execution, compute Profit and Loss (PnL) and risk metrics, and rank variants before taking real market risk.  
- **Execution-grade automation:** execute strategies via event-driven automation with sub-second time-to-first-action. The MVP target is ~250ms p50 from market-relevant event to outbound transaction or order request, with venue-dependent confirmation.  
- **Intent-based execution and solvers:** strategies specify desired outcomes as intents. Solvers translate those intents into concrete execution, starting with a first-party solver and expanding to verified partners and third-party plugins.  
- **Agent-driven iteration:** multiple agent-generated variants are evaluated in simulation, promoted or iterated based on objective performance metrics, and retired when they underperform. Natural selection in action.

## System guarantees

Nabu builds in privacy and control by design allowing strategies to remain private by default and execute under explicit policy constraints, including daily loss caps, maximum slippage, venue allowlists, and a kill switch.

## A verifiable strategy language

Strategies are expressed in the Pelagos Specific Language ([PSL](glossary.md#psl)), a constrained, deterministic strategy language with structured compiler feedback, enabling safe iteration without sacrificing speed.

## Connected ecosystems

Strategies are embedded directly to social coordination functions and tie directly to their outcomes: allowing strategy rooms to turn performance into distribution and coordination without noise. Strategy pages, live feeds, and rooms attach discussion to specific versions and results, with performance-based leaderboards surfacing what works.

## Aligned distribution and incentives

A native referral program rewards users and teams when invitations convert into measurable activity, including simulations, deployments, and executed volume.

<!-- todo: The following diagram summarizes these features and flows.  -->

## Business model

Nabu’s business model is aligned with measurable execution, real usage, and strategy performance, rather than activity or speculation. Revenue is generated at the points where value is created for users, solvers, and strategy builders:

- **Execution and access fees:** Nabu charges execution fees on routed volume (basis points) and/or subscription tiers for power users.  
- **Solver marketplace economics:** Nabu takes a marketplace fee on solver activity and offers premium execution services, aligning incentives around execution quality, latency, and reliability.  
- **Strategy monetization:** strategy builders can offer their strategies to users under profit-share terms (and may include management and performance fees); Nabu charges a small take-rate on those earnings.  
- **Enterprise and private deployments:** Nabu offers enterprise and private deployments with dedicated infrastructure, integrations, and support for institutions and advanced operators.

This model ensures that platform revenue scales with execution quality, strategy performance, and real economic activity, reinforcing Nabu’s flywheel rather than extracting value independently of user outcomes.
