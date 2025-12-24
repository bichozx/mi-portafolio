# 💼 Portafolio – Juan Camilo Giraldo

Portafolio profesional como **Desarrollador Full-Stack especializado en React**, enfocado en UI modernas, rendimiento, accesibilidad y buenas prácticas de arquitectura.

📍 Colombia  
💻 React · Vite · Tailwind · Node.js · Arquitecturas Limpias

---

## 🚀 Demo

🔗 Próximamente / URL del deploy (Vercel – Netlify)

---

## 📌 Descripción

Este proyecto es mi **portafolio personal**, donde presento:

- Información profesional
- Experiencia y habilidades técnicas
- Certificados
- Proyectos destacados
- Formulario de contacto funcional
- Modo claro / oscuro

El objetivo es demostrar **buen diseño UI**, **arquitectura limpia**, **responsive design** y **código mantenible**.

---

## 🧱 Stack Tecnológico

### Frontend

- ⚛️ **React**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🎞️ **Framer Motion**
- 🌗 Dark / Light Theme (CSS Variables)
- 📱 Diseño responsive

### Arquitectura

- Separación por capas (UI / App / Infrastructure)
- Componentes reutilizables
- Datos desacoplados (`profile.data.js`)
- Principios de Clean Architecture

### Otros

- ESLint
- Buenas prácticas de accesibilidad
- Animaciones sutiles y performantes

---

## 📂 Estructura del Proyecto

```bash
src/
│
├── application/        # Casos de uso y lógica de aplicación
│   ├── projects/
│   │   └── getProjects.js
│   ├── certificates/
│   │   └── getCertificates.js
│   └── contact/
│       └── sendMessage.js
├── assets/             # Imágenes (avatar, logo, etc.)
├── domain/
│   ├── project.model.js
│   ├── certificate.model.js
│   └── contact.model.js
│
├── infrastructure/
│   ├── data/
│   │   ├── projects.data.js
│   │   ├── certificates.data.js
│   │   └── profile.data.js
│   └── services/
│       └── email.service.js
│
├── ui/
│   ├── components/     # Componentes UI reutilizables
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── cards/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── CertificateCard.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── animations/
│   │       └── FadeIn.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   └── Contact.jsx
│   │
│   └── router/
│       └── AppRouter.jsx
│
├── App.jsx
├── main.jsx
└── index.css

```

👤 Perfil Profesional

Los datos del perfil se manejan desde un archivo centralizado:

src/infrastructure/data/profile.data.js

Esto permite:

Reutilización

Facilidad de mantenimiento

Escalabilidad

📬 Contacto

El formulario de contacto está preparado para integrarse con:

EmailJS

SendGrid

Backend propio (Node.js)

Actualmente usa un servicio simulado, fácil de reemplazar.

🌓 Modo Oscuro / Claro

Implementado con CSS Variables

Compatible con todo el sistema

Inputs y textos adaptados correctamente al tema

📸 Secciones Principales

Hero con avatar

Sobre mí

Habilidades

Experiencia (con highlights)

Certificados

Contacto

Footer con redes sociales

📦 Instalación y Uso

# Clonar repositorio

git clone https://github.com/bichozx/mi-portafolio.git

# Instalar dependencias

npm install

# Ejecutar en desarrollo

npm run dev

🧠 Aprendizajes Clave

Arquitectura limpia en proyectos frontend

Manejo avanzado de Tailwind + CSS variables

UI profesional orientada a portafolio

Componentización y escalabilidad

Buenas prácticas en React moderno

📄 Licencia

Proyecto de uso personal y demostrativo.
Todos los derechos reservados © Juan Camilo Giraldo.

🤝 Contacto Profesional

🐙 GitHub: https://github.com/bichozx

💼 LinkedIn: https://www.linkedin.com/in/kmilo-fullstack

✉️ Email: kmilo2021@outlook.com
