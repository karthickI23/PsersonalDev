import React from "react";
import { Container, Box } from "./common/Layout";
import style from "./App.module.css";

const App = () => {

  const AppContainer = ({ children }) => {
    return (
      <div className={`${style.App}`} id="appContainer">
        {children}
      </div>
    );
  };

  return (
    <AppContainer>
      <Container alignBox="row">
        <Box>Toggle Theme</Box>
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
