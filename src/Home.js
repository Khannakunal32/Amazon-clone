import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            title="This Eric Ries best seller is primarily an elaboration of his famous business concept known as The Lean Startup. "
            price={39.98}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={4}
          />
          <Product
            title="The All New OnePlus 9 R, Level Up -comes with Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU ."
            price={99.98}
            image="https://images-eu.ssl-images-amazon.com/images/I/41733yAnlzL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            title="Razer BlackWidow Tournament Ed Chroma V2 Mechanical Gaming KB RZ03-02190800-R3M1"
            price={87.23}
            image="https://m.media-amazon.com/images/I/41ugsro56nL._AC_SR320,320_.jpg"
            rating={5}
          />

          <Product
            title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
            image="https://m.media-amazon.com/images/I/71C9mkSFYVS._AC_UY327_QL65_.jpg"
            price={45.21}
            rating={3}
          />
          <Product
            title="Apple AirPods Pro - Assembled in India, desined in USA"
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_QL65_.jpg"
            rating={4}
            price={88.15}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung 32 Inch UHD Sleek Curved Monitor with Three Side Bezel Less & 1 Billion Colors - LU32R590CWWXXL "
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price={103.88}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// image home src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._CB663481141_.jpg"
