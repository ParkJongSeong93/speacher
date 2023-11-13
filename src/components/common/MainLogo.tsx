import React from "react";
import Image from "next/image";
import MainLogoWhite from "$/image/logos/logo_white.png";

type Props = {
  style?: React.CSSProperties;
};

function MainLogo({
  style = {
    height: "100%",
    width: "auto",
  },
}: Props) {
  return <Image src={MainLogoWhite} style={style} alt="메인 로고" />;
}

export default MainLogo;
