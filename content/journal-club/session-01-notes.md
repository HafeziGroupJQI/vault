---
title: "Session 1 discussion notes: Gaussian boson sampling for image recognition"
date: 2026-09-10
type: journal-club
tags: [journal-club, gaussian-boson-sampling, reservoir-computing]
---

Live notes from the first journal-club session; the prepared write-up is [[journal-club/journal-club-01|Journal Club 1]]. Whiteboard sketches from the session were not exported; add them as images if you have them.
## Reservoir Computing
- Extreme Learning Machine
	- Give a reservoir (a physical system) that is really complicated and encode the input into the system
	- Apply a linear classifier to the $m$-element output vector
	- Feed-forward, one shot
- Rigorously there needs to be some kind of time-series or time dependence in the system
	- ELM is the feed-forward one-shot case; the community loosely calls both "reservoir computing" because the word is catchier
- Summary of the term: we have a physical system, we **don't train it**, and we use a linear classifier on the output
- The reservoir doesn't *have* to be nonlinear by definition, but a purely linear one is useless for classification — some reservoir computing papers can't even beat an arbitrary linear classifier


## Boson Sampling
- The first-ever quantum supremacy demonstrated with *optical* systems was Gaussian Boson Sampling (the other early demonstration was superconducting)
- GBS
	- A passive unitary on input optical modes; measure photon clicks on the output modes
	- Very hard to simulate on a digital computer but easy to realize on a quantum device — that's why it's a quantum-advantage platform
	- Boson sampling itself will be covered in a later session of this series
- PCA
	- An efficient way to compress the data and reduce the dimensionality so that we can work with the data
- GELM
	- ELM where the fixed random nonlinear transformation is the GBS ("GBS kernel"): input → GBS features → linear classifier
- GRVFL
	- RVFL = ELM + a direct link that merges the *original* input into the output layer alongside the transformed features

## MNIST
- Standardized handwritten digit dataset that ppl used for first-gen datasets
- Monochrome pictures of 28x28 pixels which are then flattened into a vector of 784
	- Apply PCA so that we can directly encode it into the GBS reservoir (784 is way too high-dimensional for any physical system)
- After PCA, we have 32 dimensions
	- With 32 features the cumulative variance ratio is 0.744 (MNIST) / 0.826 (Fashion-MNIST) — most of the information survives
- Then normalized to zero mean and unit variance and passed through a sigmoid so every element is in (0,1), then digitized to an integer in [0, 255] (float in $[0,1]$ → 8-bit value) — *that* is what gets fed to the GBS kernel

## GBS
- Key twist: the input is **never encoded into the device at all** — the GBS samples were already collected (and are downloadable from their repo); the input only determines *which modes we select* from the pre-recorded data
- The GBS data has two dimensions: 16 detectors (spatial modes) x 511 temporal bins. Thresholded single-photon detectors: click = 1, no click = 0, so one sample = one 511x16 bitmap of clicks
- You map the vectors of the input which only take values of 0-1 to map from 0-255. And that value will be the index that you choose
	- The 32 features are cut into two halves of 16: first half indexes temporal modes 0–255 (partition A), second half indexes 256–511 (partition B; the split is at mode 256 because the average click number rises then falls there)
	- The $i$th feature with value $j$ selects the $i$th spatial mode and $j$th temporal mode; reading the 16 detectors at each selected mode gives a bit string of length 16
- This is being done 5 million times to generate a probability distribution of the modes (511x16 size)
	- Probability is just counting: an outcome that occurs twice in 5 million samples has probability 2/5M
	- The input is *static* — any time dependence lives in the reservoir (the sampling), never in the input data
- now the input will determine which bin you choose which will be mapped to the probability of the modes
- Using all $2^{16}$ basis states per group would be impractical, so they keep ~3000 **computational bases**: randomly pick $n_1 = 1000$ training images, histogram the outcomes on the selected modes (the click data is very sparse), keep the $n_2 = 2000$ largest counts per image, then take the overall most frequent $N$ bases
- The counts on the selected bases from both partitions are merged, renormalized, and passed through a sigmoid → feature vector of dimension $kN$ (for $M = 16k$ PCA features) into the linear classifier

## GRVFL
- Add original input image with the output and then get a better output
	- Input part ① = original image, part ② = GBS features. ① only → perceptron, ② only → GELM, both → GRVFL
- GRVFL wins: 95.86% on MNIST / 85.95% on Fashion-MNIST, vs GELM 95.27/85.00, perceptron 86.01/81.12, linear-kernel SVC 92.9/83.9
- Rerunning with coherent states instead of squeezed light does *worse* → the nonclassical resource actually matters

## Pseudoinverse
- No need to train because its a single linear layer!
- Moore–Penrose pseudoinverse: gives the least-squares solution even when the matrix is singular (not invertible), so the output weights are computed analytically in one shot

## Future Directions
- Try to replicate the results with their repo and methodology
	- But what does that really mean? Does replication in this context simply mean understanding the code if you have the repo?
	- Nothing in this work is unpublished — the raw Jiǔzhāng 4.0 data + pipeline are downloadable, so "you can do as well as the authors"
- Later sessions of the journal club: boson sampling itself (the physics + complexity argument), and reservoir computing in general