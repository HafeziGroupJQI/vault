---
title: "BKtel 2 pulsed fiber laser"
type: equipment
id: bktel-2
make: "BKtel"
model: "CPFL-1550-300a-FCAPC"
category: laser
interface: rs232
driver: bktel_cpfl
manual: null
setups:
  - "[[setups/setup-1-main]]"
controls: []
controlled_by: []
status_endpoint: null
owner: TBD
location: TBD
tags: [equipment, equipment/laser]
---

"The big laser": 1550 nm, 300 mW class pulsed fiber laser. The repetition rate is set by a hardware square wave from the [[equipment/rigol-dg4202|Rigol DG4202]]; slow parameters go over serial. Class-4: see [[onboarding/safety|Lab Safety]]. Legacy control: `bkTel_DAQ_OSA_ESA_APEX_OptoPlex_Control`.

![[assets/equipment/bktel-2-pulsed-laser.jpg]]
