import {
  certifications,
  type CertificationRecord,
} from "@/data/portfolio";

function CertificationCard({ item }: { item: CertificationRecord }) {
  return (
    <article className="credential-card" data-reveal>
      <h3>{item.name}</h3>
      <p>{item.issuer}</p>
      {item.issuedAt ? <span>{item.issuedAt}</span> : null}
    </article>
  );
}

export default function CredentialsSection() {
  if (!certifications.length) {
    return null;
  }

  return (
    <div className="credentials-grid">
      <div className="credential-group">
        <p className="section-kicker">CERTIFICATIONS</p>
        {certifications.map((item) => (
          <CertificationCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
