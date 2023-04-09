import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as TaskListWithReactIcon } from './assets/atom-icon.svg';
import { ReactComponent as AirportScheduleIcon } from './assets/calendar-days-icon.svg';
import { ReactComponent as IntroIcon } from './assets/coffee-icon.svg';
import { ReactComponent as TaskListIcon } from './assets/task-list-icon.svg';
import MenuLink from './components/menu-link/MenuLink';

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
          icon={<TaskListWithReactIcon className="navigation-link-icon_atom" />}
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
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
