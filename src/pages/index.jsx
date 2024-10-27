import { Helmet } from "react-helmet";
import {Heading } from "../../components";
import AvailableSpaceSection1 from "./AvailableSpaceSection1";
import LogoAndAddressSection1 from "./LogoAndAddressSection1";
import React from "react";

export default function LandingpagePage(){
    return (
        <>
        <Helmet>
            <title>Multilevel Sports Arena</title>
            <meta
            name="description" 
            content="Discover our Multilevel Sports Arena at 7th Main Road, Dhandeeswaram Nagar, Velachery, Chennai. Ideal for practice, coaching and corporate events. Book your slots today!"
            />
        </Helmet>
        <div className="w-full">
            <div className="sm:gap-[104px] md:gap-[156px] flex flex-col items-center gap-52 bg-white-a700_bf py-4">
                <LogoAndAddressSection1 />
                <div className="max-w-[1154px] mb-[342px] mx-auto ml-auto mr-auto flex w-full flex-row slef-stretch md:px-5 md:pl-5 md:pr-5">
                    <div className="flex w-full flex-col items-start">
                        <Heading
                        size="headingxl"
                        as="h1"
                        className="md:text-[48px] text-[100px] font-montserrat2 font-extrabold uppercase text-blue_gray-900"
                        >
                            Rent the Space 
                        </Heading>
                        <Heading
                            size="headings"
                            as="h2"
                            className="sm:text-[40px] md:text-[46px] text-[50px] mt-[-16px] relative font-montserrat2 font-extrabold lowercase text-blue_gray-900"
                            >
                                for your favourite sport.{""}
                            </Heading>
                    </div>
                </div>
            </div>

            <AvailableSpaceSection1 />
        </div>
    </>
    );
}