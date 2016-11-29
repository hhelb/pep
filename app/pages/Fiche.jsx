import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import FicheContainer from 'containers/Fiche';

class Fiche extends Component {
    render() {
        return (
            <Page {...this.getMetaData()}>
                <FicheContainer {...this.props} />
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
        return 'Fiche | Traverse';
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

export default Fiche;
