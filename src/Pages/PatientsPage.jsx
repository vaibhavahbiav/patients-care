import React, { useState, useEffect } from "react";
import AddPatientForm from "../Components/AddPatientForm";
import PatientCard from "../Components/PatientCard";
import PatientModal from "../Components/PatientModal";

const API_URL = "https://randomuser.me/api/?results=12";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data.results);
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("Failed to load patients.");
        setLoading(false);
      });
  }, []);

  const filtered = patients.filter(
    u =>
      `${u.name.first} ${u.name.last}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddPatient = (patient) => {
    setPatients(prev => [patient, ...prev]);
  }

  return (
    <section className="">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center justify-between mb-6 tracking-wide">
        <h2 className="text-2xl text-center md:text-4xl font-semibold mb-2 md:mb-0 text-white">Patients</h2>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border rounded-xl px-3 py-2 w-full md:w-72 outline-none shadow-md shadow-emerald-700"
            placeholder="Search by patient name..."
          />
        </div>
        <AddPatientForm onAdd={handleAddPatient} />
      </div>
      {loading && <div className="text-center  md:text-3xl text-white my-12 animate-pulse">Loading...</div>}
      {error && <div className="text-center text-red-600 my-12">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {filtered.map((user, idx) => (
          <PatientCard
            key={idx}
            user={user}
            onView={() => {
              setSelected(user);
              setShowModal(true);
            }}
          />
        ))}
      </div>
      {showModal && selected && (
        <PatientModal user={selected} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}
