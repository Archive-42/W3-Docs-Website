[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.4 \[Captions (Live)\]](media-equiv-real-time-captions.html "Understanding SC  1.2.4 [Captions (Live)]")
-   [**Next:** SC 1.2.6 \[Sign Language\]](media-equiv-sign.html "Understanding SC  1.2.6 [Sign Language]")

On this page:

-   [Intent](#media-equiv-audio-desc-only-intent-head)
-   [Examples](#media-equiv-audio-desc-only-examples-head)
-   [Related Resources](#media-equiv-audio-desc-only-resources-head)
-   [Techniques & Failures](#media-equiv-audio-desc-only-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-audio-desc-only"></span> **Audio Description**<span class="screenreader">:</span> Understanding SC 1.2.5
==============================================================================================================================

> **[1.2.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-audio-desc-only) Audio Description:** <a href="#audiodescdef" class="termref">Audio description</a> is provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#videodef" class="termref">video</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.

Note 1: For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.

Note 2: 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.

### Specific Benefits of Success Criterion 1.2.5:

-   People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.

Examples of Success Criterion 1.2.5
-----------------------------------

-   **A movie with audio description.**

    **Describer:** A title, "Teaching Evolution Case Studies. Bonnie Chen." A teacher shows photographs of birds with long, thin beaks.

    **Bonnie Chen:** "These photos were all taken at the Everglades."

    **Describer:** The teacher hands each student two flat, thin wooden sticks.

    **Bonnie Chen:** "Today you will pretend to be a species of wading bird that has a beak like this."

    **Describer:** The teacher holds two of the sticks to her mouth making the shape of a beak.

    Transcript of audio based on the first few minutes of "[Teaching Evolution Case Studies, Bonnie Chen](http://www.pbs.org/wgbh/evolution/educators/teachstuds/tvideos.html)" (copyright WGBH and Clear Blue Sky Productions, Inc.)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/richmedia/tutorials/smiltemplates.html)

-   [Standard Techniques in Audio Description](http://joeclark.org/access/description/ad-principles.html)

-   [Provide audio description for video or animated content - general advice](http://www.skillsforaccess.org.uk/howto.php?id=104)

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

Techniques and Failures for Success Criterion 1.2.5 - Audio Description
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G78: Providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G78)

2.  [G173: Providing a version of a movie with audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G173) using one of the following:

    -   [SM6: Providing audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM6) (SMIL)

    -   [SM7: Providing audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM7) (SMIL)

    -   Using any player that supports audio and video

3.  [G8: Providing a movie with extended audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G8) using one of the following:

    -   [SM1: Adding extended audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM1) (SMIL)

    -   [SM2: Adding extended audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM2) (SMIL)

    -   Using any player that supports audio and video

### Additional Techniques (Advisory) for 1.2.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing audio description in multiple languages in SMIL 1.0 (future link)

-   Providing audio description in multiple languages in SMIL 2.0 (future link)

-   Providing audio description for live synchronized media (future link)

### Common Failures for SC 1.2.5

The following are common mistakes that are considered failures of Success Criterion 1.2.5 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="audiodescdef"></span> audio description  
narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

Note 1: Audio description of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> provides information about actions, characters, scene changes, on-screen text, and other visual content.

Note 2: In standard audio description, narration is added during existing pauses in dialogue. (See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#extended-addef" class="termref">extended audio description</a>.)

Note 3: Where all of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> information is already provided in existing <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a>, no additional audio description is necessary.

Note 4: Also called "video description" and "descriptive narration."

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#livedef" class="termref">live</a>

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

 <span id="videodef"></span> video  
the technology of moving or sequenced pictures or images

Note: Video can be made up of animated or photographic images, or both.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.4 \[Captions (Live)\]](media-equiv-real-time-captions.html "Understanding SC  1.2.4 [Captions (Live)]")
-   [**Next:** SC 1.2.6 \[Sign Language\]](media-equiv-sign.html "Understanding SC  1.2.6 [Sign Language]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
