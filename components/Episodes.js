import {List, Avatar, Icon} from 'antd';

const pagination = (total) => {
    return {
        pageSize: 10,
        current: 1,
        total: total,
        onChange: (() => {
        }),
    }
};

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

const Episodes = (props) => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={pagination(props.episodes.length)}
        dataSource={props.episodes}
        renderItem={item => (
            <List.Item
                key={item.id}
                actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                    <IconText type="message" text="2"/>]}
                extra={<img width={200} alt="logo"
                            src={`https://image.tmdb.org/t/p/w200/${item.still_path}`}/>}
            >
                <div>Episode {item.episode_number}</div>
                <div>{item.name}</div>
                <div>{item.overview}</div>
            </List.Item>
        )}
    />);


export default Episodes