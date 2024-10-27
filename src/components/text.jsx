import React from "react";
 const sizes = {
     textxs: "text-[15px] font-normal not-italic", 
     textxl: "text-[30px] font-normal not-italic md:text-[28px] sm:text-[26px]", 
     textlg: "text-[25px] font-normal -italic md:text-[23px] sm:text-[21px]", 
     textmd: "text-[18px] font-normal", 
     texts: "text-[16px] font-normal",
 }; 
     
     
const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
     const Component = as || "p"; 
     
     return (
        <Component className={`text-blue_gray-900 fot-poppins1 ${className} ${sizes[size]}`}  {...restProps}>
            {children}
        </Component>
    );
};

export { Text };