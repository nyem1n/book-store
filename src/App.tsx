import Layout from './conponents/layout/layout';
import Home from './pages/Home';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';  
import { ThemeName, getTheme } from './style/theme';
import ThemeSwitcher from './conponents/common/header/ThemeSwitcher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';


function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher  />
        <Layout>
          <Home />
        </Layout>

  </BookStoreThemeProvider>
  )
}

export default App;
