import '../styles/components/_musiclist.scss'
import LikeDislikeButtons from "./UI/LikeDislikeButtons";

export default function MusicList({playlist, title, author, cover}) {

    return (
        <>
            <div className="playlists">
                <div className="playlists__item">
                    <div className="playlists__item__track">

                    </div>
                    <img
                        src={cover}
                        alt={`Обложка альбома: ${title}`}
                        className="playlists__item__cover"
                    />
                    <div className="playlists__item__description">
                        <h3 className="playlists__item__description__title">{title}</h3>
                        <h4 className="playlists__item__description__subtitle">{author}</h4>
                    </div>
                    <LikeDislikeButtons playlist={playlist}/>
                </div>
            </div>
        </>
    )
}
