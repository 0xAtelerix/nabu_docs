---
proofedDate: none
title: "Introduction"
content: What Nabu is and how its execution-grade systems build, evaluate, and run automated, constrained onchain strategies at scale.
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

# Introduction

Nabu is an AI-native platform that lets users build, test, deploy, and operate automated trading and arbitrage strategies across crypto venues without assembling infrastructure. The wedge is execution-grade trading and arbitrage across [DEXs](glossary.md#dex) and [CEXs](glossary.md#cex). The platform is built to generalize to arbitrage opportunities, yield farming, liquidity management, borrowing loops, claim-and-compound, airdrop farming workflows, cross-chain repositioning, perps, prediction markets, non-EVM, perpetuals and centralized ecosystems, and privacy-focused environments.

Nabu defines a new category, the crypto strategy superapp: a single surface where users can run their entire playbook without jumping between wallets, bridges, dashboards, bots, and chat apps, and where strategy reality is visible, comparable, and discussable.

This litepaper is written for:

- Power users and strategists  
- Partners (venues, solvers, wallets, custodians, data providers)  
- Investors

## TL;DR

Nabu turns strategy creation into an execution-grade system.

Nabu enables rapid generation and deterministic verification of strategy variants, research-first evaluation via simulation and risk metrics, and sub-second event-driven execution. Strategies are expressed in a verifiable language, executed via intent-based solvers, and are governed by built-in risk policies, enabling safe iteration, objective comparison, and competitive selection of the best-performers.

Distribution and coordination are embedded into the strategy lifecycle. Strategy pages, live feeds, and rooms tie discussion to specific versions and outcomes, while leaderboards reflect real performance. A native referral program aligns growth with real usage, rewarding users and teams when invitations convert into measurable activity.

## Overview

Nabu is an AI-native platform for building, testing, and deploying automated trading and arbitrage strategies across DEXs and CEXs.

It is built for execution: generate many strategy variants fast, verify them deterministically, simulate outcomes before taking risk, then deploy the best version with hard policy controls such as loss caps, slippage limits, venue allowlists, and a kill switch.

Nabu is the flagship dApp on [Pelagos](https://docs.pelagos.network). Pelagos provides the decentralized execution substrate Nabu depends on: a validator-produced canonical stream of attested events, finality signals, state diffs, and records.

This removes the need for bespoke infrastructure stacks and trusted backends by leveraging network-driven execution records that are consistent and auditable.

Strategies compile into the Pelagos Specific Language ([PSL](glossary.md#psl)), a constrained and verifiable domain-specific language built for trading agents.

PSL provides structured compiler feedback and enforces deterministic behavior, reducing LLM hallucination risk without slowing iteration.

Strategies emit standardized intents, and solvers translate them into concrete execution across venues.

Nabu launches with a first-party solver and will expand to support verified solver partners and third-party solver plugins, enabling agent-to-agent composition over time.

Nabu includes a social distribution layer, grounded in strategy reality.

Strategy pages show thesis, risks, simulation method, performance, and version deltas.

The home feed is a livestream of what’s working and what changed: new and trending strategies, major updates, performance shifts, risk events, and the discussions that matter.

Strategy rooms attach conversation to versions and outcomes, keeping collaboration operational instead of noisy.

Leaderboards reward strategies for shipping, adoption, TVL, and real volume each epoch.

Nabu ships first for low-latency DEX and DEX–CEX automation, with expansion to perps, non-EVM, prediction markets, and privacy-focused ecosystems on the roadmap.

