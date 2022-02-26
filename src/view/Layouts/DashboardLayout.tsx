import { VFC } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout: VFC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex flex-row min-h-screen">
      <div className="bg-background w-80">
        <div className="flex justify-center items-center h-32">
          <img className="h-48" src="/VRITTA_logo.png" alt="vritimes_logo" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex-col p-8 grid">
            <button
              onClick={() => {
                navigate('/dashboard');
              }}
              type="button"
              className="flex p-4 font-bold"
            >
              <FiHome size="24px" className="mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => {
                navigate('/article/new');
              }}
              type="button"
              className="flex p-4 font-bold"
            >
              <AiOutlineEdit size="24px" className="mr-2" />
              Buat Konten
            </button>
          </div>
          <div className="flex-col p-8">
            <button
              onClick={() => {
                navigate('/signin');
              }}
              className="flex p-4 font-bold"
              type="button"
            >
              <MdOutlineLogout size="24px" className="mr-2" />
              Keluar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full shadow-xl rounded-l-large">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
