import React, { FC, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const loading = (
  <div>
    Loading...
  </div>
);

// Pages
const Login = React.lazy(() => import('../features/Auth/Login'));
const Home = React.lazy(() => import('../features/Home'));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <Login /> },
]);

const App: FC = () => {

  return (
    <Suspense fallback={loading} >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
