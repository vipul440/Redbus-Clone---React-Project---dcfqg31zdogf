import React from "react";
import download from "./download.css";
import down from "../images/downloadlink.png";
import tick from "../images/tick.png";
import qr from "../images/qrCode.png";
import playstoreimg from "../images/playStore.png";
import appstoreimg from "../images/appStore.png";

function Download() {
  return (
    <>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${down})`,
        }}
      >
        <div className="ratings">
          <h2 className="head" style={{ marginTop: "0px", padding: "0px" }}>
            ENJOY THE APP!
          </h2>

          <div className="allinOne">
            <div className="rate1">
              <img src={tick} style={{ height: "20px" }} />
              <p className="start">Quick access</p>
            </div>
            <div className="rate1">
              <img src={tick} style={{ height: "20px" }} />
              <p className="start">Superior live tracking</p>
            </div>
            <div className="rateval">
              <div className="ratevalue">
                <h1>4.5 *</h1>
                <p>50M+ downloads</p>
                <h3>Play Store</h3>
              </div>
              <span />
              <div className="ratevalue">
                <h1>4.6 *</h1>
                <p>50M+ downloads</p>
                <h3>App Store</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="downloadlinkp">
          <div className="downloadOpton">
            <h3 className="opt" id="hey">
              Scan to download
            </h3>
            <img className="sz" src={qr} />
          </div>
          <div className="downloadOption">
            <h3 className="opt">Download the App on</h3>
            <img className="data" src={playstoreimg} />
            <img className="data" src={appstoreimg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
