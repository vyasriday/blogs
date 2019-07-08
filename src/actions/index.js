import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => {
  return async function(dispatch) {
    const posts = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: posts
    });
  };
};
