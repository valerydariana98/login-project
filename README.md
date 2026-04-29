# Login Project

Sistema de autenticación básico desarrollado en equipo para practicar Git y desarrollo web.

---

## Equipo

* Valery 
* Camila 
* Ignacio

---

## Objetivo

Construir una aplicación web que permita:

* Registrar usuarios
* Iniciar sesión
* Mantener sesión activa
* Mostrar información del usuario autenticado
* Cerrar sesión

---

## Arquitectura

El proyecto utiliza una arquitectura **Frontend + Backend as a Service (BaaS)**.

### Frontend

Encargado de:

* Interfaz de usuario (login, register, welcome)
* Captura de datos
* Manejo de eventos

### Backend (Firebase)

Encargado de:

* Autenticación de usuarios
* Gestión de sesiones
* Seguridad de credenciales

---

## Flujo de la aplicación

1. Usuario se registra → Firebase crea cuenta
2. Usuario inicia sesión → Firebase valida credenciales
3. Usuario autenticado → se redirige a welcome
4. Welcome muestra información del usuario
5. Usuario puede ver sus datos o cerrar sesión

---

## Tecnologías utilizadas

### Frontend

* HTML
* CSS
* JavaScript

### Backend (BaaS)

* Firebase (Authentication)

### Herramientas

* Git
* GitHub

---

## Estructura del proyecto

```bash
login-project/
│
├── index.html            # Login
├── register.html
├── welcome.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── firebase.js      # Configuración Firebase
│   ├── auth.js          # Funciones auth (login, register, logout)
│   ├── login.js
│   ├── register.js
│   └── welcome.js
│
└── assets/
```

---

## Funcionalidades

* Registro de usuarios
* Inicio de sesión
* Persistencia de sesión
* Visualización de datos del usuario
* Cierre de sesión
* Redirección entre páginas

---

## Flujo de trabajo con Git

### Ramas principales

* `main` → versión estable
* `dev` → desarrollo del proyecto

---

### Ramas de trabajo

Cada integrante trabaja en su propia rama:

* `feature/register`
* `feature/login`
* `feature/auth-welcome`
* `chore/*` → configuración

---

### Convención de commits

Se utilizan prefijos para mantener orden:

* `feat:` → nueva funcionalidad
* `fix:` → corrección de errores
* `style:` → cambios visuales
* `refactor:` → mejora de código
* `chore:` → configuración

---
