import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'css/components/about';


const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Playlist extends Component {
   render() {
        const { playlist } = this.props;
        return (
            <div className={cx('about')}>
                <h1 className={cx('header')}>Playlist</h1>
                <ul>
                    {playlist.map(p =>
                        <li>
                            <div>
                                {p.name}
                                <ul>
                                    {p.fiches.map(fiche =>
                                        <li>{fiche.name}</li>)
                                    }
                                </ul>
                            </div>
                        </li>)}
                </ul>
            </div>
        );
    };
}

Playlist.PropTypes = {
    fiches: PropTypes.array.isRequired,
    playlist: PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return{
        playlist : state.playlist,
        fiches : state.fiche.fiches
    }
}
export default connect(mapStateToProps)(Playlist);
