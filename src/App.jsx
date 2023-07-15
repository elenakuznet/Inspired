import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainPage } from "./Components/MainPage/MainPage"
import { Root } from "./routes/Root"
import { ErrorPage } from "./Components/ErrorPage/ErrorPage"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchNavigation } from "./features/navigationSlice"
import { fetchColors } from "./features/colorSlice"
import { ProductPage } from "./Components/ProductPage/ProductPage"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage/>} />
            <Route path="product/:id/" index element={<ProductPage />} />
            <Route path="catalog/:gender/:category?" index element={<MainPage />} />
            <Route path="*" index element={<ErrorPage/>} />
        </Route>
)
)

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());

    }, [dispatch]);
    return <RouterProvider router={router}></RouterProvider>
}


