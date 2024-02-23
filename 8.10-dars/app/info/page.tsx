const page = () => {
  return (
    <div>
      <a href="/">
        <button className="back">{`<- back`}</button>
      </a>
      <h2 className="info_play">How to Play</h2>
      <ul className="flex text-white gap-5 mt-5 p-10">
        <li className="flex text-center flex-col p-10 info_item">
          <h3>01</h3>
          <h2>Choose a category</h2>
          <p>
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </li>
        <li className="flex text-center flex-col p-10 info_item">
          <h3>02</h3>
          <h2>Guess letters</h2>
          <p>
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it’s wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </li>
        <li className="flex text-center flex-col p-10 info_item">
          <h3>03</h3>
          <h2>Win or lose</h2>
          <p>
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default page;
