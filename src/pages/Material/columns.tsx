import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';
import { IMaterialResponse } from '@codeHimalaya/service/material-service';
import { createColumnHelper } from '@tanstack/react-table';
const columnHelper = createColumnHelper<IMaterialResponse>();

export const useMaterialColumns = ({
  onEdit,
  onDelete,
}: {
  onEdit: (data: IMaterialResponse) => void;
  onDelete: (id: string) => void;
}) => {
  const col = [
    columnHelper.display({
      header: 'S.N.',
      cell: ({ row }) => row.index + 1,
    }),
    columnHelper.display({
      header: 'Product Name',
      cell: ({ row }) => <Text>{row.original.name}</Text>,
    }),

    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <HStack spacing={0}>
          <IconButton
            variant={'ghost'}
            aria-label="Edit Country"
            icon={<EditIcon color={'red.400'} />}
            onClick={() => onEdit(row.original)}
          />
          <IconButton
            variant={'ghost'}
            aria-label="Delete Country"
            icon={<DeleteIcon color={'red.400'} />}
            onClick={() => onDelete(row.original.id)}
          />
        </HStack>
      ),
    }),
  ];
  return col;
};
