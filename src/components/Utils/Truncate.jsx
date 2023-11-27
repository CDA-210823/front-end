import React, {useEffect, useRef} from 'react'

const Truncate = ({ text, maxLength }) => {
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current && text.length > maxLength) {
            textRef.current.textContent = text.slice(0, maxLength) + '-';
        }
    }, [text, maxLength]);

    return <span ref={textRef}>{text}</span>;
};

export default Truncate
