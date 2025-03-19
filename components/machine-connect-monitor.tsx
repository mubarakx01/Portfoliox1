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
      data-oid="mszh-ob"
    >
      <h2 className="text-xl font-medium mb-6" data-oid=".s_h-4g">
        Machine Connect Monitor
      </h2>

      <h1 className="text-5xl font-bold mb-10" data-oid="ps8m.zf">
        Machine Data
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        data-oid="3._w3pp"
      >
        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="n_6h7vj"
        >
          <div className="flex justify-between items-center" data-oid=":7l5pg1">
            <div data-oid="v65.iz3">
              <span className="font-bold" data-oid="t_h.ni1">
                Machine 1
              </span>
              <span className="text-gray-400 ml-2" data-oid="yf1q26f">
                IP: 192.168.1.67
              </span>
            </div>
            <div data-oid="3i.imvb">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="t5qm7wp"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="vdt9l--"
        >
          <div className="flex justify-between items-center" data-oid="nswj3zh">
            <div data-oid="-t_7yn3">
              <span className="font-bold" data-oid="4b4s65f">
                Machine 2
              </span>
              <span className="text-gray-400 ml-2" data-oid=":7.oeun">
                IP: 192.168.1.60
              </span>
            </div>
            <div data-oid=":1x-x8b">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="s43-.mz"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        data-oid="r4s275."
      >
        <div className="flex-shrink-0" data-oid="69w1l43">
          <span className="font-medium mr-4" data-oid="jwz:.vq">
            Machine
          </span>
        </div>
        <div className="flex-grow" data-oid="fjkv39-">
          <Input
            placeholder="Enter The IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="ve7rw0j"
          />
        </div>
        <div className="w-20" data-oid="6hwuldk">
          <Input
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="8oxddoi"
          />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700" data-oid="oa43hyi">
          Connect
        </Button>
      </div>
    </div>
  );
}
