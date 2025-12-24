// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-black/30 py-8 text-center text-gray-400">
//       <div className="container mx-auto px-6">
//         <p>© {new Date().getFullYear()} Juan Camilo Giraldo — Frontend Developer</p>
//         <p className="text-sm mt-2">Diseño & Desarrollo con React, Tailwind y amor por la limpieza del código.</p>
//       </div>
//     </footer>
//   );
// }

import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from '../../../infrastructure/data/profile.data';

// export default function Footer() {
//   return (
//     <footer className="w-full mt-20 border-t border-black/30">
//       <div className="container mx-auto px-6 py-8 text-center text-gray-400">
//         <p>© {new Date().getFullYear()} {profile.name}</p>
//         <p className="text-sm mt-2">
//          {profile.resumen}
//         </p>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-black/30">
      <div className="container mx-auto px-6 py-10 text-center text-gray-400">
        {/* TEXT */}
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="text-sm mt-2">
          {profile.role}
        </p>
        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-2 mb-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400 transition"
          >
            <Github size={22} />
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-400 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:kmilo2021@outlook.com"
            aria-label="Email"
            className="hover:text-indigo-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
