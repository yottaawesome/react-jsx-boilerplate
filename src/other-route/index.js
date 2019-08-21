import React from 'react';
import styles from './styles.module.scss';

export default class OtherRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.root}>Hello from OtherRoute!</div>;
  }
}