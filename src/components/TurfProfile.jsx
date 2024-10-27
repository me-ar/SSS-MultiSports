import { Text, Img } from "./..";
import React from "react";

export default function TurfProfile({ turfImage = "images/img_ino_football_sharp.svg", turfText = "Turf", ...props}){
    return (
        <div
        {...props}
        className={`&{props.className} flex flex-col items-end w-[16%] md:w-full gap-6 px-[46px] py-[52px] md:p-5 border-light_green-a200 border border-solid bg-white-a700 shadow-xs rounded-[14px]`}
        >
            <Img src={turfImage} alt="Turf Image" className="rounded-[14px] h-[46px]" />
            <Text as="p" className="text-[25px] font-normal text-black-900">
                {turfText}
            </Text>
        </div>
    );
}