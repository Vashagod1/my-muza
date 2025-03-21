import MusicList from "./MusicList";

const tracks = [
    {
        id: 1,
        num: '1',
        title: 'Golden',
        author: 'NeonNiteClub',
        length: '3:28',
        cover: '/images/MusicList/NeonNiteClub.jpg'
    },
    {
        id: 2,
        title: 'Back Up Friend',
        author: 'FromTom',
        length: '2:44',
        cover: '/images/MusicList/BackUpFriend.jpg',
    },
    {
        id: 3,
        title: 'Compañeros',
        author: 'Sundaypanic',
        length: '1:44',
        cover: '/images/MusicList/Compañeros.jpg',
    },
    {
        id: 4,
        title: 'The King',
        author: 'Cullah',
        length: '3:23',
        cover: '/images/MusicList/TheKing.jpg',
    },
    {
        id: 5,
        title: 'Never let go',
        author: 'NDA',
        length: '2:55',
        cover: '/images/MusicList/NDA.jpg',
    },
    {
        id: 6,
        title: 'More Than Friends',
        author: 'pyzow',
        length: '6:36',
        cover: '/images/MusicList/MoreThanFriends.jpeg',
    },
    {
        id: 7,
        title: 'Could I Be Enough? ',
        author: 'Roads',
        length: '3:42',
        cover: '/images/MusicList/CouldIBeEnough.jpg',
    },
    {
        id: 8,
        title: 'Sorrows Away',
        author: 'MarcusWay',
        length: '1:33',
        cover: '/images/MusicList/SorrowAway.jpg',
    },
    {
        id: 9,
        title: 'Voices',
        author: 'PNFA',
        length: '3:41',
        cover: '/images/MusicList/Voices.jpg',
    },
    {
        id: 10,
        title: 'outttt',
        author: 'AnasAmin',
        length: '3:25',
        cover: '/images/MusicList/outttt.jpeg',
    },
];


export default function MusicListSection() {
    return (
        <div className="music-list-section">
            <h2 className="playlists__title">Новинки этого года</h2>
            <div className="playlists__columns">
                {tracks.map(tracks => (
                    <MusicList key={tracks.id} {...tracks} />
                ))}
            </div>
        </div>
    );
}
