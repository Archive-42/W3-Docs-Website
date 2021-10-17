[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.3 \[Seizures\]](seizure.html "Understanding Guideline  2.3 [Seizures]")
-   [**Next:** SC 2.3.2 \[Three Flashes\]](seizure-three-times.html "Understanding SC  2.3.2 [Three Flashes]")

On this page:

-   [Intent](#seizure-does-not-violate-intent-head)
-   [Examples](#seizure-does-not-violate-examples-head)
-   [Related Resources](#seizure-does-not-violate-resources-head)
-   [Techniques & Failures](#seizure-does-not-violate-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="seizure-does-not-violate"></span> **Three Flashes or Below Threshold**<span class="screenreader">:</span> Understanding SC 2.3.1
==========================================================================================================================================

> **[2.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure-does-not-violate) Three Flashes or Below Threshold:** <a href="#webpagedef" class="termref">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="#flash-def" class="termref">flash</a> is below the <a href="#general-thresholddef" class="termref">general flash and red flash thresholds</a>. (Level A)
>
> Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity.

Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes. People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing. These guidelines are based on guidelines for the broadcasting industry as adapted for computer screens, where content is viewed from a closer distance (using a larger angle of vision).

Flashing can be caused by the display, the computer rendering the image or by the content being rendered. The author has no control of the first two. They can be addressed by the design and speed of the display and computer. The intent of this criterion is to ensure that flicker that violates the flash thresholds is not caused by the content itself. For example, the content could contain a video clip or animated image of a series of strobe flashes, or close-ups of rapid-fire explosions.

This Success Criterion replaces a much more restrictive criterion in WCAG 1.0 that did not allow any flashing (even of a single pixel) within a broad frequency range (3 to 50 Hz). This Success Criterion is based on existing specifications in use in the UK and by others for television broadcast and has been adapted for computer display viewing. The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)

The combined area of flashes occurring concurrently and contiguously means the total area that is actually flashing at the same time. It is calculated by adding up the contiguous area that is flashing simultaneously within any 10 degree angle of view.

Note: The terms "blinking" and "flashing" can sometimes refer to the same content.

-   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)

-   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.

-   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.

### Specific Benefits of Success Criterion 2.3.1:

-   Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.

Examples of Success Criterion 2.3.1
-----------------------------------

-   A Web site has video of muzzle flash of machine gun fire, but limits the size of the flashing image to a small portion of the screen below the flash threshold size.

-   A movie with a scene involving very bright lightning flashes is edited so that the lightning only flashes three times in any one second period.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Harding FPA Web Site](http://www.hardingfpa.com/)

-   [Trace Center Photosensitive Epilepsy Analysis Tool (PEAT)](http://trace.wisc.edu/peat/)

-   [Information about Photosensitive Seizure Disorders](http://trace.wisc.edu/peat/photosensitive.php)

-   [Epilepsy Action](http://www.epilepsy.org.uk)

-   [Epilepsy Foundation](http://www.epilepsyfoundation.org/about/photosensitivity/)

-   [Ofcom Guidance Note on Flashing Images and Regular Patterns in Television (PDF)](http://www.ofcom.org.uk/tv/ifi/guidance/bguidance/guidance2.pdf)

Techniques and Failures for Success Criterion 2.3.1 - Three Flashes or Below Threshold
--------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

1.  [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G19)

2.  [G176: Keeping the flashing area small enough](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G176)

3.  [G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G15)

### Additional Techniques (Advisory) for 2.3.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Reducing contrast for any flashing content (future link)

-   Avoiding fully saturated reds for any flashing content (future link)

-   Reducing the number of flashes even if they do not violate thresholds (future link)

-   Providing a mechanism to suppress any flashing content before it begins (future link)

-   Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)

-   Freezing the image momentarily if 3 flashes within one second are detected (future link)

-   Dropping the contrast ratio if 3 flashes within one second are detected (future link)

### Common Failures for SC 2.3.1

The following are common mistakes that are considered failures of Success Criterion 2.3.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="flash-def"></span> flash  
a pair of opposing changes in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#relativeluminancedef" class="termref">relative luminance</a> that can cause seizures in some people if it is large enough and in the right frequency range

Note 1: See <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#general-thresholddef" class="termref">general flash and red flash thresholds</a> for information about types of flash that are not allowed.

Note 2: See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#blinksdef" class="termref">blinking</a>.

 <span id="general-thresholddef"></span> general flash and red flash thresholds  
a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#flash-def" class="termref">flash</a> or rapidly changing image sequence is below the threshold (i.e. content **passes**) if any of the following are true:

1.  there are no more than three **General Flashes** and / or no more than three **Red Flashes** within any one-second period; or

2.  the combined area of flashes occurring concurrently occupies no more than a total of .006 steradians within any 10 degree visual field on the screen (25% of any 10 degree visual field on the screen) at typical viewing distance

where:

-   A **General Flash** is defined as a pair of opposing changes in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#relativeluminancedef" class="termref">relative luminance</a> of 10% or more of the maximum relative luminance where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase, and

-   A **Red Flash** is defined as any pair of opposing transitions involving a saturated red.

*Exception:* Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds.

Note 1: For general software or Web content, using a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels will provide a good estimate of a 10 degree visual field for standard screen sizes and viewing distances (e.g. 15-17 inch screen at 22-26 inches). (Higher resolutions displays showing the same rendering of the content yield smaller and safer images so it is lower resolutions that are used to define the thresholds.)

Note 2: A transition is the change in relative luminance (or relative luminance/color for red flashing) between adjacent peaks and valleys in a plot of relative luminance (or relative luminance/color for red flashing) measurement against time. A flash consists of two opposing transitions.

Note 3: The current working definition in the field for **"pair of opposing transitions involving a saturated red"** is where, for either or both states involved in each transition, R/(R+ G + B) &gt;= 0.8, and the change in the value of (R-G-B)x320 is &gt; 20 (negative values of (R-G-B)x320 are set to zero) for both transitions. R, G, B values range from 0-1 as specified in “relative luminance” definition. [\[HARDING-BINNIE\]](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#HARDING-BINNIE)

Note 4: Tools are available that will carry out analysis from video screen capture. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes (see \#1 and \#2 above).

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agent</a>

Note 1: Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note 2: For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

Example 1: A Web resource including all embedded images and media.

Example 2: A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

Example 3: A customizable portal site, where users can choose content to display from a set of different content modules.

Example 4: When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.3 \[Seizures\]](seizure.html "Understanding Guideline  2.3 [Seizures]")
-   [**Next:** SC 2.3.2 \[Three Flashes\]](seizure-three-times.html "Understanding SC  2.3.2 [Three Flashes]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
