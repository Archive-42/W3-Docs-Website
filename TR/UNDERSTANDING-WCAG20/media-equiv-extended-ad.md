[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.6 \[Sign Language (Prerecorded)\]](media-equiv-sign.html "Understanding SC  1.2.6 [Sign Language (Prerecorded)]")
-   [**Next:** SC 1.2.8 \[Media Alternative (Prerecorded)\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative (Prerecorded)]")

On this page:

-   [Intent](#media-equiv-extended-ad-intent-head)
-   [Examples](#media-equiv-extended-ad-examples-head)
-   [Related Resources](#media-equiv-extended-ad-resources-head)
-   [Techniques & Failures](#media-equiv-extended-ad-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-extended-ad"></span> **Extended Audio Description (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.7
=================================================================================================================================================

> **[1.2.7](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-extended-ad) Extended Audio Description (Prerecorded):** Where pauses in foreground audio are insufficient to allow <a href="#audiodescdef" class="termref">audio descriptions</a> to convey the sense of the video, <a href="#extended-addef" class="termref">extended audio description</a> is provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#videodef" class="termref">video</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to provide people who are blind or visually impaired access to a synchronized media presentation beyond that which can be provided by standard audio description. This is done by periodically freezing the synchronized media presentation and playing additional audio description. The synchronized media presentation is then resumed.

Because it disrupts viewing for those who do not need the additional description, techniques that allow you to turn the feature on and off are often provided. Alternately, versions with and without the additional description can be provided.

### Specific Benefits of Success Criterion 1.2.7:

-   People who are blind, people with low vision who cannot see the screen, as well as those with cognitive limitations who have difficulty interpreting visually what is happening, often use audio description of the visual information. However, if there is too much dialogue the audio description is insufficient. Extended audio description can provide the additional information needed to understand the video.

Examples of Success Criterion 1.2.7
-----------------------------------

-   *Example 1. Video of a lecture.* A physics professor is giving a lecture. He makes freehand sketches on the whiteboard, speaking rapidly as he draws. As soon as he has finished discussing one problem, he erases the drawing and makes another sketch while continuing to speak and gesture with his other hand. The video is paused between problems, and extended audio description of the professor's drawings and gestures is provided; the video is then resumed.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL) 2.0](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

-   [Standard Techniques in Audio Description](http://joeclark.org/access/description/ad-principles.html)

Techniques and Failures for Success Criterion 1.2.7 - Extended Audio Description (Prerecorded)
----------------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G8" class="tech-ref">G8: Providing a movie with extended audio descriptions</a> using one of the following:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM1" class="tech-ref">SM1: Adding extended audio description in SMIL 1.0</a> (SMIL)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM2" class="tech-ref">SM2: Adding extended audio description in SMIL 2.0</a> (SMIL)

    -   Using any player that supports audio and video

### Additional Techniques (Advisory) for 1.2.7

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H96" class="tech-ref">H96: Using the track element to provide audio descriptions</a> (HTML)

-   Adding extended audio description in multiple languages in SMIL 1.0 (future link)

-   Adding extended audio description in multiple languages in SMIL 2.0 (future link)

### Common Failures for SC 1.2.7

The following are common mistakes that are considered failures of Success Criterion 1.2.7 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="audiodescdef"></span> audio description  
narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

*Note 1:* Audio description of <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> provides information about actions, characters, scene changes, on-screen text, and other visual content.

*Note 2:* In standard audio description, narration is added during existing pauses in dialogue. (See also <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#extended-addef" class="termref">extended audio description</a>.)

*Note 3:* Where all of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> information is already provided in existing <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a>, no additional audio description is necessary.

*Note 4:* Also called "video description" and "descriptive narration."

 <span id="extended-addef"></span> extended audio description  
audio description that is added to an audiovisual presentation by pausing the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> so that there is time to add additional description

*Note:* This technique is only used when the sense of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> would be lost without the additional <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodescdef" class="termref">audio description</a> and the pauses between dialogue/narration are too short.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef" class="termref">live</a>

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

 <span id="videodef"></span> video  
the technology of moving or sequenced pictures or images

*Note:* Video can be made up of animated or photographic images, or both.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.6 \[Sign Language (Prerecorded)\]](media-equiv-sign.html "Understanding SC  1.2.6 [Sign Language (Prerecorded)]")
-   [**Next:** SC 1.2.8 \[Media Alternative (Prerecorded)\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative (Prerecorded)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
