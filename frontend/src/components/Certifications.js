import { useEffect, useState } from "react";
import { getCertifications } from "../utils/api";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./Certifications.css";

export const Certifications = () => {

  const [certs, setCerts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getCertifications().then(setCerts);
  }, []);

  if (certs.length === 0) return null;

  const displayedCerts = showAll ? certs : certs.slice(0, 6);

  return (
    <section className="cert-section" id="certifications">
      <div className="container">

        <h2>Certifications</h2>

        <div className="cert-grid">
          {displayedCerts.map((cert) => (
            <div className="cert-card" key={cert._id}>
              <img
                src={cert.certificateImage}
                alt={cert.title}
              />

              <h4>{cert.title}</h4>

              <p>{cert.issuer}</p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>

        {certs.length > 6 && (
          <button
            className="view-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show Less <BsChevronUp />
              </>
            ) : (
              <>
                View All Certifications <BsChevronDown />
              </>
            )}
          </button>
        )}

      </div>
    </section>
  );
};


{/*
  import { useEffect, useState } from "react";
import { getCertifications } from "../utils/api";
import "./Certifications.css";

export const Certifications = () => {

  const [certs, setCerts] = useState([]);

  useEffect(() => {
    getCertifications().then(setCerts);
  }, []);

  if (certs.length === 0) return null;

  return (
    <section className="cert-section" id="certifications">
      <div className="container">

        <h2>Certifications</h2>

        <div className="cert-grid">

          {certs.map((cert) => (

            <div className="cert-card" key={cert._id}>

              <img
                src={cert.certificateImage}
                alt={cert.title}
              />

              <h4>{cert.title}</h4>

              <p>{cert.issuer}</p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential
                </a>
              )}

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};
*/}