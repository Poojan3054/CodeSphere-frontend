import { Route, Routes } from 'react-router-dom';
import Login from './components/authentication/login';
import Register from './components/authentication/register';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* other routes */}
      </Routes>
  );
}

export default App;
