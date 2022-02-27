import { envVariables } from './envVariables';

export const appUrl = `https://${envVariables.APP_DEPLOY_DOMAIN}`;

export const getPageUrl = (pageRoute: string) => {
  return `${appUrl}${pageRoute}`;
};

export const getApiEndpoint = (apiPath: string) => {
  return `${envVariables.API_BASE_URL}${apiPath}`;
};
