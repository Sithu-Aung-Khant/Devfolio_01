export const DottedLine = ({ align }) => {
  return (
    <>
      <div className={`col-start-2 flex justify-center items-${align}`}>
        <div className="circle  size-3.5 rounded-full bg-green"></div>
        <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
      </div>
    </>
  );
};

export default DottedLine;
