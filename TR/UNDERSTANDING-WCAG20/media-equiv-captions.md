[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.1 \[Audio-only and Video-only (Prerecorded)\]](media-equiv-av-only-alt.html "Understanding SC  1.2.1 [Audio-only and Video-only (Prerecorded)]")
-   [**Next:** SC 1.2.3 \[Audio Description or Media Alternative (Prerecorded)\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative (Prerecorded)]")

On this page:

-   [Intent](#media-equiv-captions-intent-head)
-   [Examples](#media-equiv-captions-examples-head)
-   [Related Resources](#media-equiv-captions-resources-head)
-   [Techniques & Failures](#media-equiv-captions-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-captions"></span> **Captions (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.2
============================================================================================================================

> **[1.2.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-captions) Captions (Prerecorded):** <a href="#captionsdef" class="termref">Captions</a> are provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#audiodef" class="termref">audio</a> content in <a href="#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a href="#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.

It is acknowledged that at the present time there may be difficulty in creating captions for time-sensitive material and this may result in the author being faced with the choice of delaying the information until captions are available, or publishing time-sensitive content that is inaccessible to the deaf, at least for the interval until captions are available. Over time, the tools for captioning as well as building the captioning into the delivery process can shorten or eliminate such delays.

Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page. For example, if information on a page is accompanied by a synchronized media presentation that presents no more information than is already presented in text, but is easier for people with cognitive, language, or learning disabilities to understand, then it would not need to be captioned since the information is already presented on the page in text or in text alternatives (e.g., for images).

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

-   An orchestra provides captions for videos of performances. In addition to capturing dialog and lyrics verbatim, captions identify non-vocal music by title, movement, composer, and any information that will help the user comprehend the nature of the audio. For instance captions read,

    "\[Orchestral Suite No. 3.2 in D major, BWV 1068, Air\]

    \[Johann Sebastian Bach, Composer\]

    ♪ Calm melody with a slow tempo ♪"

    *Note:* Style guides for captions may differ among different languages.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

### Guides to Captioning

-   [Captioning Key: Guidelines and Preferred Techniques](http://www.captioningkey.org/)

-   [Best Practices in Online Captioning](http://joeclark.org/access/captioning/bpoc/)

### SMIL Resources

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](http://www.w3.org/TR/REC-smil/)

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](http://www.w3.org/TR/SMIL/)

-   [Accessibility Features of SMIL](http://www.w3.org/TR/SMIL-access/)

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

### Other Captioning Resources

-   [National Center for Accessible Media](http://ncam.wgbh.org/)

-   [WebAIM: Captioning Resource List](http://webaim.org/techniques/captions/)

### Captioning Tools

-   [Media Access Generator (MAGpie)](http://ncam.wgbh.org/invent_build/web_multimedia/tools-guidelines)

Techniques and Failures for Success Criterion 1.2.2 - Captions (Prerecorded)
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G93" class="tech-ref">G93: Providing open (always visible) captions</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G87" class="tech-ref">G87: Providing closed captions</a> using any readily available media format that has a video player that supports closed captioning

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G87" class="tech-ref">G87: Providing closed captions</a> using any of the technology-specific techniques below

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM11" class="tech-ref">SM11: Providing captions through synchronized text streams in SMIL 1.0</a> (SMIL)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SM12" class="tech-ref">SM12: Providing captions through synchronized text streams in SMIL 2.0</a> (SMIL)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H95" class="tech-ref">H95: Using the track element to provide captions</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH9" class="tech-ref">FLASH9: Applying captions to prerecorded synchronized media</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL16" class="tech-ref">SL16: Providing Script-Embedded Text Captions for MediaElement Content</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL28" class="tech-ref">SL28: Using Separate Text-Format Text Captions for MediaElement Content</a> (Silverlight)

### Additional Techniques (Advisory) for 1.2.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a note saying "No sound is used in this clip" for video-only clips (future link)

-   Using SMIL 1.0 to provide captions for all languages for which there are audio tracks (future link)

-   Using SMIL 2.0 to provide captions for all languages for which there are audio tracks (future link)

### Common Failures for SC 1.2.2

The following are common mistakes that are considered failures of Success Criterion 1.2.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F8" class="tech-ref">F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F75" class="tech-ref">F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F74" class="tech-ref">F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative</a>

Key Terms
---------

 <span id="audiodef"></span> audio  
the technology of sound reproduction

*Note:* Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

 <span id="captionsdef"></span> captions  
synchronized visual and/or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-altdef" class="termref">text alternative</a> for both speech and non-speech audio information needed to understand the media content

*Note 1:* Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

*Note 2:* Closed Captions are equivalents that can be turned on and off with some players.

*Note 3:* Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#images-of-textdef" class="termref">images of text</a> embedded in <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a>.

*Note 4:* Captions should not obscure or obstruct relevant information in the video.

*Note 5:* In some countries, captions are called subtitles.

*Note 6:* <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodescdef" class="termref">Audio descriptions</a> can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

 <span id="multimedia-alt-textdef"></span> media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

*Note:* A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef" class="termref">live</a>

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.1 \[Audio-only and Video-only (Prerecorded)\]](media-equiv-av-only-alt.html "Understanding SC  1.2.1 [Audio-only and Video-only (Prerecorded)]")
-   [**Next:** SC 1.2.3 \[Audio Description or Media Alternative (Prerecorded)\]](media-equiv-audio-desc.html "Understanding SC  1.2.3 [Audio Description or Media Alternative (Prerecorded)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
