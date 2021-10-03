export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser: [],
    studentInfo: [],
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123123',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: '123123',
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

        case "REGISTER_USER": {
            let usersClone = state.users.slice(0);
            usersClone.push(action.payload);
            return {
                ...state,
                users:usersClone
            }
        }
        case "SAVE_AUTH_USER": {
            let authUserClone = state.authUser.slice(0);
            authUserClone.push(action.payload);
            return {
                ...state,
                authUser:authUserClone
            }
        }
        case "SAVE_STUDENT_DATA": {
            let studentInfoClone = state.studentInfo.slice(0)
            studentInfoClone.push(action.payload)
            return{
                ...state,
                studentInfo: studentInfoClone
            }
        }
        default:
            return state;

    }
}