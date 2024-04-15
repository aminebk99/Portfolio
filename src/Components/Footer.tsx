import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full relative">
      <div className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      <div className="md:flex gap-20 my-10 sm:grid-cols-2 sm:grid sm:gap-x-20 sm:gap-y-5">
        <Link
          to="/Home"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          About
        </Link>
        <Link
          to="/skills"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Skills
        </Link>
        <Link
          to="/certificate"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Certificate
        </Link>
        <Link
          to="/"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Projects
        </Link>
      </div>
      <div className="flex gap-20">
        <div className="lg:flex lg:flex-1 lg:justify-end sm:flex mb-10">
          <a
            href="https://github.com/aminebk99"
            className="text-xl font-semibold leading-6 text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ marginRight: "0.5rem" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/amine-bazaou/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold leading-6 text-gray-900"
          >
            <FaLinkedin style={{ marginRight: "0.5rem" }} />
          </a>
        </div>
      </div>
      <div className="mb-10">
        <span>Designed and built by <span className="font-semibold">MOHAMED AMINE BAZAOU</span></span>
      </div>
    </footer>
  );
};

export default Footer;
