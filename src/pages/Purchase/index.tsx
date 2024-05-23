import { Button, Flex, Input, Tag, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { usePurchaseColumns } from './columns';
import { BreadCrumb } from '@codeHimalaya/components/breadCrumb';
import { AddIcon } from '@chakra-ui/icons';
import { DataTable } from '@codeHimalaya/components/dataTable';
import AlertDialogComponent from '@codeHimalaya/components/alertDialog';
import {
  IPurchaseResponseData,
  useDeletePurchase,
} from '@codeHimalaya/service/purchase-service';
import { useGetPurchases } from '@codeHimalaya/service/purchase-service';
import { PaginationState } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
import { useDebounce } from '@codeHimalaya/hooks/useDebounce';
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

const Purchase = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const debouncedValue = useDebounce(search, 500);

  const { data } = useGetPurchases({
    name: debouncedValue,
    start_date: startDate,
    end_date: endDate,
  });
  const navigate = useNavigate();
  const deletePurchase = useDeletePurchase();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [purchaseId, setPurchaseId] = useState('');
  const onEditService = (data: IPurchaseResponseData) => {
    console.log(data);
  };

  console.log(startDate);

  const onDeletePurchase = (id: string) => {
    setPurchaseId(id);
    onOpenDelete();
  };

  const deletePurchaseHandler = async () => {
    await deletePurchase.mutateAsync({
      id: purchaseId,
    });
    onCloseDelete();
  };

  const columns = usePurchaseColumns({
    onEdit: onEditService,
    onDelete: onDeletePurchase,
  });

  const handleReset = () => {
    setSearch('');
    setStartDate('');
    setEndDate('');
  };
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <BreadCrumb
          items={[]}
          title={{ name: 'Purchase', route: '/purchase' }}
        />
        <Button
          leftIcon={<AddIcon />}
          size={'md'}
          borderRadius={'6px'}
          onClick={() => navigate(NAVIGATION_ROUTES.ADDPURCHASE)}
        >
          Add Purchase
        </Button>
      </Flex>

      <Flex>
        <Flex gap={2} alignItems={'end'} flex={1}>
          <Input
            type="text"
            width="20%"
            value={search}
            placeholder="search items"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Calendar
            theme="deepdark"
            style={{
              background: 'inherit',
              border: '1px solid #efefef',
              padding: 5,
              borderRadius: '6px',
            }}
            hideDefaultValue
            value={startDate}
            onChange={(date) => setStartDate(date.adDate)}
          />

          <Calendar
            value={endDate}
            theme="deepdark"
            hideDefaultValue
            style={{
              background: 'inherit',
              border: '1px solid #efefef',
              padding: 5,
              borderRadius: '6px',
            }}
            onChange={(date) => setEndDate(date.adDate)}
          />

          <Button
            onClick={handleReset}
            fontWeight={300}
            fontSize={'14px'}
            variant={'ghost'}
            color="dark"
          >
            Clear All
          </Button>
        </Flex>
      </Flex>
      <DataTable
        columns={columns}
        data={data ?? []}
        pagination={{
          manual: true,
          pageParams: { pageIndex, pageSize },
          pageCount: 10,
          onChangePagination: setPagination,
        }}
      />
      <AlertDialogComponent
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onClick={() => deletePurchaseHandler()}
        title="Delete Purchase"
        isLoading={deletePurchase.isLoading}
        description="Are you sure do you want to delete this Purchase?"
      />
    </>
  );
};

export default Purchase;
