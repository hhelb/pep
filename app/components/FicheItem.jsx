/**
 * Created by hasj on 21/11/2016.
 */

import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditFicheForm from './EditFicheForm.jsx';

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
                        update={onEdit}
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
        const { descr, name, id } = this.props ;
        return (
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Editer une fiche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <EditFicheForm
                            descr={descr}
                            name={name}
                            id={id}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
ModalFiche.propTypes = {
    name: PropTypes.string,
    descr:PropTypes.string,
    id : PropTypes.string,
    update: PropTypes.func.isRequired
};