import { JSX } from "solid-js";

const base = import.meta.env.SERVER_BASE_URL || "";

interface NavLinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function NavLink(props: NavLinkProps) {
  const resolvedHref = () => {
    const h = props.href;
    if (h.startsWith("http") || h.startsWith("mailto:") || h.startsWith("tel:")) return h;
    if (h.startsWith("#")) return h;
    return base + h;
  };

  return (
    <a {...props} href={resolvedHref()}>
      {props.children}
    </a>
  );
}
