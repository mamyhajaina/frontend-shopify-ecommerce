import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";

const Footer = () => {
    return (
        <div className="bg-[#000] text-white">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-[#56d879]">Abonnez-vous</span> à notre newsletter pour recevoir des nouvelles{" "}
            <br />
            des événements et des offres exclusives
        </h1>
        <div>
            <input
                type="email"
                required
                placeholder="Entrez votre adresse e-mail..."
                className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                S'abonner
            </button>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
            <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="Logo"
                style={{ filter: "brightness(0) invert(1)" }}
            />
            <br />
            <p>Nous créons des produits exceptionnels et enrichissants pour vos besoins.</p>
            <div className="flex items-center mt-[15px]">
                <AiFillFacebook size={25} className="cursor-pointer" />
                <AiOutlineTwitter
                    size={25}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                />
                <AiFillInstagram
                    size={25}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                />
                <AiFillYoutube
                    size={25}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                />
            </div>
        </ul>

        <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Entreprise</h1>
            {footerProductLinks.map((link, index) => (
                <li key={index}>
                    <Link
                        className="text-gray-400 hover:text-teal-400 duration-300
                        text-sm cursor-pointer leading-6"
                        to={link.link}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>

        <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Boutique</h1>
            {footercompanyLinks.map((link, index) => (
                <li key={index}>
                    <Link
                        className="text-gray-400 hover:text-teal-400 duration-300
                        text-sm cursor-pointer leading-6"
                        to={link.link}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>

        <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Support</h1>
            {footerSupportLinks.map((link, index) => (
                <li key={index}>
                    <Link
                        className="text-gray-400 hover:text-teal-400 duration-300
                        text-sm cursor-pointer leading-6"
                        to={link.link}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
</div>

    );
};

export default Footer;