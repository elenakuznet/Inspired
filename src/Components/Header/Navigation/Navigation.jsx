import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
import { Container } from "../../Layout/Container/Container";



export const Navigation = ({ list }) =>  (
    <nav>
        <Container>
            <div className="container">
                <Gender list={list} />
                <Category list={list} />
            </div>
        </Container>
        
    </nav>
)