const generateDate = () => {
	const now = new Date()

	const fullYear = now.getFullYear()
	const month = now.getMonth()
	const numberDate = now.getDate()
	const hours = now.getHours()
	const minutes = now.getMinutes()

	return `${fullYear}-${month}-${numberDate}, ${hours < 10 ? '0' + hours : hours}:${minutes} AM`
}

export default generateDate