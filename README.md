# NaturApp

Aplicación móvil desarrollada con Expo y React Native para la gestión y compra de productos naturales. El proyecto implementa una arquitectura MVVM (Model-View-ViewModel), separando la lógica de negocio, el acceso a datos y la interfaz de usuario para mejorar la mantenibilidad, escalabilidad y reutilización del código.

---

# Características

- Catálogo de productos.
- Visualización del detalle de cada producto.
- Carrito de compras persistente.
- Incremento y decremento de cantidades desde el carrito.
- Historial de pedidos.
- Perfil de usuario persistente.
- Preferencias de usuario mediante AsyncStorage.
- Persistencia local del carrito.
- Persistencia remota mediante Firebase Firestore.
- Navegación mediante Expo Router.

---

# Arquitectura

El proyecto sigue el patrón **MVVM (Model - View - ViewModel)**.

```
                 Firebase Firestore
                        ▲
                        │
                ApiService (Remote)
                        ▲
                        │
                ViewModels (Hooks)
                        ▲
                        │
Views (Expo Router Screens + Components)
                        ▲
                        │
            SQLite + AsyncStorage
```

Cada capa posee responsabilidades claramente diferenciadas.

## Models

Representan las entidades principales del dominio de la aplicación.

- Product
- CartItem
- Order

Los modelos contienen únicamente información relacionada con los datos y pequeñas operaciones asociadas a la entidad.

---

## Views

Las vistas corresponden a las pantallas implementadas mediante Expo Router.

Principales pantallas:

- Inicio
- Carrito
- Pedidos
- Perfil
- Detalle de producto

Las vistas únicamente muestran información y delegan toda la lógica al ViewModel correspondiente.

---

## ViewModels

Los ViewModels encapsulan toda la lógica de negocio y el estado utilizado por la interfaz.

Implementados como hooks personalizados:

- useProducts
- useCart
- useOrders
- useProfile

Cada ViewModel se comunica con los servicios sin que las vistas conozcan detalles de persistencia o almacenamiento.

---

## Services

La capa de servicios abstrae el acceso a las diferentes fuentes de datos.

### ApiService

Gestiona todas las operaciones remotas.

Responsabilidades:

- Obtener productos
- Buscar productos
- Crear pedidos
- Consultar historial de pedidos

---

### Firebase

Implementa la persistencia remota mediante Firestore.

Colecciones utilizadas:

- products
- orders

---

### DatabaseService

Gestiona el almacenamiento local del carrito.

Responsabilidades:

- Agregar productos
- Actualizar cantidades
- Eliminar productos
- Calcular total
- Vaciar carrito

---

### StorageService

Utiliza AsyncStorage para almacenar información persistente del usuario.

Datos almacenados:

- Nombre
- Correo electrónico
- Preferencias
- Tema
- Notificaciones

---

# Persistencia

El proyecto utiliza tres mecanismos de persistencia diferentes.

## Firebase Firestore

Persistencia remota.

Información almacenada:

- Productos
- Pedidos

---

## SQLite

Persistencia local.

Información almacenada:

- Carrito de compras

---

## AsyncStorage

Persistencia de configuración.

Información almacenada:

- Perfil
- Preferencias
- Configuración

---

# Flujo de funcionamiento

## Catálogo

```
Usuario
    │
    ▼
Home Screen
    │
    ▼
useProducts
    │
    ▼
ApiService
    │
    ▼
Firebase Firestore
```

---

## Carrito

```
Usuario
    │
    ▼
Cart Screen
    │
    ▼
useCart
    │
    ▼
DatabaseService
    │
    ▼
SQLite
```

---

## Pedido

```
Usuario
    │
    ▼
Checkout
    │
    ▼
useCart
    │
    ▼
ApiService
    │
    ▼
Firebase
```

---

## Perfil

```
Usuario
    │
    ▼
Profile Screen
    │
    ▼
useProfile
    │
    ▼
StorageService
    │
    ▼
AsyncStorage
```

---

# Estructura del proyecto

```
app/
│
├── (tabs)/
│   ├── home.js
│   ├── cart.js
│   ├── orders.js
│   ├── profile.js
│   └── _layout.tsx
│
├── product/
│   └── [id].js
│
└── index.js

src/
│
├── components/
│
├── data/
│
├── models/
│   ├── Product.js
│   ├── CartItem.js
│   └── Order.js
│
├── services/
│   ├── apiService.js
│   ├── databaseService.js
│   ├── firebase.js
│   └── storageService.js
│
└── viewmodels/
    ├── useProducts.js
    ├── useCart.js
    ├── useOrders.js
    └── useProfile.js
```

---

# Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- Firebase Firestore
- SQLite
- AsyncStorage
- JavaScript

---

# Instalación

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npx expo start
```

Escanear el código QR utilizando Expo Go en un dispositivo Android o iOS.

---

# Requisitos

- Node.js
- npm
- Expo CLI
- Expo Go
- Proyecto de Firebase configurado
- Firestore habilitado

---

# Autores

Proyecto desarrollado como parte del curso de Desarrollo de Aplicaciones Móviles utilizando React Native, Expo y Firebase.
