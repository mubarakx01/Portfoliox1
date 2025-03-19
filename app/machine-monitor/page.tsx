import { MachineConnectMonitor } from "@/components/machine-connect-monitor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MachineMonitorPage() {
  return (
    <main
      className="min-h-screen bg-black text-white p-4 md:p-8"
      data-oid="7j0qm95"
    >
      <div className="max-w-7xl mx-auto" data-oid="-rx:01y">
        <div className="mb-8" data-oid="c4udgj5">
          <Button
            variant="outline"
            asChild
            className="text-white border-white/20 hover:bg-white/10"
            data-oid="ulf_9-5"
          >
            <Link href="/" data-oid="irrv72x">
              <ArrowLeft className="mr-2 h-4 w-4" data-oid="aqfgwbk" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="mb-8" data-oid="06zc69m">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-oid="2bgnc-6"
          >
            Machine Connect Monitor Demo
          </h1>
          <p className="text-gray-400 max-w-3xl" data-oid="y.np_5_">
            This interactive demo showcases a real-time machine monitoring
            dashboard. The system allows users to track machine status, connect
            to devices remotely, and monitor performance metrics across a
            network.
          </p>
        </div>

        <MachineConnectMonitor data-oid="w6zrekd" />

        <div
          className="mt-12 bg-gray-900/50 p-6 rounded-lg max-w-3xl"
          data-oid="fgjpi13"
        >
          <h2 className="text-xl font-semibold mb-4" data-oid="tu3hmkg">
            About This Project
          </h2>
          <p className="mb-4" data-oid="iif490i">
            The Machine Connect Monitor is a full-stack application built with
            React, Next.js, and WebSockets for real-time communication. It
            features a clean, intuitive interface designed with Tailwind CSS.
          </p>
          <p className="mb-4" data-oid="vjqumz0">
            Key features include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2" data-oid="386kw-:">
            <li data-oid="apv:40:">Real-time machine status monitoring</li>
            <li data-oid="0:xnkal">Secure connection protocols</li>
            <li data-oid="3jf_m2c">Responsive design for all device sizes</li>
            <li data-oid="h7u:9tn">
              Automatic status updates and notifications
            </li>
            <li data-oid="0quexea">Network performance analytics</li>
          </ul>
          <p data-oid="x9s7_w8">
            This demo showcases the frontend interface. In a production
            environment, it would connect to a backend service that communicates
            with actual networked machines.
          </p>
        </div>
      </div>
    </main>
  );
}
