import { useRef, useState } from 'react';
import { AudioPlayerContext } from "./useAudioPlayer";

export default function AudioPlayerProvider({ children }) {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (track) => {
        if (currentTrack?.id !== track.id) {
            audioRef.current.src = track.src;
            setCurrentTrack(track);
        }
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch((e) => {
            console.error("Ошибка воспроизведения:", e);
        });
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((e) => {
                console.error("Ошибка воспроизведения:", e);
            });
        }
    };

    return (
        <AudioPlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, pause, togglePlay }}>
            {children}
            <audio ref={audioRef} style={{ display: 'none' }} />
        </AudioPlayerContext.Provider>
    );
}
