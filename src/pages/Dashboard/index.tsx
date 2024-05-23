import { BreadCrumb } from '@codeHimalaya/components/breadCrumb';

const Dashboard = () => {
  // const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  return (
    <>
      <BreadCrumb
        items={[
          {
            name: 'Das',
            route: '/add',
          },
        ]}
        title={{ name: 'Dashboard', route: '/' }}
      />
    </>
  );
};

export default Dashboard;
