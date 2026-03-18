import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-zinc-800 py-3 ">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-zinc-50 text-2xl font-bold">
          Mini Catalogo
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-zinc-50">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="text-zinc-50">
                Favoritos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
