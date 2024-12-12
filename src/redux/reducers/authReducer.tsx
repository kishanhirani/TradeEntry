import { RConstants } from "../../helper/Constants"

interface IinitialState {
    loading: boolean,
    isLoggedIn: boolean

}

const initialState: IinitialState = {
    loading: false,
    isLoggedIn: false,

}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case RConstants.TEST_CONSTANT:
            return {
                ...state,
            }
        case RConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }


        default: return state
    }
}