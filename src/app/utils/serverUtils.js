/**
 * Server-safe version of DOM manipulation functions
 */

/**
 * Server-safe version of createTag that returns null on server
 */
export function createTag() {
  return null;
}

/**
 * Server-safe version of document operations
 */
export const serverDocument = {
  createElement: () => null,
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
};

/**
 * Server-safe version of window operations
 */
export const serverWindow = {
  addEventListener: () => {},
  removeEventListener: () => {},
  location: {
    href: '',
    pathname: '',
    search: '',
  },
}; 