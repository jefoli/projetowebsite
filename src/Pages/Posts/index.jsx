import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { Postsone } from '../../Components/PostGrid';
import { loadPosts } from '../../utils/load-posts';
import { TextInput } from '../../Components/TextInput';
import { SectionContainer } from '../../Components/SectionContainer';
import { Loading } from '../../Components/Loading';
import { GenericButton } from '../../Components/Buttons/GenericButton';

export const PostsText = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <SectionContainer>
      <Styled.Container>
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <TextInput searchValue={searchValue} handleChange={handleChange} />

        {filteredPosts.length > 0 && <Postsone posts={filteredPosts} />}

        {filteredPosts.length === 0 && <Loading />}
        <Styled.StyledButton>
          {!searchValue && (
            <GenericButton
              text="Load more posts"
              onClick={loadMorePosts}
              disabled={noMorePosts}
              backgroundButton={'backgroundGradientLeft'}
            />
          )}
        </Styled.StyledButton>
      </Styled.Container>
    </SectionContainer>
  );
};
