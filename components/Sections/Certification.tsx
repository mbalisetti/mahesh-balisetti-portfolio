import React from "react";
import { certifications } from "../../constants";

const Certification: React.FC = () => {
  return (
    <section id="certifications" className="padding-y">
      <h3 className="font-orbitron text-4xl font-bold text-white">Certifications</h3>
      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10">
            <div className="text-[40px]">{cert.icon}</div>
            <h3 className="text-white font-bold text-[24px] mt-2">{cert.title}</h3>
            <p className="mt-2 text-secondary text-[16px]">{cert.issuer}</p>
            <p className="mt-1 text-blue-400 text-[14px] font-medium">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;