import MusicList from "./MusicList";

const playlists = [
    {
        id: 1,
        num: '1',
        title: 'Golden',
        author: 'NeonNiteClub',
        length: '3:28',
        cover: '/images/NeonNiteClub.jpg'
    },
    {
        id: 2,
        title: 'Back Up Friend',
        author: 'FromTom',
        length: '2:44',
        cover: '/images/BackUpFriend.jpg',
    },
    {
        id: 3,
        title: 'Compañeros',
        author: 'Sundaypanic',
        length: '1:44',
        cover: '/images/Compañeros.jpg',
    },
    {
        id: 4,
        title: 'The King',
        author: 'Cullah',
        cover: '/images/TheKing.jpg',
    },
    {
        id: 5,
        title: 'Never let go',
        author: 'NDA',
        cover: '/images/NDA.jpg',
    },
    {
        id: 6,
        title: 'More Than Friends',
        author: 'pyzow',
        cover: '/images/MoreThanFriends.jpeg',
    },
    {
        id: 7,
        title: 'Could I Be Enough? ',
        author: 'Roads',
        cover: '/images/CouldIBeEnough.jpg',
    },
    {
        id: 8,
        title: 'Sorrows Away',
        author: 'MarcusWay',
        cover: '/images/SorrowAway.jpg',
    },
    {
        id: 9,
        title: 'Voices',
        author: 'PNFA',
        cover: '/images/Voices.jpg',
    },
    {
        id: 10,
        title: 'outttt',
        author: 'AnasAmin',
        cover: '/images/outttt.jpeg',
    },
];


export default function MusicListSection() {
    return (
        <div className="music-list-section">
            <h2 className="playlists__title">Новинки этого года</h2>
            <div className="playlists__columns">
                {playlists.map(playlist => (
                    <MusicList key={playlist.id} {...playlist} />
                ))}
            </div>
        </div>
    );
}
