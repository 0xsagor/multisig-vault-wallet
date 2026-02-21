# Multi-Sig Vault Wallet

A Multi-Signature (Multi-Sig) wallet is a digital wallet that operates with a set of rules requiring more than one private key to sign and authorize a crypto transaction. This repository contains a clean, production-ready Solidity implementation of a $M$-of-$N$ vault.

## Core Features
* **Threshold Authorization:** Transactions only execute if the required number of confirmations ($M$) is met.
* **Owner Management:** Define a list of authorized wallet addresses ($N$) during deployment.
* **Transaction Queue:** Propose, view, and confirm transactions before they are sent to the blockchain.
* **Security:** Prevents single-point-of-failure risks associated with individual private keys.



## Technical Flow
1. **Submit:** Any owner can submit a transaction proposal.
2. **Confirm:** Other owners review and sign (confirm) the proposal.
3. **Execute:** Once the threshold is reached, any owner can trigger the final execution.

## Deployment
1. Install OpenZeppelin: `npm install @openzeppelin/contracts`
2. Configure `owners` array and `numConfirmationsRequired` in your deploy script.
3. Deploy to any EVM-compatible network.

## License
MIT
