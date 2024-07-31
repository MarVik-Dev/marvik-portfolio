import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UseThemeProviderProps } from "@/app/types/useProps";

export function ThemeProvider({ children, ...props }: UseThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
