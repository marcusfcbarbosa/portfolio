import React , {Component } from 'react';


class Component_Portfolio extends Component {
    render(){
        return(
            <div className="section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="h4 text-center mb-4 title">Companies i´ve worked </div>
                            <div className="nav-align-center">
                            <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist">
                                    <i className="fa fa-laptop" aria-hidden="true"></i></a>
                                </li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist">
                                    <i className="fa fa-picture-o" aria-hidden="true"></i></a>
                                </li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist">
                                    <i className="fa fa-camera" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content gallery mt-5">
                        <div className="tab-pane active" id="web-development">
                            <div className="ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#web-development">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/agilitas.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Bank agillitas</div>
                                                <p>Sênior .Net developer</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#web-development">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/Pagolivre.png')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Startup Project</div>
                                                <p>Full Stack .Net developer</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#web-development">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/Eicon.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">EICON</div>
                                                <p>Sênior .Net Developer</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#web-development">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/Sebrae.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Sebrae</div>
                                                <p>Sênior .Net Developer</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* 
                         <div className="tab-pane" id="graphic-design" role="tabpanel">
                            <div className="ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#graphic-design">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/graphic-design-1.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Triangle Pattern</div>
                                                <p>Graphic Design</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#graphic-design">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/graphic-design-2.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Abstract Umbrella</div>
                                                <p>Graphic Design</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#graphic-design">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/graphic-design-3.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Cube Surface Texture</div>
                                                <p>Graphic Design</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#graphic-design">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/graphic-design-4.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Abstract Line</div>
                                                <p>Graphic Design</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        
                        
                        */}
                    
                       {/* 
                     <div className="tab-pane" id="Photography" role="tabpanel">
                            <div className="ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#Photography">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/photography-1.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Photoshoot</div>
                                                <p>Photography</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#Photography">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/photography-3.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Wedding Photoshoot</div>
                                                <p>Photography</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#Photography">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/photography-2.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Beach Photoshoot</div>
                                                <p>Photography</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                        <a href="#Photography">
                                        <figure className="cc-effect">
                                            <img src={require('../../images/photography-4.jpg')} alt="Image"  />
                                            <figcaption>
                                                <div className="h4">Nature Photoshoot</div>
                                                <p>Photography</p>
                                            </figcaption>
                                        </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    
                    */}

                       



                    </div>
                </div>
                </div>
        );
    }
}

export default Component_Portfolio;