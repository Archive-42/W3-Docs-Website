[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.5 \[Audio Description\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description]")
-   [**Next:** SC 1.2.7 \[Audio Description (Extended)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Audio Description (Extended)]")

On this page:

-   [Intent](#media-equiv-sign-intent-head)
-   [Examples](#media-equiv-sign-examples-head)
-   [Related Resources](#media-equiv-sign-resources-head)
-   [Techniques & Failures](#media-equiv-sign-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-sign"></span> **Sign Language**<span class="screenreader">:</span> Understanding SC 1.2.6
===============================================================================================================

> **[1.2.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-sign) Sign Language:** <a href="#sign-languageinterpdef" class="termref">Sign language interpretation</a> is provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#audiodef" class="termref">audio</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>. (Level AAA)

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

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/richmedia/tutorials/smiltemplates.html)

-   [PEPNet list of interpreter links](http://pdc.pepnet.org/Links/int.asp)

-   [National Institute on Deafness and other Communication Disorders](http://www.nidcd.nih.gov/health/hearing/asl.asp): Information on American Sign Language

-   [Techniques for filming sign language interpreters](http://www.sign-lang.uni-hamburg.de/SigningBooks/SBRC/Grid/d71/guide12.htm)

-   [eSign Avatar Signing Plugin for Internet Explorer](http://www.sys-consulting.co.uk/downloads/esign/).

-   [Royal National Institute for Deaf People (RNID)](http://www.rnid.org.uk/)

Techniques and Failures for Success Criterion 1.2.6 - Sign Language
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G54: Including a sign language interpreter in the video stream](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G54)

2.  [G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G81) using one of the following techniques

    -   [SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM13) (SMIL)

    -   [SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM14) (SMIL)

### Additional Techniques (Advisory) for 1.2.6

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### <span id="d0e2043"></span> Metadata Techniques

-   Using metadata to associate sign language alternatives of a video to enable choice of sign language (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that point to several English sign language translations (ASL, SASL, BSL, Auslan, ISL, NZSL) of a Web page.

### Common Failures for SC 1.2.6

The following are common mistakes that are considered failures of Success Criterion 1.2.6 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="audiodef"></span> audio  
the technology of sound reproduction

Note: Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#livedef" class="termref">live</a>

 <span id="sign-languageinterpdef"></span> sign language interpretation  
translation of one language, generally a spoken language, into a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#sign-languagedef" class="termref">sign language</a>

Note: True sign languages are independent languages that are unrelated to the spoken language(s) of the same country or region.

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.5 \[Audio Description\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description]")
-   [**Next:** SC 1.2.7 \[Audio Description (Extended)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Audio Description (Extended)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
