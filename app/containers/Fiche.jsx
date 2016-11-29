import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ficheTyping, createFiche, destroyFiche, editFiche }from '../actions/fiches';

import FicheSection from '../components/FicheSection.jsx';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Fiche extends Component{
    render() {
        const {newFiche, fiches, ficheTyping , createFiche, destroyFiche , editFiche} = this.props;
        return (
            <div>
                <h1>Liste des fiches</h1>
                <div>
                    <FicheSection
                        fiche={newFiche}
                        fiches={fiches}
                        onEntryChange={ficheTyping}
                        onEntrySave={createFiche}
                        onDestroy={destroyFiche}
                        onEdit={editFiche}
                    />
                </div>
            </div>
        );
    }
}

Fiche.propTypes ={
    fiches: PropTypes.array.isRequired,
    ficheTyping: PropTypes.func.isRequired,
    createFiche : PropTypes.func.isRequired,
    destroyFiche:  PropTypes.func.isRequired,
    editFiche:  PropTypes.func.isRequired,
    newFiche : PropTypes.object
};

function mapStateToProps(state){
    return {
        fiches: state.fiche.fiches,
        newFiche: state.fiche.newFiche
    }
}
export default connect(mapStateToProps, {ficheTyping, createFiche, destroyFiche, editFiche})(Fiche);
