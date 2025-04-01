import "/src/styles/main.css"
import Header from "./components/Header.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>


            </div>

            <Footer/>
        </div>
    )
}