import { CONFIG } from '../config';

export const checkViewAccess = (viewName: string) => {
  const scope = localStorage.getItem('scope');
  const parsedScope = scope && JSON.parse(scope);
  const getClientScope = parsedScope && parsedScope[CONFIG.CLIENT_ID];

  // Check if getClientScope is an object and has the viewName property
  if (
    getClientScope &&
    typeof getClientScope === 'object' &&
    Object.prototype.hasOwnProperty.call(getClientScope, viewName)
  ) {
    // Check if the view has 'VIEW' permission
    return getClientScope[viewName].includes('VIEW');
  } else {
    return false; // View not found or permission not granted
  }
};
