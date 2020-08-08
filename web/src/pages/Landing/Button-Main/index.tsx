import React from 'react';
import { Link } from 'react-router-dom';
import buttonProps from './interface';
import './style.scss';

const ButtonMain: React.FC<buttonProps> = ({ img, label, styleType }) => {
  return (
    <Link to='/' className={styleType ? styleType : 'primary'}>
      <img src={img} alt={label} />
      {label}
    </Link>
  );
};

export default ButtonMain;
