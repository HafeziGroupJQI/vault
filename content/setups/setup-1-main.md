---
title: "Setup 1: main measurement bench"
type: setup
id: setup-1-main
room: TBD
owner: TBD
equipment:
  - "[[equipment/santec-tsl]]"
  - "[[equipment/bktel-2]]"
  - "[[equipment/rigol-dg4202]]"
  - "[[equipment/attenuator-wheel]]"
  - "[[equipment/thorlabs-nanomax-ts]]"
  - "[[equipment/newport-micrometer-stages]]"
  - "[[equipment/navitar-12x]]"
  - "[[equipment/amscope-camera]]"
  - "[[equipment/thorlabs-cs165cu]]"
  - "[[equipment/keithley-2220-30-1]]"
  - "[[equipment/power-meter]]"
  - "[[equipment/yokogawa-aq6375b]]"
  - "[[equipment/apex-osa-ape]]"
  - "[[equipment/ni-daq]]"
  - "[[equipment/tektronix-tds2014]]"
  - "[[equipment/rs-fpl]]"
  - "[[equipment/usb-serial-hub]]"
tags: [setup, setup/setup-1-main]
---

The primary fiber-to-chip measurement setup: Santec CW and BKtel pulsed sources through the input-conditioning bench, NanoMax-TS flexure stages for coupling, Navitar imaging column, and the OSA / ESA / scope detection chain.

## Equipment

- [[equipment/santec-tsl]]
- [[equipment/bktel-2]]
- [[equipment/rigol-dg4202]]
- [[equipment/attenuator-wheel]]
- [[equipment/thorlabs-nanomax-ts]]
- [[equipment/newport-micrometer-stages]]
- [[equipment/navitar-12x]]
- [[equipment/amscope-camera]]
- [[equipment/thorlabs-cs165cu]]
- [[equipment/keithley-2220-30-1]]
- [[equipment/power-meter]]
- [[equipment/yokogawa-aq6375b]]
- [[equipment/apex-osa-ape]]
- [[equipment/ni-daq]]
- [[equipment/tektronix-tds2014]]
- [[equipment/rs-fpl]]
- [[equipment/usb-serial-hub]]

## Signal and trigger graph

```mermaid
flowchart LR
  FG[Rigol DG4202] -- 250 kHz square --> L[BKtel 2 pulsed laser]
  CW[Santec CW laser] --> IN[Input bench: attenuator + waveplates]
  L --> IN --> CHIP[(Chip on NanoMax-TS)]
  CHIP --> PM[Power meter]
  CHIP --> OSA[Yokogawa AQ6375B]
  CHIP --> APEX[APEX OSA-APE]
  CHIP --> PD[Photodetector] --> DAQ[NI DAQ] --> PC[Lab PC-2]
  PD --> ESA[R&S FPL]
  PD --> SCOPE[Tektronix TDS 2014]
  K[Keithley 2220] -- heater current --> CHIP
  L <-- hardware trigger --> DAQ
```

> [!warning] Needs verification
> Setup membership was inferred from the September 3, 2026 walkthrough. Owners: please correct the equipment list, room, and graph.
