import React, {Component} from 'react';
import {Popover, Image, Row, Col} from 'antd';
import './Login.less';

class Login extends Component {

  render() {
    const logo = require('./logo.jpg').default;
    return (
      <div className="my-login">
        <div className="login-box">
          <p>
            <Popover content="single dog" placement="right">
              <Image alt="logo" className="logo" src={logo}/>
            </Popover>
          </p>
          <p>一心一意做技术。U3D独立开发者，Web全栈工程师，资深魔兽地图作者。</p>
          <p>知道得越多，不知道的也就越多。</p>
          <p>
            React、Vue、JQuery、Bootstrap、SemanticUI、light7、icedesign、Antv、Antd、RsuiteJs、
            nginx、apache、supervisord、shadowsocks、svn、git、linux、
            Laravel、Zendframe2、ThinkPHP、workerman、swoole、nodeJs、wordpress、
            Mysql、postgreSQL、TimescaleDB、mssql、sqlite、mongo、redis、
            coco-creator、unity3D、gitbook、
            Rust、erlang、golang、
            lua、vJass、jass2、
            docker、k8s ...
          </p>
          <p> - Arctic Code Vault Contributor</p>
          <p> - Github Developer Program Member</p>
          <p> - <a target="_blank" href="https://github.com/hunzsig">Github/hunzsig</a></p>
          <p> - <a target="_blank" href="https://gitee.com/hunzsig">Gitee/hunzsig</a></p>
        </div>
        <Row className="copyright">
          <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
            <span>联系QQ：854588403</span>
          </Col>
          <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
            <span>© Copyright 2015-{(new Date().getFullYear())} All rights reserved.</span>
          </Col>
          <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
            <a href="http://www.beian.gov.cn" target="_blank" className="yellow">备案号：粤ICP备16003043号-1</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
