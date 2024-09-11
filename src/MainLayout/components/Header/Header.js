import React from "react";
import Divider from "@mui/material/Divider";

const Header = () => {
    return (
        <div className="w-full text-center">
            <header className="font-semibold text-[3.5rem]">Product Order Form</header>
            <Divider>place an order</Divider>
        </div>
    );
};

export default Header;
