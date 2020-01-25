import React, { Component } from 'react';
import QuestionTemplate from './QuestionTemplate';

class ClarityExpectations extends Component {
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="col">
                        <tr>
                            <th className="col"><h5>Clarity of Expectations or Directions</h5></th>
                            <div>
                            <th className="col">Strongly Disagree</th>
                            <th className="col">Disagree</th>
                            <th className="col">Neutral</th>
                            <th className="col">Agree</th>
                            <th className="col">Strongly Agree</th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 1:</span>The instructor clearly articulated the standards of performance for the course.</p>
                            </td>  
                            <div>
                            <QuestionTemplate/>
                            {/*<ReactRadioButtonGroup name="formGrp5" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q5"/>*/}
                            </div>                             
                        </tr>
                        <tr className="col">
                            <td className="col">
                                <p><span className="badge badge-primary">Question 2:</span>The instructor provided guidance for understanding course exercises</p>
                            </td>
                            <div>
                            <QuestionTemplate/>
                            {/*<ReactRadioButtonGroup name="formGrp6" options={["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]} value="Q6"/>*/}
                            </div>
                        </tr>
                    </tbody>
                </table>
                {'\n'}
            </div>
        );
    }
}

export default ClarityExpectations;