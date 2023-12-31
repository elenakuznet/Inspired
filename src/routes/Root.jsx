import { Outlet } from "react-router-dom";
import { Main }   from "../Components/Layout/Main/Main";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";


// const list = [
//         { link: 'women', title: 'Женщины', categories: [
//             { link: 'bras', title: 'Бюстгальтеры'},
//             { link: 'panties', title: 'Трусы'},
//             { link: 'socks', title: 'Носки'},
//             { link: 'bathrobe', title: 'Халаты'},
//             { link: 'thermal', title: 'Термобелье'},
//             { link: 'pijamas', title: 'Пижамы'},
    
//         ] },
//         { link: 'men', title: 'Мужчины', categories: [ 
//             { link: 'panties', title: 'Трусы'},
//             { link: 'socks', title: 'Носки'},
//             { link: 'bathrobe', title: 'Халаты'},
//             { link: 'thermal', title: 'Термобелье'},
//         ]},
//     ]


export const Root = () => (
    <>
        <Header/>
        <Main> 
            <Outlet/>
        </Main>
        <Footer />
    </>
)