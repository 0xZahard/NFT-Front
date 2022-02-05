import Head from 'next/head'


export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Immortal Inu</title>
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
              <a href="#about" className="text-4xl text-white hover:underline m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:underline m-6">ADOPT!</a>
              <a href="#tiers" className="text-4xl text-white hover:underline m-6">TIERS</a>
              <a href="#team" className="text-4xl text-white hover:underline m-6">Team</a>
              <a href="https://twitter.com/0xKhun" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/gGgshkVWW4" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>

          </div>

        </div>

        <div className="md:w-2/3 w-4/5 " id="home">


          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">Want to Make a generative <br/><span className="text-blau">NFT collection?</span></h1>
                    <br/><p className="text-2xl text-white my-6  montserrat"><span className="text-5xl Poppitandfinch ">You're in </span> <span className="text-purp text-5xl Poppitandfinchsans">luck!</span><br />‍<br /> <span className="text-5xl Poppitandfinch ">To access our <span className="text-blau text-5xl Poppitandfinchsans">tutorial</span></span> <span className="text-span-2 font-bold"></span><br />‍<br /><span className="text-5xl Poppitandfinch ">ADOPT AN INU AND HOP INTO OUR  <a target="_blank" href="https://discord.gg/gGgshkVWW4" className="underline text-purp font-bold">DISCORD</a></span>
                    </p>
                    <br/>

                    <p className="text-3xl Poppitandfinchsans text-white ">Litter Size: <span className="text-blau">10,000</span></p>
                    <p className="text-3xl Poppitandfinchsans text-white ">Adoption Fee: <span className="text-purp">0.05 ETH</span></p>
                    <br/>
                    <br/>
                    <br/>
                    

                   

                    {/* Add a mint countdwon timer
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe> */}

                  </div>
                  <img className="border-4 border-blue-300 p-4" src="images/inu.gif" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau rounded-xl ring-4 text-white hover:text-black p-2 ">ADOPT!</a>


            </div>
            </div>
                <div id="about" className="flex flex-wrap justify-around items-center  mx-6 py-6">

                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-white Poppitandfinchsans text-6xl text-center">what is <span className="text-blau">this?</span></h2>

                    <p className="text-3xl text-white my-6  Poppitandfinchsans">If you have ever wanted to make a <span className="text-purp">generative NFT collection</span>, but don't know how to code you have come to the right place.</p>
                    <p className="text-3xl text-white my-6  Poppitandfinchsans">In essence, generative image NFT collections are variations of the same character, usually an animal, that are often used as profile pictures. </p>
                    <p className="text-3xl text-white my-6  Poppitandfinchsans">Some good examples are <a target="_blank" href="https://boredapeyachtclub.com/" className="underline text-purp font-bold">Bored Ape Yacht Club</a>, or <a target="_blank" href="https://www.pudgypenguins.io" className="underline text-purp font-bold">Pudgy Penguins</a>. While the art styles of these collections can be something as simplistic as pixel art, they pose a technological challenge to those who wish to create their own.</p>
                    <p className="text-3xl text-white my-6  Poppitandfinchsans">The purpose of the Immortal Inu collection is explain how these collections are made in order to <span className="text-blau">give the general public a way create their own without needing to hire a coder.</span></p>
                    <p className="text-3xl text-white my-6  Poppitandfinchsans">The Immortal Inu collection has 2 tiers of membership, both come with their own respective benefits.
                    </p>
                  </div>
                </div>


              <div id="tiers" className="">
                <img src="/images/tiers.png"/>
                </div>
              



              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">Created by</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/0xkhun.png" width="360px" alt="" className="cards-image" /></div>

                    <a href="https://twitter.com/0xKhun" className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau"> @0xKhun</a>
                  </div>


                </div>
                <div id="about" className="flex flex-wrap justify-around items-center  mx-6 py-6">

                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">

                  <a href="terms" className="text-xl text-white my-6  Poppitandfinchsans text-center">Terms & Conditions</a>


                  </div>
                </div>


              </div>

          </div>
    </div>
    )
  }
