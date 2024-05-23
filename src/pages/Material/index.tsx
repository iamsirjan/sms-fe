import { DataTable } from '@codeHimalaya/components/dataTable';
import { useMaterialColumns } from './columns';
import {
  useDeleteMaterial,
  useGetMaterial,
} from '@codeHimalaya/service/material-service';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import { BreadCrumb } from '@codeHimalaya/components/breadCrumb';
import { AddIcon } from '@chakra-ui/icons';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
import { useNavigate } from 'react-router-dom';
import AlertDialogComponent from '@codeHimalaya/components/alertDialog';
import { useState } from 'react';

const Material = () => {
  const { data } = useGetMaterial();
  const navigate = useNavigate();
  const deleteMaterial = useDeleteMaterial();
  const [materialId, setMaterialId] = useState('');

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const onEdit = () => {
    //
  };

  const onDelete = (id: string) => {
    setMaterialId(id);
    onOpenDelete();
  };

  const deleteMaterialHandler = async () => {
    await deleteMaterial.mutateAsync({
      id: materialId,
    });
    onCloseDelete();
  };

  const columns = useMaterialColumns({
    onEdit: onEdit,
    onDelete: onDelete,
  });
  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <BreadCrumb
          items={[]}
          title={{ name: 'Material', route: '/material' }}
        />
        <Button
          leftIcon={<AddIcon />}
          size={'md'}
          borderRadius={'6px'}
          onClick={() => navigate(NAVIGATION_ROUTES.ADDMATERIAL)}
        >
          Add Material
        </Button>
      </Flex>
      <DataTable columns={columns} data={data ?? []} />
      <AlertDialogComponent
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onClick={() => deleteMaterialHandler()}
        title="Delete Material"
        isLoading={deleteMaterial.isLoading}
        description="Are you sure do you want to delete this Material?"
      />
    </Box>
  );
};

export default Material;
