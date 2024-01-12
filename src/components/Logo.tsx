import AnimationComb from "./AnimationComb";

export default function Logo() {
  return (
    <div className="flex xl:w-[570px] lg:w-[570px] md:w-[536px] w-[357px]  h-auto justify-center p-10 z-[100]">
      <img src="img/logo/1.png" alt="" className="w-[full] xl:w-[full] " />
      <AnimationComb />
    </div>
  );
}
