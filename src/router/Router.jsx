import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage/HomePage";
import CollectionsPage from "../pages/CollectionsPage/CollectionsPage";
import NewInPage from "../pages/NewInPage/NewInPage";
import ModiWeekPage from "../pages/ModiWeekPage/ModiWeekPage";
import PlusSizePage from "../pages/PlusSizePage/PlusSizePage";
import SustainPage from "../pages/SustainabilityPage/SustainabilityPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginLayout from "../layouts/LoginLayout";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import ShopAll from "../pages/ShopAllPage/ShopAll";
import MaterialsPage from "../pages/MaterialsPage/Materials";
import SearchPage from "../features/search/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "collection",
                element: <CollectionsPage />
            },
            {
                path: "new-in",
                element: <NewInPage />
            },
            {
                path: "modiweek",
                element: <ModiWeekPage />
            },
            {
                path: "plus-size",
                element: <PlusSizePage />
            },
            {
                path: "sustainability",
                element: <SustainPage />
            },
            {
                path: "materials",
                element: <MaterialsPage />
            },
            {
                path: "favorite",
                element: <FavoritePage />
            },
            {
                path: "shop-all",
                element: <ShopAll />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "account",
                element: <LoginLayout />,
                children: [
                    {
                        path: "register",
                        element: <RegisterPage />
                    },
                    {
                        index: true,
                        element: <LoginPage />
                    }
                ]
            }

        ]
    }
])