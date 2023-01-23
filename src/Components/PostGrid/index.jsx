import P from 'prop-types';
import * as Styled from './styles';

import { PostCard } from '../PostCard';

export const Postsone = ({ posts }) => (
  <Styled.Container>
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </Styled.Container>
);

Postsone.defaultProps = {
  posts: [],
};

Postsone.propTypes = {
  posts: P.array,
};
