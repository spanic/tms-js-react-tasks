import { Layout } from 'antd';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Outlet } from 'react-router-dom';

import MenuLink from './components/menu-link/MenuLink.js';

import './Main.scss';

import { ReactComponent as TaskListWithReactIcon } from './assets/atom-icon.svg';
import { ReactComponent as AirportScheduleIcon } from './assets/calendar-days-icon.svg';
import { ReactComponent as IntroIcon } from './assets/coffee-icon.svg';
import { ReactComponent as TaskListIcon } from './assets/task-list-icon.svg';

const { Content, Sider } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="main__navigation-links-container"
      >
        <Scrollbars
          renderThumbVertical={(props) => (
            <div {...props} className="main__scroll" />
          )}
          autoHide
        >
          <MenuLink icon={<IntroIcon />} path="/intro" collapsed={collapsed}>
            Default
          </MenuLink>
          <MenuLink
            icon={<TaskListIcon />}
            path="/task-list-v1"
            collapsed={collapsed}
          >
            Task List (JS)
          </MenuLink>
          <MenuLink
            icon={
              <TaskListWithReactIcon className="navigation-link-icon_atom" />
            }
            path="/task-list-v2"
            collapsed={collapsed}
          >
            Task List (React)
          </MenuLink>
          <MenuLink
            icon={<AirportScheduleIcon />}
            path="/schedule"
            collapsed={collapsed}
          >
            Airport schedule
          </MenuLink>
        </Scrollbars>
      </Sider>
      <Layout>
        <Content className="main__content">
          <Scrollbars
            renderThumbVertical={(props) => (
              <div {...props} className="main__scroll" />
            )}
            renderThumbHorizontal={(props) => (
              <div {...props} className="main__scroll" />
            )}
            autoHide
          >
            <Outlet />
          </Scrollbars>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
