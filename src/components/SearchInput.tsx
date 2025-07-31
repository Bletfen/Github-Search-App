import SearchSvg from "/assets/search-icon.svg";
export default function SearchInput() {
  return (
    <div>
      <img src={SearchSvg} alt="search-icon" />
      <input type="text" />
    </div>
  );
}
