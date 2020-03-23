import {createSelector} from 'reselect'

export const getUsersFromState = (state) => {
	return state.usersPage.users
}

//export const getUsersSuperSelector = createSelector(getUsersFromState, (users) => {
	//return users.filter( u => true)
//})

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize
}

export const getTotalCount = (state) => {
	return state.usersPage.totalCount
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress
}