export interface Track {
    id: string;
    title: string;
    artist: string; // Optional, can add if known
    src: string;
    cover: string;
}

export const TRACKS: Track[] = [
    {
        id: 'caravan',
        title: 'Caravan',
        artist: 'Unknown',
        src: '/music/caravan.mp3',
        cover: '/music/caravan.jpg'
    },
    {
        id: 'creep',
        title: 'Creep',
        artist: 'Radiohead',
        src: '/music/creep.mp3',
        cover: '/music/creep.jpg'
    },
    {
        id: 'end-of-beginning',
        title: 'End of Beginning',
        artist: 'Djo',
        src: '/music/end of beginning.mp3',
        cover: '/music/end of beginning.jpg'
    },
    {
        id: 'loser',
        title: 'Loser',
        artist: 'Beck',
        src: '/music/loser.mp3',
        cover: '/music/loser.png'
    },
    {
        id: 'my-old-ways',
        title: 'My Old Ways',
        artist: 'Dr. Dog',
        src: '/music/my old ways.mp3',
        cover: '/music/my old ways.png'
    },
    {
        id: 'the-less-i-know',
        title: 'The Less I Know The Better',
        artist: 'Tame Impala',
        src: '/music/the less i know the better.mp3',
        cover: '/music/the less i know the better.jpg'
    },
    {
        id: 'nikamma',
        title: 'Nikamma',
        artist: 'Lifafa',
        src: '/music/nikamma.mp3', // Note: Ensure this file exists!
        cover: '/music/nikamma.jpg'
    }
];
