---
title: New Design Packs Two Qubits into One Superconducting Junction
type: news
date: 2024-10-21
people:
  - Mohammad Hafezi
  - Alicia Kollár
  - Andrey Grankin
research_areas:
  - Superconducting Devices
source: https://hafezi.jqi.umd.edu/news/new-design-packs-two-qubits-one-superconducting-junction
migrated: 2026-09-11
tags:
  - news
  - news/2024
  - research/superconducting-devices
---

![[assets/news/new-design-packs-two-qubits-one-superconducting-junction.png]]

Quantum computers are potentially revolutionary devices and the basis of a growing industry. However, their technology isn’t standardized yet, and researchers are still studying the physics behind the diverse ways to build these quantum devices. Even the most basic building blocks of a quantum computer—[qubits](https://quantumatlas.umd.edu/entry/qubit/)—are still an active research topic.

In an article published September 23, 2024 in the journal [_Physical Review A_](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.110.032621), JQI researchers proposed a way to use the physics of [superconducting](https://quantumatlas.umd.edu/entry/superconductors/) junctions to let each function as more than one qubit. They also outlined a method to use the new qubit design in quantum simulations. While these proposed qubits might not immediately replace their more established peers, they illustrate the rich variety of quantum physics that remains to be explored and harnessed in the field.

Superconducting junctions are part of many diverse qubit designs, including those in the prototype quantum computers of [IBM](https://quantum-computing.ibm.com/admin/docs/admin/manage/systems/) and [Google](https://quantumai.google/quantumcomputer). All the designs feature an island made of a superconductor joined to the rest of a superconducting circuit by a thin layer of insulator that forms the junction between the two sections. To cross the barrier, electrons in the circuit must [quantum tunnel](https://www.britannica.com/science/tunneling) through the junction, influencing which [quantum states](https://quantumatlas.umd.edu/entry/quantum-states/) the circuit can naturally hold.

JQI Fellow Mohammad Hafezi and JQI postdoctoral researcher Andrey Grankin, who is the first author of the paper, reviewed the research on junctions in superconducting circuits, and what they found left them wondering if the existing qubit designs were taking advantage of the full breadth of physics that can be realized in superconducting junctions. The design of a junction—the geography of the superconducting island—impacts which states it can host, and current designs have focused on small junctions and the simplest states.

In some qubit designs, the quantum states depend on the geography of the island because of how electrons in a superconductor are free to move around like a fluid. Like water in a small pool, the electrons can slosh back and forth and form waves that are influenced by their surroundings.

Certain electron waves isolated onto a superconducting island can be very stable and long lasting, which makes them useful for storing quantum information in a qubit. The waves that are stable are examples of a more general phenomenon, called [standing waves](https://www.britannica.com/science/wave-physics#ref1250678), that occur when a wave isn’t interrupted during the slope of one of its hills or valleys; instead, its oscillations are perfectly completed at the edges (the walls of a pool, the points where a string is being held, etc.). A guitar string’s [harmonics](https://www.britannica.com/science/sound-physics/Standing-waves#ref527266) are also examples of standing waves. 

But just having a stable standing wave in the superconducting electrons isn’t enough to be useful for quantum calculations. To use a standing wave as a qubit, a quantum computer must be able to distinguish it from all other standing waves and individually target it. Current superconducting qubit designs circumvent this issue by using short junctions that host just a single standing wave; as long as a junction is sufficiently short, the physics governing the superconducting electrons effectively only allows a single standing wave on the superconducting island. Researchers have also studied junctions that meet along very long interfaces and found that they can easily host a vast array of standing waves. Unfortunately, the abundance of standing waves comes with a downside: The more standing waves there are, the more similar the waves become, which makes them difficult to tell apart and inconvenient for quantum computing. 

“Historically short and long junctions were researched quite extensively,” says Grankin, who is the first author of the paper. “But the intermediate junction lengths have not been studied.”

Hafezi—who is also a Minta Martin professor of electrical and computer engineering and physics at the University of Maryland (UMD) and a Senior Investigator at the National Science Foundation Quantum Leap Challenge Institute for Robust Quantum Simulation (RQS)—and Grankin became interested in this intermediate regime. The pair consulted with JQI Fellow Alicia Kollár, another author of the paper who works with superconducting qubits in her research.

“Andrey and Mohammad came to me with a creative new idea for how to make a junction host multiple qubit excitations,” says Kollár, who is also a Chesapeake Assistant Professor of Physics and a Co-Associate Director of Research for RQS. “Our main challenge was coming up with a design that would yield practical device parameters and a device that is actually within reach of current state-of-the-art fabrication techniques.”

Together, the group explored the behaviors of electrons in the intermediate case and if it is practical to produce multiple excitations that can be easily distinguished and separately manipulated. Since the pool of electrons is within a solid superconductor, setting them into motion isn’t as simple as plucking a string. To push and pull on electrons you need an electric field. One way that physicists like to push electrons around is using a special reflective chamber—or resonator—that is full of electric and magnetic fields in the form of light. 

Light in a resonator can form its own standing waves that act on the electrons. Similar to a guitar string vibrating due to the sound waves from another string—or more dramatically the sound of a singer’s voice shaking a glass until it shatters—the right light waves inside a resonator can excite electrons in a superconducting junction into a standing wave, which physicists call a mode of the junction. 

The team analyzed how medium-sized junctions should behave inside a resonator and found promising results. The various modes of a junction each respond more or less strongly to particular frequencies of light, so light can be selected to target a specific mode. The response of a mode to a standing wave of light in a resonator also depends on whether the symmetries of the mode and the light match. If the waves of light in the resonator are symmetrical across the center of a junction, they naturally push electrons into waves with a similar symmetry. For instance, if the light waves crossing the junction form a hill on one side and a valley on the other, they can’t push the electrons into a simple hill reflected across the center of the device, but they might be able to excite a similarly lopsided mode of the junction. 

So, light that creates one mode in the superconducting electrons may be ignored by another mode. In the paper, the team described a method of exploiting these two effects to excite or manipulate only a targeted mode. The researchers proposed a design where two distinct modes are targeted so that a single junction functions as two independent qubits. They also described a method to use a one-dimensional line of junctions to simulate interactions between two-dimensional grids of quantum particles. However, they haven’t yet tackled fabricating the junctions and demonstrating the feasibility of their proposal.

“This project started from a fundamental interest in the electrodynamics of extended junctions,” Grankin says. “Then it turned out to be also useful from the quantum information and simulation perspective.”

_Story by Bailey Bedford_  
  
_This research was supported by the US Department of Energy, Office of Science, National Quantum Information Science Research Centers, and Quantum Systems Accelerator. Additional support is acknowledged from AFOSR MURI FA9550-19-1-0399, FA9550-22-1-0339, ARO W911NF2010232, and NSF QLCI OMA-2120757._

People: [[people/mohammad-hafezi|Mohammad Hafezi]], Alicia Kollár, [[people/andrey-grankin|Andrey Grankin]]
