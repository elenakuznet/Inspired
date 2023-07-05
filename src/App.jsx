import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainPage } from "./Components/MainPage/MainPage"
import { Root } from "./routes/Root"
import { ErrorPage } from "./Components/ErrorPage/ErrorPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage/>} />
            <Route path="women" index element={<MainPage gender='women'/>} />
            <Route path="men" index element={<MainPage gender='men'/>} />
            <Route path="women/:category" index element={<MainPage gender='women'/>} />
            <Route path="men/:category" index element={<MainPage gender='men'/>} />
            <Route path="*" index element={<ErrorPage/>} />
            <Route path="/" index element={<MainPage/>} />
        </Route>
)
)

export const App = () => <RouterProvider router={router}></RouterProvider>


