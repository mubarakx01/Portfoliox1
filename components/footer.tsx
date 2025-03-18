import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-24" data-oid="dy8:2zp">
      <div className="container mx-auto px-4" data-oid="gl5phsg">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-oid="41a_628"
        >
          <div className="mb-6 md:mb-0" data-oid="sy1ln.t">
            <div className="font-bold text-xl" data-oid="20dmsp3">
              MUBARAK A
            </div>
            <div className="text-muted-foreground" data-oid="3gt8u_q">
              AI Engineer & Community Builder
            </div>
          </div>

          <div className="flex gap-4" data-oid=":lp:d73">
            <Button variant="ghost" size="icon" asChild data-oid="q57w4bq">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-oid="hol8z9s"
              >
                <Github className="h-5 w-5" data-oid="-i5_r.8" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="ix05zi0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-oid="2ncsq1z"
              >
                <Linkedin className="h-5 w-5" data-oid="e3:kj4l" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="naf1s9i">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                data-oid="3:2r.nv"
              >
                <Twitter className="h-5 w-5" data-oid=".hyko5-" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="2..83fq">
              <a
                href="mailto:mr1398463@gmail.com"
                aria-label="Email"
                data-oid="x2viwbi"
              >
                <Mail className="h-5 w-5" data-oid="umpn5vt" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className="mt-8 text-center text-sm text-muted-foreground"
          data-oid="5-cxa_i"
        >
          © {new Date().getFullYear()} MUBARAK A. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
