import s from "./Category.module.scss"
import { NavLink } from "react-router-dom"
import cn from "classnames"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"


export const Category = () => {
    const  { activeGender, categories }  = useSelector(state => state.navigation)
    // const categoriesList = list.find(item => item.link === gender)

    return (
        <ul className={s.category}>
            {categories[activeGender]?.list?.map(item => (
                <li key={item.slug} className={s.item}>
                    <NavLink 
                        className={({ isActive}) => cn(s.link, isActive && s.linkActive)} 
                        to={`${activeGender}/${item.slug}`}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
