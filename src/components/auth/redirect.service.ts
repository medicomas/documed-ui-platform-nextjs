function redirectTo(route: string) {
  history.pushState(null, '', '/' + route);
}

function goToRoute(route: string | undefined | null) {
  if (!route || route.trim().length === 0) return;
  redirectTo(route);
}

export const RedirectService = {
  goToRoute,
};
