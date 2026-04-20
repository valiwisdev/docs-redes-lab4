---
title: Topologia 2 - BGP
description: Esquema general, sistemas autonomos y tabla de direccionamiento para la topologia 2.
sidebar:
  label: Resumen
---

## Descripcion

En esta topologia:

- `R2` actua como router central.
- `R2` se conecta con `R1`, `R3` y una LAN propia.
- Se manejan tres sistemas autonomos: `ASN 100`, `ASN 200` y `ASN 300`.

## Redes

- LAN `ASN 100`: `192.168.10.0/24`
- Enlace `R1 - R2`: `192.168.30.0/24`
- Enlace `R2 - R3`: `192.168.40.0/24`
- LAN `ASN 200`: `192.168.60.0/24`
- LAN `ASN 300`: `192.168.50.0/24`

## Tabla de IPs

| Dispositivo | Interfaz | IP | Mascara / Prefijo | Gateway |
| --- | --- | --- | --- | --- |
| R1 | G0/0 | 192.168.10.1 | 255.255.255.0 | N/A |
| R1 | G0/1 | 192.168.30.3 | 255.255.255.0 | N/A |
| R2 | G0/0 | 192.168.30.23 | 255.255.255.0 | N/A |
| R2 | G0/1 | 192.168.40.23 | 255.255.255.0 | N/A |
| R2 | G0/2 | 192.168.60.1 | 255.255.255.0 | N/A |
| R3 | G0/0 | 192.168.40.3 | 255.255.255.0 | N/A |
| R3 | G0/1 | 192.168.50.1 | 255.255.255.0 | N/A |
| PC-0 | NIC | 192.168.10.5 | 255.255.255.0 | 192.168.10.1 |
| PC-1 | NIC | 192.168.60.5 | 255.255.255.0 | 192.168.60.1 |
| PC-2 | NIC | 192.168.50.5 | 255.255.255.0 | 192.168.50.1 |

## Protocolo incluido

- [BGP](/topologia2/bgp/)

## Espacio para evidencias

### Observaciones

Agregue aqui notas sobre vecindades BGP, anuncios recibidos y pruebas entre AS.
