import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Coupon from "./pages/coupon/Coupon";
import Owned from "./pages/owned/Owned";
import Landing from "./pages/landing/Landing";
import { BrowserRouter , Routes , Route }  from "react-router-dom";
import About from "./pages/about/About";
import History from "./pages/history/History";
import Account from "./pages/account/Account";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="user">
            <Route path=":userId" element={<Home />} />
            <Route path="owned" element={<Owned />} />
            <Route path="coupon" element={<Coupon />} />
            <Route path="history" element={<History />} />
            <Route path="account" element={<Account />} />

          </Route>
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
