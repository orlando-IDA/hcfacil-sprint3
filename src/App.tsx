// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando o Layout e as novas Páginas
import MainLayout from './components/MainLayout';
import WelcomePage from './pages/Welcome';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import IntegrantesPage from './pages/Integrantes';
import ContatoPage from './pages/Contato';
import FaqPage from './pages/FAQ';
import VideosPage from './pages/Video';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div className='w-screen min-h-screen flex flex-col'>
        <Routes>
        
          <Route path="/welcome" element={<WelcomePage />} />

          
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/integrantes" element={<IntegrantesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="*" element={<Error />} />
           
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;