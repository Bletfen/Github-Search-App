import Logo from "/assets/icon-moon.svg";
export default function MainDisplay() {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
        <h2>The Octocat</h2>
        <span>@octocat</span>
        <p>Joined 25 Jan 2011</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div>
        <div>
          <span>Repos</span>
          <span>8</span>
        </div>
        <div>
          <span>Followers</span>
          <span>3938</span>
        </div>
        <div>
          <span>Following</span>
          <span>9</span>
        </div>
      </div>
    </div>
  );
}
