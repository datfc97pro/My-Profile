import React, { Component } from 'react';

class Content1 extends Component {
    render() {
        return (
            <section className="section section-education container-fluid" id="education">
                <h4>Education</h4>
                <div id="js--wp-1" className="row profile-picture m-0" style={{ marginTop: 40 }}>

                    <div className="col">
                        <img id="profile-picture" src="resources/images/IMG_0262.JPG" alt="" />
                    </div>

                </div>
                <div id="js--wp-2">
                    <div className="container mt-3">
                        <div className="row education">

                            <div className="col">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card" style={{ width: 100 }}>
                                            <a href="https://www.facebook.com/ngothinham.thanhtri/">
                                                <img className="card-img-top" src="./resources/images/23130769_1728525133846218_8146550484434740273_n.jpg" alt="" />
                                            </a>
                                            <div className="card-body">
                                                <p className="card-text">2012 - 2015</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 school">
                                        <p>
                                            THPT - Ngô Thì Nhậm (Hà Nội - Việt Nam)
                        <br />
                                            <em>Chuyên toán</em>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row education mt-2">

                            <div className="col">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card" style={{ width: 100 }}>
                                            <a href="http://actvn.edu.vn/">
                                                <img className="card-img-top" src="https://media.kenhtuyensinh.vn/images/cms/2018/01/hoc-vien-ky-thuat-mat-ma-thong-bao-tuyen-sinh-thac-si-chuyen-nganh-an-toan-thong-tin-2018.png" alt="" />
                                            </a>
                                            <div className="card-body">
                                                <p className="card-text">2015 - 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 school">
                                        <p>
                                            HV - Kỹ Thuật Mật Mã (Hà Nội - Việt Nam)
                        <br />
                                            <em>Chuyên ngành: An toàn thông tin</em>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Content1;