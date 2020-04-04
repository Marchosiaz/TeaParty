import { ADD_MY_MESSAGE } from "../dialogsReducer";
import { AddNewMessageType } from "../types/DialogsTypes";

export const addNewMessage = (message: string): AddNewMessageType => ({ type: ADD_MY_MESSAGE, message })