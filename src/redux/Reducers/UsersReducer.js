const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 10,
	totalCount: 0,
	isFetching: false,
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
		}
		return state;
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;
