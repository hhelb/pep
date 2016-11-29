import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import PlaylistContainer from 'containers/Playlist';

class Playlist extends Component {
    render() {
        return (
            <Page {...this.getMetaData()}>
                <PlaylistContainer {...this.props} />
            </Page>
        );
    }

    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Playlist | Traverse';
    }

    pageMeta() {
        return [
            { name: "description", content: "A reactGo example of life" }
        ];
    }

    pageLink() {
        return [];
    }
}

export default Playlist;
