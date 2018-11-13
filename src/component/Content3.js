import React, { Component } from 'react';

class Content3 extends Component {
    render() {
        return (

            <section style={{ paddingBottom: 0 }} className="section section-project container-fluid" id="projects">
                <div className="row">
                    <h4>Here are some of my projects</h4>
                </div>
                <div className="row projects">
                    <div className="row">
                        <div className="col-4">
                            <a href="https://secret-harbor-79232.herokuapp.com/">
                                <div className="card">
                                    <img src="http://i.imgur.com/SBEmFpv.jpg" className="card-img-top project-thumbnail" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            YelpCamp
                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="https://my-own-warbler-client.herokuapp.com/">
                                <div className="card">
                                    <img src="resources/images/5.jpg"  className="card-img-top project-thumbnail"  alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Warbler
                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="http://www.clubfinder.space/">
                                <div className="card">
                                    <img src="./resources/images/clubfinder.PNG"  className="card-img-top project-thumbnail"  alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Club Finder
                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="project-show-more mt-4">
                        <div className="row">
                            <div className="col-4">
                                <a href="https://thacquanghuy2705.000webhostapp.com/">
                                    <div className="card">
                                        <img src="./resources/images/hero.jpg" className="card-img-top project-thumbnail"  alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Omnifood
                          </h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p id="show-more-button" style={{ margin: '30px auto 20px' }}>
                        Show more
                <i className="fas fa-caret-down" />
                    </p>
                </div>
            </section>

        );
    }
}

export default Content3;