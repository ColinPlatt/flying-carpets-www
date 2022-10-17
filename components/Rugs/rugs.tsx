
import { 
    useAccount,
    useContractRead, 
    erc721ABI 
} from 'wagmi';
import {
    RainbowKitProvider,
    connectorsForWallets,
  } from '@rainbow-me/rainbowkit';

import { CONSTANT_RUGS_NFT } from '../../config';
import rugsABI from '../../abis/rugs.abi.json'

export function getRugsBalance(address: string | undefined) {  

    const {data: balance, isError, isLoading} = useContractRead({
        addressOrName: CONSTANT_RUGS_NFT,
        args: [address],
        contractInterface: rugsABI,
        functionName: 'balanceOf',
    })

    //console.log(balance);

    return balance
}