
import React , { Component } from 'react';

class  Component_About extends Component {
      render(){
        return(
            <div className="section" id="about">
                <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">About</div>
                            <p>Computer engineer. <br/> Working whith the last 7 years whit web development</p> 
                            <p><a href="https://github.com/marcusfcbarbosa">GitHub</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">Basic Information</div>
                            <div className="row">
                                <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                <div className="col-sm-8">33</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                <div className="col-sm-8">marcusfcbarbosa@hotmail.com</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                <div className="col-sm-8">+55 11 9 8660-2829</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                <div className="col-sm-8">Currently living in Sao Paulo - Brazil  </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                                <div className="col-sm-8">English, Portuguese  </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>            
        );
    }
}
export default Component_About;