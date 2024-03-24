// Todo.js
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TodoList from "./TodoList"
import FilterButtons from "./FilterButtons"
import { BsSearch, BsPlus } from "react-icons/bs"
import { addTodo, updateSearchTerm } from "../redux/actions"

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const handleAddTodo = (text) => {
        dispatch(addTodo(text))
    }

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddTodo(newTodoText.trim())
            setNewTodoText("")
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value)
        dispatch(updateSearchTerm(value))
    }

    return (
        <div className=" max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
                Personal TODO APP
            </h2>
            <div className="flex items-center mb-4">
                <input
                    id="addTodoInput"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Add Todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />

                <button
                    onClick={handleAddTodoClick}
                    className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-green-500"
                >
                    <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-10 transition-all duration-300">
                        Add Item
                    </span>
                    <span className="absolute right-0 h-full w-10 rounded-lg bg-blue-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                        <svg
                            className="svg w-8 text-white"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <FilterButtons />
                <div className="flex items-center mb-4">
                    <form className="form">
                        <button>
                            <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    strokeWidth="1.333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <input
                            className="input"
                            type="text"
                            placeholder="Search Todos"
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                        {/* <button className="reset" type="reset">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                              ></path>
                          </svg>
                      </button> */}
                    </form>
                    {/* <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                      <BsSearch size={20} />
                  </button> */}
                </div>
            </div>

            <TodoList />
        </div>
    )
}
export default Todo
