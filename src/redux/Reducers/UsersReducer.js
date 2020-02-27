const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: []
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
			return {...state, users: [...state.users, ...action.users]}
		}
		return state;
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID: userID});
export default usersReducer;
