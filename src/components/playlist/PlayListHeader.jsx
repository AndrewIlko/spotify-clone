const PlayListHeader = () => {
  return (
    <>
      <div className="flex gap-[24px]">
        <img
          className="w-[192px] xl:w-[232px]"
          src={
            "https://i.scdn.co/image/ab67616d00001e020546bc812f5a6609f062b828"
          }
        />
        <div className="flex flex-1 items-end">
          <div className="flex flex-col">
            <div className="text-[#fff] text-[14px] font-[700]">Album</div>
            <div className="mt-[8px] text-[32px] text-[#fff] font-[700]">
              Blade Runner 2049
            </div>
            <div className="mt-[12px]">
              <ul className="text-[#fff] flex gap-[10px] font-[700] text-[14px]">
                <li>Hans Zimmer</li>
                <li>Benjamin Wallfisch</li>
                <li>2017</li>
                <li>24 songs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListHeader;
