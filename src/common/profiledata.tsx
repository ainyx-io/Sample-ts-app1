import React from 'react';
import '../css/common/profiledata.css';

const Profiledata: React.FC = () => {
    return (
        <div className="candidate-profile-card">
            <img src="/images/mike.png" alt="James Samuel" className="circle-image" />
            <h3>James Samuel</h3>
            <p>UI/UX Designer</p>
        <div className='things-sidebyside'>
            <div className='one-thing'>
                <p>Current Working</p>
                <p>Experience</p>
                <p>Education</p>
            </div>
            <div className='second-thing'>
                <p>Cure Delivery Technologies</p>
               <p>7 Years</p>
               <p>Stark University - MBA</p>
            </div>
        </div>
          
        </div>
    );
}

export default Profiledata;
