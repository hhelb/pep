/**
 * Created by hasj on 21/11/2016.
 */

import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditFicheForm from './EditFicheForm.jsx';
import { browserHistory ,Link } from 'react-router'


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
        const {name, id, text, onEdit} = this.props;

        return (
            <div>
                    <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/"/>
                    <p> Id : {id} </p>
                    <p> nom : {name} </p>
                    <p> Texte: {text}</p>
                    <Link to="/fiches">
                        <Button bsStyle="danger" className="glyphicon glyphicon-remove" onClick={this.onDestroy}/>
                    </Link>
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
        )
    }
};

FicheItem.propTypes={
  text : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDestroy :PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    fiche: PropTypes.object
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