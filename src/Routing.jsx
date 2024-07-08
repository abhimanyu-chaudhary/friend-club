import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/frontpage/HomePage";
import MemoriesPage from "./components/memories/MemoriesPage";
import AboutUsPage from "./components/aboutpage/AboutUsPage";
import ContactUsPage from "./components/contact/ContactUsPage";
import MeetUpPage from "./components/meetup/MeetUpPage";
import Button from "./components/frontpage/Button";
import Logo from './assets/LOGO.png';
import Login from "./components/login/Login";

function Routing() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-5 border-b-2 border-slate-950">
                {/* <h1 className="w-[20%] text-xl font-bold">FRIENDS CLUB</h1> */}
                <img className="w-[15%] mr-28" src={Logo} alt="" />
                <div className="w-[70%] flex gap-14">
                    {[
                        { title: "Home", link: "/" },
                        { title: "About Us", link: "/about-us" },
                        { title: "Memories", link: "/memories" },
                        { title: "Meet Up", link: "/meet-up" },
                        { title: "Contact Us", link: "/contact-us" },
                    ].map((elem, index) => (
                        <Link to={elem.link} key={index}>
                            <h1 className="px-2 py-1 hover:bg-orange-300 rounded-md">{elem.title}</h1>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-3">
                    <Button title="Log In" className="w-[10%]" />
                    <Button title="Sign Up" className="w-[10%]" />
                </div>
            </div>
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/memories" element={<MemoriesPage />} />
                <Route path="/meet-up" element={<MeetUpPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
        </>
    );
}

export default Routing;
