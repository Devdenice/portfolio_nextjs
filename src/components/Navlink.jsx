import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      className="block py-2 pl-3 pr-4 text-neutral font-medium sm:text-xl rounded md:p-0 hover:text-purple-600 hover:bg-transparent"
    >
      {title}
    </Link>
  );
};

export default NavLink;
