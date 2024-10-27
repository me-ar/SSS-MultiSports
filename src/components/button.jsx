import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[38px]",
};
const variants = {
    fill: {
        green_400: "bg-green-400 text-white-a700",
    },
    outline: {
        green_400: "border-green-400 border border-solid text-green-400",
        },
    };
    const sizes = {
        sm: "h-[78px] px-[34px] text-[45px]",
        xs: "h-[56px] px-[34px] text-[30px]",
    };

    const Button = ({
        children,
        className = "",
        leftIcon,
        rightIcon,
        shape,
        variant = "fill",
        size ="sm",
        color = "green_400",
        ...restProps
    })  => {
        return(
            <button
            className={`${className} flex flex-row items-center justify-center self center text center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants [variant]?.[color]}`}
            {...restProps}
            >
                {!!leftIcon && leftIcon}
                {children}
                {!!rightIcon && rightIcon}
            </button>
        );
    };

    Button.PropTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        leftIcon: PropTypes.node,
        rightIcon: PropTypes.node,
        shape: PropTypes.oneOf(["round"]),
        size: PropTypes.oneOf(["sm", "xs"]),
        variant: PropTypes.oneOf(["fill", "outline"]),
        color: PropTypes.oneOf(["green_400"]),
    };

    export { Button };