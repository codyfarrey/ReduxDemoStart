import React from 'react';
import { connect } from 'react-redux';

const Second = props => {
    return (
        <div style={styles.container}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
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

const mapStateToProps = state => {
    return {
        name: state.card.name,
        description: state.card.description,
    };
};

export default connect(mapStateToProps)(Second);