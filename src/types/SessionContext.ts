export type StoreAction = {
    type: 'set' | 'set-all' | 'remove' | 'cleaer'
    diff: { [k: string]: any }
}

export type SessionContextType = {
    store: { [key: string]: any }
    setKey: (key: string, value: any) => void
    setAllKeys: (keys: { [k: string]: any }) => void
    removeKey: (key: string) => void
    clear: () => void
    actions?: StoreAction[]
    debug?: boolean
}
