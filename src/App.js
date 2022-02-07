import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
