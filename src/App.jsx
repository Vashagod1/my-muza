import "/src/styles/main.css"
import Header from "./components/Header.jsx";
import {Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                </Routes>
            </div>
        </div>
    )
}