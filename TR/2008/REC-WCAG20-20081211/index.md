\[[contents](#contents)\]

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span> Web Content Accessibility Guidelines (WCAG) 2.0
========================================================================

<span id="w3c-doctype"></span> W3C Recommendation 11 December 2008
------------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2008/REC-WCAG20-20081211/>

Latest version:  
<http://www.w3.org/TR/WCAG20/>

Previous version:  
<http://www.w3.org/TR/2008/PR-WCAG20-20081103/>

Editors:  
Ben Caldwell, Trace R&D Center, University of Wisconsin-Madison

Michael Cooper, W3C

Loretta Guarino Reid, Google, Inc.

Gregg Vanderheiden, Trace R&D Center, University of Wisconsin-Madison

Previous Editors:  
Wendy Chisholm (until July 2006 while at W3C)

John Slatin (until June 2006 while at Accessibility Institute, University of Texas at Austin)

Jason White (until June 2005 while at University of Melbourne)

Please refer to the [**errata**](http://www.w3.org/WAI/WCAG20/errata/) for this document, which may include normative corrections.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=WCAG20).

This document is also available in non-normative formats, available from [Alternate Versions of Web Content Accessibility Guidelines 2.0](/WAI/WCAG20/versions/guidelines/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span> Abstract
------------------------------------

Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your Web content more usable to users in general.

WCAG 2.0 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See [Web Content Accessibility Guidelines (WCAG) Overview](http://www.w3.org/WAI/intro/wcag.php) for an introduction and links to WCAG technical and educational material.

WCAG 2.0 succeeds [Web Content Accessibility Guidelines 1.0](http://www.w3.org/TR/WCAG10/) [\[WCAG10\]](#WCAG10), which was published as a W3C Recommendation May 1999. Although it is possible to conform either to WCAG 1.0 or to WCAG 2.0 (or both), the W3C recommends that new and updated content use WCAG 2.0. The W3C also recommends that Web accessibility policies reference WCAG 2.0.

<span id="status"></span> Status of this Document
-------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at <http://www.w3.org/TR/>.*

This is the Web Content Accessibility Guidelines (WCAG) 2.0 [W3C Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#RecsW3C) from the [Web Content Accessibility Guidelines Working Group](http://www.w3.org/WAI/GL/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

WCAG 2.0 is supported by the associated non-normative documents, [Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/) and [Techniques for WCAG 2.0](http://www.w3.org/TR/WCAG20-TECHS/). Although those documents do not have the formal status that WCAG 2.0 itself has, they provide information important to understanding and implementing WCAG.

The Working Group requests that any comments be made using the provided [online comment form](http://www.w3.org/WAI/WCAG20/comments/). If this is not possible, comments can also be sent to <public-comments-wcag20@w3.org>. The [archives for the public comments list](http://lists.w3.org/Archives/Public/public-comments-wcag20/) are publicly available. Comments received on the WCAG 2.0 Recommendation cannot result in changes to this version of the guidelines, but may be addressed in errata or future versions of WCAG. The Working Group does not plan to make formal responses to comments. Archives of the [WCAG WG mailing list discussions](http://lists.w3.org/Archives/Public/w3c-wai-gl/) are publicly available, and future work undertaken by the Working Group may address comments received on this document.

This document has been produced as part of the W3C [Web Accessibility Initiative](http://www.w3.org/WAI/) (WAI). The goals of the WCAG Working Group are discussed in the [WCAG Working Group charter](http://www.w3.org/2004/04/wcag-charter). The WCAG Working Group is part of the [WAI Technical Activity](http://www.w3.org/WAI/Technical/Activity).

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/35422/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

------------------------------------------------------------------------

<span id="contents"></span> Table of Contents
---------------------------------------------

-   [Introduction](#intro)
    -   [WCAG 2.0 Layers of Guidance](#intro-layers-guidance)
    -   [WCAG 2.0 Supporting Documents](#intro-related-docs)
    -   [Important Terms in WCAG 2.0](#new-terms)
-   [WCAG 2.0 Guidelines](#guidelines)
    -   [1 Perceivable](#perceivable)
        -   1.1 [Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.](#text-equiv)
        -   1.2 [Provide alternatives for time-based media.](#media-equiv)
        -   1.3 [Create content that can be presented in different ways (for example simpler layout) without losing information or structure.](#content-structure-separation)
        -   1.4 [Make it easier for users to see and hear content including separating foreground from background.](#visual-audio-contrast)
    -   [2 Operable](#operable)
        -   2.1 [Make all functionality available from a keyboard.](#keyboard-operation)
        -   2.2 [Provide users enough time to read and use content.](#time-limits)
        -   2.3 [Do not design content in a way that is known to cause seizures.](#seizure)
        -   2.4 [Provide ways to help users navigate, find content, and determine where they are.](#navigation-mechanisms)
    -   [3 Understandable](#understandable)
        -   3.1 [Make text content readable and understandable.](#meaning)
        -   3.2 [Make Web pages appear and operate in predictable ways.](#consistent-behavior)
        -   3.3 [Help users avoid and correct mistakes.](#minimize-error)
    -   [4 Robust](#robust)
        -   4.1 [Maximize compatibility with current and future user agents, including assistive technologies.](#ensure-compat)
-   [Conformance](#conformance)
    -   [Conformance Requirements](#conformance-reqs)
    -   [Conformance Claims (Optional)](#conformance-claims)
    -   [Statement of Partial Conformance - Third Party Content](#conformance-partial)
    -   [Statement of Partial Conformance - Language](#conformance-partial-lang)

### <span id="appendices"></span> Appendices

-   Appendix A: [Glossary](#glossary) (Normative)
-   Appendix B: [Acknowledgments](#acknowledgments)
-   Appendix C: [References](#references)

------------------------------------------------------------------------

<span id="intro"></span> Introduction
-------------------------------------

This section is <a href="#informativedef" class="termref" title="definition: informative">informative</a>.

Web Content Accessibility Guidelines (WCAG) 2.0 defines how to make Web content more accessible to people with disabilities. Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability. These guidelines also make Web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general.

WCAG 2.0 is developed through the [W3C process](http://www.w3.org/WAI/intro/w3c-process.php) in cooperation with individuals and organizations around the world, with a goal of providing a shared standard for Web content accessibility that meets the needs of individuals, organizations, and governments internationally. WCAG 2.0 builds on WCAG 1.0 [\[WCAG10\]](#WCAG10) and is designed to apply broadly to different Web technologies now and in the future, and to be testable with a combination of automated testing and human evaluation. For an introduction to WCAG, see the [Web Content Accessibility Guidelines (WCAG) Overview](http://www.w3.org/WAI/intro/wcag.php).

Web accessibility depends not only on accessible content but also on accessible Web browsers and other user agents. Authoring tools also have an important role in Web accessibility. For an overview of how these components of Web development and interaction work together, see:

-   **[Essential Components of Web Accessibility](http://www.w3.org/WAI/intro/components)**

-   **[User Agent Accessibility Guidelines (UAAG) Overview](http://www.w3.org/WAI/intro/uaag.php)**

-   **[Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php)**

### <span id="intro-layers-guidance"></span> WCAG 2.0 Layers of Guidance

The individuals and organizations that use WCAG vary widely and include Web designers and developers, policy makers, purchasing agents, teachers, and students. In order to meet the varying needs of this audience, several layers of guidance are provided including overall *principles*, general *guidelines*, testable *success criteria* and a rich collection of *sufficient techniques, advisory techniques*, and *documented common failures* with examples, resource links and code.

-   **Principles** - At the top are four principles that provide the foundation for Web accessibility: *perceivable, operable, understandable, and robust*. See also [Understanding the Four Principles of Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head).

-   **Guidelines** - Under the principles are guidelines. The 12 guidelines provide the basic goals that authors should work toward in order to make content more accessible to users with different disabilities. The guidelines are not testable, but provide the framework and overall objectives to help authors understand the success criteria and better implement the techniques.

-   **Success Criteria** - For each guideline, testable success criteria are provided to allow WCAG 2.0 to be used where requirements and conformance testing are necessary such as in design specification, purchasing, regulation, and contractual agreements. In order to meet the needs of different groups and different situations, three levels of conformance are defined: A (lowest), AA, and AAA (highest). Additional information on WCAG levels can be found in [Understanding Levels of Conformance](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head).

-   **Sufficient and Advisory Techniques** - For each of the *guidelines* and *success criteria* in the WCAG 2.0 document itself, the working group has also documented a wide variety of *techniques*. The techniques are informative and fall into two categories: those that are *sufficient* for meeting the success criteria and those that are *advisory*. The advisory techniques go beyond what is required by the individual success criteria and allow authors to better address the guidelines. Some advisory techniques address accessibility barriers that are not covered by the testable success criteria. Where common failures are known, these are also documented. See also [Sufficient and Advisory Techniques in Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-layers-techs-head).

All of these layers of guidance (principles, guidelines, success criteria, and sufficient and advisory techniques) work together to provide guidance on how to make content more accessible. Authors are encouraged to view and apply all layers that they are able to, including the advisory techniques, in order to best address the needs of the widest possible range of users.

Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive language and learning areas. Authors are encouraged to consider the full range of techniques, including the advisory techniques, as well as to seek relevant advice about current best practice to ensure that Web content is accessible, as far as possible, to this community. [Metadata](http://www.w3.org/TR/UNDERSTANDING-WCAG20/appendixC.html#understanding-metadata) may assist users in finding content most suitable for their needs.

### <span id="intro-related-docs"></span> WCAG 2.0 Supporting Documents

The WCAG 2.0 document is designed to meet the needs of those who need a stable, referenceable technical standard. Other documents, called supporting documents, are based on the WCAG 2.0 document and address other important purposes, including the ability to be updated to describe how WCAG would be applied with new technologies. Supporting documents include:

1.  **[How to Meet WCAG 2.0](/WAI/WCAG20/quickref/)** - A customizable quick reference to WCAG 2.0 that includes all of the guidelines, success criteria, and techniques for authors to use as they are developing and evaluating Web content.

2.  **[Understanding WCAG 2.0](/TR/UNDERSTANDING-WCAG20/)** - A guide to understanding and implementing WCAG 2.0. There is a short "Understanding" document for each guideline and success criterion in WCAG 2.0 as well as key topics.

3.  **[Techniques for WCAG 2.0](/TR/WCAG20-TECHS/)** - A collection of techniques and common failures, each in a separate document that includes a description, examples, code and tests.

4.  **[The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20)** - A diagram and description of how the technical documents are related and linked.

See [Web Content Accessibility Guidelines (WCAG) Overview](http://www.w3.org/WAI/intro/wcag.php) for a description of the WCAG 2.0 supporting material, including education resources related to WCAG 2.0. Additional resources covering topics such as the business case for Web accessibility, planning implementation to improve the accessibility of Web sites, and accessibility policies are listed in [WAI Resources](http://www.w3.org/WAI/Resources/Overview).

### <span id="new-terms"></span> Important Terms in WCAG 2.0

WCAG 2.0 includes three important terms that are different from WCAG 1.0. Each of these is introduced briefly below and defined more fully in the glossary.

Web Page  
It is important to note that, in this standard, the term "<a href="#webpagedef" class="termref" title="definition: Web page">Web page</a>" includes much more than static HTML pages. It also includes the increasingly dynamic Web pages that are emerging on the Web, including "pages" that can present entire virtual interactive communities. For example, the term "Web page" includes an immersive, interactive movie-like experience found at a single URI. For more information, see [Understanding "Web Page"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-web-page-head).

Programmatically Determined  
Several success criteria require that content (or certain aspects of content) can be "<a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a>." This means that the content is delivered in such a way that <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>, including <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a>, can extract and present this information to users in different modalities. For more information, see [Understanding Programmatically Determined](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-programmatically-determined-head).

Accessibility Supported  
Using a technology in a way that is accessibility supported means that it works with assistive technologies (AT) and the accessibility features of operating systems, browsers, and other user agents. Technology features can only be <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> to conform to WCAG 2.0 success criteria if they are used in a way that is "<a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility supported</a>". Technology features can be used in ways that are not accessibility supported (do not work with assistive technologies, etc.) as long as they are not relied upon to conform to any success criterion (i.e., the same information or functionality is also available another way that is supported).

The definition of "accessibility supported" is provided in the [Appendix A: Glossary](#glossary) section of these guidelines. For more information, see [Understanding Accessibility Support](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head).

<span id="guidelines"></span> WCAG 2.0 Guidelines
-------------------------------------------------

This section is <a href="#normativedef" class="termref" title="definition: normative">normative</a>.

<span id="perceivable"></span> Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.
-----------------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="text-equiv"></span> Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

[Understanding Guideline 1.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html)

**1.1.1 Non-text Content:** All <a href="#non-text-contentdef" class="termref" title="definition: non-text content">non-text content</a> that is presented to the user has a <a href="#text-altdef" class="termref" title="definition: text alternative">text alternative</a> that serves the equivalent purpose, except for the situations listed below. (Level A)

-   **Controls, Input:** If non-text content is a control or accepts user input, then it has a <a href="#namedef" class="termref" title="definition: name">name</a> that describes its purpose. (Refer to [Guideline 4.1](#ensure-compat) for additional requirements for controls and content that accepts user input.)

-   **Time-Based Media:** If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to [Guideline 1.2](#media-equiv) for additional requirements for media.)

-   **Test:** If non-text content is a test or exercise that would be invalid if presented in <a href="#textdef" class="termref" title="definition: text">text</a>, then text alternatives at least provide descriptive identification of the non-text content.

-   **Sensory:** If non-text content is primarily intended to create a <a href="#sensoryexpdef" class="termref" title="definition: specific sensory experience">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.

-   **<a href="#CAPTCHAdef" class="termref" title="definition: CAPTCHA">CAPTCHA</a>:** If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.

-   **Decoration, Formatting, Invisible:** If non-text content is <a href="#puredecdef" class="termref" title="definition: pure decoration">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technology</a>.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-text-equiv-all" class="HTMlink" title="How to Meet Success Criterion 1.1.1">How to Meet 1.1.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html" class="HTMlink" title="Understanding Success Criterion 1.1.1">Understanding 1.1.1</a>

### <span id="media-equiv"></span> Guideline 1.2 Time-based Media: Provide alternatives for time-based media.

[Understanding Guideline 1.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv.html)

**1.2.1 Audio-only and Video-only (Prerecorded):** For <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#audio-onlydef" class="termref" title="definition: audio-only">audio-only</a> and prerecorded <a href="#video-onlydef" class="termref" title="definition: video-only">video-only</a> media, the following are true, except when the audio or video is a <a href="#multimedia-alt-textdef" class="termref" title="definition: media alternative for text">media alternative for text</a> and is clearly labeled as such: (Level A)

-   **Prerecorded Audio-only:** An <a href="#alt-time-based-mediadef" class="termref" title="definition: alternative for time-based media">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.

-   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-av-only-alt" class="HTMlink" title="How to Meet Success Criterion 1.2.1">How to Meet 1.2.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html" class="HTMlink" title="Understanding Success Criterion 1.2.1">Understanding 1.2.1</a>

**1.2.2 Captions (Prerecorded):** <a href="#captionsdef" class="termref" title="definition: captions">Captions</a> are provided for all <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#audiodef" class="termref" title="definition: audio">audio</a> content in <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>, except when the media is a <a href="#multimedia-alt-textdef" class="termref" title="definition: media alternative for text">media alternative for text</a> and is clearly labeled as such. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-captions" class="HTMlink" title="How to Meet Success Criterion 1.2.2">How to Meet 1.2.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html" class="HTMlink" title="Understanding Success Criterion 1.2.2">Understanding 1.2.2</a>

**1.2.3 Audio Description or Media Alternative (Prerecorded):** An <a href="#alt-time-based-mediadef" class="termref" title="definition: alternative for time-based media">alternative for time-based media</a> or <a href="#audiodescdef" class="termref" title="definition: audio description">audio description</a> of the <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#videodef" class="termref" title="definition: video">video</a> content is provided for <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>, except when the media is a <a href="#multimedia-alt-textdef" class="termref" title="definition: media alternative for text">media alternative for text</a> and is clearly labeled as such. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc" class="HTMlink" title="How to Meet Success Criterion 1.2.3">How to Meet 1.2.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html" class="HTMlink" title="Understanding Success Criterion 1.2.3">Understanding 1.2.3</a>

**1.2.4 Captions (Live):** <a href="#captionsdef" class="termref" title="definition: captions">Captions</a> are provided for all <a href="#livedef" class="termref" title="definition: live">live</a> <a href="#audiodef" class="termref" title="definition: audio">audio</a> content in <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-real-time-captions" class="HTMlink" title="How to Meet Success Criterion 1.2.4">How to Meet 1.2.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html" class="HTMlink" title="Understanding Success Criterion 1.2.4">Understanding 1.2.4</a>

**1.2.5 Audio Description (Prerecorded):** <a href="#audiodescdef" class="termref" title="definition: audio description">Audio description</a> is provided for all <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#videodef" class="termref" title="definition: video">video</a> content in <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc-only" class="HTMlink" title="How to Meet Success Criterion 1.2.5">How to Meet 1.2.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html" class="HTMlink" title="Understanding Success Criterion 1.2.5">Understanding 1.2.5</a>

**1.2.6 Sign Language (Prerecorded):** <a href="#sign-languageinterpdef" class="termref" title="definition: sign language interpretation">Sign language interpretation</a> is provided for all <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#audiodef" class="termref" title="definition: audio">audio</a> content in <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-sign" class="HTMlink" title="How to Meet Success Criterion 1.2.6">How to Meet 1.2.6</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html" class="HTMlink" title="Understanding Success Criterion 1.2.6">Understanding 1.2.6</a>

**1.2.7 Extended Audio Description (Prerecorded):** Where pauses in foreground audio are insufficient to allow <a href="#audiodescdef" class="termref" title="definition: audio description">audio descriptions</a> to convey the sense of the video, <a href="#extended-addef" class="termref" title="definition: extended audio description">extended audio description</a> is provided for all <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#videodef" class="termref" title="definition: video">video</a> content in <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-extended-ad" class="HTMlink" title="How to Meet Success Criterion 1.2.7">How to Meet 1.2.7</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html" class="HTMlink" title="Understanding Success Criterion 1.2.7">Understanding 1.2.7</a>

**1.2.8 Media Alternative (Prerecorded):** An <a href="#alt-time-based-mediadef" class="termref" title="definition: alternative for time-based media">alternative for time-based media</a> is provided for all <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a> and for all prerecorded <a href="#video-onlydef" class="termref" title="definition: video-only">video-only</a> media. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-text-doc" class="HTMlink" title="How to Meet Success Criterion 1.2.8">How to Meet 1.2.8</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html" class="HTMlink" title="Understanding Success Criterion 1.2.8">Understanding 1.2.8</a>

**1.2.9 Audio-only (Live):** An <a href="#alt-time-based-mediadef" class="termref" title="definition: alternative for time-based media">alternative for time-based media</a> that presents equivalent information for <a href="#livedef" class="termref" title="definition: live">live</a> <a href="#audio-onlydef" class="termref" title="definition: audio-only">audio-only</a> content is provided. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-live-audio-only" class="HTMlink" title="How to Meet Success Criterion 1.2.9">How to Meet 1.2.9</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html" class="HTMlink" title="Understanding Success Criterion 1.2.9">Understanding 1.2.9</a>

### <span id="content-structure-separation"></span> Guideline 1.3 Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

[Understanding Guideline 1.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation.html)

**1.3.1 Info and Relationships:** Information, <a href="#structuredef" class="termref" title="definition: structure">structure</a>, and <a href="#relationshipsdef" class="termref" title="definition: relationships">relationships</a> conveyed through <a href="#presentationdef" class="termref" title="definition: presentation">presentation</a> can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a> or are available in text. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic" class="HTMlink" title="How to Meet Success Criterion 1.3.1">How to Meet 1.3.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html" class="HTMlink" title="Understanding Success Criterion 1.3.1">Understanding 1.3.1</a>

**1.3.2 Meaningful Sequence:** When the sequence in which content is presented affects its meaning, a <a href="#correct-reading-sequencedef" class="termref" title="definition: correct reading sequence">correct reading sequence</a> can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a>. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-sequence" class="HTMlink" title="How to Meet Success Criterion 1.3.2">How to Meet 1.3.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html" class="HTMlink" title="Understanding Success Criterion 1.3.2">Understanding 1.3.2</a>

**1.3.3 Sensory Characteristics:** Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A)

*Note:* For requirements related to color, refer to [Guideline 1.4](#visual-audio-contrast).

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-understanding" class="HTMlink" title="How to Meet Success Criterion 1.3.3">How to Meet 1.3.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html" class="HTMlink" title="Understanding Success Criterion 1.3.3">Understanding 1.3.3</a>

### <span id="visual-audio-contrast"></span> Guideline 1.4 Distinguishable: Make it easier for users to see and hear content including separating foreground from background.

[Understanding Guideline 1.4](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html)

**1.4.1 Use of Color:** Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)

*Note:* This success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](#content-structure-separation) including programmatic access to color and other visual presentation coding.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-without-color" class="HTMlink" title="How to Meet Success Criterion 1.4.1">How to Meet 1.4.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html" class="HTMlink" title="Understanding Success Criterion 1.4.1">Understanding 1.4.1</a>

**1.4.2 Audio Control:** If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A)

*Note:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-dis-audio" class="HTMlink" title="How to Meet Success Criterion 1.4.2">How to Meet 1.4.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html" class="HTMlink" title="Understanding Success Criterion 1.4.2">Understanding 1.4.2</a>

**1.4.3 Contrast (Minimum):** The visual presentation of <a href="#textdef" class="termref" title="definition: text">text</a> and <a href="#images-of-textdef" class="termref" title="definition: image of text">images of text</a> has a <a href="#contrast-ratiodef" class="termref" title="definition: contrast ratio">contrast ratio</a> of at least 4.5:1, except for the following: (Level AA)

-   **Large Text:** <a href="#larger-scaledef" class="termref" title="definition: large scale (text)">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;

-   **Incidental:** Text or images of text that are part of an inactive <a href="#user-interface-componentdef" class="termref" title="definition: user interface component">user interface component</a>, that are <a href="#puredecdef" class="termref" title="definition: pure decoration">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast" class="HTMlink" title="How to Meet Success Criterion 1.4.3">How to Meet 1.4.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" class="HTMlink" title="Understanding Success Criterion 1.4.3">Understanding 1.4.3</a>

**1.4.4 Resize text:** Except for <a href="#captionsdef" class="termref" title="definition: captions">captions</a> and <a href="#images-of-textdef" class="termref" title="definition: image of text">images of text</a>, <a href="#textdef" class="termref" title="definition: text">text</a> can be resized without <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technology</a> up to 200 percent without loss of content or functionality. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-scale" class="HTMlink" title="How to Meet Success Criterion 1.4.4">How to Meet 1.4.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html" class="HTMlink" title="Understanding Success Criterion 1.4.4">Understanding 1.4.4</a>

**1.4.5 Images of Text:** If the technologies being used can achieve the visual presentation, <a href="#textdef" class="termref" title="definition: text">text</a> is used to convey information rather than <a href="#images-of-textdef" class="termref" title="definition: image of text">images of text</a> except for the following: (Level AA)

-   **Customizable:** The image of text can be <a href="#visually-customizeddef" class="termref" title="definition: visually customized">visually customized</a> to the user's requirements;

-   **Essential:** A particular presentation of text is <a href="#essentialdef" class="termref" title="definition: essential">essential</a> to the information being conveyed.

*Note:* Logotypes (text that is part of a logo or brand name) are considered essential.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation" class="HTMlink" title="How to Meet Success Criterion 1.4.5">How to Meet 1.4.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html" class="HTMlink" title="Understanding Success Criterion 1.4.5">Understanding 1.4.5</a>

**1.4.6 Contrast (Enhanced):** The visual presentation of <a href="#textdef" class="termref" title="definition: text">text</a> and <a href="#images-of-textdef" class="termref" title="definition: image of text">images of text</a> has a <a href="#contrast-ratiodef" class="termref" title="definition: contrast ratio">contrast ratio</a> of at least 7:1, except for the following: (Level AAA)

-   **Large Text:** <a href="#larger-scaledef" class="termref" title="definition: large scale (text)">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1;

-   **Incidental:** Text or images of text that are part of an inactive <a href="#user-interface-componentdef" class="termref" title="definition: user interface component">user interface component</a>, that are <a href="#puredecdef" class="termref" title="definition: pure decoration">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast7" class="HTMlink" title="How to Meet Success Criterion 1.4.6">How to Meet 1.4.6</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html" class="HTMlink" title="Understanding Success Criterion 1.4.6">Understanding 1.4.6</a>

**1.4.7 Low or No Background Audio:** For <a href="#prerecordeddef" class="termref" title="definition: prerecorded">prerecorded</a> <a href="#audio-onlydef" class="termref" title="definition: audio-only">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a href="#CAPTCHAdef" class="termref" title="definition: CAPTCHA">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: (Level AAA)

-   **No Background:** The audio does not contain background sounds.

-   **Turn Off:** The background sounds can be turned off.

-   **20 dB:** The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.

    *Note:* Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-noaudio" class="HTMlink" title="How to Meet Success Criterion 1.4.7">How to Meet 1.4.7</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-noaudio.html" class="HTMlink" title="Understanding Success Criterion 1.4.7">Understanding 1.4.7</a>

**1.4.8 Visual Presentation:** For the visual presentation of <a href="#blockstextdef" class="termref" title="definition: blocks of text">blocks of text</a>, a <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available to achieve the following: (Level AAA)

1.  Foreground and background colors can be selected by the user.

2.  Width is no more than 80 characters or glyphs (40 if CJK).

3.  Text is not justified (aligned to both the left and the right margins).

4.  Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

5.  Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="#fullscreenwindowdef" class="termref" title="definition: on a full-screen window">on a full-screen window</a>.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-visual-presentation" class="HTMlink" title="How to Meet Success Criterion 1.4.8">How to Meet 1.4.8</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" class="HTMlink" title="Understanding Success Criterion 1.4.8">Understanding 1.4.8</a>

**1.4.9 Images of Text (No Exception):** <a href="#images-of-textdef" class="termref" title="definition: image of text">Images of text</a> are only used for <a href="#puredecdef" class="termref" title="definition: pure decoration">pure decoration</a> or where a particular presentation of <a href="#textdef" class="termref" title="definition: text">text</a> is <a href="#essentialdef" class="termref" title="definition: essential">essential</a> to the information being conveyed. (Level AAA)

*Note:* Logotypes (text that is part of a logo or brand name) are considered essential.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-images" class="HTMlink" title="How to Meet Success Criterion 1.4.9">How to Meet 1.4.9</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html" class="HTMlink" title="Understanding Success Criterion 1.4.9">Understanding 1.4.9</a>

<span id="operable"></span> Principle 2: Operable - User interface components and navigation must be operable.
--------------------------------------------------------------------------------------------------------------

### <span id="keyboard-operation"></span> Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard.

[Understanding Guideline 2.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html)

**2.1.1 Keyboard:** All <a href="#functiondef" class="termref" title="definition: functionality">functionality</a> of the content is operable through a <a href="#keybrd-interfacedef" class="termref" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. (Level A)

*Note 1:* This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.

*Note 2:* This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable" class="HTMlink" title="How to Meet Success Criterion 2.1.1">How to Meet 2.1.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html" class="HTMlink" title="Understanding Success Criterion 2.1.1">Understanding 2.1.1</a>

**2.1.2 No Keyboard Trap:** If keyboard focus can be moved to a component of the page using a <a href="#keybrd-interfacedef" class="termref" title="definition: keyboard interface">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A)

*Note:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-trapping" class="HTMlink" title="How to Meet Success Criterion 2.1.2">How to Meet 2.1.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html" class="HTMlink" title="Understanding Success Criterion 2.1.2">Understanding 2.1.2</a>

**2.1.3 Keyboard (No Exception):** All <a href="#functiondef" class="termref" title="definition: functionality">functionality</a> of the content is operable through a <a href="#keybrd-interfacedef" class="termref" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-all-funcs" class="HTMlink" title="How to Meet Success Criterion 2.1.3">How to Meet 2.1.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html" class="HTMlink" title="Understanding Success Criterion 2.1.3">Understanding 2.1.3</a>

### <span id="time-limits"></span> Guideline 2.2 Enough Time: Provide users enough time to read and use content.

[Understanding Guideline 2.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html)

**2.2.1 Timing Adjustable:** For each time limit that is set by the content, at least one of the following is true: (Level A)

-   **Turn off:** The user is allowed to turn off the time limit before encountering it; or

-   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or

-   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or

-   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or

-   **Essential Exception:** The time limit is <a href="#essentialdef" class="termref" title="definition: essential">essential</a> and extending it would invalidate the activity; or

-   **20 Hour Exception:** The time limit is longer than 20 hours.

*Note:* This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](#consistent-behavior-receive-focus), which puts limits on changes of content or context as a result of user action.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-required-behaviors" class="HTMlink" title="How to Meet Success Criterion 2.2.1">How to Meet 2.2.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html" class="HTMlink" title="Understanding Success Criterion 2.2.1">Understanding 2.2.1</a>

**2.2.2 Pause, Stop, Hide:** For moving, <a href="#blinksdef" class="termref" title="definition: blinking">blinking</a>, scrolling, or auto-updating information, all of the following are true: (Level A)

-   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="#pauseddef" class="termref" title="definition: paused">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="#essentialdef" class="termref" title="definition: essential">essential</a>; and

-   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

*Note 1:* For requirements related to flickering or flashing content, refer to [Guideline 2.3](#seizure).

*Note 2:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

*Note 3:* Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.

*Note 4:* An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause" class="HTMlink" title="How to Meet Success Criterion 2.2.2">How to Meet 2.2.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html" class="HTMlink" title="Understanding Success Criterion 2.2.2">Understanding 2.2.2</a>

**2.2.3 No Timing:** Timing is not an <a href="#essentialdef" class="termref" title="definition: essential">essential</a> part of the event or activity presented by the content, except for non-interactive <a href="#synchronizedmediadef" class="termref" title="definition: synchronized media">synchronized media</a> and <a href="#real-time-eventsdef" class="termref" title="definition: real-time event">real-time events</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-no-exceptions" class="HTMlink" title="How to Meet Success Criterion 2.2.3">How to Meet 2.2.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html" class="HTMlink" title="Understanding Success Criterion 2.2.3">Understanding 2.2.3</a>

**2.2.4 Interruptions:** Interruptions can be postponed or suppressed by the user, except interruptions involving an <a href="#emergencydef" class="termref" title="definition: emergency">emergency</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-postponed" class="HTMlink" title="How to Meet Success Criterion 2.2.4">How to Meet 2.2.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html" class="HTMlink" title="Understanding Success Criterion 2.2.4">Understanding 2.2.4</a>

**2.2.5 Re-authenticating:** When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-server-timeout" class="HTMlink" title="How to Meet Success Criterion 2.2.5">How to Meet 2.2.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html" class="HTMlink" title="Understanding Success Criterion 2.2.5">Understanding 2.2.5</a>

### <span id="seizure"></span> Guideline 2.3 Seizures: Do not design content in a way that is known to cause seizures.

[Understanding Guideline 2.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure.html)

**2.3.1 Three Flashes or Below Threshold:** <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="#flash-def" class="termref" title="definition: flash">flash</a> is below the <a href="#general-thresholddef" class="termref" title="definition: general flash and red flash thresholds">general flash and red flash thresholds</a>. (Level A)

*Note:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-does-not-violate" class="HTMlink" title="How to Meet Success Criterion 2.3.1">How to Meet 2.3.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html" class="HTMlink" title="Understanding Success Criterion 2.3.1">Understanding 2.3.1</a>

**2.3.2 Three Flashes:** <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> do not contain anything that <a href="#flash-def" class="termref" title="definition: flash">flashes</a> more than three times in any one second period. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-three-times" class="HTMlink" title="How to Meet Success Criterion 2.3.2">How to Meet 2.3.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html" class="HTMlink" title="Understanding Success Criterion 2.3.2">Understanding 2.3.2</a>

### <span id="navigation-mechanisms"></span> Guideline 2.4 Navigable: Provide ways to help users navigate, find content, and determine where they are.

[Understanding Guideline 2.4](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms.html)

**2.4.1 Bypass Blocks:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a>. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-skip" class="HTMlink" title="How to Meet Success Criterion 2.4.1">How to Meet 2.4.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html" class="HTMlink" title="Understanding Success Criterion 2.4.1">Understanding 2.4.1</a>

**2.4.2 Page Titled:** <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> have titles that describe topic or purpose. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-title" class="HTMlink" title="How to Meet Success Criterion 2.4.2">How to Meet 2.4.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html" class="HTMlink" title="Understanding Success Criterion 2.4.2">Understanding 2.4.2</a>

**2.4.3 Focus Order:** If a <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> can be <a href="#nav-seqdef" class="termref" title="definition: navigated sequentially">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-order" class="HTMlink" title="How to Meet Success Criterion 2.4.3">How to Meet 2.4.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html" class="HTMlink" title="Understanding Success Criterion 2.4.3">Understanding 2.4.3</a>

**2.4.4 Link Purpose (In Context):** The <a href="#linkpurposedef" class="termref" title="definition: link purpose">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a href="#pdlinkcontextdef" class="termref" title="definition: programmatically determined link context">programmatically determined link context</a>, except where the purpose of the link would be <a href="#ambiguouslinkdef" class="termref" title="definition: ambiguous to users in general">ambiguous to users in general</a>. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-refs" class="HTMlink" title="How to Meet Success Criterion 2.4.4">How to Meet 2.4.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html" class="HTMlink" title="Understanding Success Criterion 2.4.4">Understanding 2.4.4</a>

**2.4.5 Multiple Ways:** More than one way is available to locate a <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> within a <a href="#set-of-web-pagesdef" class="termref" title="definition: set of Web pages">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="#processdef" class="termref" title="definition: process">process</a>. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-mult-loc" class="HTMlink" title="How to Meet Success Criterion 2.4.5">How to Meet 2.4.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html" class="HTMlink" title="Understanding Success Criterion 2.4.5">Understanding 2.4.5</a>

**2.4.6 Headings and Labels:** Headings and <a href="#labeldef" class="termref" title="definition: label">labels</a> describe topic or purpose. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-descriptive" class="HTMlink" title="How to Meet Success Criterion 2.4.6">How to Meet 2.4.6</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html" class="HTMlink" title="Understanding Success Criterion 2.4.6">Understanding 2.4.6</a>

**2.4.7 Focus Visible:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-visible" class="HTMlink" title="How to Meet Success Criterion 2.4.7">How to Meet 2.4.7</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html" class="HTMlink" title="Understanding Success Criterion 2.4.7">Understanding 2.4.7</a>

**2.4.8 Location:** Information about the user's location within a <a href="#set-of-web-pagesdef" class="termref" title="definition: set of Web pages">set of Web pages</a> is available. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-location" class="HTMlink" title="How to Meet Success Criterion 2.4.8">How to Meet 2.4.8</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html" class="HTMlink" title="Understanding Success Criterion 2.4.8">Understanding 2.4.8</a>

**2.4.9 Link Purpose (Link Only):** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="#ambiguouslinkdef" class="termref" title="definition: ambiguous to users in general">ambiguous to users in general</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-link" class="HTMlink" title="How to Meet Success Criterion 2.4.9">How to Meet 2.4.9</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html" class="HTMlink" title="Understanding Success Criterion 2.4.9">Understanding 2.4.9</a>

**2.4.10 Section Headings:** <a href="#sectiondef" class="termref" title="definition: section">Section</a> headings are used to organize the content. (Level AAA)

*Note 1:* "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.

*Note 2:* This success criterion covers sections within writing, not <a href="#user-interface-componentdef" class="termref" title="definition: user interface component">user interface components</a>. User Interface components are covered under [Success Criterion 4.1.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv).

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-headings" class="HTMlink" title="How to Meet Success Criterion 2.4.10">How to Meet 2.4.10</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html" class="HTMlink" title="Understanding Success Criterion 2.4.10">Understanding 2.4.10</a>

<span id="understandable"></span> Principle 3: Understandable - Information and the operation of user interface must be understandable.
---------------------------------------------------------------------------------------------------------------------------------------

### <span id="meaning"></span> Guideline 3.1 Readable: Make text content readable and understandable.

[Understanding Guideline 3.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html)

**3.1.1 Language of Page:** The default <a href="#human-langdef" class="termref" title="definition: human language">human language</a> of each <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a>. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-doc-lang-id" class="HTMlink" title="How to Meet Success Criterion 3.1.1">How to Meet 3.1.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html" class="HTMlink" title="Understanding Success Criterion 3.1.1">Understanding 3.1.1</a>

**3.1.2 Language of Parts:** The <a href="#human-langdef" class="termref" title="definition: human language">human language</a> of each passage or phrase in the content can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-other-lang-id" class="HTMlink" title="How to Meet Success Criterion 3.1.2">How to Meet 3.1.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html" class="HTMlink" title="Understanding Success Criterion 3.1.2">Understanding 3.1.2</a>

**3.1.3 Unusual Words:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available for identifying specific definitions of words or phrases <a href="#unusual-restricteddef" class="termref" title="definition: used in an unusual or restricted way">used in an unusual or restricted way</a>, including <a href="#idiomsdef" class="termref" title="definition: idiom">idioms</a> and <a href="#jargondef" class="termref" title="definition: jargon">jargon</a>. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-idioms" class="HTMlink" title="How to Meet Success Criterion 3.1.3">How to Meet 3.1.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-idioms.html" class="HTMlink" title="Understanding Success Criterion 3.1.3">Understanding 3.1.3</a>

**3.1.4 Abbreviations:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> for identifying the expanded form or meaning of <a href="#abbreviationsdef" class="termref" title="definition: abbreviation">abbreviations</a> is available. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-located" class="HTMlink" title="How to Meet Success Criterion 3.1.4">How to Meet 3.1.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html" class="HTMlink" title="Understanding Success Criterion 3.1.4">Understanding 3.1.4</a>

**3.1.5 Reading Level:** When text requires reading ability more advanced than the <a href="#lowseceddef" class="termref" title="definition: lower secondary education level">lower secondary education level</a> after removal of proper names and titles, <a href="#suppcontentdef" class="termref" title="definition: supplemental content">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-supplements" class="HTMlink" title="How to Meet Success Criterion 3.1.5">How to Meet 3.1.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html" class="HTMlink" title="Understanding Success Criterion 3.1.5">Understanding 3.1.5</a>

**3.1.6 Pronunciation:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-pronunciation" class="HTMlink" title="How to Meet Success Criterion 3.1.6">How to Meet 3.1.6</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-pronunciation.html" class="HTMlink" title="Understanding Success Criterion 3.1.6">Understanding 3.1.6</a>

### <span id="consistent-behavior"></span> Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways.

[Understanding Guideline 3.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior.html)

**3.2.1 On Focus:** When any component receives focus, it does not initiate a <a href="#context-changedef" class="termref" title="definition: changes of context">change of context</a>. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-receive-focus" class="HTMlink" title="How to Meet Success Criterion 3.2.1">How to Meet 3.2.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html" class="HTMlink" title="Understanding Success Criterion 3.2.1">Understanding 3.2.1</a>

**3.2.2 On Input:** Changing the setting of any <a href="#user-interface-componentdef" class="termref" title="definition: user interface component">user interface component</a> does not automatically cause a <a href="#context-changedef" class="termref" title="definition: changes of context">change of context</a> unless the user has been advised of the behavior before using the component. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-unpredictable-change" class="HTMlink" title="How to Meet Success Criterion 3.2.2">How to Meet 3.2.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html" class="HTMlink" title="Understanding Success Criterion 3.2.2">Understanding 3.2.2</a>

**3.2.3 Consistent Navigation:** Navigational mechanisms that are repeated on multiple <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> within a <a href="#set-of-web-pagesdef" class="termref" title="definition: set of Web pages">set of Web pages</a> occur in the <a href="#samerelorderdef" class="termref" title="definition: same relative order">same relative order</a> each time they are repeated, unless a change is initiated by the user. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-locations" class="HTMlink" title="How to Meet Success Criterion 3.2.3">How to Meet 3.2.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html" class="HTMlink" title="Understanding Success Criterion 3.2.3">Understanding 3.2.3</a>

**3.2.4 Consistent Identification:** Components that have the <a href="#samefunctionalitydef" class="termref" title="definition: same functionality ">same functionality</a> within a set of <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> are identified consistently. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-functionality" class="HTMlink" title="How to Meet Success Criterion 3.2.4">How to Meet 3.2.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html" class="HTMlink" title="Understanding Success Criterion 3.2.4">Understanding 3.2.4</a>

**3.2.5 Change on Request:** <a href="#context-changedef" class="termref" title="definition: changes of context">Changes of context</a> are initiated only by user request or a <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available to turn off such changes. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-no-extreme-changes-context" class="HTMlink" title="How to Meet Success Criterion 3.2.5">How to Meet 3.2.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html" class="HTMlink" title="Understanding Success Criterion 3.2.5">Understanding 3.2.5</a>

### <span id="minimize-error"></span> Guideline 3.3 Input Assistance: Help users avoid and correct mistakes.

[Understanding Guideline 3.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html)

**3.3.1 Error Identification:** If an <a href="#input-errordef" class="termref" title="definition: input error">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-identified" class="HTMlink" title="How to Meet Success Criterion 3.3.1">How to Meet 3.3.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html" class="HTMlink" title="Understanding Success Criterion 3.3.1">Understanding 3.3.1</a>

**3.3.2 Labels or Instructions:** <a href="#labeldef" class="termref" title="definition: label">Labels</a> or instructions are provided when content requires user input. (Level A)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-cues" class="HTMlink" title="How to Meet Success Criterion 3.3.2">How to Meet 3.3.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html" class="HTMlink" title="Understanding Success Criterion 3.3.2">Understanding 3.3.2</a>

**3.3.3 Error Suggestion:** If an <a href="#input-errordef" class="termref" title="definition: input error">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. (Level AA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-suggestions" class="HTMlink" title="How to Meet Success Criterion 3.3.3">How to Meet 3.3.3</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html" class="HTMlink" title="Understanding Success Criterion 3.3.3">Understanding 3.3.3</a>

**3.3.4 Error Prevention (Legal, Financial, Data):** For <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> that cause <a href="#legalcommitmentsdef" class="termref" title="definition: legal commitments">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="#user-controllabledef" class="termref" title="definition: user-controllable">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: (Level AA)

1.  **Reversible:** Submissions are reversible.

2.  **Checked:** Data entered by the user is checked for <a href="#input-errordef" class="termref" title="definition: input error">input errors</a> and the user is provided an opportunity to correct them.

3.  **Confirmed:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible" class="HTMlink" title="How to Meet Success Criterion 3.3.4">How to Meet 3.3.4</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html" class="HTMlink" title="Understanding Success Criterion 3.3.4">Understanding 3.3.4</a>

**3.3.5 Help:** <a href="#context-sensitivehelpdef" class="termref" title="definition: context-sensitive help">Context-sensitive help</a> is available. (Level AAA)

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-context-help" class="HTMlink" title="How to Meet Success Criterion 3.3.5">How to Meet 3.3.5</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html" class="HTMlink" title="Understanding Success Criterion 3.3.5">Understanding 3.3.5</a>

**3.3.6 Error Prevention (All):** For <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> that require the user to submit information, at least one of the following is true: (Level AAA)

1.  **Reversible:** Submissions are reversible.

2.  **Checked:** Data entered by the user is checked for <a href="#input-errordef" class="termref" title="definition: input error">input errors</a> and the user is provided an opportunity to correct them.

3.  **Confirmed:** A <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible-all" class="HTMlink" title="How to Meet Success Criterion 3.3.6">How to Meet 3.3.6</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html" class="HTMlink" title="Understanding Success Criterion 3.3.6">Understanding 3.3.6</a>

<span id="robust"></span> Principle 4: Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="ensure-compat"></span> Guideline 4.1 Compatible: Maximize compatibility with current and future user agents, including assistive technologies.

[Understanding Guideline 4.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat.html)

**4.1.1 Parsing:** In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A)

*Note:* Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-parses" class="HTMlink" title="How to Meet Success Criterion 4.1.1">How to Meet 4.1.1</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html" class="HTMlink" title="Understanding Success Criterion 4.1.1">Understanding 4.1.1</a>

**4.1.2 Name, Role, Value:** For all <a href="#user-interface-componentdef" class="termref" title="definition: user interface component">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="#namedef" class="termref" title="definition: name">name</a> and <a href="#roledef" class="termref" title="definition: role">role</a> can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="#programmaticallysetdef" class="termref" title="definition: programmatically set">programmatically set</a>; and notification of changes to these items is available to <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>, including <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a>. (Level A)

*Note:* This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.

<a href="http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-rsv" class="HTMlink" title="How to Meet Success Criterion 4.1.2">How to Meet 4.1.2</a> <span class="screenreader">|</span> <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html" class="HTMlink" title="Understanding Success Criterion 4.1.2">Understanding 4.1.2</a>

<span id="conformance"></span> Conformance
------------------------------------------

This section is <a href="#normativedef" class="termref" title="definition: normative">normative</a>.

This section lists requirements for <a href="#conformancedef" class="termref" title="definition: conformance">conformance</a> to WCAG 2.0. It also gives information about how to make conformance claims, which are optional. Finally, it describes what it means to be <a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility supported</a>, since only accessibility-supported ways of using technologies can be <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> for conformance. [Understanding Conformance](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html) includes further explanation of the accessibility-supported concept.

### <span id="conformance-reqs"></span> Conformance Requirements

In order for a Web page to conform to WCAG 2.0, all of the following conformance requirements must be satisfied:

<span id="cc1"></span>

**1. Conformance Level:** One of the following levels of conformance is met in full.

-   **Level A:** For Level A conformance (the minimum level of conformance), the <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> <a href="#satisfiesdef" class="termref" title="definition: satisfies a success criterion">satisfies</a> all the Level A Success Criteria, or a <a href="#conforming-alternate-versiondef" class="termref" title="definition: conforming alternate version">conforming alternate version</a> is provided.

-   **Level AA:** For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.

-   **Level AAA:** For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.

*Note 1:* Although conformance can only be achieved at the stated levels, authors are encouraged to report (in their claim) any progress toward meeting success criteria from all levels beyond the achieved level of conformance.

*Note 2:* It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

<span id="cc2"></span>

**2. Full pages:** <a href="#conformancedef" class="termref" title="definition: conformance">Conformance</a> (and conformance level) is for full <a href="#webpagedef" class="termref" title="definition: Web page">Web page(s)</a> only, and cannot be achieved if part of a Web page is excluded.

*Note 1:* For the purpose of determining conformance, alternatives to part of a page's content are considered part of the page when the alternatives can be obtained directly from the page, e.g., a long description or an alternative presentation of a video.

*Note 2:* Authors of Web pages that cannot conform due to content outside of the author's control may consider a [Statement of Partial Conformance](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#conformance-partial).

<span id="cc3"></span>

**3. Complete processes:** When a <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> is one of a series of Web pages presenting a <a href="#processdef" class="termref" title="definition: process">process</a> (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all Web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)

*Example:* An online store has a series of pages that are used to select and purchase products. All pages in the series from start to finish (checkout) conform in order for any page that is part of the process to conform.

<span id="cc4"></span>

**4. Only Accessibility-Supported Ways of Using Technologies:** Only <a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility-supported</a> ways of using <a href="#technologydef" class="termref" title="definition: technology (Web content)">technologies</a> are <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported. (See [Understanding accessibility support](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head).)

<span id="cc5"></span>

**5. Non-Interference:** If <a href="#technologydef" class="termref" title="definition: technology (Web content)">technologies</a> are used in a way that is not <a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility supported</a>, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> as a whole continues to meet the conformance requirements under each of the following conditions:

1.  when any technology that is not <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> is turned on in a user agent,

2.  when any technology that is not relied upon is turned off in a user agent, and

3.  when any technology that is not relied upon is not supported by a user agent

In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:

-   **1.4.2 - Audio Control**,

-   **2.1.2 - No Keyboard Trap**,

-   **2.3.1 - Three Flashes or Below Threshold**, and

-   **2.2.2 - Pause, Stop, Hide**.

*Note:* If a page cannot conform (for example, a conformance test page or an example page), it cannot be included in the scope of conformance or in a conformance claim.

For more information, including examples, see [Understanding Conformance Requirements](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conformance-requirements-head).

### <span id="conformance-claims"></span> Conformance Claims (Optional)

Conformance is defined only for <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a>. However, a conformance claim may be made to cover one page, a series of pages, or multiple related Web pages.

#### <span id="conformance-required"></span> Required Components of a Conformance Claim

Conformance claims are **not required**. Authors can conform to WCAG 2.0 without making a claim. However, if a conformance claim is made, then the conformance claim **must** include the following information:

1.  **Date** of the claim

2.  **Guidelines title, version and URI** "Web Content Accessibility Guidelines 2.0 at <http://www.w3.org/TR/2008/REC-WCAG20-20081211/>"

3.  **Conformance level** satisfied: (Level A, AA or AAA)

4.  **A concise description of the Web pages**, such as a list of URIs for which the claim is made, including whether subdomains are included in the claim.

    *Note 1:* The Web pages may be described by list or by an expression that describes all of the URIs included in the claim.

    *Note 2:* Web-based products that do not have a URI prior to installation on the customer's Web site may have a statement that the product would conform when installed.

5.  A list of the **<a href="#technologydef" class="termref" title="definition: technology (Web content)">Web content technologies</a> <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a>**.

*Note:* If a conformance logo is used, it would constitute a claim and must be accompanied by the required components of a conformance claim listed above.

#### <span id="conformance-optional"></span> Optional Components of a Conformance Claim

In addition to the required components of a conformance claim above, consider providing additional information to assist users. Recommended additional information includes:

-   A list of success criteria beyond the level of conformance claimed that have been met. This information should be provided in a form that users can use, preferably machine-readable metadata.

-   A list of the specific technologies that are "*used but not <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a>*."

-   A list of user agents, including assistive technologies that were used to test the content.

-   Information about any additional steps taken that go beyond the success criteria to enhance accessibility.

-   A machine-readable metadata version of the list of specific technologies that are <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a>.

-   A machine-readable metadata version of the conformance claim.

*Note 1:* Refer to [Understanding Conformance Claims](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conformance-claims-head) for more information and example conformance claims.

*Note 2:* Refer to [Understanding Metadata](http://www.w3.org/TR/UNDERSTANDING-WCAG20/appendixC.html#understanding-metadata) for more information about the use of metadata in conformance claims.

### <span id="conformance-partial"></span> Statement of Partial Conformance - Third Party Content

Sometimes, Web pages are created that will later have additional content added to them. For example, an email program, a blog, an article that allows users to add comments, or applications supporting user-contributed content. Another example would be a page, such as a portal or news site, composed of content aggregated from multiple contributors, or sites that automatically insert content from other sources over time, such as when advertisements are inserted dynamically.

In these cases, it is not possible to know at the time of original posting what the uncontrolled content of the pages will be. It is important to note that the uncontrolled content can affect the accessibility of the controlled content as well. Two options are available:

1.  A determination of conformance can be made based on best knowledge. If a page of this type is monitored and repaired (non-conforming content is removed or brought into conformance) within two business days, then a determination or claim of conformance can be made since, except for errors in externally contributed content which are corrected or removed when encountered, the page conforms. No conformance claim can be made if it is not possible to monitor or correct non-conforming content;

    **OR**

2.  A "statement of partial conformance" may be made that the page does not conform, but could conform if certain parts were removed. The form of that statement would be, "This page does not conform, but would conform to WCAG 2.0 at level X if the following parts from uncontrolled sources were removed." In addition, the following would also be true of uncontrolled content that is described in the statement of partial conformance:

    1.  It is not content that is under the author's control.

    2.  It is described in a way that users can identify (e.g., they cannot be described as "all parts that we do not control" unless they are clearly marked as such.)

### <span id="conformance-partial-lang"></span> Statement of Partial Conformance - Language

A "statement of partial conformance due to language" may be made when the page does not conform, but would conform if <a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility support</a> existed for (all of) the language(s) used on the page. The form of that statement would be, "This page does not conform, but would conform to WCAG 2.0 at level X if accessibility support existed for the following language(s):"

<span id="glossary"></span> Appendix A: Glossary
------------------------------------------------

This section is <a href="#normativedef" class="termref" title="definition: normative">normative</a>.

 <span id="abbreviationsdef"></span> abbreviation  
shortened form of a word, phrase, or name where the abbreviation has not become part of the language

*Note 1:* This includes initialisms and acronyms where:

1.  **initialisms** are shortened forms of a name or phrase made from the initial letters of words or syllables contained in that name or phrase

    *Note 1:* Not defined in all languages.

    *Example 1:* SNCF is a French initialism that contains the initial letters of the <span lang="fr" lang="fr">Société Nationale des Chemins de Fer</span>, the French national railroad.

    *Example 2:* ESP is an initialism for extrasensory perception.

2.  **acronyms** are abbreviated forms made from the initial letters or parts of other words (in a name or phrase) which may be pronounced as a word

    *Example:* NOAA is an acronym made from the initial letters of the National Oceanic and Atmospheric Administration in the United States.

*Note 2:* Some companies have adopted what used to be an initialism as their company name. In these cases, the new name of the company is the letters (for example, Ecma) and the word is no longer considered an abbreviation.

 <span id="accessibility-supporteddef"></span> accessibility supported  
supported by users' <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a> as well as the accessibility features in browsers and other <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>

To qualify as an accessibility-supported use of a Web content technology (or feature of a technology), both 1 and 2 must be satisfied for a Web content technology (or feature):

1.  **The way that the <a href="#technologydef" class="termref" title="definition: technology (Web content)">Web content technology</a> is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the <a href="#human-langdef" class="termref" title="definition: human language">human language(s)</a> of the content,

    **AND**

2.  **The Web content technology must have accessibility-supported user agents that are available to users.** This means that at least one of the following four statements is true:

    1.  The technology is supported natively in widely-distributed user agents that are also accessibility supported (such as HTML and CSS);

        **OR**

    2.  The technology is supported in a widely-distributed plug-in that is also accessibility supported;

        **OR**

    3.  The content is available in a closed environment, such as a university or corporate network, where the user agent required by the technology and used by the organization is also accessibility supported;

        **OR**

    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:

        -   does not cost a person with a disability any more than a person without a disability **and**

        -   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.

*Note 1:* The WCAG Working group and the W3C do not specify which or how much support by assistive technologies there must be for a particular use of a Web technology in order for it to be classified as accessibility supported. (See [Level of Assistive Technology Support Needed for "Accessibility Support"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-support-level-head).)

*Note 2:* Web technologies can be used in ways that are not accessibility supported as long as they are not <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> and the page as a whole meets the conformance requirements, including [Conformance Requirement 4: Only Accessibility-Supported Ways of Using Technologies](#cc4) and [Conformance Requirement 5: Non-Interference](#cc5), are met.

*Note 3:* When a <a href="#technologydef" class="termref" title="definition: technology (Web content)">Web Technology</a> is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements.

*Note 4:* When citing Web content technologies that have multiple versions, the version(s) supported should be specified.

*Note 5:* One way for authors to locate uses of a technology that are accessibility supported would be to consult compilations of uses that are documented to be accessibility supported. (See [Understanding Accessibility-Supported Web Technology Uses](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-documented-lists-head).) Authors, companies, technology vendors, or others may document accessibility-supported ways of using Web content technologies. However, all ways of using technologies in the documentation would need to meet the definition of accessibility-supported Web content technologies above.

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

*Note:* A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="ambiguouslinkdef"></span> ambiguous to users in general  
the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

*Example:* The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

 <span id="asciiartdef"></span> ASCII art  
picture created by a spatial arrangement of characters or glyphs (typically from the 95 printable characters defined by ASCII).

 <span id="atdef"></span> assistive technology (as used in this document)  
hardware and/or software that acts as a <a href="#useragentdef" class="termref" title="definition: user agent">user agent</a>, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

*Note 1:* functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

*Note 2:* Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

*Note 3:* The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

*Example:* Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;

-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;

-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;

-   speech recognition software, which may be used by people who have some physical disabilities;

-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);

-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

 <span id="audiodef"></span> audio  
the technology of sound reproduction

*Note:* Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

 <span id="audiodescdef"></span> audio description  
narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

*Note 1:* Audio description of <a href="#videodef" class="termref" title="definition: video">video</a> provides information about actions, characters, scene changes, on-screen text, and other visual content.

*Note 2:* In standard audio description, narration is added during existing pauses in dialogue. (See also <a href="#extended-addef" class="termref" title="definition: extended audio description">extended audio description</a>.)

*Note 3:* Where all of the <a href="#videodef" class="termref" title="definition: video">video</a> information is already provided in existing <a href="#audiodef" class="termref" title="definition: audio">audio</a>, no additional audio description is necessary.

*Note 4:* Also called "video description" and "descriptive narration."

 <span id="audio-onlydef"></span> audio-only  
a time-based presentation that contains only <a href="#audiodef" class="termref" title="definition: audio">audio</a> (no <a href="#videodef" class="termref" title="definition: video">video</a> and no interaction)

 <span id="blinksdef"></span> blinking  
switch back and forth between two visual states in a way that is meant to draw attention

*Note:* See also <a href="#flash-def" class="termref" title="definition: flash">flash</a>. It is possible for something to be large enough and blink brightly enough at the right frequency to be also classified as a flash.

 <span id="blockstextdef"></span> blocks of text  
more than one sentence of text

 <span id="CAPTCHAdef"></span> CAPTCHA  
initialism for "Completely Automated Public Turing test to tell Computers and Humans Apart"

*Note 1:* CAPTCHA tests often involve asking the user to type in text that is displayed in an obscured image or audio file.

*Note 2:* A Turing test is any system of tests designed to differentiate a human from a computer. It is named after famed computer scientist Alan Turing. The term was coined by researchers at Carnegie Mellon University. [\[CAPTCHA\]](#CAPTCHA)

 <span id="captionsdef"></span> captions  
synchronized visual and/or <a href="#text-altdef" class="termref" title="definition: text alternative">text alternative</a> for both speech and non-speech audio information needed to understand the media content

*Note 1:* Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

*Note 2:* Closed Captions are equivalents that can be turned on and off with some players.

*Note 3:* Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent <a href="#images-of-textdef" class="termref" title="definition: image of text">images of text</a> embedded in <a href="#videodef" class="termref" title="definition: video">video</a>.

*Note 4:* Captions should not obscure or obstruct relevant information in the video.

*Note 5:* In some countries, captions are called subtitles.

*Note 6:* <a href="#audiodescdef" class="termref" title="definition: audio description">Audio descriptions</a> can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

 <span id="context-changedef"></span> changes of context  
major changes in the content of the <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  <a href="#useragentdef" class="termref" title="definition: user agent">user agent</a>;

2.  <a href="#viewportdef" class="termref" title="definition: viewport">viewport</a>;

3.  focus;

4.  <a href="#contentdef" class="termref" title="definition: content (Web content)">content</a> that changes the meaning of the <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a>.

*Note:* A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

*Example:* Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

 <span id="conformancedef"></span> conformance  
satisfying all the requirements of a given standard, guideline or specification

 <span id="conforming-alternate-versiondef"></span> conforming alternate version  
version that

1.  conforms at the designated level, and

2.  provides all of the same information and <a href="#functiondef" class="termref" title="definition: functionality">functionality</a> in the same <a href="#human-langdef" class="termref" title="definition: human language">human language</a>, and

3.  is as up to date as the non-conforming content, and

4.  for which at least one of the following is true:

    1.  the conforming version can be reached from the non-conforming page via an <a href="#accessibility-supporteddef" class="termref" title="definition: accessibility supported">accessibility-supported</a> <a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a>, or

    2.  the non-conforming version can only be reached from the conforming version, or

    3.  the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version

*Note 1:* In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.

*Note 2:* The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).

*Note 3:* If multiple language versions are available, then conforming alternate versions are required for each language offered.

*Note 4:* Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet [conformance requirement 1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc1).

*Note 5:* The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.

*Note 6:* Alternate versions should not be confused with <a href="#suppcontentdef" class="termref" title="definition: supplemental content">supplementary content</a>, which support the original page and enhance comprehension.

*Note 7:* Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.

See [Understanding Conforming Alternate Versions](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head)

 <span id="contentdef"></span> content (Web content)  
information and sensory experience to be communicated to the user by means of a <a href="#useragentdef" class="termref" title="definition: user agent">user agent</a>, including code or markup that defines the content's <a href="#structuredef" class="termref" title="definition: structure">structure</a>, <a href="#presentationdef" class="termref" title="definition: presentation">presentation</a>, and interactions

 <span id="context-sensitivehelpdef"></span> context-sensitive help  
help text that provides information related to the function currently being performed

*Note:* Clear labels can act as context-sensitive help.

 <span id="contrast-ratiodef"></span> contrast ratio  
(L1 + 0.05) / (L2 + 0.05), where

-   L1 is the <a href="#relativeluminancedef" class="termref" title="definition: relative luminance">relative luminance</a> of the lighter of the colors, and

-   L2 is the <a href="#relativeluminancedef" class="termref" title="definition: relative luminance">relative luminance</a> of the darker of the colors.

*Note 1:* Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).

*Note 2:* Because authors do not have control over user settings as to how text is rendered (for example font smoothing or anti-aliasing), the contrast ratio for text can be evaluated with anti-aliasing turned off.

*Note 3:* For the purpose of Success Criteria 1.4.3 and 1.4.6, contrast is measured with respect to the specified background over which the text is rendered in normal usage. If no background color is specified, then white is assumed.

*Note 4:* Background color is the specified color of content over which the text is to be rendered in normal usage. It is a failure if no background color is specified when the text color is specified, because the user's default background color is unknown and cannot be evaluated for sufficient contrast. For the same reason, it is a failure if no text color is specified when a background color is specified.

*Note 5:* When there is a border around the letter, the border can add contrast and would be used in calculating the contrast between the letter and its background. A narrow border around the letter would be used as the letter. A wide border around the letter that fills in the inner details of the letters acts as a halo and would be considered background.

*Note 6:* WCAG conformance should be evaluated for color pairs specified in the content that an author would expect to appear adjacent in typical presentation. Authors need not consider unusual presentations, such as color changes made by the user agent, except where caused by authors' code.

 <span id="correct-reading-sequencedef"></span> correct reading sequence  
any sequence where words and paragraphs are presented in an order that does not change the meaning of the content

 <span id="emergencydef"></span> emergency  
a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property

 <span id="essentialdef"></span> essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

 <span id="extended-addef"></span> extended audio description  
audio description that is added to an audiovisual presentation by pausing the <a href="#videodef" class="termref" title="definition: video">video</a> so that there is time to add additional description

*Note:* This technique is only used when the sense of the <a href="#videodef" class="termref" title="definition: video">video</a> would be lost without the additional <a href="#audiodescdef" class="termref" title="definition: audio description">audio description</a> and the pauses between dialogue/narration are too short.

 <span id="flash-def"></span> flash  
a pair of opposing changes in <a href="#relativeluminancedef" class="termref" title="definition: relative luminance">relative luminance</a> that can cause seizures in some people if it is large enough and in the right frequency range

*Note 1:* See <a href="#general-thresholddef" class="termref" title="definition: general flash and red flash thresholds">general flash and red flash thresholds</a> for information about types of flash that are not allowed.

*Note 2:* See also <a href="#blinksdef" class="termref" title="definition: blinking">blinking</a>.

 <span id="functiondef"></span> functionality  
<a href="#processdef" class="termref" title="definition: process">processes</a> and outcomes achievable through user action

 <span id="general-thresholddef"></span> general flash and red flash thresholds  
a <a href="#flash-def" class="termref" title="definition: flash">flash</a> or rapidly changing image sequence is below the threshold (i.e., content **passes**) if any of the following are true:

1.  there are no more than three **general flashes** and / or no more than three **red flashes** within any one-second period; or

2.  the combined area of flashes occurring concurrently occupies no more than a total of .006 steradians within any 10 degree visual field on the screen (25% of any 10 degree visual field on the screen) at typical viewing distance

where:

-   A **general flash** is defined as a pair of opposing changes in <a href="#relativeluminancedef" class="termref" title="definition: relative luminance">relative luminance</a> of 10% or more of the maximum relative luminance where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase, and

-   A **red flash** is defined as any pair of opposing transitions involving a saturated red.

*Exception:* Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds.

*Note 1:* For general software or Web content, using a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels will provide a good estimate of a 10 degree visual field for standard screen sizes and viewing distances (e.g., 15-17 inch screen at 22-26 inches). (Higher resolutions displays showing the same rendering of the content yield smaller and safer images so it is lower resolutions that are used to define the thresholds.)

*Note 2:* A transition is the change in relative luminance (or relative luminance/color for red flashing) between adjacent peaks and valleys in a plot of relative luminance (or relative luminance/color for red flashing) measurement against time. A flash consists of two opposing transitions.

*Note 3:* The current working definition in the field for **"pair of opposing transitions involving a saturated red"** is where, for either or both states involved in each transition, R/(R+ G + B) &gt;= 0.8, and the change in the value of (R-G-B)x320 is &gt; 20 (negative values of (R-G-B)x320 are set to zero) for both transitions. R, G, B values range from 0-1 as specified in “relative luminance” definition. [\[HARDING-BINNIE\]](#HARDING-BINNIE)

*Note 4:* Tools are available that will carry out analysis from video screen capture. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes (see \#1 and \#2 above).

 <span id="human-langdef"></span> human language  
language that is spoken, written or signed (through visual or tactile means) to communicate with humans

*Note:* See also <a href="#sign-languagedef" class="termref" title="definition: sign language">sign language</a>.

 <span id="idiomsdef"></span> idiom  
phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning

*Note:* idioms cannot be translated directly, word for word, without losing their (cultural or language-dependent) meaning.

*Example 1:* In English, "spilling the beans" means "revealing a secret." However, "knocking over the beans" or "spilling the vegetables" does not mean the same thing.

*Example 2:* In Japanese, the phrase "<span lang="jp" lang="jp">さじを投げる</span>" literally translates into "he throws a spoon," but it means that there is nothing he can do and finally he gives up.

*Example 3:* In Dutch, "<span lang="ne" lang="ne">Hij ging met de kippen op stok</span>" literally translates into "He went to roost with the chickens," but it means that he went to bed early.

 <span id="images-of-textdef"></span> image of text  
text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

*Note:* This does not include <a href="#textdef" class="termref" title="definition: text">text</a> that is part of a picture that contains significant other visual content.

*Example:* A person's name on a nametag in a photograph.

 <span id="informativedef"></span> informative  
for information purposes and not required for conformance

*Note:* Content required for <a href="#conformancedef" class="termref" title="definition: conformance">conformance</a> is referred to as "<a href="#normativedef" class="termref" title="definition: normative">normative</a>."

 <span id="input-errordef"></span> input error  
information provided by the user that is not accepted

*Note:* This includes:

1.  Information that is required by the <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> but omitted by the user

2.  Information that is provided by the user but that falls outside the required data format or values

 <span id="jargondef"></span> jargon  
words used in a particular way by people in a particular field

*Example:* The word StickyKeys is jargon from the field of assistive technology/accessibility.

 <span id="keybrd-interfacedef"></span> keyboard interface  
interface used by software to obtain keystroke input

*Note 1:* A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

*Example:* A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

*Note 2:* Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

 <span id="labeldef"></span> label  
<a href="#textdef" class="termref" title="definition: text">text</a> or other component with a <a href="#text-altdef" class="termref" title="definition: text alternative">text alternative</a> that is presented to a user to identify a component within Web <a href="#contentdef" class="termref" title="definition: content (Web content)">content</a>

*Note 1:* A label is presented to all users whereas the <a href="#namedef" class="termref" title="definition: name">name</a> may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

*Note 2:* The term label is not limited to the label element in HTML.

 <span id="larger-scaledef"></span> large scale (text)  
with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

*Note 1:* Fonts with extraordinarily thin strokes or unusual features and characteristics that reduce the familiarity of their letter forms are harder to read, especially at lower contrast levels.

*Note 2:* Font size is the size when the content is delivered. It does not include resizing that may be done by a user.

*Note 3:* The actual size of the character that a user sees is dependent both on the author-defined size and the user's display or user-agent settings. For many mainstream body text fonts, 14 and 18 point is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text (assuming that the body font is 100%), but authors would need to check this for the particular fonts in use. When fonts are defined in relative units, the actual point size is calculated by the user agent for display. The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does, when evaluating this success criterion. Users who have low vision would be responsible for choosing appropriate settings.

*Note 4:* When using text without specifying the font size, the smallest font size used on major browsers for unspecified text would be a reasonable size to assume for the font. If a level 1 heading is rendered in 14pt bold or higher on major browsers, then it would be reasonable to assume it is large text. Relative scaling can be calculated from the default sizes in a similar fashion.

*Note 5:* The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages, the "equivalent" sizes would be the minimum large print size used for those languages and the next larger standard large print size.

 <span id="legalcommitmentsdef"></span> legal commitments  
transactions where the person incurs a legally binding obligation or benefit

*Example:* A marriage license, a stock trade (financial and legal), a will, a loan, adoption, signing up for the army, a contract of any type, etc.

 <span id="linkpurposedef"></span> link purpose  
nature of the result obtained by activating a hyperlink

 <span id="livedef"></span> live  
information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

*Note 1:* A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to queue or censor the audio (or video) feed, but not sufficient to allow significant editing.

*Note 2:* If information is completely computer generated, it is not live.

 <span id="lowseceddef"></span> lower secondary education level  
the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of <a href="#primseceddef" class="termref" title="definition: primary education level">primary education</a>

*Note:* This definition is based on the International Standard Classification of Education [\[UNESCO\]](#UNESCO).

 <span id="mechanismdef"></span> mechanism  
<a href="#processdef" class="termref" title="definition: process">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="#reliedupondef" class="termref" title="definition: relied upon (technologies that are)">relied upon</a> to be provided by either the platform or by <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>, including <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

 <span id="multimedia-alt-textdef"></span> media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

*Note:* A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

 <span id="namedef"></span> name  
text by which software can identify a component within Web content to the user

*Note 1:* The name may be hidden and only exposed by assistive technology, whereas a <a href="#labeldef" class="termref" title="definition: label">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.

*Note 2:* This is unrelated to the name attribute in HTML.

 <span id="nav-seqdef"></span> navigated sequentially  
navigated in the order defined for advancing focus (from one element to the next) using a <a href="#keybrd-interfacedef" class="termref" title="definition: keyboard interface">keyboard interface</a>

 <span id="non-text-contentdef"></span> non-text content  
any content that is not a sequence of characters that can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a> or where the sequence is not expressing something in <a href="#human-langdef" class="termref" title="definition: human language">human language</a>

*Note:* This includes <a href="#asciiartdef" class="termref" title="definition: ASCII art">ASCII Art</a> (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

 <span id="normativedef"></span> normative  
required for conformance

*Note 1:* One may conform in a variety of well-defined ways to this document.

*Note 2:* Content identified as "<a href="#informativedef" class="termref" title="definition: informative">informative</a>" or "non-normative" is never required for conformance.

 <span id="fullscreenwindowdef"></span> on a full-screen window  
on the most common sized desktop/laptop display with the viewport maximized

*Note:* Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

 <span id="pauseddef"></span> paused  
stopped by user request and not resumed until requested by user

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="#livedef" class="termref" title="definition: live">live</a>

 <span id="presentationdef"></span> presentation  
rendering of the <a href="#contentdef" class="termref" title="definition: content (Web content)">content</a> in a form to be perceived by users

 <span id="primseceddef"></span> primary education level  
six year time period that begins between the ages of five and seven, possibly without any previous education

*Note:* This definition is based on the International Standard Classification of Education [\[UNESCO\]](#UNESCO).

 <span id="processdef"></span> process  
series of user actions where each action is required in order to complete an activity

*Example 1:* Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

*Example 2:* An account registration page requires successful completion of a Turing test before the registration form can be accessed.

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>, including <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a>, can extract and present this information to users in different modalities

*Example 1:* Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

*Example 2:* Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

 <span id="pdlinkcontextdef"></span> programmatically determined link context  
additional information that can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a> from <a href="#relationshipsdef" class="termref" title="definition: relationships">relationships</a> with a link, combined with the link text, and presented to users in different modalities

*Example:* In HTML, information that is programmatically determinable from a link in English includes text that is in the same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link.

*Note:* Since screen readers interpret punctuation, they can also provide the context from the current sentence, when the focus is on a link in that sentence.

 <span id="programmaticallysetdef"></span> programmatically set  
set by software using methods that are supported by user agents, including assistive technologies

 <span id="puredecdef"></span> pure decoration  
serving only an aesthetic purpose, providing no information, and having no functionality

*Note:* Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

*Example:* The cover page of a dictionary has random words in very light text in the background.

 <span id="real-time-eventsdef"></span> real-time event  
event that a) occurs at the same time as the viewing and b) is not completely generated by the content

*Example 1:* A Webcast of a live performance (occurs at the same time as the viewing and is not prerecorded).

*Example 2:* An on-line auction with people bidding (occurs at the same time as the viewing).

*Example 3:* Live humans interacting in a virtual world using avatars (is not completely generated by the content and occurs at the same time as the viewing).

 <span id="relationshipsdef"></span> relationships  
meaningful associations between distinct pieces of content

 <span id="relativeluminancedef"></span> relative luminance  
the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

*Note 1:* For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

-   if R<sub>sRGB</sub> &lt;= 0.03928 then **R** = R<sub>sRGB</sub>/12.92 else **R** = ((R<sub>sRGB</sub>+0.055)/1.055) ^ 2.4

-   if G<sub>sRGB</sub> &lt;= 0.03928 then **G** = G<sub>sRGB</sub>/12.92 else **G** = ((G<sub>sRGB</sub>+0.055)/1.055) ^ 2.4

-   if B<sub>sRGB</sub> &lt;= 0.03928 then **B** = B<sub>sRGB</sub>/12.92 else **B** = ((B<sub>sRGB</sub>+0.055)/1.055) ^ 2.4

and R<sub>sRGB</sub>, G<sub>sRGB</sub>, and B<sub>sRGB</sub> are defined as:

-   R<sub>sRGB</sub> = R<sub>8bit</sub>/255

-   G<sub>sRGB</sub> = G<sub>8bit</sub>/255

-   B<sub>sRGB</sub> = B<sub>8bit</sub>/255

The "^" character is the exponentiation operator. (Formula taken from [\[sRGB\]](#sRGB) and [\[IEC-4WD\]](#IEC-4WD)).

*Note 2:* Almost all systems used today to view Web content assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

*Note 3:* If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).

*Note 4:* Tools are available that automatically do the calculations when testing contrast and flash.

*Note 5:* A [MathML version of the relative luminance definition](relative-luminance.xml) is available.

 <span id="reliedupondef"></span> relied upon (technologies that are)  
the content would not <a href="#conformancedef" class="termref" title="definition: conformance">conform</a> if that <a href="#technologydef" class="termref" title="definition: technology (Web content)">technology</a> is turned off or is not supported

 <span id="roledef"></span> role  
text or number by which software can identify the function of a component within Web content

*Example:* A number that indicates whether an image functions as a hyperlink, command button, or check box.

 <span id="samefunctionalitydef"></span> same functionality   
same result when used

*Example:* A submit "search" button on one Web page and a "find" button on another Web page may both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, they would have the same functionality but would not be labeled consistently.

 <span id="samerelorderdef"></span> same relative order  
same position relative to other items

*Note:* Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.

 <span id="satisfiesdef"></span> satisfies a success criterion  
the success criterion does not evaluate to 'false' when applied to the page

 <span id="sectiondef"></span> section  
A self-contained portion of written content that deals with one or more related topics or thoughts

*Note:* A section may consist of one or more paragraphs and include graphics, tables, lists and sub-sections.

 <span id="set-of-web-pagesdef"></span> set of Web pages  
collection of <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> that share a common purpose and that are created by the same author, group or organization

*Note:* Different language versions would be considered different sets of Web pages.

 <span id="sign-languagedef"></span> sign language  
a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

 <span id="sign-languageinterpdef"></span> sign language interpretation  
translation of one language, generally a spoken language, into a <a href="#sign-languagedef" class="termref" title="definition: sign language">sign language</a>

*Note:* True sign languages are independent languages that are unrelated to the spoken language(s) of the same country or region.

 <span id="sensoryexpdef"></span> specific sensory experience  
a sensory experience that is not purely decorative and does not primarily convey important information or perform a function

*Example:* Examples include a performance of a flute solo, works of visual art etc.

 <span id="structuredef"></span> structure  
1.  The way the parts of a <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a> are organized in relation to each other; and

2.  The way a collection of <a href="#webpagedef" class="termref" title="definition: Web page">Web pages</a> is organized

 <span id="suppcontentdef"></span> supplemental content  
additional <a href="#contentdef" class="termref" title="definition: content (Web content)">content</a> that illustrates or clarifies the primary content

*Example 1:* An audio version of a <a href="#webpagedef" class="termref" title="definition: Web page">Web page</a>.

*Example 2:* An illustration of a complex <a href="#processdef" class="termref" title="definition: process">process</a>.

*Example 3:* A paragraph summarizing the major outcomes and recommendations made in a research study.

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="#audiodef" class="termref" title="definition: audio">audio</a> or <a href="#videodef" class="termref" title="definition: video">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="#multimedia-alt-textdef" class="termref" title="definition: media alternative for text">media alternative for text</a> that is clearly labeled as such

 <span id="technologydef"></span> technology (Web content)  
<a href="#mechanismdef" class="termref" title="definition: mechanism">mechanism</a> for encoding instructions to be rendered, played or executed by <a href="#useragentdef" class="termref" title="definition: user agent">user agents</a>

*Note 1:* As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

*Note 2:* Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

*Example:* Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="#programmaticallydetermineddef" class="termref" title="definition: programmatically determined (programmatically determinable)">programmatically determined</a>, where the sequence is expressing something in <a href="#human-langdef" class="termref" title="definition: human language">human language</a>

 <span id="text-altdef"></span> text alternative  
<a href="#textdef" class="termref" title="definition: text">Text</a> that is programmatically associated with <a href="#non-text-contentdef" class="termref" title="definition: non-text content">non-text content</a> or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

*Example:* An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

*Note:* Refer to [Understanding Text Alternatives](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-text-alternatives-head) for more information.

 <span id="unusual-restricteddef"></span> used in an unusual or restricted way  
words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly

*Example:* The term "gig" means something different if it occurs in a discussion of music concerts than it does in article about computer hard drive space, but the appropriate definition can be determined from context. By contrast, the word "text" is used in a very specific way in WCAG 2.0, so a definition is supplied in the glossary.

 <span id="useragentdef"></span> user agent  
any software that retrieves and presents Web content for users

*Example:* Web browsers, media players, plug-ins, and other programs — including <a href="#atdef" class="termref" title="definition: assistive technology (as used in this document)">assistive technologies</a> — that help in retrieving, rendering, and interacting with Web content.

 <span id="user-controllabledef"></span> user-controllable  
data that is intended to be accessed by users

*Note:* This does not refer to such things as Internet logs and search engine monitoring data.

*Example:* Name and address fields for a user's account.

 <span id="user-interface-componentdef"></span> user interface component  
a part of the content that is perceived by users as a single control for a distinct function

*Note 1:* Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

*Note 2:* User interface components include form elements and links as well as components generated by scripts.

*Example:* An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."

 <span id="videodef"></span> video  
the technology of moving or sequenced pictures or images

*Note:* Video can be made up of animated or photographic images, or both.

 <span id="video-onlydef"></span> video-only  
a time-based presentation that contains only <a href="#videodef" class="termref" title="definition: video">video</a> (no <a href="#videodef" class="termref" title="definition: video">audio</a> and no interaction)

 <span id="viewportdef"></span> viewport  
object in which the user agent presents content

*Note 1:* The <a href="#useragentdef" class="termref" title="definition: user agent">user agent</a> presents content through one or more viewports. Viewports include windows, frames, loudspeakers, and virtual magnifying glasses. A viewport may contain another viewport (e.g., nested frames). Interface components created by the user agent such as prompts, menus, and alerts are not viewports.

*Note 2:* This definition is based on [User Agent Accessibility Guidelines 1.0 Glossary](http://www.w3.org/TR/WAI-USERAGENT/glossary.html).

 <span id="visually-customizeddef"></span> visually customized  
the font, size, color, and background can be set

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="#useragentdef" class="termref" title="definition: user agent">user agent</a>

*Note 1:* Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

*Note 2:* For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

*Example 1:* A Web resource including all embedded images and media.

*Example 2:* A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

*Example 3:* A customizable portal site, where users can choose content to display from a set of different content modules.

*Example 4:* When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

<span id="acknowledgments"></span> Appendix B: Acknowledgments
--------------------------------------------------------------

This section is <a href="#informativedef" class="termref" title="definition: informative">informative</a>.

This publication has been funded in part with Federal funds from the U.S. Department of Education, National Institute on Disability and Rehabilitation Research (NIDRR) under contract number ED05CO0039. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.

Additional information about participation in the Web Content Accessibility Guidelines Working Group (WCAG WG) can be found on the [Working Group home page](http://www.w3.org/WAI/GL/).

### <span id="d0e3472"></span> Participants active in the WCAG WG at the time of publication

-   Bruce Bailey (U.S. Access Board)

-   Frederick Boland (NIST)

-   Ben Caldwell (Trace R&D Center, University of Wisconsin)

-   Sofia Celic (W3C Invited Expert)

-   Michael Cooper (W3C)

-   Roberto Ellero (International Webmasters Association / HTML Writers Guild)

-   Bengt Farre (Rigab)

-   Loretta Guarino Reid (Google)

-   Katie Haritos-Shea

-   Andrew Kirkpatrick (Adobe)

-   Drew LaHart (IBM)

-   Alex Li (SAP AG)

-   David MacDonald (E-Ramp Inc.)

-   Roberto Scano (International Webmasters Association / HTML Writers Guild)

-   Cynthia Shelly (Microsoft)

-   Andi Snow-Weaver (IBM)

-   Christophe Strobbe (DocArch, K.U.Leuven)

-   Gregg Vanderheiden (Trace R&D Center, University of Wisconsin)

### <span id="d0e3530"></span> Other previously active WCAG WG participants and other contributors to WCAG 2.0

Shadi Abou-Zahra, Jim Allan, Jenae Andershonis, Avi Arditti, Aries Arditi, Mike Barta, Sandy Bartell, Kynn Bartlett, Marco Bertoni, Harvey Bingham, Chris Blouch, Paul Bohman, Patrice Bourlon, Judy Brewer, Andy Brown, Dick Brown, Doyle Burnett, Raven Calais, Tomas Caspers, Roberto Castaldo, Sambhavi Chandrashekar, Mike Cherim, Jonathan Chetwynd, Wendy Chisholm, Alan Chuter, David M Clark, Joe Clark, James Coltham, James Craig, Tom Croucher, Nir Dagan, Daniel Dardailler, Geoff Deering, Pete DeVasto, Don Evans, Neal Ewers, Steve Faulkner, Lainey Feingold, Alan J. Flavell, Nikolaos Floratos, Kentarou Fukuda, Miguel Garcia, P.J. Gardner, Greg Gay, Becky Gibson, Al Gilman, Kerstin Goldsmith, Michael Grade, Jon Gunderson, Emmanuelle Gutiérrez y Restrepo, Brian Hardy, Eric Hansen, Sean Hayes, Shawn Henry, Hans Hillen, Donovan Hipke, Bjoern Hoehrmann, Chris Hofstader, Yvette Hoitink, Carlos Iglesias, Ian Jacobs, Phill Jenkins, Jyotsna Kaki, Leonard R. Kasday, Kazuhito Kidachi, Ken Kipness, Marja-Riitta Koivunen, Preety Kumar, Gez Lemon, Chuck Letourneau, Scott Luebking, Tim Lacy, Jim Ley, William Loughborough, Greg Lowney, Luca Mascaro, Liam McGee, Jens Meiert, Niqui Merret, Alessandro Miele, Mathew J Mirabella, Charles McCathieNevile , Matt May, Marti McCuller, Sorcha Moore, Charles F. Munat, Robert Neff, Bruno von Niman, Tim Noonan, Sebastiano Nutarelli, Graham Oliver, Sean B. Palmer, Sailesh Panchang, Nigel Peck, Anne Pemberton, David Poehlman, Adam Victor Reed, Chris Ridpath, Lee Roberts, Gregory J. Rosmaita, Matthew Ross, Sharron Rush, Gian Sampson-Wild, Joel Sanda, Gordon Schantz, Lisa Seeman, John Slatin, Becky Smith, Jared Smith, Neil Soiffer, Jeanne Spellman, Mike Squillace, Michael Stenitzer, Jim Thatcher, Terry Thompson, Justin Thorp, Makoto Ueki, Eric Velleman, Dena Wainwright, Paul Walsch, Takayuki Watanabe, Jason White.

<span id="references"></span> Appendix C: References
----------------------------------------------------

This section is <a href="#informativedef" class="termref" title="definition: informative">informative</a>.

<span id="CAPTCHA"></span>CAPTCHA  
The CAPTCHA Project, Carnegie Mellon University. The project is online at <http://www.captcha.net>.

<span id="HARDING-BINNIE"></span>HARDING-BINNIE  
Harding G. F. A. and Binnie, C.D., Independent Analysis of the ITC Photosensitive Epilepsy Calibration Test Tape. 2002.

<span id="IEC-4WD"></span>IEC-4WD  
IEC/4WD 61966-2-1: Colour Measurement and Management in Multimedia Systems and Equipment - Part 2.1: Default Colour Space - sRGB. May 5, 1998.

<span id="sRGB"></span>sRGB  
"A Standard Default Color Space for the Internet - sRGB," M. Stokes, M. Anderson, S. Chandrasekar, R. Motta, eds., Version 1.10, November 5, 1996. A copy of this paper is available at <http://www.w3.org/Graphics/Color/sRGB.html>.

<span id="UNESCO"></span>UNESCO  
International Standard Classification of Education, 1997. A copy of the standard is available at <http://www.unesco.org/education/information/nfsunesco/doc/isced_1997.htm>.

<span id="WCAG10"></span>WCAG10  
Web Content Accessibility Guidelines 1.0, G. Vanderheiden, W. Chisholm, I. Jacobs, Editors, W3C Recommendation, 5 May 1999, http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505/. The latest version of WCAG 1.0 is available at <http://www.w3.org/TR/WAI-WEBCONTENT/>.
