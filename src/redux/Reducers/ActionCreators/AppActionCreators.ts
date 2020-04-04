import { SET_INITIALIZED } from '../AppReducer';
import { SetInitializedType } from '../types/AppTypes';


export const setInitialized = (): SetInitializedType => ({ type: SET_INITIALIZED });

