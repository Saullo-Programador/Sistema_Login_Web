import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import RouterPages from './Routes/Router';

function App() {
  return (
    <body className='App'>
      <header>
        paginas
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Private">Private</Link>
      </nav>
      <main>
        <RouterPages/>
      </main>
    </body>
  );
}

export default App;
