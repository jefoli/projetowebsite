import P from 'prop-types';

import './styles.css';

export const PostCard = ({ title, cover, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: P.any,
  cover: P.any,
  body: P.any,
};