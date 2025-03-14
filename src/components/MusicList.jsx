import '../styles/components/_playlists.scss'
import { playlists } from '/public/data/playlists.js'

export default function MusicList() {
    return (
        <>
            <div className="playlists">
                <h2 className="playlists__title">Новинки этого года</h2>
                {playlists.map(playlist => (
                    <div key={playlist.id} className="playlists__item">
                        <img
                            src={playlist.cover}
                            alt={`Обложка альбома: ${playlist.title}`}
                            className="playlists__item__cover"
                        />
                        <div className="playlists__item__description">
                            <h3 className="playlists__item__description__title">{playlist.title}</h3>
                            <h4 className="playlists__item__description__subtitle">{playlist.author}</h4>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
