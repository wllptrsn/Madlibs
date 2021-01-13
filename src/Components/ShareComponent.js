import React, { Component } from 'react';
import {
    TwitterShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    TwitterIcon,
    FacebookIcon,
    WhatsappIcon
} from "react-share";

class Share extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="social-icon">
                    <TwitterShareButton url="http://twitter.com" quote="Hola MuthaFuckas!!" hashtag="#oddlibs">
                        <TwitterIcon logoFillColor="white" round={true} ></TwitterIcon>
                    </TwitterShareButton>
                </div>
                <div className="social-icon">
                    <FacebookShareButton url="http://twitter.com" quote="Hola MuthaFuckas!!" hashtag="#oddlibs">
                        <FacebookIcon logoFillColor="white" round={true} ></FacebookIcon>
                    </FacebookShareButton>
                </div>
                <div className="social-icon">
                    <WhatsappShareButton url="http://twitter.com" quote="Hola MuthaFuckas!!" hashtag="#oddlibs">
                        <WhatsappIcon logoFillColor="white" round={true} ></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
            </React.Fragment >
        );

    }
}
export default Share;