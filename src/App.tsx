// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando o Layout e as novas Páginas
import MainLayout from './components/MainLayout';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className='w-screen min-h-screen flex flex-col'>
        <Routes>
        
          <Route path="/welcome" element={<WelcomePage />} />

          
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
           
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;