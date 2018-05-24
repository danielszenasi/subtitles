import Link from 'next/link'

const divStyle = (posterPath) => {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + posterPath + ')'
    }
};

const SeasonPreview = (props) => (
    <div>
        <Link as={`/s/${props.tvId}/${props.season.season_number}`} href={`/season?id=${props.tvId}&seasonNumber=${props.season.season_number}`}>
            <div className="season-poster" style={divStyle(props.season.poster_path)}></div>
        </Link>
        <div className="desc">
            <Link as={`/s/${props.tvId}/${props.season.season_number}`} href={`/season?id=${props.tvId}&seasonNumber=${props.season.season_number}`}>
                <a>Season {props.season.season_number}</a>
            </Link>
            <div>{props.season.episode_count} Episodes</div>
        </div>
        <style>{`
            .season-poster {
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                z-index: 2;
                width: 100%;
                height: 11vw;
            }
        `}</style>
    </div>
);

export default SeasonPreview