import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainPage } from "./Components/MainPage/MainPage"
import { Root } from "./routes/Root"
import { ErrorPage } from "./Components/ErrorPage/ErrorPage"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchNavigation } from "./features/navigationSlice"
import { fetchColors } from "./features/colorSlice"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage/>} />
            <Route path="women" index element={<MainPage gender='women'/>} />
            <Route path="men" index element={<MainPage gender='men'/>} />
            <Route path="kids" index element={<MainPage gender='kids'/>} />
            <Route path="women/:category" index element={<MainPage gender='women'/>} />
            <Route path="men/:category" index element={<MainPage gender='men'/>} />
            <Route path="kids/:category" index element={<MainPage gender='kids'/>} />
            <Route path="*" index element={<ErrorPage/>} />
            <Route path="/" index element={<MainPage/>} />
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


