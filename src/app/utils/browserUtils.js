'use client';

/**
 * Safely execute code only in browser environment
 * @param {Function} fn - Function to execute in browser
 * @param {any} fallback - Value to return on server
 */
export function safelyRunInBrowser(fn, fallback = null) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return fallback;
  }
  return fn();
}

/**
 * Check if code is running in browser
 */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Create a DOM element safely (only in browser)
 */
export function createTag(tagName, attributes = {}, content = '') {
  // Return null during server-side rendering
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }
  
  const element = document.createElement(tagName);
  
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  
  if (content) {
    element.innerHTML = content;
  }
  
  return element;
} 