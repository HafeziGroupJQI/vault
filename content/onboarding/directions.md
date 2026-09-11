---
title: Current Directions
draft: true
type: page
tags: [onboarding]
---

What the group is working on *right now* — so that, in the words of the plan
that started this page, "as people move forward … maybe we should talk and
learn from each other." Everyone is asked to keep a rough **3 / 6 / 12-month
goal structure** — explicitly a guideline, not a commitment ("things always
deviate"), so that the group's very different skill sets (AI/ML, electronics,
computation, TMDs) can cross-pollinate.

## Research threads

- **Topological frequency combs** — nested topological combs on chip
  ([news](https://hafezi.jqi.umd.edu/news), Science 2024) and the 10,000-mode
  octave-spanning artificial gauge field work
  ([arXiv:2606.23960](https://arxiv.org/abs/2606.23960)).
- **InGaP χ⁽²⁾ nanophotonics** — the flagship TPA-free platform at telecom;
  topological SHG in nonlinear microresonator arrays
  ([arXiv:2506.21388](https://arxiv.org/abs/2506.21388)).
- **Material platforms in active measurement** — InGaP (UCSB-fabbed chips),
  TFLN, SiN (Ligentec), and the AQHE topological lattices. See the
  [[materials/index|Photonic Material Database]].
- **Optical computing and physical learning** — MZI meshes with
  heater-encoded weights; replication and extension of the Optical
  Transformers results; ML for ring lattices (theory).
- **Measurement automation** — unified instrument-control interface,
  motorized long-range stage moves ("align to device 21" as one command),
  GDS-driven full-chip characterization. Two new setups under construction.
- **TMDs on photonic structures** — the capability planned for next year:
  putting transition-metal dichalcogenides on our photonic structures to
  control light–matter interaction.

## Who is doing what

This list is the **Who is doing what** view of the [[people/directory|directory]], built from the `projects` field of each member's page under `people/`. Members without an entry yet: add your current focus to your own page.

## Simulation toolchain (Lida's explorers)

Six PyQt5+NumPy desktop apps spanning two axes — tight-binding vs. z-resolved
TMM, linear vs. Kerr — at [github.com/lidaxu-physics](https://github.com/lidaxu-physics):

1. [Topo_Photonics_Linear_Explorer](https://github.com/lidaxu-physics/Topo_Photonics_Linear_Explorer) — linear tight-binding lattice builder; thru/drop spectra, Wigner delay, field flow.
2. [Topological_Photonics_Nonlinear_Explorer](https://github.com/lidaxu-physics/Topological_Photonics_Nonlinear_Explorer) — adds driven Kerr combs (split-step), Lyapunov, modal decomposition.
3. [TopoExplorer_Stability_Analysis](https://github.com/lidaxu-physics/TopoExplorer_Stability_Analysis) — stability suite: FTLE, fixed-point Jacobian, Floquet monodromy.
4. [Topological_Photonics_TMM](https://github.com/lidaxu-physics/Topological_Photonics_TMM) — z-resolved transfer-matrix with explicit link rings; README has the full derivation.
5. [Topological_Photonics_Ikeda](https://github.com/lidaxu-physics/Topological_Photonics_Ikeda) — dispersive Ikeda-map Kerr combs on the exact TMM propagator.
6. [Topological_Photonics_Dispersive_Tight_Binding](https://github.com/lidaxu-physics/Topological_Photonics_Dispersive_Tight_Binding) — mode-resolved dispersion + LLE comb engine; the codebase behind the 10,000-mode gauge-field paper.

### Where help is needed

Known gaps in the toolchain (good entry points for new members):

- Everything is χ⁽³⁾/Kerr — no χ⁽²⁾/SHG modeling, despite InGaP being the flagship platform.
- The stability suite exists only on the tight-binding side, not for Ikeda/TMM.
- No TB-vs-TMM cross-validation for the same lattice.
- The dispersive app covers single-layer IQH only — no AQH / nested superlattices.
- Nothing ingests GDS files or measured spectra; no predicted-vs-measured fitting.
- Heaters are static detunings only — no thermo-optic dynamics or drift.
