---
title: Stretched Photons Recover Lost Interference
type: news
date: 2019-10-14
people:
  - Mohammad Hafezi
  - Sunil Mittal
  - Alexey Gorshkov
research_areas: []
source: https://hafezi.jqi.umd.edu/news/stretched-photons-recover-lost-interference
migrated: 2026-09-11
tags:
  - news
  - news/2019
---

![[assets/news/stretched-photons-recover-lost-interference.png]]

The smallest pieces of nature—individual particles like electrons, for instance—are pretty much interchangeable. An electron is an electron is an electron, regardless of whether it’s stuck in a lab on Earth, bound to an atom in some chalky moon dust or shot out of an extragalactic black hole in a superheated jet. In practice, though, differences in energy, motion or location can make it easy to tell two electrons apart.

One way to test for the similarity of particles like electrons is to bring them together at the same time and place and look for interference—a quantum effect that arises when particles ([which can also behave like waves](https://quantumatlas.umd.edu/entry/Superposition)) meet. This interference is important for everything from fundamental tests of quantum physics to the speedy calculations of quantum computers, but creating it requires exquisite control over particles that are indistinguishable.

With an eye toward easing these requirements, researchers at the Joint Quantum Institute (JQI) and the Joint Center for Quantum Information and Computer Science (QuICS) have stretched out multiple photons—the quantum particles of light—and turned three distinct pulses into overlapping quantum waves. The work, [which was published recently](https://doi.org/10.1103/PhysRevLett.123.123603) in the journal _Physical Review Letters_, restores the interference between photons and may eventually enable a demonstration of a particular kind of quantum supremacy—a clear speed advantage for computers that run on the rules of quantum physics.

“While photons do not directly interact with each other, when they meet they can exhibit a purely quantum feature absent from classical, non-quantum waves,” says JQI Fellow Mohammad Hafezi, a co-author of the paper and an associate professor of physics and electrical and computer engineering at the University of Maryland.

These days, testing the similarity of photons is routine. It involves bringing them together at a device called a beam splitter and measuring the light coming out the other side.

When a single photon hits a balanced beam splitter, there’s a 50 percent chance that it will travel straight through and a 50 percent chance that it will reflect off at an angle. By placing detectors in these two possible paths, scientists can measure which way individual photons end up going.

If two identical photons meet at the beam splitter, with one traveling to the east and the other to the north, it’s tempting to apply the same treatment to each particle individually. It’s true that both photons have an equal chance to travel through or reflect, but because the photons are indistinguishable, it’s impossible to tell which one goes where.

The upshot of this identity confusion is that two of the possible combinations—those in which both photons travel straight through the beam splitter and both photons reflect—cancel each other out, leaving behind a distinctly quantum result: The photons team up and travel as a pair, always ending up at one of the two detectors together.

Now Hafezi and his colleagues from UMD and the University of Portsmouth have observed a similar interference effect with distinguishable photons—pulses of light just two picoseconds long (a picosecond is a trillionth of a second) that are separated by tens of picoseconds. The essential trick was finding a way to make the pulses less distinguishable so that they could interfere.

“We used a single optical element that’s basically a fiber,” says Sunil Mittal, a postdoctoral researcher at JQI and a co-author of the new paper. “It emulates the equivalent of about 150 kilometers of fiber, which stretches the photons. It acts a bit like a lens in reverse, causing different frequencies in the pulses to disperse and defocus.”

By lengthening each photon by a factor of about 1000, the researchers could effectively erase the time delay between pulses and create large sections of overlap. That overlap made it more likely that photons would arrive to detectors at the same time and interfere with one another.

Prior experiments ([including by JQI and QuICS Fellow Christopher Monroe and collaborators](https://doi.org/10.1103/PhysRevA.90.040302)) have successfully interfered distinguishable photons, but those results required multiple channels for the incoming light—one for each photon. The new work uses just a single channel that carries light at standard telecom frequencies, which the authors say allows their system to easily scale to include many more photons.

Having more photons would allow researchers to study boson sampling, a computational problem that’s thought to be too hard for ordinary computers (similar to [the problem Google is rumored to have solved](https://www.scottaaronson.com/blog/?p=4317)). In its standard form, boson sampling concerns photons—which are members of a family of particles called bosons—making their way through a big network of beam splitters. The photons enter the network through different channels and exit to detectors, with one detector per channel.

The boson sampling “problem” amounts to doing a complicated coin flip, since each experiment samples from the underlying chance that (say) three photons entering the network at ports 1, 2 and 5 will end up at outputs 2, 3 and 7. The interference inside the network is complex and impossible to track with a regular computer—even for modest numbers of photons—and it gets harder the more photons you add. But with real photons in a real network, the problem would solve itself.

“The connection of this experiment to boson sampling is a great example of how the growing synergy between quantum many-body physics and computational complexity theory can lead to great progress in both fields,” says JQI and QuICS Fellow Alexey Gorshkov, an adjunct associate professor of physics at UMD and another co-author of the paper.

But up until now, boson sampling experiments have suffered from the problem of scalability: Solving the problem for more photons meant adding more channels, which meant taking up more space and timing the arrival of yet more photons to ensure their interference. Mittal says that their technique potentially solves both of these problems.

“In our system, the inputs don’t need to be in different fibers,” Mittal says. “All the photons can travel in a single fiber and the time differences can be erased by the same method we’ve already demonstrated.” Another off-the-shelf device could mimic the network of beam splitters, with the added benefit of allowing for easy reconfiguration, Mittal says. “We’re not doing boson sampling now, but it would be relatively easy to go in that direction.”

_Story by Chris Cesare_

_In addition to Hafezi, Mittal and Gorshkov, co-authors of the research paper include electrical and computer engineering graduate student Venkata Vikram Orre; JQI Research Scientist Elizabeth Goldschmidt, who is now an assistant professor of physics at the University of Illinois at Urbana-Champaign; physics graduate student Abhinav Deshpande; and Vincenzo Tamma, a physicist at the University of Portsmouth._

People: [[people/mohammad-hafezi|Mohammad Hafezi]], [[people/sunil-mittal|Sunil Mittal]], Alexey Gorshkov
