import React from 'react';

const First = props => {
    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Full Name"
                style={styles.textField}
            />
            <input
                type="text"
                placeholder="Description"
                style={styles.textField}
            />
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
    },
    textField: {
        width: '100%',
        height: '3em',
        margin: '1em',
    }
};

export default First;