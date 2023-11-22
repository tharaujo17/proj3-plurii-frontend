import { ThemeProvider } from 'styled-components';
import { theme } from './theme/global';
import { createGlobalStyle } from 'styled-components';
import Header from './Shared/Components/Header/Header';
import Home from './pages/Home/Home';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
