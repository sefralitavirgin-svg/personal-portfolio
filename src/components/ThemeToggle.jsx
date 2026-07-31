import useTheme from "../hooks/useTheme";
import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        border
        border-slate-200
        bg-white
        shadow-sm
        transition
        hover:bg-slate-100
      "
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-slate-700" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  );
}

export default ThemeToggle;