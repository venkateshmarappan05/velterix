import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

//Images
import small1 from '../../images/small/img-1.jpg';
import small2 from '../../images/small/img-2.jpg';


class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Timeline</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Extra Pages</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Timeline</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <div id="cd-timeline">
                                        <ul className="timeline list-unstyled">
                                            <li className="timeline-list">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event One</h5>
                                                    <p className="mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                    <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">22</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list right clearfix">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Two</h5>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                    <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-t-5">See more detail</button>

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">23</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Three</h5>
                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                    <img src={small1} alt="" className="rounded mr-1" width="120" />{' '}
                                                    <img src={small2} alt="" className="rounded" width="120" />

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">24</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list right clearfix">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Four</h5>
                                                    <p className="mb-2">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                                                    <p className="mb-0">languages are members of the same family. Their separate existence is a myth... <Link to="#" className="text-primary">Read More</Link></p>

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">25</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Timeline));