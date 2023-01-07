import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import TableList from './components/TableList/TableList';


const routers = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/tablelist', element: <TableList />}
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
