import Board from "./Board";

function VariationCard({ title, moves, blurb, fen, accent }) {
  return (
    <article className="group rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden">
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-neutral-400 mb-4">{moves}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950/60">
            <Board fen={fen} />
          </div>
          <p className="text-sm leading-relaxed text-neutral-300">
            {blurb}
          </p>
        </div>
      </div>
    </article>
  );
}

export default VariationCard;
