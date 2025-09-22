import React from "react";
export default function About() {
  return (
    <section className="text-center my-16 tracking-wide">
      <h2 className="text-4xl mb-10 font-thin leading-relaxed">About <span className="font-semibold text-emerald-950">Zarurat <span className="text-rose-600 underline underline-offset-2">Care</span></span><span className="animate-pulse">!</span></h2>
      <p className="text-white text-xl max-w-xl mx-auto font-thin">
        Zarurat Care provides a place to see and manage patient records <span className="text-rose-600 font-normal">efficiently</span> and <span className="text-rose-600 font-normal">securely</span>.
      </p>
    </section>
  );
}
