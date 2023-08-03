import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/nft-intro-page");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[1024px] overflow-hidden text-left text-29xl text-gray-500 font-button-16">
      <img
        className="absolute top-[0px] left-[0px] w-[2052.68px] h-[6593px]"
        alt=""
        src="/gradient-color3.svg"
      />
      <div className="absolute top-[calc(50%_-_471px)] left-[calc(50%_-_680px)] w-[1374px] h-[925px]">
        <div className="absolute top-[calc(50%_-_462.5px)] left-[calc(50%_-_687px)] rounded-31xl bg-lavender w-[1374px] h-[925px]" />
        <div className="absolute top-[46px] left-[54.52px] w-[377.57px] h-14">
          <div className="absolute top-[0px] left-[0px] w-[377.57px] h-14">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[377.57px] h-14">
              Welcome to Bk
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[94px] left-[1368px] w-[42px] h-[42px] object-cover cursor-pointer"
        alt=""
        src="/mask-group8@2x.png"
        onClick={onMaskGroupIconClick}
      />
      <img
        className="absolute top-[200px] left-[calc(50%_-_215px)] rounded-31xl w-[430px] h-[672.99px] object-cover"
        alt=""
        src="/rectangle-31@2x.png"
      />
    </div>
  );
};

export default Payment;
