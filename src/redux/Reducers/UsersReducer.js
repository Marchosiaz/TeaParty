import usersAPI from '../../api/api.js';

const TOGGLE_FOLLOW = 'usersPage/TOGGLE-FOLLOW';
const SET_USERS = 'usersPage/SET-USERS';
const SET_CURRENT_PAGE = 'usersPage/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'usersPage/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'usersPage/TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 10,
	totalCount: 0,
	isFetching: false,
	followingInProgress: false
};


const usersReducer = (state = initialState, action) => {

	switch(action.type) {

		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(el => {
					if (el.id === action.userID) {
						return {...el, followed: !el.followed}
							}
					return el;
						})
					}

		case SET_USERS:
			return {...state, users: [...action.users]}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_COUNT:
			return {...state, totalCount: action.totalCount}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {...state, followingInProgress: !state.followingInProgress}
		}
		return state;
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const toggleFollow = (userID) => ({type: TOGGLE_FOLLOW, userID});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, id});

export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let data = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setCurrentPage(currentPage));
		dispatch(setTotalCount(data.totalCount));
	};
};

export const unfollow = (id) => {
	return async (dispatch) => {
		dispatch(toggleFollowingInProgress());
		let data = await usersAPI.unFollow(id);
		if (data.resultCode === 0) {
			dispatch(toggleFollow(id));
			dispatch(toggleFollowingInProgress());
		};
	};
};

export const follow = (id) => {
	return async (dispatch) => {
		dispatch(toggleFollowingInProgress());
		let data = await usersAPI.Follow(id);
		if (data.resultCode === 0) {
			dispatch(toggleFollow(id));
			dispatch(toggleFollowingInProgress());
		};
	};
};


export default usersReducer;
