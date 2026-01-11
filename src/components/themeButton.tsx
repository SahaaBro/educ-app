"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const list = [
  {
    icon: <Sun />,
    name: "light",
  },
  {
    icon: <Moon />,
    name: "dark",
  },
  {
    icon: <SunMoon />,
    name: "system",
  },
];

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const index = list.findIndex((item) => item.name === theme);

  const handleClick = () => {
    const nextIndex = (index + 1) % list.length;
    setTheme(list[nextIndex].name);
  };

  return (
    <div>
      <Button onClick={handleClick} variant="ghost" size="icon">
        {list[index].icon}
      </Button>
    </div>
  );
};

export default ThemeButton;
