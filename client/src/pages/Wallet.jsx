import React from 'react'
import {Web3} from 'web3'
import ABI from './ABI.json'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'

const Wallet = ({saveState}) => {
    const navigate = useNavigate()
    const connectWallet = async() =>{
        try{
            const web3 = new Web3(window.ethereum);
            const account = await window.ethereum.request({
                method:"eth_requestAccounts"
            })
            const contractAddress = "0x0D85F4E6016862942CB91c875A8Aa131ddDAdfce";
            const contract = new web3.eth.Contract(ABI, contractAddress);
            saveState({web3:web3,contract:contract,account:account[0]})
            navigate("/view-task")
            console.log(contract);

        }catch(err){

        }

    }

  return (
    <>
    <Navigation />
    <>
        <div className="wallet_header ">
          <span>WELCOME TO</span> <p>TODO 3.0</p>
        </div>
        <div className="connect_wallet_section todo_btn">
          <p> Please connect metamask wallet to access the app </p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      </>
    </>
  )
}

export default Wallet