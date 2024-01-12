import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import MintBg from "../components/MintBg";
import BackToHomeBtn from "../components/BackToHomeBtn";
import Confetti from "../components/Confetti";
import HoneyBar from "../components/HoneyBar";

function Mint() {

  const clickSound1 = useRef(null);
  const clickSound2 = useRef(null);
  const mintSound1 = useRef(null);

  const [titleText, setTitleText] = useState('COMING SOON');
  const [ethAmount, setEthAmount] = useState(0);
  const [currentEthAmount, setCurrentEthAmount] = useState(0);
  const [mute, setMute] = useState(true);
  const [nftCardLists, setNftCardLists] = useState(initialNftCardLists);
  const [buttonText, setButtonText] = useState("Select a Comb");
  const [confetti, setConfetti] = useState(false);

  const [mintBtnState, setMintBtnState] = useState(false);

  const [btn1State, setBtn1State] = useState(0);
  const [btn2State, setBtn2State] = useState(0);
  const [btn3State, setBtn3State] = useState(0);
  const [btn4State, setBtn4State] = useState(0);
  const [btn5State, setBtn5State] = useState(0);
  const [btn6State, setBtn6State] = useState(0);
  const [btn7State, setBtn7State] = useState(0);

  useEffect(() => {
    const hasSelectedCard = nftCardLists.some(
      (card) => card.imgSrc === "/img/tick.png"
    );
    const hasMintedCard = nftCardLists.some(
      (card) => card.imgSrc === "/img/bee.png"
    );

    if (hasMintedCard) {
      setButtonText("Success!");
    } else if (hasSelectedCard) {
      setButtonText("Mint ");
    } else {
      setButtonText("Select NFT");
    }
  }, [nftCardLists]);

  const toggleCardSelection = (cardId: any) => {
    setNftCardLists((prev) =>
      prev.map((card) =>
        card.cardId === cardId
          ? {
            ...card,
            selectedState: !card.selectedState,
            imgSrc: card.selectedState
              ? "/img/question.png"
              : "/img/tick.png",
          }
          : card
      )
    );
  };

  // const handleButtonClick = () => {
  //   if (buttonText === "Mint ") {
  //     setNftCardLists((prev) =>
  //       prev.map((card) =>
  //         card.selectedState ? { ...card, imgSrc: "/img/bee.png" } : card
  //       )
  //     );
  //   } else if (buttonText === "Success!") {
  //     setNftCardLists(initialNftCardLists);
  //     confettiAction();
  //   }
  // };
  const handleButtonClick = (index: any) => {

    if (index == 1) {
      if (btn1State == 0) {
        setBtn1State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn1State == 1) {
        setBtn1State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 2) {
      if (btn2State == 0) {
        setBtn2State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn2State == 1) {
        setBtn2State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 3) {
      if (btn3State == 0) {
        setBtn3State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn3State == 1) {
        setBtn3State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 4) {
      if (btn4State == 0) {
        setBtn4State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn4State == 1) {
        setBtn4State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 5) {
      if (btn5State == 0) {
        setBtn5State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn5State == 1) {
        setBtn5State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 6) {
      if (btn6State == 0) {
        setBtn6State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn6State == 1) {
        setBtn6State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }
    if (index == 7) {
      if (btn7State == 0) {
        setBtn7State(1);
        setEthAmount(ethAmount + 1);
        mute && clickSound2.current.play();
        setMintBtnState(false);

        setCurrentEthAmount(currentEthAmount + 1);
      } else if (btn7State == 1) {
        setBtn7State(0);
        setEthAmount(ethAmount - 1);
        mute && clickSound1.current.play();
        setCurrentEthAmount(currentEthAmount - 1);
      }
    }

    if (currentEthAmount == 0) {
      setButtonText('Select Comb');
    } else {
      setButtonText('Mint' + currentEthAmount);
    }

  }

  const confettiAction = () => {
    setConfetti(true);
    setTimeout(function () {
      setConfetti(false);
    }, 5000);
  };

  const handleMintButtonClick = () => {
    if (currentEthAmount !== 0) {

      setMintBtnState(true);
      confettiAction();
      setTitleText('SUCCESS');
      setCurrentEthAmount(0);
      mute && mintSound1.current.play();

      if (btn1State == 1) {
        setBtn1State(2);
      }

      if (btn2State == 1) {
        setBtn2State(2);
      }
      if (btn3State == 1) {
        setBtn3State(2);
      }


      if (btn4State == 1) {
        setBtn4State(2);
      }
      if (btn5State == 1) {
        setBtn5State(2);
      }
      if (btn6State == 1) {
        setBtn6State(2);
      }
      if (btn7State == 1) {
        setBtn7State(2);
      }
    } else if (mintBtnState == true || currentEthAmount == 0) {
      setMintBtnState(false);
      setCurrentEthAmount(0);
      setEthAmount(0);
      setBtn1State(0);
      setBtn2State(0);
      setBtn3State(0);
      setBtn4State(0);
      setBtn5State(0);
      setBtn6State(0);
      setBtn7State(0);
      setTitleText('COMING SOON');
    }

  };


  return (
    <div className="absolute w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/img/bg/mint.png)' }}>
      <audio ref={clickSound1} src="/sounds/click01.wav" />
      <audio ref={clickSound2} src="/sounds/click02.wav" />
      <audio ref={mintSound1} src="/sounds/mint01.wav" />

      <HoneyBar />
      {/* <MintBg /> */}<div className="absolute flex w-full h-full justify-center">
        {confetti && <Confetti />} </div>
      <div className="w-full h-auto absolute flex items-center">
        <button
          onClick={() => {
            setMute(!mute);
          }}
          className="left-3 transition-all hover:scale-105 items-center right-3 justify-center z-[999]"
        >
          <img
            className="w-[100px]"
            src={mute ? "/img/btn/unmute.png" : "/img/btn/mute.png"}
            alt=""
          />
        </button>
        <button className="right-4 transition-all hover:scale-105 top-[22px]
         xl:w-[214px] lg:w-[214] sm:w-[214px] w-[172px] h-[50px] bg-[#F8DD70] border-[3px] border-black-100 text-black-100 text-[15px] md:text-[20px] text-center connect-btn z-[999]">
          Connect Wallet
        </button>
      </div>
      <div className="absolute p-10 w-full h-auto flex items-center justify-center">
        <div className="w-auto xl:absolute lg:absolute sm:static absolute h-auto flex xl:top-[100px] lg:top-[100px] sm:top-[214px] top-[152px] xl:right-[40px] lg:right-[40px] sm:right-[214px] right-[12px] ">
          <BackToHomeBtn />
        </div>
      </div>
      <p className="absolute w-full xl:text-[62px] lg:text-[52px] sm:text-[42px] text-[30px] xl:mt-[50px] lg:mt-[30px] sm:mt-[85px] mt-[75px] text-center text-white-100 mint-title">
        {titleText}
      </p>
      <div className="w-full h-full flex justify-center items-center">
        <div className="gallery">
          <img src={
            btn1State == 2 ? "/img/btn/bee.png" :
              btn1State == 0 ? "/img/btn/question.png"
                : btn1State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(1)} />
          <img src={
            btn2State == 2 ? "/img/btn/bee.png" :
              btn2State == 0 ? "/img/btn/question.png"
                : btn2State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(2)} />
          <img src={
            btn3State == 2 ? "/img/btn/bee.png" :
              btn3State == 0 ? "/img/btn/question.png"
                : btn3State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(3)} />
          <img src={
            btn4State == 2 ? "/img/btn/bee.png" :
              btn4State == 0 ? "/img/btn/question.png"
                : btn4State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(4)} />
          <img src={
            btn5State == 2 ? "/img/btn/bee.png" :
              btn5State == 0 ? "/img/btn/question.png"
                : btn5State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(5)} />
          <img src={
            btn6State == 2 ? "/img/btn/bee.png" :
              btn6State == 0 ? "/img/btn/question.png"
                : btn6State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(6)} />
          <img src={
            btn7State == 2 ? "/img/btn/bee.png" :
              btn7State == 0 ? "/img/btn/question.png"
                : btn7State == 1 ? "/img/btn/Selected.png"
                  : "/img/btn/bee.png"
          } alt="" onClick={() => handleButtonClick(7)} />
        </div>
      </div>

      <div className="absolute bottom-5 flex w-full justify-center">
        <div className="sm:absolute static bottom-5 right-10">
          <p className="text-[35px] text-center text-white-100">{currentEthAmount * 313} </p>
          <button
            onClick={() => handleMintButtonClick()}
            className={`${mintBtnState == true ? 'bg-[#5FFF6F80]' : 'bg-[#FFF8D300]'}  hover:scale-105 border-[1px] border-white-100  xl:w-[261px] lg:w-[261px] sm:w-[261px] w-[261px] xl:h-[79px] lg:h-[79px] sm:h-[66px] h-[66px] p-2 text-center text-white-100 items-center md:flex justify-center transition-all`}
          >
            {mintBtnState == true ? 'Success !' : ethAmount == 0 ? 'Select NFT' : 'Selected: ' + currentEthAmount}
          </button>
        </div>
      </div>
    </div>
  );
}

const initialNftCardLists = [
  {
    cardId: 1,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 2,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 3,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 4,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 5,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 6,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
  {
    cardId: 7,
    selectedState: false,
    imgSrc: "/img/question.png",
  },
];

export default Mint;
