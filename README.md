# Portfolio - Christian Marijanovic

Este es el portfolio personal de **Christian Marijanovic**, Frontend Developer especializado en **React, Next.js, TypeScript y Firebase**. La web está diseñada para mostrar proyectos, stack tecnológico y facilitar contacto para proyectos freelance o trabajo remoto.

---

## 🔹 Tecnologías utilizadas

- **Next.js 16** (con App Router y Turbopack)  
- **React 18**  
- **TypeScript**  
- **Tailwind CSS 3** para diseño responsive y moderno  
- **react-icons** para íconos en Header y ProjectCards  

---

## 🔹 Estructura del proyecto
├─ app/
│ ├─ page.tsx # Página principal con Hero, Stack, Proyectos y Footer
├─ components/
│ ├─ Header.tsx # Header premium con gradiente animado y menú responsive
│ ├─ ProjectCard.tsx # Componente para mostrar proyectos con iconos de copiar credenciales
├─ public/projects/ # Imágenes de los proyectos
├─ styles/ # Estilos globales (Tailwind + configuraciones)
├─ package.json # Dependencias y scripts


---

## 🔹 Componentes principales

### 1. Header

- Gradiente animado en el nombre con efecto “moving gradient”  
- Blur y fondo semi-transparente (`backdrop-blur-md bg-gray-950/80`)  
- Menú responsive con íconos `HiMenu` y `HiX` de `react-icons`  
- Links con hover animado y underline suave  

### 2. Main

- **Hero**: Tipografía grande y moderna con gradiente animado, drop-shadow y espaciado generoso  
- **Stack**: Badges animados, hover con efecto “pop” y scroll horizontal en móviles  
- **Proyectos**: ProjectCards con imagen, descripción, stack, links y botón de copiar credenciales  

### 3. Footer

- Fondo semi-transparente con blur (`bg-gray-950/90 backdrop-blur-sm`)  
- Contacto destacado con hover en el correo electrónico  
- Derechos reservados centrados y discretos  

---

## 🔹 Características destacadas

- Diseño **100% responsive** y moderno  
- **Animaciones sutiles**: gradiente del Hero y badges del Stack  
- **Interactividad**: ProjectCards permiten copiar credenciales de demo fácilmente  
- **Optimización**: Uso de Tailwind para clases compactas y canonical  
- Fácil de extender con nuevos proyectos o secciones  

---

## 🔹 Capturas de pantalla

> Reemplaza las rutas de imagen por tus capturas reales de pantalla  

![Hero](./public/screenshots/hero.png)  
*Hero con gradiente animado y tipografía premium*

![Stack](./public/screenshots/stack.png)  
*Sección de Stack con badges animados*

![Proyectos](./public/screenshots/projects.png)  
*ProjectCards con imágenes, descripción y botones de copiar*

---

## 🔹 Cómo correr el proyecto localmente

1. Clonar el repositorio:

```bash
git clone <REPO_URL>
cd <PROJECT_FOLDER>