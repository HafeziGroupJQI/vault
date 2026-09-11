---
title: "Santec tunable CW laser"
type: equipment
id: santec-tsl
make: "Santec"
model: "TSL series"
category: laser
interface: rs232
driver: santec_tsl
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

The workhorse low-power, low-noise tunable CW laser. Wavelength and current are set over serial from the lab PC. Legacy control: `Santec_Nidaq_GUI3` on the shared drive (laser sweep synchronized with the NI DAQ).
