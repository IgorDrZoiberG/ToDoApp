const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {name: action.name, checked: false, id: action.id}
            ];

        case 'TOGGLE_FLAG':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        name: todo.name, checked: !todo.checked, id: todo.id
                    }
                }
                return todo
            });

        case 'DELETE_ITEM' :
            return state.filter((item, index) => index !== action.id);


        default:
            return state;

    }
};

export default todos;