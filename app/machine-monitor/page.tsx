import { MachineConnectMonitor } from "@/components/machine-connect-monitor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function MachineMonitorPage() {
  return (
    <main
      className="min-h-screen bg-black text-white p-4 md:p-8"
      data-oid="oh5qqj2"
    >
      <div className="max-w-7xl mx-auto" data-oid=":hu1h7k">
        <div className="mb-8" data-oid="v1qq5ya">
          <Button
            variant="outline"
            asChild
            className="text-white border-white/20 hover:bg-white/10"
            data-oid="xizhr8."
          >
            <Link href="/" data-oid="wc7-rml">
              <ArrowLeft className="mr-2 h-4 w-4" data-oid="gms.zf0" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="mb-8" data-oid="ni-bkf7">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-oid="v4u48ma"
          >
            Machine Connect Monitor Demo
          </h1>
          <p className="text-gray-400 max-w-3xl" data-oid="2qm69id">
            This interactive demo showcases a real-time machine monitoring
            dashboard. The system allows users to track machine status, connect
            to devices remotely, and monitor performance metrics across a
            network.
          </p>
        </div>

        <div className="mb-8" data-oid="189mq-z">
          <Image
            src="/machine-monitor.jpg"
            alt="Machine Connect Monitor"
            width={1000}
            height={500}
            className="rounded-lg border border-gray-800 shadow-xl"
            data-oid="kd-feyi"
          />
        </div>

        <MachineConnectMonitor data-oid="qag9vkd" />

        <div
          className="mt-12 bg-gray-900/50 p-6 rounded-lg max-w-3xl"
          data-oid="xa8m27s"
        >
          <h2 className="text-xl font-semibold mb-4" data-oid="iwo77j2">
            About This Project
          </h2>
          <p className="mb-4" data-oid="ty-rjvz">
            The Machine Connect Monitor is a full-stack application built with
            React, Next.js, and WebSockets for real-time communication. It
            features a clean, intuitive interface designed with Tailwind CSS.
          </p>
          <p className="mb-4" data-oid="uvqqvp4">
            Key features include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2" data-oid="ru_-dcc">
            <li data-oid="u8kqu:n">Real-time machine status monitoring</li>
            <li data-oid="4ly:0hj">Secure connection protocols</li>
            <li data-oid="64ti.ex">Responsive design for all device sizes</li>
            <li data-oid="l8ws8fl">
              Automatic status updates and notifications
            </li>
            <li data-oid="n2bsr5v">Network performance analytics</li>
          </ul>
          <p data-oid=":t-eovr">
            This demo showcases the frontend interface. In a production
            environment, it would connect to a backend service that communicates
            with actual networked machines.
          </p>
        </div>
      </div>
    </main>
  );
}
