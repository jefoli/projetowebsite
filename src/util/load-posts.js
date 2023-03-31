import axios from 'axios';

export const loadPosts = async () => {
  const postsResponse = axios.get('https://jsonplaceholder.typicode.com/posts');

  const photosResponse = axios.get(
    'https://picsum.photos/v2/list?page=1&limit=100&width=400&height=400',
  );

  const photosResponseAlternative = axios.get(
    'https://jsonplaceholder.typicode.com/photos',
  );

  const [posts, photos, photosAlternative] = await Promise.all([
    postsResponse,
    photosResponse,
    photosResponseAlternative,
  ]);

  const postsJson = await posts.data;
  const photosJson = await photos.data;
  const photosAlternativeJson = await photosAlternative.data;

  const postsAndPhotos = postsJson.map((post, index) => {
    const coverUrl =
      photosJson[index]?.download_url || photosAlternativeJson[index]?.url;

    return { ...post, cover: coverUrl };
  });

  return postsAndPhotos;
};
