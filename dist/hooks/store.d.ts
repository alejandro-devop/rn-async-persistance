export declare const useSession: <SessionType extends object = {}>() => any;
export declare const setKey: (key: string, value: any) => void;
export declare const setAllKeys: (keys: {
    [k: string]: any;
}) => void;
export declare const removeKey: (key: string) => void;
export declare const clearSession: () => void;
