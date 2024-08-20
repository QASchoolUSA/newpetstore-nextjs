import React from "react"; // Add the import statement for React
import { NavigationMenu, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
    return (
        <NavigationMenu className="p-4 shadow-md bg-black flex items-center text-white">
            <div className="flex space-x-4">
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <NavigationMenuLink href="/shop">Store</NavigationMenuLink>
                <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
            </div>
            <div className="ml-auto">
                <NavigationMenuLink href="/cart">
                    <ShoppingBag />
                </NavigationMenuLink>
            </div>
        </NavigationMenu>
    );
};

export default Navbar;