function TrackSearchCard({ tracks, idx }) {
    console.log(tracks);
    return (
        <li>
            <a href={tracks.url} target="_blank">
                <p>{idx}</p>
                <p>{tracks.name}</p>
                <p>{tracks.artist}</p>
                <p>{tracks.listeners}</p>
            </a>
        </li>
    );
}

export default TrackSearchCard;
