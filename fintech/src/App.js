import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import AuthResultPage from './pages/AuthResultPage';

function App() {
  return (
    // <div className="App">
    //   <AuthPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />}></Route>
        <Route path='/authResult' element={<AuthResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;