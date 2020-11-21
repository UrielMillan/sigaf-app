import { LOAD_SESION, NEW_SESION, CLOSE_SESION } from '../action-types';

export const loadSesion = (userData) =>({
    type: LOAD_SESION,
    payload: userData
});

export const newSesion = (userData) =>({
    type: NEW_SESION,
    payload: userData
});

export const closeSesion = () =>({
    type: CLOSE_SESION,
});