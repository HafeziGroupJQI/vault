---
title: "Origami quantum computation:  a new way of doing topological quantum
  computation"
type: news
date: 2017-11-22
people:
  - Mohammad Hafezi
research_areas: []
source: https://hafezi.jqi.umd.edu/news/origami-quantum-computation-new-way-doing-topological-quantum-computation
migrated: 2026-09-11
tags:
  - news
  - news/2017
---

![[assets/news/origami-quantum-computation-new-way-doing-topological-quantum-computation.png]]

Topology plays a central role in the modern condensed matter, quantum information and high-energy physics. Certain Geometric manipulation of the manifold which supports a particular topological, known as the **modular transformations**, can be used as fault-tolerant logical operations in the context of both topological phases and topological quantum error correction codes (QECC). A specific case of such transformations is the well-known braiding of non-abelian anyons, equivalent to punctures in space. More generic modular transformations on a high genus surface, i.e., a torus with multiple handles, can boost the computational power of topological codes: for example, abelian anyon models can be as powerful as braiding of non-abelian anyons, while certain non-abelian models such as Fibonacci and Ising anyon models can become computationally universal. However,  the implementation of modular transformations in a realistic experimental setup has remained elusive. **In this work (by Guanyu Zhu, Mohammad Hafezi, and Maissam Barkeshli), we discovered that such transformations can be implemented in a single shot (i.e., with constant circuit depth), using local transversal SWAP operations between patches in a folded system with twist defects (wormholes in the synthetic dimension).** 

On the conceptual level, besides the usual braiding scheme, there is another type of fault-tolerant logical operations arisen from the field of active quantum error correction code, called **transversal logical gates** (TLGs), which has been widely used in abelian topological codes such as color codes.  However, unlike braiding, till now TLGs lack a geometric interpretation.  Our construction provides a clear geometric picture for TLGs, i.e., **manifold “origami”**.  This general geometric picture incorporates some existing discoveries such as transversal Clifford gates in triangular color codes.  Moreover, it greatly extends the variety of existing TLGs, especially to the realm of non-abelian codes. This is achieved by circumventing an existing no-go theorem stating that, for computationally universal non-abelian codes such as Fibonacci model, there exist no non-trivial transversal gates in the spatially uniform case.  Our introduction of gapped boundaries or twist defects (wormholes) is the key to circumvent such no-go theorem.

On the practical level, there are currently three major ongoing collaborative experimental efforts by both industrial companies and academic institutions, on building topological quantum computers with superconducting qubit-based surface codes: Google/UCSB,  IBM and TU Delft supported by Intel. The first topological error-correction code with close to 50 qubits is going to appear soon, ushering the golden age of topological quantum computation.  On the other hand,  Microsoft has a long-term plan to build a topological quantum computer based on topological Majorna qubits.  These industrial research activities greatly boost the field and eagerly demand concrete ideas to improve the computation scheme.

 The existing proposals for surface-code quantum computation are based on adiabatic braiding of punctures or twist defects, with each step of moving accompanied by a full cycle of error correction and hence has an overhead growing linear with system size. On the other hand, the “origami” scheme can significantly reduce the overhead in braiding-based topological quantum computation in general, implementing each individual logic gate as a transversal gate with constant circuit depth. Our protocol requires only local two-qubit SWAP gates, and can hence be easily implemented on the QECC platforms such as surface codes. Besides, our scheme also provides a novel scheme to demonstrate fractional statistics in the near-term surface-code platform.

People: [[people/mohammad-hafezi|Mohammad Hafezi]]
