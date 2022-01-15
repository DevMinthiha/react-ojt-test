import React from "react";
import Card from "../components/Card";

const Item = ({ name, image }) => {
  return (
    <div>
      <section className="w-full flex justify-center py-10">
        <div className="w-custom">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-5">
              <img src={image} className="w-16 h-auto" alt="" />
              <h1 className="title mb-0">{name}</h1>
            </div>
            <p className="text-gray-500">View More</p>
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <Card textColor={"text-red-600"} />
            <Card textColor={"text-red-600"} />
            <Card textColor={"text-red-600"} />
            <Card textColor={"text-red-600"} />
            <Card textColor={"text-red-600"} />
            <Card textColor={"text-red-600"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Item;
