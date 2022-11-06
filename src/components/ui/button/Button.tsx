import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  PropsWithRef,
} from 'react';

import { ButtonStyles } from 'components/ui/button/style';

type DefaultButtonPropsType = PropsWithRef<any> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  type?: 'violet';
};

export const Button: FC<ButtonPropsType> = forwardRef(({ ...restProps }, ref) => (
  <ButtonStyles ref={ref} {...restProps} />
));
