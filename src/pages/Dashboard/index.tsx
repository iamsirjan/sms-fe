import { BreadCrumb } from '@asheshDon/components/breadCrumb';
import { DataTable } from '@asheshDon/components/dataTable';
import { CellContext, PaginationState } from '@tanstack/react-table';
import { useState } from 'react';

const Dashboard = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const col = [
    {
      header: 'S.N',
      accessorFn: (_cell: CellContext<any, any>, index: number) => {
        return index + 1;
      },
    },
    {
      header: 'Name',
      accessorKey: 'first_name1',
      accessorFn: (_cell: unknown) => {
        return 'dummy data';
      },
    },
    {
      header: 'Name',
      accessorKey: 'first_name2',
      accessorFn: (_cell: unknown) => {
        return 'dummy data';
      },
    },
    {
      header: 'Name',
      accessorKey: 'first_name3',
      accessorFn: (_cell: unknown) => {
        return 'dummy data';
      },
    },
  ];

  return (
    <>
      <BreadCrumb items={[]} title={{ name: 'Dashboard', route: '/' }} />

      <DataTable
        columns={col}
        data={[]}
        pagination={{
          manual: true,
          pageParams: { pageIndex, pageSize },
          pageCount: 10,
          onChangePagination: setPagination,
        }}
      />
    </>
  );
};

export default Dashboard;
