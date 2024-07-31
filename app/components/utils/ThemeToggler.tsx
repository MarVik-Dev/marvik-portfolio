"use client"
import React, { useMemo } from 'react'
import { Button } from '../ui/Button'
import { useTheme } from 'next-themes';

import dynamic from "next/dynamic";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const sunIconClasses = useMemo(() => {
    return `${theme === "dark" ? "scale-0" : "scale-100"} rotate-${
      theme === "dark" ? 90 : 0
    } transition-all h-[1.2rem] w-[1.2rem]`;
  }, [theme]);

  const moonIconClasses = useMemo(() => {
    return `${theme === "dark" ? "scale-100" : "scale-0"} rotate-${
      theme === "dark" ? 0 : 90
    } absolute transition-all h-[1.2rem] w-[1.2rem]`;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Charger dynamiquement les icônes côté client uniquement
  const SunIcon = dynamic(
    () => import("@radix-ui/react-icons").then((mod) => mod.SunIcon),
    {
      ssr: false,
    }
  );

  const MoonIcon = dynamic(
    () => import("@radix-ui/react-icons").then((mod) => mod.MoonIcon),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <SunIcon className={sunIconClasses} />
        <MoonIcon className={moonIconClasses} />
      </Button>
    </div>
  );
};

export default ThemeToggler