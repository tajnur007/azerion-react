import React, { FC, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/mainRoutes';
import 'antd/dist/antd.css';

const Loading = React.lazy(() => import('../components/FullPageLoading'));

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />} >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
