// because who needs `is-windows`
export const isWindows = () => process.platform === 'win32';

export const ismacOS = () => process.platform === 'darwin';

export const isLinux = () => process.platform === 'linux';

export const isDevelopment = () => process.env.NODE_ENV !== 'production';
