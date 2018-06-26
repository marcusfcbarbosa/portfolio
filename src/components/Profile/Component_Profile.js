import React , {Component} from 'react';
import bridgeImage from '../../images/imagemFundo.jpg';

class Component_Profile extends Component{
render(){
return(
            <div className="profile-page">
                        <div className="wrapper">
                            <div className="page-header page-header-small" filter-color="green">
                            <div className="page-header-image" data-parallax="true"
                             style={{ backgroundImage: `url(${bridgeImage})` }}>
                            </div>
                            <div className="container">
                            <div className="content-center">
                                <div className="cc-profile-image"><a href="#">
                                    <img src={require('../../images/marcus4.jpg')} alt="Image"  />
                                    </a>
                                </div>
                                <div className="h2 title">Marcus FC Barbosa</div>
                                <p className="category text-white">.Net Developer</p>
                                <a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                            </div>
                            </div>
                            <div className="section">
                            <div className="container">
                                <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Facebook">
                                <i className="fa fa-facebook"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram"></i></a></div>
                            </div>
                            </div>
                        </div>
                 </div>
        </div>

);

}

}
export default Component_Profile;