import TextReveal from "./TextReveal";

export default function SectionHeading({
  en,
  kr,
  align = "left",
  delay = 0,
}: {
  en?: string;
  kr?: string;
  align?: "left" | "center";
  delay?: number;
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignClass}>
      {en && (
        <TextReveal delay={delay}>
          <h2 className="font-serif font-light text-3xl md:text-6xl tracking-serif-wide text-brand-dark leading-heading">
            {en}
          </h2>
        </TextReveal>
      )}
      {kr && (
        <TextReveal delay={delay + 0.15}>
          <p className="font-sans font-medium text-xl md:text-2xl text-brand-dark mt-4 md:mt-6">
            {kr}
          </p>
        </TextReveal>
      )}
    </div>
  );
}
