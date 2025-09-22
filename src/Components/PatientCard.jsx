import React from "react";
export default function PatientCard({ user, onView }) {
  return (
    <div className="bg-emerald-50 rounded-xl shadow-lg shadow-emerald-700 py-8 flex flex-col items-center justify-center text-center space-y-5 tracking-wide font-thin border-l-8 border-emerald-800">
      <div className="flex items-center justify-center space-x-4">
        <img src={user.picture.medium} alt="avatar" className="rounded-xl size-20 mb-3 " />
        <div className="flex flex-col space-y-2 items-start justify-center">
          <h3 className="text-lg font-semibold mb-1 text-emerald-900">{user.name.first} {user.name.last}</h3>
          <div className="text-gray-500 mb-1">Age: {user.dob.age}</div>
          <div className="text-gray-500 mb-2">Contact: {user.phone}</div>
        </div>
      </div>
      <button
        className="mt-auto px-4 py-2 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900"
        onClick={onView}>
        View Details
      </button>
    </div>
  );
}
