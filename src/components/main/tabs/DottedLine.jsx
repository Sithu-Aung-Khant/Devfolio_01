export const DottedLine = ({ align }) => {
  return (
    <>
      <div className={`col-start-2 flex justify-center ${align}`}>
        <div className="circle  size-3 rounded-full bg-green "></div>
        <div className="line h-full w-0.5 bg-green  transform -translate-x-[6.5px]"></div>
      </div>
    </>
  );
};

export default DottedLine;
