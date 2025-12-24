import avatar from '../../assets/avatar.png';
import { profile } from '../../infrastructure/data/profile.data';

export default function About() {
  
  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* AVATAR */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <img
                src={avatar}
                alt={`Avatar de ${profile.name}`}
                className="w-56 h-56 md:w-72 md:h-72
                           object-contain object-top
                           rounded-2xl
                           border border-white/10 shadow-xl
                           transition-transform duration-300
                           group-hover:scale-[1.02]"
              />

              {/* glow */}
              <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-indigo-500 rounded-full" />
            </div>
          </div>

          {/* TEXTO */}
          <div className="md:col-span-2">
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* SKILLS */}
              <div className="bg-(--card) p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Habilidades</h4>
                <ul className="space-y-2 text-(--muted)">
                  {profile.skills.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </div>

              {/* EXPERIENCE */}
              <div className="bg-(--card) p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Experiencia</h4>

                <div className="space-y-4 text-(--muted)">
                  {profile.experience.map((job, i) => (
                    <div key={i}>
                      <p className="font-medium text-white">
                        {job.years} · {job.role}
                      </p>
                      <p className="text-sm mt-1">{job.description}</p>
                      <ul className="list-disc list-inside text-sm mt-2">
                        {job.impact.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {}

                  {profile.highlights.map((highlight, i) => (
                    <div key={i}>
                      <p className="font-medium text-white">
                        {highlight.company} 
                      </p>
                      <p className="text-sm mt-1">{highlight.achievement}</p>
                      
                    </div>
                  ))}





                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
