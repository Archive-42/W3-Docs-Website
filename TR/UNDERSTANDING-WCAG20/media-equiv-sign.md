[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.5 \[Audio Description (Prerecorded)\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description (Prerecorded)]")
-   [**Next:** SC 1.2.7 \[Extended Audio Description (Prerecorded)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Extended Audio Description (Prerecorded)]")

On this page:

-   [Intent](#media-equiv-sign-intent-head)
-   [Examples](#media-equiv-sign-examples-head)
-   [Related Resources](#media-equiv-sign-resources-head)
-   [Techniques & Failures](#media-equiv-sign-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-sign"></span> **Sign Language (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.6
=============================================================================================================================

> **[1.2.6](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-sign) Sign Language (Prerecorded):** <a href="#sign-languageinterpdef" class="termref">Sign language interpretation</a> is provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#audiodef" class="termref">audio</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing and who are fluent in a sign language to understand the content of the audio track of synchronized media presentations. Written text, such as that found in captions, is often a second language. Because sign language provides the ability to provide intonation, emotion and other audio information that is reflected in sign language interpretation, but not in captions, sign language interpretation provides richer and more equivalent access to synchronized media. People who communicate extensively in sign language are also faster in sign language and synchronized media is a time-based presentation.

### Specific Benefits of Success Criterion 1.2.6:

-   People whose human language is a sign language sometimes have limited reading ability. These individuals may not be able to read and comprehend the captions and thus require a sign language interpretation to gain access to the synchronized media content.

Examples of Success Criterion 1.2.6
-----------------------------------

-   **Example 1.** A corporation is making an important announcement to all of its employees. The meeting will be held in the main headquarters and streamed to the Web. A sign language interpreter is provided at the meeting location. The live video includes a full view of the sign language interpreter as well as the person presenting.

-   **Example 2.** The same announcement described in example 1 is also Webcast to remote employees. Since there is only one display available for this, the sign language interpreter is shown in the corner of the display.

-   **Example 3.** A university is providing an on-line version of a particular lecture by creating a synchronized media presentation of the professor delivering the lecture. The presentation includes video of the professor speaking and demonstrating a science experiment. A sign language interpretation of the lecture is created and presented on the Web with the synchronized media version.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

-   [National Institute on Deafness and other Communication Disorders](https://www.nidcd.nih.gov/health/american-sign-language): Information on American Sign Language

-   [Techniques for filming sign language interpreters](http://www.sign-lang.uni-hamburg.de/signingbooks/sbrc/grid/d71/guide12.htm)

-   [Royal National Institute for Deaf People (RNID)](http://www.actiononhearingloss.org.uk/)

Techniques and Failures for Success Criterion 1.2.6 - Sign Language (Prerecorded)
---------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G54" class="tech-ref">G54: Including a sign language interpreter in the video stream</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G81" class="tech-ref">G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player</a> using one of the following techniques

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM13" class="tech-ref">SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0</a> (SMIL)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM14" class="tech-ref">SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0</a> (SMIL)

### Additional Techniques (Advisory) for 1.2.6

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### <span id="media-equiv-sign-section-17-head"></span> Metadata Techniques

-   Using metadata to associate sign language alternatives of a video to enable choice of sign language (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that point to several English sign language translations (ASL, SASL, BSL, Auslan, ISL, NZSL) of a Web page.

### Common Failures for SC 1.2.6

The following are common mistakes that are considered failures of Success Criterion 1.2.6 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="audiodef"></span> audio  
the technology of sound reproduction

*Note:* Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef" class="termref">live</a>

 <span id="sign-languageinterpdef"></span> sign language interpretation  
translation of one language, generally a spoken language, into a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#sign-languagedef" class="termref">sign language</a>

*Note:* True sign languages are independent languages that are unrelated to the spoken language(s) of the same country or region.

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.5 \[Audio Description (Prerecorded)\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description (Prerecorded)]")
-   [**Next:** SC 1.2.7 \[Extended Audio Description (Prerecorded)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Extended Audio Description (Prerecorded)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
