import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Upload from './views/Upload'
import 'boxicons'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path="/upload" element={<Upload/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
