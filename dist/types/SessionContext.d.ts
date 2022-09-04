export declare type SessionContextType = {
    store: {
        [key: string]: any;
    };
    setKey: (key: string, value: any) => void;
    setAllKeys: (keys: {
        [k: string]: any;
    }) => void;
    removeKey: (key: string) => void;
    clear: () => void;
};
