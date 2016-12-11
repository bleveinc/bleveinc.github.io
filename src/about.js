
import React from 'react';
import data from './data';

class About extends React.Component {
  render() {
    return (
      <section id='about' className='offset section about'>
        <div className='innerContent'>
          <div className='container clearfix'>
            <div className='sixteen columns about'>
              <h1 className='title'>About Us</h1>
              <p className='text'>{data.aboutUs}</p>
              <button type='button'>View Our Work</button>
            </div>
          </div>
        </div>
     </section>
    );
  }
}

export default About;

