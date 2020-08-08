import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const THEME_COLOR = "#003049";
const THEME_SECONDARY = "#f77f00";
const FONT_COLOR = "#FFF";


class Game extends React.Component {
    render() {
        return (
            <Col md={4} style={{ marginTop: 10 }} >
                <Card style={{ backgroundColor: "white", }}  >
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <img style={{ width: "100%" }} src="https://lh3.googleusercontent.com/proxy/bJxEYeRdI8FpJhjquF_LtejeTSZYScxA4VEPN_bKp3Tbe7wl_pSKvW_Z8y1X1cVPdHBucA8WTAaDZbN9pZJeZgDWfP8MSkq8upa3xthBi-r0RVrzOMZG3_2WXNJtecCxiS7lrKx2wWo3DlXPRA" />
                            </Col>
                            <Col md={8}>
                                <h5>{this.props.game.title}</h5>
                                <p>
                                    {this.props.game.platform}
                                </p>
                                <p>
                                    Rating:&nbsp;&nbsp;{this.props.game.score}
                                </p>
                                <p>
                                    Genre:&nbsp;&nbsp;<Badge variant="warning">{this.props.game.genre}</Badge>
                                </p>
                            </Col>
                        </Row>

                    </Card.Body>
                    {this.props.game.editors_choice == "Y" &&
                        (<Card.Footer className="text-muted" style={{ backgroundColor: THEME_SECONDARY }}> <p style={{ color: "white" }}>Editors Choice</p> </Card.Footer>)}
                </Card>
            </Col>
        );
    }
}

export default Game;
