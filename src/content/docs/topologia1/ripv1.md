---
title: RIPv1
description: Espacio de configuracion y evidencias para el protocolo RIPv1 en la topologia 1.
---

## Objetivo

Documentar la configuracion de `RIPv1` para los routers involucrados en la topologia 1.

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
exit
interface g0/1
ip address 192.168.20.3 255.255.255.0
no shutdown
exit
router rip
network 192.168.10.0
network 192.168.20.0
end
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
exit
interface g0/1
ip address 192.168.30.1 255.255.255.0
no shutdown
exit
interface loopback 2
ip address 172.16.2.3 255.255.0.0
exit
router rip
network 192.168.10.0
network 192.168.30.0
network 172.16.0.0
end
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
exit
interface g0/1
ip address 192.168.40.1 255.255.255.0
no shutdown
exit
interface loopback 3
ip address 172.17.2.3 255.255.0.0
exit
router rip
network 192.168.20.0
network 192.168.40.0
network 172.17.0.0
end
copy running-config startup-config
```

## Verificacion

```txt
# Pegue aqui comandos de verificacion, salidas relevantes o pruebas
```

## Evidencias y notas

Agregue aqui observaciones sobre el intercambio de rutas, temporizadores o resultados de pruebas.
