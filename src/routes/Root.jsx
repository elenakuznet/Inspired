import { Outlet } from "react-router-dom";
import { Main }   from "../Components/Layout/Main/Main";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";


export const Root = () => (
    <>
        <Header/>
        <Main> 
            <Outlet/>
        </Main>
        <Footer/>
    </>
)