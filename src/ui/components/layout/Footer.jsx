import { FileDown, Github, Linkedin, Mail } from 'lucide-react';

import { profile } from '../../../infrastructure/data/profile.data';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-black/30">
      <div className="container mx-auto px-6 py-10 text-center text-gray-400">
        {/* TEXT */}
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm mt-2">{profile.role}</p>
        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-2 mb-4">
          {/* GITHUB */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="relative group hover:text-indigo-400 transition"
          >
            <Github size={22} />

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                 whitespace-nowrap
                 rounded-md bg-black/80 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100
                 translate-y-1 group-hover:translate-y-0
                 transition-all duration-200 pointer-events-none"
            >
              GitHub
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="relative group hover:text-indigo-400 transition"
          >
            <Linkedin size={22} />

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                 whitespace-nowrap
                 rounded-md bg-black/80 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100
                 translate-y-1 group-hover:translate-y-0
                 transition-all duration-200 pointer-events-none"
            >
              LinkedIn
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:kmilo2021@outlook.com"
            aria-label="Email"
            className="relative group hover:text-indigo-400 transition"
          >
            <Mail size={22} />

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                 whitespace-nowrap
                 rounded-md bg-black/80 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100
                 translate-y-1 group-hover:translate-y-0
                 transition-all duration-200 pointer-events-none"
            >
              Email
            </span>
          </a>

          {/* CV */}
          <a
            href={profile.cv}
            download
            aria-label="Descargar CV"
            className="relative group hover:text-indigo-400 transition"
          >
            <FileDown size={22} />

            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                 whitespace-nowrap
                 rounded-md bg-black/80 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100
                 translate-y-1 group-hover:translate-y-0
                 transition-all duration-200 pointer-events-none"
            >
              Descargar CV
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
