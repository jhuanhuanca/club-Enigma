# Landing promocional · karaoke.night

Mini sitio **aislado** del proyecto principal. Solo muestra:

- Hero (clon visual del home)
- Catálogo de bebidas
- Salas de karaoke

Todos los botones llevan al **grupo de WhatsApp**.

## Configurar WhatsApp

Edita el enlace en `src/config.ts`:

```ts
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/TU_ENLACE_DE_GRUPO'
```

## Desarrollo

Desde la raíz del proyecto:

```bash
npm run dev:promo
```

Abre `http://localhost:5174`

## Build para producción

```bash
npm run build:promo
```

Los archivos quedan en `promo/dist/`. Súbelos a un subdominio o carpeta aparte (ej. `promo.tudominio.com`).

## Preview del build

```bash
npm run preview:promo
```

## Notas

- No usa vue-router ni comparte rutas con el sitio principal.
- No incluye navbar, footer ni enlaces al sitio completo.
- Pensado para campañas y llenar el grupo de WhatsApp.
