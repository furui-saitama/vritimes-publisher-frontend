import { useEffect, useState, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

interface Props {
  lang: string;
}

/**
 * Login page component.
 */
const SignInPage: VFC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (props.lang) {
      i18n.changeLanguage(props.lang);
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n, props.lang]);

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onClick = () => {
    navigate('/dashboard');
  };

  return (
    <main className="flex-grow flex justify-center items-center">
      <div className="shadow-md max-w-sp w-96 p-8 bg-white rounded-2xl">
        <div className="flex justify-center w-full text-2xl font-bold">{t('sign_in.title')}</div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <InputField
              label={t('sign_in.email.label')}
              type="text"
              value={email}
              onChange={onChangeEmail}
              placeholder={t('sign_in.email.placeholder')}
            />
          </div>
          <div>
            <InputField
              label={t('sign_in.password.label')}
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder={t('sign_in.password.placeholder')}
            />
          </div>
          {/* TODO: Add the features to save information and to reveal password. */}
          <div className="mt-4">
            <Button onClick={onClick} text={t('sign_in.button')} isFullWidth />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
