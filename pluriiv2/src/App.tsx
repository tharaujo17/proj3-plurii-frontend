import { ThemeProvider } from 'styled-components';
import { theme } from './theme/global';
import { createGlobalStyle } from 'styled-components';
//import Header from './Shared/Components/Header/Header';
//import Home from './pages/Home/Home';
// import Footer from './Shared/Components/Footer/Footer';
// import HeaderUserLogged from './Shared/Components/HeaderUserLogged/HeaderUserLogged';
// import Approval from './pages/Approval/Approval';
// import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

//import Login from './pages/Login/Login';

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
      <Register />
      {/* <HeaderUserLogged />
      <Approval />
      <Footer />  */}

    </ThemeProvider>
  );
}

export default App;
