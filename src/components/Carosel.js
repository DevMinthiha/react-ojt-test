import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerOne from '../images/WebBanner&AD/Banner1.jpg'
import bannerTwo from '../images/WebBanner&AD/Banner2.jpg'
import bannerThree from '../images/WebBanner&AD/Banner3.jpg'
import Navbar from "../components/Navbar";

const Carosel = () => {
  return (
    <section className="relative">
      <Carousel  autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
        <div>
          <img alt="" className="" src={bannerOne} />
        </div>
        <div>
          <img alt="" src={bannerTwo} />
        </div>
        <div>
          <img alt="" src={bannerThree} />
        </div>
      </Carousel>
      <div className="bg-red-800 md:bg-transparent md:absolute top-0 w-full overflow-hidden">
        <Navbar />
      </div>
    </section>
  );
};

export default Carosel;
