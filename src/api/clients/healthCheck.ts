import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { HealthCheckApiResponse } from '../types/healthCheck';

export const healthCheckApiClient = async () => {
  const getUrl = getApiEndpoint(apiPaths.api.healthCheck);

  const res = await axios.get<HealthCheckApiResponse>(getUrl);

  return res.data;
};
