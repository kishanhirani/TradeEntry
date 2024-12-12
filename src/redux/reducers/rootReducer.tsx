import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { useDispatch } from 'react-redux';

const appReducer = combineReducers({
    auth: authReducer
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export default rootReducer;
