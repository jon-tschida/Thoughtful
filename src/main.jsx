import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./components/ErrorPage.jsx";
import LifeQuestionCard from "./components/LifeQuestionCard.jsx";
import RelationshipQuestionCard from "./components/RelationshipQuestionCard.jsx";
import PastQuestionsCard from "./components/PastQuestionsCard.jsx";
import FavoriteQuestionsCard from "./components/FavoriteQuestionsCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lifeQuestions",
    element: <LifeQuestionCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/relationshipQuestions",
    element: <RelationshipQuestionCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pastQuestions",
    element: <PastQuestionsCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favoriteQuestions",
    element: <FavoriteQuestionsCard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
