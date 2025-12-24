import Button from '../components/ui/Button';
import FadeIn from '../components/animations/FadeIn';
import { FileDown } from "lucide-react";
import Header from '../components/layout/Header';
import { motion as Motion } from 'framer-motion';
import { profile } from '../../infrastructure/data/profile.data';

export default function Home() {
  return (
    <Header>
      <section id="home" className="w-full min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <FadeIn delay={0.3}>
                <Motion.h1
                  className="text-5xl xl:text-6xl font-bold mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  Hola, soy <span className="text-indigo-400">Juan Camilo</span>
                </Motion.h1>

                <p className="text-gray-300 max-w-xl mb-6">{profile.summary}</p>
              </FadeIn>

              <div className="flex gap-4">
                <a href="#projects">
                  <Button>Ver proyectos</Button>
                </a>
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center px-5 py-2 rounded-lg
               bg-indigo-500/10 text-indigo-400
               border border-indigo-500/30
               hover:bg-indigo-500/20 transition"
                >
                  <FileDown size={18} className="ml-2" />Descargar CV
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-2 rounded-lg border border-gray-700 text-gray-200"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center lg:justify-end">
              <FadeIn delay={0.5}>
                <div className="w-80 h-80 xl:w-96 xl:h-96 bg-linear-to-br from-indigo-600/20 to-transparent rounded-2xl flex items-center justify-center border border-white/5">
                  <img
                    src="/src/assets/logoKmilo.jpeg"
                    alt="logoKmilo"
                    className="w-64 xl:w-72"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
}
