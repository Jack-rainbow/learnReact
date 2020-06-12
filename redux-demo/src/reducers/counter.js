// react  的store
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
            break;
        case 'jian':
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}
export default counter