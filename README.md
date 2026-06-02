# CV Interactivo

Un curriculum vitae interactivo construido con React, TypeScript y Framer Motion. Presenta un diseño con animaciones suaves, múltiples temas (Light, Dark, Cyberpunk) y totalmente responsivo.

## 📋 Cómo se Realizó Este Proyecto

**Este proyecto fue desarrollado casi en su totalidad utilizando prompts a Claude Haiku 4.5**, un modelo de IA especializado en desarrollo rápido.

## 🔄 Fork y Adaptación

**¡Eres libre de crear un fork de este proyecto para adaptarlo a tu propio curriculum!**

## 🎨 Personalización

### Cambiar Datos del CV
Edita los datos en los componentes individuales (`src/components/About.tsx`, `Experience.tsx`, etc.)

### Añadir Traducciones
Actualiza los archivos JSON en `src/i18n/` (en.json, es.json)

### Modificar Temas
Los temas se configuran en `src/index.css` y `src/contexts/ThemeContext.tsx`

### Ajustar Animaciones
Las animaciones están definidas en `src/utils/animations.ts` y pueden ser modificadas

## 🚀 Características Principales

- **Temas Dinámicos**: Cambia entre Light, Dark y Cyberpunk con estilo neon
- **Animaciones Suaves**: Parallax scroll, staggered animations, y transiciones fluidas
- **Glassmorphism**: Diseño moderno con efectos frosted glass y backdrop blur
- **Floating Action Button**: Formulario de contacto rápido accesible desde cualquier lugar
- **Background Animado**: Blobs flotantes con líneas conectadas dinámicas
- **Fully Responsive**: Diseño adaptable a todos los dispositivos
- **Internacionalización (i18n)**: Soporte para múltiples idiomas
- **PDF Export**: Descarga tu CV como PDF
- **Sidebar Futurista**: Navegación con efectos glassmorphism y glow

## 🛠️ Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/CV.git
cd CV

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173/` (o el puerto que te indique)

### Build para Producción

```bash
npm run build
```

### Preview de Build

```bash
npm run preview
```

### Proceso de Desarrollo

1. **Fase 1: Estructura Base** - Creación de componentes React y configuración inicial
2. **Fase 2: Tier 1 - Visual (Glassmorphism)** - Effectos frosted glass, gradientes animados, sombras mejoradas
3. **Fase 3: Tier 2 - Interactivas (Parallax)** - Parallax scroll, animaciones de fondo, transiciones suaves
4. **Fase 4: Tier 3 - Design System** - Tailwind config extendido, tokens de diseño, CSS variables
5. **Fase 5: Tier 4 - Advanced Effects** - Blur stacking, text shimmer, scroll-linked animations
6. **Fase 6: Animaciones Staggered** - Entrada secuencial de elementos en listas
7. **Fase 7: Sidebar Futurista** - Rediseño con glassmorphism y efectos neon
8. **Fase 8: Optimización** - Ajuste de estilos y mejora de UX

### Tecnologías Utilizadas

#### Frontend
- **React 19** - Framework principal
- **TypeScript** - Type safety y mejor DX
- **Vite** - Build tool rápido y eficiente
- **Framer Motion** - Animaciones y micro-interacciones
- **Tailwind CSS** - Utilidades de estilos

#### Librerías Adicionales
- **lucide-react** - Iconos vectoriales
- **react-i18next** - Internacionalización (i18n)
- **html2pdf.js** - Generación de PDF
- **react-intersection-observer** - Detección de visibilidad
- **react-scroll** - Scroll suave

#### Herramientas
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad CSS automática

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Courses.tsx
│   ├── Certificates.tsx
│   ├── Languages.tsx
│   ├── FAB.tsx         # Floating Action Button
│   ├── ContactModal.tsx
│   ├── AnimatedBackground.tsx
│   ├── ConnectingLines.tsx
│   ├── ParallaxSection.tsx
│   └── ...
├── contexts/           # React Context (Theme, i18n)
├── utils/              # Utilidades y animaciones
├── i18n/               # Archivos de traducción
├── assets/             # Imágenes e íconos
├── App.tsx             # Componente raíz
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

Para hacerlo:

1. **Fork el repositorio** en GitHub
2. **Clona tu fork** localmente
3. **Personaliza** los datos, colores y contenido
4. **Despliega** en Vercel, Netlify o tu hosting favorito

Simplemente cambia:
- Nombre y datos personales en `About.tsx`
- Experiencia laboral en `Experience.tsx`
- Educación en `Education.tsx`
- Skills, cursos, certificados, idiomas en sus respectivos archivos
- Colores de tema en `index.css`
- Contacto en `FAB.tsx` y `ContactModal.tsx`

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT. Siéntete libre de usarlo como base para tu propio CV.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes mejoras o sugerencias, abre un issue o pull request.

## 📧 Contacto

- **Email**: cesar.santiago.nunhez@gmail.com
- **GitHub**: [csnunhez2](https://github.com/csnunhez2)
- **LinkedIn**: [csnunhez](https://www.linkedin.com/in/csnunhez/)

---

**Construido con ❤️ usando Claude Haiku 4.5**
