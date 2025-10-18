# 🩺 RIMAC - Seguro Salud Flexible

Aplicación web desarrollada con **React + TypeScript + TailwindCSS**, que permite a los usuarios visualizar, comparar y seleccionar planes de salud personalizados según su edad o la de un tercero.  
El proyecto replica una experiencia completa de cotización, validación y selección de planes médicos, con un enfoque en **usabilidad, diseño moderno y validaciones precisas**.

---

## 🚀 Demo en Producción

🔗 **[Ver Proyecto Desplegado en Netlify](https://reto-esteban-rodas.netlify.app/)**

---

## 📋 Descripción General

El sistema permite ingresar los datos del usuario (tipo y número de documento, celular) y, tras ser validado, acceder a los planes disponibles.  
También se puede cotizar un seguro para otra persona y revisar un **resumen final del plan elegido**, mostrando la información detallada del usuario y el costo del plan.

### Validaciones implementadas

- Documento:
  - **DNI:** máximo 8 caracteres.
  - **RUC:** máximo 10 caracteres.
- **Celular:** admite hasta 20 dígitos, pero requiere entre 9 y 10 válidos.
- **Checkboxes obligatorios:** ambos deben estar marcados.
- **Validación de usuario existente:** solo permite continuar si el usuario coincide con la información almacenada en la API simulada.

#### 🔑 Datos válidos para prueba

- DNI: `30216147`
- CEL: `5130216147`

---

## 🧠 Tecnologías Utilizadas

- ⚛️ **React** (con Hooks y TypeScript)
- 🎨 **TailwindCSS** (diseño responsive + dark mode)
- 🧭 **React Router** (manejo de rutas)
- 💾 **localStorage** (persistencia de datos)
- ☁️ **Netlify** (despliegue)

---

## 🧩 Arquitectura y Componentes

La aplicación se estructura mediante una arquitectura modular y reutilizable:

- `NavBar` – Encabezado con modo oscuro.
- `LandingPage` – Pantalla principal con formulario de validación.
- `PlansPage` – Muestra los planes recomendados según la selección.
- `SummaryPage` – Resumen del plan elegido y datos del usuario.
- `Modal`, `Steps`, `ReturnButton`, etc. – Componentes reutilizables para UX y consistencia visual.
- `Footer` – Pie de página adaptativo y responsivo.

---

## 🧱 Decisiones Técnicas

- Uso de **localStorage** para evitar solicitudes repetidas a la API.
- Manejo local de los planes para optimizar el rendimiento.
- **TailwindCSS** elegido por su rapidez de desarrollo y flexibilidad mobile-first.
- Fuentes personalizadas **BR Sonoma** y **Lato** agregadas mediante `@font-face` y configuradas en `tailwind.config.js`.

---

## 🔧 Retos y Soluciones

- **Carga de imágenes en Netlify:**  
  Se corrigieron rutas moviendo los archivos a `public/` para compatibilidad con Vite en producción.
- **Fuentes personalizadas:**  
  Se configuraron manualmente en CSS y Tailwind para garantizar compatibilidad entre navegadores.
- **Labels flotantes en inputs:**  
  Se implementaron con `peer` y `placeholder=" "` para lograr una experiencia visual fluida sin librerías externas.

---

## 🧰 Buenas Prácticas

- Componentes tipados con TypeScript.
- Validaciones manuales con expresiones regulares.
- Estructura clara y semántica.
- Diseño responsive y accesible (uso de `alt`, `labels`, y buen contraste).
- Código modular y reutilizable.

---

## 🧾 Sustentación del Proyecto

El uso de **React + TypeScript + TailwindCSS** permitió mantener una estructura clara, eficiente y fácil de mantener, priorizando la calidad visual y la estabilidad funcional.

---

## 👨‍💻 Autor

**Esteban Rodas**  
Software Engineer | Frontend & Backend Developer  
📧 [esteban16.rodas@gmail.com](mailto:esteban16.rodas@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/esteban-rodas-ramos/)

---
