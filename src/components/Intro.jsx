function Intro() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-neutral-300">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">What is a variation?</h2>
        <p className="mb-4 leading-relaxed">
          In chess, a variation is a named branch of opening moves that leads to a particular structure, plan, or tactical motif. Think of it like a musical remix: the same theme with a different vibe. Learning variations teaches you typical plans and helps you navigate the opening with confidence.
        </p>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 sm:p-5 text-sm">
          <h3 className="font-medium text-neutral-200 mb-2">How to read moves</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="text-neutral-200">N</span> = Knight, <span className="text-neutral-200">B</span> = Bishop, <span className="text-neutral-200">R</span> = Rook, <span className="text-neutral-200">Q</span> = Queen, <span className="text-neutral-200">K</span> = King; pawns have no letter.</li>
            <li>Example: <span className="text-neutral-200">e4</span> means a pawn moves to e4; <span className="text-neutral-200">Nf3</span> means a knight goes to f3.</li>
            <li>“...” indicates Black’s move: <span className="text-neutral-200">1... c5</span>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;
