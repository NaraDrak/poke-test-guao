import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div>
      <div className="relative w-72 mt-4 ml-28">
        <input
          type="text"
          placeholder="Search"
          className="absolute left-0 rounded-3xl shadow-lg w-full h-8 p-2 border-2"
        />
        <button className="absolute right-0 bg-bluePokemon rounded-full py-2 px-4">
          <BsSearch color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
