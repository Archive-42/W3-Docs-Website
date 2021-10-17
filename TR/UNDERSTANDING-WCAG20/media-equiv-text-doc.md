[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.7 \[Extended Audio Description (Prerecorded)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Extended Audio Description (Prerecorded)]")
-   [**Next:** SC 1.2.9 \[Audio-only (Live)\]](media-equiv-live-audio-only.html "Understanding SC  1.2.9 [Audio-only (Live)]")

On this page:

-   [Intent](#media-equiv-text-doc-intent-head)
-   [Examples](#media-equiv-text-doc-examples-head)
-   [Related Resources](#media-equiv-text-doc-resources-head)
-   [Techniques & Failures](#media-equiv-text-doc-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-text-doc"></span> **Media Alternative (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.8
=====================================================================================================================================

> **[1.2.8](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-text-doc) Media Alternative (Prerecorded):** An <a href="#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided for all <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#synchronizedmediadef" class="termref">synchronized media</a> and for all prerecorded <a href="#video-onlydef" class="termref">video-only</a> media. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make audio visual material available to individuals whose vision is too poor to reliably read <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#captionsdef" class="gl-ref">captions</a> and whose hearing is too poor to reliably hear dialogue and <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodescdef" class="gl-ref">audio description</a>. This is done by providing an alternative for time-based media.

This approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of descriptions and dialogue transcripts is the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.

If there is any interaction as part of the synchronized media presentation (e.g., "press now to answer the question") then the alternative for time-based media would provide hyperlinks or whatever is needed to provide parallel functionality.

Individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue can access the alternative for time-based media by using a refreshable braille display.

*Note 1:* For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.

*Note 2:* 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.

### Specific Benefits of Success Criterion 1.2.8:

-   People who cannot see well or at all and who also cannot hear well or at all can get access to information in audio-visual presentations.

Examples of Success Criterion 1.2.8
-----------------------------------

-   **Example 1. alternative for time-based media for a training video**

    A community center purchases a Training video for use by its clients and puts it on the center's intranet. The video involves explaining use of a new technology and has a person talking and showing things at the same time. The community center provides an alternative for time-based media that all clients, including those who can neither see the demonstrations nor hear the explanations in the synchronized media, can use to better understand what is being presented.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [uiAccess list of transcription services](http://www.uiaccess.com/transcripts/transcript_services.html)

-   [Transcripts on the Web: Getting people to your podcasts and videos](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html)

Techniques and Failures for Success Criterion 1.2.8 - Media Alternative (Prerecorded)
-------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="media-equiv-text-doc-situation-18-head"></span> Situation A: If the content is prerecorded synchronized media:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G69" class="tech-ref">G69: Providing an alternative for time based media</a> using one of the following techniques

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G58" class="tech-ref">G58: Placing a link to the alternative for time-based media immediately next to the non-text content</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL17" class="tech-ref">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a> (Silverlight)

2.  Linking to the alternative for time-based media using one of the following techniques

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H53" class="tech-ref">H53: Using the body of the object element</a> (HTML)

#### <span id="media-equiv-text-doc-situation-19-head"></span> Situation B: If the content is prerecorded video-only:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G159" class="tech-ref">G159: Providing an alternative for time-based media for video-only content</a>

### Additional Techniques (Advisory) for 1.2.8

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H46" class="tech-ref">H46: Using noembed with embed</a> (HTML)

-   Providing a corrected script (future link)

-   Adding detail to audio description (future link)

### Common Failures for SC 1.2.8

The following are common mistakes that are considered failures of Success Criterion 1.2.8 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F74" class="tech-ref">F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative</a>

Key Terms
---------

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

*Note:* A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef" class="termref">live</a>

 <span id="synchronizedmediadef"></span> synchronized media  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#multimedia-alt-textdef" class="termref">media alternative for text</a> that is clearly labeled as such

 <span id="video-onlydef"></span> video-only  
a time-based presentation that contains only <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> (no <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">audio</a> and no interaction)

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.7 \[Extended Audio Description (Prerecorded)\]](media-equiv-extended-ad.html "Understanding SC  1.2.7 [Extended Audio Description (Prerecorded)]")
-   [**Next:** SC 1.2.9 \[Audio-only (Live)\]](media-equiv-live-audio-only.html "Understanding SC  1.2.9 [Audio-only (Live)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
