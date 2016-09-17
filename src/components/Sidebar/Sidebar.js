import React from 'react';

import styles from './styles.module.css';
import Upcoming from './Upcoming/Upcoming';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var array = [{"title":"Movie1","rating":0.9},{"title":"Movie2","rating":0.8},{"title":"Movie3","rating":0.7}]
    return (
        <div className={styles.sidebar}>
          <Upcoming items={array} />
        </div>
    );
  }
}

export default Sidebar;
