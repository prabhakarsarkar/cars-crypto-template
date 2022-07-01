import React from "react";
import CarCard from "./CarCard";

const LuxuryRental = () => {
  const carList = [
    {
      image: "/icons/car1.png",
      price: "12,12,342",
    },
    {
        image: "/icons/car2.png",
      price: "30,34,124",
    },
    {
        image: "/icons/car3.png",
      price: "31,34,342",
    },
    
  ];
  return (
    <main className="flex">
      <div className="luxury-container card-bg card-rounded">
        <div className="card-header">
          <h4 className="text-xl">Lorem ipsum</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <hr />
        <div className="car-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {
            carList&&carList.length>0&&carList.map((car,index)=>(
                <CarCard carImageUrl={car.image} price={car.price}/>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default LuxuryRental;
