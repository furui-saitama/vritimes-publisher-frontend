import { useEffect, useState, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';
import Select from '../components/common/Select';

interface Props {
  lang: string;
}

const RegistrationPage: VFC<Props> = (props: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [industryCategory, setIndustryCategory] = useState('');
  const [t, i18n] = useTranslation();

  const categories = [
    {
      id: 'sample1',
      value: 'IT',
    },
    {
      id: 'sample2',
      value: 'Materials',
    },
    {
      id: 'sample3',
      value: 'Transportation',
    },
  ];

  useEffect(() => {
    if (props.lang) {
      i18n.changeLanguage(props.lang);
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n, props.lang]);

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const onChangeIndustryCategory = (value: string) => {
    setIndustryCategory(value);
  };

  return (
    <main className="flex-grow flex flex-col justify-start items-center py-8">
      <div className="grid grid-cols-1 gap-8 max-w-sp w-192">
        <div className="text-text-main text-2xl font-bold flex justify-center">sample</div>
        <div className="w-full p-8 bg-background-annotation text-text-annotation rounded-2xl">sample</div>
        <div className="border-solid border border-gray w-full p-8 bg-white rounded-2xl">
          <div className="grid grid-cols-1 gap-6">
            <div className="text-text-main text-xl font-bold">sample</div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">name</div>
              <div className="col-span-2">
                <InputField type="text" value={name} onChange={onChangeName} placeholder="sample" />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">phone number</div>
              <div className="col-span-2">
                <InputField type="tel" value={phoneNumber} onChange={onChangePhoneNumber} placeholder="sample" />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">industrial category</div>
              <div className="col-span-2">
                <Select
                  value={industryCategory}
                  onChange={onChangeIndustryCategory}
                  list={categories}
                  placeholder="sample"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">business category</div>
              <div className="col-span-2">
                <Select
                  value={industryCategory}
                  onChange={onChangeIndustryCategory}
                  list={categories}
                  placeholder="sample"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main" />
              <div className="col-span-2">
                <Select
                  value={industryCategory}
                  onChange={onChangeIndustryCategory}
                  list={categories}
                  placeholder="sample"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main" />
              <div className="col-span-2">
                <Select
                  value={industryCategory}
                  onChange={onChangeIndustryCategory}
                  list={categories}
                  placeholder="sample"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">email</div>
              <div className="col-span-2">
                <InputField type="tel" value={phoneNumber} onChange={onChangePhoneNumber} placeholder="sample" />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">kata sandi</div>
              <div className="col-span-2">
                <InputField type="tel" value={phoneNumber} onChange={onChangePhoneNumber} placeholder="sample" />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex items-center text-text-main">konfirmasi kata sandi</div>
              <div className="col-span-2">
                <InputField type="tel" value={phoneNumber} onChange={onChangePhoneNumber} placeholder="sample" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button text="submit" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
