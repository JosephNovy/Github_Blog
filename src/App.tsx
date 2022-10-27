import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { Header } from "./Layout/Header";
import { UserGithubProvider } from "./contexts/userContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserGithubProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post/:number" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </UserGithubProvider>
    </ThemeProvider>
  );
}

export default App;
