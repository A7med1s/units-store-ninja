import React from 'react';
import { FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const UserAccountPage: React.FC = () => {
  // function getUserData(){
  //   if(){

  //   }else{
  //     return(<>
  //         <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
  //       <div className="space-y-4">
  //         <div>
  //           <label className="block text-sm font-medium mb-1">Name</label>
  //           <input
  //             type="text"
  //             className="w-full p-2 border border-gray-300 rounded-md"
  //             value="John Doe"
  //             readOnly
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium mb-1">Email</label>
  //           <input
  //             type="email"
  //             className="w-full p-2 border border-gray-300 rounded-md"
  //             value="john.doe@example.com"
  //             readOnly
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium mb-1">Phone</label>
  //           <input
  //             type="tel"
  //             className="w-full p-2 border border-gray-300 rounded-md"
  //             value="+1234567890"
  //             readOnly
  //           />
  //         </div>
  //       </div>
  //       <button
  //         className="mt-6 w-full bg-blue-900 text-white p-2 rounded-md hover:bg-yellow-500 transition-all"
         
  //       >
  //         Logout
  //       </button>
  //     </>)
  //   }
  // }
function SignUp(){
  return(<>
   <button
          className="mt-6 w-full bg-blue-900 text-white p-2 rounded-md hover:bg-yellow-500 transition-all"
         
        >
          Sign Up
        </button>
  </>)
}

  return (
    <div className="bg-blue-900 text-white min-h-screen p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-500">User Account</h1>
        <div className="flex space-x-4">
          <FaCog className="text-3xl cursor-pointer hover:text-yellow-500" />
        </div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-blue-900 p-6 rounded-lg shadow-lg"
      >
      {SignUp()}
      </motion.div>
    </div>
  );
};

export default UserAccountPage;