import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Pages
const Home = React.lazy(() => import('../features/Home'));
const Login = React.lazy(() => import('../features/Auth/Login'));
const Login2 = React.lazy(() => import('../features/Auth/Login2'));
const MyCampaigns = React.lazy(() => import('../features/MyCampaigns'));

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/login2", element: <Login2 /> },
  { path: "/campaigns", element: <MyCampaigns /> },
]);