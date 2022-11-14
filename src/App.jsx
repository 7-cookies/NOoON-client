import { ThemeProvider } from 'styled-components';

import Router from './components/common/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};
export default App;
