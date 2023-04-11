import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import './MenuLink.scss';

export default function MenuLink({ title, icon, path, collapsed }) {
  /**
   * As an icon you can use any custom SVG or, for example, Ant Design icons.
   * If you're using custom SVG, plase make sure that you removed fill / stroke attributes from .svg
   */

  const getLinkClass = useCallback(
    ({ isActive }) => {
      const classList = ['navigation-link'];
      collapsed && classList.push('navigation-link_collapsed');
      isActive && classList.push('navigation-link_active');
      return classList.join(' ');
    },
    [collapsed]
  );

  return (
    <NavLink to={path} className={getLinkClass}>
      {icon && <span className="navigation-link__icon">{icon}</span>}
      {!collapsed && <span className="navigation-link__title">{title}</span>}
    </NavLink>
  );
}
