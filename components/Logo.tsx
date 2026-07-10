import Image from "next/image";

const logoAssets = {
  light: {
    logo: "/brand/logo.png",
    icon: "/brand/icon.png",
  },
  dark: {
    logo: "/brand/white-logo.png",
    icon: "/brand/white-icon.png",
  },
} as const;

export function LogoGlyph({
  size = 24,
  className = "",
  tone = "dark",
}: {
  size?: number;
  stroke?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Image
      src={logoAssets[tone].icon}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
      priority={false}
    />
  );
}

export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href="#top"
      aria-label="Structured - home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={logoAssets[tone].logo}
        width={1234}
        height={277}
        alt="Structured"
        className="h-[42px] w-auto object-contain lg:h-[47px]"
        priority
      />
    </a>
  );
}
