// export let data = {
//     snacks: 'Rio',
//     drink: 'Coffee',

// }

// export function reducer(state, action) {
//     switch (action.type) {
//         case "UPDATE_SNACK": {
//             return {
//                 ...state,
//                 snacks: action.payload
//             }
//         }
//         default:
//             return state;

//     }
// }



export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123sss555',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }
        case "UPDATE_USERS": {
            // let cloneUsers = state.users.slice(0)
            data.users = data.users.concat(action.payload)
            console.log(data.users)
            // return {
            //     ...state,
            //     users: cloneUsers
            // }
        }
        default:
            return state;

    }
}