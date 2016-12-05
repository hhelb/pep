import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FicheItem from '../components/FicheItem.jsx';
import {destroyFiche} from '../actions/fiches';

class DetailedFiche extends Component {
    findOne(id){
        const { fiches } = this.props;
        return fiches.filter(function (res) {
            return res.id == id;
        });
    }
    render() {
        const fiche = this.findOne(this.props.params.ficheId)[0];
        const { name , text , id} = fiche;
        const { destroyFiche , editFiche} = this.props;
        return (
            <div>
                <h2>Detail de la fiche "{name}"</h2>
                <FicheItem name={name}
                           id={id}
                           text={text}
                           onDestroy={destroyFiche}
                           onEdit={editFiche}/>
            </div>
        )
    }
}

DetailedFiche.PropTypes = {
    fiches: PropTypes.array.isRequired,
    text : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    destroyFiche :PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    fiche: PropTypes.object
};

function mapStateToProps(state){
    return {
     fiches : state.fiche.fiches,
    }
}
export default connect (mapStateToProps , {destroyFiche})(DetailedFiche);