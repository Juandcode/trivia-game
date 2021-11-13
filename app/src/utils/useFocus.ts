import {useRef, useEffect, RefObject} from 'react'

export const useFocus = (): RefObject<HTMLInputElement> | null => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(ref.current)
        ref.current?.focus()
    }, [])
    return ref
}
