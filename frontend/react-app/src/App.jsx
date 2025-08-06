import { Routes, Route } from "react-router-dom";

import Chatbot from "./components/Chatbot";
import CarList from "./components/CarList";
import UserSummary from "./components/UserSummary";
import { AppProvider } from "./context/AppContext";
import ColorFiltrado from "./components/ColorFiltrado";
import HistorialTarjetas from "./components/HistorialTarjetas";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import CategoryMain from "./components/CategoryMain";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <div className="p-6 min-h-screen  bg-gray-100">
        <Header
          className="relative z-3 bg-blue-600 h-screen text-white text-center p-4 text-lg md:text-xl lg:text-2xl"
          movieClass=" absolute w-full h-full top-0 left-0 object-cover"
          imageClass="w-2  mx-10 sm:w-4 md:w-6 lg:w-20 flex  items-center text-center rounded-xl shadow"
        />
        <div className="grid grid-cols-1 md:grid-cols-[200px_605px] lg:grid-cols-[200px_1fr_250px]">
          <div className="bg-gray-100 p-4 rounded shadow">
            <Navbar className="text-sm md:text-base lg:text-lg h-auto" />
          </div>

          <div className="p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="bg-white p-4 rounded shadow flex justify-center">
                    <Main
                      titleClass="text-base my-20 md:text-lg lg:text-3xl font-bold m-4"
                      textClass="text-sm my-20 md:text-base lg:text-lg text-mg-500/100"
                      mainClass="grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch"
                    />
                  </div>
                }
              />
              <Route path="/categoria/:color" element={<CategoryMain />} />

              <Route
                path="/"
                element={
                  <div className="bg-white p-4 rounded shadow flex justify-center">
                    <ColorFiltrado titleClass="text-base md:text-lg lg:text-3xl font-bold m-4" />
                  </div>
                }
              />
            </Routes>
          </div>

          <div className=" hidden   lg:block bg-blue-900/10  p-4 rounded shadow">
            <Sidebar className="text-sm lg:text-base space-y-30 m-4 relative right-2 top-10" />
          </div>
        </div>

        

        <Chatbot />
        <Footer />
      </div>
    </AppProvider>
  );
}
