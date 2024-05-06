import Link from "next/link";

const navItems = {
  "/": {
    name: "product model concepts (lego dub)",
  },
};

export function Navbar() {
  return (
    <header className="mb-8 tracking-tight">
      <div className=" bg-neutral-50 border-neutral-200 border-b-2 z-50">
        <nav
          className="h-16 flex flex-row items-start lg:max-w-7xl lg:mx-auto py-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 h-full place-items-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
