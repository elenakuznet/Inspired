import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/heart.svg';
import s from './Product.module.scss';
import { API_URL } from '../../const';
import { ColorList } from '../ColorList/ColorList';
import { BtnLike } from '../BtnLike/BtnLike';


export const Product = ({id, pic, title, price, colors}) => {

    return (
        <article className={s.product}>
            <NavLink to={`/product/${id}`} className={s.link}>
                <img src={`${API_URL}/${pic}`} alt={title} className={s.image} />
                <h3 className={s.title}>{title}</h3>
            </NavLink>
            <div className={s.row}>
                <p className={s.price}>руб {price}</p>
                <button className={s.favorite}>
                    <BtnLike id={id}/>
                </button>
            </div>
            <ColorList  colors={colors}/>

        </article>
    )
}