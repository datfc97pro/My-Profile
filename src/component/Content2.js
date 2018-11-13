import React, { Component } from 'react';

class Content2 extends Component {
    render() {
        return (
            <section className="section section-stack container-fluid ">
                <div className="row m-0">
                    <h4>Development stack</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://cdn.rawgit.com/shannonmoeller/front-end-logo/master/exports/front-end-logo-bw.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">HTML5, CSS3, JS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://cdn.worldvectorlogo.com/logos/react.svg" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">Node.js</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://static1.squarespace.com/static/513914cde4b0f86e34bbb954/t/58d2c758725e25221a20ed53/1490208601230/mongodb-logo.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 stack-features">
                            <div className="card">
                                <img src="https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="card-title">Redux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Content2;