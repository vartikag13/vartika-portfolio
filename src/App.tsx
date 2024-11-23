import React, { Context, createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.scss';
import Bakery from './components/Bakery/bakery';
import About from './components/About/about';
export const ThemeContext: Context<{
    theme: string, setTheme?: React.Dispatch<React.SetStateAction<string>>
}> = createContext({ theme: 'dark-mode' });

function App() {

    const [theme, setTheme] = useState<string>('dark-mode');
    console.log({theme})
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
        <div className={theme}>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/bakery" element={<Bakery />} />
                </Route>
            </Routes>
            </div>
            </ThemeContext.Provider>
    );
}

export default App;
