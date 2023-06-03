import PlayListHeader from "../../components/playlist/PlayListHeader";

const MainSectionWrapper = () => {
  return (
    <>
      <div className="bg-[rgb(18,18,18,0.85)] rounded-[6px]">
        <div className="rounded-t-[6px] h-[30vh] min-h-[340px] bg-[rgb(16,160,144)] px-[24px] pb-[24px] flex flex-col justify-end">
          <PlayListHeader />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MainSectionWrapper;
