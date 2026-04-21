# Laboratorio 4 - Redes

Sitio de documentacion construido con `Astro` + `Starlight` para centralizar el material del laboratorio 4 de redes. El proyecto organiza las topologias, protocolos, guias en PDF y archivos descargables de apoyo en una sola interfaz navegable.

## Que incluye

- Topologia 1 con practicas de `RIPv1` y `OSPF`
- Topologia 2 con practica de `BGP`
- Topologia 3 con practicas de `RIPng` y `OSPFv3`
- Visor embebido para los PDF del laboratorio
- Descargas de archivos `Packet Tracer`
- Capturas `Wireshark` publicadas para la Topologia 1
- Componentes reutilizables para diagramas, checklists, visor PDF y bloques de descargas

## Stack

- `Astro 6`
- `@astrojs/starlight`
- `sharp`

## Estructura principal

```text
.
|-- public/
|   |-- cisco/
|   |-- pdfs/
|   `-- wireshark/
|-- src/
|   |-- components/
|   |-- content/
|   |   `-- docs/
|   |       |-- material-apoyo/
|   |       |-- topologia1/
|   |       |-- topologia2/
|   |       `-- topologia3/
|   `-- assets/
|-- astro.config.mjs
`-- package.json
```

## Secciones del sitio

### Material de apoyo

La ruta `/material-apoyo/` integra los PDF del laboratorio:

- Entregables
- Guia 1: configuracion de routers Cisco
- Guia 2: enrutamiento dinamico
- Guia 3: direcciones IP
- Guia 4: enrutamiento IPv6

### Topologia 1

Incluye resumen general, tabla de direccionamiento, comandos utiles, diagrama, archivos `.pkt` y capturas `.pcap` para:

- `RIPv1`
- `OSPF`

### Topologia 2

Incluye resumen general, sistemas autonomos, tabla de direccionamiento, comandos utiles y archivo `.pkt` para:

- `BGP`

Actualmente no hay capturas de Wireshark publicadas para esta topologia.

### Topologia 3

Incluye resumen general, direccionamiento `IPv6`, comandos utiles y archivos `.pkt` para:

- `RIPng`
- `OSPFv3`

Actualmente no hay capturas de Wireshark publicadas para esta topologia.

## Desarrollo local

Instale dependencias:

```bash
pnpm install
```

Inicie el entorno de desarrollo:

```bash
pnpm dev
```

El sitio queda disponible por defecto en `http://localhost:4321`.

## Scripts

| Comando | Descripcion |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm start` | Alias de `pnpm dev` |
| `pnpm build` | Genera la version de produccion en `dist/` |
| `pnpm preview` | Sirve localmente la build generada |
| `pnpm astro` | Ejecuta comandos del CLI de Astro |

## Configuracion del sitio

- El titulo del portal es `Laboratorio 4 - Redes`
- La ruta raiz `/` redirige a `/topologia1/`
- La navegacion lateral esta definida en [astro.config.mjs](/C:/Users/Valer/Documents/Redes/Lab%204/docs-redes-lab4/astro.config.mjs)

## Contenido del proyecto

- La documentacion vive en `src/content/docs/`
- Los componentes reutilizables estan en `src/components/`
- Los archivos publicos descargables viven en `public/`

## Objetivo

Este repositorio sirve como portal de apoyo para la practica, facilitando la consulta del material teorico y el acceso a los archivos necesarios para configurar, probar y verificar cada topologia del laboratorio.
