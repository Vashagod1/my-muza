import {useEffect, useState} from 'react'
import {useAudioPlayer} from "./UI/AudioPlayerContext";
import {Play, Pause} from "lucide-react";
import '../styles/components/_now-playing.scss';

export default function NowPlaying() {
    const {currentTrack, isPlaying, pause, playTrack} = useAudioPlayer();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const audio = document.querySelector("audio");
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                const percentage = (audio.currentTime / audio.duration) * 100;
                setProgress(percentage || 0);
            }
        };

        audio.addEventListener("timeupdate", updateProgress);

        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, [currentTrack]);

    if (!currentTrack) return null;

    const handleToggle = () => {
        if (isPlaying) {
            pause();
        }else {
            playTrack(currentTrack);
        }
    };

    return(
        <div className="now-playing">
            <img src={currentTrack.cover}
                 alt={currentTrack.title}
                 className="now-playing__cover"
            />
            <div className="now-playing__description">
                <h4 className="now-playing__title">{currentTrack.title}</h4>
                <p className="now-playing__author">{currentTrack.author}</p>
            </div>
            <button onClick={handleToggle} className="now-playing__button">
                {isPlaying ? <Pause /> : <Play />}
            </button>

            <div className="now-playing__progress-bar">
                <div className="now-playing__progress" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
}