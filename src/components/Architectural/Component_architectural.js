import React , {Component } from 'react';

class  Component_architectural extends Component {

    render(){
        return(
<div className="section" id="architecturalPattern">
   <div className="container">
      <div className="h4 text-center mb-4 title">Architectural Patterns</div>
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
         <div className="card-body">
            {/* Linha 1 */}
            <div className="row">
               <div className="col-md-6">
                  <div className="progress-container progress-primary">
                     <span className="progress-badge">DDD (Domain Driven Design) </span>
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
                  <span className="progress-badge">CQRS (Command Query Responsibility Segregation) </span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-primary"
                     data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                     role="progressbar" aria-valuenow="60" aria-valuemin="0"
                     aria-valuemax="100" 
                     style={{flex: 0.77}}>
                  </div>
                  <span className="progress-value">75%</span>
               </div>
            </div>
         </div>
      </div>
    {/* Linha 2 */}
    <div className="row">
               <div className="col-md-6">
                  <div className="progress-container progress-primary">
                     <span className="progress-badge">TDD (Test Driven Design) </span>
                     <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" 
                        data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" 
                        aria-valuemin="0" aria-valuemax="100" 
                        style={{flex: 0.7}}
                        >
                     </div>
                     <span className="progress-value">70%</span>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="progress-container progress-primary">
                  <span className="progress-badge">BDD (Behavior Driven Development)</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-primary"
                     data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                     role="progressbar" aria-valuenow="60" aria-valuemin="0"
                     aria-valuemax="100" 
                     style={{flex: 0.7}}>
                  </div>
                  <span className="progress-value">70%</span>
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

export default Component_architectural;