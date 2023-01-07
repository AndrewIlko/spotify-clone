import music from "../music-files/music.js";

const Songs = () => {
  return (
    <div className="max-w-[998px] w-full mx-auto">
      {music.map((song) => {
        return <div>{song.title}</div>;
      })}
    </div>
  );
};

export default Songs;
