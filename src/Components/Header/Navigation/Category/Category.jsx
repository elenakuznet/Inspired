import s from "./Category.module.scss"
import { NavLink } from "react-router-dom"
import cn from "classnames"
import { useLocation } from "react-router-dom"


export const Category = ({ list }) => {
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'women';
    const categoriesList = list.find(item => item.link === gender)

    return (
        <ul className={s.category}>
            {categoriesList.categories.map(item => (
                <li key={item.link} className={s.item}>
                    <NavLink 
                        className={({ isActive}) => cn(s.link, isActive && s.linkActive)} 
                        to={`${gender}/${item.link}`}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
