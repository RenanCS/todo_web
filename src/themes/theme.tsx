import { ThemeProvider } from "styled-components";
import { theme } from "./interface";

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}