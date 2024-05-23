import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';
import { IPurchaseResponseData } from '@codeHimalaya/service/purchase-service';
import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import adbs from 'ad-bs-converter';
const columnHelper = createColumnHelper<IPurchaseResponseData>();

export const usePurchaseColumns = ({
  onEdit,
  onDelete,
}: {
  onEdit: (data: IPurchaseResponseData) => void;
  onDelete: (id: string) => void;
}) => {
  const col = [
    columnHelper.display({
      header: 'S.N.',
      cell: ({ row }) => row.index + 1,
    }),
    columnHelper.display({
      header: 'Product Name',
      cell: ({ row }) => <Text>{row.original.name.name}</Text>,
    }),
    columnHelper.accessor('quantity', {
      header: 'Quantity',
    }),

    columnHelper.accessor('rate', {
      header: 'Rate',
    }),

    columnHelper.accessor('total', {
      header: 'Total',
    }),
    columnHelper.display({
      header: 'Purchased At',
      cell: ({ row }) => {
        const date = format(new Date(row.original.created_at), 'yyyy/MM/dd');
        const convertedDate = adbs.ad2bs(date).ne;
        return (
          <Text>
            {convertedDate.year}/{convertedDate.month}/{convertedDate.day}{' '}
          </Text>
        );
      },
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
