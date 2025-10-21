function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 via-pink-500 to-indigo-500 shadow-md" />
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">The Cool Guide to Chess Variations</h1>
            <p className="text-xs sm:text-sm text-neutral-400">Legible, stylish, and practical opening ideas</p>
          </div>
        </div>
        <a
          href="#variations"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800 transition"
        >
          Explore
        </a>
      </div>
    </header>
  );
}

export default Header;
