import { Cpu, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export function TechFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
                <Link href="/technology" className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold">
                <Cpu className="h-7 w-7 text-accent" />
                <span>Nubenta Technology</span>
                </Link>
                <p className="text-sm text-primary-foreground/70">
                    Innovating Today, Shaping Tomorrow.
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                </Link>
            </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nubenta Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
