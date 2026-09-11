---
title: Compressed Sensing Measurement of Long-Range Correlated Noise (Short Talk
  + Pre-Print)
type: news
date: 2021-09-08
people:
  - Mohammad Hafezi
research_areas: []
source: https://hafezi.jqi.umd.edu/news/compressed-sensing-measurement-long-range-correlated-noise-short-talk-pre-print
migrated: 2026-09-11
tags:
  - news
  - news/2021
---

![[assets/news/compressed-sensing-measurement-long-range-correlated-noise-short-talk-pre-print.jpg]]

Long-range correlated errors can severely impact the performance of NISQ (noisy intermediate-scale quantum) devices, and fault-tolerant quantum computation. Characterizing these errors is important for improving the performance of these devices, via calibration and error correction, and to ensure correct interpretation of the results. We propose a compressed sensing method for detecting two-qubit correlated dephasing errors, assuming only that the correlations are sparse (i.e., at most s pairs of qubits have correlated errors, where s << n(n-1)/2, and n is the total number of qubits). In particular, our method can detect long-range correlations between any two qubits in the system (i.e., the correlations are not restricted to be geometrically local). Our method is highly scalable: it requires as few as m = O(s log n) measurement settings, and efficient classical postprocessing based on convex optimization. In addition, when m = O(s log^4(n)), our method is highly robust to noise, and has sample complexity O(max(n,s)^2 log^4(n)), which can be compared to conventional methods that have sample complexity O(n^3). Thus, our method is advantageous when the correlations are sufficiently sparse, that is, when s < O(n^(3/2) / log^2(n)). Our method also performs well in numerical simulations on small system sizes, and has some resistance to state-preparation-and-measurement (SPAM) errors. The key ingredient in our method is a new type of compressed sensing measurement, which works by preparing entangled Greenberger-Horne-Zeilinger states (GHZ states) on random subsets of qubits, and measuring their decay rates with high precision. ArXiV: 2105.12589

People: [[people/mohammad-hafezi|Mohammad Hafezi]]
