import React from 'react';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage'; // ✅ New component
import { Provider } from 'react-redux';
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // ✅ Body now contains Head internally
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results", // ✅ Search result page
        element: <SearchResultsPage />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
