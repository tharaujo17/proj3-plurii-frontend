import { ThemeProvider } from 'styled-components';
import { theme } from './theme/global';
import { createGlobalStyle } from 'styled-components';
<<<<<<< HEAD
// import Header from './Shared/Components/Header/Header';
// import Home from './pages/Home/Home';
// import Footer from './Shared/Components/Footer/Footer';
import Login from './pages/Login/Login';
=======
import Header from './Shared/Components/Header/Header';
import Home from './pages/Home/Home';
// import Footer from './Shared/Components/Footer/Footer';

import Approval from './pages/Approval/Approval';
import HeaderUserLogged from './Shared/Components/HeaderUserLogged/HeaderUserLogged';
>>>>>>> afeebeee589f411fe741b48d553fe234d2082061

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
<<<<<<< HEAD
      {/* <Header />
      <Home />
      <Footer /> */}
      <Login/>
=======
      
      <HeaderUserLogged /> 
      <Approval />
      <Header />
      <Home />

>>>>>>> afeebeee589f411fe741b48d553fe234d2082061
    </ThemeProvider>
  );
}

export default App;
