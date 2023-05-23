import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import ContinentsPage from "./pages/ContinentsPage";
import PageTwo from "./pages/Pagetwo";
import PageThree from "./pages/Pagethree";


export default function App() {
  return (
      <Routes>
        <Route path="/" element= {<ContinentsPage />}></Route>
        <Route path="/pagetwo/:id" element= {<PageTwo />}> </Route>
        <Route path="/pagethree" element= {<PageThree/>}></Route>
      </Routes>
  );
}
