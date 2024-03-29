import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component"
import Main from './routes/main/main.component';
import Province from './routes/province/province.component'
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="main/*" element={<Main />} />
        <Route path="province/*" element={<Province />} />
      </Route>
    </Routes>
  );
}

export default App;
