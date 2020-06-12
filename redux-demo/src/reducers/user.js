// react  的store
const user = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            // store.push('wen')
            return state;
            break;
        default:
            return state;
            break;
    }
}
export default user