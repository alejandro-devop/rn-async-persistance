import { DEL_KEY_ACTION_TYPE, SET_ALL_ACTION_TYPE, SET_KEY_ACTION_TYPE } from './actions/store.types';
export declare type StoreKeyType = DEL_KEY_ACTION_TYPE | SET_ALL_ACTION_TYPE | SET_KEY_ACTION_TYPE;
export declare type StoreActionType = (key: string, data?: any) => {
    type: StoreKeyType;
    payload: {
        key: string;
        data: any;
    } | any;
};
