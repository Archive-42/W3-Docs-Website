[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.2 \[Captions (Prerecorded)\]](media-equiv-captions.html "Understanding SC  1.2.2 [Captions (Prerecorded)]")
-   [**Next:** SC 1.2.4 \[Captions (Live)\]](media-equiv-real-time-captions.html "Understanding SC  1.2.4 [Captions (Live)]")

On this page:

-   [Intent](#media-equiv-audio-desc-intent-head)
-   [Examples](#media-equiv-audio-desc-examples-head)
-   [Related Resources](#media-equiv-audio-desc-resources-head)
-   [Techniques & Failures](#media-equiv-audio-desc-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-audio-desc"></span> **Audio Description or Media Alternative**<span class="screenreader">:</span> Understanding SC 1.2.3
==============================================================================================================================================

> **[1.2.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-audio-desc) Audio Description or Media Alternative:** An <a href="#alt-time-based-mediadef" class="termref">alternative for time-based media</a> or <a href="#audiodescdef" class="termref">audio description</a> of the <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#videodef" class="termref">video</a> content is provided for <a href="#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a href="#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. This Success Criterion describes two approaches, either of which can be used.

One approach is to provide audio description of the video content. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.

The second approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a screenplay or book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of description and dialogue transcripts are the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.

If there is any interaction as part of the synchronized media presentation (e.g. "press now to answer the question") then the alternative for time-based media would provide hyperlinks or whatever is needed to provide the same functionality.

Note 1: For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.

Note 2: 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.

See also *[Understanding Success Criterion 1.2.5 Audio Description](media-equiv-audio-desc-only.html)*, *[Understanding Success Criterion 1.2.7 Audio Description (Extended)](media-equiv-extended-ad.html)* and *[Understanding Success Criterion 1.2.8 Media Alternative](media-equiv-text-doc.html)*.

### Specific Benefits of Success Criterion 1.2.3:

-   This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.

Examples of Success Criterion 1.2.3
-----------------------------------

-   **A movie with audio description.**

    **Describer:** A title, "Teaching Evolution Case Studies. Bonnie Chen." A teacher shows photographs of birds with long, thin beaks.

    **Bonnie Chen:** "These photos were all taken at the Everglades."

    **Describer:** The teacher hands each student two flat, thin wooden sticks.

    **Bonnie Chen:** "Today you will pretend to be a species of wading bird that has a beak like this."

    **Describer:** The teacher holds two of the sticks to her mouth making the shape of a beak.

    Transcript of audio based on the first few minutes of "[Teaching Evolution Case Studies, Bonnie Chen](http://www.pbs.org/wgbh/evolution/educators/teachstuds/tvideos.html)" (copyright WGBH and Clear Blue Sky Productions, Inc.)

-   **An alternative for time-based media for a training video**

    A company purchases a Training video for use by its employees and puts it on the companies intranet. The video involves explaining use of a new technology and has a person talking and showing things at the same time. Since there is no place to insert audio description of the visual demonstrations during gaps in dialogue, the company provides an alternative for time-based media that all employees, including those who cannot see the demonstrations, can use to better understand what is being presented.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/richmedia/tutorials/smiltemplates.html)

-   [Standard Techniques in Audio Description](http://joeclark.org/access/description/ad-principles.html)

-   [Provide audio description for video or animated content - general advice](http://www.skillsforaccess.org.uk/howto.php?id=104)

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

Techniques and Failures for Success Criterion 1.2.3 - Audio Description or Media Alternative
--------------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G69: Providing an alternative for time based media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G69)

2.  [G78: Providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G78)

3.  [G173: Providing a version of a movie with audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G173) using one of the following:

    -   [SM6: Providing audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM6) (SMIL)

    -   [SM7: Providing audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM7) (SMIL)

    -   Using any player that supports audio and video

4.  [G8: Providing a movie with extended audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G8) using one of the following:

    -   [SM1: Adding extended audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM1) (SMIL)

    -   [SM2: Adding extended audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM2) (SMIL)

    -   Using any player that supports audio and video

### Additional Techniques (Advisory) for 1.2.3

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing audio description in multiple languages in SMIL 1.0 (future link)

-   Providing audio description in multiple languages in SMIL 2.0 (future link)

### Common Failures for SC 1.2.3

The following are common mistakes that are considered failures of Success Criterion 1.2.3 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

Note: A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="audiodescdef"></span> audio description  
narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

Note 1: Audio description of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> provides information about actions, characters, scene changes, on-screen text, and other visual content.

Note 2: In standard audio description, narration is added during existing pauses in dialogue. (See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#extended-addef" class="termref">extended audio description</a>.)

Note 3: Where all of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> information is already provided in existing <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a>, no additional audio description is necessary.

Note 4: Also called "video description" and "descriptive narration."

 <span id="multimedia-alt-textdef"></span> media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

Note: A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

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
-   [**Previous:** SC 1.2.2 \[Captions (Prerecorded)\]](media-equiv-captions.html "Understanding SC  1.2.2 [Captions (Prerecorded)]")
-   [**Next:** SC 1.2.4 \[Captions (Live)\]](media-equiv-real-time-captions.html "Understanding SC  1.2.4 [Captions (Live)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
