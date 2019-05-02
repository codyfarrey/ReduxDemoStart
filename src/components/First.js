import React from 'react';
import {connect} from 'react-redux';
import {nameChanged, descriptionChanged} from "../actions/CardActions";

const First = props => {

    const handleNameChanged = event => {
        props.nameChanged(event.target.value);
    };

    const handleDescriptionChanged = event => {
        props.descriptionChanged(event.target.value);
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Full Name"
                style={styles.textField}
                onChange={handleNameChanged.bind(this)}
            />
            <input
                type="text"
                placeholder="Description"
                style={styles.textField}
                onChange={handleDescriptionChanged.bind(this)}
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

const mapStateToProps = state => {
  return {
    name: state.card.name,
    description: state.card.description,
  };
};

export default connect(mapStateToProps, {nameChanged, descriptionChanged})(First);