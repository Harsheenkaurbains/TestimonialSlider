import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Card = (props) => {
    let review = props.review;

    return (
        <div className="bg-white flex flex-col md:relative ">
 
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-2[5]"></img>

                <div className="w-[149px] h-[140px] bg-violet-500 top-[-6px] rounded-full absolute z-[-20] left-[10px]"></div>
            </div>

            <div className="text-center mt-7 ">
                <p className="font-bold text-2xl capitalize tracking-wider">
                    {review.name}
                </p>
                <p className="text-violet-300 uppercase text-sm ">
                    {review.job}
                </p>
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <RiDoubleQuotesL />

            </div>

            <div className="text-center mt-4 text-slate-400 ">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <RiDoubleQuotesR  />
            </div>
          


        </div>

    )
}
export default Card;