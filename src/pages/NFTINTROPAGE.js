import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NFTINTROPAGE = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/nft-eplore");
  }, [navigate]);

  const onBttnContainerClick = useCallback(() => {
    navigate("/nft-eplore");
  }, [navigate]);

  const onMaskGroupIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[2717px] overflow-hidden text-left text-lg text-black-black-100 font-button-16">
      <img
        className="absolute top-[0px] left-[0px] w-[1948px] h-[6593px]"
        alt=""
        src="/gradient-color.svg"
      />
      <div className="absolute top-[2500.9px] left-[-104px] rounded-[50%] [background:linear-gradient(180deg,_#2603fb,_#dc06ff)] [filter:blur(500px)] w-[490.22px] h-[490.22px] [transform:_rotate(-22.54deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2957.9px] left-[1016px] rounded-[50%] [background:linear-gradient(180deg,_#2603fb,_#dc06ff)] [filter:blur(500px)] w-[490.22px] h-[490.22px] [transform:_rotate(-22.54deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[828px] left-[1604px] w-9 h-9 overflow-hidden"
        alt=""
        src="/globe-2.svg"
      />
      <div className="absolute top-[1768px] left-[76px] w-[1360px] h-[502px]">
        <div className="absolute top-[0px] left-[0px] text-61xl inline-block w-[857px]">
          <p className="m-0">Engage your</p>
          <p className="m-0">Fans with community</p>
        </div>
        <div className="absolute top-[386px] left-[0px] w-[412px] h-[116px]">
          <div className="absolute top-[0px] left-[0px] leading-[160%] font-light inline-block w-[412px]">
            Artists themselves become a platform. NFTs allow artistes,
            especially upcoming ones, to create an ecosystem that allows genuine
            fans to buy into their market.
          </div>
        </div>
        <div className="absolute top-[386px] left-[474px] w-[412px] h-[116px]">
          <div className="absolute top-[0px] left-[0px] leading-[160%] font-light inline-block w-[412px]">{`NFT gives all the power to creators. Anyone upcoming artiste can do their stuff on-chain, making them more independent and freeing them from unfavorable deals from record labels. `}</div>
        </div>
        <div className="absolute top-[386px] left-[948px] w-[412px] h-[58px]">
          <div className="absolute top-[0px] left-[0px] leading-[160%] font-light inline-block w-[412px]">
            A positive NFT-fueled change in the music market can upstage crypto
            adoption at large.
          </div>
        </div>
        <div className="absolute top-[274px] left-[0px] text-41xl leading-[160%] font-semibold">
          01/
        </div>
        <div className="absolute top-[274px] left-[477px] text-41xl leading-[160%] font-semibold">
          02/
        </div>
        <div className="absolute top-[274px] left-[948px] text-41xl leading-[160%] font-semibold">
          03/
        </div>
      </div>
      <div
        className="absolute top-[2384px] left-[calc(50%_-_150px)] rounded-31xl flex flex-row py-2.5 px-8 items-center justify-start gap-[10px] cursor-pointer border-[1px] border-solid border-black-black-100"
        onClick={onButtonContainerClick}
      >
        <div className="relative leading-[160%] font-light">
          Discover More NFT
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/chevronright-1.svg"
        />
      </div>
      <div className="absolute bottom-[-129913px] left-[0px] w-[1535px] h-[131649px] text-13xl">
        <div className="absolute bottom-[0px] left-[62px] w-[1387px] h-[130193px]">
          <div className="absolute bottom-[130137px] left-[0px] text-27xl">
            Brand Kiln NFT
          </div>
          <div className="absolute bottom-[130052px] left-[0px]">Facebook</div>
          <div className="absolute bottom-[130052px] left-[232px]">
            Twittter
          </div>
          <div className="absolute bottom-[130052px] left-[433px]">
            Instagram
          </div>
          <div className="absolute bottom-[130052px] left-[667px]">Contact</div>
          <div className="absolute bottom-[130052px] left-[1094px] w-[266px] h-[39px]">
            <div className="absolute bottom-[0px] left-[34px]">
              Back to the top
            </div>
            <img
              className="absolute bottom-[7px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/arrowupcircle-1.svg"
            />
          </div>
          <div className="absolute bottom-[129986px] left-[0px] text-lg">
            Privacy Policy
          </div>
          <div className="absolute bottom-[129986px] left-[156px] text-lg">
            Terms and Conditions
          </div>
          <div className="absolute bottom-[129986px] left-[1110px] text-lg">
            Copyright © 2022 Aryan Dosaya
          </div>
          <div className="absolute bottom-[130046.5px] left-[190.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
          <div className="absolute bottom-[130046.5px] left-[392.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
          <div className="absolute bottom-[130046.5px] left-[623.5px] box-border w-px h-[49px] border-r-[1px] border-solid border-black-black-100" />
          <div className="absolute bottom-[88.5px] left-[-1.5px] box-border w-[1363px] h-[3px] border-t-[3px] border-solid border-black-black-100" />
          <div className="absolute bottom-[-0.5px] left-[-0.5px] box-border w-[1361px] h-px border-t-[1px] border-solid border-black-black-100" />
        </div>
        <img
          className="absolute top-[49.27px] left-[calc(50%_-_729.13px)] w-[1469.98px] h-[657.63px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute top-[0px] left-[26.65px] w-[515.93px] h-[710.11px] object-cover opacity-[0.49]"
          alt=""
          src="/avatar-1@2x.png"
        />
        <div className="absolute top-[212.07px] left-[0px] w-[1535px] h-[601.93px] text-center text-31xl">
          <div className="absolute top-[133px] left-[calc(50%_-_519.5px)] w-[1040px] h-[376px] flex flex-col items-center justify-start gap-[32px]">
            <div className="flex flex-col items-center justify-start gap-[16px]">
              <div className="relative leading-[130%] font-black inline-block w-[780px]">{`A NFT’s investment platform that invests in you `}</div>
              <div className="relative text-base leading-[150%] text-black-black-60 inline-block w-[580px]">
                We invest more resources than any other platrom in making sure
                great support from real people is a click away, whenever you
                need it.
              </div>
            </div>
            <div
              className="relative rounded-3xs [background:linear-gradient(225deg,_#18c8ff,_#933ffe)] w-[156px] h-14 overflow-hidden shrink-0 cursor-pointer text-base"
              onClick={onBttnContainerClick}
            >
              <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_51px)] leading-[100%] font-semibold">
                Explore more
              </div>
            </div>
          </div>
          <img
            className="absolute top-[361px] left-[1201px] w-[61px] h-[60px]"
            alt=""
            src="/starimg.svg"
          />
        </div>
      </div>
      <div className="absolute top-[160px] left-[calc(50%_-_724px)] w-[1447px] h-[682px] text-61xl">
        <div className="absolute top-[0px] left-[calc(50%_-_723.5px)] rounded-11xl bg-midnightblue-200 w-[1447px] h-[614px] opacity-[0.5]" />
        <div className="absolute top-[110px] left-[65px] inline-block w-[684px]">
          Home Page Banner For NFT.
        </div>
        <div className="absolute top-[340px] left-[65px] text-lg leading-[160%] font-light inline-block w-[608px]">
          NFTs are unique assets stored and tradable on a blockchain. They are,
          immutable, scarce and publicly verifiable. In the music world,
          artistes get to sell limited digital content to their fans who pay via
          crypto. You can now produce any music content that cannot be
          counterfeited.
        </div>
        <img
          className="absolute top-[80.75px] left-[896.25px] w-[492.5px] h-[422px]"
          alt=""
          src="/rectangle-7.svg"
        />
        <img
          className="absolute top-[77px] left-[745px] w-[568px] h-[568px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="absolute top-[673px] left-[calc(50%_-_96.5px)] w-[193px] h-[9px]">
          <div className="absolute top-[0px] left-[calc(50%_-_96.5px)] rounded-8xs bg-black-black-100 w-[70.34px] h-[9px]" />
          <div className="absolute top-[0px] left-[calc(50%_-_16.5px)] rounded-8xs bg-silver w-[31px] h-[9px] opacity-[0.8]" />
          <div className="absolute top-[0px] left-[calc(50%_+_24.5px)] rounded-8xs bg-silver w-[31px] h-[9px] opacity-[0.8]" />
          <div className="absolute top-[0px] left-[calc(50%_+_65.5px)] rounded-8xs bg-silver w-[31px] h-[9px] opacity-[0.8]" />
        </div>
      </div>
      <div className="absolute top-[1219.9px] left-[1113px] rounded-[50%] [background:linear-gradient(180deg,_#2603fb,_#dc06ff)] [filter:blur(500px)] w-[490.22px] h-[490.22px] [transform:_rotate(-22.54deg)] [transform-origin:0_0]" />
      <div className="absolute top-[889px] left-[calc(50%_-_720px)] w-[1440px] h-[76px] overflow-hidden text-5xl">
        <div className="absolute top-[20px] left-[1438px] w-[1426px] h-9">
          <div className="absolute top-[3px] left-[482px] uppercase font-light">
            new way to reach the new fan
          </div>
          <div className="absolute top-[3px] left-[0px] uppercase font-light">
            new way to reach the new fan
          </div>
          <div className="absolute top-[3px] left-[964px] uppercase font-light">
            new way to reach the new fan
          </div>
          <img
            className="absolute top-[20px] left-[2346px] w-9 h-9 overflow-hidden"
            alt=""
            src="/globe-2.svg"
          />
          <img
            className="absolute top-[20px] left-[1864px] w-9 h-9 overflow-hidden"
            alt=""
            src="/globe-2.svg"
          />
          <img
            className="absolute top-[20px] left-[2828px] w-9 h-9 overflow-hidden"
            alt=""
            src="/globe-2.svg"
          />
        </div>
        <div className="absolute top-[1.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-black-black-100" />
        <div className="absolute top-[75.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-black-black-100" />
      </div>
      <div className="absolute top-[-39px] left-[-17px] w-[1584px] h-[179px] text-5xl">
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
            onClick={onMaskGroupIconClick}
          />
          <div
            className="absolute top-[9px] left-[15px] w-[228.65px] h-[30px] cursor-pointer"
            onClick={onGroupContainer7Click}
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

export default NFTINTROPAGE;
