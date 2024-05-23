import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api, ApiResponse } from './service-api';
import { HttpClient } from './service-axios';
import { toastFail, toastSuccess } from './service-toast';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
import { AxiosError } from 'axios';
// import { toastFail, toastSuccess } from './service-toast';
// import { useNavigate } from 'react-router-dom';
// import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
// import { AxiosError } from 'axios';

// interface Response {
//   message?: string;
// }
export interface IPurchaseResponseData {
  id: string;
  name: {
    id: string;
    name: string;
  };
  quantity: number;
  rate: number;
  total: number;
  created_at: Date;
}

export interface IPurchaseRequestData {
  name_id: string;
  quantity: string;
  rate: string;
  created_at?: string;
}

const getPurchase = async (params = {}) => {
  const response = await HttpClient.get<ApiResponse<IPurchaseResponseData[]>>(
    api.purchase,
    { params },
  );
  return response;
};

export const useGetPurchases = (params = {}) =>
  useQuery(['purchase', params], () => getPurchase(params), {
    select: (response) => response.data.data,
  });

// const updateStatus = async ({
//   is_active,
//   id,
// }: {
//   is_active: boolean;
//   id: string;
// }) => {
//   const data = {
//     is_active: is_active,
//   };
//   const response = await HttpClient.patch<ApiResponse<IPurchaseResponseData>>(
//     `${api.service.getServices}${id}/`,
//     data,
//   );
//   return response;
// };

// export const useUpdateServiceStatus = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     ({ is_active, id }: { is_active: boolean; id: string }) =>
//       updateStatus({ is_active, id }),
//     {
//       onSuccess: () => {
//         toastSuccess('Status updated Successfully');
//         queryClient.invalidateQueries('services');
//       },
//     },
//   );
// };

const deletePurchase = async ({ id }: { id: string }) => {
  const response = await HttpClient.delete<ApiResponse>(
    `${api.purchase}${id}/`,
  );
  return response;
};

export const useDeletePurchase = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id }: { id: string }) => deletePurchase({ id }), {
    onSuccess: () => {
      toastSuccess('Purchase deleted Successfully');
      queryClient.invalidateQueries('purchase');
    },
  });
};

const addPurchase = async (data: IPurchaseRequestData) => {
  const response = await HttpClient.post<ApiResponse>(api.purchase, data);
  return response;
};

export const useAddPurchase = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(addPurchase, {
    onSuccess: () => {
      toastSuccess('Status added Successfully');
      queryClient.invalidateQueries('services');
      navigate(NAVIGATION_ROUTES.PURCHASE);
    },
    onError: (error: AxiosError<Response>) => {
      toastFail('Failed to add service');
    },
  });
};
