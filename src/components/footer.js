import React from 'react';

class Footer extends React.Component {

    render() {
        return (

            <div>
                <div className="container  black_bg left-align">
                    <br/><br/><br/>
                    Contact :
                    <a href="mailto:Q@QEntertainmentLaw.com">Q @ Q Entertainment Law.com</a>
                </div>
                <div className="container footerText black_bg left-align">
                    <br/><br/><br/>
                    Copyright © 2011, Quinton Sheer Esq. All rights reserved. Disclaimer:The hiring
                    of a lawyer is an important decision that should not be based solely on
                    advertisements. Before you decide, contact us for information about our
                    qualifications and experience. This web site is designed for general information
                    only. The information presented at this site should not be construed to be
                    formal legal advice or the formation of a lawyer/client relationship.
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default Footer;