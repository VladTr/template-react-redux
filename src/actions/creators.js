export const addTodo = (item) => {
    return {
      type: 'ADD_TODO',
      payload: item
    }
}

export const saveTodo = (list) => {
    return {
        type: 'SAVE_TODO',
        payload: list
    }
}