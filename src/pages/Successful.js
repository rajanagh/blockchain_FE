import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/nft-info");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/nft-intro-page");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[1024px] overflow-hidden text-left text-11xl text-black-black-100 font-button-16">
      <img
        className="absolute top-[0px] left-[0px] w-[2227.68px] h-[6593px]"
        alt=""
        src="/gradient-color5.svg"
      />
      <div className="absolute top-[calc(50%_-_471px)] left-[calc(50%_-_680px)] w-[1374px] h-[925px] text-29xl text-gray-600">
        <div className="absolute top-[calc(50%_-_462.5px)] left-[calc(50%_-_687px)] rounded-31xl bg-midnightblue-100 w-[1374px] h-[925px]" />
        <div className="absolute top-[62px] left-[calc(50%_-_227px)] w-[455px] h-14">
          <div className="absolute top-[0px] left-[calc(50%_-_227.5px)] w-[455px] h-14">
            <div className="absolute top-[0px] left-[calc(50%_-_227.5px)] font-semibold inline-block w-[455px] h-14">
              Complete checkout
            </div>
          </div>
        </div>
        <img
          className="absolute top-[68px] left-[1220px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/mask-group13@2x.png"
        />
        <div
          className="absolute top-[815px] left-[calc(50%_-_195px)] rounded-mini bg-black-black-100 shadow-[0px_2px_13px_4px_rgba(0,_0,_0,_0.25)] w-[390px] h-[76px] cursor-pointer"
          onClick={onRectangle1Click}
        />
        <div className="absolute top-[831px] left-[538px] text-13xl leading-[160%] font-extrabold text-black text-center inline-block w-[297px] h-[37px]">
          Confirm Checkout
        </div>
        <img
          className="absolute top-[440px] left-[1155px] w-[18px] h-[18px] object-cover"
          alt=""
          src="/dollar@2x.png"
        />
        <img
          className="absolute top-[614px] left-[1149px] w-[18px] h-[18px] object-cover"
          alt=""
          src="/dollar@2x.png"
        />
      </div>
      <img
        className="absolute top-[212px] left-[calc(50%_-_680px)] w-[1374px] h-[579.5px]"
        alt=""
        src="/line-27.svg"
      />
      <div className="absolute top-[373.5px] left-[calc(50%_-_549.5px)] box-border w-[1121px] h-[3px] border-t-[3px] border-solid border-black-black-100" />
      <div className="absolute top-[631.5px] left-[calc(50%_-_549.5px)] box-border w-[1121px] h-[3px] border-t-[3px] border-solid border-black-black-100" />
      <div className="absolute top-[315px] left-[208px] leading-[160%] font-semibold">
        Item
      </div>
      <div className="absolute top-[482px] left-[435px] text-6xl leading-[160%] font-semibold">
        BFF Friendship Bracelet
      </div>
      <div className="absolute top-[442px] left-[435px] text-4xl leading-[160%] font-medium text-deepskyblue">
        BFF Friendship Bracelet
      </div>
      <div className="absolute top-[471px] left-[1261px] text-4xl leading-[160%] font-medium">
        0.684
      </div>
      <div className="absolute top-[643px] left-[1253px] text-7xl leading-[160%] font-medium text-deepskyblue">
        0.684
      </div>
      <div className="absolute top-[504px] left-[1243px] text-lg leading-[160%] text-right">
        $1,824.78
      </div>
      <div className="absolute top-[522px] left-[435px] text-lg leading-[160%]">
        Creator fees; 7.5%
      </div>
      <div className="absolute top-[685px] left-[1234px] text-xl leading-[160%] text-right">
        $1,824.78
      </div>
      <div className="absolute top-[657px] left-[208px] leading-[160%] font-semibold">
        Total
      </div>
      <div className="absolute top-[315px] left-[1203px] leading-[160%] font-semibold text-right">
        Subtotal
      </div>
      <img
        className="absolute h-[22.56%] w-[15.28%] top-[37.99%] right-[70.17%] bottom-[39.45%] left-[14.55%] rounded-xl max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src="/rectangle-919@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className="absolute top-[-37px] left-[-47px] bg-gray-300 w-[1616px] h-[1107px]" />
      <div className="absolute top-[calc(50%_-_297px)] left-[calc(50%_-_385px)] rounded-[40px] bg-black-black-100 w-[770px] h-[595px]" />
      <img
        className="absolute top-[250px] left-[1074px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/mask-group14@2x.png"
      />
      <div className="absolute top-[303px] left-[554px] text-13xl tracking-[0.03em] leading-[160%] font-extrabold text-black text-center">
        Transaction succeeded!
      </div>
      <div className="absolute top-[369px] left-[465px] text-[27px] leading-[160%] font-medium text-black text-center">
        <p className="m-0">The transaction is successful Go to Purchase</p>
        <p className="m-0">History to check transection detail.</p>
      </div>
      <div className="absolute top-[496px] left-[683px] rounded-[50%] bg-forestgreen w-[138px] h-[138px]" />
      <img
        className="absolute top-[521.75px] left-[708.75px] w-[86.51px] h-[86.51px] object-cover"
        alt=""
        src="/mask-group15@2x.png"
      />
      <div
        className="absolute top-[677.76px] left-[calc(50%_-_202px)] w-[404px] h-[75.24px] cursor-pointer"
        onClick={onGroupContainer3Click}
      >
        <div className="absolute top-[0px] left-[calc(50%_-_202px)] rounded-31xl bg-dodgerblue w-[404px] h-[75.24px]" />
      </div>
      <div className="absolute top-[694px] left-[638px] text-7xl leading-[160%] font-semibold text-center">
        View on Metamask
      </div>
    </div>
  );
};

export default Successful;
