import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/shared/components/layout/MainLayout';
import LibraryPage from '@/features/library/pages/LibraryPage';
import DashboardPage from '@/features/dashboard/pages/DashboardPage';
import LoginPage from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <MainLayout />,
    children: [
        {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/library',
        element: <LibraryPage />,
      },
    ],
  },
]);