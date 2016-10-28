import React from 'react';

export function HelloWorld(props) {
    const who = props.who;
    return(
        <h1>Hello {who} </h1>
    );
}

HelloWorld.propTypes = {
    who: React.PropTypes.string
};
