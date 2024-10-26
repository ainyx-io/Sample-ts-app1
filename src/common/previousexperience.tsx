import React from 'react';
import Table from 'react-bootstrap/Table';
import '../css/common/previousexperience.css';

const PreviousExperience: React.FC = () => {
    return (
       <div className='AA'>
        <h4>Previous Experience</h4>
        <div className="previous-experience card">
            <Table className='table2'>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Designation</th>
                        <th>Experience</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Healthip Technologies</td>
                        <td>UI/UX Designer</td>
                        <td>2 Years</td>
                        <td>Calicut</td>
                    </tr>
                    <tr>
                        <td>2Base Technologies</td>
                        <td>UI/UX Designer</td>
                        <td>1 Year</td>
                        <td>Kochi</td>
                    </tr>
                    <tr>
                        <td>Zenerom Technologies</td>
                        <td>UI/UX Designer</td>
                        <td>2 Year</td>
                        <td>Kochi</td>
                    </tr>
                    <tr>
                        <td>Healship Technologies</td>
                        <td>UI/UX Designer</td>
                        <td>2 Year</td>
                        <td>Calicut</td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    </div>
    );
}

export default PreviousExperience;
