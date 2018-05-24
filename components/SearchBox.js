import {Icon, Button, Input, AutoComplete} from 'antd';
import Link from 'next/link'

const Option = AutoComplete.Option;
const apiKey = '8a8f735733d4711586865cb339c5ade3';

const divStyle = (posterPath) => {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w200' + posterPath + ')'
    }
};

function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

async function searchResult(query) {
    const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}?&api_key=${apiKey}`);
    const data = await res.json();
    return data.results;
}

function renderOption(item) {
    return (
        <Option key={item.id} text={item.name}>
            <div className="option">
                <div className="search-poster" style={divStyle(item.poster_path)}></div>
                <Link as={`/t/${item.id}`} href={`/tv?id=${item.id}`}>
                    <a><span className="label">{item.name}</span></a>
                </Link>

            </div>
        </Option>
    );
}


class SearchBox extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {

        searchResult(value).then(results => {
            console.log(results);
            this.setState({
                dataSource: value ? results : [],
            });
        });

    }

    render() {
        const {dataSource} = this.state;
        return (
            <div className="global-search-wrapper" style={{width: 360}}>
                <AutoComplete
                    className="global-search"
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    optionLabelProp="text"
                >
                    <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>

                </AutoComplete>
                <style>{`
                .search-poster {
                    background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat;
                    z-index: 2;
                    width: 28px;
                    height: 42px;
                }
                .option {
                    display: flex;
                }
                .label {
                    padding-left: 12px;
                }

                .global-search {
                    width: 100%;
                }


                .ant-select-selection {
                    background-color: rgba(255, 255, 255, 0.20);
                }
                .ant-input-affix-wrapper .ant-input-suffix {
                    color: #fff;
                }
                .ant-input {
                    box-shadow: none;
                    border: none;
                }

                `}</style>
            </div>
        );
    }
}

export default SearchBox