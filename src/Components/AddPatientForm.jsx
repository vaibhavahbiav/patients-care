import React, { useState } from "react";
export default function AddPatientForm({ onAdd }) {
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({
        first: "", last: "", age: "", phone: "", city: "", country: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (!values.first || !values.last || !values.age) return;
        onAdd({
            name: { first: values.first, last: values.last, title: "" },
            dob: { age: values.age },
            phone: values.phone,
            location: { city: values.city, country: values.country },
            email: "",
            gender: "",
            picture: { medium: "https://via.placeholder.com/80", large: "https://via.placeholder.com/128" }
        });
        setValues({ first: "", last: "", age: "", phone: "", city: "", country: "" });
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)} className="px-3 py-2 bg-white text-emerald-800 rounded-xl hover:bg-emerald-50 hover:scale-105 active:scale-95 tracking-wide shadow-md shadow-emerald-700 w-[50%] self-center md:w-fit border-l-4 md:border-l-4 border-emerald-800">Add New Patient</button>
            {show && (
                <div className="fixed inset-0 bg-emerald-900/35 bg-opacity-30 flex items-center justify-center z-50 ">
                    <form onSubmit={handleSubmit} className="bg-emerald-50 rounded-xl shadow-lg px-8 py-6 max-w-xs w-full border-l-8 border-emerald-800">
                        <div className="mb-4 flex gap-2">
                            <input className="border rounded-xl px-4 py-2 w-1/2 focus:border-l-4 focus:border-emerald-800 outline-none" placeholder="first name..." value={values.first} onChange={e => setValues({ ...values, first: e.target.value })} />
                            <input className="border rounded-xl px-4 py-2 w-1/2 focus:border-l-4 focus:border-emerald-800 outline-none" placeholder="last name..." value={values.last} onChange={e => setValues({ ...values, last: e.target.value })} />
                        </div>
                        <input className="border rounded-xl px-4 py-2 mb-4 w-full  focus:border-l-4 focus:border-emerald-800 outline-none" type="number" placeholder="age..." value={values.age} onChange={e => setValues({ ...values, age: e.target.value })} />
                        <input className="border rounded-xl px-4 py-2 mb-4 w-full  focus:border-l-4 focus:border-emerald-800 outline-none" placeholder="phone..." value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
                        <input className="border rounded-xl px-4 py-2 mb-4 w-full  focus:border-l-4 focus:border-emerald-800 outline-none" placeholder="city..." value={values.city} onChange={e => setValues({ ...values, city: e.target.value })} />
                        <input className="border rounded-xl px-4 py-2 mb-6 w-full  focus:border-l-4 focus:border-emerald-800 outline-none" placeholder="country..." value={values.country} onChange={e => setValues({ ...values, country: e.target.value })} />
                        <div className="flex justify-between">
                            <button type="submit" className="bg-emerald-600 text-white px-3 py-2 rounded-xl ml-14 hover:bg-emerald-700 border-l-4 border-emerald-800">Add Patient</button>
                            <button type="button" onClick={() => setShow(false)} className="text-emerald-700 hover:underline underline-offset-2">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
