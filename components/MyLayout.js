import MyHeader from './Header'
import {Layout, Menu, Icon, LocaleProvider} from 'antd';
import Head from 'next/head'
const {Content, Sider} = Layout;
import Link from 'next/link'
import enUS from 'antd/lib/locale-provider/en_US'
import stylesheet from '../styles/index.less';

const MyLayout = ({children, title = 'This is the default title'}) => (

        <Layout className="layout">
            <Head>
                <title>Subtitles</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta charSet='utf-8'/>
                <link rel="stylesheet" href="/static/styles.css" />
            </Head>
            <MyHeader/>
            <div className="background-container">
                <div>
                    <div className="background-image"></div>
                </div>
                <div className="background-noise"></div>
            </div>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <Menu.Item key="1">
                            <Link href={`/series`}>
                            <span>
                                <Icon type="mail"/>
                                Movies
                            </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link href={`/series`}>
                            <span>
                                <Icon type="mail"/>
                                Movies
                            </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content style={{padding: 60, margin: 0, minHeight: 280}}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <style jsx global>{`
        #__next {
            height: 100%;
        }
        .ant-layout {
            height: 100%;
        }
        .ant-layout, .ant-layout-sider {
            background: none;
        }
        .ant-menu {
            background-color: rgba(0,0,0,.15);
        }
        .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: transparent;
        }
        .ant-layout-footer {
            background: none;
        }
        .background-container {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background-color: #3f4245;
         }
        .background-image {
            background-image: url(/static/img/bg-image.png);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
        }
        .background-noise {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(/static/img/noise.png);
            z-index: 2;
        }
        .ant-menu-inline .ant-menu-item-selected::after {
            opacity: 0;
        }
        `}</style>
        </Layout>

)

export default MyLayout