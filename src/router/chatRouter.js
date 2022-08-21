// ==== Const ====
import {anotherPath, chat} from '../utils/const'
// ==== Pages ====
import Chat from '../Pages/Chat'
import PlaceholderChat from '../Pages/PlaceholderChat/PlaceholderChat'

const chatRouter = [
	{path: `${chat}/:id`, element: Chat},
	{path: anotherPath, element: PlaceholderChat}
]

export default chatRouter