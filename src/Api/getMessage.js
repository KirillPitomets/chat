const api = 'https://api.chucknorris.io/jokes/random'

const getMessage = async () => {
	try {
		return await fetch(api).then(res => res.json())
	} catch (e) {
		console.error(e.message)
	}
}

export default getMessage
