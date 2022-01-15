import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollTop = () => {
    const scrollTop = () => window.scrollTo(0, 0);
  return <FaArrowAltCircleUp onClick={scrollTop} className="text-4xl fixed bottom-10 right-3" />;
};

export default ScrollTop;
