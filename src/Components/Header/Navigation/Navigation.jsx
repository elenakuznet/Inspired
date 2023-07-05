import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
import { Container } from "../../Layout/Container/Container";



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