// FilterButtons.jsx
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllCompleted } from "../redux/actions"

const FilterButtons = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter)

    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }

    return (
        <div className="flex space-x-4 items-center">
            <select
                className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
            >
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
            <button
                className=" px-2 py-1 "
                onClick={() => dispatch(markAllCompleted())}
            >
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label"> Mark All Completed</span>
            </button>
        </div>
    )
}

export default FilterButtons
