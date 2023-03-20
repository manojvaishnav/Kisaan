import React, { useEffect } from "react";
import "./Content.css";
import Farmer from './Farmer/Farmer';
import Landlord from './Landlord/Landlord';
import Merchant from './Merchant/Merchant';

const Content = (props) => {
  useEffect(()=>{
    document.title=props.title;
  })
  return (
    <>
      <Farmer image="https://i.pinimg.com/736x/0a/1f/3d/0a1f3df5903d3dfeae321e4969ae0bcb.jpg" />
      <Landlord image="https://img.freepik.com/free-photo/land-plot-with-nature-landscape-location-pin_23-2149937913.jpg?w=900&t=st=1679250347~exp=1679250947~hmac=bddab5096643c5d19e8f3cfc32c799d0952794115d46d5b6edb560ecf8c7508f"/>
      <Merchant image="https://socialassurance.com/wp-content/uploads/2020/09/FMLogo-Gr-CMYK-SQ-2019-1.png"/>
    </>
  );
};

export default Content;
