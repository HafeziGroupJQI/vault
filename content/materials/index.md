---
title: Photonic Material Database
type: page
tags: [materials]
---

Optical properties of the material platforms the group works with: SiN, thin-film lithium niobate (TFLN), lithium tantalate, InGaP, GaAs/AlGaAs, and silicon, compiled from our lab experiments and the literature. Edit the tables in place (Obsidian's table editor works); the site rebuilds automatically. A work in progress.

## Linear optical properties

| Material | n @1550 nm | n @1064 nm | n @780 nm | Transparency window | Bandgap (eV) | Birefringence | Notes |
|---|---|---|---|---|---|---|---|
| **SiN (Si₃N₄)** | ≈1.98 | ≈2.01 | ≈2.03 | ≈0.25–6.7 µm | ≈4.9–5.3 | Isotropic (amorphous); small stress-induced form birefringence | CMOS-compatible dielectric; low loss |
| **TFLN (LiNbO₃)** | nₒ≈2.21, nₑ≈2.14 | nₒ≈2.23, nₑ≈2.16 | nₒ≈2.26, nₑ≈2.18 | ≈0.35–5.0 µm | ≈3.9 | Negative uniaxial, Δn≈−0.07 | Ferroelectric; strong χ⁽²⁾ and Pockels EO |
| **Lithium tantalate (LiTaO₃)** | nₒ≈2.12, nₑ≈2.12 | nₒ≈2.13, nₑ≈2.14 | nₒ≈2.16, nₑ≈2.16 | ≈0.28–5.5 µm | ≈4.6 | Uniaxial but very low, Δn≈+0.004 | Wider UV edge & higher damage threshold than LN |
| **InGaP** | ≈3.13 | ≈3.20 | ≈3.31 | ≈0.65–10 µm | ≈1.9 (direct) | Isotropic (zincblende cubic) | Visible-transparent; TPA-free χ⁽²⁾+χ⁽³⁾ platform at telecom |
| **GaAs / AlGaAs** | ≈3.37 (GaAs) | ≈3.48 (GaAs) | opaque (GaAs; above E_g) | ≈0.87–17 µm (GaAs); AlGaAs edge tunable | 1.42 (GaAs); 1.42–2.16 (AlGaAs) | Isotropic (zincblende cubic) | AlGaAs-on-insulator: strong χ⁽²⁾+χ⁽³⁾ |
| **Silicon (c-Si)** | ≈3.48 | ≈3.55 | opaque (absorbing) | ≈1.1–8 µm (opaque <1.1 µm) | 1.12 (indirect) | Isotropic (cubic) | CMOS-compatible; high index contrast; opaque in the visible |

## Nonlinear optical properties

| Material | Kerr n₂ @1550 nm | χ⁽³⁾ | χ⁽²⁾ / d-coefficient | Two-photon absorption @1550 nm | Notes |
|---|---|---|---|---|---|
| **SiN (Si₃N₄)** | ≈2.4×10⁻¹⁹ m²/W (≈2.5×10⁻¹⁵ cm²/W) | ≈ few×10⁻²² m²/V² | None intrinsic (amorphous / centrosymmetric) | Negligible (large bandgap) | Negligible TPA + moderate Kerr. Hence leading Kerr-comb / microresonator platform |
| **TFLN (LiNbO₃)** | ≈1.8×10⁻¹⁹ m²/W | moderate | d₃₃≈−25 to −27 pm/V, d₃₁≈−4.4 pm/V, d₂₂≈2.1 pm/V | Negligible at 1550 nm | Strong χ⁽²⁾; PPLN quasi-phase-matching for SHG / OPO / OPA |
| **Lithium tantalate (LiTaO₃)** | ≈1×10⁻¹⁹ m²/W | moderate | d₃₃≈−13 to −21 pm/V, d₃₁≈−0.9 pm/V, d₂₂≈1.6 pm/V | Negligible at 1550 nm | Lower χ⁽²⁾ than LN but higher damage threshold; periodic poling demonstrated |
| **InGaP** | ≈0.5–1.3×10⁻¹⁷ m²/W | Large | d₁₄≈30–110 pm/V | Negligible at 1550 nm (2ℏω < E_g) | TPA-free at telecom → efficient microcombs, OPO, photon-pair sources |
| **GaAs / AlGaAs** | ≈1.3–1.5×10⁻¹⁷ m²/W | Large | d₁₄≈90–170 pm/V | GaAs: significant (β≈10 cm/GW); AlGaAs (x≳0.2): engineered TPA-free at 1550 nm | Highest χ⁽²⁾ of the set; AlGaAs-on-insulator is a leading Kerr-comb platform |
| **Silicon (c-Si)** | ≈4.5×10⁻¹⁸ m²/W (≈4×10⁻¹⁴ cm²/W) | Large (≈10⁻¹⁹ m²/V² order) | None (centrosymmetric); strain-induced χ⁽²⁾ possible | Significant, β≈0.5–0.9 cm/GW | TPA + free-carrier effects are the main nonlinear-loss limit at telecom |

## Electro-optic & acousto-optic properties

| Material | Pockels (linear EO) r-coefficients | Dominant modulation mechanism | Piezoelectric | Acousto-optic | Notes |
|---|---|---|---|---|---|
| **SiN (Si₃N₄)** | None (no χ⁽²⁾) | None intrinsic | No | Weak | Passive platform; EO requires bonding of an active material |
| **TFLN (LiNbO₃)** | r₃₃≈30–31, r₁₃≈8.6–10, r₅₁≈28, r₂₂≈3.4 pm/V | Pockels (linear EO) high-speed, low-V_π modulators | Yes (strong) | Strong (AOMs) | Leading integrated EO platform (>100 GHz modulators) |
| **Lithium tantalate (LiTaO₃)** | r₃₃≈30–33, r₁₃≈7–8, r₂₂≈1 pm/V | Pockels (linear EO) — r₃₃ comparable to LN | Yes | Strong | Emerging low-birefringence, high-damage-threshold EO platform (TFLT) |
| **InGaP** | r₄₁≈1 pm/V (weak linear EO) | Pockels (weak) | Weak | Weak | Primarily a χ-nonlinear platform; EO usually via carrier effects or hybrid |
| **GaAs / AlGaAs** | r₄₁≈1.2–1.5 pm/V (weak linear EO) | Pockels (weak) | Weak | Moderate | Active EAMs / modulators plus monolithic gain |
| **Silicon (c-Si)** | None (centrosymmetric) | Free-carrier plasma dispersion (pn junction); also thermo-optic | No | Weak | No intrinsic Pockels; strain- or heterogeneous-EO needed for pure-EO modulation |

## Sources

### General / cross-material

- M. N. Polyanskiy, [refractiveindex.info](https://refractiveindex.info) — RefractiveIndex.INFO database of optical constants (Sellmeier / tabulated n, k for all materials above).
- R. W. Boyd, *Nonlinear Optics*, 4th ed., Academic Press (2020) — definitions and tabulated n₂, χ⁽²⁾, χ⁽³⁾.
- E. D. Palik (ed.), *Handbook of Optical Constants of Solids*, Academic Press (1985/1991).

### Silicon nitride (SiN)

- K. Luke et al., "Broadband mid-infrared frequency comb generation in a Si₃N₄ microresonator," Opt. Lett. 40, 4823 (2015) — Sellmeier and Kerr n₂.
- K. Ikeda et al., "Thermal and Kerr nonlinear properties of plasma-deposited silicon nitride," Opt. Express 16, 12987 (2008).
- D. J. Moss et al., "New CMOS-compatible platforms based on silicon nitride and Hydex," Nat. Photonics 7, 597 (2013).

### Thin-film lithium niobate (TFLN)

- D. E. Zelmon, D. L. Small, D. Jundt, "Infrared corrected Sellmeier coefficients for congruently grown lithium niobate…," J. Opt. Soc. Am. B 14, 3319 (1997).
- R. S. Weis, T. K. Gaylord, "Lithium niobate: summary of physical properties and crystal structure," Appl. Phys. A 37, 191 (1985).
- D. Zhu et al., "Integrated photonics on thin-film lithium niobate," Adv. Opt. Photon. 13, 242 (2021).

### Lithium tantalate (LiTaO₃)

- A. Bruner et al., "Temperature-dependent Sellmeier equation for the refractive index of stoichiometric lithium tantalate," Opt. Lett. 28, 194 (2003).
- K. S. Abedin, H. Ito, "Temperature-dependent dispersion relation of ferroelectric lithium tantalate," J. Appl. Phys. 80, 6561 (1996).
- C. Wang et al., "Lithium tantalate photonic integrated circuits for volume manufacturing," Nature 630, 897 (2024) — thin-film LT (TFLT) platform.

### InGaP (Ga₀.₅₁In₀.₄₉P on GaAs)

- S. Adachi, "Optical dispersion relations for GaP, GaAs … and In₁₋ₓGaₓAsᵧP₁₋ᵧ," J. Appl. Phys. 66, 6030 (1989) — refractive index.
- U. D. Dave et al., "Nonlinear properties of dispersion engineered InGaP photonic wire waveguides in the telecommunication wavelength range," Opt. Express 23, 4650 (2015) — n₂ and negligible TPA.
- I. Shoji et al., "Absolute scale of second-order nonlinear-optical coefficients," J. Opt. Soc. Am. B 14, 2268 (1997) — d-coefficients of zincblende III–Vs.

### GaAs / AlGaAs

- S. Adachi, "GaAs, AlAs, and AlₓGa₁₋ₓAs: material parameters for use in research and device applications," J. Appl. Phys. 58, R1 (1985); and J. Appl. Phys. 66, 6030 (1989).
- I. Shoji et al., "Absolute scale of second-order nonlinear-optical coefficients," J. Opt. Soc. Am. B 14, 2268 (1997) — GaAs d₁₄.
- M. Pu et al., "Efficient frequency comb generation in AlGaAs-on-insulator," Optica 3, 823 (2016); A. Villeneuve et al., "Nonlinear absorption in AlGaAs below half the bandgap," Appl. Phys. Lett. 62, 2465 (1993) — n₂ / TPA edge.

### Silicon (c-Si)

- M. A. Green, "Self-consistent optical parameters of intrinsic silicon at 300 K…," Sol. Energy Mater. Sol. Cells 92, 1305 (2008).
- A. D. Bristow, N. Rotenberg, H. M. van Driel, "Two-photon absorption and Kerr coefficients of silicon for 850–2200 nm," Appl. Phys. Lett. 90, 191104 (2007).
- R. A. Soref, B. R. Bennett, "Electrooptical effects in silicon," IEEE J. Quantum Electron. 23, 123 (1987); J. Leuthold et al., "Nonlinear silicon photonics," Nat. Photonics 4, 535 (2010).
