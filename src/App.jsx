import "/src/styles/main.css"
import Header from "./components/Header.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library";
import Playlists from "./pages/Playlists";

export default function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/playlist" element={<Playlists/>}/>
                </Routes>
            </div>
        </div>
    )
}