import * as Styled from './styles';
import P from 'prop-types';

export const PostCard = ({ title, cover, body, id }) => {
  return (
    <Styled.Container>
      <Styled.PostImage src={cover} alt={title} />
      <Styled.PostContainer>
        <Styled.PostTitle>
          {title} {id}
        </Styled.PostTitle>
        {body}
      </Styled.PostContainer>
    </Styled.Container>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
