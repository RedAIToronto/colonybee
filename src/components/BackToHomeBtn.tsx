import Link from "next/link";

export default function BackToHomeBtn() {
  return (
    <Link href={"/"}>
      <div className="w-auto h-[40px] flex justify-center cursor-pointer hover:scale-105 transition-all z-[999]">
        <span className="w-auto h-[40px] xl:text-[20px] lg:text-[20px] sm:text-[20px] text-[15px] text-center text-[#ffffff] flex items-center">
          Back to Home
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6455 23.058L10.8521 21.2646L16.7447 15.372L10.8521 9.47944L12.6455 7.68604L20.3315 15.372L12.6455 23.058Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
