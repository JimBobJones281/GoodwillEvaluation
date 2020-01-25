import React, { Component } from 'react';

class QuestionTemplate extends Component {
    render() {
        return (
            <div>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="formGrp" name="radio1"></input>
                        <label className="custom-control-label" for="formGrp1"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="formGrp" name="radio2"></input>
                        <label className="custom-control-label" for="formGrp"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="formGrp" name="radio3"></input>
                        <label className="custom-control-label" for="formGrp"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="formGrp4" name="radio4"></input>
                        <label className="custom-control-label" for="formGrp4"></label>
                    </div>
                </td>
                <td>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="formGrp" name="radio5"></input>
                        <label className="custom-control-label" for="formGrp"></label>
                    </div>
                </td>                                  
            </div>
        
        );
    }
}

export default QuestionTemplate;