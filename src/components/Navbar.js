import { useState, useEffect } from "react";
//import Logo from '../images/logo1.svg';//black
import Logo from '../images/logo2.svg';//orange
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, db } from "../pages/firebase";
import { signOut } from "firebase/auth";
export default function Example() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        signOut(auth);
        navigate("/");
    }
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/ShipCreate" className="flex items-center">
                    Shipment Creation
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/ShipTrack" className="flex items-center">
                    Shipment Tracking
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/Contact" className="flex items-center">
                    Contact Us
                </Link>

            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/PDFViewer" className="flex items-center">
                    Report
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="https://github.com/Shreyachaudhary123" target="_blank" className="flex items-center">
                    About Me 🥰
                </a>
            </Typography>

            {/*
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/Account" className="flex items-center">
                    Account
                </Link>
        </Typography>
    */}
        </ul >
    );
    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to="/Landing">
                    <img
                        src={Logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="logo"
                    >
                    </img>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Log Out</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={handleLogoutClick}>
                        <span>Log Out</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}