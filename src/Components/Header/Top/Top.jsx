import { Container } from "../../Layout/Container/Container";
import s from "./Top.module.scss";
import cn from "classnames";
import logo from "/src/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg'
import { ReactComponent as SearchSVG } from '../../../assets/search.svg'
import { ReactComponent as CartSVG } from '../../../assets/card.svg'

export const Top = () => (
    <div className={s.top}>
        <Container className={s.container}>
            <a className={cn(s.link, s.phone)} href="tel:89304902620">8 930 490 26 20</a>
            
            <NavLink className={s.logo} to="/">
                <img src={logo} alt="Логотип Inspired" />
            </NavLink>

            <div className={s.navigation}>
                <ul className={s.navList}>
                    <li className="{s.navItem}">
                        <button className={s.link}>
                            <SearchSVG />
                        </button>
                    </li>
                    <li className="{s.navItem}">
                        <NavLink to='/card' href="#" className={s.link}>
                            <CartSVG />
                        </NavLink>
                    </li>
                    <li className="{s.navItem}">
                        <NavLink to='/favorite' href="#" className={cn(s.link, s.like)}>
                            <LikeSVG />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Container>
    </div>   
)