# Tienda - El Beagle | React Project

Este proyecto es una aplicación construida con **React** que incluye características como manejo de un carrito de compras, estilos responsivos con BEM y Bootstrap, un formulario de contacto, integración de Google Fonts, y más. Además, está preparado para desplegarse en servicios como **Vercel** y otros hostings populares.

---

## **Contenido**
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Estilos y UI](#estilos-y-ui)
- [Despliegue](#despliegue)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## **Instalación**

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm start
```
El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

### Construir para producción
```bash
npm run build
```
Generará la carpeta `build/` con los archivos listos para producción.

---

## **Estructura del Proyecto**

```
├── public/          # Archivos públicos
├── src/             # Código fuente
│   ├── components/  # Componentes reutilizables
│   ├── context/     # Context API (estado global)
│   ├── assets/      # Archivos CSS e IMG personalizados
│       ├── css/     # Archivos CSS organizados con BEM
│       ├── img/     # Archivos Images para páginas
│   ├── App.js       # Componente principal
│   └── index.js     # Punto de entrada
├── .env             # Variables de entorno
├── package.json     # Dependencias y scripts
└── README.md        # Documentación
```

---

## **Funcionalidades**

### 1. **Carrito de Compras**
- **Context API** para el manejo del estado global del carrito.
- Funciones como agregar productos y limpiar el carrito.
- Visualización dinámica de la cantidad de ítems en el navbar.

### 2. **Formulario de Contacto**
- Componente de formulario con campos básicos (nombre, email, mensaje).
- Estilizado siguiendo la metodología BEM.
- Diseño responsivo compatible con dispositivos móviles.

### 3. **Imágenes y Fuentes**
- Uso de imágenes locales y fuentes de Google Fonts.
- Configuración sencilla para agregar nuevos recursos.

---

## **Estilos y UI**

### 1. **Metodología BEM**
El proyecto utiliza BEM (Block, Element, Modifier) para mantener un CSS limpio y escalable.
Ejemplo:
```html
<div class="card">
  <h2 class="card__title">Título</h2>
  <p class="card__text">Texto descriptivo</p>
</div>
```

### 2. **Bootstrap Icons**
Iconos integrados con Bootstrap:
```html
<i class="bi bi-cart"></i>
```

### 3. **Responsividad**
Diseño completamente adaptado a dispositivos móviles utilizando Flexbox y clases de Bootstrap.

---

## **Despliegue**

### **En Vercel**
1. Ejecutar `npm run build`.
2. Subir el proyecto a un repositorio (GitHub, GitLab, etc.).
3. Conectar el repositorio en [Vercel](https://vercel.com/) y desplegar.

### **En otros servicios (ejemplo: Netlify)**
1. Generar el build con `npm run build`.
2. Subir la carpeta `build/` arrastrándola al panel de Netlify.
3. Configurar un archivo `_redirects` si usas React Router.

### **En AWS S3**
1. Crear un bucket S3 y habilitar el hosting estático.
2. Subir los archivos de la carpeta `build/` al bucket.
3. Opcional: Configurar CloudFront para un dominio personalizado y HTTPS.

---

## **Tecnologías Utilizadas**
- **React**: Biblioteca principal para la construcción de interfaces.
- **Bootstrap**: Framework CSS para estilos rápidos y responsivos.
- **Context API**: Manejo de estado global.
- **Google Fonts**: Fuentes personalizadas.
- **Vercel**: Plataformas de hosting.

---

## **Contribuir**
Si deseas contribuir a este proyecto:
1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m 'Agrega nueva funcionalidad'`.
4. Envía un pull request.

---

¡Gracias por usar este proyecto! 🎉
