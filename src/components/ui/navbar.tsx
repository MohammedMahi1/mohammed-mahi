type NavbarItem = {
  label: string;
  id: number;
  path: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="navbar">
      {items.map((e) => (
        <>
          <a key={e.id} href={e.path} className="link">
            {e.label}
          </a>
          {e.id !== items.length && <span className="divider">&</span>}
        </>
      ))}
    </div>
  );
};

export default Navbar;
