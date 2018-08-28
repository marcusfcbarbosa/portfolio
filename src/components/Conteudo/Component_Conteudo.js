import React , {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Component_Profile from '../Profile/Component_Profile';
import Component_About from '../About/Component_About';
import  Component_Skill from '../Skill/Component_Skill';
import Component_DesignPattern from '../DesignPattern/Component_DesignPattern';
import Component_architectural from '../Architectural/Component_architectural';
import Component_Portfolio from '../Portfolio/Component_Portfolio';
import Component_Experience from '../Experience/Component_Experience';
import Component_Education  from '../Education/Component_Education';
import Component_Reference  from '../Reference/Component_Reference';
import Component_Contact  from '../Contact/Component_Contact';
import Component_Footer  from '../Footer/Component_Footer';

class  Component_Conteudo extends Component{
    constructor(props, context) {
        super(props, context);
      }
      componentDidMount() {
        this.aos = AOS;
        this.aos.init({
          duration: 2000
        });
      }
      componentDidUpdate() {
        this.aos.refresh();
      }
    render(){
        return(
    <div>
        <div className="page-content">
                <div>
                    <Component_Profile />
                    <Component_About/>
                    <Component_Skill/>
                    <Component_DesignPattern />
                    <Component_architectural/>
                    <Component_Portfolio/>
                    <Component_Experience />
                    <Component_Education />
                    
                    {/* <Component_Reference /> */}
                    
                    <Component_Contact />
                    <Component_Footer />
            </div>
        </div>
    </div> 
)
    }   
}

export default Component_Conteudo;