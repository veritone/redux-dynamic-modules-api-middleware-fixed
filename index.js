import { apiMiddleware } from 'redux-api-middleware-fixed';

export function getApiMiddlewareExtension() {
  return {
    middleware: [apiMiddleware(fetch)],
    onModuleManagerCreated: () => {},
    dispose: () => {},
    onModuleRemoved: () => {},
    onModuleAdded: () => {},
  };
}

export default getApiMiddlewareExtension;
