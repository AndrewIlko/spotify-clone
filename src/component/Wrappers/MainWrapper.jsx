const MainWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] w-full">{children}</div>
    </>
  );
};

export default MainWrapper;
