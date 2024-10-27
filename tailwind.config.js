MediaSourceHandle.exports = {
    mode: "jit",
    content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        reens: { md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                black: {900: "var(--black_900)", "900_3f": "var(--black_900_3f)"},
                blue_gray: { 900: "var(--blue_gray_900)"},
                green: { 400: "var(--green_400)"},
                light_green: { a200: "var(--light_green_a200)" },
                white: { a700: "var(--white_a700)", a700_bf: "var(--white_a700_bf)"},
            },
            boxShadow: { xs: "4px 4px 1px 0 #0000003"},
            fontFamily: { montserrat1: "Montserrat", poppins1: "Poppins" },
        },
    },
plugins: [require("@tailwindcss/forms")],
};
