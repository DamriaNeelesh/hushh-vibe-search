/**
 * Safe browser utilities that work in both server and client environments
 */

// Check if we're in a browser environment
export const isBrowser = () => typeof window !== 'undefined';

// Safe document access
export const safeDocument = {
  createElement: (tag) => {
    if (!isBrowser()) return {};
    return document.createElement(tag);
  },
  getElementById: (id) => {
    if (!isBrowser()) return null;
    return document.getElementById(id);
  },
  querySelector: (selector) => {
    if (!isBrowser()) return null;
    return document.querySelector(selector);
  }
};

// Safe window access
export const safeWindow = {
  location: {
    get href() {
      return isBrowser() ? window.location.href : '';
    },
    get pathname() {
      return isBrowser() ? window.location.pathname : '';
    }
  },
  addEventListener: (event, handler) => {
    if (isBrowser()) {
      window.addEventListener(event, handler);
    }
  },
  removeEventListener: (event, handler) => {
    if (isBrowser()) {
      window.removeEventListener(event, handler);
    }
  }
}; 