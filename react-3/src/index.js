import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      Goat
    </h1>
    <ul>
      <img
        src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg"
        alt=""
      />

      <img
        src="https://i.ytimg.com/vi/8PCwX2wRJqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDc9DBN6OTcf4xhlMroyD0IHfo1tA"
        alt=""
      />

      <img
        src="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/1:1/w_1707,h_1707,c_limit/Rosen-Messi-Miami.jpg"
        alt=""
      />

      <img src={img + "?grayscale"} alt="" />
    </ul>
  </div>,
  document.getElementById("root")
);
