import './App.css';
import LoginPage from "./Screens/LoginPage.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
   
       <Router>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage/>} exact></Route>         
        </Routes>
      </main>
    </Router>
   
  );
}

export default App;
