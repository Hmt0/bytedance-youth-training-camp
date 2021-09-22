import { Input, Menu, Row, Col } from "antd"
import './App.css';
import 'antd/dist/antd.css';
import logo from "./assets/logo.svg"
// import bigLogo from "./assets/bigLogo.svg"
import { UnorderedListOutlined } from "@ant-design/icons"
import { BigLogo } from "./BigLogo";
import MyComponent from "./Components/MyComponent";
import React from "react";

const { SubMenu } = Menu;

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: 'red',
  },
};

const ThemeContext = React.createContext(
  themes.dark // 默认值
);

function App(props) {
  return (
    <div className="App">
      {props.children }
      <ThemeContext.Provider>
        <MyComponent />
      </ThemeContext.Provider>
      <Row>
        <Col>
        <h1>
          <a href="https://ant.design/index-cn" id="logo">
            <img alt="logo" src={logo}/>
            Ant Design
          </a>
        </h1>
        </Col>
        <Col flex={1} align="center">
          <div id="search-box">
            <Input placeholder="search"></Input>
          </div>
        </Col>
        <Col>
          <Menu mode="horizontal">
            <Menu.Item>设计</Menu.Item>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>组件</Menu.Item>
            <Menu.Item>资源</Menu.Item>
            <Menu.Item>国内镜像</Menu.Item>
            <SubMenu key="SubMenu" icon={<UnorderedListOutlined />} title="">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
      <Row className="home-banner-content" justify="center">
        <BigLogo />
      </Row>
      
    </div>
  );
}

export default App;
