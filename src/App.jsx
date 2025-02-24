import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import Menu from "./pages/Menu";
import { FiltersProvider } from "./context/FiltersContext";
import CalculatePage from "./pages/CalculatePage";
import Meet from "./pages/Meet";
import Streams from "./pages/Streams";
import WatchingStream from "./pages/WatchingStream";

function App() {
  useEffect(() => {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }, []);

  return (
    <FiltersProvider>
      <div
        className="App flex flex-col justify-start items-center w-[100%] h-[100%] [background:linear-gradient(180deg,rgb(1,13,13)_0%,rgb(3.01,42.5,42.5)_100%)] bg-[100%_100%]"
        style={{ height: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/calculatePage" element={<CalculatePage />} />
            <Route path="/meet" element={<Meet />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/watchStreams" element={<WatchingStream />} />
          </Route>
        </Routes>
      </div>
    </FiltersProvider>
  );
}

export default App;
