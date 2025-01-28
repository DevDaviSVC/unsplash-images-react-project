import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useGlobalContext } from "../contexts/GlobalContext";

const ToggleContainer = () => {
  const { darkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {darkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <IoSunny className="toggle-icon" />
        )}
      </button>
    </div>
  );
};
export default ToggleContainer;
