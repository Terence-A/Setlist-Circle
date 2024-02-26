const Header = () => {
  return (
    <header className="flex justify-between items-center px-48 py-4 bg-stone-900 sticky top-0 shadow-md shadow-stone-600/60">
      <h1 className="text-stone-50 text-2xl">Setlist Circle</h1>
      <nav className="text-stone-100 flex w-48">
        <p>
          <button className="mx-4 hover:text-stone-300">Setlist</button>
        </p>
        <p>
          <button className="mx-4 hover:text-stone-300">Tools</button>
        </p>
        <p>
          <button className="mx-4 hover:text-stone-300">About</button>
        </p>
      </nav>
    </header>
  );
};

export default Header;
