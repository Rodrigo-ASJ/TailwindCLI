[![Prueba de Git Hub Actions](https://github.com/Rodrigo-ASJ/TailwindCLI/actions/workflows/node.js.yml/badge.svg)](https://github.com/Rodrigo-ASJ/TailwindCLI/actions/workflows/node.js.yml)

# Proyecto educativo para experimentar con TailWindCSS
Lenguajes y tecnologías utlizados: HTML, JavaScript(Vanilla), CSS(TailWind)

---
## Cómo instalar Tailwind CSS

Tailwind CSS es un framework que está hecho en JavaScript y es distribuido como un paquete de NPM. Esto quiere decir que, en principio, necesitas tener Node.js y NPM instalados en tu equipo para instalar Tailwind.

### 1. Crear el archivo «package.json»:
`npm init -y`

### 2. Instalar Tailwind en desarrollo:
`npm install -D tailwindcss`

### 3. Crear el archivo «tailwind.config.js»:
`npx tailwindcss init`

### 4. Abre el archivo «tailwind.config.js» y especifica el directorio de trabajo:
`content: ["./src/**/*.{html,js}"],`

Con esto, estás configurando Tailwind para que analice todos los archivos .html y .js que estén dentro de la carpeta «src» y los procese para generar las clases CSS de Tailwind necesarias.

### 5. Crea dentro de la carpeta «src» un archivo «input.css» y pega en él el siguiente código:

`   @tailwind base;
    @tailwind components;
    @tailwind utilities;
`




Esto sirve para importar los estilos predefinidos de Tailwind en tu proyecto.

### 6. Ejecuta el siguiente comando en la consola o añádelo al script en el «package.json»:
`npx tailwindcss -i ./src/input.css -o ./docs/css/output.css --watch`

Esto sirve para compilar tu CSS, es decir, a partir de un archivo CSS de entrada se generará un archivo CSS de salida que estará optimizado y solo con las clases que hayas utilizado. De esta manera, evitas que se carguen siempre todas las clases de Tailwind CSS y consigues optimizar los archivos de tu web.

El archivo «output.css» resultante se genera dentro de una carpeta «dist». Si quieres que se genere en otro sitio, simplemente indica la ruta que quieras en el comando anterior. Este archivo CSS es el que deberás subir a tu alojamiento web para utilizarlo en la versión final de tu proyecto.

La instrucción «–watch» sirve para que Tailwind monitorice los cambios que vayas realizando. De esta manera, cada vez que modifiques algo y guardes los cambios, el CSS se compilará automáticamente.