// Navigation utilities - allows navigation from outside React components
let navigateFunction = null;

// Set navigate function from React Router
export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

// Navigate to path using stored navigate function
export const navigateTo = (path) => {
  if (navigateFunction) {
    navigateFunction(path, { replace: true });
  }
};

// Redux dispatch utilities - allows dispatch from outside React components
let dispatchFunction = null;

// Set dispatch function from Redux
export const setdispatch = (dispatch) => {
  dispatchFunction = dispatch;
};

// Dispatch action using stored dispatch function
export const dispatchAction = (func) => {
  if (dispatchFunction) {
    dispatchFunction(func);
  }
};
