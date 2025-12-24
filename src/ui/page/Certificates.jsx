import CertificateCard from "../components/cards/CertificateCard";
import { getCertificates } from '../../app/certificates/getCertificates';

export default function Certificates() {
  const certificates = getCertificates();

  return (
    <section id="certificates" className="w-full py-20 px-6">
      {/* Header limitado */}
      <div className="container px-6 mb-10">
        <h2 className="text-3xl font-bold">Certificados</h2>
        <p className="text-gray-400 mt-2">
          Formación y validaciones técnicas
        </p>
      </div>

      {/* Grid FULL WIDTH */}
      <div className="px-6 max-w-screen-2xl mx-auto">
        {certificates.length === 0 ? (
          <p className="text-gray-400">
            Aún no hay certificados añadidos.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((c) => (
              <CertificateCard key={c.id} certificate={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
