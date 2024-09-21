/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Verifier, VerifierInterface } from "../Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506112d9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806343753b4d14610030575b600080fd5b61018f600480360361012081101561004757600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156100fc578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050815260200190600101906100a8565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080602001906001806020026040519081016040528092919082600160200280828437600081840152601f19601f82011690508083019250505050505091929192905050506101a9565b604051808215151515815260200191505060405180910390f35b60006101b3611161565b6040518060400160405280876000600281106101cb57fe5b60200201518152602001876001600281106101e257fe5b60200201518152508160000181905250604051806040016040528060405180604001604052808860006002811061021557fe5b602002015160006002811061022657fe5b602002015181526020018860006002811061023d57fe5b602002015160016002811061024e57fe5b6020020151815250815260200160405180604001604052808860016002811061027357fe5b602002015160006002811061028457fe5b602002015181526020018860016002811061029b57fe5b60200201516001600281106102ac57fe5b602002015181525081525081602001819052506040518060400160405280856000600281106102d757fe5b60200201518152602001856001600281106102ee57fe5b602002015181525081604001819052506060600167ffffffffffffffff8111801561031857600080fd5b506040519080825280602002602001820160405280156103475781602001602082028036833780820191505090505b50905060008090505b600181101561038f5784816001811061036557fe5b602002015182828151811061037657fe5b6020026020010181815250508080600101915050610350565b50600061039c82846103bc565b14156103ad576001925050506103b4565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190506103ea611194565b6103f26105f0565b9050806080015151600186510114610472576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76657269666965722d6261642d696e707574000000000000000000000000000081525060200191505060405180910390fd5b61047a6111db565b6040518060400160405280600081526020016000815250905060008090505b865181101561057957838782815181106104af57fe5b60200260200101511061052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640081525060200191505060405180910390fd5b61056a826105658560800151600185018151811061054457fe5b60200260200101518a858151811061055857fe5b60200260200101516109e4565b610adf565b91508080600101915050610499565b5061059c81836080015160008151811061058f57fe5b6020026020010151610adf565b90506105d26105ae8660000151610bf9565b8660200151846000015185602001518587604001518b604001518960600151610c93565b6105e257600193505050506105ea565b600093505050505b92915050565b6105f8611194565b60405180604001604052807f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281526020017f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19268152508160000181905250604051806040016040528060405180604001604052807f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c81526020017f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab815250815260200160405180604001604052807f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781526020017f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec88152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f092c4702d4819aa3e59e1f2d843889365cfabf7b781b8d71001a7ddc5904522781526020017f0b37a7113f0e2b9aadfaa3d5bf38772e835ad6132d566625118d5bf92a83022b815250815260200160405180604001604052807f1be3448fd7ddbe0b1415b942e13e2f831149f7a260cea20371f8c8086c565fa681526020017f0c6ff5d29e95825fb43cfdba27d304af7fa1f55727cb947cbfe6fdbb8d3caa328152508152508160600181905250600267ffffffffffffffff811180156108bc57600080fd5b506040519080825280602002602001820160405280156108f657816020015b6108e36111db565b8152602001906001900390816108db5790505b50816080018190525060405180604001604052807f110d1eb064ce4b1a4c55783c15ee49f55b6e6086cf288e23bbdef68effff642781526020017f1b958a5c1fa37b83ef8b8ddca118e14d9966aacfc2320b75186e42614d46ce39815250816080015160008151811061096557fe5b602002602001018190525060405180604001604052807f2ce58c07d3f8f196b0d2e8c472a8669b3fef13b3d2499486b39d53d094ec705181526020017f14c94e074c6c94ac54ba640cf6104b3125cf8d5c43641c4db23ad1943f46ef1781525081608001516001815181106109d657fe5b602002602001018190525090565b6109ec6111db565b6109f46111f5565b836000015181600060038110610a0657fe5b602002018181525050836020015181600160038110610a2157fe5b6020020181815250508281600260038110610a3857fe5b602002018181525050600060608360808460076107d05a03fa90508060008114610a6157610a63565bfe5b5080610ad7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6d756c2d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b610ae76111db565b610aef611217565b836000015181600060048110610b0157fe5b602002018181525050836020015181600160048110610b1c57fe5b602002018181525050826000015181600260048110610b3757fe5b602002018181525050826020015181600360048110610b5257fe5b602002018181525050600060608360c08460066107d05a03fa90508060008114610b7b57610b7d565bfe5b5080610bf1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6164642d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b610c016111db565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610c3e575060008360200151145b15610c62576040518060400160405280600081526020016000815250915050610c8e565b60405180604001604052808460000151815260200182856020015181610c8457fe5b0683038152509150505b919050565b60006060600467ffffffffffffffff81118015610caf57600080fd5b50604051908082528060200260200182016040528015610ce957816020015b610cd66111db565b815260200190600190039081610cce5790505b5090506060600467ffffffffffffffff81118015610d0657600080fd5b50604051908082528060200260200182016040528015610d4057816020015b610d2d611239565b815260200190600190039081610d255790505b5090508a82600081518110610d5157fe5b60200260200101819052508882600181518110610d6a57fe5b60200260200101819052508682600281518110610d8357fe5b60200260200101819052508482600381518110610d9c57fe5b60200260200101819052508981600081518110610db557fe5b60200260200101819052508781600181518110610dce57fe5b60200260200101819052508581600281518110610de757fe5b60200260200101819052508381600381518110610e0057fe5b6020026020010181905250610e158282610e25565b9250505098975050505050505050565b60008151835114610e9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f70616972696e672d6c656e677468732d6661696c65640000000000000000000081525060200191505060405180910390fd5b600083519050600060068202905060608167ffffffffffffffff81118015610ec557600080fd5b50604051908082528060200260200182016040528015610ef45781602001602082028036833780820191505090505b50905060008090505b8381101561109a57868181518110610f1157fe5b602002602001015160000151826000600684020181518110610f2f57fe5b602002602001018181525050868181518110610f4757fe5b602002602001015160200151826001600684020181518110610f6557fe5b602002602001018181525050858181518110610f7d57fe5b602002602001015160000151600060028110610f9557fe5b6020020151826002600684020181518110610fac57fe5b602002602001018181525050858181518110610fc457fe5b602002602001015160000151600160028110610fdc57fe5b6020020151826003600684020181518110610ff357fe5b60200260200101818152505085818151811061100b57fe5b60200260200101516020015160006002811061102357fe5b602002015182600460068402018151811061103a57fe5b60200260200101818152505085818151811061105257fe5b60200260200101516020015160016002811061106a57fe5b602002015182600560068402018151811061108157fe5b6020026020010181815250508080600101915050610efd565b506110a361125f565b6000602082602086026020860160086107d05a03fa905080600081146110c8576110ca565bfe5b508061113e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f70616972696e672d6f70636f64652d6661696c6564000000000000000000000081525060200191505060405180910390fd5b60008260006001811061114d57fe5b602002015114159550505050505092915050565b60405180606001604052806111746111db565b8152602001611181611239565b815260200161118e6111db565b81525090565b6040518060a001604052806111a76111db565b81526020016111b4611239565b81526020016111c1611239565b81526020016111ce611239565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b604051806040016040528061124c611281565b8152602001611259611281565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b604051806040016040528060029060208202803683378082019150509050509056fea2646970667358221220b0f7e8b0973aa4869f618defcfbdfd4f10722dfdd2acda058974106a95d28ec264736f6c634300060b0033";

type VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier__factory extends ContractFactory {
  constructor(...args: VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  override connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new utils.Interface(_abi) as VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}
