import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import FicheForm from './NewFicheForm.jsx';

export default class AddFicheModal extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {show : false} ;
    }
    /*
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways. I personally think this makes it more reusable.
     */
    onSave() {
        const {onEntrySave, value} = this.props;
        onEntrySave(value);
    }
    /*
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways. I personally think this makes it more reusable.
     */
    onChange(event) {
        const {onEntryChange} = this.props;
        onEntryChange(event.target.value);
    }
    render(){
        let close = () => this.setState({ show : false});
        const {value} = this.props;
        return(
            <div>
                <Button bsStyle="primary" onClick={()=> this.setState({show : true})}>
                    + Ajouter une fiche
                </Button>
                <ModalFiche
                    show={this.state.show}
                    onHide={close}
                    value={value}
                    onChange={this.onChange}
                    Save={this.onSave}
                />
            </div>
        )
    }
}
AddFicheModal.propTypes = {
    value: PropTypes.object,
    onEntrySave: PropTypes.func,
    onEntryChange: PropTypes.func
};

class ModalFiche extends Component {
    render() {
        const {show, onHide,value, onChange, Save} = this.props;
        const {text, name } = value ;
        return (
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Ajouter une fiche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FicheForm/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    { /* <Button bsStyle="success" onClick={Save}>Enregistrer</Button>*/}
                </Modal.Footer>
            </Modal>
        );
    }
}
ModalFiche.propTypes = {
    name: PropTypes.string,
    text:PropTypes.string,
    onChange: PropTypes.func,
    onSave: PropTypes.func
};
