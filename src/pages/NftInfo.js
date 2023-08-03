import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NftInfo = () => {
  const navigate = useNavigate();

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/nft-eplore");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  const onMaskGroupIcon2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[1720px] overflow-hidden text-left text-5xl text-black-black-100 font-button-16">
      <img
        className="absolute top-[0px] left-[0px] w-[2082.68px] h-[3834.68px]"
        alt=""
        src="/group-87.svg"
      />
      <div className="absolute bottom-[-126626px] left-[62px] w-[1387px] h-[126869px] text-13xl">
        <div className="absolute bottom-[126813px] left-[0px] text-27xl">
          Brand Kiln NFT
        </div>
        <div className="absolute bottom-[126728px] left-[0px]">Facebook</div>
        <div className="absolute bottom-[126728px] left-[232px]">Twittter</div>
        <div className="absolute bottom-[126728px] left-[433px]">Instagram</div>
        <div className="absolute bottom-[126728px] left-[667px]">Contact</div>
        <div className="absolute bottom-[126728px] left-[1094px] w-[266px] h-[39px]">
          <div className="absolute bottom-[0px] left-[34px]">
            Back to the top
          </div>
          <img
            className="absolute bottom-[7px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowupcircle-1.svg"
          />
        </div>
        <div className="absolute bottom-[126662px] left-[0px] text-lg">
          Privacy Policy
        </div>
        <div className="absolute bottom-[126662px] left-[156px] text-lg">
          Terms and Conditions
        </div>
        <div className="absolute bottom-[126662px] left-[1110px] text-lg">
          Copyright © 2022 Aryan Dosaya
        </div>
        <div className="absolute bottom-[126722.5px] left-[190.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
        <div className="absolute bottom-[126722.5px] left-[392.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
        <div className="absolute bottom-[126722.5px] left-[623.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
        <div className="absolute bottom-[88.5px] left-[-1.5px] box-border w-[1363px] h-[3px] border-t-[3px] border-solid border-black-black-100" />
        <div className="absolute bottom-[-0.5px] left-[-0.5px] box-border w-[1361px] h-px border-t-[1px] border-solid border-black-black-100" />
      </div>
      <div className="absolute top-[calc(50%_-_701px)] left-[calc(50%_-_687px)] w-[1374px] h-[1256px] text-xl">
        <div className="absolute top-[calc(50%_-_628px)] left-[calc(50%_-_687px)] w-[1374px] h-[1256px] text-29xl text-gray-600">
          <div className="absolute top-[calc(50%_-_628px)] left-[calc(50%_-_687px)] rounded-31xl bg-midnightblue-100 w-[1374px] h-[1256px]" />
          <div className="absolute top-[67.28px] left-[69.68px] w-[368.5px] h-[57.37px]">
            <div className="absolute top-[0px] left-[0px] w-[368.5px] h-[57.37px]">
              <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[368.5px] h-[57.37px]">
                NFT info Page
              </div>
            </div>
          </div>
          <div className="absolute top-[187.3px] left-[calc(50%_-_617.74px)] w-[1235.74px] h-[482.7px] text-center text-black-black-100">
            <div className="relative bg-black w-[1235.74px] h-[440.73px]">
              <div className="absolute top-[346.3px] left-[calc(50%_-_479.61px)] rounded-31xl bg-black w-[1235.74px] h-[440.73px]" />
            </div>
            <img
              className="absolute top-[219.7px] left-[56.74px] rounded-[50%] w-[244px] h-[263px] object-cover"
              alt=""
              src="/ellipse-22@2x.png"
            />
            <div className="absolute top-[156.22px] left-[401.74px] font-medium inline-block w-[594.99px] h-[63.69px]">
              NFT Collection Description
            </div>
          </div>
        </div>
        <img
          className="absolute top-[80.73px] left-[1264px] w-[42px] h-[43.45px] object-cover cursor-pointer"
          alt=""
          src="/mask-group10@2x.png"
          onClick={onMaskGroupIconClick}
        />
        <div className="absolute top-[724.25px] left-[126px] w-[282px] h-[70.35px] text-13xl">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[250px] h-[40.35px]">
            Alzaimer Zenzie
          </div>
          <div className="absolute top-[45.52px] left-[0px] text-xl inline-block w-[186px] h-[24.83px]">
            <span>{`By `}</span>
            <span className="font-medium">Developer name</span>
          </div>
          <img
            className="absolute top-[5.17px] left-[253px] w-[29px] h-[30px] object-cover"
            alt=""
            src="/pngwing-1@2x.png"
          />
        </div>
        <img
          className="absolute top-[684px] left-[1091px] w-[156.67px] h-[25.86px] object-cover"
          alt=""
          src="/group-89@2x.png"
        />
        <div className="absolute top-[849.44px] left-[126px] font-medium inline-block w-[1136px] h-[24.83px]">
          Items 12K | Created Jun 2023 | Creator earnings 5% | Chain Ethereum
        </div>
        <div className="absolute top-[896px] left-[126px] inline-block w-[1136px] h-[24.83px]">
          Azuki Elementals are a collection of 20,000 characters within the four
          domains of the Garden. ...
        </div>
        <div className="absolute top-[942.55px] left-[126px] inline-block w-[1136px] h-[24.83px]">{`See more `}</div>
        <img
          className="absolute top-[949.79px] left-[221px] w-3.5 h-[14.48px] object-cover"
          alt=""
          src="/mask-group11@2x.png"
        />
        <div className="absolute top-[1025.32px] left-[126px] rounded-11xl bg-gainsboro-100 w-[1122px] h-[167.6px]" />
        <div className="absolute top-[1079.12px] left-[157px] w-[1060px] h-[65.18px] text-13xl text-black">
          <div className="absolute top-[0px] left-[0px] w-[179px] h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[179px] h-[40.35px]">
              15,240 ETH
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[118px] h-[24.83px]">
              total volume
            </div>
          </div>
          <div className="absolute top-[0px] left-[231px] w-[135px] h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[135px] h-[40.35px]">
              1.27 ETH
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[98px] h-[24.83px]">
              floor price
            </div>
          </div>
          <div className="absolute top-[0px] left-[418px] w-[203px] h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[203px] h-[40.35px]">
              1.1032 WETH
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[94px] h-[24.83px]">
              best offer
            </div>
          </div>
          <div className="absolute top-[0px] left-[673px] w-16 h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-16 h-[40.35px]">
              10%
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[53px] h-[24.83px]">
              listed
            </div>
          </div>
          <div className="absolute top-[0px] left-[789px] w-[86px] h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[86px] h-[40.35px]">
              4,615
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[60px] h-[24.83px]">
              owner
            </div>
          </div>
          <div className="absolute top-[0px] left-[927px] w-[133px] h-[65.18px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[69px] h-[40.35px]">
              38%
            </div>
            <div className="absolute top-[40.35px] left-[0px] text-xl font-medium inline-block w-[133px] h-[24.83px]">
              Unique owner
            </div>
          </div>
        </div>
        <div
          className="absolute h-[4.7%] w-[11.64%] top-[61.65%] right-[9.17%] bottom-[33.66%] left-[79.18%] rounded-35xl-7 [background:linear-gradient(99.74deg,_#06dbac,_#bd00ff)] flex flex-row py-[10.939597129821777px] px-[35.006710052490234px] box-border items-center justify-center cursor-pointer text-[22.69px]"
          onClick={onButtonContainerClick}
        >
          <b className="relative leading-[160%]">BUY NFT</b>
        </div>
      </div>
      <div className="absolute top-[934px] left-[1015px] rounded-31xl box-border w-[133px] h-[59px] flex flex-row py-2.5 px-5 items-center justify-center border-[1px] border-solid border-darkgray">
        <div className="relative">Follow</div>
      </div>
      <div className="absolute top-[-39px] left-[-17px] w-[1584px] h-[179px]">
        <div className="absolute top-[38px] left-[17px] bg-black w-[1567px] h-[103px] opacity-[0.8]" />
        <div className="absolute top-[140px] left-[-1px] box-border w-[1533px] h-0.5 border-t-[2px] border-solid border-black-black-100" />
        <img
          className="absolute top-[58px] left-[293px] w-[3px] h-[62.03px]"
          alt=""
          src="/line-24.svg"
        />
        <img
          className="absolute top-[39px] left-[32px] w-60 h-[179px] object-cover"
          alt=""
          src="/untitled1-1@2x.png"
        />
        <img
          className="absolute top-[64px] left-[calc(50%_+_667px)] w-[50px] h-[49px] object-cover"
          alt=""
          src="/cart@2x.png"
        />
        <div className="absolute top-[64px] left-[1109px] w-[325px] h-[49px]">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-[49px]">
            <div className="absolute h-full w-full top-[0%] right-[-100%] bottom-[0%] left-[100%] rounded-3xs bg-gainsboro-200 [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.71]" />
          </div>
          <img
            className="absolute h-[59.63%] w-[8.62%] top-[20.41%] right-[4.62%] bottom-[19.96%] left-[86.77%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/mask-group1@2x.png"
            onClick={onMaskGroupIcon2Click}
          />
          <div
            className="absolute top-[9px] left-[15px] w-[228.65px] h-[30px] cursor-pointer"
            onClick={onGroupContainer14Click}
          >
            <img
              className="absolute top-[2px] left-[0px] w-7 h-7 object-cover"
              alt=""
              src="/mask-group2@2x.png"
            />
            <div className="absolute h-[96.67%] w-[79.44%] top-[0%] left-[20.56%] leading-[160%] font-medium inline-block">
              Connect wallet
            </div>
          </div>
          <div className="absolute h-[65.03%] w-[0.62%] top-[20.41%] right-[18.77%] bottom-[14.56%] left-[80.62%] box-border border-r-[2px] border-solid border-black-black-100" />
        </div>
        <div className="absolute top-[64px] left-[328px] w-[756px] h-[49px]">
          <div className="absolute top-[9px] left-[61px] leading-[160%] font-medium">
            Search items, Collections, Accounts
          </div>
          <img
            className="absolute top-[10px] left-[15px] w-7 h-7 object-cover"
            alt=""
            src="/mask-group3@2x.png"
          />
          <div className="absolute top-[0px] left-[calc(50%_-_378px)] rounded-3xs bg-gainsboro-200 w-[756px] h-[49px] opacity-[0.71]" />
        </div>
      </div>
    </div>
  );
};

export default NftInfo;
