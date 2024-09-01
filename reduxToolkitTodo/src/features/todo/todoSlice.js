import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTotodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
            const { id, text } = action.payload
            state.todos = state.todos.map((todo) =>
                todo.id === id? {...todo, text} : todo
            )
        },
    }
})


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer