import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./components/home";
import { Type } from "./components/type";
import { Process } from "./components/process";
import { Ps } from "./components/ps";
import { News } from "./components/news";
import { About } from "./components/about";
import { FAQ } from "./components/faq";
import { AppleCollection } from "./components/type/Apple";
import { AsusCollection } from "./components/type/Asus";
import { SamsungCollection } from "./components/type/Samsung";
import { LenovoCollection } from "./components/type/Lenovo";
import { RazerCollection } from "./components/type/Razer";
import { MSICollection } from "./components/type/MSI";


const  App = () => {
  return (
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/type" element={<Type/>} />
              <Route path="/process" element={<Process/>} />
              <Route path="/ps" element={<Ps/>} />
              <Route path="/news" element={<News/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/faq" element={<FAQ/>} />

              {/* otherbands path on type */}
              <Route path="/type/Apple" element={<AppleCollection/>} />
              <Route path="/type/Asus" element={<AsusCollection/>} />
              <Route path="/type/Samsung" element={<SamsungCollection/>} />
              <Route path="/type/Lenovo" element={<LenovoCollection/>} />
              <Route path="/type/Razer" element={<RazerCollection/>} />
              <Route path="/type/MSI" element={<MSICollection/>} />
            </Routes>
        </Router>
  );
}

export default App;