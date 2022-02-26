import { VFC } from 'react';

interface Props {
  value: string | number;
  onChange: (value: string) => void;
  list: Array<{
    id: string;
    value: string;
  }>;
  label?: string;
  placeholder?: string;
}

const Select: VFC<Props> = (props: Props) => {
  return (
    // TODO: required flag
    <div className="flex flex-col">
      {props.label ? <span className="text-text-main">{props.label}</span> : null}
      <select
        className="select appearance-none cursor-pointer border border-solid text-text-main border-gray rounded-md h-12 w-100% px-4"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        placeholder={props.placeholder}
        style={{
          backgroundImage: `url(/down_arrow.png)`,
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '12px 12px',
        }}
      >
        {/* TODO: non requiredを許容する仕組みに変更 */}
        {props.list.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
