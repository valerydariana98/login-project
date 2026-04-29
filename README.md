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

---

## Arquitectura

El proyecto utiliza una arquitectura **Frontend + Backend as a Service (BaaS)**.

### Frontend

Encargado de:

* Interfaz de usuario (login, register, welcome)
* Captura de datos
* Manejo de eventos

### Backend (Firebase)

Firebase

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
├── login.html
├── register.html
├── welcome.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── firebase.js
│   ├── auth.js
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
* Manejo de sesión
* Redirección entre páginas
* Visualización del usuario autenticado

---

## Flujo de trabajo con Git

* `main` → versión estable
* `dev` → desarrollo

