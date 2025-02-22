"use client";
import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import manual from "@/images/manual_entry.webp"

const ManualEntry: React.FC = () => {
  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) return alert("⚠️ Please enter a valid Student ID.");

    try {
      await addDoc(collection(db, "attendance"), {
        type: "Manual",
        studentId,
        timestamp: Timestamp.now(),
      });
      alert(`✅ Attendance recorded for: ${studentId}`);
      setStudentId("");
    } catch (error) {
      console.error("Error adding document:", error);
      alert("❌ Failed to record attendance.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 shadow-2xl rounded-2xl p-6 space-y-6 border border-blue-200">
      <div className="flex justify-center">
      <Image 
                    src={manual} 
                    alt="Manual Entry" 
                    width={260} 
                    height={260} 
                    className="rounded-lg" 
                  />
      </div>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter Student ID"
        className="w-full border border-blue-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Attendance</Button>
    </form>
  );
};

export default ManualEntry;