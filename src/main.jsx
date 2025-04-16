import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PainelConteudo from './PainelConteudo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/painel" element={<PainelConteudo />} />
    </Routes>
  </BrowserRouter>
);
