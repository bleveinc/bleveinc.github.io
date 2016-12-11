
import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
    };
  }

  _handleClick = (index) => {
    this.setState({focused: index});
  }

  render() {
    return (
    <span>
      <header id='header'>
        <div className='header'>
          <div className='container clearfix'>
            <div className='one-third column'>
              <div className='logo'></div>
             </div>
             <div className='two-thirds column'>
             {/*<a href='#' className='mobile-navigation'><i className='icon-menu'></i></a>*/}
              <nav id='navigation'>
                <ul className='navigation'>
                  {this.props.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={ '#' + item.toLowerCase()} onClick={this._handleClick.bind(this, index)}>{item}</a>
                      </li>
                    );
                  })}
                 </ul>
               </nav>
              </div>
            </div>
          </div>
        </header>
        <section id='home' className='home'>
            <div className='image'>
              <div className='overlay'>
                <div className='text'>
                  <div className='inner'>
                    <h1 className='cufon'>We bring your <br/>vision into reality</h1>
                    <p className='cufon'>Design | Engineering | Infrastructure | Training</p>
                  </div>
                </div>
                <div className='arrow'>
                  <a href={'#about'}>Discover everything about us!</a>
                </div>
              </div>
            </div>
          </section>
      </span>
    );
  }
}

export default Navigation;

