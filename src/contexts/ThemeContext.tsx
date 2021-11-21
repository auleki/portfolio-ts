import { createContext, useState } from "react"
import { ThemeContextType, ThemeProviderProps } from "../global"

export const ThemeContext = createContext({} as ThemeContextType)

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider