const Header = () => {
  return (
    <header className="flex justify-between items-center px-32 py-4">
      <h1 className="text-stone-50 text-xl">Song Roster Pro</h1>
      <nav className="text-stone-50 flex w-48">
        <p>
          <button className="mx-4">The Roster</button>
        </p>
        <p>
          <button className="mx-4">About</button>
        </p>
      </nav>
    </header>
  );
};

export default Header;
