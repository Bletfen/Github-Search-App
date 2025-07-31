import Logo from "/assets/icon-moon.svg";
import Location from "/assets/icon-location.svg";
import WebSite from "/assets/icon-website.svg";
import Twitter from "/assets/icon-twitter.svg";
import Company from "/assets/icon-company.svg";

export default function MainDisplay() {
  return (
    <div
      className="bg-[#1e2a47] rounded-[1.5rem] pt-[3.3rem] pb-[4.8rem]
      px-[2.4rem] mt-[1.6rem] text-[1.3rem] font-[400] text-[#fff]"
    >
      <div className="flex items-center gap-[2rem] mb-[3.3rem]">
        <img src={Logo} alt="" className="w-[7rem] h-[7rem]" />
        <div className="flex flex-col">
          <h2 className="text-[1.6rem] font-[700]">The Octocat</h2>
          <span className="text-[#0079ff]">@octocat</span>
          <p className="mt-[0.6rem]">Joined 25 Jan 2011</p>
        </div>
      </div>
      <p className="leading-[2.5rem]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div
        className="flex py-[1.8rem] px-[1.5rem]
      bg-[#141d2f] rounded-[1rem] text-[1.1rem] font-[400] text-center"
      >
        <div className="flex flex-col">
          <span>Repos</span>
          <span>8</span>
        </div>
        <div className="flex flex-col">
          <span>Followers</span>
          <span>3938</span>
        </div>
        <div className="flex flex-col">
          <span>Following</span>
          <span>9</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={Location} alt="icon-location" />
            <span>San Francisco</span>
          </div>
          <div>
            <img src={WebSite} alt="icon-website" />
            <span>https://github.blog</span>
          </div>
        </div>
        <div>
          <div>
            <img src={Twitter} alt="icon-twitter" />
            <span>Not Available</span>
          </div>
          <div>
            <img src={Company} alt="icon-company" />
            <span>@github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
