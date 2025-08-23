import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            {/* Footer */}
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <Zap className="h-7 w-7 text-accent" />
              <span>Nubenta Group</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Shaping the Future, One Innovation at a Time.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@nubenta.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+2347042526071</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>No 20 Emir's Palace Road Kano, Nigeria</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
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
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nubenta Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
