import SunSvg from "/assets/icon-sun.svg";
export default function Header() {
  return (
    <div
      className="flex justify-between 
      px-[2.4rem] pt-[3.1rem] items-center"
    >
      <h1>devfinder</h1>
      <div className="flex items-center gap-[1.6rem]">
        <p>LIGHT</p>
        <img src={SunSvg} alt="sun-icon" />
      </div>
    </div>
  );
}
