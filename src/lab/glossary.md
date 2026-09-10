---
title: Glossary
navTitle: Glossary
order: 11
---

Terms you'll hear in the lab and in group meetings, defined the way we
actually use them.

- **OSA** — optical spectrum analyzer (grating-based; spectrum vs. wavelength).
- **ESA** — electronic spectrum analyzer (RF spectrum of a photodetected signal).
- **OVA** — optical vector network analyzer (Luna); amplitude + phase response of a device.
- **EDFA** — erbium-doped fiber amplifier; amplifies a 1550 nm-band seed laser.
- **Seed laser** — the low-power laser whose light an amplifier boosts; controlling it controls the amplified output.
- **DAC/DAQ** — the digitizer box converting detector voltage to digital samples for the PC (Newport/NI hardware in the scripts).
- **TE-cooled camera** — thermo-electrically (Peltier) cooled sensor; lower dark noise, higher sensitivity.
- **Grating** — dispersive element sending different wavelengths at different angles; sets an instrument's wavelength range together with its detector.
- **Heterodyne / beating** — mixing the signal with a swept reference laser; how the APEX OSA achieves very high resolution.
- **GDS** — the chip-layout file format produced via KLayout.
- **Waveguide ports** — the labeled input/output facets of each on-chip device.
- **Heater** — on-chip resistive wire; Joule heating shifts refractive index → phase/nonlinearity tuning.
- **MZI mesh** — Mach–Zehnder interferometer network; heater-controlled weights; the standard on-chip optical-computing architecture.
- **NLSE** — nonlinear Schrödinger equation; governs light in the nonlinear medium; the simulation core.
- **AQHE devices** — the anomalous-quantum-Hall-lattice chips (per the data filenames), classical photonic analogies of the quantum Hall effect.
- **Flexure stage** — monolithic spring-guided translation stage (NanoMax, Elliot); sub-micron precision, small travel.
- **Piezo fine positioning** — ~20 µm range voltage-driven actuation inside the NanoMax stages.

## A common point of confusion

The ring lattices are **classical** devices — they *simulate* quantum-Hall
physics with light. They are analogies to the quantum Hall effect, not actual
quantum systems, and they are not topological qubits (those are real electrons
in solid-state materials).
