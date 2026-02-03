---
proofedDate: none
title: "Glossary"
content: A shared set of definitions and acronyms to ensure consistent understanding of technical, cryptographic, and system terms used throughout the documentation.
notes: >
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: false
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Glossary

Providing acronyms and definitions.

## A

### Appchain

Application-specific chain. A dedicated blockchain or DAG chain instance focused on a single application or project. Appchains allow developers to tailor consensus parameters, tokenomics, and execution logic to the specific needs of their application, rather than relying on a general-purpose L1 or L2.

### Appchain transaction

A transaction signed by a user and submitted to a specific Appchain’s RPC endpoint to modify or interact with that Appchain’s state.

## C

### CEX

A centralized exchange. A custodial trading venue operated by a company where users trade via accounts and an offchain matching engine or order book.

### Consensus layer

The protocol layer responsible for ordering transactions and achieving agreement among validators on the state of the network. In Pelagos, this is implemented as a Directed Acyclic Graph (DAG) consensus.

## D

### DEX

A decentralized exchange. An onchain, non-custodial venue that enables peer-to-peer swaps via smart contracts or automated market makers.

### DAG (Directed Acyclic Graph)

A data structure used to represent transactions or blocks that are linked but do not form a linear chain. DAG allows multiple events to be processed in parallel, increasing throughput and scalability.

### DKG (Distributed Key Generation)

A protocol by which a group of validators generates the private key shares used for TSS. No single validator knows the complete private key; each holds only a partial share. DKG is periodically re-run for security (e.g., when validator membership changes).

## E

### Encryption

Encryption is the process of converting information or data into a code; it's essential to prevent unauthorized access. Encryption is fundamental to securing data in transit and at rest across networks and systems.

### External transaction

Any final outcome/transaction produced via TSS is then sent out to external L1/L2 networks.

### Epoch

A fixed period of time (or a number of blocks) in which Appchains execute transactions, produce blocks and generate a checkpoint. Once an epoch concludes, validators finalize the resulting checkpoint before moving on to the next epoch.

### Epoch finalization

The process by which validators reach consensus on and commit the state checkpoint for a given epoch, making it immutable and agreed upon by the network.

## F

### Failover

Failover is the capability to automatically switch to a redundant or standby system in the event of a failure, ensuring high availability and business continuity.

## G

### Gas sponsorships

Gas sponsorships will be enabled with [EIP-7702](https://eip7702.io), allowing services to be accessed and claims to be made without the connected wallet paying the gas fee for writing data onchain.

## I

### Info-hash

A cryptographic hash (similar to a BitTorrent “magnet” link) that identifies a chunk of immutable, incremental database (DB) data. It ensures data integrity—any node can fetch a specific DB file from peers, verify it against the hash, and trust that the file has not been tampered with.

## P

### Pelagos

[Pelagos](https://docs.pelagos.network). Pelagos provides a native liquidity unification layer that enables atomic settlement of transactions across multiple blockchains. It's the decentralized execution substrate Nabu depends on: a validator-produced canonical stream of attested events, finality signals, state diffs, and records.

### Proof of Stake

Under [Poof-of-Stake blockchains](https://en.wikipedia.org/wiki/Proof_of_stake) (PoS), staking is the locking of a token to support the blockchain operations. In return for staking your crypto, you may earn more cryptocurrency.

To validate PoS blockchains, validator Nodes must first “stake” set amounts of the native token for the chain to be in a position to validate new transactions and add new blocks.

The stake will be slashed (forefit) if the validator fails to build legitimate blocks. This ensures that only valid data and transactions are added to a blockchain. Validators are rewarded with the native token when they successfully add new blocks.

### PSL

Pelagos Strategy Language, is a constrained, verifiable, Domain-Specific Language (DSL) that gives the LLM fast, objective feedback about what is correct vs. invalid.

## R

### Reactive transaction

A transaction triggered by a control (or governance) contract in response to new data received from external L1/L2 networks.

## S

### Sybil

A Sybil is essentially a copy. While each human individual is unique, Sybils are attempts to create multiple identities.

## T

### TEE

Trusted Execution Environments (TEEs). In Nabu, strategies run inside TEEs — hardware-backed secure enclaves operated by an allowlisted validator set — ensuring deterministic, confidential execution even in a distributed setting. Validators coordinate via Distributed Key Generation (DKG) and Threshold Signature Schemes (TSS) to authorize actions without exposing private inputs.

### TSS

Threshold Signature Schemes (TSS). A cryptographic signing process where multiple validators collectively generate a single signature without revealing their individual secret keys. [Pelagos](https://docs.pelagos.network/) uses TSS to sign external transactions on various L1s, ensuring security through distributed key control and slashing for any malicious usage.

## V

### Validator

A Pelagos open-source node that includes L1/L2 oracles, sequencing consensus, Appchain executions, and TSS signing. A single node consists of a list of L1/L2 clients for DAG events, a DAG node for sequencing, Appchain execution nodes and a TSS signing operator. It can be physically on a single server or distributed as microservices.

### Validator set

The pool of validators authorized to participate in Pelagos' DAG consensus and TSS signing.  A majority (⅔+1 by stake) must sign blocks, checkpoints, and external transactions.
