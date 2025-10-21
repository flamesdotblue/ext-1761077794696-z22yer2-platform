function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          Built for players who like their openings crisp and their UI cleaner.
        </p>
        <p className="text-neutral-500">© {new Date().getFullYear()} Chess Variations</p>
      </div>
    </footer>
  );
}

export default Footer;
