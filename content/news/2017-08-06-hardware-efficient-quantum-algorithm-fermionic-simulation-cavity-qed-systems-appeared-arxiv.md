---
title: '"Hardware-efficient quantum algorithm for fermionic simulation with
  cavity-QED systems" appeared on arXiv'
type: news
date: 2017-08-06
people: []
research_areas: []
source: https://hafezi.jqi.umd.edu/news/hardware-efficient-quantum-algorithm-fermionic-simulation-cavity-qed-systems-appeared-arxiv
migrated: 2026-09-11
tags:
  - news
  - news/2017
---

![[assets/news/hardware-efficient-quantum-algorithm-fermionic-simulation-cavity-qed-systems-appeared-arxiv.png]]

A promising near-term application of a quantum computer consisting of O(100) qubits is quantum simulation of fermionic systems, which exceeds the computational power of the world’s largest classical supercomputer due to the exponential growth of the Hilbert-space size.  The target systems range from large molecules in quantum chemistry such as fertilizer made with lower energy cost, to strongly correlated electronic materials such as the notoriously difficult high-Tc superconductors.   This killer app happens to coincide with Feynman’s original vision of universal quantum simulator, which uses a quantum system to simulate another and hence  “fight fire with fire”.

Nevertheless, a primary limitation of this near-term goal is the unavoidable decoherence effects.  Typically, to overcome decoherence, one has to consider a fault-tolerant architecture with the implementation of quantum error corrections.  In this case, a quantum computer made of O(100) physical qubits may only support O(1) logical qubits, which can hardly solve any useful problem.  Therefore, the near-term goal of quantum computing application should be the pursuit of so-called “short-quantum-circuit” algorithms such that full fault-tolerance is not needed.  This requirement poses a big challenge for the design of efficient quantum algorithms with the shortest possible circuit depth. Although the typical consideration of the design focuses on the “software” side,  here we focus on the hardware side considering realistic quantum-computing architecture, namely circuit-QED systems consisting of superconducting qubits and cavities.

 The non-local nature of the cavity allows one to implement collective many-body gates.  In particular, this is useful for fermionic simulation with qubits, since the fermionic encoding is typically non-local and involves a qubit string, such as in the case of Jordan-Wigner and Bravyi-Kitaev encoding.  We use cavity-assisted string operations to implement the time evolution of the fermionic Hamiltonian, leading to the reduction of a linear or logarithmic overhead in the conventional local CNOT-ladder approach.  We also make fruther circuit parallelization using  a side-band "quantum radio" technology with multiple frequency channels to implement all the commuting terms in the Hamiltonian simultaneously to make a further reduction in the circuit depth.
