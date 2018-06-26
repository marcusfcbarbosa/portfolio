import React , {Component } from 'react';



class  Component_DesignPattern extends Component{
render(){
    return(
<div className="section" id="designPattern">
   <div className="container">
      <div className="h4 text-center mb-4 title">Design Patterns</div>
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
         <div className="card-body">
            {/* Linha 1 */}
            <div className="row">
               <div className="col-md-6">
                  <div className="progress-container progress-primary">
                     <span className="progress-badge">HTML</span>
                     <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" 
                        data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" 
                        aria-valuemin="0" aria-valuemax="100" 
                        style={{flex: 0.8}}
                        >
                     </div>
                     <span className="progress-value">80%</span>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="progress-container progress-primary">
                  <span className="progress-badge">CSS</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-primary"
                     data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                     role="progressbar" aria-valuenow="60" aria-valuemin="0"
                     aria-valuemax="100" 
                     style={{flex: 0.6}}>
                  </div>
                  <span className="progress-value">60%</span>
               </div>
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

export default Component_DesignPattern;