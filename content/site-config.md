# Site Config — AmasamosWeb

## Objetivo
Crear un sitio web estático (HTML/CSS/JS) compatible con GitHub Pages, usando como fuente de contenido los archivos en /content y las imágenes en /assets.

## Identidad y tono
- Marca de Pan: Amasar Institucional (panaderia para restaurantes)
- Marca de Pizza: Pizzamos (pizzería y menú digital)
- Tono: limpio, artesanal-premium, moderno, cercano
- Idioma: Español

## Navegación (menú)
1. Home
2. Pizzamos
3. Reservas (Google Forms embebido)
4. Amasar Institucional (dropdown)
   - Línea Standard
   - Línea Premium
5.Contáctanos

## Páginas requeridas
- / (Home)
- /pizzamos
- /reservas
- /contacto
- /amasar Institucional
- /amasar/standard
- /amasar/premium

## Requerimientos funcionales
- Sitio responsive (mobile-first).
- Botón flotante de WhatsApp (si hay número, si no, dejar placeholder).
- Botón de “Reservar” en Pizzamos que lleve a /reservas.
- En /reservas: incrustar Google Forms (iframe) o enlace directo (si iframe falla).
- Enlaces claros a Instagram (placeholder si no está).

## SEO básico
- Un H1 por página.
- Title y meta description por página.
- Open Graph básico (título + descripción).
- Alt text en imágenes.

## Estilo visual
- Diseño minimalista con espacios en blanco.
- Tipografía sans-serif moderna (system font o Google Font).
- Secciones tipo “cards” para productos/líneas.
- Colores: dejar variables CSS (sin decidir colores exactos todavía).

## Estructura de salida esperada (generada por Codex)
- index.html
- pizzamos.html
- reservas.html
- contacto.html
- amasar/index.html (o amasar.html)
- amasar/standard.html
- amasar/premium.html
- assets/ (reusar tus imágenes actuales)
- styles.css (o /css/styles.css)
- script.js (opcional)

## Notas importantes
- NO cambiar el dominio todavía. Publicar primero en:
  https://hal1f4x.github.io/AmasamosWeb
- Mantener el sitio actual (Google Sites) activo hasta que validemos la nueva web.
