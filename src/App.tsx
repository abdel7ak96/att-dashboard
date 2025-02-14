import { ThemeProvider } from '@mui/material';
import theme from './providers/theme.ts';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
