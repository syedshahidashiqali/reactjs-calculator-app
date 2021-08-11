import React from 'react';
import './App.css'
import Rows from './components/Rows';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';

function App() {
    
    return (
        <GlobalProvider>
            <div className="container">
                <div className="first">
                    <Header />
                </div>
                <div className="second">
                    <Rows />
                </div>
            </div>
        </GlobalProvider>
    )
};

            export default App;