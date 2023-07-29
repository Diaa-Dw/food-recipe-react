import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { AppContainer } from "./components/styles/AppContainer.styled";
import Container from "./components/Container";
function App() {
  const [isDark, setIsDark] = useState(false);
  /*
  const toggleTheme = () => {
    setIsDark((s) => !s);
  };
  */
  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <AppContainer>
        <Container setIsDark={setIsDark} isDark={isDark}></Container>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
