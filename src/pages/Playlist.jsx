import "../styles/pages/_playlist.scss"
import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import playlistsData from "/public/data/PlaylistsData";
import {Heart} from "lucide-react";
import musicData from "../../public/data/MusicData";

export default function Playlist() {
    const { id } = useParams();
    const [playlistData, setPlaylistData] = useState(null);
    const [playlistTracks, setPlaylistTracks] = useState([]);

    useEffect(() => {
        const found = playlistsData.find((p) => p.id === parseInt(id));
        setPlaylistData(found);

        if (found && found.trackIds) {
            const tracks = musicData.filter((track) => found.trackIds.includes(track.id));
            setPlaylistTracks(tracks);
        }
    }, [id]);

    if (!playlistData) {
        return <div>Загрузка...</div>;
    }

    return(
        <div className="playlist">
            <div className="playlist__container">
                <div className="playlist__cover">
                    <img src={playlistData.cover}
                         alt={playlistData.title}
                         className="playlist__cover-img"
                    />
                    <div className="playlist__cover-overlay"></div>
                </div>
                <div className="playlist__text-info">
                    <div className="playlist__description">
                        <h3 className="playlist__designation">Плейлист</h3>
                        <h1 className="playlist__title">{playlistData.title}</h1>
                        <p className="playlist__texts">{playlistData.texts}</p>
                    </div>
                    <div className="set-playlist__info">
                        <div className="set-playlist__info__icon"><Heart/></div>
                        <div className="set-playlist__info__num">{playlistData.info}</div>
                    </div>
                </div>
            </div>
            <div className="playlist__tracks">
                {playlistTracks.length > 0 ? (
                playlistTracks.map((track) => (
                <div key={track.id} className="plalist__track-description">
                    <img src={track.cover} alt={track.title}/>
                    <h4 className="playlist__track-title">{track.title}</h4>
                    <p className="playlist__track-author">{track.author}</p>
                    <span className="playlist__track">{track.length}</span>
                </div>))
                ) : (
                    <p className="playlist__no-tracks">Треки не найдены.</p>
                )}
            </div>
        </div>
    );
}