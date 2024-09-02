/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "sans-szerif"],
            },
            colors: {
                darkSlateGrey: "hsl(234, 29%, 20%)",
                charcoalGrey: "hsl(235, 18%, 26%)",
                grey: "hsl(231, 7%, 60%)",
                tomato: "hsl(4, 100%, 67%)",
                orange: "rgba(255, 94,89,1)",
            },
        },
    },
    plugins: [],
    safelist: ["bg-tomato", "border-tomato", "bg-opacity-20", "text-tomato"],
};
