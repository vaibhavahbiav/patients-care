import React from "react";
export default function PatientModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-8 max-w-xs w-full relative">
        <button className="absolute top-2 right-2" onClick={onClose}>&times;</button>
        <img src={user.picture.large} alt="avatar" className="rounded-full w-24 h-24 mx-auto mb-3" />
        <h2 className="text-xl font-bold mb-1">{user.name.title} {user.name.first} {user.name.last}</h2>
        <ul className="text-gray-700 text-sm mb-4">
          <li>Gender: {user.gender}</li>
          <li>Age: {user.dob.age}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
          <li>City: {user.location.city}</li>
          <li>Country: {user.location.country}</li>
        </ul>
        <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
