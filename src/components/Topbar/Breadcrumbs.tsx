import { useLocation, Link as RouterLink } from "react-router-dom";

import Link, { LinkProps } from '@mui/material/Link';
import { Breadcrumbs, Typography } from '@mui/material';

import { breadcrumbNameMap } from "@/routes/config";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export function CustomBreadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <LinkRouter underline="hover" color="inherit" to="/">
          Login
        </LinkRouter>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
  
          return last ? (
            <Typography color="text.primary" key={to}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    );
  }