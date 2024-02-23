"use client";

let time = 30;
const page = () => {
  const handleMenu = () => {
    let wrapper = document.getElementById("wrapper");
    let modal = document.getElementById("modal");
    wrapper?.classList.toggle("hidden1");
    modal?.classList.toggle("hidden1");
  };
  let Inter = setInterval(() => {

    time--;

    if (time === 0) {
      alert(`Your time is ${time} and you lost`);
      time = 30;
      clearInterval(Inter);
    }
  }, 1000);
  return (
    <>
      <div id="wrapper" className="wrapper text-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-11">
            <button onClick={handleMenu}>menu</button>
            <h2>title</h2>
          </div>
          <div id="time_game">
            your time
            <span id="time">30s</span>
          </div>
        </div>
        <div className="passkeys">
          <ul className="list_passkeys grid grid-cols-5 gap-5 mt-10">
            <li className="passkeys_shadow"></li>
            <li className="passkeys_shadow"></li>
            <li className="passkeys_shadow"></li>
            <li className="passkeys_shadow"></li>
            <li className="passkeys_shadow"></li>
            <li className="passkeys_shadow"></li>
          </ul>
        </div>
        <div className="btn_passkeys">
          <ul className="list_btn_passkeys grid grid-cols-9 gap-5 text-white font-bold text-lg mt-11">
            <li className="btn_passkeys_item">A</li>
            <li className="btn_passkeys_item">B</li>
            <li className="btn_passkeys_item">C</li>
            <li className="btn_passkeys_item">D</li>
            <li className="btn_passkeys_item">E</li>
            <li className="btn_passkeys_item">F</li>
            <li className="btn_passkeys_item">G</li>
            <li className="btn_passkeys_item">H</li>
            <li className="btn_passkeys_item">E</li>
            <li className="btn_passkeys_item">J</li>
            <li className="btn_passkeys_item">K</li>
            <li className="btn_passkeys_item">L</li>
            <li className="btn_passkeys_item">M</li>
            <li className="btn_passkeys_item">N</li>
            <li className="btn_passkeys_item">O</li>
            <li className="btn_passkeys_item">P</li>
            <li className="btn_passkeys_item">Q</li>
            <li className="btn_passkeys_item">R</li>
            <li className="btn_passkeys_item">S</li>
            <li className="btn_passkeys_item">T</li>
            <li className="btn_passkeys_item">U</li>
            <li className="btn_passkeys_item">V</li>
            <li className="btn_passkeys_item">W</li>
            <li className="btn_passkeys_item">X</li>
            <li className="btn_passkeys_item">Y</li>
            <li className="btn_passkeys_item">Z</li>
          </ul>
        </div>
      </div>

      <div
        className="modal text-white hidden1  flex flex-col gap-5 items-end text-center justify-center"
        id="modal"
      >
        <a href="/" className="back">{`<- back`}</a>
        <a href="/info">Info</a>
        <button onClick={handleMenu}>Resume</button>
      </div>
    </>
  );
};

export default page;
