import React from 'react';

const Second = props => {
    return (
        <div style={styles.container}>
            <h1>Full Name</h1>
            <p>A quick description on this persons.</p>
        </div>
    );
};

const styles = {
    container: {
        width: 400,
        height: 'auto',
        backgroundColor: '#003162',
        color: '#fff',
        textAlign: 'center',
        padding: '2em',
        margin: '2em'
    }
};


export default Second;