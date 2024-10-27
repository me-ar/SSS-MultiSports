import { Text, Img } from "../components";
import React from "react";

export default function LogoAndAddressSection1() {
    return (
        <>
            <div className="flex items-center self-stretch md:flex-col">
                <Img
                src="images/img_sss_logo_final_02.png" 
                alt="Logo Image"
                className="w-[26%] h-[148px] object-contain md:w-full"
                />
                <div className="flex flex-1 flex-col items-center md:self-stretch md:px-5">
                    <Text
                      size="textxl"
                      as="p"
                      className="sm:text-[26px] md:text-[28px] leading-[45px] text-[30px] mt-[-22px] w-[54%] relative self-end font-normal text-blue_gray-900 md:w-full"
                      >
                        7th Main Road, Dhandeeswaram Nagar, Velachery, Chennai-600042
                      </Text>
                </div>
            </div>
        </>
    );
}