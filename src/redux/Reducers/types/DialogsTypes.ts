import { ADD_MY_MESSAGE } from '../dialogsReducer'

type Dialogs = {
    id: null | number,
    name: null | string,
    ava: null | string
};

type Messages = {
    id: null | number,
    reply: null | string,
    ava: null | string
}

export type InitialStateType = {
    dialogs: Array<Dialogs>,
    messages: Array<Messages>,
    myMessages: Array<Messages>
}

export type AddNewMessageType = {
    type: typeof ADD_MY_MESSAGE,
    message: string
}