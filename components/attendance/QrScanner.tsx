"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import QrScanner from "qr-scanner";


const QrScannerComponent: React.FC<{ onScan: (result: string) => void }> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    let qrScanner: QrScanner | null = null;

    if (videoRef.current) {
      qrScanner = new QrScanner(
        videoRef.current,
        (result: string) => {
          onScan(result);//-
          onScan(result);//+
          qrScanner?.stop();
          setScanning(false);
        },
        {
          highlightScanRegion: true,
        }
      );
    }

    return () => {
      qrScanner?.destroy();
    };
  }, [onScan]);

  const handleStartScan = () => {
    if (!videoRef.current) return;

    setScanning(true);
    QrScanner.hasCamera().then((hasCamera) => {
      if (!hasCamera) return alert("Camera not accessible.");

      QrScanner.listCameras(true).then((cameras) => {
        if (cameras.length === 0) return alert("No camera found.");

        const qrScanner = new QrScanner(videoRef.current!, (result: string) => {
          onScan(result);
          qrScanner.stop();
          setScanning(false);
        });
        qrScanner.start();
      });
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <video ref={videoRef} className="w-full max-w-md rounded-lg border shadow-md" hidden={!scanning}></video>
      <Button onClick={handleStartScan} disabled={scanning}>
        {scanning ? "Scanning..." : "Start QR Scan"}
      </Button>
    </div>
  );
};


export default QrScannerComponent;