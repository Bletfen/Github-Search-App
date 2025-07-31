import SunSvg from "/assets/icon-sun.svg";
export default function Header() {
  return (
    <div>
      <h1>devfinder</h1>
      <div>
        <p>LIGHT</p>
        <img src={SunSvg} alt="sun-icon" />
      </div>
    </div>
  );
}
