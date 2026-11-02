type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <h2>{title}</h2>
        {description ? <p className="section-lead">{description}</p> : null}
      </div>
    </div>
  );
}
