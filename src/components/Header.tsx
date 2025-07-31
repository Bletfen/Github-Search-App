import SunSvg from "/assets/icon-sun.svg";
export default function Header() {
  return (
    <div
      className="flex w-full justify-between
      pt-[3.1rem]
      text-[#fff]
      max-w-[73rem]"
    >
      <h1 className="text-[2.6rem] font-[700]">devfinder</h1>
      <div className="flex items-center gap-[1.6rem]">
        <p className="text-[1.3rem] font-[700] tracking-[0.25rem]">LIGHT</p>
        <img src={SunSvg} alt="sun-icon" className="cursor-[pointer]" />
      </div>
    </div>
  );
}
