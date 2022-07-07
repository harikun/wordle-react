import React from "react";

export default function Modal({
  isCorrect,
  turn,
  solution,
  chapter,
  episode,
  year,
  note,
}) {
  function playAgain() {
    window.location.reload();
  }
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Kamu menang!</h1>
          <p className="solution">
            Jawaban <br /> {solution} <br /> muncul pada {year} di manga chapter{" "}
            {chapter} dan anime episode {episode} <br /> {note}
          </p>
          <p>Kamu menemukan jawaban pada {turn} kali tebakan :)</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Jangan Berkecil Hati</h1>
          <p className="solution">
            Jawaban <br /> {solution} <br /> muncul pada {year} di manga chapter{" "}
            {chapter} dan anime episode {episode} <br /> {note}
          </p>
          <p>Semoga lain kali lebih beruntung:)</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
}
