"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function MachineConnectMonitor() {
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("8082");

  return (
    <div
      className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto"
      data-oid="9ilh8fd"
    >
      <h2 className="text-xl font-medium mb-6" data-oid="yeqtc1i">
        Machine Connect Monitor
      </h2>

      <h1 className="text-5xl font-bold mb-10" data-oid="uae4f_-">
        Machine Data
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        data-oid="cb86si2"
      >
        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="5nvy3fb"
        >
          <div className="flex justify-between items-center" data-oid="rwarh2c">
            <div data-oid="r1kga_v">
              <span className="font-bold" data-oid="4io1jrh">
                Machine 1
              </span>
              <span className="text-gray-400 ml-2" data-oid="umc0tgc">
                IP: 192.168.1.67
              </span>
            </div>
            <div data-oid="vvlqi5:">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="orwl7af"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="-muu9u1"
        >
          <div className="flex justify-between items-center" data-oid="h0928qf">
            <div data-oid="dvw.zzq">
              <span className="font-bold" data-oid="0f.1ndt">
                Machine 2
              </span>
              <span className="text-gray-400 ml-2" data-oid="h-yeak7">
                IP: 192.168.1.60
              </span>
            </div>
            <div data-oid="m9y.265">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="m17gz4e"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        data-oid="ogmxitb"
      >
        <div className="flex-shrink-0" data-oid="r0ahjgf">
          <span className="font-medium mr-4" data-oid="928fysq">
            Machine
          </span>
        </div>
        <div className="flex-grow" data-oid="vyxaltx">
          <Input
            placeholder="Enter The IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="bg-black border-gray-700"
            data-oid=":0jl1_s"
          />
        </div>
        <div className="w-20" data-oid="r3tjgwy">
          <Input
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="bo0mw9v"
          />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700" data-oid=":zr69-s">
          Connect
        </Button>
      </div>
    </div>
  );
}
