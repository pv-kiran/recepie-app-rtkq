import { Player } from "@lottiefiles/react-lottie-player";
function Loading() {
  return (
    <div>
      <Player
        src="https://lottie.host/ae6c5a39-df4e-4318-8620-0ecd9b777a7a/ZCFr9CLhce.json"
        className="player"
        loop
        autoplay
        style={{ height: "40rem" }}
      />
    </div>
  );
}

export default Loading;
