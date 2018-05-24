import MyLayout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Row, Col } from 'antd';

const apiKey = '8a8f735733d4711586865cb339c5ade3';

const divStyle = (posterPath) => {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + posterPath + ')'
    }

};

const Series = (props) => (
    <MyLayout>
        <h1>Batman TV Shows</h1>
        <Row gutter={16}>
            {props.data.results.map((show) => (
                <Col className="gutter-row" span={4} key={show.id}>
                    <Link as={`/t/${show.id}`} href={`/tv?id=${show.id}`}>
                        <div className="poster" style={divStyle(show.poster_path)}></div>
                    </Link>
                    <div className="desc">
                        <Link as={`/t/${show.id}`} href={`/tv?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </div>
                </Col>
            ))}
        </Row>
        <style>{`
            .desc {
                height: 50px
            }

            .poster {
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                z-index: 2;
                width: 100%;
                height: 19vw;
                }

        `}</style>
    </MyLayout>
)

Series.getInitialProps = async function () {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?&api_key=${apiKey}`);
    const data = await res.json();
    return {
        data: data
    }
};

export default Series