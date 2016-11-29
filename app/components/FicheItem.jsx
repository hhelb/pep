/**
 * Created by hasj on 21/11/2016.
 */

import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FicheForm from '../components/FicheForm.jsx';
import ReactDOM from 'react-dom';

export default class FicheItem extends Component {
    constructor(props) {
        super(props);
        this.onDestroy = this.onDestroy.bind(this);
        this.state = {
            show: false
        };
    };
    onDestroy() {
        const { id, onDestroy } = this.props;
        onDestroy(id);
    };
    render() {
        let close = () => this.setState({show : false});
        const {name, id, log, text, onEdit} = this.props;
        return (
            <div>
                <div className="col-md-4">
                    <h3> Nom : {name}</h3>
                    <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/"/>
                    <p> Id : {id} </p>
                    <p> Texte: {text}</p>
                    <p> log : {log} </p>
                    <button className="glyphicon glyphicon-remove btn btn-danger" onClick={this.onDestroy}/>
                    <Button bsStyle="warning" className="glyphicon glyphicon-edit" onClick={() => this.setState({show:true})}/>
                    <ModalFiche
                        show={this.state.show}
                        onHide={close}
                        name={name}
                        id={id}
                        descr={text}
                        onUpdate={onEdit}
                        />

                </div>

            </div>
        )

    }
};

FicheItem.propTypes={
  text : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDestroy :PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};


class ModalFiche extends Component {
    render() {
        const {show, onHide, descr, name,id, onUpdate } = this.props ;
        return (
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Editer une fiche</Modal.Title>
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
    descr:PropTypes.string,
    id : PropTypes.string,
    onUpdate: PropTypes.func.isRequired
};