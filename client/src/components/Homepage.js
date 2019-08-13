import React, { Component } from "react";
import Navbar from "./Navbar";


class Homepage extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}

                {/* ========================videos =================================== */}
                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway.mp4')} type="video/mp4" />
                </video>

                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway2.mp4')} type="video/mp4" />
                </video>

                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway3.mp4')} type="video/mp4" />
                </video>
                {/* ==================================================================== */}

                {/* ================= icons ======================= */}
                <div className="center">
                    <div className="form-container rounded pt-1 pt-2">
                        <a href="handbag.html">
                            <input type="image" id="handbag" className="handbag icons rounded" src={require('../images/handbag.png')} width="100"
                                height="100" />
                        </a>
                    </div>

                    <div className="form-container rounded pt-1 pt-2">
                        <a href="dress.html">
                            <input type="image" id="dress" className="dress icons rounded" src={require('../images/dress.jpg')} width="100"
                                height="100" />
                        </a>
                    </div>

                    <div className="form-container rounded pt-1 pt-2">
                        <a href="shoes.html">
                            <input type="image" id="shoes" className="shoess icons rounded" src={require('../images/heel.jpg')} width="100"
                                height="100" />
                        </a>
                    </div>
                </div>
                {/* ====================== end===================== */}
            </div>
        )
    }
}

export default Homepage;