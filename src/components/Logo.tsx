import Image from "next/image";

// Logo officiel Ellington Properties — bouclier navy + couronne + "E"
// PNG fourni par le client via Apimo, déposé dans public/brand/logo.png.
//
// Le logo source étant navy sur fond transparent, on utilise un filtre CSS
// `invert` quand il faut l'afficher en blanc sur fond sombre (hero du home).

export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ aspectRatio: "764 / 1024" }}
      aria-hidden
    >
      <Image
        src="/brand/logo.png"
        alt="Ellington Properties"
        fill
        sizes="40px"
        priority
        className="object-contain"
        style={
          invert
            ? { filter: "brightness(0) invert(1)" }
            : undefined
        }
      />
    </span>
  );
}
