import MusicList from "./MusicList";

const playlists = [
    {
        id: 1,
        num: '1',
        title: 'Golden',
        author: 'NeonNiteClub',
        length: '3:27',
        cover: '/images/NeonNiteClub.jpg'
    },
    {
        id: 2,
        title: 'Back Up Friend',
        author: 'FromTom',
        cover: '/images/BackUpFriend.jpg',
    },
    {
        id: 3,
        title: 'Compañeros',
        author: 'Sundaypanic',
        cover: '/images/Compañeros.jpg',
    },
    {
        id: 4,
        title: 'The King',
        author: 'Cullah',
        cover: '/images/TheKing.jpg',
    }
];


export default function MusicListSection() {

    return (
        <div className="music-list-section">
            <div className="music-list-section__content">
                <h2 className="playlists__title">Новинки этого года</h2>
                {playlists.map(playlist => (
                    <MusicList key={playlist.id}
                               playlist={playlist}
                               num={playlist.num}
                               title={playlist.title}
                               author={playlist.author}
                               length={playlist.length}
                               cover={playlist.cover}
                    />
                ))}
            </div>
        </div>
    )
}