import { certificates } from "../../infrastructure/data/certificates.data";

export function getCertificates(title = null) {
  if (!title) return certificates;
    return certificates.filter(cert => cert.title.toLowerCase().includes(title.toLowerCase()));
  
  
}
