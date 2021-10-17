-   [Contents](. "Table of Contents")
-   [GL: Seizures and Physical Reactions](seizures-and-physical-reactions)
-   [Previous SC: Timeouts](timeouts)
-   [Next SC: Three Flashes](three-flashes)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold
=======================================================================

> Success Criterion [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold) (Level A): [Web pages](#dfn-web-page) do not contain anything that flashes more than three times in any one second period, or the [flash](#dfn-flash) is below the [general flash and red flash thresholds](#dfn-general-flash-and-red-flash-thresholds).
>
> Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).

Intent
------

The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity.

Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes. People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing. These guidelines are based on guidelines for the broadcasting industry as adapted for computer screens, where content is viewed from a closer distance (using a larger angle of vision).

Flashing can be caused by the display, the computer rendering the image or by the content being rendered. The author has no control of the first two. They can be addressed by the design and speed of the display and computer. The intent of this criterion is to ensure that flicker that violates the flash thresholds is not caused by the content itself. For example, the content could contain a video clip or animated image of a series of strobe flashes, or close-ups of rapid-fire explosions.

This Success Criterion replaces a much more restrictive criterion in WCAG 1.0 that did not allow any flashing (even of a single pixel) within a broad frequency range (3 to 50 Hz). This Success Criterion is based on existing specifications in use in the UK and by others for television broadcast and has been adapted for computer display viewing. The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)

The combined area of flashes occurring concurrently and contiguously means the total area that is actually flashing at the same time. It is calculated by adding up the contiguous area that is flashing simultaneously within any 10 degree angle of view.

Note

The terms "blinking" and "flashing" can sometimes refer to the same content.

-   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)
-   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.
-   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.

Benefits
--------

-   Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.

Examples
--------

-   A Web site has video of muzzle flash of machine gun fire, but limits the size of the flashing image to a small portion of the screen below the flash threshold size.
-   A movie with a scene involving very bright lightning flashes is edited so that the lightning only flashes three times in any one second period.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Harding FPA Web Site](http://www.hardingfpa.com/)
-   [Trace Center Photosensitive Epilepsy Analysis Tool (PEAT)](http://trace.wisc.edu/peat/)
-   [Information about Photosensitive Seizure Disorders](http://trace.wisc.edu/peat/photosensitive.php)
-   [Epilepsy Action](https://www.epilepsy.org.uk/)
-   [Epilepsy Foundation](http://www.epilepsy.com/learn/triggers-seizures/photosensitivity-and-seizures)
-   [ITC Guidance Note for Licensees on Flashing Images and Regular Patterns in Television](http://www.ofcom.org.uk/static/archive/itc/itc_publications/codes_guidance/flashing_images/index.asp.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G19" class="general">G19: Ensuring that no component of the content flashes more than three times in any 1-second period</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G176" class="general">G176: Keeping the flashing area small enough</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G15" class="general">G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold</a>

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

blinking

switch back and forth between two visual states in a way that is meant to draw attention

Note

See also [flash](#dfn-flash). It is possible for something to be large enough and blink brightly enough at the right frequency to be also classified as a flash.

flash

a pair of opposing changes in [relative luminance](#dfn-relative-luminance) that can cause seizures in some people if it is large enough and in the right frequency range

Note

See [general flash and red flash thresholds](#dfn-general-flash-and-red-flash-thresholds) for information about types of flash that are not allowed.

Note

See also [blinking](#dfn-blinking).

general flash and red flash thresholds

a [flash](#dfn-flash) or rapidly changing image sequence is below the threshold (i.e., content **passes**) if any of the following are true:

1.  there are no more than three **general flashes** and / or no more than three **red flashes** within any one-second period; or
2.  the combined area of flashes occurring concurrently occupies no more than a total of .006 steradians within any 10 degree visual field on the screen (25% of any 10 degree visual field on the screen) at typical viewing distance

where:

-   A **general flash** is defined as a pair of opposing changes in [relative luminance](#dfn-relative-luminance) of 10% or more of the maximum relative luminance where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase, and
-   A **red flash** is defined as any pair of opposing transitions involving a saturated red

*Exception:* Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds.

Note

For general software or Web content, using a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels will provide a good estimate of a 10 degree visual field for standard screen sizes and viewing distances (e.g., 15-17 inch screen at 22-26 inches). (Higher resolutions displays showing the same rendering of the content yield smaller and safer images so it is lower resolutions that are used to define the thresholds.)

Note

A transition is the change in relative luminance (or relative luminance/color for red flashing) between adjacent peaks and valleys in a plot of relative luminance (or relative luminance/color for red flashing) measurement against time. A flash consists of two opposing transitions.

Note

The current working definition in the field for **"pair of opposing transitions involving a saturated red"** is where, for either or both states involved in each transition, R/(R+ G + B) &gt;= 0.8, and the change in the value of (R-G-B)x320 is &gt; 20 (negative values of (R-G-B)x320 are set to zero) for both transitions. R, G, B values range from 0-1 as specified in “relative luminance” definition. \[\[HARDING-BINNIE\]\]

Note

Tools are available that will carry out analysis from video screen capture. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes (see \#1 and \#2 above).

relative luminance

the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

Note

For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

-   if RsRGB &lt;= 0.03928 then **R** = RsRGB/12.92 else **R** = ((RsRGB+0.055)/1.055) ^ 2.4
-   if GsRGB &lt;= 0.03928 then **G** = GsRGB/12.92 else **G** = ((GsRGB+0.055)/1.055) ^ 2.4
-   if BsRGB &lt;= 0.03928 then **B** = BsRGB/12.92 else **B** = ((BsRGB+0.055)/1.055) ^ 2.4

and RsRGB, GsRGB, and BsRGB are defined as:

-   RsRGB = R8bit/255
-   GsRGB = G8bit/255
-   BsRGB = B8bit/255

The "^" character is the exponentiation operator. (Formula taken from \[\[sRGB\]\] and \[\[IEC-4WD\]\]).

Note

Almost all systems used today to view Web content assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast).

Note

If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).

Note

Tools are available that automatically do the calculations when testing contrast and flash.

Note

A [MathML version of the relative luminance definition](relative-luminance.xml) is available.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
