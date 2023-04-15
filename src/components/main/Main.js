import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FormatPainterOutlined } from '@ant-design/icons';

import MenuLink from './components/menu-link/MenuLink.js';

import './Main.scss';

import { ReactComponent as ShopIcon } from '../shared/assets/shopping-cart.svg';
import { ReactComponent as TaskListWithReactIcon } from './assets/atom-icon.svg';
import { ReactComponent as AirportScheduleIcon } from './assets/calendar-days-icon.svg';
import { ReactComponent as LifecycleIcon } from './assets/clock-icon.svg';
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
        <MenuLink
          title="Default"
          icon={<IntroIcon />}
          path="intro"
          collapsed={collapsed}
        />
        <MenuLink
          title="Task List (JS)"
          icon={<TaskListIcon />}
          path="task-list-v1"
          collapsed={collapsed}
        />
        <MenuLink
          title="Task List (React)"
          icon={
            <TaskListWithReactIcon className="navigation-link__icon_filled" />
          }
          path="task-list-v2"
          collapsed={collapsed}
        />
        <MenuLink
          title="Lifecycle"
          icon={<LifecycleIcon className="navigation-link__icon_filled" />}
          path="lifecycle"
          collapsed={collapsed}
        />
        <MenuLink
          title="Airport schedule"
          icon={<AirportScheduleIcon />}
          path="schedule"
          collapsed={collapsed}
        />
        <MenuLink
          title="Context"
          icon={<FormatPainterOutlined />}
          path="context"
          collapsed={collapsed}
        />
        <MenuLink
          title="Shop"
          icon={<ShopIcon className="navigation-link__icon_filled" />}
          path="shop"
          collapsed={collapsed}
        />
      </Sider>
      <Layout>
        <Content className="main__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
