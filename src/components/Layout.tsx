import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-white shadow-sm p-4 text-center">
        <h1 className="text-xl font-bold text-primary">DtoM Application</h1>
      </header>
      <main className="flex-1 w-full max-w-4xl p-6">
        <Outlet />
      </main>
      <footer className="w-full text-center p-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} DtoM. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
