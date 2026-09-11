---
title: Researchers Identify Groovy Way to Beat Diffraction Limit
type: news
date: 2025-10-03
people:
  - Mohammad Hafezi
  - Mahmoud Jalali Mehrabad
  - Supratik Sarkar
research_areas: []
source: https://hafezi.jqi.umd.edu/news/researchers-identify-groovy-way-beat-diffraction-limit
migrated: 2026-09-11
tags:
  - news
  - news/2025
---

![[assets/news/researchers-identify-groovy-way-beat-diffraction-limit.png]]

Physics is full of pesky limits.

There are speed limits, like the speed of light. There are limits on how much matter and energy can be crammed into a region of space before it collapses into a black hole. There are even limits on more abstract things like the rate that information spreads through a network or the precision with which we can specify two physical quantities simultaneously—most notably expressed in the [Heisenberg uncertainty principle](https://quantumatlas.umd.edu/entry/uncertainty-principle/).

Laser light faces its own set of limits, which are a nuisance to scientists who want to use lasers to engineer new kinds of interactions between light and matter. In particular, there’s an annoying impediment called the diffraction limit, which restricts how tightly a lens can focus a laser beam. Because light travels as a wave of electric and magnetic fields, it has a characteristic size called a wavelength. Depending on the wavelength, diffraction causes waves to bend and spread after passing through an opening. If the opening is big compared to the wavelength, there’s little diffraction. But once the opening gets to be around the size of the wavelength, diffraction causes the wave to spread out dramatically.

This behavior means that you can’t really squeeze a laser beam down to a spot smaller than its own wavelength—around a micron in the case of off-the-shelf optical lasers. The atoms that make up solid matter are 1,000 times smaller than these optical wavelengths, so it’s impossible to focus optical lasers down to the size of atoms and deliver their power with the surgical precision that researchers often seek. Ordinarily experiments just bathe a sample of matter in a wide beam, wasting most of the power carried by the laser.

One approach to overcoming this waste is to accept the limitations of the diffraction limit and increase the effective size of the matter, which researchers at JQI reported on in [a result last year](https://jqi.umd.edu/news/twisted-light-gives-electrons-spinning-kick). The other approach is to defy the diffraction limit and figure out a way to cram the energy of the light into a smaller space anyway.

In a paper published earlier this year in the journal [_Science Advances_](http://dx.doi.org/10.1126/sciadv.adv2023), JQI Fellow Mohammad Hafezi, who is also a Minta Martin professor of electrical and computer engineering and a professor of physics at UMD, and his colleagues showed a new way to sidestep the diffraction limit. They created a chip with a grooved layer of pure silver that accepts laser power in one spot and ferries it with high efficiency to a sample attached to the grooves a short distance away. Importantly, the power ends up being delivered along the chip in peaks spaced just a few dozen nanometers apart—defeating the diffraction limit by producing features much smaller than the wavelength of light that initially hits the chip. The authors say it promises to be a boon for researchers investigating light-matter interactions.

“Light-induced phenomena are a gigantic toolbox,” says Mahmoud Jalali Mehrabad, a former postdoctoral researcher at JQI who is now a research scientist at the Massachusetts Institute of Technology. “There’s photonic switches, light-induced superconductivity, light-induced magnetism—light-induced this, light induced-that. It's very common to use light to create a phenomenon or to control it.”

The silver grooves in the new chip are 60 nanometers wide and 160 nanometers deep, and they are each spaced 90 nanometers apart. At one end of the array of grooves, the silver has a grid pattern cut into it forming a photonic coupler—a pattern that takes laser light hitting the chip from above, bends it into the plane of the chip, and sends it into the grooves. Once the light reaches the grooves, it excites what the researchers call metasurface plasmon polaritons (MPPs), which are combined excitations of photons (particles of light) and electrons in the silver. It’s the MPPs that end up spaced just a few dozen nanometers apart as they travel down the grooves, delivering the laser power with a resolution far below the diffraction limit set by the wavelength of the laser light.

The size of the grooves was carefully calculated to ensure that the power from the laser traveled without leaking out. Even so, it was hard to fabricate chips that had the optimal power delivery at the right wavelength.

“Getting good quality chips that actually give you the peak transmission at the correct wavelength and the correct spatial diffraction pattern—that was very challenging,” says Supratik Sarkar, a graduate student in physics at JQI and the lead author of the paper. 

Sarkar designed scores of chips and worked closely with You Zhou, an assistant professor of materials science and engineering at UMD, and colleagues, who fabricated the chips. Sarkar then did the grunt work of testing them all to find the handful that worked well with the 800-nanometer laser in their experiment.

To show off the capabilities of their new design, Sarkar and the team performed a benchmark experiment, recreating the observation of a shift in the energy spectrum of an atomically thin material called molybdenum diselenide (MoSe2). MoSe2 contains quasiparticles called excitons, which are combinations of a free-moving electron and a hole—an electron vacancy in the material’s structure that acts like a mobile positively charged particle. It takes a little bit of energy to bind an electron to a hole, and, in the presence of an electric field, that energy can shift. The shift can be detected by shining a light and measuring the reflection to determine how much energy the excitons absorbed.

The researchers attached an MoSe2 sample across the top of several grooves on their silver chip, pulsed their 800-nanometer laser into the photonic coupler for a fraction of a second, and probed the sample by flashing a separate pulsed laser. They collected the light reflected by the MoSe2 sample using a microscope and a camera. They showed that—as expected—the exciton energy shifted by a small amount.

They performed the same experiment in the conventional way by pointing both the 800-nanometer laser and the probe laser directly at another MoSe2 sample, which was placed on a smooth sheet of silver. To make the comparison fair, they used a sheet of silver produced in the same way by Zhou’s lab, just without the grooves. They observed the same small energy shift in the excitons, validating their result with the grooved chip. Crucially, though, the conventional method required nearly 100 times more laser power than the method using their chip.

As another demonstration of the advantages of the new chip, the researchers also measured a clear signature that the MPPs traveling down the grooves could deliver more targeted power than the laser. The MPPs in neighboring grooves generated peaks and valleys where the electric field was stronger and weaker. This rolling landscape—which varied over dozens of nanometers instead of hundreds—altered the behavior of the excitons in the MoSe2 sample, causing their energy to shift. Since different excitons had different experiences of the modulated electric field, the energies of excitons across the sample varied slightly. Measurements with the new chip showed that this modulation broadened the set of energies that the excitons had—a feature that was absent from a similar experiment without the grooved chip.

The new chip also has some additional advantages. By separating where the input light is pumped into the chip from where the output light is collected from a sample, the new device can avoid two problems that plague typical experiments.

One problem is heating. When the pumped-in light hits a material sample directly, it tends to heat it up. The new chips require less pump power, which introduces less heat into the experiment. They also keep the power delivery far away from the sample—so distant that during a typical experiment any heat that is introduced to the chip won’t have enough time to reach the sample and interfere with its behavior.

The other problem in conventional experiments has to do with the pump light scattering off a sample and reflecting back into the camera used for measurement. It’s a bit like trying to see the stars during the day—like the sun, the reflected pump laser is so bright that it washes out all the pinprick details. Overcoming this glare normally requires tediously characterizing the pump light so that it can be subtracted from the measured light. But because the pump light is injected into the new chip far away from the sample, it significantly reduces the noise that ends up in the camera.

The authors say that they are now working with other groups who are interested in putting their samples onto one of the grooved chips. They also have plenty of ideas of their own for how to play with the new tool.

“This is very cool, because now you can have periodicity of light in a sub-diffraction sort of regime experienced by matter,” says Mehrabad, who was a co-lead author of the paper. “You can engineer lattice physics. You can open a band gap. You can do scattering. There is a lot of cool physics to be done with this.”

_Story by Chris Cesare_

_In addition to Hafezi, Mehrabad, Sarkar, and Zhou the paper had several additional authors: Daniel Suárez-Forero, a co-lead author and former postdoctoral researcher at JQI who is now an assistant professor of physics at the University of Maryland, Baltimore County; Liuxin Gu, a co-lead author and a graduate student in materials science and engineering at UMD who helped fabricate the chips used in the experiments reported in the paper; Christopher Flower, a former physics graduate student at JQI; Lida Xu, a physics graduate student at JQI; Kenji Watanabe, a materials scientist at the National Institute for Materials Science (NIMS) in Japan; Takashi Taniguchi, a materials scientist at NIMS; Suji Park, a staff scientist at Brookhaven National Laboratory (BNL) in New York; and Houk Jang, a staff scientist at BNL._

_This work was supported by the Army Research Office, the Defense Advanced Research Projects Agency, the National Science Foundation, and the Department of Energy._

People: [[people/mohammad-hafezi|Mohammad Hafezi]], [[people/mahmoud-jalali-mehrabad|Mahmoud Jalali Mehrabad]], [[people/supratik-sarkar|Supratik Sarkar]]
