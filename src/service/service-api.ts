export const api = {
  login: 'api/v1/login/',
  purchase: 'api/v1/purchase/',
  material: 'api/v1/material/',
};

export interface ApiResponse<T = any> {
  data: T;
  status: boolean;
  message: string;
}
