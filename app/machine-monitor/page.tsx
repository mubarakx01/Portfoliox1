import { MachineConnectMonitor } from "@/components/machine-connect-monitor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MachineMonitorPage() {
  return (
    <main
      className="min-h-screen bg-black text-white p-4 md:p-8"
      data-oid="pr2q.2m"
    >
      <div className="max-w-7xl mx-auto" data-oid="89cw2bo">
        <div className="mb-8" data-oid="4qvrsp8">
          <Button
            variant="outline"
            asChild
            className="text-white border-white/20 hover:bg-white/10"
            data-oid="r-hcui:"
          >
            <Link href="/" data-oid=":ijb.zs">
              <ArrowLeft className="mr-2 h-4 w-4" data-oid="odknsus" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="mb-8" data-oid="uh9be2f">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-oid="frphr-f"
          >
            Machine Connect Monitor Demo
          </h1>
          <p className="text-gray-400 max-w-3xl" data-oid="73f.3ko">
            This interactive demo showcases a real-time machine monitoring
            dashboard. The system allows users to track machine status, connect
            to devices remotely, and monitor performance metrics across a
            network.
          </p>
        </div>

        <MachineConnectMonitor data-oid="3qobk0-" />

        <div
          className="mt-12 bg-gray-900/50 p-6 rounded-lg max-w-3xl"
          data-oid="9.cena_"
        >
          <h2 className="text-xl font-semibold mb-4" data-oid="o850xuy">
            About This Project
          </h2>
          <p className="mb-4" data-oid="m-pgejv">
            The Machine Connect Monitor is a full-stack application built with
            React, Next.js, and WebSockets for real-time communication. It
            features a clean, intuitive interface designed with Tailwind CSS.
          </p>
          <p className="mb-4" data-oid="jhok06e">
            Key features include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2" data-oid="fupv3qp">
            <li data-oid="uo1ehsz">Real-time machine status monitoring</li>
            <li data-oid="j7i0gbx">Secure connection protocols</li>
            <li data-oid="hb.4hxm">Responsive design for all device sizes</li>
            <li data-oid="0j4lgta">
              Automatic status updates and notifications
            </li>
            <li data-oid="arpiob:">Network performance analytics</li>
          </ul>
          <p data-oid="u73._x_">
            This demo showcases the frontend interface. In a production
            environment, it would connect to a backend service that communicates
            with actual networked machines.
          </p>
        </div>
      </div>
    </main>
  );
}
