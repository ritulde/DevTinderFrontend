import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../src/Component/Login";
import { Profile } from "../src/Component/Profile";
import { Body } from "../src/Component/Body";
import { Feed } from "../src/Component/Feed"; 
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
