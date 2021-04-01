import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useObserver from '../../hooks/useObserver';

import { FadeHeader } from '../../components/Header';


function Work() {
    // const [observer, setElements, entries] = useObserver({
    //     threshold: 0.5,
    //     root: null
    // });

    // useEffect(() => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             const lazyElement = entry.target;
    //             observer.unobserve(entry.target);
    //             lazyElement.style.opacity = "1";
    //         }
    //     });
    // }, [entries, observer]);

    // useEffect(() => {
    //     const elms = document.querySelectorAll(".lazy");
    //     setElements(elms);
    // }, [setElements]);

    return (
        <div style={{ minHeight: '200vh' }}>
            <FadeHeader 
                lightSrc="/images/Work/header-light.jpg"
                darkSrc="/images/Work/header-dark.jpg"
            />
        </div>
    );
}

export default Work;
