"use client";

import { Link, Divider } from "@heroui/react";

export default function AppFooter() {
  return (
    <footer className="mt-8">
      <Divider className="mt-8" />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-semibold text-lg">The Classrooms</p>
            <p className="text-sm text-foreground-500 mt-2">
              Where teaching and learning come together.
            </p>
          </div>

          <div>
            <p className="font-medium mb-3">Product</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">AI tools</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-3">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Guides</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground-500">
          <p>© {new Date().getFullYear()} The Classrooms</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
