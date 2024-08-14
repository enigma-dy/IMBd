"use client";
import { useTheme } from "next-themes";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <MdToggleOff /> : <MdToggleOn />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
