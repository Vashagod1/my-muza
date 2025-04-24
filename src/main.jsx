import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AudioPlayerProvider from "./components/UI/AudioPlayerContext";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <AudioPlayerProvider>
                <App />
            </AudioPlayerProvider>
        </StrictMode>
    </BrowserRouter>
)
