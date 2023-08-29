import React from "react";

export default function GoogleAdsense(props) {
  const { dataAdSlot } = props;

  React.useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{display: "block"}}
      data-ad-client="ca-pub-2485091208759665"
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
