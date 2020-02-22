const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
		users: [
		{id: 48412, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH', followed: true, fullName: 'MaxMeur', status: 'I am happy now', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 48212, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7', followed: true, fullName: 'Lyona', status: 'I am looking for a job', location: {city: 'Moscow', country: 'Russia'}},
		{id: 78712, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3', followed: false, fullName: 'Makak', status: 'I am sleeping. Dont bother me', location: {city: 'Novossibirsk', country: 'Russia'}},
		{id: 471274, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIrnwobOPcbnVXb1dv_CyabhKNzaOd1r9QBw8CyFljH-NEvkJ_', followed: false, fullName: 'Vasyan', status: 'I wanna relax. Help me pls', location: {city: 'Kiev', country: 'Ukraine'}},],


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
};


export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID: userID});

export default usersReducer;