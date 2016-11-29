import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Playlist = () => {
    return (
        <div className={cx('about')}>
            <h1 className={cx('header')}>Liste des playlists</h1>
        </div>
    );
};

export default Playlist;