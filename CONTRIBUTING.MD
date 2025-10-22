
# 🛠️ Guía de Contribución

Este proyecto sigue una estructura de Git robusta con ramas organizadas y convenciones estrictas de commits para mantener un historial limpio, claro y automatizable.

---

## 🌳 Estructura de Ramas

Este repositorio sigue un modelo basado en **Git Flow**, con algunas adaptaciones.

### Ramas principales

- `master`: Rama de producción, siempre estable.
- `develop`: Rama de integración y desarrollo activo.

### Ramas de soporte

- `feature/*`: Nuevas funcionalidades.
- `release/*`: Preparación de nuevas versiones.
- `hotfix/*`: Correcciones urgentes en producción.
- `fix/*`: Correcciones no críticas que van al flujo normal de desarrollo.

### Ejemplos

```bash
feature/login-page
feature/add-payment-gateway
release/v1.3.0
hotfix/fix-login-bug
fix/update-profile-picture
````

---

## 🚀 Flujo de Trabajo

### Funcionalidad nueva

```bash
# Crear una rama feature desde develop
git checkout develop
git checkout -b feature/nombre

# Hacer cambios, commitear
git commit -m "feat(area): descripción"

# Push y crear un Pull Request a develop
```

### Preparar una versión

```bash
# Desde develop
git checkout -b release/vX.Y.Z

# Ajustes finales, QA, changelog, versión

# Merge a main (para producción) y a develop (para sincronizar)
# Crear tag
git tag vX.Y.Z
git push origin vX.Y.Z
```

### Hotfix en producción

```bash
# Desde main
git checkout -b hotfix/bug-crítico

# Corrección rápida
git commit -m "fix(area): descripción del fix urgente"

# Merge a main y a develop
```

---

## ✅ Convención de Commits

Utilizamos el estándar [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```bash
<tipo>(<área opcional>): <descripción corta>
```

### Tipos comunes

| Tipo       | Descripción                           |
| ---------- | ------------------------------------- |
| `feat`     | Nueva funcionalidad                   |
| `fix`      | Corrección de errores                 |
| `docs`     | Cambios en la documentación           |
| `style`    | Cambios de formato (sin lógica)       |
| `refactor` | Refactorización de código             |
| `test`     | Agregar o modificar tests             |
| `chore`    | Tareas de mantenimiento/configuración |

### Ejemplos

```bash
feat(auth): agregar autenticación con JWT
fix(api): corregir error en el endpoint de usuarios
docs(readme): agregar instrucciones de uso
style(ui): corregir identación en el formulario
refactor(user-service): extraer validación de datos
```

---

## 🔐 Reglas de Protecciones en GitHub

* 🔒 `main` y `develop` están protegidas: solo se puede hacer merge vía Pull Request.
* ✅ Revisión de al menos 1 persona antes de mergear.
* 🧪 Tests automáticos deben pasar (si existen).
* 🚫 No hacer push directo a `main` ni `develop`.

---

## 📦 Herramientas Sugeridas

Puedes integrar herramientas para automatizar y validar:

* [`husky`](https://github.com/typicode/husky): para ejecutar hooks (como validaciones) antes de commits o push.
* [`commitlint`](https://github.com/conventional-changelog/commitlint): para validar mensajes de commit.
* [`semantic-release`](https://github.com/semantic-release/semantic-release): para generar versiones y changelogs automáticos desde tus commits.

---

## 🤝 Cómo contribuir

1. Haz fork del repositorio.
2. Crea tu rama (`feature/nombre`, `fix/nombre`, etc).
3. Commits siguiendo la convención.
4. Push y abre un Pull Request contra `develop`.
5. Espera revisión y aprobación.

---

Gracias por contribuir 🚀


