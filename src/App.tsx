import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.scss';
import Bakery from './components/Bakery/bakery';
import About from './components/About/about';

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/bakery" element={<Bakery />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
