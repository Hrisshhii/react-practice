import { useEffect, useState } from "react";

export type Theme="blue"|"purple"|"green"|"default";

export const useSettings = () => {
  const [theme,setTheme]=useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "default"
  );
  useEffect(()=>{
    localStorage.setItem("theme",theme);
  },[theme]);
  const resetAll=()=>{
    localStorage.clear();
    window.location.reload();
  };
  return {theme,setTheme,resetAll};
}
