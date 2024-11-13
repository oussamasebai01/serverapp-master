export interface Environment {
  production: boolean;
  API_URL: string;
}

export const environment: Environment = {
  production: false,
  API_URL: 'http://192.168.100.102:8002/server',
};