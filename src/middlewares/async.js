export default function({ dispatch }) {
    return next => action => {
        // If action does not have payload
        //or, the payload does not have a .then property send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload
            .then(response => { const newAction = { ...action, payload: response }
            dispatch(newAction) });
    }
}
