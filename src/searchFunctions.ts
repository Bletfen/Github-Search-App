export const fetchData = async () => {
  const response = await fetch(`https://api.github.com/users/${searchInput}`);
  const resData = await response.json();
  return redData;
};

export const clickHandle = () => {
  console.log(fetchData());
};
