[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.1 \[Audio-only and Video-only (Prerecorded)\]](media-equiv-av-only-alt.html "Understanding SC  1.2.1 [Audio-only and Video-only (Prerecorded)]")
-   [**Next:** SC 1.2.3 \[Audio Description or Media Alternative\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative]")

On this page:

-   [Intent](#media-equiv-captions-intent-head)
-   [Examples](#media-equiv-captions-examples-head)
-   [Related Resources](#media-equiv-captions-resources-head)
-   [Techniques & Failures](#media-equiv-captions-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-captions"></span> **Captions (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.2
============================================================================================================================

> **[1.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-captions) Captions (Prerecorded):** <a href="#captionsdef" class="termref">Captions</a> are provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#audiodef" class="termref">audio</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a href="#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.

It is acknowledged that at the present time there may be difficulty in creating captions for time-sensitive material and this may result in the author being faced with the choice of delaying the information until captions are available, or publishing time-sensitive content that is inaccessible to the deaf, at least for the interval until captions are available. Over time, the tools for captioning as well as building the captioning into the delivery process can shorten or eliminate such delays.

Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page. For example, if information on a page is accompanied by a synchronized media presentation that presents no more information than is already presented in text, but is easier for people with cognitive, language, or learning disabilities to understand, then it would not need to be captioned since the information is already presented on the page in text or in text alternatives (e.g. for images).

See also *[Understanding Success Criterion 1.2.4 Captions (Live)](media-equiv-real-time-captions.html)*.

### Specific Benefits of Success Criterion 1.2.2:

-   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.

Examples of Success Criterion 1.2.2
-----------------------------------

-   **A captioned tutorial**

    A video clip shows how to tie a knot. The captions read,

    "(music)

    Using rope to tie knots was an important skill

    for the likes of sailors, soldiers and woodsmen.."

    From Sample Transcript Formatting by Whit Anderson.

-   A complex legal document contains synchronized media clips for different paragraphs that show a person speaking the contents of the paragraph. Each clip is associated with its corresponding paragraph. No captions are provided for the synchronized media.

-   An instruction manual containing a description of a part and its necessary orientation is accompanied by a synchronized media clip showing the part in its correct orientation. No captions are provided for the synchronized media clip.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

### Guides to Captioning

-   [Captioning Key: Guidelines and Preferred Techniques](http://www.dcmp.org/captioningkey/)

-   [Best Practices in Online Captioning](http://joeclark.org/access/captioning/bpoc/)

### SMIL Resources

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/richmedia/tutorials/smiltemplates.html)

### Other Captioning Resources

-   [National Center for Accessible Media](http://ncam.wgbh.org/)

-   [Quicktime Captioning Tutorial](http://www.webaim.org/techniques/captions/quicktime/index.php)

-   [RealPlayer Captioning Tutorial](http://www.webaim.org/techniques/captions/real/index.php)

-   [WebAIM: Captioning Resource List](http://www.webaim.org/resources/captioning/)

-   [Windows Media Player Captioning Tutorial](http://www.webaim.org/techniques/captions/windows/index.php)

### Captioning Tools

-   [Media Access Generator (MAGpie)](http://ncam.wgbh.org/webaccess/magpie/)

-   [World Caption Software](http://www.journalism.wisc.edu/worldcaption/)

Techniques and Failures for Success Criterion 1.2.2 - Captions (Prerecorded)
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G93: Providing open (always visible) captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G93)

2.  [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any readily available media format that has a video player that supports closed captioning

3.  [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any of the technology-specific techniques below

    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM11) (SMIL)

    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM12) (SMIL)

### Additional Techniques (Advisory) for 1.2.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a note saying "No sound is used in this clip" for video-only clips (future link)

-   Using SMIL 1.0 to provide captions for all languages for which there are audio tracks (future link)

-   Using SMIL 2.0 to provide captions for all languages for which there are audio tracks (future link)

### Common Failures for SC 1.2.2

The following are common mistakes that are considered failures of Success Criterion 1.2.2 by the WCAG Working Group.

-   [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F8)

-   [F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F75)

-   [F74: Failure of SC1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F74)

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

 <span id="multimedia-alt-textdef"></span> media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

Note: A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#livedef" class="termref">live</a>

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.1 \[Audio-only and Video-only (Prerecorded)\]](media-equiv-av-only-alt.html "Understanding SC  1.2.1 [Audio-only and Video-only (Prerecorded)]")
-   [**Next:** SC 1.2.3 \[Audio Description or Media Alternative\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
