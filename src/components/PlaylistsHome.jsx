import {Heart, Pause, Play} from "lucide-react";
import {useState} from "react";


export default function PlaylistsHome({title, texts, info, cover, setCurrentTrack}) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setCurrentTrack({ title, cover });
    };

    return (
        <div className="set__playlist">
            <div className="set__playlist__cover-container">
                <img
                    src={cover}
                    alt={`Обложка альбома: ${title}`}
                    className="set__playlist__cover"
                />
                <button
                    className="set__playlist__play-btn"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <Pause/> : <Play/>}
                </button>
                <div className="set__playlist__description">
                    <div className="set__playlist__description__title">{title}</div>
                    <div className="set__playlist__description__subtitle">{texts}</div>
                </div>
                <div className="set__playlist__controls">
                    <Heart className="set__playlist__controls__icon"/>
                    <div className="set__playlist__controls__num">
                        {info}
                    </div>
                </div>
            </div>
        </div>
    )
}