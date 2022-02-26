import { useEffect, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router';

interface Props {
  lang: string;
}

const DashboardPage: VFC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (props.lang) {
      i18n.changeLanguage(props.lang);
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n, props.lang]);

  return (
    <main className="flex-grow py-8 px-12 h-full">
      <div className="font-bold text-2xl flex py-12">Dashboard</div>
      <table className="w-full">
        <thead className="text-md bg-background text-text-annotation h-12 rounded-t-xl">
          <tr>
            <th className="px-4 w-5/12 rounded-tl-xl" align="left">
              Judul Berita
            </th>
            <th className="px-4 w-4/12" align="left">
              Post Date
            </th>
            <th className="px-4 w-3/12  rounded-tr-xl" align="center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-text-main">
          <tr className="h-12">
            <td className="px-4">article title1</td>
            <td className="px-4">Saturday, 12 Jun 2021, 16:15</td>
            <td className="px-4" align="center">
              <button type="button">
                <AiOutlineEye color="#92919F" size="24px" />
              </button>
              <button
                onClick={() => {
                  navigate('/article/sample_id');
                }}
                type="button"
              >
                <AiOutlineEdit color="#92919F" size="24px" />
              </button>
            </td>
          </tr>
          <tr className="h-12">
            <td className="px-4">article title1</td>
            <td className="px-4">Saturday, 12 Jun 2021, 16:15</td>
            <td className="px-4" align="center">
              <button type="button">
                <AiOutlineEye color="#92919F" size="24px" />
              </button>
              <button
                onClick={() => {
                  navigate('/article/sample_id');
                }}
                type="button"
              >
                <AiOutlineEdit color="#92919F" size="24px" />
              </button>
            </td>
          </tr>
          <tr className="h-12">
            <td className="px-4">article title1</td>
            <td className="px-4">Saturday, 12 Jun 2021, 16:15</td>
            <td className="px-4" align="center">
              <button type="button">
                <AiOutlineEye color="#92919F" size="24px" />
              </button>
              <button
                onClick={() => {
                  navigate('/article/sample_id');
                }}
                type="button"
              >
                <AiOutlineEdit color="#92919F" size="24px" />
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot className="h-8 bg-background rounded-tl-xl">
          <tr>
            <td colSpan={3} className=" rounded-b-xl" />
          </tr>
        </tfoot>
      </table>
    </main>
  );
};

export default DashboardPage;
