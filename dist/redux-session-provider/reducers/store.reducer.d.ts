import { StoreKeyType } from '../types';
declare type ActionType = {
    type: StoreKeyType;
    payload: {
        key: string;
        data?: any;
    };
};
declare const _default: (initialState?: any) => (state: any, action: ActionType) => any;
export default _default;
