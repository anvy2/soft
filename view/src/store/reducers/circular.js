export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CIRCULARS':
            return action.payload;
        default:
            return state;
    }
}