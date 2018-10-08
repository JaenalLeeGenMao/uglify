import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Lazyload.css';

const LazyLoad = ({
  image,
  width = 100,
  height = 'auto',
  className = '',
  children,
}) => (
  <div className={[styles.lazyload__wrapper, className].join(' ')}>
    {image && <img alt="" src={image} style={{ width, height }} />}
    {children}
  </div>
);

export default withStyles(styles)(LazyLoad);
