import {Layout, Menu} from 'antd';

const {Header} = Layout;
import SearchBox from './SearchBox'

const MyHeader = () => (
    <Header>
        <SearchBox/>
    </Header>
)

export default MyHeader