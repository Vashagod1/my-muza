import { Heart, Pause, Play } from "lucide-react";
import { useState } from "react";
import {NavLink} from "react-router";

export default function PlaylistsHome({ id, title, texts, info, cover, setCurrentTrack = () => {} }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (e) => {
        setIsPlaying((prev) => !prev);
        e.preventDefault()
        setCurrentTrack({ title, cover });
    };

    return (
        <div className="set-playlist">
            <NavLink to={`/playlist/${id}`}>
                <div className="set-playlist__container">
                    <img
                        src={cover}
                        alt={`Обложка альбома: ${title}`}
                        className="set-playlist__cover"
                    />
                    <div className="set-playlist__play-button">
                        <button
                            className="set-playlist__play-button__play-btn"
                            onClick={handlePlayPause}
                            aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
                            aria-pressed={isPlaying}
                        >
                            {isPlaying ? <Pause/> : <Play/>}
                        </button>
                    </div>
                    <div className="set-playlist__description">
                        <div className="set-playlist__description__title">{title}</div>
                        <div className="set-playlist__description__subtitle">{texts}</div>
                    </div>
                    <div className="set-playlist__info">
                        <div className="set-playlist__info__icon"><Heart/></div>
                        <div className="set-playlist__info__num">{info}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
