import { educationRecords } from "@/data/portfolio";

export default function EducationTimeline() {
  return (
    <div className="education-list" aria-label="Education">
      <p className="section-kicker education-heading" data-reveal>
        EDUCATION
      </p>
      <ol className="education-timeline">
        {educationRecords.map((record, index) => (
          <li
            className="education-item"
            data-reveal
            key={record.id}
            style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}
          >
            <span className="education-marker" aria-hidden="true" />
            <article className="education-card">
              <p className="education-qualification">{record.qualification}</p>
              <p className="education-institution">{record.institution}</p>
              <span className="education-detail">
                {record.detailLabel} / {record.detail}
              </span>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
