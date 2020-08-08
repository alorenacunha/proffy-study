import { LinkHTMLAttributes } from 'react';

interface buttonProps extends LinkHTMLAttributes<HTMLButtonElement> {
  label: string;
  img: string;
  styleType?: string;
}

export default buttonProps;
