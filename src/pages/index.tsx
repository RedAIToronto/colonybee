/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Component } from "react";
import Logo from "../components/Logo";
import MainBg from "../components/MainBg";
import MintBtn from "../components/MintBtn";
import Navbar from "../components/Navbar";
import Loading from "./loading";

const Home: NextPage = () => {

  const [isModal, setIsModal] = useState(false);


  const [fadeState, setFadeState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeState(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [aboutModalState, setAboutModalState] = useState(false);

  const handleAboutModalOpen = () => {
    setAboutModalState(true);
  }
  const handleAboutModalClose = () => {
    setAboutModalState(false);
  }


  return (
    <>
      <Loading />
      <div className={`absolute w-full h-screen bg-white-90 z-[9999999] transition-all ${aboutModalState ? 'top-[0]' : 'top-[5000px]'}`}>
        <a onClick={handleAboutModalClose} className="w-full h-screen bg-black-90 cursor-pointer flex justify-center items-center">
          <div className="block w-full h-screen items-center ">
            <p className="w-full h-[10%] text-[#856BC2] text-center about-title">ABOUT US</p>
            <div className="flex h-[90%] items-center">
              <div>
                <p className="about-p">
                  Welcome to Colony, a pioneering force in the Web3 space. At Colony, we're not just building a platform; we're cultivating a community. With an imminent launch on Injective, we're poised to make a significant impact.
                </p>
                <p className="about-p">
                  Our journey has already garnered recognition, as evidenced by our approved status for the launchpad on Protocol Talis. This milestone is just the beginning of our adventure in decentralization and blockchain innovation.
                </p>
                <p className="about-p">
                  Stay tuned for the unveiling of our comprehensive roadmap, a testament to our commitment and vision for the future. Colony is more than a project; it's a movement. Join us at ColonyBees (@ColonyBees) as we embark on this exciting journey. The future is coming soon on Injective, and we can't wait to share it with you!
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className={`relative flex-col w-full h-screen items-center transition-all  duration-700  ${fadeState ? 'flex' : 'hide'}`}>
        <MainBg />
        <Navbar />
        <div className=" absolute w-full h-[50%] items-center flex">
          <div className="absolute top-0">
            <img className="xl:w-[250px] lg:w-[250px] xl:block ml-[200px] hidden h-[20vh]" src="img/btn/mint-vector.png" alt="" />
          </div>


          <div className="absolute left-0 bottom-0 w-full h-full">
            <img className="sm:w-[130px] absolute sm:block xl:hidden hidden top-[40%] h-auto" src="img/btn/mint-vector-2.png" alt="" />
          </div>

          <div className="absolute right-0 bottom-0 w-full h-full">
            <img className="w-[70px] sm:opacity-0 opacity-100 absolute top-[40%] h-auto" src="img/btn/mint-vector-3.png" alt="" />
          </div>


          <div className="absolute right-0 bottom-0 w-full h-full">
            <img className="xl:w-[120px] lg:w-[120px] xl:block hidden absolute bottom-0 h-[20vh] right-[60px]" src="img/btn/about-vector.png" alt="" />
          </div>

          <div className="absolute right-0 bottom-0 w-full h-full">
            <img className="md:w-[116px] sm:block xl:hidden top-[50%] hidden absolute h-auto right-0" src="img/btn/about-vector-2.png" alt="" />
          </div>

          <div className="absolute right-0 bottom-0 w-full h-full">
            <img className="w-[70px] sm:opacity-0 opacity-100 top-[50%] right-0 absolute h-auto" src="img/btn/about-vector-3.png" alt="" />
          </div>
          {/* <MintBtn /> */}


          <div className="relative mr-auto ml-5 flex">
            <Link href={"/mint"}>
              <a className="xl:w-[200px] lg:w-[200px] md:w-[150px] sm:w-[150px] w-[100px] h-auto ml-5 flex ease-in-out hover:translate-y-5 hover:scale-110 hover:bg-indigo-500 duration-300 z-40">
                <img src="img/btn/mint.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="relative ml-auto mr-5 flex">
            <a className="xl:w-[200px] lg:w-[200px] md:w-[150px] sm:w-[150px] w-[100px] h-auto ml-auto mr-5 flex ease-in-out hover:translate-y-5 hover:scale-110 hover:bg-indigo-500 duration-300 z-40 cursor-pointer" onClick={handleAboutModalOpen}>
              <img src="img/btn/about.png" alt="" />
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
