import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
import { Container } from "../../Layout/Container/Container";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { setActiveGender } from "../../../features/navigationSlice";


export const Navigation = () => (
    <nav>
            <Container>
                <div className="container">
                    <Gender />
                    <Category />
                </div>
            </Container>
        </nav>
)
    // const dispatch = useDispatch();
    // const location = useLocation();
    // const gender = location.pathname.split('/')[1] || 'women';
    
    // useEffect(() => {
    //     dispatch(setActiveGender(gender))
    // }, [gender, dispatch]);

    // return (
        