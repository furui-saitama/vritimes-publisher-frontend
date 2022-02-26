import { VFC } from 'react';

type InputType = 'text' | 'password' | 'tel';

interface Props {
  value: string | number;
  onChange: (value: string) => void;
  type: InputType;
  label?: string;
  placeholder?: string;
}

const InputField: VFC<Props> = (props: Props) => {
  return (
    // TODO: required flag
    <div className="flex flex-col">
      {props.label ? <span className="text-text-main">{props.label}</span> : null}
      <input
        className="border border-solid text-text-main border-gray rounded-md h-12 w-100% px-4"
        type={props.type}
        value={props.value}
        onChange={(e) => {
          if (props.type === 'tel') {
            /* eslint no-unused-expressions: "off" */
            /^\d*$/g.test(e.target.value) && props.onChange(e.target.value);
          } else {
            props.onChange(e.target.value);
          }
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
