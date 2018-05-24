import Layout from '../components/MyLayout.js'
import Episodes from '../components/Episodes.js'
import {Row, Col, Progress} from 'antd';

const apiKey = '8a8f735733d4711586865cb339c5ade3';

const divStyle = (posterPath) => {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + posterPath + ')'
    }
};

const getYear = (date) => {
    return new Date(date).getFullYear()
};

const Season = (props) => (
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
                <div className="title">{props.data.name}</div>
                <Episodes episodes={props.data.episodes}/>
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

        `}</style>
    </Layout>
)

Season.getInitialProps = async ({query}) => {
    const tvId = query.id;
    const seasonNumber = query.seasonNumber;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?&api_key=${apiKey}`);
    const data = await res.json();
    return {
        data: data
    }
};

export default Season;