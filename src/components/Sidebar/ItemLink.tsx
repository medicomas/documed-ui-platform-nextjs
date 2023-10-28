import { NavLink } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { NavItem } from './NavItem';

type NavItem = {
  iconId: string;
  label: string;
};

interface ItemLinkProps extends LinkProps {
  navItem: NavItem;
}

export const ItemLink = ({ to, navItem }: ItemLinkProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      {({ isActive }) => {
        return <NavItem isActive={isActive} label={navItem.label} iconId={navItem.iconId} />;
      }}
    </NavLink>
  );
};
