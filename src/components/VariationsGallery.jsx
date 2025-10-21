import VariationCard from "./VariationCard";

const VARIATIONS = [
  {
    title: "Sicilian Defense: Najdorf",
    moves: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6",
    blurb:
      "Black fights for the center with pieces and aims for an unbalanced, dynamic game. Expect sharp play, queenside expansion for Black (…b5), and kingside chances for White.",
    fen: "rnbqkb1r/1pp1pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    accent: "from-pink-500 to-amber-400",
  },
  {
    title: "Ruy López: Berlin Defense",
    moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6",
    blurb:
      "Solid, theory-rich, and famously drawish at top level—but full of ideas for every rating. Black targets e4 early; endgames and maneuvering are common themes.",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    accent: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Queen's Gambit Declined",
    moves: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7",
    blurb:
      "Classical control of the center. White fights for space; Black stays flexible and solid. Expect minority attacks, IQP structures, and slow-building plans.",
    fen: "r1bqk1nr/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 5",
    accent: "from-emerald-500 to-lime-400",
  },
  {
    title: "King's Indian Defense",
    moves: "1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O",
    blurb:
      "Hypermodern fire. Black lets White build a big center, then strikes with …e5 or …c5. White often goes queenside; Black looks for kingside storms.",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w - - 0 6",
    accent: "from-fuchsia-500 to-sky-400",
  },
];

function VariationsGallery() {
  return (
    <section id="variations" className="pb-16">
      <div className="grid md:grid-cols-2 gap-6">
        {VARIATIONS.map((v) => (
          <VariationCard key={v.title} {...v} />)
        )}
      </div>
    </section>
  );
}

export default VariationsGallery;
