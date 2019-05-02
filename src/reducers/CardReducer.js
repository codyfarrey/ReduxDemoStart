const INITIAL_STATE = {
    name: '',
    description: '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'name_changed':
            return {...state, name: action.payload};
        default:
            return state;
    }
};