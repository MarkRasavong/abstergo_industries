import React from 'react'
import About from '../../containers/about/About'
import Animus from '../../containers/animus/Animus'
import EarlyAccess from '../../containers/earlyAccess/EarlyAccess'
import Header from '../../containers/header/Header'
import Helix from '../../containers/helix/Helix'
import JoinAbstergo from '../../containers/joinAbstergo/JoinAbstergo'

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
                <About />
                <Animus />
                <Helix />
                <EarlyAccess />
                <JoinAbstergo />
        </React.Fragment>
    )
}

export default Homepage
