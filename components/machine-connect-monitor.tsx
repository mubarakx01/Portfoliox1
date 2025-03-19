"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MachineConnectMonitor() {
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("8082");

  return (
    <div
      className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto"
      data-oid="tmjffzh"
    >
      <h2 className="text-xl font-medium mb-6" data-oid=":st:vgf">
        Machine Connect Monitor
      </h2>

      <h1 className="text-5xl font-bold mb-10" data-oid="faci:0d">
        Machine Data
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        data-oid=".p0yupp"
      >
        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="uk1ofw."
        >
          <div className="flex justify-between items-center" data-oid="lol_q-g">
            <div data-oid="wuj2yyx">
              <span className="font-bold" data-oid="0m5:x.4">
                Machine 1
              </span>
              <span className="text-gray-400 ml-2" data-oid="-t6yhzz">
                IP: 192.168.1.67
              </span>
            </div>
            <div data-oid="10brhk:">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="o72yenj"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="wbsimmv"
        >
          <div className="flex justify-between items-center" data-oid="g11f5ww">
            <div data-oid="ln1t_lm">
              <span className="font-bold" data-oid="f95122v">
                Machine 2
              </span>
              <span className="text-gray-400 ml-2" data-oid="laf:kx_">
                IP: 192.168.1.60
              </span>
            </div>
            <div data-oid="-5wnkvr">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="xhnh8z8"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        data-oid="x0_xrfj"
      >
        <div className="flex-shrink-0" data-oid="778b0jl">
          <span className="font-medium mr-4" data-oid="::sra-7">
            Machine
          </span>
        </div>
        <div className="flex-grow" data-oid="vy8ldg-">
          <Input
            placeholder="Enter The IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="7jo:rsn"
          />
        </div>
        <div className="w-20" data-oid="sg5ex7k">
          <Input
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="d:yq7w:"
          />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700" data-oid="q.kjjn4">
          Connect
        </Button>
      </div>
    </div>
  );
}
