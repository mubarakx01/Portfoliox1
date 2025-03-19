import { MachineConnectMonitor } from "@/components/machine-connect-monitor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function MachineMonitorPage() {
  return (
    <main
      className="min-h-screen bg-black text-white p-4 md:p-8"
      data-oid="jdib0w-"
    >
      <div className="max-w-7xl mx-auto" data-oid="cyhy2f1">
        <div className="mb-8" data-oid="p2ondn1">
          <Button
            variant="outline"
            asChild
            className="text-white border-white/20 hover:bg-white/10"
            data-oid="bj1xmko"
          >
            <Link href="/" data-oid="nzlj.dn">
              <ArrowLeft className="mr-2 h-4 w-4" data-oid="jqmf:2m" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="mb-8" data-oid="hvtodap">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-oid="6lh6da5"
          >
            Machine Connect Monitor Demo
          </h1>
          <p className="text-gray-400 max-w-3xl" data-oid="5wfd_pb">
            This interactive demo showcases a real-time machine monitoring
            dashboard. The system allows users to track machine status, connect
            to devices remotely, and monitor performance metrics across a
            network.
          </p>
        </div>

        <div className="mb-8" data-oid="tckquy6">
          <Image
            src="/machine-monitor.jpg"
            alt="Machine Connect Monitor"
            width={1000}
            height={500}
            className="rounded-lg border border-gray-800 shadow-xl"
            data-oid="0zxwg2h"
          />
        </div>

        <MachineConnectMonitor data-oid="giwxjm1" />

        <div
          className="mt-12 bg-gray-900/50 p-6 rounded-lg max-w-3xl"
          data-oid="k5s81.q"
        >
          <h2 className="text-xl font-semibold mb-4" data-oid="t1viqrs">
            About This Project
          </h2>
          <p className="mb-4" data-oid="cit4b._">
            The Machine Connect Monitor is a full-stack application built with
            React, Next.js, and WebSockets for real-time communication. It
            features a clean, intuitive interface designed with Tailwind CSS.
          </p>
          <p className="mb-4" data-oid="1jdk9sv">
            Key features include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2" data-oid="vfi4ubb">
            <li data-oid="5.fxg9_">Real-time machine status monitoring</li>
            <li data-oid="_1.xq49">Secure connection protocols</li>
            <li data-oid="0wnfjfg">Responsive design for all device sizes</li>
            <li data-oid="glqpj_i">
              Automatic status updates and notifications
            </li>
            <li data-oid="o3-tnmh">Network performance analytics</li>
          </ul>
          <p data-oid="3x3b1fl">
            This demo showcases the frontend interface. In a production
            environment, it would connect to a backend service that communicates
            with actual networked machines.
          </p>
        </div>
      </div>
    </main>
  );
}
