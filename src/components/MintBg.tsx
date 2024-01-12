import HoneyBar from "./HoneyBar";

export default function MintBg() {
  return (
    <div className="absolute flex w-full h-screen z-[-1]">
      <HoneyBar />
      <img src="img/bg/mint.png" alt="" className="w-full h-full z-[-1]" />
      {/* <div className="absolute bg-[#C7C4E0] w-full h-[50%] bottom-0"></div>
      <img
        src="img/bg/queen.png"
        alt=""
        className="absolute w-auto h-[80%] z-20 bottom-0"
      /> */}
    </div>
  );
}
