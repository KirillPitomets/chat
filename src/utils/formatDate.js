export default function(date) {
	if ( date ) {
		const stringDate = new Date(date.split(',')[0]).toDateString().split(' ')
		stringDate.shift()
		return `${stringDate[0]} ${stringDate[1]}, ${stringDate[2]}`
	}
}

