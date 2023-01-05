import './styled';
import { Container } from '../../Styles/GlobalStyle';
import { Services } from '../Servicos/styled';
import { Button } from '../../Components/Button';

export default function Post() {
  // state: {
  //     post:[],
  // }

  return (
    <Container>
      <Services>
        <h1>Post</h1>
        <Button
          text="load more posts"
          //onClick ={this.loadMorePosts}
          //disabled={noMorePosts}
        />
      </Services>
    </Container>
  );
}
