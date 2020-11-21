import { LOAD_SESION, NEW_SESION, CLOSE_SESION } from '../action-types';

const initialState={
    isLogged : true,
    user: {
        id: 1,
        name: 'Erick Uriel',
        user_type: 1
    },
}

const sesion = ( state=initialState, action)=>{
    switch(action.type){
        case LOAD_SESION:
            return {...state, isLogged: true, user: action.payload};
        case NEW_SESION:
            return {...state, isLogged: true, user: action.payload};
        case CLOSE_SESION:
            return {...state, isLogged: false, user:{}};
        default:
            return state;
    }
};

export default sesion;