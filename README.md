# Gamut React UI

> A modern, color-driven React component library featuring highly customizable badges, alerts, tooltips, popups, and card components.

[![npm version](https://img.shields.io/badge/npm-v11.17.0-blue.svg)](https://npmjs.com)
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
  - [Alert / Banner](#2-alert--banner)
  - [Tooltip](#3-tooltip)
  - [Toast / Popup](#4-toast--popup)
  - [Card](#5-card)
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
import { Badge, Banner, Card, Tooltip, Toast } from 'gamut-react-ui';

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Badge Example */}
      <Badge color="green" variant="pill">
        Success Badge
      </Badge>

      {/* Banner Example */}
      <Banner type="success" variant="singleline">
        Congratulations! Your settings have been saved.
      </Banner>

      {/* Card Component */}
      <Card title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
      </Card>
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
| `variant` | `'square' \| 'pill'` | `'square'` | Sets the border-radius shape. |
| `color` | `'gray' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'pink'` | `'gray'` | Applies background and text color theme. |
| `children` | `ReactNode` | *required* | The label text or icon inside the badge. |
| `className` | `string` | `''` | Optional custom CSS class. |

```jsx
<Badge color="blue" variant="square">Badge</Badge>
<Badge color="pink" variant="pill">Pill Badge</Badge>
```

---

### 2. Alert / Banner

Inline alert banners for singleline notifications or detailed multiline message blocks.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' \| 'warning' \| 'error' \| 'neutral'` | `'neutral'` | Visual state color theme and status icon. |
| `variant` | `'singleline' \| 'multiline'` | `'singleline'` | Singleline banner or multiline layout with title. |
| `title` | `string` | `undefined` | Header title (primarily used in multiline mode). |
| `children` | `ReactNode` | `undefined` | Message content or description body. |

```jsx
// Single-line alert
<Banner type="success" variant="singleline">
  Congratulations!
</Banner>

// Multi-line alert
<Banner title="Attention" type="warning" variant="multiline">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</Banner>
```

---

### 3. Tooltip

Contextual popup cards with a directional caret indicator, close buttons, and support for solid/light color themes.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | `'dark' \| 'white' \| 'blue' \| 'blue-light' \| 'purple' \| 'pink-light' \| 'green' \| 'green-light'` | `'dark'` | Color palette scheme. |
| `title` | `string` | `undefined` | Bold heading text. |
| `icon` | `ReactNode` | `undefined` | Leading icon element. |
| `onClose` | `function` | `undefined` | Triggered when clicking the close button. |
| `children` | `ReactNode` | `undefined` | Tooltip body text. |

```jsx

const ArchiveIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="16" height="4" rx="1" />
    <path d="M4 7v9a2 2 0 002 2h8a2 2 0 002-2V7" />
    <path d="M8 11h4" />
  </svg>
);

<Tooltip 
  icon={<ArchiveIcon />} 
  theme="dark" 
  title="Archive notes"
  onClose={() => handleClose()}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</Tooltip>
```

---

### 4. Toast / Popup

Floating notification popups designed for state feedback (success, warning, information, error).

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' \| 'warning' \| 'information' \| 'error'` | State variant. |
| `title` | `string` | `undefined` | Title text. |
| `children` | `ReactNode` | `undefined` | Description or action message. |

```jsx
<Toast title="Success" type="success">
  Your work has been saved.
</Toast>
```

---

### 5. Card

A feature display card with a floating top badge icon, clean typography, and interactive hover elevation.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `<DefaultIcon />` | Overlapping icon badge displayed at top center. |
| `title` | `string` | `undefined` | Main heading title. |
| `isHovered` | `boolean` | `false` | A boolean for managing hovered state in card . |
| `children` | `ReactNode` | `undefined` | Main body content/description. |

```jsx
<Card title="Easy Deployment">
  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
</Card>

<Card title="Easy Deployment" isHovered={true}>
  I am the hovered Card!.
</Card>
```

---

## 📄 License

This project is licensed under the MIT License.
