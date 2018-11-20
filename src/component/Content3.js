import React, { Component } from 'react';

class Content3 extends Component {
    render() {
        return (

            <section style={{ paddingBottom: 0 }} className="section section-project container-fluid" id="projects">
                <div className="row m-0">
                    <h4>Here are some of my projects</h4>
                </div>
                <div className="container">
                    <div className="row m-0 projects">
                        <div className="row m-0">
                            <div className="col-md-4">
                                <a href="https://reactjs-redux-firebase.netlify.com/">
                                    <div className="card">
                                        <img src="https://i.imgur.com/c2zaIJl.jpg" className="card-img-top project-thumbnail" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                React-Redux-FireBase
                                        </h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://checklogin-react-router-firebase.netlify.com/">
                                    <div className="card">
                                        <img src="https://znews-photo.zadn.vn/Uploaded/qhj_pwqvdvicbu/2018_10_22/andydorn.jpg" className="card-img-top project-thumbnail" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                React-Router-Redux-FireBase (Check Login)
                                        </h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="project-show-more mt-4">
                            {/* <div className="row m-0">
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
                        </div> */}
                        </div>
                        <p id="show-more-button" style={{ margin: '30px auto 20px' }}>
                            Show more
                        <i className="fas fa-caret-down ml-2" />
                        </p>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content3;