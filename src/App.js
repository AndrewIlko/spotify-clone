import PlayerControls from "./components/player/PlayerControls";
import { Provider } from "react-redux";
import store from "./store/store";
import Hero from "./components/Hero";
import "./styles/dist/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import SideNavigation from "./component/SideNavigation";
import MainWrapper from "./component/Wrappers/MainWrapper";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainWrapper>
          <div className="flex-1 grid grid-auto-1fr gap-[8px] p-[8px]">
            <SideNavigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Home />} />
            </Routes>
          </div>
        </MainWrapper>
      </Provider>
    </>
  );
};

export default App;
