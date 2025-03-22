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
      data-oid="t0okkbw"
    >
      <h2 className="text-xl font-medium mb-6" data-oid="sbhhmm.">
        Machine Connect Monitor
      </h2>

      <h1 className="text-5xl font-bold mb-10" data-oid="b4smsyx">
        Machine Data
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        data-oid="5qdhv:l"
      >
        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="tyiuypd"
        >
          <div className="flex justify-between items-center" data-oid="vzpwf6z">
            <div data-oid="n2rlhtr">
              <span className="font-bold" data-oid="7:by0a.">
                Machine 1
              </span>
              <span className="text-gray-400 ml-2" data-oid="hk6m3qk">
                IP: 192.168.1.67
              </span>
            </div>
            <div data-oid="b386.5.">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="ttl4d:q"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-[#0a1a0a] border border-[#1a3a1a] p-4 rounded-md"
          data-oid="fnlq93z"
        >
          <div className="flex justify-between items-center" data-oid="c-d51-0">
            <div data-oid="otqy0es">
              <span className="font-bold" data-oid="ud:1n1g">
                Machine 2
              </span>
              <span className="text-gray-400 ml-2" data-oid="3tkjlmh">
                IP: 192.168.1.60
              </span>
            </div>
            <div data-oid="fdnkpth">
              <span
                className="bg-green-500 text-black px-2 py-1 rounded text-xs"
                data-oid="rdxnn1p"
              >
                Status: Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        data-oid="c.k_ii0"
      >
        <div className="flex-shrink-0" data-oid="3tih:4x">
          <span className="font-medium mr-4" data-oid="b17iwy8">
            Machine
          </span>
        </div>
        <div className="flex-grow" data-oid="i80o.db">
          <Input
            placeholder="Enter The IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="4m2g5lo"
          />
        </div>
        <div className="w-20" data-oid="bn7zupy">
          <Input
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="bg-black border-gray-700"
            data-oid="ulc.:3c"
          />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700" data-oid="v50oe4x">
          Connect
        </Button>
      </div>
    </div>
  );
}
