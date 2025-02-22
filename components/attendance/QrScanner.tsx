"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Button } from "@/components/ui/button";

const QrScannerComponent: React.FC<{ onScan: (result: string) => void }> = ({
  onScan,
}) => {
  const [scanning, setScanning] = useState(false);
  const [scanner, setScanner] = useState<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (scanning) {
      const qrScanner = new Html5QrcodeScanner(
        "qr-reader", // ID of the div where the scanner will render
        {
          fps: 10, // Frames per second
          qrbox: { width: 250, height: 250 }, // Define QR scanning area
        },
        false // Disable verbose logging
      );

      qrScanner.render(
        (decodedText) => {
          onScan(decodedText);
          handleStopScan(); // Stop scanning after a successful scan
        },
        (errorMessage) => {
          console.warn("QR Scan Error: ", errorMessage);
        }
      );

      setScanner(qrScanner);
    }

    return () => {
      scanner?.clear();
      setScanner(null);
    };
  }, [scanning]);

  const handleStartScan = () => setScanning(true);
  const handleStopScan = () => {
    scanner?.clear();
    setScanning(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {scanning && (
        <div
          id="qr-reader"
          className="w-full max-w-md rounded-lg border shadow-md"
        ></div>
      )}
      <Button onClick={scanning ? handleStopScan : handleStartScan}>
        {scanning ? "Stop Scanning" : "Start QR Scan"}
      </Button>
    </div>
  );
};

export default QrScannerComponent;
