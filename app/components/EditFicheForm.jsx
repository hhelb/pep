import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/fiches';


const form = reduxForm({
    form: 'EditFicheForm'
});
const renderField = field =>
    (
        <div>
            <label>{field.input.label}</label>
            <input{...field.input} />
            {field.touched && field.error && <div className="error">{field.error}</div>}
        </div>
    );

class EditFicheForm extends Component {
    componentDidMount() {
        this.handleInitialize();
    }
    handleInitialize() {
        const initData = {
            "name": this.props.name,
            "text": this.props.descr,
            "id": this.props.id
        };
        this.props.initialize(initData);
    }
    handleFormSubmit(formProps){
        this.props.editFiche(formProps);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" component={renderField} type="text"/>
                    </div>
                    <div>
                        <label htmlFor="text">Text</label>
                        <Field name="text" component={renderField} type="text"/>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        fiche: state.form
    };
}
export default connect(mapStateToProps, actions) (form(EditFicheForm));
