/**
 * Created by hasj on 21/11/2016.
 */
import React, { Component, PropTypes } from 'react';
import FicheItem from './FicheItem.jsx';
import  AddFicheModal  from './AddFicheModal.jsx';

const FicheSection =
    ({ onEntryChange, onEntrySave, onDestroy, onEdit, fiches, fiche }) => {

    const ficheItems = fiches.map((fiche, key) => {
        return (
            <FicheItem
                index={key}
                id={fiche.id}
                key={key}
                text={fiche.text}
                name={fiche.name}
                log={typeof fiche}
                onDestroy={onDestroy}
                onEdit={onEdit}
               />);
    });

    return (
      <div>
            <AddFicheModal
                onEntryChange={onEntryChange}
                onEntrySave={onEntrySave}
                value={fiche}
            />
            <ul>{ficheItems}</ul>
        </div>
    );
};

FicheSection.propTypes = {
    fiche: PropTypes.object,
    fiches: PropTypes.array.isRequired,
    onEntryChange: PropTypes.func.isRequired,
    onEntrySave : PropTypes.func.isRequired,
    onDestroy : PropTypes.func.isRequired,
    onEdit : PropTypes.func.isRequired
};

export default FicheSection;
