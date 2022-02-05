import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_inus, set_how_many_inus] = useState(1)

  const [inuContract, setInuContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [inuPrice, setInuPrice] = useState(0)

  useEffect( async() => {

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);

    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const inuContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setInuContract(inuContract)

    const salebool = await inuContract.methods.saleIsActive().call()
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await inuContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const inuPrice = await inuContract.methods.inuPrice().call()
    setInuPrice(inuPrice)

  }

  async function mintInu(how_many_inus) {
    if (inuContract) {

      const price = Number(inuPrice)  * how_many_inus

      const gasAmount = await inuContract.methods.mintInu(how_many_inus).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      inuContract.methods
            .mintInu(how_many_inus)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })

    } else {
        console.log("Wallet not connected")
    }

  };





  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
      <link rel="icon" href="/images/favicon.png" />
        <meta property="og:title" content="Immortal Inu" key="ogtitle" />
        <meta property="og:description" content="Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://immortalinu.com/" key="ogurl"/>
        <meta property="og:image" content="https://immortalinu.com/images/logo.png" key="ogimage"/>
        <meta property="og:site_name" content="https://immortalinu.com/" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="https://immortalinu.com/" key="twdomain" />
        <meta property="twitter:url" content="https://immortalinu.com/" key="twurl" />
        <meta name="twitter:title" content="Immortal Inu's" key="twtitle" />
        <meta name="twitter:description" content="Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT." key="twdesc" />
        <meta name="twitter:image" content="https://immortalinu.com/images/logo.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/logo.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/#about" className="text-4xl text-white hover:underline m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:underline m-6">Adopt!</a>
              <a href="/#tiers" className="text-4xl text-white hover:underline m-6">Teirs</a>
              <a href="/#team" className="text-4xl text-white hover:underline m-6">Team</a>
              <a href="https://twitter.com/0xKhun" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/gGgshkVWW4" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>

          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">


          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL INU'S ADOPTED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">ADOPT</span>

                  <input
                                      type="number"
                                      min="1"
                                      max="20"
                                      value={how_many_inus}
                                      onChange={ e => set_how_many_inus(e.target.value) }
                                      name=""
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />

                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">INU'S!</span>

                </div>
                {saleStarted ?
                <button onClick={() => mintInu(how_many_inus)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">adopt {how_many_inus} inu's for {(inuPrice * how_many_inus) / (10 ** 18)} ETH + GAS</button>
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>

              }

            </div>
            </div>

          </div>
    </div>
    )
  }
