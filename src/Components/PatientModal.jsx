export default function PatientModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-emerald-900/35 bg-opacity-30 flex items-center justify-center z-50 tracking-wide">
      <div className="bg-emerald-50 rounded-xl shadow-md shadow-emerald-700 px-10 py-6 max-w-xs w-full relative border-l-4 md:border-l-8 border-emerald-800">
        <button className="absolute top-1 right-3 text-3xl text-emerald-800 hover:scale-125 active:scale-90 transition-all" onClick={onClose}>&times;</button>
        <img src={user.picture.large} alt="avatar" className="rounded-xl w-24 h-24 mx-auto mb-3 border-l-4 border-emerald-800" />
        <h2 className="text-xl font-bold mb-1">{user.name.title} {user.name.first} {user.name.last}</h2>
        <ul className="text-emerald-800 text-sm mb-4 space-y-1">
          <li>Gender: <span className="font-semibold text-emerald-900">{user.gender}</span></li>
          <li>Age: <span className="font-semibold text-emerald-900">{user.dob.age}</span></li>
          <li>Email: <span className="font-semibold text-emerald-900">{user.email}</span></li>
          <li>Phone: <span className="font-semibold text-emerald-900">{user.phone}</span></li>
          <li>City: <span className="font-semibold text-emerald-900">{user.location.city}</span></li>
          <li>Country: <span className="font-semibold text-emerald-900">{user.location.country}</span></li>
        </ul>
      </div>
    </div>
  );
}
