import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundView from './components/module/NotFound/view/NotFoundView';
import FormsFirst from './components/module/forms-first/view/forms-first';
import SideBar from './components/module/Navigation/view/SideBar';
import FormsBD from './components/module/forms-first/view/form-bd';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundView/>} />
      <Route path="/" index element={<SideBar/>} />
      <Route path="/Formulario" element={<FormsFirst/>}/>
      <Route path="/FormularioBD" element={<FormsBD/>}/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;
