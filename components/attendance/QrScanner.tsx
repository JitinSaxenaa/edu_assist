"use client";
import React, { useState, useEffect, useRef } from "react";
import { Camera, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import QrScanner from "qr-scanner";
import Image from "next/image";
import QRImage from "@/images/qr_code.avif";

const Attendance: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scanner, setScanner] = useState<QrScanner | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string>("");

  useEffect(() => {
    const initializeScanner = async () => {
      if (!videoRef.current) {
        console.warn("Video element not found.");
        return;
      }

      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInput = devices.find((device) => device.kind === "videoinput");

        if (!videoInput) {
          alert("❌ No camera device found. Please connect a camera or use a device with a camera.");
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          const qrScanner = new QrScanner(
            videoRef.current,
            (result) => {
              if (result?.data) {
                setScanResult(result.data);
                qrScanner.stop();
                setScanning(false);
              }
            },
            {
              returnDetailedScanResult: true,
              highlightScanRegion: true,
              preferredCamera: "environment",
            }
          );

          setScanner(qrScanner);
        }
      } catch (err) {
        console.error("Camera initialization error:", err);
        alert("❌ Camera access denied or unavailable. Please check permissions.");
      }
    };

    initializeScanner();

    return () => {
      if (scanner) {
        scanner.stop();
        scanner.destroy();
      }

      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [scanner]);

  const startScanning = async () => {
    if (!scanner) {
      alert("⚠️ Scanner not initialized. Please wait for the camera to load and try again.");
      return;
    }

    try {
      await scanner.start();
      setScanning(true);
      setScanResult("");
    } catch (err) {
      console.error("Scanner start error:", err);
      alert("❌ Unable to start the scanner. Make sure no other app is using the camera.");
    }
  };

  const stopScanning = () => {
    scanner?.stop();
    setScanning(false);

    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="relative bg-blue-50 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto space-y-6 border border-blue-200">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-48 h-48 bg-blue-200 rounded-full -z-10 blur-2xl"></div>

      <h2 className="text-2xl font-bold text-center text-blue-700">📷 QR Code Scanning</h2>

      {!scanning ? (
        <div className="flex flex-col items-center space-y-4">
          <Image 
            src={QRImage} 
            alt="QR Code Illustration" 
            width={260} 
            height={260} 
            className="rounded-lg shadow-lg"
            priority
          />
          <Button 
            onClick={startScanning} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
          >
            <Camera className="mr-2" /> Start Scanning
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg border-4 border-blue-400 overflow-hidden shadow-md relative">
            <video
              ref={(ref) => (videoRef.current = ref)}
              className="w-full rounded-lg"
              muted
              playsInline
              autoPlay
            ></video>
          </div>
          <Button 
            onClick={stopScanning} 
            variant="destructive" 
            className="w-full flex items-center justify-center"
          >
            <StopCircle className="mr-2" /> Stop Scanning
          </Button>
        </div>
      )}

      {scanResult && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg text-green-800 text-center font-medium shadow-sm">
          ✅ <strong>Scan Result:</strong> {scanResult}
        </div>
      )}
    </div>
  );
};

export default Attendance;
