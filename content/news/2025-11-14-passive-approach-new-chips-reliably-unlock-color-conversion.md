---
title: With Passive Approach, New Chips Reliably Unlock Color Conversion
type: news
date: 2025-11-14
people:
  - Mohammad Hafezi
  - Mahmoud Jalali Mehrabad
  - Lida Xu
research_areas: []
source: https://hafezi.jqi.umd.edu/news/passive-approach-new-chips-reliably-unlock-color-conversion
migrated: 2026-09-11
tags:
  - news
  - news/2025
---

![[assets/news/passive-approach-new-chips-reliably-unlock-color-conversion.png]]

Over the past several decades, researchers have been making rapid progress in harnessing light to enable all sorts of scientific and industrial applications. From creating stupendously accurate clocks to processing the petabytes of information zipping through data centers, the demand for turnkey technologies that can reliably generate and manipulate light has become a global market worth hundreds of billions of dollars.

One challenge that has stymied scientists is the creation of a compact source of light that fits onto a chip, which makes it much easier to integrate with existing hardware. In particular, researchers have long sought to design chips that can convert one color of laser light into a rainbow of additional colors—a necessary ingredient for building certain kinds of quantum computers and making precision measurements of frequency or time.

Now, researchers at JQI have designed and tested new chips that reliably convert one color of light into a trio of hues. Remarkably, the chips all work without any active inputs or painstaking optimization—a major improvement over previous methods. The team described their results [in the journal _Science_](https://doi.org/10.1126/science.adu6368) on Nov. 6, 2025.

The new chips are examples of photonic devices, which can corral individual [photons](https://quantumatlas.umd.edu/entry/photons/), the quantum particles of light. Photonic devices split up, route, amplify and interfere streams of photons, much like how electronic devices manipulate the flow of electrons.

“One of the major obstacles in using integrated photonics as an on-chip light source is the lack of versatility and reproducibility,” says JQI Fellow Mohammad Hafezi, who is also a Minta Martin professor of electrical and computer engineering and a professor of physics at the University of Maryland. “Our team has taken a significant step toward overcoming these limitations.”

The new photonic devices are more than mere prisms. A prism splits multicolored light into its component colors, or frequencies, whereas these chips add entirely new colors that aren’t present in the incoming light. Being able to generate new frequencies of light directly on a chip saves the space and energy that would normally be taken up by additional lasers. And perhaps more importantly, in many cases lasers that shine at the newly generated frequencies don’t even exist.

The ability to generate new frequencies of light on a chip requires special interactions that researchers have been learning to engineer for decades. Ordinarily, the interactions between light and a photonic device are linear, which means the light can be bent or absorbed but its frequency won’t change (as in a prism). By contrast, nonlinear interactions occur when light is concentrated so intensely that it alters the behavior of the device, which in turn alters the light. This feedback can generate a panoply of different frequencies, which can be collected from the output of the chip and used for measurement, synchronization or a variety of other tasks. 

Unfortunately, nonlinear interactions are usually very weak. [One of the first observations](https://doi.org/10.1103/PhysRevLett.7.118) of a nonlinear optical process was reported in 1961, and it was so weak that someone involved in the publication process [mistook the key data for a smudge](https://physics.aps.org/articles/v7/112) and removed it from the main figure in the paper. That smudge was the subtle signature of second harmonic generation, in which two photons at a lower frequency are converted into one photon with double the frequency. Related processes can triple the frequency of incoming light, quadruple it, and so forth.

Since that first observation of second harmonic generation, scientists have discovered ways to boost the strength of nonlinear interactions in photonic devices. In the original demonstration, the state of the art was to simply shine a laser on a piece of quartz, taking advantage of the natural electrical properties of the crystal. These days researchers rely on meticulously engineered chips tailored with photonic resonators. The resonators guide the light in tight cycles, allowing it to circulate hundreds of thousands or millions of times before being released. Each single trip through a resonator adds a weak nonlinear interaction, but many trips combine into a much stronger effect. Yet there are still tradeoffs when trying to produce a particular set of new frequencies using a single resonator. 

“If you want to simultaneously have second harmonic generation, third harmonic generation, fourth harmonic—it gets harder and harder,” says Mahmoud Jalali Mehrabad, the lead author of the paper and a former postdoctoral researcher at JQI who is now a research scientist at MIT. “You usually compensate, or you sacrifice one of them to get good third harmonic generation but cannot get second harmonic generation, or vice versa.”

In an effort to avoid some of these tradeoffs, Hafezi and JQI Fellow Kartik Srinivasan, together with Electrical and Computer Engineering Professor Yanne Chembo at the University of Maryland (UMD), have previously pioneered ways of boosting nonlinear effects by using a hoard of tiny resonators that all work in concert. They showed in earlier work how a chip with hundreds of microscopic rings arranged into an array of resonators can [amplify nonlinear effects and guide light around its edge](https://jqi.umd.edu/news/novel-design-may-boost-efficiency-chip-frequency-combs). Last year, they showed that a chip patterned with such a grid [could transmute a pulsed laser into a nested frequency comb](https://jqi.umd.edu/news/new-photonic-chip-spawns-nested-topological-frequency-comb)—light with many equally spaced frequencies that is used for [all kinds of high-precision measurements](https://www.nist.gov/topics/physics/optical-frequency-combs). However, it took many iterations to design chips with the right shape to generate the precise frequency comb they were after, and only some of their chips actually worked.

The fact that only a fraction of the chips worked is indicative of the maddening hit-or-miss nature of working with nonlinear devices. Designing a photonic chip requires balancing several things in order to generate an effect like frequency doubling. First, to double the frequency of light, a nonlinear resonator must support both the original frequency and the doubled frequency. Just as a plucked guitar string will only hum with certain tones, an optical resonator only hosts photons with certain frequencies, determined by its size and shape. But once you design a resonator with those frequencies locked in, you must also ensure that they circulate around the resonator at the same speed. If not, they will fall out of sync with each other, and the efficiency of the conversion will suffer.

Together these requirements are known as the frequency-phase matching conditions. In order to produce a useful device, researchers must simultaneously arrange for both conditions to match. Unfortunately, tiny nanometer-sized differences from chip to chip—which even the best chip makers in the world can’t avoid—will shift the resonant frequencies a little bit or change the speed at which they circulate. Those small changes are enough to wash out the finely tuned parameters in a chip and render the design useless for mass production.

One of the authors compared the predicament to the likelihood of spotting a solar eclipse. “If you want to actually see the eclipse, that means if you look up in the sky the moon has to overlap with the sun,” says Lida Xu, a co-lead author and a graduate student in physics at JQI. Getting reliable nonlinear effects out of photonic chips requires a similar kind of chance encounter.

Small misalignments in the frequency-phase matching conditions can be overcome with active compensation that adjusts the material properties of a resonator. But that involves building in little embedded heaters—a solution that both complicates the design and requires a separate power supply.

In the new work, Xu, Mehrabad and their colleagues discovered that the array of resonators used in previous work already increases the chances of satisfying the frequency-phase matching conditions in a passive way—that is, without the use of any active compensation or numerous rounds of design. Instead of trying to engineer the precise frequencies they wanted to create and iterating the design of the chip in hopes of getting one that worked, they stepped back and considered whether the array of resonators produced any stable nonlinear effects across all the chips. When they checked, they were pleasantly surprised to find that their chips would generate second, third and even fourth harmonics for incoming light with a frequency of about 190 THz—a standard frequency used in telecommunications and fiber optic communication.

As they dug into the details, they realized that the reason all their chips worked was related to the structure of their resonator array. Light circulated quickly around the small rings in the array, which set a fast timescale. But there was also a “super-ring” formed by all the smaller rings, and light circulated around it more slowly. Having these two timescales in the chip had an important effect on the frequency-phase matching conditions that they hadn’t appreciated before. Instead of having to rely on meticulous design and active compensation to arrange for a particular frequency-phase matching condition, the two timescales provide researchers with multiple shots at nurturing the necessary interactions. In other words, the two timescales essentially provide the frequency-phase matching for free.

The researchers tested six different chips manufactured on the same wafer by sending in laser light with the standard 190 THz frequency, imaging a chip from above and analyzing the frequencies leaving an output port. They found that each chip was indeed generating the second, third and fourth harmonics, which for their input laser happened to be red, green and blue light. They also tested three single-ring devices. Even with the inclusion of embedded heaters to provide active compensation, they only saw second harmonic generation from one device over a narrow range of heater temperature and input frequency. By contrast, the two-timescale resonator arrays had no active compensation and worked over a relatively broad range of input frequencies. The researchers even showed that as they dialed up the intensity of their input light, the chips started to produce more frequencies around each of the harmonics, reminiscent of the nested frequency comb created in an earlier result.

The authors say that their framework could have broad implications for areas in which integrated photonics are already being used, especially in metrology, frequency conversion and nonlinear optical computing. And it can do it all without the hassle of active tuning or precise engineering to satisfy the frequency-phase matching conditions.

“We have simultaneously relaxed these alignment issues to a huge degree, and also in a passive way,” Mehrabad says. “We don't need heaters; we don't have heaters. They just work. It addresses a long-standing problem.”

_Story by Chris Cesare_

_In addition to Mehrabad, Hafezi, Srinivasan (who is also a Fellow of the National Institute of Standards and Technology), Chembo and Xu, the paper had several other authors: Gregory Moille, an associate research scientist at JQI; Christopher Flower, a former graduate student at JQI who is now a researcher at the Naval Research Laboratory; Supratik Sarkar, a graduate student in physics at JQI; Apurva Padhye, a graduate student in physics at JQI; Shao-Chien Ou, a graduate student in physics at JQI; Daniel Suarez-Forero, a former JQI postdoctoral researcher who is now an assistant professor of physics at the University of Maryland, Baltimore County; and Mahdi Ghafariasl, a postdoctoral researcher at JQI._

_This research was funded by the Air Force Office of Scientific Research, the Army Research Office, the National Science Foundation and the Office of Naval Research._

People: [[people/mohammad-hafezi|Mohammad Hafezi]], [[people/mahmoud-jalali-mehrabad|Mahmoud Jalali Mehrabad]], [[people/lida-xu|Lida Xu]]
