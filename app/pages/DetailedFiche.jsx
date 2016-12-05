import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import DetailedFicheContainer from '../containers/DetailedFiche.jsx';

class DetailedFiche extends Component {
    render() {
        return (
            <Page {...this.getMetaData()}>
                <DetailedFicheContainer {...this.props} />
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
        return 'Detailed Fiche | Traverse';
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

export default DetailedFiche;
