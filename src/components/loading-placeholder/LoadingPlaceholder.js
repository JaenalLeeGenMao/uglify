import React from 'react';
import { Placeholder } from './style';

const LoadingPlaceholder = ({ className, isLight, style }) => {
  return (
    <Placeholder style={style} className={className} isLight={isLight}/>
  )
}

export default LoadingPlaceholder;
