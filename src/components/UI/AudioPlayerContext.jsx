import { createContext, useContext, useRef, useState } from 'react';

const AudioPlayerContext = createContext(null);

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export default function AudioPlayerProvider({children}) {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (track) => {
        if (currentTrack?.id !== track.id) {
            audioRef.current.src = track.src;
            setCurrentTrack(track);
        }
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <AudioPlayerContext.Provider value={{currentTrack, isPlaying, playTrack, pause, togglePlay}}>
            {children}
            <audio ref={audioRef} style={{display: "none"}} />
        </AudioPlayerContext.Provider>
    )
}