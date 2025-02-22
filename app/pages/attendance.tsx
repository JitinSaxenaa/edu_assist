"use client";
import React, { useState } from "react";
import QrScanner from "@/components/attendance/QrScanner";
import ManualEntry from "@/components/attendance/ManualEntry";
import { Button } from "@/components/ui/button";

const AttendancePage: React.FC = () => {
  const [mode, setMode] = useState<"QR" | "Manual" | null>(null);

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-10 relative">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full -z-10 blur-2xl"></div>

      <h1 className="text-4xl font-bold text-center text-blue-700">📅 Attendance Tracking</h1>

      <div className="flex justify-center gap-4">
        <Button variant={mode === "QR" ? "default" : "outline"} onClick={() => setMode("QR")}>QR Attendance</Button>
        <Button variant={mode === "Manual" ? "default" : "outline"} onClick={() => setMode("Manual")}>Manual Entry</Button>
      </div>

      {mode === "QR" && <QrScanner />} 
      {mode === "Manual" && <ManualEntry />} 
      {!mode && <p className="text-center text-gray-500">Select an option to begin.</p>}
    </div>
  );
};

export default AttendancePage;