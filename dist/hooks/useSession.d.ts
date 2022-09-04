declare const useSession: () => {
    store: {
        [key: string]: any;
    };
    clear: () => void;
    removeKey: (key: string) => void;
    setAllKeys: (keys: {
        [k: string]: any;
    }) => void;
    setKey: (key: string, value: any) => void;
};
export default useSession;
