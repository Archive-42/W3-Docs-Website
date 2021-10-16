**Note:** This document is obsolete, and is retained here for historical purposes only. It was published on 5 November 1996, as a proposal specification for sRGB as a standard default color space. sRGB has since been standardized within the International Electrotechnical Commission (IEC) as IEC 61966-2-1. During standardization, a small numerical error caused by rounding error was corrected. The viewing conditions were also clarified.

The W3C [CSS3 Color specification](http://www.w3.org/TR/css3-color/#SRGB) specifically references "Multimedia systems and equipment - Colour measurement and management - Part 2-1: Colour management - Default RGB colour space - sRGB". IEC 61966-2-1 (1999-10) ISBN: 2-8318-4989-6 - ICS codes: 33.160.60, 37.080 - TC 100 - 51 pp. as amended by Amendment A1:2003.

The latest official sRGB specification may also be purchased from the [IEC](http://www.iec.ch/).

A Standard Default Color Space for the Internet - sRGB
======================================================

Michael Stokes (Hewlett-Packard), Matthew Anderson (Microsoft),

Srinivasan Chandrasekar (Microsoft), Ricardo Motta (Hewlett-Packard)

Version 1.10, November 5, 1996

Introduction
------------

Hewlett-Packard and Microsoft propose the addition of support for a standard color space, sRGB, within the Microsoft operating systems, HP products, the Internet, and all other interested vendors. The aim of this color space is to complement the current color management strategies by enabling a third method of handling color in the operating systems, device drivers and the Internet that utilizes a simple and robust device independent color definition. This will provide good quality and backward compatibility with minimum transmission and system overhead. Based on a calibrated colorimetric RGB color space well suited to Cathode Ray Tube (CRT) monitors, television, scanners, digital cameras, and printing systems, such a space can be supported with minimum cost to software and hardware vendors. Our intent here is to promote its adoption by showing the benefits of supporting a standard color space, and the suitability of the standard color space, sRGB, we are proposing. We will describe some of the system issues and propose a methodology for to implement support for sRGB and color management on the World Wide Web.

Part 1 : History and Background of sRGB color space
===================================================

A Perceived Need
----------------

Recently the [International Color Consortium](http://www.color.org) has proposed breakthrough solutions to problems in communicating color in open systems. Yet the [ICC profile](ftp://sgigate.sgi.com/pub/icc/ICC32.pdf) format does not provide a complete solution for all situations.

Currently, the ICC has one means of tracking and ensuring that a color is correctly mapped from the input to the output color space. This is done by attaching a profile for the input color space to the image in question. This is appropriate for high end users. However, there are a broad range of users that do not require this level of flexibility and control. Additionally, most existing file formats do not, and may never support color profile embedding, and finally, there are a broad range of uses actually discourage people from appending any extra data to their files. A common standard RGB color space addresses these issues and is useful and necessary.

We expect application developers and users that do not want the overhead of embedding profiles with documents or images to convert them to a common color space and store them in that format. Currently there is a plethora of RGB monitor color spaces attempting to fill this void with little guidance or attempts at standards. There is a need to merge the many standard and non-standard RGB monitor spaces into a single standard RGB color space. Such a standard could dramatically improve the color fidelity in the desktop environment. For example, if operating system vendors provide support for a standard RGB color space, the input and output device vendors that support this standard color space could easily and confidently communicate color without further color management overhead in the most common situations. The three major factors of this RGB space are the colorimetric RGB definition, the equivalent gamma value of 2.2 and the well-defined viewing conditions, along with a number of secondary details necessary to enable the clear and unambiguous communication of color.

Colorimetric RGB
----------------

The dichotomy between the device dependent (e.g. amounts of ink expressed in CMYK or digitized video voltages expressed in RGB) and device independent color spaces (such as CIELAB or CIEXYZ) has created a performance burden on applications that have attempted to avoid device color spaces. This is primarily due to the complexity of the color transforms they need to perform to return the colors to device dependent color spaces. This situation is worsened by a reliability gap between the complexity and variety of the transforms, making it hard to ensure that the system is properly configured.

To address these concerns and serve the needs of PC and Web based color imaging systems, we propose a colorimetric RGB specification that is based on the average performance of personal computer displays. This solution is supported by the following observations:

-   Most computer monitors are similar in their key color characteristics - the phosphor chromaticities (primaries) and transfer function
-   RGB spaces are native to displays, scanners and digital cameras, which are the devices with the highest performance constraints
-   RGB spaces can be made device independent in a straightforward way. They can also describe color gamuts that are large enough for all but a small number of applications.

This combination of factors makes a colorimetric RGB space well suited for wide adoption since it can both describe the colors in an unambiguous way and be the native space for actual hardware devices. This, many readers will recognize, describes in a roundabout way what has been the practice in color television for some 45 years. This proven methodology provides excellent performance where it is needed the most, the fast display of images in CRT monitors.

Gamma and the desired CRT gamma of 2.2
--------------------------------------

For computer software and hardware designers the most significant aspect of the proposed space is the 2.2 CRT gamma. Because gamma correction tends to be a topic surrounded by confusion, it is worthwhile spending a few paragraphs discussing it.

### Definitions of gamma

We start this discussion by defining four separate aspects of gamma.

1.  *viewing gamma* - the overall system gamma that we want to obtain and is typically computed by multiplying the camera gamma by the display gamma as shown below.

    ![viewing gamma = camera gamma × display gamma](srgb02) (0.1)

      

2.  *camera gamma* - the characteristic of the image sensor or video camera standard transfer function
3.  *CRT gamma* - the gamma of the physical CRT.
4.  *LUT gamma* - the gamma of the frame buffer lookup table
5.  *display gamma* - the "display system" gamma downstream of the frame buffer which is typically computed by multiplying the CRT gamma by the LUT gamma as shown below.

    ![display gamma = CRT gamma × LUT gamma](srgb01)(0.2)

      

These definitions have been kindly provided by the [World Wide Web Consortium](http://www.w3.org/) and are included in the PNG file format specification available at <http://www.w3.org/pub/WWW/TR/REC-png-multi.html>. These definitions do *not* describe the individual gamma parameter in equation 0.4 below. Instead, they describe the resulting power parameter of the appropriate transfer function when fit by a power function. It is extremely important to keep this distinction clear or else one implicitly assumes equations 0.4 and 0.5 are equivalent and the system black level is truly 0.0 and the system gain is 1.0.

### Viewing Gamma

The reason that a viewing gamma of 1.125 is used instead of 1.0 is to compensate for the viewing environment conditions, including ambient illumination and flare. Historically, viewing gammas of 1.5 have been used for viewing projected slides in a dark room and viewing gammas of 1.25 have been used for viewing monitors in a very dim room. This very dim room value of 1.25 has been used extensively in television systems and assumes a ambient luminance level of approximately 15 lux. The current proposal assumes an encoding ambient luminance level of 64 lux which is more representative of a dim room in viewing computer generated imagery. Such a system assumes a viewing gamma of 1.125 and is thus consistent with the 709 standard described below. While we believe that the typical office or home viewing environment actually has an ambient luminance level around 200 lux, we found it impractical to attempt to account for the resulting large levels of flare that resulted. In addition, recent work by the ISO JTAG2 standards committee supports the ambient luminance level of 64 lux.

If the viewing condition is different from the standard, then the decoding process must compensate. This can be done by modifying the gamma values in equation 1.2 below by the appropriate factor. If one does modify the gamma values in equation 1.2 below, extreme care must be taken to avoid quantization errors when working with 24 bit images and high viewing flare levels.

The ITU-R BT.709 transfer function in combination with its target monitor is attempting to achieve a viewing gamma of 1.125 by incorrectly assuming a CRT gamma of 2.5 and an LUT gamma of 1.0/2.222 as shown in the equation below. The justification of a viewing gamma value of 1.125 is described below in the section on viewing environment compensation.

![illustration](srgb03) (0.3)  

Using the actual power function fit value for the 709 transfer function of 1.0/1.956 and maintaining the display gamma of 1.125, we can solve for the ideal target monitor gamma of 2.2. This is consistent with the CRT gamma value proposed in this paper.

### Camera Gamma

The camera gamma 1.0/2.2 was the standard for television camera encoding before the advent of color TVs and was formalized in 1953 with the NTSC broadcast television standards. More recently ITU-R BT.709 has been adopted internationally and contains camera gamma of 1.0/1.956. The actual exponent factor in the 709 transfer function is 1.0/2.222. Despite the fact that the exponent of the 709 function is 1.0/2.222, the actual 709 encoding transfer function is closer to a CRT gamma of 1.0/1.956 than 1.0/2.222. This is due to the large offset of 0.099 in the transfer function equation. This is well matched to the eye's own non-linearity and it helps minimize transmission noise in the dark areas.

Broadcast television camera gamma standards and the ITU-R BT.709 standard in particular defines the transformation of real world CIEXYZ tristimulus values into a target RGB monitor space. This is essentially a composite of two transformations; one from real world CIEXYZ tristimulus values into standard monitor CIEXYZ tristimulus values and one from these standard monitor CIEXYZ tristimulus values into standard monitor rgb values. The resulting image is not an exact appearance match of the original scene, but instead is a preferred reproduction of the original scene that is consistent with the limitations of a monitor.

Because all television sets have to display content generated with this encoding, it was very important for all CRT gamma designs to conform to it. Only recently has the computer monitor market become as large as the TV market. As a result, most computer monitors still perform optimally with imagery using with a camera gamma value of approximately 1.0/1.956

### CRT Gamma

The non-linearity of the electro-optical radiation transfer function of CRTs is often expressed by a mathematical power function exponent parameter called gamma. This transfer function describes how much visible radiant energy (cd/m<sup>2</sup>) results from voltages applied to the CRT electron-gun. Because most of the other characteristics of CRT based computer monitors are linear (including DACs and video amplifiers) the resulting transfer function has the same gamma value determining its non-linearity.

![illustration](srgb04) (0.4)  

Where k<sub>1</sub> and k<sub>2</sub> are the system gain and offset, D is the normalized pixel value, A is the maximum luminance of the CRT and I is the resulting luminance. This equation and a thorough analysis of the CRT characteristics and history are well described in "An Analytical Model for the Colorimetric Characterization of Color CRTs" by Ricardo Motta, Rochester Institute of Technology, 1991.

The key point that we wish to convey here is that gamma component of the CRT gamma is dependent only on the electron gun design, and the vast majority of monitors and TV sets in use today are based on designs that result, on average, in the value 2.2 for gamma component of the CRT gamma and a 2.2 overall CRT gamma value when typical system gain and offsets are optimally set. Most of the variation between computer monitors and between TV sets are due to the differences in system gain and offsets (k<sub>1</sub> and k<sub>2</sub>), which are partially under control of the user in the form of contrast and brightness knobs. Unfortunately, the actual set-up is often not known, but the best CRT performance happens when the system offset puts the dark parts of the images at the CRT cut-off, i.e. the black (pixel value 0) parts of the CRT image are just about to emit light. Under these conditions equation 0.4 above becomes

![illustration](srgb05) &gt;(0.5)  

and the monitor has the widest-dynamic range. Unfortunately, this is not the common condition. Unfortunately the simplified form in equation 0.5 is what is usually found in the computer literature.

There are significant variations, with widest variations being in the set-up and screen reflectivity (older and less expensive display can reflect up to 20% of the ambient light). These factors typically can not be characterized a priori since they might change in the course of the day (ambient light) and at the whim of the user (by modifying contrast and brightness). Yet, in practice, the process tends to be self-regulatory, with users looking for darker places to set their monitors and modifying the controls to re-establish the expected display appearance. Exhaustive testing carried on at Hewlett-Packard on VGA computer monitors from many brands has shown the average CRT gamma to be indeed 2.2, with a standard deviation of about 0.2.

### LUT gamma

Two special circumstances will lead computer systems to systematically deviate from the 2.2 CRT gamma and the 1.0 LUT gamma that we propose - color dithering for 16 color systems and system imposed gamma correction via look-up-tables (LUT).

The first of course was very common until a few years ago. Until about 1993 most Windows PCs were well described by a display gamma of 1.8 because despite having 2.2 CRT gamma systems, the colors were dithered into the 4 bit frame buffers, resulting in a flattening of the system transfer function. This happens because screen dithering mixes colors linearly in the eye, making it less dependent on the CRT non-linearity. Since currently most Windows PC support 16 or 24 bit color modes, 2.2 CRT gamma is now the average.

The second systematic deviation happens when the graphics system in the computer hardware or software imposes its own gamma correction. This is done for a variety of reasons, but is usually an attempt to compromise between image display and graphics/image processing performance (most computer graphic rendering assumes linear radiation space, e.g. transparency operations, and so does image processing, e.g. scaling and filtering). The gamma correcting of image data can be described by applying an exponent to the image data. For the Macintosh the display gamma is around 1.571 using a LUT gamma of 1.4 (2.2/1.4 = 1.571) and for SGI workstations the display gamma is around 1.294 using a LUT gamma of 1.7 (2.2/1.7 = 1.294).

There has been significant confusion derived from assuming the CRT gamma value is identical to the exponent in equation 0.4. This has led to many claims of CRT gamma values of 2.5 for video, 1.8 for the Apple Macintosh and 1.4 for SGI monitors. Unfortunately, it has been our experience that this misconception is not well founded in the actual physics of the displays and solid measurements.

sRGB and ITU-R BT.709 Compatibility
-----------------------------------

There has been some confusion in previous versions of this proposal with respect to compatibility with the ITU-R BT.709 standard. Many readers have also expressed concern for compatibility with the 709 recommendation in general. After review, the authors have confirmed the compatibility between this proposal and the 709 recommendation. Unfortunately, the ITU-R BT.709 standard can be somewhat confusing for many readers. Below is an attempt to clarify and reduce this confusion.

For a single color space to achieve acceptance, it must be objective, that is, have a tightly-defined relationship with the CIE standards. We are fortunate to have obtained in April 1990 unanimous worldwide agreement on a calibrated nonlinear RGB space for HDTV production and program exchange: Rec. ITU-R BT.709. This recommendation specifies the encoding of real world scene tristimulus values into a standard monitor RGB color space assuming a dark viewing condition. HP and Microsoft suggest using these parameters as the basis for the sRGB color space but with a dim viewing condition which is closer to most typical viewing environments for computer displayed imagery. Unfortunately the ITU specification is rather vague on defining the target monitor. This paper attempts to provide a clear and well defined target monitor for the Rec. ITU-R BT.709 camera encoding standard for a dim viewing environment.

The ITU-R BT.709 standard specifically describes the encoding transfer function for a video camera that when viewed on a "standard" monitor will produce excellent image quality. The implicit target of this encoding is a standard video monitor whose transfer function or CRT gamma is *not* explicitly delineated. Instead a typical monitor setup is assumed. This paper attempts to explicitly describe a standard monitor setup that is compatible with the 709-encoding standard.

This is illustrated in Figures 1-3 below. Figure one is directly derived from the ITU-R BT.709 standard. This standard provides mathematical methods to transform from tristimulus values of the scene using a video camera into a reference monitor device space.

<img src="srgb06" alt="illustration" width="347" height="247" />  
Figure 1

Figure two expands the implicit step of these methods and shows the transformation between the original scene tristimulus values into the target monitor tristimulus values. Since these two viewing conditions are different, an implicit compensation is made to account for these differences (i.e. flare and ambient luminance). In order to provide an independent monitor reference color space, the monitor compensation methods must be extracted from this confounded compensation. This is precisely the goal of the sRGB color space.

<img src="srgb07" alt="illustration" width="347" height="267" />  
Figure 2

Figure three illustrates both the sRGB color space and the extraction of the monitor only specifications implicit within the ITU-R BT.709 standard. By producing such a monitor space, one can then transfer the ITU-R BT.709 encoded signals to other devices. By building on this system, the sRGB color space provides a monitor definition that can be used independently from the ITU-R BT.709 standard while maintain compatibility. This allows for the well-defined transfer of color information across the World Wide Web as described in the other section of this paper.

<img src="srgb08" alt="illustration" width="354" height="266" />  
Figure 3

This sRGB recommendation essentially defines the second part of this transformation between the target RGB monitor space and the monitor CIEXYZ tristimulus values in a dim viewing environment. This is required to maintain a consistent monitor centric color reproduction process that is typical of the web and is consistent with recommendations of the International Color Consortium. This is also consistent with maintaining the preferred reproduction encoding of the ITU standard.

In summary, there has been some concern with the choice of a 2.2 CRT gamma with a 1.0 LUT gamma as opposed to a 1.571 (2.2/1.4) or a 1.294 (2.2/1.7) display gamma. We feel that there are many reasons to support a 2.2 CRT, including;

-   compatibility with a large legacy of images
-   Photo CD,
-   many Unix workstations,
-   PC's with 256+ colors and their desktop color schemes and icons,
-   several ultra-large image collections,
-   analog television,
-   Apple Macintosh video imagery,
-   CCIR 601 images,
-   a better fit with Weber's fraction,
-   compatibility with numerous standards,
-   TIFF/EP,
-   EXIF,
-   digital TV,
-   HDTV,
-   analog video,
-   PhotoCD,
-   it is closer to native CRTs gamma,
-   and consistency with a larger market of displays.

Alpha Channel Masking and Computer Graphics Compatibility
---------------------------------------------------------

Another concern that has been expressed about encoding using a gamma of 2.2 is the use of alpha masking. Typically computer graphics effects, including alpha masking, operate in an optical intensity environment as opposed to a visually uniform one. This mandates using a linear gamma of 1.0 in most computer graphic operations which is obviously incompatible with the visually uniform encoding using a gamma of 2.2. In a 24 bit encoding scheme, encoding a mid-level gray using a gamma of 1.0 would result in a digital count of 46. Such an encoding scheme would create visually objectionable artifacts such as contours. Therefore we recommend that effects such as alpha masking be performed either prior to encoding or by decoding to a color resolution greater than 24 bits and then converting into linear intensity space.

Again, it is fundamental to realize that there are two common operational spaces discussed here; 1) the linear intensity space in which most optical and synthetic visualization operations work within and 2) a nearly visually perceptibly uniform space in which visual based operations, compression and many devices work within. This difference is vitally important to remember since both types of operations are required and thus interaction between these two types of spaces occur frequently.

Part 2: Definition of the sRGB Color Space
==========================================

A Single RGB Standard Color Space
---------------------------------

There are two parts to the proposed standard described in this paper; the viewing environment parameters with its dependencies on the human visual system and the standard device space colorimetric definitions and transformations. The viewing environment descriptions contain all the necessary information, when combined with most color appearance models, to provide conversions between the standard and target viewing environments. The colorimetric definitions provide the transforms necessary to convert between the sRGB color space and the CIEXYZ two degree observer color space.

sRGB reference viewing environment
----------------------------------

Reference viewing environments are defined for standard RGB in Table 0.1.

<span class="palatino">TABLE 0.1 sRGB viewing environment Parameters</span>

**<span class="palatino">Condition</span>**

**<span class="palatino">sRGB</span>**

<span class="palatino">Luminance level</span>

<span class="palatino">80 cd/m<sup>2</sup></span>

<span class="palatino">Illuminant White</span>

<span class="palatino">*x* = 0.3127, *y* = 0.3291 (D65) </span>

<span class="palatino">Image surround</span>

<span class="palatino">20% reflectance</span>

<span class="palatino">Encoding Ambient Illuminance Level</span>

<span class="palatino">64 lux</span>

<span class="palatino">Encoding Ambient White Point</span>

<span class="palatino">x = 0.3457, y = 0.3585 (D50)</span>

<span class="palatino">Encoding Viewing Flare</span>

<span class="palatino">1.0%</span>

<span class="palatino">Typical Ambient Illuminance Level</span>

<span class="palatino">200 lux</span>

<span class="palatino">Typical Ambient White Point</span>

<span class="palatino">*x* = 0.3457, *y* = 0.3585 (D50)</span>

<span class="palatino">Typical Viewing Flare</span>

<span class="palatino">5.0%</span>

The sRGB reference viewing environment corresponds to conditions typical of monitor display viewing conditions.

The *luminance level* is representative of typical CRT display levels.

The chromaticities of the *illuminant white* are those of CIE D<sub>65</sub>.

The *image surround* is defined as "20%" of the maximum white luminance. This is close to a CIELAB L\* value of 50, while maintaining computational simplicity. The areas surrounding the image being viewed are similar in luminance and chrominance to the image itself. This surround condition would correspond, for example, to a reflection print displayed on a spectrally non-selective gray background of about twenty percent reflectance, where the print and the background are uniformly illuminated by the same light source.

This specification defines the concepts of an encoding viewing environment and a typical viewing environment. The encoding viewing environment is consistent with recent discussions within the ISO JTAG2 committee for graphic arts and photographic viewing conditions for photographic images on monitors. If possible to achieve, this is the recommended viewing environment for viewing photographic images on monitors. The typical viewing environment is representative of a typical office or home office viewing environment for personal computers.

For optimal results, we recommend using the encoding viewing environment when viewing sRGB encoded images. We also recognize that this is quite different from typical viewing environment.

While one would theoretically use the viewing conditions which represent the actual or typical viewing environment, if this is done with 24 bit images a significant loss in the quality of shadow detail results. This is due to encoding the typical viewing flare of approximately 5.0 percent into a 24 bit image as opposed to the encoding viewing flare of 1 percent. Therefore we recommend using the encoding viewing environment for most situations including when one's viewing environment is consistent with the typical viewing environment and not the encoding viewing environment.

The *encoding ambient illuminance level* is intended to be representative of a dim viewing environment. Note that the illuminance is at least an order of magnitude lower than average outdoor levels and approximately one-third of the typical ambient illuminance level.

The chromaticities of the *encoding ambient white* are those of CIE D<sub>50</sub>.

*Encoding viewing flare* is specified to be 1.0% of the maximum white-luminance level.

The *typical ambient illuminance level* is intended to be representative of a typical office viewing environment. Note that the illuminance is at least an order of magnitude lower than average outdoor levels.

The chromaticities of the *typical ambient white* are those of CIE D<sub>50</sub>.

*Typical Viewing flare* is specified to be 5.0% of the maximum white-luminance level.

Colorimetric definitions and digital encodings
----------------------------------------------

sRGB in combination with the reference viewing environments can be defined from standard CIE colorimetric values through simple mathematical transformations.

CIE colorimetry provides the basis for sRGB encoding of the color. For the calculation of CIE colorimetric values, it is necessary to specify a viewing environment and a set of spectral sensitivities for a specific capture device. The definitions for RGB given in equations 1.1 to 1.3 are based on the colorspace's respective viewing environment.

The CIE chromaticities for the red, green, and blueITU-R BT.709 reference primaries, and for CIE Standard Illuminant D<sub>65</sub>, are given in Table 0.2.

<span class="palatino">TABLE 0.2 CIE chromaticities for ITU-R BT.709 reference primaries and CIE standard illuminant </span>

**<span class="palatino">Red</span>**

**<span class="palatino">Green</span>**

**<span class="palatino">Blue</span>**

**<span class="palatino">D65</span>**

*<span class="palatino">x</span>*

<span class="palatino">0.6400</span>

<span class="palatino">0.3000</span>

<span class="palatino">0.1500</span>

<span class="palatino">0.3127</span>

*<span class="palatino">y</span>*

<span class="palatino">0.3300</span>

<span class="palatino">0.6000</span>

<span class="palatino">0.0600</span>

<span class="palatino">0.3290</span>

*<span class="palatino">z</span>*

<span class="palatino">0.0300</span>

<span class="palatino">0.1000</span>

<span class="palatino">0.7900</span>

<span class="palatino">0.3583</span>

sRGB tristimulus values for the illuminated objects of the scene are simply linear combinations of the 1931 CIE XYZ values and these *RGB* tristimulus values can be computed using the following derived relationship:

![illustration](srgb09) (1.1)  

In the RGB encoding process, negative sRGB tristimulus values, and sRGB tristimulus values greater than 1.00 are not typically retained. When encoding software cannot support this extended range, the luminance dynamic range and color gamut of RGB is limited to the tristimulus values between 0.0 and 1.0 by simple clipping. This gamut, however, is large enough to encompass most colors that can be displayed on CRT monitors<sub>.</sub>

The sRGB tristimulus values are next transformed to nonlinear sR'G'B' values as follows:

If ![illustration](srgb10)

![illustration](srgb11) (1.2a)  

else if ![illustration](srgb12)

![illustration](srgb13) (1.2b)  

The effect of the above equations is to closely fit a straightforward gamma 2.2 curve with an slight offset to allow for invertability in integer math. Therefore, we are maintaining consistency with the gamma 2.2 legacy images and the video industry as described previously.

Finally, the nonlinear sR'G'B' values are converted to digital code values. This conversion scales the above sR'G'B' values by using the equation below where WDC represents the white digital count and KDC represents the black digital count.

![illustration](srgb14) (1.3)  

This current specification proposes using a black digital count of 0 and a white digital count of 255 for 24-bit (8-bits/channel) encoding. The resulting RGB values are formed according to the following equations:

![illustration](srgb15) (1.4)  

This obviously can be simplified as shown below.

![illustration](srgb16) (1.5)  

The reverse relationship is defined as follows;

![illustration](srgb17) (1.6)  

If ![illustration](srgb18)

![illustration](srgb19) (1.7a)  

else if ![illustration](srgb20)

![illustration](srgb21) (1.7b)  

and

![illustration](srgb22) (1.8)  

Digital broadcast television uses a black digital count of 16 and a white digital count of 235 in order to provide a larger encoded color gamut. We do not propose using this encoding at this time, due to the large legacy of images and applications using the previous black and white digital coding counts. However, it is vital to allow for a future revision to provide this capability.

Part 3 : Implementation on the Web
==================================

Color Spaces
------------

***Definition:***

*A color space is a model for representing color numerically in terms of three or more coordinates. e.g. The RGB color space represents colors in terms of the Red, Green and Blue coordinates.*

For color to be reproduced in a predictable manner across different devices and materials, it has to be described in a way that is independent of the specific behavior of the mechanisms and materials used to produce it. For instance, color CRTs and color printers use very different mechanisms for producing color. To address this issue, current methods require that color be described using device independent color coordinates, which are translated into device dependent color coordinates for each device.

Color Management
----------------

***Definition:***

*Color management is a term that describes a technology that translates the colors of an object (images, graphics or text) from their current color space to the color space of the output devices like monitors, printers, ...*

Traditionally, operating systems have supported color by declaring support for a particular color space, RGB in most cases. However, since RGB varies between devices, color was not reliably reproduced across different devices.

The high-end publishing market could not meet its needs with the traditional means of color support, so the various OS's added support for using International Color Consortium (ICC) profiles to characterize device dependent colors in a device independent way. They use the profiles of the input device that created an image and the output device that displayed the image and create a transform that moves the image from the input device's color space to the output device's color space. This resulted in very accurate color. However, it also involved the overhead of transporting the input device's profile with the image and running the image through the transform.

HP and Microsoft propose an additional means of managing color that is optimized to meet the needs of most users without the overhead of carrying an ICC profile with the image: the addition to the OS and the Internet of support for a Standard Color Space. Since the image is in a known color space and the profile for that color space would ship with the OS and browser, this enables the end users to enjoy the benefits of color management without the overhead of larger files. While it may be argued that profiles could buy slightly higher color accuracy, we believe that the benefits of using a standard color space far out-weigh the drawbacks for a wide range of users. The migration of devices to natively support the standard color space will further enhance the speed and quality of the user experience.

We are proposing the use of the color space, sRGB, that is consistent with but is a more tightly defined derivative of Rec. ITU-R BT.709 as the standard color space for the OS's and the Internet. In April of 1990 this space obtained unanimous worldwide agreement as the calibrated nonlinear RGB space for HDTV production and program exchange.

Proposed Style Sheet Syntax for specifying sRGB on the Internet
---------------------------------------------------------------

We propose that all page elements defined in the style sheets be assumed to be in the sRGB color space unless embedded ICC profiles indicate otherwise.

We further propose a new CSS-1 property, `rendering-intent`, with the following syntax to specify the user rendering intents of page elements. These rendering intent values are defined to be consistent with the [International Color Consortium](http://www.color.org) rendering intent values (http://www.color.org) of saturation, perceptual, absolute colorimetric and relative colorimetric.

Syntax

    Value: saturation | perceptual | absolute  | relative
    Initial: perceptual
    Applies to: all elements
    Inherited: yes
    Percentage values: N/A

Example:

    BODY { rendering-intent: saturation }
    IMG.perceptualintent { rendering-intent: perceptual }
    #mypic001 { rendering-intent: A }
    <IMG ID=mypic001 SRC="http://www.site.com/layout.mypic001.png">
    <IMG CLASS="perceptualintent" SRC="http://www.site.com/layout.mypic002.gif">

Standard Color Space in Practice
--------------------------------

Once page elements are converted to sRGB, the browser needs to interpret the color space correctly and use the OS color management to image the page. The following table summarizes how the browser handles color management in each of the possible scenarios.

<table><tbody><tr class="odd"><td></td><td><strong>Style Sheet Colors(sRGB)</strong></td><td><strong>HTML Page with no Color Space information</strong></td><td><strong>Re-purpose Data outside of Browser/<br />
HTML environment</strong></td></tr><tr class="even"><td><strong>Embedded Profile in Image</strong></td><td>Color Space for Image determined by embedded profile.</td><td>Color Space for Image determined by embedded profile.</td><td>Color Space for Image determined by embedded profile.</td></tr><tr class="odd"><td><strong>Image file specifies sRGB</strong></td><td>Color Space for Image is sRGB</td><td>Color Space for Image is sRGB</td><td>Color Space for Image is sRGB</td></tr><tr class="even"><td><strong>Image has no Color space information.</strong></td><td>Color Space for Image is sRGB</td><td>Color Space for image is sRGB.</td><td>Color Space for image is sRGB.</td></tr><tr class="odd"><td><strong>Text</strong></td><td>Color Space for text is sRGB</td><td>Color Space for text is sRGB.</td><td>Color Space for text is sRGB.</td></tr><tr class="even"><td><strong>Graphics</strong></td><td>Color Space for Graphics is sRGB</td><td>Color Space for graphics is sRGB.</td><td>Color Space for graphics is sRGB.</td></tr></tbody></table>

Browsing Scenarios
------------------

The following cases describe what an end-user sees in the various scenarios:

1.  **Image not in sRGB, does not have an embedded ICC profile, and no monitor/output device ICC profile**

    This is the behavior before color management systems were added. Even though the image is assumed to be in sRGB color space, it is imaged (displayed, printed etc.) without translation to the device color space since the output profile is not available. The quality varies tremendously since output device characteristics differ greatly.

2.  **Image not in sRGB, does not have an embedded ICC profile, and system has a monitor/output device ICC profile**

    Since the image has no ICC profile, it is assumed to be in the sRGB color space. In this scenario, the resulting image will be consistent across devices; however it could be different from the original image.

3.  **Image in sRGB, and no monitor/output device ICC profile**

    In this scenario, the image has been run through a transform that consists of the input device ICC profile, and the sRGB ICC profile, or it was created using devices that conform to sRGB. However, since the system has no ICC profile for the output device, it will simply assume the image is in the device's color space. If all the images rendered on the output device are in sRGB, then they will at least be consistent with respect to each other on a given monitor/output device.

4.  **Image in sRGB, and system has a monitor/output device ICC profile**

    In this scenario, the image has been run through a transform that consists of the input device ICC profile, and the sRGB ICC profile, or it was created using devices that conform to sRGB. Because the system has an ICC profile for the output device, the image can be converted to the output device's color space and imaged. The resulting image will be consistent across devices, and will be very close to the original in appearance.

5.  **Image in sRGB, and monitor/output device is sRGB compliant**

    In this scenario, the image has been run through a transform that consists of the input device ICC profile, and the sRGB ICC profile, or it was created using devices that conform to sRGB. As the output device has been designed to conform with sRGB, and is associated with that ICC profile, a transform is not necessary for this case. The OS realizes that no transformation is required and simply images the image directly on the output device. This case is ideal since there is no color transformation at output time, and the image is more compact since there is no ICC profile embedded in it. The resulting image will be consistent across devices, and will be very close to the original in appearance.

6.  **Image not in sRGB, has an embedded ICC profile, and no monitor/output device ICC profile**

    This would be treated the same as the "Image not in sRGB, does not have an embedded ICC profile, and no monitor/output device ICC profile" scenario.

7.  **Image not in sRGB, has an embedded ICC profile, and system has a monitor/output device ICC profile**

    This is the standard color management scenario. The two ICC profiles are combined to produce a transform that will map the colors of the image into the output device's color space. The resulting image will be consistent across devices, and will be very close to the original in appearance.

Authoring Scenarios
-------------------

The following scenarios describe how to get an image into the sRGB color space when creating it.

1.  **Image created on a device that has no ICC profiles and is not sRGB compliant**

    Display the image on a monitor that is sRGB compliant or that has an ICC profile. Edit the image until it looks good on the monitor. For monitors that are not sRGB compliant but have ICC profiles, depending on the capabilities of the application, either use the application to save the image as sRGB or embed the monitor's profile into the image, and use a tool to create a transform with the monitor's profile and the sRGB profile and run the image through the transform. If the image file format supports it, specify the image is in sRGB.

2.  **Image created on a device that has ICC profiles and is not sRGB compliant**

    Use a tool to create a transform with device's profile and the sRGB profile. Then run the image through the transform, specify the image is in sRGB if the image file format supports it.

3.  **Image created on a device that is sRGB compliant**

    Specify the image is in sRGB if the image file format supports this.

Suggestions to benefit from sRGB
--------------------------------

1.  CRT manufacturers who build monitors in compliance with the sRGB specification will get faster display times for objects in this color space. (No transformation needs to occur.)
2.  Scanner and digital camera manufacturers who optimize the color transforms and gamma correction for compatibility with sRGB will benefit for the same reason.

Palette Issues
--------------

There are several different scenarios to consider when dealing with palettized images and displays.

1.  **Image does not have a color table (&gt; 8bpp), and client monitor is not palettized**

    The image is run through a color matching transform as described in the previous section, and the resulting 24bpp image is displayed on the monitor.

2.  **Image has a color table (8bpp) and client monitor is not palettized**

    The color table accompanying the image is run through a color matching, and the resulting color table is used with the image for display. The displayed image is very close to original image.

3.  **Image does not have a color table (&gt;8bpp) and client monitor is palettized.**

    The software displaying the image (eg. browser) should use the default palette that is defined in sRGB space, convert it into device color space by running it through a color matching transform, and use this palette to display the image. The resulting image gets dithered into the closest possible colors on the display. The assumption is that the monitor profile is created with the default palette selected.

4.  **Image has a color table (8bpp) and was created using the default palette and client monitor is palettized**

    The software displaying the image should follow the same steps as above. The resulting image is very close to the original image and unintentional dithering is eliminated. If the original image only had colors in the default palette, the final image doesn't have any dithering.

5.  **Image has a color table (8bpp) and was created using an arbitrary palette and client monitor is palettized**

    If the client monitor only has a palettized profile and can only display the image by discarding this profiled palette and replacing it with an uncalibrated palette, we do *not* recommend to color manage this scenario. If the client monitor is able to treat the image as if it was a truecolor (unpalettized) image, it should proceed as for case 3 above.

Note that cases 3 and 4 assume an industry standard default palette defined in sRGB color space that will be used by authoring and display software to handle 8bpp images. Microsoft and HP are working on the definition of such a palette.

Conclusion
----------

We believe that the addition of standard color space, sRGB, support to the Internet, device drivers and operating systems is a complementary addition to the existing color management support that utilizes and expands the benefits and availability of color management to a broader range of users. Furthermore, we believe that sRGB overcomes many application developer and end-user reservations to adopting color management. The call for action below presents a clear path forward to improved color management.

Call for action
---------------

1.  OS and authoring tools should utilize CRT calibration methods to ensure that images created locally on the monitor are properly translated into sRGB.
2.  Authoring tools should enable the use of the OS color management tools to transform the incoming images into sRGB by combining the incoming device ICC profiles with the sRGB ICC profile. These images will be stored in the original file format (like GIF, PNG and JPEG), but with the correct colors.
3.  Authoring tools should enable the user to view and edit text and graphics in sRGB.
4.  Web page creators should publish content in sRGB.
5.  Browser vendors should support the style sheet extensions proposed above and use the OS color management tools to ensure that colors are properly displayed.
6.  Organizations that create and support file formats should ensure that the file formats encompass the ability to embed profiles and declare their color space.

Acknowledgments
---------------

The authors would like to sincerely thank Ed Giorgianni of Eastman Kodak Company, Bob Sobol of Hewlett-Packard Company, Charles Poynton, author of <span class="underline">A Technical Introduction to Digital Video</span> (John Wiley and Sons), Chris Lilley of W3C, Dave Martindale of the University of British Columbia and many others, for their many insightful comments and encouragement throughout this process.
