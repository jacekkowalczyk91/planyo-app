import React, {Component} from 'react'
import {
    Row, Col
} from 'react-bootstrap'
import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';

const {
    FacebookShareButton,
    TwitterShareButton,
} = ShareButtons;






const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class ShareButton extends Component {
    render() {
        const shareUrl = 'http://app.trio.jfddl2.is-academy.pl';
        const title = 'Planyo App';

        return (
            <div className="Demo__container">

                {/*<Grid>*/}
                <Row>
                    <Col xs={4}>
                        <div className="Demo__some-network">
                            <FacebookShareButton
                                url={shareUrl}
                                quote={title}
                                className="Demo__some-network__share-button">
                                <FacebookIcon
                                    size={22}
                                    round/>
                            </FacebookShareButton>

                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="Demo__some-network">
                            <TwitterShareButton
                                url={shareUrl}
                                title={title}
                                className="Demo__some-network__share-button">
                                <TwitterIcon
                                    size={22}
                                    round/>
                            </TwitterShareButton>
                        </div>
                    </Col>
                </Row>
                {/*</Grid>*/}
            </div>
        );
    }
}

export default ShareButton;