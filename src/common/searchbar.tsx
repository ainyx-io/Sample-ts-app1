import React from 'react';
import '../css/common/searchbar.css';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>


const Searchbar: React.FC = () => {
  return (
    <div className="col-lg-11 header2h" style={{height: '30vh'}}>
      <div className='col-lg-12 v'>
        <div className="search-box">
          <button type="button" className="btn-outline-secondary">
            Search something...
          </button>
        </div>
        <div className='u'>
          <button className="Ebtn-primary" type="button">Add New</button>
        </div>
      </div>
      <div className="col-lg-12 greeting"  style={{height: '18vh'}}>
        <div className='col-lg-6 a' >
          <h4>Good Morning, Sara</h4>
          <p>You have 75 new applications. It's a lot of work for today! So let's start.</p>
          <button type="button" className="btn-success">Review it</button>
        </div>
        <div className='col-lg-6 b'>
          <img src="/images/asset2.png" alt="" className="img-fluid"/>
        </div>

      </div>
    </div>
  );
};

export default Searchbar;
