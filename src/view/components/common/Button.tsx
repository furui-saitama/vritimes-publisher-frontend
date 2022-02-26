import { VFC } from 'react';

type variant = 'primary' | 'outlined';

interface Props {
  text: string;
  variant?: variant;
  disabled?: boolean;
  isFullWidth?: boolean;
  onClick?: () => void;
}

/**
 * Common button component
 *
 * @param text button text
 * @param variant kind of button
 * @param disabled disabled flag
 * @param isFullWidth if you need 100% width, use this flag
 * @param onClick on click function
 * @returns
 */
const Button: VFC<Props> = (props: Props) => {
  let className: string;

  if (props.variant === 'primary') {
    className =
      'h-12 flex justify-center items-center content-center px-4 py-2 rounded-md bg-primary hover:bg-button-hover disabled:bg-opacity-50 disabled:hover:bg-primary disabled:hover:bg-opacity-50 text-white';
  } else if (props.variant === 'outlined') {
    className =
      'h-12 flex justify-center items-center content-center px-4 py-2 rounded-md border-solid border-2 border-primary bg-white hover:border-button-hover hover:text-button-hover disabled:border-opacity-50 disabled:hover:border-primary disabled:text-primary disabled:hover:border-opacity-50 disabled:text-opacity-50 disabled:hover:text-opacity-50 text-primary';
  } else {
    className =
      'h-12 flex justify-center items-center content-center px-4 py-2 rounded-md bg-primary hover:bg-button-hover disabled:bg-opacity-50 disabled:hover:bg-primary disabled:hover:bg-opacity-50 text-white';
  }

  return (
    <button
      className={className}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      style={{ width: props.isFullWidth ? '100%' : undefined }}
    >
      {props.text}
    </button>
  );
};

export default Button;
