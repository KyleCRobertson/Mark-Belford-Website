import React from 'react';
import './index.css';

class Home extends React.Component{
  render(){
    return (
      <main id='app'>
        <section className='content content-top'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>This is the<br/>Landing Page</h1>
              <p>To be updated</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;