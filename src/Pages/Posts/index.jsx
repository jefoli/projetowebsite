import * as Styled from './styles';
import { Button } from '../../Components/Button';

export default function Post() {
  // state: {
  //     post:[],
  // }

  return (
    <Styled.Container>
      <h1>Post</h1>
      <Button
        text="load more posts"
        //onClick ={this.loadMorePosts}
        //disabled={noMorePosts}
      />
    </Styled.Container>
  );
}
