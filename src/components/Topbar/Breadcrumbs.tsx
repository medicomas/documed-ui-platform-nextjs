import { useLocation, Link as RouterLink } from 'react-router-dom';

import Link, { LinkProps } from '@mui/material/Link';
import { Breadcrumbs, Typography } from '@mui/material';

import { breadcrumbNameMap } from '@/routes/config';

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
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography variant="h2" color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter variant="h2"  underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
