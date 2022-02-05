import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traits.json";

const infuraAddress = INFURA_ADDRESS

const inuApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const inuContract = new web3infura.eth.Contract(ABI, ADDRESS)



  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
//   const totalSupply = await inuContract.methods.totalSupply().call();
//   console.log(totalSupply)



// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
//   if(parseInt(query) < totalSupply) {
  const totalInus = 10000;
  if(parseInt(query) < totalInus) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await inuContract.methods.inuNames(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`



    const signatures = [137,883,1327,1781,2528,2763,3833,5568,5858,6585,6812,7154,8412]
    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if ( signatures.includes( parseInt( query ) ) ) {

      metadata = {
        "name": tokenName,
        "description": "Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT. ",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.immortalinu.com/api",
        "attributes": [
          {
            "trait_type": "Signature Series",
            "value": trait["Signature Series"]
          }
        ]
      }
      // console.log(metadata)
    } else {
    // GENERAL INU METADATA
      metadata = {
        "name": tokenName,
        "description": "Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.immortalinu.com/api",
        "attributes": [
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "Bandanas",
              "value": trait["Bandanas"]
            },
            {
              "trait_type": "Inus",
              "value": trait["Inus"]
            },
            {
              "trait_type": "Mouth",
              "value": trait["Mouth"]
            },
            {
              "trait_type": "Noses",
              "value": trait["Noses"]
            },
            {
              "trait_type": "Eyes",
              "value": trait["Eyes"]
            },
        ]
      }

      // console.log(metadata)

    }

    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The inu you requested is out of range"})

  }


  // this is after the reveal


}

export default inuApi
