/**
 * Created by hasj on 21/11/2016.
 */
import React, { Component, PropTypes } from 'react';
import FicheItem from './FicheItem.jsx';
import  AddFicheModal  from './AddFicheModal.jsx';
import { Link } from 'react-router';

export default class FicheSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {onEntryChange, onEntrySave, onDestroy, onEdit, fiches, fiche} = this.props;
        const ficheItems = fiches.map((fiche, key) => {
            return (
                <div className="col-md-4" key={key}>
                    <Link to={`fiches/fiche/${fiche.id}`} >
                        <h3> Nom : {fiche.name}</h3>
                    </Link>
                    <div className="detail">
                        {this.props.children}
                    </div>
                    <FicheItem
                        name={fiche.name}
                        index={key}
                        id={fiche.id}
                        key={key}
                        text={fiche.text}
                        log={typeof fiche}
                        onDestroy={onDestroy}
                        onEdit={onEdit}
                    />
                </div>);
        });
        return (
            <div>
                <AddFicheModal
                    onEntryChange={onEntryChange}
                    onEntrySave={onEntrySave}
                    value={fiche}
                />
                <ul>{ficheItems}</ul>
                <h3>

                </h3>
            </div>
        );
    };
}
FicheSection.propTypes = {
    fiche: PropTypes.object,
    fiches: PropTypes.array.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntrySave : PropTypes.func.isRequired,
    onDestroy : PropTypes.func.isRequired,
    onEdit : PropTypes.func.isRequired
};
