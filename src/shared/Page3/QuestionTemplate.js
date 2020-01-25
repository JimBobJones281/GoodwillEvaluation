import React, { Component } from 'react';

class QuestionTemplate extends Component {
    render() {
        return (
            
            <div>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="{props.formGrp}" name="{props.formGrp}"></input>
                        <label className="custom-control-label" for="{props.formGrp}"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="{props.formGrp}" name="{props.formGrp}"></input>
                        <label className="custom-control-label" for="{props.formGrp}"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="{props.formGrp}" name="{props.formGrp}"></input>
                        <label className="custom-control-label" for="{props.formGrp}"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="{props.formGrp}" name="{props.formGrp}"></input>
                        <label className="custom-control-label" for="{props.formGrp}"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="{props.formGrp}" name="{props.formGrp}"></input>
                        <label className="custom-control-label" for="{props.formGrp}"></label>
                    </div>
                </td>                                  
            </div>
        
        );
    }
}

export default QuestionTemplate;