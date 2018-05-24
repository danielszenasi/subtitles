import Layout from '../components/MyLayout.js'
import {Row, Col, Progress} from 'antd';
import SeasonPreview from '../components/SeasonPreview.js'

const apiKey = '8a8f735733d4711586865cb339c5ade3';

const divStyle = (posterPath) => {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + posterPath + ')'
    }
};

const getYear = (date) => {
    return new Date(date).getFullYear()
};

const getSeasons = (seasons, tvId) => {
    return seasons.map(season => (
            <Col className="season-col" span={4} key={season.id}>
                <SeasonPreview tvId={tvId} season={season}/>
            </Col>
        )
    )
}

const TV = (props) => (
    <Layout>
        <div className="wrapper">
            <Row>
                <Col span={4}>
                    <div className="poster-card">
                        <div className="poster" style={divStyle(props.data.poster_path)}></div>
                    </div>
                </Col>
            </Row>
        </div>

        <Row>
            <Col span={18} offset={6}>
                <div className="main">
                    <div>
                        <div className="title">{props.data.name}</div>
                        <div>{getYear(props.data.first_air_date)}</div>
                    </div>

                    <Progress width={50} strokeWidth={14} type="circle" percent={75}/>
                </div>
                <div>{props.data.overview}</div>
                <Row gutter={50}>
                    {getSeasons(props.data.seasons, props.data.id)}
                </Row>

            </Col>
        </Row>
        <style>{`
            .poster {
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                z-index: 2;
                width: 100%;
                height: 100%;
                }
             .poster-card {
                width: 100%;
                height: 25vw;
             }
             .wrapper {
                 width: 100%;
                 position: fixed;
                 top: 124px;
             }
             .title {
                font-size: 24px;
             }
             .main {
                display: flex;
                justify-content: space-between;
             }
             .season-col {
                  padding: 60px 25px 0 25px;
             }
        `}</style>
    </Layout>
)

TV.getInitialProps = async ({query}) => {
    const movieId = query.id;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?&api_key=${apiKey}`);
    const data = await res.json();
    return {
        data: data
    }
};

export default TV;