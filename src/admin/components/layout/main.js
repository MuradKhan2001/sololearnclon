import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import "./main.css";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import AddCourse from "../course/add-course";
import {Link, Switch, Route} from "react-router-dom";
import ListCourse from "../course/list-course";
import Lesson from "../lesson/lesson";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Main(props) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Course">


                            <Link to={'/admin/main/course/add'}>
                                <Menu.Item key="1">Add</Menu.Item>
                            </Link>
                            <Link to={'/admin/main/course/list'}>
                                <Menu.Item key="2">List</Menu.Item>
                            </Link>


                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Lesson">
                            <Link to={'/admin/main/lesson/add'}>
                                <Menu.Item key="3">Add</Menu.Item>
                            </Link>
                            <Link to={'/admin/main/lesson/list'}>
                                <Menu.Item key="4">List</Menu.Item>
                            </Link>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {/*{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {*/}
                        {/*    className: 'trigger',*/}
                        {/*    onClick: setCollapsed(prevState=>!prevState),*/}
                        {/*})}*/}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                       <Switch>
                           <Route path={'/admin/main/lesson/add'} component={Lesson}/>
                           <Route path={'/admin/main/course/add'} component={AddCourse}/>
                           <Route path={'/admin/main/course/list'} component={ListCourse}/>
                       </Switch>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;