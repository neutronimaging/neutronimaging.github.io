# Poster presented at ICNS-2025

<table>
<tr>
<td><img src="https://github.com/neutronimaging/neutronimaging.github.io/blob/master/figures/ICNS2025-poster.png" style="height:300px" /><br />
<a href="https://github.com/neutronimaging/neutronimaging.github.io/blob/master/figures/ICNS2025-MuhRecPoster.pdf">Download poster</a>
</td><td>
<img src="https://github.com/neutronimaging/neutronimaging.github.io/blob/master/figures/muh4_download.png" style="height:100px"/>
</td>
<td>
<a href="https://github.com/neutronimaging/imagingsuite/releases">Download MuhRec application for Windows, MacOS, and Ubuntu</a><br/>
<b>Python</b> <code>pip install -v pymuhrec --extra-index-url https://easyscience.github.io/pypi/</code>
</td>
</tr>
</table>


## Tomography Reconstruction for Neutron Imaging – New MuhRec Releases
Anders Kaestner (1) and Christian Vedel (2)
1. PSI Center for Neutron and Muon Sciences, 5232 Villigen PSI, Switzerland
2. ESS, DMSC, 305 Asmussens Allé, 2800 Kongens Lyngby, Denmark

We present versions 4.5 and 4.5.1 of MuhRec, the open-source tomography reconstruction tool developed by the Applied Materials Group at the Paul Scherrer Institut (PSI). First introduced in 2010, MuhRec has become a central component of the neutron imaging analysis workflow at PSI and is also part of the in-kind software contributions to the European Spallation Source (ESS), where it is intended to support future imaging data processing pipelines.
Originally designed as an interactive application with a Qt-based graphical user interface, MuhRec has evolved into a versatile tool that now also supports command-line and Python-scripted operation. These additional interfaces enable high-throughput reconstruction of large and complex datasets, such as time-resolved and energy-resolved tomographies, which are increasingly common in neutron imaging experiments.
The latest releases focus on improving performance, robustness, and software maintainability. Users will notice enhanced processing speed and increased stability across different operating environments. Notable algorithmic improvements include better image quality from preprocessing steps and enhanced cone-beam reconstruction capabilities. In addition, extensive internal refactoring has been performed to improve software quality. This includes the adoption of C++20 standards, migration to Qt 6.8.3 LTS, and the introduction of continuous integration with automated build and unit testing workflows.
To simplify deployment, cross-platform installers have been introduced for supported operating systems, making the software easier to install and update. These engineering developments provide a solid foundation for future feature additions and broader adoption within the imaging community.
The software is actively maintained at https://github.com/neutronimaging/imagingsuite, where contributions and feedback from the community are welcome.



