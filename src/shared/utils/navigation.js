let navigateFunction = null;

export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

export const navigateTo = (path) => {
  if (navigateFunction) {
    navigateFunction(path, { replace: true });
  }
};
let dispatchFunction = null;

export const setdispatch = (dispatch) => {
  dispatchFunction = dispatch;
};

export const dispatchAction = (func) => {
  if (dispatchFunction) {
    dispatchFunction(func);
  }
};
