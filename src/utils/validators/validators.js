export const requiredField = value => {
	if (value) return undefined
	return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length <= maxLength ) return undefined
	return `Max length is ${maxLength}. Delete some symbols`
}

export const maxLengthInLoginCreator = (maxLength) => (value) => {
	if (value && value.length <= maxLength) return undefined
	return 'Too many symbols'
}