"use client";
import React, { useState } from 'react';
import QrScannerComponent from '@/components/attendance/QrScanner';
import { Button } from '@/components/ui/button';

const Attendance: React.FC = () => {
  const [mode, setMode] = useState<'QR' | null>(null);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Attendance Module</h1>
      <Button onClick={() => setMode('QR')}>QR Attendance</Button>
      {mode === 'QR' && <QrScannerComponent />} 
    </div>
  );
};

export default Attendance;