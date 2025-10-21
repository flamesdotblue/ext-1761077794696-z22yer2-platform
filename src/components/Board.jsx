const PIECE_TO_UNICODE = {
  p: "\u265F",
  r: "\u265C",
  n: "\u265E",
  b: "\u265D",
  q: "\u265B",
  k: "\u265A",
  P: "\u2659",
  R: "\u2656",
  N: "\u2658",
  B: "\u2657",
  Q: "\u2655",
  K: "\u2654",
};

function parseFEN(fen) {
  const [placement] = fen.split(" ");
  const rows = placement.split("/");
  const board = [];
  for (let r = 0; r < 8; r++) {
    const row = [];
    for (const ch of rows[r]) {
      if (/[1-8]/.test(ch)) {
        const empties = parseInt(ch, 10);
        for (let i = 0; i < empties; i++) row.push(null);
      } else {
        row.push(ch);
      }
    }
    board.push(row);
  }
  return board; // 8x8 from rank 8 to rank 1
}

function Board({ fen }) {
  const board = parseFEN(fen);
  return (
    <div className="w-full aspect-square">
      <div className="grid grid-cols-8 w-full h-full">
        {board.map((rank, rIdx) =>
          rank.map((sq, fIdx) => {
            const isDark = (rIdx + fIdx) % 2 === 1;
            return (
              <div
                key={`${rIdx}-${fIdx}`}
                className={
                  "flex items-center justify-center text-xl sm:text-2xl md:text-3xl select-none " +
                  (isDark ? "bg-neutral-800" : "bg-neutral-700/50")
                }
              >
                <span className={sq && sq === sq.toUpperCase() ? "text-neutral-100" : "text-neutral-200"}>
                  {sq ? PIECE_TO_UNICODE[sq] : ""}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Board;
