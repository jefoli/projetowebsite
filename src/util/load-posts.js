export const loadPosts = async () => {
  const postsRespose = fetch('https://jsonplaceholder.typicode.com/posts');

  const photosRespose = fetch('https://jsonplaceholder.typicode.com/photos');

  //resolve tudo de uma vez:
  const [posts, photos] = await Promise.all([postsRespose, photosRespose]);
  const postJson = await posts.json();
  const photosJson = await photos.json();

  //função ZIP:
  //postJson.map <- menor array / vamos mapear o post e index -> vamos usar para pegar uma foto do array
  const postsandaPhotos = postJson.map((post, index) => {
    //pegar todos os posts + cover(vem da foto -url)
    //para cada post, pegamos um índice
    return { ...post, cover: photosJson[index].url };
  });

  return postsandaPhotos;
};
