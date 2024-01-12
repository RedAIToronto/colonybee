export default function MainBg() {
  return (
    <div className="absolute flex w-full h-screen justify-center items-center">

      <img
        src="img/bg/honeycomb.png"
        alt=""
        className="absolute xl:w-[850px] lg:w-[850px] md:w-[580px] w-[95%] h-auto z-10"
      />
      <div className="absolute bg-[#e6daff8c] w-full h-full bottom-0">
      </div>
      <div className="absolute bg-[#C7C4E099] w-full h-[50%] bottom-0"></div>
      <img
        src="img/bg/queen.png"
        alt=""
        className="absolute xl:w-[500px] lg:w-[450px] md:w-[400px] w-[300px] h-auto z-[100000] bottom-0"
      />
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  );
}
