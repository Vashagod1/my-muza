import { useState, useRef } from "react";

const tracks = [
    { src: "/music1.mp3", title: "Песня 1" },
    { src: "/music2.mp3", title: "Песня 2" },
    { src: "/music3.mp3", title: "Песня 3" },
];

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        let newTrack = (currentTrack + 1) % tracks.length; // Переход на следующий трек
        setCurrentTrack(newTrack);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        let newTrack = (currentTrack - 1 + tracks.length) % tracks.length; // Переход на предыдущий трек
        setCurrentTrack(newTrack);
        setIsPlaying(true);
    };

    return (
        <div>
            <audio
                ref={audioRef}
                src={tracks[currentTrack].src}
                onEnded={nextTrack} // Автопереход к следующей песне
                autoPlay={isPlaying} // Переключение песни автоматически включает её
            ></audio>

            <div>
                <button onClick={prevTrack}>
                    <SkipBack />
                </button>

                <button onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <Play />}
                </button>

                <button onClick={nextTrack}>
                    <SkipForward />
                </button>
            </div>

            <p>{tracks[currentTrack].title}</p>
        </div>
    );
}
