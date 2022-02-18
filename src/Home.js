import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>
      <div className="home__row">
        <Product
          id={"1"}
          title="Rollerblade E2 110 Unisex Adult Fitness Inline Skate, Black"
          price={119.99}
          rating={45}
          image="https://www.rollerblade.com/storage/Product/072204001A1_MACROBLADE_110_3WD_01.jpg"
          prime
          coupon={{ state: true, amount: "10" }}
        />
      </div>
      <div className="home__row">
        <Product
          id={"2"}
          title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
          price={39.0}
          rating={45}
          image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg"
          prime
        />
        <Product
          id={"3"}
          title="Kindle - With a Built-in Front Light - Black - Ad-Supported"
          price={89.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41VZlVs8agL._AC_SY450_.jpg"
          coupon={{ state: true, amount: "25" }}
        />
        <Product
          id={"4"}
          title="Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls)"
          price={29.99}
          rating={5}
          image="https://reparaciondecomputadorascr.com/wp-content/uploads/2021/11/Amazon-Fire-Stick-con-Alexa2.jpg"
          prime
          coupon={{ state: true, amount: "33" }}
        />
      </div>
      <div className="home__row">
        <Product
          id={"5"}
          title="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound"
          price={39.99}
          rating={4}
          image="https://media.bodyandfit.com/i/bodyandfit/gold-standard-100-whey-protein_Image_01?layer0=$PDP$"
        />
        <Product
          id={"6"}
          title="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8"
          price={11.96}
          rating={4}
          prime
          image="https://m.media-amazon.com/images/I/71gtHnQGfQL._AC_SS450_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
