import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js"; 
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import AddBook from "./components/AddBook.jsx"; 
import Hero from "./components/Hero";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/booklist", element: <BookList /> },
      { path: "/booklist/:category", element: <BookList /> },
      { path: "/book/:id", element: <BookDetails /> },
      { path: "/add-book", element: <AddBook /> },
      
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
