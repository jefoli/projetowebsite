import './styled';
import { Container } from "../../Styles/GlobalStyle";
import { Services } from '../Servicos/styled';

export default function Post(){
    // state: {
    //     post:[],
    // }

    return(
        <Container>
            <Services>
                <h1>Post</h1>
                <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
            </Services>
        </Container>
    )
}
