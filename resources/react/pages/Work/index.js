import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useObserver from '../../hooks/useObserver';

const Div = ({ backgroundColor, opacity }) => 
    <div 
        className="lazy" 
        style={{ 
            opacity: opacity, 
            backgroundColor,
            minWidth: '100vw', 
            minHeight: '100vh', 
            transition: 'opacity .5s'
        }}
    ></div>;

const Div2 = ({ backgroundColor, opacity }) => 
    <div
        style={{ 
            opacity: 0, 
            backgroundColor,
            minWidth: '100vw', 
            minHeight: '100vh', 
            transition: 'opacity .5s'
        }}
    ></div>;

function Work() {
    const [observer, setElements, entries] = useObserver({
        threshold: 0.5,
        root: null
    });

    useEffect(() => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const lazyElement = entry.target;
                observer.unobserve(entry.target);
                console.log(lazyElement);
                lazyElement.style.opacity = "1";
            }
        });
    }, [entries, observer]);

    useEffect(() => {
        const elms = document.querySelectorAll(".lazy");
        setElements(elms);
    }, [setElements]);

    return <div>
        WORK
        <Link to="/">HOME</Link>

        <Div2 opacity="1" backgroundColor="white" />
        <Div opacity="0" backgroundColor="red" />
        <Div opacity="0" backgroundColor="blue" />
        <Div opacity="0" backgroundColor="green" />
    </div>
}

export default Work;