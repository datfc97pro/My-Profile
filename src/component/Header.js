import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (


            <header className="">
                <nav>
                    <div className="row m-0">

                        <ul className="main-nav col-12">
                            <li><a href="#contact">Contact</a></li>
                            {/* <li><a href="#projects">Projects</a></li> */}
                            <li><a href="#education">Education</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="hero-text-box">
                    <h1 id="typedtext">aaa</h1>
                </div>
                <audio hidden id="myAudio" controls autoPlay>
                    <source src="./Doi-Mat-Wanbi-Tuan-Anh.mp3" type="audio/ogg" />
                </audio>


            </header>


        );
    }
}

export default Header;