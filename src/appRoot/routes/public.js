import { lazy } from 'react';
const Home = lazy(() => import('../../modules/Home'));

const publicRoutes = [
  {
    component: Home,
    path: '/home',
    exact: true,
  },
];

export default publicRoutes;
