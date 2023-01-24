import * as Styled from './styles';
import P from 'prop-types';

// export const PostCard = ({ title, cover, body, id }) => (
//   <div className="post">
//     <img src={cover} alt={title} />
//     <div className="post-content">
//       <h2>
//         {title} {id}
//       </h2>
//       <p>{body}</p>
//     </div>
//   </div>
// );

export const PostCard = ({ title, cover, body, id }) => {
  return (
    <Styled.Container>
      <div className="post">
        <img src={cover} alt={title} />
        <Styled.PostContainer>
          <div>
            <h2>
              {title} {id}
            </h2>
            <p>{body}</p>
          </div>
        </Styled.PostContainer>
      </div>
    </Styled.Container>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
