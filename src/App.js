import PlayerControls from "./components/player/PlayerControls";
import { Provider } from "react-redux";
import store from "./store/store";
import music from "./music-files/music";
import Songs from "./components/Songs";

function App() {
  return (
    <>
      <Provider store={store}>
        <Songs />
        <PlayerControls />
      </Provider>
    </>
  );
}

export default App;
