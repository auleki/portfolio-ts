import { useContext } from 'react';
import PageRoutes from './component/routes/PageRoutes';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { ThemeProvider } from 'styled-components'
import { colors } from './component/constants';
import { ThemeContext } from './contexts/ThemeContext';
import ScrollToTop from './component/ScrollToTop';

function App() {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={darkTheme ? colors.dark : colors.light}>
      <Navbar />
      <ScrollToTop>
        <PageRoutes />
      </ScrollToTop>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
