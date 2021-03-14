import { useState, useEffect } from 'react'

export const useScroll = () => {
    const [ scrolled, setScrolled ] = useState(false)

    const scrollHandler = () => {
        const offset = window.scrollY

        offset > 10 ? setScrolled(true) : setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [])

    return { scrolled }
}