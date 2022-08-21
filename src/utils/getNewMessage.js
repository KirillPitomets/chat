import getMessage from '../Api/getMessage'

export const getNewMessage = async () => {
	let message = await getMessage()

	await setTimeout(() => {
		return message
	}, 2000)
	
}
