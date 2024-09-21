# 🌐 ZKETH-Circuit 🔒

This repository implements a zkSNARK circuit that proves the knowledge of specific logical inputs. It demonstrates how input values `A = 0` and `B = 1` lead to an output of `0`. This project also includes deploying a verifier contract on the Polygon network to verify the generated proof.

![Circuit Diagram](https://github.com/user-attachments/assets/b2ecc304-5c9e-4ed6-8b19-7ba18bc20612)

## 📜 Description

This **Circom** project is designed to create a **zkSNARK** circuit that proves knowledge of logical inputs and their output. The circuit utilizes logical gates (AND, OR, NOT) to produce an output that can be cryptographically proven and verified on-chain. This implementation is deployed on **Polygon zkEVM (Cardano Testnet/Mumbai Testnet)**.

**Core Features:**
- Use of zkSNARK circuits to prove logical operations.
- On-chain verification using a Solidity verifier contract.
- Compatible with **Polygon zkEVM**, **Sepolia**, or **Mumbai Testnet**.

## 🎥 Video Tutorial

For a detailed video walkthrough, watch the [Loom video](https://www.loom.com/share/652193f33368463abd808c9780b6c9b3?sid=f1fc130e-8320-448a-9aa0-e6d78bb63401).

## 🚀 Prerequisites

Before starting, ensure you have the following tools:

- [MetaMask](https://metamask.io/) wallet extension.
- [Hardhat](https://hardhat.org/) for compiling and deploying contracts.
- [Circom](https://docs.circom.io/) for circuit creation and compilation.
- Visual Studio Code (VS Code) or GitPod for development.

## 🏁 Getting Started

### 1. Cloning the Project

```bash
git clone https://github.com/your-repo/polyproof-zketh-circuit.git
cd polyproof-zketh-circuit
```

### 2. Designing the zkSNARK Circuit

Below is the circuit that checks the multiplication of inputs `A` and `B`, and performs logical operations.

```circom
pragma circom 2.0.0;

template ZKSnarkCircuit () {
   // Signal inputs
   signal input A;
   signal input B;

   // Signals from gates
   signal X;
   signal Y;

   // Final signal output
   signal output Q;

   // Component gates used to create custom circuit
   component And_Gate = AND();
   component Not_Gate = NOT();
   component Or_Gate = OR();
   
   // Circuit logic
   And_Gate.a <== A;
   And_Gate.b <== B;
   X <== And_Gate.out;

   Not_Gate.in <== B;
   Y <== Not_Gate.out;

   Or_Gate.a <== X;
   Or_Gate.b <== Y;
   Q <== Or_Gate.out;
}

// AND gate
template AND() {
    signal input a;
    signal input b;
    signal output out;
    out <== a * b;
}

// NOT gate
template NOT() {
    signal input in;
    signal output out;
    out <== 1 + in - 2*in;
}

// OR gate
template OR() {
    signal input a;
    signal input b;
    signal output out;
    out <== a + b - a * b;
}

component main = ZKSnarkCircuit();
```

### 3. Installing Dependencies

```bash
npm install
```

### 4. Compiling the Circuit

```bash
npx hardhat circom
```

This generates the necessary files, including the `MyCircuitVerifier.sol` contract in the `out` directory.

### 5. Deploying the Contract

To deploy the verifier contract and generate proof:

```bash
npx hardhat run scripts/deploy.ts --network zkEVM
```

This script:
1. Deploys the `MyCircuitVerifier.sol` contract.
2. Generates proof using the circuit intermediaries.
3. Prepares calldata for the verifier.
4. Calls `verifyProof()` on-chain.

## 🗂️ Directory Structure

```
polyproof-zketh-circuit/
├── circuits/
│   ├── MyCircuit/
│   │   ├── circuit.circom
│   │   ├── input.json
│   │   └── out/
│   │       ├── circuit.wasm
│   │       ├── MyCircuit.r1cs
│   │       ├── MyCircuit.vkey
│   │       └── MyCircuit.zkey
├── contracts/
│   └── MyCircuitVerifier.sol
```

## ⚙️ Configuration

### `hardhat.config.ts`

```typescript
circom: {
  inputBasePath: "./circuits",
  ptau: "powersOfTau28_hez_final_12.ptau",
  circuits: JSON.parse(JSON.stringify(circuits))
}
```

### `circuits.config.json`

```json
[
  {
    "name": "MyCircuit",
    "protocol": "groth16",
    "circuit": "MyCircuit/circuit.circom",
    "input": "MyCircuit/input.json",
    "wasm": "MyCircuit/out/circuit.wasm",
    "zkey": "MyCircuit/out/MyCircuit.zkey",
    "vkey": "MyCircuit/out/MyCircuit.vkey",
    "r1cs": "MyCircuit/out/MyCircuit.r1cs",
    "beacon": "0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"
  }
]
```

### Adding a New Circuit

You can easily add a new circuit by running:

```bash
npx hardhat newcircuit --name newcircuit
```

This will autogenerate configurations for the new circuit.

## 📝 Verifying on Polygon zkEVM

### Connect MetaMask to Polygon zkEVM Cardona Testnet:

1. Open MetaMask and click **Add Network**.
2. Enter the following details:
    - **Network Name:** Polygon zkEVM Cardona Testnet
    - **RPC URL:** https://rpc.cardona.zkevm-rpc.com
    - **Chain ID:** 2442
    - **Symbol:** ETH
3. Click **Save**.

### Verify the Contract on PolygonScan

1. Head to [PolygonScan](https://cardona-zkevm.polygonscan.com/).
2. Search for your contract's address.
3. Complete the verification steps.

## 🛠️ Authors

- **Anshu Kumar** - Developer of the project.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE.md) file for more details.

---

### 🎉 Start generating ZK proofs and deploy your verifier now!
