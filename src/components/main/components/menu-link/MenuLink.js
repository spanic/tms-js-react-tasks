import { useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import './MenuLink.scss';

export default function MenuLink({ icon, path, collapsed, children }) {
  const getLinkClass = useCallback(
    ({ isActive }) => {
      const classList = ['navigation-link'];
      collapsed && classList.push('navigation-link_collapsed');
      isActive && classList.push('navigation-link_active');
      return classList.join(' ');
    },
    [collapsed]
  );

  const iconClass = useMemo(() => {
    const classList = ['navigation-link__icon'];
    !collapsed && classList.push('navigation-link__icon_with-gap');
    return classList.join(' ');
  }, [collapsed]);

  return (
    <NavLink to={path} className={getLinkClass}>
      {icon && <span className={iconClass}>{icon}</span>}
      {!collapsed && children}
    </NavLink>
  );
}
