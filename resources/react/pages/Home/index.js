import React from 'react';
import { AnimatedLink } from '../../components/Link';
import { Spinner } from '../../components/Spinner';

function Home() {

    return <div>
        HOME
        <Spinner />
        <AnimatedLink to="/work">WORK</AnimatedLink>
        <AnimatedLink to="/work">Link to work</AnimatedLink>
    </div>
}

export default Home;
