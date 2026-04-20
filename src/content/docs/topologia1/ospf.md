---
title: OSPF
description: Espacio de configuracion y evidencias para el protocolo OSPF en la topologia 1.
---

## Objetivo

Documentar la configuracion de `OSPF` para los routers involucrados en la topologia 1.

## Redes a anunciar

### Router R1

- `G0/0`: `192.168.10.3/24`
- `G0/1`: `192.168.20.3/24`

### Router R2

- `G0/0`: `192.168.10.4/24`
- `G0/1`: `192.168.30.1/24`
- `Loopback 2`: `172.16.2.3/16`

### Router R3

- `G0/0`: `192.168.20.4/24`
- `G0/1`: `192.168.40.1/24`
- `Loopback 3`: `172.17.2.3/16`

## Comandos

### Router R1

```bash
enable
configure terminal
hostname R1
interface g0/0
ip address 192.168.10.3 255.255.255.0
no shutdown
interface g0/1
ip address 192.168.20.3 255.255.255.0
no shutdown
exit
router ospf 1
network 192.168.10.0 0.0.0.255 area 0
network 192.168.20.0 0.0.0.255 area 0
exit
exit
copy running-config startup-config
```

### Router R2

```bash
enable
configure terminal
hostname R2
interface g0/0
ip address 192.168.10.4 255.255.255.0
no shutdown
interface g0/1
ip address 192.168.30.1 255.255.255.0
no shutdown
interface loopback 2
ip address 172.16.2.3 255.255.0.0
no shutdown
exit
router ospf 1
network 192.168.10.0 0.0.0.255 area 0
network 192.168.30.0 0.0.0.255 area 0
network 172.16.0.0 0.0.255.255 area 0
exit
exit
copy running-config startup-config
```

### Router R3

```bash
enable
configure terminal
hostname R3
interface g0/0
ip address 192.168.20.4 255.255.255.0
no shutdown
interface g0/1
ip address 192.168.40.1 255.255.255.0
no shutdown
interface loopback 3
ip address 172.17.2.3 255.255.0.0
no shutdown
exit
router ospf 1
network 192.168.20.0 0.0.0.255 area 0
network 192.168.40.0 0.0.0.255 area 0
network 172.17.0.0 0.0.255.255 area 0
exit
exit
copy running-config startup-config
```

## Verificacion

```txt
# Pegue aqui comandos de verificacion, vecinos OSPF, tabla de rutas o pruebas
```

## Evidencias y notas

Agregue aqui observaciones sobre areas, adyacencias y propagacion de rutas.
