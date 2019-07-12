import jsonPlaceholder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
  // complete response object is returned from axios
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// _fetchUser is a memoized version
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
});
