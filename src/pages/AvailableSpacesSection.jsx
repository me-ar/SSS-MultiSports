import { Heading, Button } from "../../components";
import TurfProfile from "../../components/TurfProfile";  
import React, { Suspense } from "react";  

const sportsFacilitiesList1 = [ 
    { turfImage: "images/img_ion_football_sharp.svg", turfText: "Turf" },
    { turfImage: "images/img_mdi_cricket.svg", turfText: "Cricket Nets" },  
    { turfImage: "images/img_upload.svg", turfText: "Table Tennis" },  
    { turfImage: "images/img_globe.svg", turfText: "Badminton" },
    { turfImage: "images/img_lock.svg", turfText: "Pickle Ball" },  
    { turfImage: "images/img_thumbs_up.svg", turfText: "Party Hall" },
];

export default function AvailableSpacesSection1() {
    return(
        <>
            <div>
                <div className="py-[90px] pl-[102px] flex flex-col items-start overflow-x-scroll bg-white-a700 pr-14 md:p-5">
                    <Heading size="headingmd" as="h2" className="md:text-[48px] text-[75px] w-[682px] font-bold text-black-900">
                        Available Spaces
                    </Heading>
                    <div className="gap-[42px] mr-[148px] w-[1086px] mt-14 flex md:mr-0 md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {sportsFacilitiesList1.map((d, index) => (
                                <TurfProfile {...d} key={"landingList1" + index} />
                            ))}
                        </Suspense>
                    </div>
                    <Button shape="round" className="rounded-[38px] min-w-[402px] px-[34px] mt-28 font-bold sm:px-5">
                        Book Now
                    </Button>
                    <Button
                        size="xs"
                        variant="outline"
                        className="rounded-[28px] min-w-[340px] px-[33px] mb-11 mt-10 !border font-semibold sm:px-5"
                    >
                        Bulk / Corporate
                    </Button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 overflow-x-scroll bg-white-a700_bf py-48 pl-36 pr-14 md:p-5">
                    <div className="w-[1150px] flex flex-col items-start gap-2">
                        <Heading size="headinglg" 
                        as="h2" 
                        className="md:text-[48px] text-[80px] font-montserrat1 font-extrabold uppercase text-black-900"
                        >
                            About Us 
                        </Heading>
                        <div className="border-[0.75px] w-[40%] h-[1.5px] border-solid border-black-900 bg-black-900"  />                      
                    </div>
                    <Heading
                        as="3"
                        className="sm:text-[36px] md:text-[38px] leading-[48px] text-[40px] w-[1002px] mb-1 font-montserrat1 font-normal capitalize text-black-900"
                    >
                        <span>We&nbsp;</span>
                        <span className="lowercase">
                            provide a multilevel space for various sports to practise and achieve your goals.&nbsp;
                        </span>
                        <span>We&nbsp;</span>
                        <span>offer coaching and slot based space for the sport of your choice.</span>
                        <span>&nbsp;We&nbsp;</span>
                        <span>
                        assure you a quality and valuable space for your practise and provide offers on special occasions.
                        </span>
                    </Heading>                        
                </div>
            </div>
        </>
    );
}