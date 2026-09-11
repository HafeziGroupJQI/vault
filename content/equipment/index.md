---
title: Lab Equipment
type: page
tags: [equipment]
aliases: [Lab Equipment]
---

An overview of the measurement lab, distilled from the September 3, 2026 lab walkthrough (full notes: [[lab/lab-meeting-2026-09-03|Lab walkthrough]]). Every instrument has its own record in this folder; the [[equipment/equipment|inventory table]] lists them all, and the [[setups/index|setups]] pages show how they are wired together. The mental model for the whole lab, in one sentence:

> "You can break down every single experiment that we do into three parts:
> **laser, sample, detector**. Types of lasers change, types of detectors
> change, types of samples change — but every measurement is completely the
> same: you control the laser and you control the detector."

## Light sources and amplification

- [[equipment/santec-tsl|Santec tunable CW laser]] — the workhorse low-power, low-noise tunable
  laser; wavelength/current set over serial from the lab PC.
- [[equipment/bktel-2|BKtel pulsed fiber laser]] ("BKtel 2", CPFL-1550-300a-FCAPC, 1550 nm,
  300 mW class) — "the big laser." Repetition rate is set by a hardware square
  wave from the function generator; slow parameters over serial.
- **EDFAs** ([[equipment/bktel-edfa|BKtel]], [[equipment/optilab-edfa|Optilab]], [[equipment/fttp-edfa|FTTP]]) — BKtel module, Optilab benchtop (INPUT / 1% TAP / OUTPUT), and a
  rack-mount FTTP unit. They amplify whatever seed you feed them, so they are
  deliberately not remote-controlled: control the seed instead.
- [[equipment/luna-ova|Luna OVA]] — optical vector network analyzer with its own internal swept
  laser; amplitude + phase response of devices.

## Signal generation

- [[equipment/rigol-dg4202|Rigol DG4202]] function/arbitrary waveform generator — the pulse trigger
  for the BKtel laser (e.g. 250 kHz square wave).
- [[equipment/zurich-shfsg|Zurich Instruments SHFSG]] — 8-channel, 8.5 GHz signal generator; mostly
  not in use yet and part of the fully-automated-setup plans.

## Sample positioning and imaging

- [[equipment/thorlabs-nanomax-ts|Thorlabs NanoMax-TS 3-axis flexure stages]] — manual micrometers
  (swappable for stepper motors) plus internal piezos with ~20 µm fine range.
- [[equipment/elliot-martock-stage|Elliot Scientific / Martock Design 3-axis flexure stage]] (second setup);
  assorted Newport micrometer stages; [[equipment/newport-conex-cc|Newport CONEX-CC]] closed-loop DC
  servo controller for motorized axes.
- [[equipment/navitar-12x|Navitar 12× zoom microscope column]] with an [[equipment/amscope-camera|AmScope camera]] and a
  [[equipment/thorlabs-cs165cu|Thorlabs CS165CU Zelux]] color CMOS in the path; a beamsplitter feeds two
  cameras, and the camera sits on its own translation stage so it can move
  around the chip.
- Fiber-to-chip coupling is currently manual (turn knobs watching the camera)
  and drifts at high power — re-optimize as you go.

## On-chip heaters

Heaters aren't bought — they are **fabricated on the chip**: a thin metal wire
whose Joule heating shifts the local refractive index (and nonlinearity).
Uses: (1) trimming imperfectly fabricated devices back to design behavior,
(2) encoding the optical weights of MZI meshes for optical computing. Driven
by a [[equipment/keithley-2220-30-1|Keithley 2220-30-1]] dual-channel programmable supply.

## Detection and analysis

In increasing order of spectral specificity:

1. [[equipment/power-meter|Power meter]] — how much light is there.
2. [[equipment/yokogawa-aq6375b|Yokogawa AQ6375B OSA]] (1200–2400 nm, grating-based) — the everyday
   spectrum measurement.
3. [[equipment/apex-osa-ape|APEX OSA-APE high-resolution OSA]] — sweeps an internal laser and beats
   it against your signal (heterodyne); for narrow features and comb lines.
4. [[equipment/visible-spectrometer|Visible-band free-space spectrometer]] with interchangeable gratings and
   a TE-cooled [[equipment/princeton-instruments-camera|Princeton Instruments camera]] (LightField software) — for
   wavelengths below the OSAs' range, e.g. 775 nm SHG.
5. **Photodetector → [[equipment/ni-daq|DAQ]]** — digitizes detector output for the PC; also
   exchanges hardware triggers directly with the laser.
6. [[equipment/tektronix-tds2014|Tektronix TDS 2014]] (everyday scope) and [[equipment/tektronix-dsa72004b|DSA72004B]] (20 GHz,
   50 GS/s) — time domain.
7. [[equipment/rs-fpl|Rohde & Schwarz FPL ESA]] (5 kHz–14 GHz) — RF spectrum of the
   photocurrent (rep-rate beat notes, laser noise).

## How everything talks

Nearly every instrument connects to the lab PC individually over serial
(RS-232/USB) through a many-to-one USB hub; some also have LAN. Instruments
additionally talk to each other directly in hardware via trigger lines — the
PC is not in the loop for fast timing. Every commercial instrument has a
programming manual (SCPI-style commands); each can be pinged to verify
connection.

## Data and code conventions

- Data files: `YYYYMMDD_<material>_<foundry/chip>_<device>_<measurement>`,
  e.g. `20260830_InGaP_UCSB_chip1_AQHE401_FR_drop`.
- Data folders on the lab PC: `C - InGaP`, `C - TFLN`, `C - SiN Ligentec`,
  `C - Topological photonics`, `LUNA OVA`, `Wheel_calibration`.
- Legacy control scripts (largely by Chris, a former student) live on the
  shared drive at `CMNS-phys-hafezi-lab → 01 User Accounts → Apurva →
  A - Lab stuff - instruments` — one script per instrument combination
  (`bkTel_DAQ_OSA_ESA_APEX_OptoPlex_Control`, `Santec_Nidaq_GUI3`,
  `Yokogawa_Interface`, `ZH_DAQ_FFT`, …). They are the de-facto documentation
  for each instrument's command set — read them before writing new control
  code.

## Design-to-measurement workflow

Simulation (NLSE / coupled-mode, Lida's toolchain) → design parameters →
KLayout/GDS (drawing only — KLayout is not a simulation tool here) → fab
(with cleanroom constraints feeding back) → measurement → iterate. Explicitly
*not* a closed loop: "a lot of times you have to break the loop and think
about what's happening."
