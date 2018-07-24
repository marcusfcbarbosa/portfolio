import React , {Component} from 'react';
import bridgeImage from '../../images/imagemFundo2.jpg';

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
                                    <img src={require('../../images/marcus.jpg')} alt="Image"  />
                                    </a>
                                </div>
                                <div className="h2 title">Marcus FC Barbosa</div>
                                <p className="category text-white">Full Stack .Net Developer</p>
                                <a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                            </div>
                            </div>
                            <div className="section">
                            
                            </div>
                        </div>
                 </div>
        </div>

);

}

}
export default Component_Profile;