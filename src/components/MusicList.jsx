import { Play, Pause } from "lucide-react";
import "../styles/components/_musiclist.scss";
import LikeDislikeButtons from "./UI/LikeDislikeButtons";
import {useAudioPlayer} from "./UI/AudioPlayerContext";

export default function MusicList({ id, title, author, cover, length, src}) {
    const {currentTrack, isPlaying, playTrack, pause} = useAudioPlayer();

    const isCurrentTrack = currentTrack?.id === id;

    const handlePlayPause = () => {
        if (isCurrentTrack) {
            if (isPlaying) {
                pause();
            } else {
                playTrack(currentTrack);
            }
        }  else {
            playTrack({id, title, author, cover, src});
        }
    };

    return (
        <div className="playlists__item">
            <div className="playlists__item__cover-container">
                <img
                    src={cover}
                    alt={`Обложка альбома: ${title}`}
                    className="playlists__item__cover"
                />
                <button
                    className="playlists__item__play-btn"
                    onClick={handlePlayPause}
                >
                    {isCurrentTrack && isPlaying ? <Pause /> : <Play />}
                </button>
            </div>
            <div className="playlists__item__description">
                <h3 className="playlists__item__description__title">{title}</h3>
                <h4 className="playlists__item__description__subtitle">{author}</h4>
            </div>
            <div className="playlists__item__controls">
                <div className="playlists__item__length">{length}</div>
                <LikeDislikeButtons className="like-buttons"/>
            </div>
        </div>
    );
}