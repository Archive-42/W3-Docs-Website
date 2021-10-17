-   [Contents](. "Table of Contents")
-   [GL: Seizures and Physical Reactions](seizures-and-physical-reactions)
-   [Previous SC: Three Flashes or Below Threshold](three-flashes-or-below-threshold)
-   [Next SC: Animation from Interactions](animation-from-interactions)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.3.2: Three Flashes
====================================================

> Success Criterion [2.3.2 Three Flashes](https://www.w3.org/TR/WCAG21/#three-flashes) (Level AAA): [Web pages](#dfn-web-page) do not contain anything that [flashes](#dfn-flash) more than three times in any one second period.

Intent
------

The purpose of this Success Criterion is to further reduce the chance of seizures. Seizures cannot be completely eliminated since some people are so sensitive. However, by eliminating all 3-per-second flashing over any area of the screen, the chances of a person having a seizure are further reduced than when just meeting the measures ordinarily used today in standards internationally, as we do at Level A.

Whereas <a href="three-flashes-or-below-threshold" class="guideline">Success Criterion 2.3.1</a> allows flashing if it is dim enough or has a small enough area, Success Criterion 2.3.2 does not allow flashing greater than 3 per second, regardless of brightness or size. As a result, even a single flashing pixel would violate this criterion. The intent is to guard against flashing larger than a single pixel, but since an unknown amount of magnification or high contrast setting may be applied, the prohibition is against any flashing.

Note

In some cases, what we refer to as "blinking" and what we refer to as "flashing" may overlap slightly. We are using different terms for the two because "blinking" causes a distraction problem which you can allow for a short time as long as it stops (or can be stopped) whereas "flashing" is a seizure trigger and cannot be allowed or it will cause a seizure. The seizure would occur faster than most users could turn it off. "Blink" therefore refers to slow repeating changes that would distract. "Flash" refers to changes that could cause a seizure if they were bright enough or persisted long enough. Blinking usually doesn't occur at speeds of 3 per second or more so blink and flash do not overlap. However, blinking can occur faster than 3 per second so there could be an overlap. See [2.2.2: Pause, Stop, Hide](pause-stop-hide) for more information on blink.

Benefits
--------

-   Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.

Examples
--------

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
