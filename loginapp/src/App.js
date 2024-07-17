import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Signup />}></Route>
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
