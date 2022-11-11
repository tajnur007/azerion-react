import { FC, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/mainRoutes';

const loading = (
  <div>
    Loading...
  </div>
);

const App: FC = () => {
  return (
    <Suspense fallback={loading} >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
