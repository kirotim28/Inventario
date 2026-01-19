# Sistema de Gestión de Activos e Inventario - Frontend

Interfaz de usuario moderna y responsive para el Sistema de Gestión de Activos e Inventario, desarrollada con React y Tailwind CSS.

## 🎨 Características

### Componentes Principales

1. **Sidebar de Navegación (Izquierda)**
   - Dashboard
   - Inventario (R6)
   - Préstamos (R7)
   - Reportar Falla (R14)
   - Usuarios (R5)

2. **Header Superior**
   - Buscador Multicriterio (R11) - Input con icono de lupa
   - Perfil de Usuario con opción "Cerrar sesión" (R3)

3. **KPIs (Indicadores)**
   - Total Activos (Azul)
   - Disponibles (Verde)
   - En Mantenimiento (Amarillo)
   - Dados de Baja (Rojo)

4. **Tabla de Activos**
   - Nombre del Activo
   - Número de Serie
   - Categoría
   - Estado (con badges de colores)
   - Ubicación
   - Acciones (Dropdown con opciones)
     - Editar perfil del activo
     - Solicitar Préstamo

5. **Modal de Reporte de Falla (R14)**
   - Selección de Activo
   - Descripción del Problema
   - Nivel de Urgencia (Baja, Media, Alta, Crítica)

## 🎨 Diseño

### Paleta de Colores
- **Fondo Principal**: `#f9fafb` (Gris muy claro)
- **Tarjetas**: Blanco con sombras suaves
- **KPI Verde**: Disponibles
- **KPI Amarillo**: En Mantenimiento
- **KPI Rojo**: Dados de Baja

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Alternativa**: Sans-serif estándar

### Iconografía
- **Librería**: Lucide-React
- Iconos modernos y consistentes en toda la interfaz

## 🚀 Tecnologías

- **React** v18 - Framework de JavaScript
- **Tailwind CSS** v3 - Framework de CSS utilitario
- **Lucide-React** - Librería de iconos
- **Create React App** - Configuración inicial

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build
```

## 🌐 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo en http://localhost:3000
- `npm run build` - Crea la versión de producción optimizada
- `npm test` - Ejecuta los tests
- `npm run eject` - Expone la configuración (irreversible)

## 📱 Responsive Design

La interfaz es 100% responsive y se adapta a:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)
- 🖥️ Pantallas grandes (1920px+)

## 🔧 Estructura del Proyecto

```
frontend/
├── public/
│   ├── index.html          # HTML principal con Google Fonts
│   └── ...
├── src/
│   ├── Dashboard.js        # Componente principal del dashboard
│   ├── App.js             # Componente raíz
│   ├── App.css            # Estilos globales
│   ├── index.css          # Tailwind CSS y estilos base
│   └── index.js           # Punto de entrada
├── tailwind.config.js     # Configuración de Tailwind
├── postcss.config.js      # Configuración de PostCSS
└── package.json           # Dependencias y scripts
```

## ✨ Características Implementadas

- ✅ Layout con sidebar fijo y header superior
- ✅ 4 tarjetas KPI con colores distintivos
- ✅ Tabla de activos con datos de ejemplo
- ✅ Badges de estado con colores semánticos
- ✅ Dropdown de acciones por fila
- ✅ Modal de reporte de falla con formulario completo
- ✅ Buscador multicriterio en el header
- ✅ Perfil de usuario con opción de logout
- ✅ Diseño 100% responsive
- ✅ Iconografía consistente (Lucide-React)
- ✅ Fuente Inter de Google Fonts

## 🎯 Próximos Pasos (Backend Integration)

Para conectar con un backend real:

1. Reemplazar datos de ejemplo por llamadas API
2. Implementar autenticación real
3. Conectar el buscador con endpoints de búsqueda
4. Implementar CRUD completo de activos
5. Agregar gestión de préstamos
6. Implementar sistema de reportes

## 📄 Licencia

Este proyecto es parte del Sistema de Gestión de Activos e Inventario.
