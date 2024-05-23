import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ApiResponse, api } from './service-api';
import { HttpClient } from './service-axios';
import { toastFail, toastSuccess } from './service-toast';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
import { AxiosError } from 'axios';

export interface IMaterialResponse {
  id: string;
  name: string;
}

export interface IMaterialRequest {
  name: string;
}

const getMaterial = async () => {
  const response = await HttpClient.get<ApiResponse<IMaterialResponse[]>>(
    api.material,
  );
  return response;
};

export const useGetMaterial = () =>
  useQuery('material', getMaterial, {
    select: (response) => response.data.data,
  });

const deleteMaterial = async ({ id }: { id: string }) => {
  const response = await HttpClient.delete<ApiResponse>(
    `${api.material}${id}/`,
  );
  return response;
};

export const useDeleteMaterial = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id }: { id: string }) => deleteMaterial({ id }), {
    onSuccess: () => {
      toastSuccess('Material deleted successfully');
      queryClient.invalidateQueries('material');
    },
  });
};

const addMaterial = async (data: IMaterialRequest) => {
  const response = await HttpClient.post<ApiResponse>(api.material, data);
  return response;
};

export const useAddMaterial = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(addMaterial, {
    onSuccess: () => {
      toastSuccess('Material added successfully');
      queryClient.invalidateQueries('material');
      navigate(NAVIGATION_ROUTES.MATERIAL);
    },
    onError: (error: AxiosError<Response>) => {
      console.log(error);
      toastFail(error.response?.data?.name[0]);
    },
  });
};
