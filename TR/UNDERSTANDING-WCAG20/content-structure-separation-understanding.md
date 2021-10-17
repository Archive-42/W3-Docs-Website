[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html "Understanding SC  1.3.2 [Meaningful Sequence]")
-   [**Next:** Guideline 1.4 \[Distinguishable\]](visual-audio-contrast.html "Understanding Guideline  1.4 [Distinguishable]")

On this page:

-   [Intent](#content-structure-separation-understanding-intent-head)
-   [Examples](#content-structure-separation-understanding-examples-head)
-   [Related Resources](#content-structure-separation-understanding-resources-head)
-   [Techniques & Failures](#content-structure-separation-understanding-techniques-head)

<span id="maincontent">-</span>

<span id="content-structure-separation-understanding"></span> **Sensory Characteristics**<span class="screenreader">:</span> Understanding SC 1.3.3
===================================================================================================================================================

> **[1.3.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-understanding) Sensory Characteristics:** Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A)
>
> *Note:* For requirements related to color, refer to *[Guideline 1.4](visual-audio-contrast.html)*.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that all users can access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation. Some content relies on knowledge of the shape or position of objects that are not available from the structure of the content (for example, "round button" or "button to the right"). Some users with disabilities are not able to perceive shape or position due to the nature of the assistive technologies they use. This Success Criterion requires that additional information be provided to clarify anything that is dependent on this kind of information.

Providing information using shape and/or location, however, is an effective method for many users including those with cognitive limitations. This provision should not discourage those types of cues as long as the information is also provided in other ways.

In some languages, it is commonly understood that "above" refers to the content previous to that point in the content and "below" refers to the content after that point. In such languages, if the content being referenced is in the appropriate place in the reading order and the references are unambiguous, statements such as "choose one of the links below" or "all of the above" would conform to this Success Criterion.

WCAG was designed to apply only to controls that were displayed on a web page. The intent was to avoid describing controls solely via references to visual or auditory cues. When applying this to instructions for operating physical hardware controls (e.g. a web kiosk with dedicated content), tactile cues on the hardware might be described (e.g. the arrow shaped key, the round key on the right side). This success criterion is not intended to prevent the use of tactile cues in instructions.

### Specific Benefits of Success Criterion 1.3.3:

-   People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.

Examples of Success Criterion 1.3.3
-----------------------------------

-   **Example 1: A schedule of competitive events uses color and shape to distinguish the time of each event**

    A table presents a list of times across the top row and a list of events in the first vertical column. The cell corresponding to the time of a particular event has a specific background color and diamond shaped glyph so it can be identified by color and shape.

-   **Example 2: An on-line multi-page survey**

    An on-line multi-page survey uses a link implemented as a green arrow icon placed in the lower right hand corner of the content to move from one survey page to the next. The arrow is clearly labeled with "Next" and the instructions state, "To move to the next section of the survey, select the green arrow icon labeled 'Next' in the lower right corner below the last survey question." This example uses both positioning, color and labeling to help identify the icon.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 1.3.3 - Sensory Characteristics
-----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G96" class="tech-ref">G96: Providing textual identification of items that otherwise rely only on sensory information to be understood</a>

### Additional Techniques (Advisory) for 1.3.3

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using an image with a text alternative for graphical symbols instead of a Unicode font glyph with the desired graphical appearance but different meaning (future link)

### Common Failures for SC 1.3.3

The following are common mistakes that are considered failures of Success Criterion 1.3.3 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F14" class="tech-ref">F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F26" class="tech-ref">F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information</a>

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html "Understanding SC  1.3.2 [Meaningful Sequence]")
-   [**Next:** Guideline 1.4 \[Distinguishable\]](visual-audio-contrast.html "Understanding Guideline  1.4 [Distinguishable]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
