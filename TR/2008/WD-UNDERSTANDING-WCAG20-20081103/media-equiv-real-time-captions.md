[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.3 \[Audio Description or Media Alternative\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative]")
-   [**Next:** SC 1.2.5 \[Audio Description\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description]")

On this page:

-   [Intent](#media-equiv-real-time-captions-intent-head)
-   [Examples](#media-equiv-real-time-captions-examples-head)
-   [Related Resources](#media-equiv-real-time-captions-resources-head)
-   [Techniques & Failures](#media-equiv-real-time-captions-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-real-time-captions"></span> **Captions (Live)**<span class="screenreader">:</span> Understanding SC 1.2.4
===============================================================================================================================

> **[1.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-real-time-captions) Captions (Live):** <a href="#captionsdef" class="termref">Captions</a> are provided for all <a href="#livedef" class="termref">live</a> <a href="#audiodef" class="termref">audio</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch ***real-time*** presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and notate sound effects and other significant audio.

### Specific Benefits of Success Criterion 1.2.4:

-   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.

Examples of Success Criterion 1.2.4
-----------------------------------

-   **A Web cast**

    A news organization provides a live, captioned Web cast.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   See *[Understanding Success Criterion 1.2.2 Captions (Prerecorded)](media-equiv-captions.html)*.

Techniques and Failures for Success Criterion 1.2.4 - Captions (Live)
---------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G93: Providing open (always visible) captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G93)

2.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any readily available media format that has a video player that supports closed captioning

3.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using one of the following techniques:

    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM11) (SMIL)

    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM12) (SMIL)

Note: Captions may be generated using real-time text translation service.

### Additional Techniques (Advisory) for 1.2.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

(none currently documented)

### Common Failures for SC 1.2.4

The following are common mistakes that are considered failures of Success Criterion 1.2.4 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="audiodef"></span> audio  
the technology of sound reproduction

Note: Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

 <span id="captionsdef"></span> captions  
synchronized visual and/or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-altdef" class="termref">text alternative</a> for both speech and non-speech audio information needed to understand the media content

Note 1: Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

Note 2: Closed Captions are equivalents that can be turned on and off with some players.

Note 3: Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">images of text</a> embedded in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a>.

Note 4: Captions should not obscure or obstruct relevant information in the video.

Note 5: In some countries, captions are called subtitles.

Note 6: <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodescdef" class="termref">Audio descriptions</a> can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

 <span id="livedef"></span> live  
information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

Note 1: A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to queue or censor the audio (or video) feed, but not sufficient to allow significant editing.

Note 2: If information is completely computer generated, it is not live.

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.3 \[Audio Description or Media Alternative\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative]")
-   [**Next:** SC 1.2.5 \[Audio Description\]](media-equiv-audio-desc-only.html "Understanding SC  1.2.5 [Audio Description]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
