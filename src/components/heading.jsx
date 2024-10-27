import React from "react";

const sizes = {
    headingxl: "text-[100px] font-extrabold md:text-[48px]", 
    headings:  "text-[50px] font-extrabold md:text-[46px] sm:text-[40px]", 
    headingmd: "text-[75px] font-bold md:text-[48px]",
    headinglg: "text-[80px] font-extrabold md:text-[48px]", 
    headingxs: "text-[40px] font-extrabold md:text-[38px] sm:text-[36px]",
};

 
const Heading = ({ children, className ="", size = "headingxs", as, ...restPros }) =>  {
     const Component = as || "h6";

     return (
        <Component  className={`text-black-900 font-montserrat1 ${className} ${sizes[size]}`} {...restPros}>
            {children}
        </Component>
    );
};

export { Heading };