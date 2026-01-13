let navigateFunction = null;

export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

export const navigateTo = (path) => {
  if (navigateFunction) {
    navigateFunction(path, { replace: true });
  }
};
