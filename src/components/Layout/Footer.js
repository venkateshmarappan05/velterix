import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    © {new Date().getFullYear()}  Veltrix <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</span>.
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;






