import React from 'react';
import './Preloader.scss';

class Preloader extends React.Component {
  state = {
    show: true,
    addClass: false,
  }

  toggleWithTimeout(prop, timeout) {
    setTimeout(() => this.setState(state => ({
      [prop]: !state[prop],
    })), timeout);
  }

  componentDidMount() {
    this.toggleWithTimeout('addClass', 15000);
    this.toggleWithTimeout('show', 18000);
  }

  render() {
    const { show, addClass } = this.state;
    return (
      <div>
        {show && <div className={`preloader ${addClass ? 'closePreloader' : ''}`}>
					<div className="preloader__clockWrap">
						<div className="preloader__clock"></div>
					</div>
				</div>}
      </div>
    );
  }
}

export default Preloader;