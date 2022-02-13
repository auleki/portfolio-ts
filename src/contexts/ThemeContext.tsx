import { createContext, useState } from "react"
import { icons } from "../component/constants"
import { ThemeContextType, ThemeProviderProps } from "../global"

export const ThemeContext = createContext({} as ThemeContextType)

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }

  const toggleIcon = darkTheme ? <icons.sun /> : <icons.moon />

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme, toggleIcon, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider