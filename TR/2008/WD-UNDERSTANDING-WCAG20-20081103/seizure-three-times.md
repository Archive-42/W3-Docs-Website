[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.3.1 \[Three Flashes or Below Threshold\]](seizure-does-not-violate.html "Understanding SC  2.3.1 [Three Flashes or Below Threshold]")
-   [**Next:** Guideline 2.4 \[Navigable\]](navigation-mechanisms.html "Understanding Guideline  2.4 [Navigable]")

On this page:

-   [Intent](#seizure-three-times-intent-head)
-   [Examples](#seizure-three-times-examples-head)
-   [Related Resources](#seizure-three-times-resources-head)
-   [Techniques & Failures](#seizure-three-times-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="seizure-three-times"></span> **Three Flashes**<span class="screenreader">:</span> Understanding SC 2.3.2
==================================================================================================================

> **[2.3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure-three-times) Three Flashes:** <a href="#webpagedef" class="termref">Web pages</a> do not contain anything that <a href="#flash-def" class="termref">flashes</a> more than three times in any one second period. (Level AAA)

Intent of this Success Criterion
--------------------------------

The purpose of this Success Criterion is to further reduce the chance of seizures. Seizures cannot be completely eliminated since some people are so sensitive. However, by eliminating all 3-per-second flashing over any area of the screen, the chances of a person having a seizure are further reduced than when just meeting the measures ordinarily used today in standards internationally, as we do at Level A.

Whereas [Success Criterion 2.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure-does-not-violate) allows flashing if it is dim enough or has a small enough area, Success Criterion 2.3.2 does not allow flashing greater than 3 per second, regardless of brightness or size. As a result, even a single flashing pixel would violate this criterion. The intent is to guard against flashing larger than a single pixel, but since an unknown amount of magnification or high contrast setting may be applied, the prohibition is against any flashing.

Note: In some cases, what we refer to as "blinking" and what we refer to as "flashing" may overlap slightly. We are using different terms for the two because "blinking" causes a distraction problem which you can allow for a short time as long as it stops (or can be stopped) whereas "flashing" is a seizure trigger and cannot be allowed or it will cause a seizure. The seizure would occur faster than most users could turn it off. "Blink" therefore refers to slow repeating changes that would distract. "Flash" refers to changes that could cause a seizure if they were bright enough or persisted long enough. Blinking usually doesn't occur at speeds of 3 per second or more so blink and flash do not overlap. However, blinking can occur faster than 3 per second so there could be an overlap. See *[Understanding Success Criterion 2.2.2 Pause, Stop, Hide](time-limits-pause.html)* for more information on blink.

### Specific Benefits of Success Criterion 2.3.2:

-   Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.

Examples of Success Criterion 2.3.2
-----------------------------------

-   A movie with a scene involving very bright lightning flashes is edited so that the lightning only flashes three times in any one second period.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Harding FPA Web Site](http://www.hardingfpa.com/)

-   [Trace Center Photosensitive Epilepsy Analysis Tool (PEAT)](http://trace.wisc.edu/peat/)

-   [Information about Photosensitive Seizure Disorders](http://trace.wisc.edu/peat/photosensitive.php)

-   [Epilepsy Action](http://www.epilepsy.org.uk/index.html)

-   [Epilepsy Foundation](http://www.epilepsyfoundation.org/about/photosensitivity/)

-   [Ofcom Guidance Note on Flashing Images and Regular Patterns in Television (PDF)](http://www.ofcom.org.uk/tv/ifi/guidance/bguidance/guidance2.pdf)

Techniques and Failures for Success Criterion 2.3.2 - Three Flashes
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G19)

### Additional Techniques (Advisory) for 2.3.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Reducing contrast for any flashing content (future link)

-   Avoiding fully saturated reds for any flashing content (future link)

-   Reducing the number of flashes even if they don't violate thresholds (future link)

-   Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)

-   Freezing the image momentarily if 3 flashes within one second are detected (future link)

-   Dropping the contrast ratio if 3 flashes within one second are detected (future link)

### Common Failures for SC 2.3.2

The following are common mistakes that are considered failures of Success Criterion 2.3.2 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="flash-def"></span> flash  
a pair of opposing changes in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#relativeluminancedef" class="termref">relative luminance</a> that can cause seizures in some people if it is large enough and in the right frequency range

Note 1: See <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#general-thresholddef" class="termref">general flash and red flash thresholds</a> for information about types of flash that are not allowed.

Note 2: See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#blinksdef" class="termref">blinking</a>.

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
-   [**Previous:** SC 2.3.1 \[Three Flashes or Below Threshold\]](seizure-does-not-violate.html "Understanding SC  2.3.1 [Three Flashes or Below Threshold]")
-   [**Next:** Guideline 2.4 \[Navigable\]](navigation-mechanisms.html "Understanding Guideline  2.4 [Navigable]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
