import MusicList from "./MusicList";
import musicData from "../../public/data/MusicData";


export default function MusicListSection() {
    return (
        <div className="music-list-section">
            <h2 className="playlists__title">Новинки этого года</h2>
            <div className="playlists__columns">
                {musicData.map(tracks => (
                    <MusicList key={tracks.id} {...tracks} />
                ))}
            </div>
        </div>
    );
}
