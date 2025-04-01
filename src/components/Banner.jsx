import '../styles/components/_banner.scss'
import { Pause, Play } from "lucide-react";
import { useState } from "react";

export default function Banner() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    return (
        <div className="banner">
            <h1 className="banner__title">Всё для тебя</h1>
            <p className="banner__subtitle">Найди свой идеальный трек</p>
            <button className="banner__play" onClick={handlePlayPause}>
                <div className="banner__play__icon">
                    {isPlaying ? <Pause /> : <Play />}
                </div>
                <span className="banner__play__caption">
                    {isPlaying ? 'Моя муза' : 'Моя муза'}
                </span>
            </button>
        </div>
    )
}
