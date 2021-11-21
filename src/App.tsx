import { useContext } from 'react';
import PageRoutes from './component/routes/PageRoutes';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { ThemeProvider } from 'styled-components'
import { colors } from './component/constants';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={darkTheme ? colors.dark : colors.light}>
      <Navbar />
      <PageRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
