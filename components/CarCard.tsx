import React from "react";

const CarCard = (props:any) => {
  const {carImageUrl,price}=props
  console.log(props,'porsadafdsf',carImageUrl);
  
  return (
    <div className="relative card-cont  ">
      <div className="car_card_image absolute top-0  w-100 flex justify-center">
        <img src={`${carImageUrl}` || "/icons/Star.svg"} alt="" />
      </div>
      <div className="car_card_ractangle rounded-lg absolute bottom-0">
        <div className="absolute bottom-0">
          <div className="px-4 relative pb-4 ">
            <img src="/icons/Rectangle.png" alt="" />
            <div className="absolute  flex items-center w-100 justify-center " style={{bottom:"34%",left:"20%"}}>
              <img
                src="/icons/Star.svg"
                className="pr-2"
                alt="icon"
                width={40}
                height={40}
              />
              <div className=" w-100 flex-row items-center">
              <span className="text-3xl font-bold text-yellow-300">{price}</span> <span className="text-gray-300"> / Day</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center px-4 my-4 ">
            <button className="rounded px-4 py-2 yt-btn text-black font-bold">
              Continue
            </button>
          </div>
          <br />
        </div>
     
      </div>
    </div>
  );
};

export default CarCard;
