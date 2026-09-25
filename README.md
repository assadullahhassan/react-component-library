# Gamut React UI

> A modern, color-driven React component library featuring highly customizable badges, banners components.

[![npm version](https://img.shields.io/badge/npm-v10.x-blue.svg)](https://npmjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)

---

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Components Overview](#-components-overview)
  - [Badge](#1-badge)
  - [Banner](#2-banner)
- [License](#-license)

---

## ✨ Features

- 🎨 **Rich Color Palettes:** Vibrant, accessible color variants for state feedback and UI highlights.
- 📦 **Modular & Tree-Shakable:** Import only the components you need into your bundle.
- ⚡ **Vite:** Fast development build times.

---

## 📦 Installation

Install the package via npm or yarn:

```bash
npm install gamut-react-ui
# or
yarn add gamut-react-ui
```

---

## 🚀 Quick Start

Import and use components directly in your React application:

```jsx
import React from 'react';
import { Badge, Banner } from 'gamut-react-ui';
import "gamut-react-ui/style.css";

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Badge Example */}
      <Badge size="md" variant="success">
        Success Badge
      </Badge>

      {/* Banner Example */}
      <Banner type="success" variant="multiline" title="Notification">
        Congratulations! Your settings have been saved.
      </Banner>

    </div>
  );
}

export default App;
```

---

## 🧩 Components Overview

### 1. Badge

Display status indicators, tags, or counts.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'neutral' \| 'info' \| 'success' \| 'warning' \|'danger' \| 'purple'`| 'neutral' | Sets the variant. |
| `size` | `'sm' \| 'md' \|'lg'`| 'md' | Badge sizes. |
|`type` | `'pill' \| 'square' `| 'square' | The radius corner of a badge. |
| `dot` | `boolean`| false | A dot inside the badge. |
| `children` | `ReactNode` | *required* | The description text inside the badge. |
| `className` | `string` | `''` | Optional custom CSS class. |

```jsx
 <Badge variant="purple"> Purple</Badge>
 <Badge size="md"> Medium</Badge>

 {/* Badge with dot*/}
 <Badge variant="success" dot>Online</Badge>

 {/* pill badge*/}
 <Badge variant="info" type="pill">I'm the pill badge</Badge>

 {/* Long Label */}
 <div style={{ width: 180 }}>
      <Badge>
        This is a very long badge label
      </Badge>
  </div>
```

---

### 2. Banner

Inline banners for singleline or detailed multiline message blocks.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' \| 'warning' \| 'error' \| 'neutral'` | `'success'` | Visual state color theme and status icon. |
| `variant` | `'singleline' \| 'multiline'` | `'singleline'` | Singleline banner or multiline layout with title. |
| `title` | `string` | `undefined` | Header title (primarily used in multiline mode). |
| `children` | `ReactNode` | `undefined` | Message content or description body. |

```jsx
// Singleline banner
<Banner title="Congratulations!" type="success">
</Banner>

// Multiline banner
<Banner title="Attention" type="warning" variant="multiline">
  lorem ipsum dolor sit amet consectetur adipisicing elit.
</Banner>
```

---

## 📄 License

This project is licensed under the MIT License.
