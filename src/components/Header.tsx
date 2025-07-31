import SunSvg from "/assets/icon-sun.svg";
export default function Header() {
  return (
    <div className="flex">
      <h1>devfinder</h1>
      <div className="flex">
        <p>LIGHT</p>
        <img src={SunSvg} alt="sun-icon" />
      </div>
    </div>
  );
}
