import { nanoid } from 'nanoid';

const { createAction } = require('@reduxjs/toolkit');

// Plus besoin de déclarer la constante vu qu'on peut la récupérer avec le .type
// const RECAP_ACTION = 'recap/action'

// const recapAction = createAction(RECAP_ACTION)
const userAction = createAction('recap/action', (data = "default") => ({
    // payload: data
    payload: {
        'id': nanoid(),
        'step': data
    }
}))

// to : user-reducer
export default userAction;