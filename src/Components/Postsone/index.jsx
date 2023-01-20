import * as Styled from './styles';

import P from 'prop-types';
import { PostCard } from '../PostCard';

export const Postsone = ({ posts }) => {
  <Styled.Container>
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
      ))}
    </div>
  </Styled.Container>;
};

Postsone.defaultProps = {
  posts: [],
};

Postsone.propTypes = {
  posts: P.array,
};
