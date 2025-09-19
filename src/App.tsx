// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome/Welcome';
import LoginRegister from './components/LoginRegister/LoginRegister.tsx';

function App() {
  return (
    <Router>
      <div className='w-screen min-h-screen flex flex-col'>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={
            <>
              <Header />
              <LoginRegister />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-1 flex justify-center items-center bg-gray-100">
                <div className="text-center p-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo ao HCFácil</h1>
                  <p className="text-gray-600">Conteúdo principal da aplicação</p>
                </div>
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;