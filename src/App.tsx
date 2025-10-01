import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import WelcomePage from './pages/Welcome';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import IntegrantesPage from './pages/Integrantes';
import IntegranteDetail from './pages/IntegranteDetail';
import ContatoPage from './pages/Contato';
import FaqPage from './pages/FAQ';
import VideosPage from './pages/Video';
import Error from './pages/Error';
import ForgotPasswordPage from './pages/ForgotPass';
import MarqueSuaConsultaPage from './pages/MarqueConsulta';
import SobrePage from './pages/Sobre';

function App() {
  return (
    <Router>
      <div className='w-screen min-h-screen flex flex-col'>
        <Routes>
          {/* Redireciona raiz para welcome */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<WelcomePage />} />
          
          <Route element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/integrantes" element={<IntegrantesPage />} />
            <Route path="/integrantes/:id" element={<IntegranteDetail />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/esqueci-senha" element={<ForgotPasswordPage />} />
            <Route path="/marque-sua-consulta" element={<MarqueSuaConsultaPage />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;