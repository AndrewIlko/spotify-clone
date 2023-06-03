import { convertTime } from "./helpers";

const Timer = (props) => {
  const { time } = props;
  return (
    <>
      <div className="text-[11px] text-[#a7a7a7]">{convertTime(time)}</div>
    </>
  );
};

export default Timer;
