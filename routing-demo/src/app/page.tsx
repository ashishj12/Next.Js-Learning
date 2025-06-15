import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard App
        </h1>

        <div className="text-lg text-grey-600 mb-8">
          Manage your tasks, track analystics, and stay oragnized with our
          powerful dashboard.
        </div>
      </div>
    </div>
  );
};

export default Home;
