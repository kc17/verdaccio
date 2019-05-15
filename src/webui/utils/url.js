import validator from 'validator';

export function getRegistryURL() {
  // Don't add slash if it's not a sub directory
  return `${location.origin}${location.pathname === '/' ? '' : location.pathname}`;
}

export function isURL(url) {
  return validator.isURL(url || '', {
    protocols: ['http', 'https', 'git+https'],
    require_protocol: true
  });
}

/**
 * Get specified package detail page url
 * @param {string} packageName
 */
export function getDetailPageURL(packageName) {
  return `${getRegistryURL()}/#/detail/${packageName}`;
}
