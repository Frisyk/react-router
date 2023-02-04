import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import BlogsListPage from './pages/BlogsListPage';
import BlogPage from './pages/BlogPage';
import FavPages from './pages/FavPages'; 
import AuthorPage from './pages/AuthorPage';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
 {
  path: "/",
  element: <BlogsListPage />,
 },
 {
  path: "/home",
  element: <HomePage />,
 },
 {
  path: "/fav",
  element: <FavPages />,
 },
 {
  path: "/blog",
  element: <BlogPage />,
 },
 {
  path: "/author",
  element: <AuthorPage />,
 }, 
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);