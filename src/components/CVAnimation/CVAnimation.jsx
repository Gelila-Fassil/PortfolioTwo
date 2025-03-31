import React from "react";
import "./CVAnimation.css"; 

const DownloadButton = () => {
 
  const handleDownload = () => {
    const fileUrl = "GelilaCv.pdf"; 
    const fileName = "GelilaCv.pdf"; 

   
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-button-container">
      <button className="download-button" onClick={handleDownload}>
        Click Here to Download My CV
      </button>
    </div>
  );
};

export default DownloadButton;