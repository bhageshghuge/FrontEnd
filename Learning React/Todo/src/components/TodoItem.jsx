import { useDispatch } from "react-redux"
import {
    toggleTodo,
    removeTodo,
    markCompleted,
    markIncomplete,
} from "../redux/actions"
import { FiEdit } from "react-icons/fi"
import "../App.css"

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch()

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-1 gap-4">
            <div className="flex items-center">
                <span className="mr-2 text-gray-500">{index + 1}.</span>
                <span
                    className={`mr-2 ${
                        todo.completed ? "line-through text-gray-500" : ""
                    }`}
                >
                    {todo.text}
                </span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
                <button
                    className="text-xs bg-red-500 text-white  rounded button"
                    onClick={() => dispatch(removeTodo(index))}
                >
                    <svg viewBox="0 0 448 512" className="svgIcon">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button>
                <button onClick={() => dispatch(toggleTodo(index))}>
                    <label className="container">
                        <input
                            checked={todo.completed}
                            type="checkbox"
                            onChange={() => dispatch(toggleTodo(index))}
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <div className="checkmark"></div>
                    </label>
                </button>
            </div>
        </li>
    )
}

export default TodoItem
