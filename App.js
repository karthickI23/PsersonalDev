import React from "react";
import { Container, Box } from "./common/Layout";
import { useTheme } from "./context/ThemeContext";
import style from "./App.module.css";

const App = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const AppContainer = ({ children }) => {
    return (
      <div className={`${style.App} ${currentTheme}`} id="appContainer">
        {children}
      </div>
    );
  };

  return (
    <AppContainer>
      <Container alignBox="row">
        <Box><button onClick={toggleTheme}>Toggle Theme</button></Box>
        <Box flexible>
          <Container alignBox="column">
            <Box>Header</Box>
            <Box flexible>Content</Box>
          </Container>
        </Box>
      </Container>
    </AppContainer>
  );
};

export default App;
