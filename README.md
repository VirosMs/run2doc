# Electron + React + TypeScript + Vite

Este repositorio proporciona una plantilla para crear aplicaciones de escritorio multiplataforma utilizando Electron, con una interfaz de usuario creada con React, TypeScript y Vite.

## Cómo usar esta plantilla

Puedes usar esta plantilla para iniciar tu propio proyecto.

### Opción 1: Usar la plantilla de GitHub (Recomendado)

1.  Haz clic en el botón **"Use this template"** en la parte superior de la página de este repositorio en GitHub.
2.  Dale un nombre a tu nuevo repositorio y créalo.
3.  Clona tu nuevo repositorio:
    ```bash
    git clone https://github.com/TU_USUARIO/TU_NUEVO_REPOSITORIO.git
    cd TU_NUEVO_REPOSITORIO
    ```
4.  Instala las dependencias:
    ```bash
    npm install
    ```
5.  Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    ```

### Opción 2: Clonación Manual

1.  Clona el repositorio. Puedes cambiar `mi-app` por el nombre que prefieras para tu proyecto:
    ```bash
    git clone https://github.com/VirosMs/reactElectron.git mi-app
    cd mi-app
    ```
2.  Elimina el historial de Git y reinicializa el repositorio.

    En **Linux/macOS**:
    ```bash
    rm -rf .git
    ```
    En **Windows (PowerShell)**:
    ```powershell
    Remove-Item -Recurse -Force .git
    ```
    Luego, continúa con:
    ```bash
    git init
    git add .
    git commit -m "Commit inicial desde plantilla"
    ```

3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    ```

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

*   **Backend (Electron):** El código del proceso principal de Electron se encuentra en `src/electron`.
    *   `main.ts`: El punto de entrada principal para el proceso de Electron.
*   **Frontend (React):** La interfaz de usuario de React se encuentra en `src/ui`.
    *   `main.tsx`: El punto de entrada para la aplicación de React.
    *   `App.tsx`: El componente principal de la aplicación React.

## Scripts Disponibles

En el archivo `package.json`, encontrarás varios scripts para ayudarte con el desarrollo y la compilación de tu aplicación:

*   `"dev"`: Inicia la aplicación en modo de desarrollo. Ejecuta simultáneamente el frontend de React con Vite y el proceso principal de Electron.
*   `"dev:react"`: Inicia el servidor de desarrollo de Vite para el frontend de React.
*   `"dev:electron"`: transpila el código de Electron y lo ejecuta en modo de desarrollo.
*   `"build"`: Compila el código de TypeScript y el frontend de React para producción.
*   `"lint"`: Ejecuta ESLint para analizar el código en busca de problemas.
*   `"preview"`: Inicia un servidor de vista previa local para el frontend de React compilado.
*   `"transpile:electron"`: transpila el código de TypeScript de Electron.
*   `"dist:mac"`: Compila y empaqueta la aplicación para macOS.
*   `"dist:win"`: Compila y empaqueta la aplicación para Windows.
*   `"dist:linux"`: Compila y empaqueta la aplicación para Linux.