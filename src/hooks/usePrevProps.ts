import React, { useRef } from 'react'

const usePrevProps = <ValueType extends unknown>(value: ValueType): ValueType | typeof value => {
    const ref = useRef<ValueType>()
    React.useEffect(() => {
        ref.current = value
    })
    return (ref.current || {}) as any
}

export default usePrevProps
