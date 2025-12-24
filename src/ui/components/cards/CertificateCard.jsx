export default function CertificateCard({ certificate }) {
  return (
    <article className="bg-[#111111] p-4 rounded-lg border border-transparent hover:border-indigo-500 transition">
      <h4 className="text-white font-semibold">{certificate.title}</h4>
      <p className="text-sm text-gray-400">{certificate.issuer} • {certificate.year}</p>
      {certificate.url && <a href={certificate.url} target="_blank" rel="noreferrer" className="text-indigo-400 text-sm mt-2 block">Ver certificado</a>}
    </article>
  );
}
