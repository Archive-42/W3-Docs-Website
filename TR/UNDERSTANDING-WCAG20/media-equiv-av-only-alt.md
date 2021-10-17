[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.2 \[Time-based Media\]](media-equiv.html "Understanding Guideline  1.2 [Time-based Media]")
-   [**Next:** SC 1.2.2 \[Captions (Prerecorded)\]](media-equiv-captions.html "Understanding SC  1.2.2 [Captions (Prerecorded)]")

On this page:

-   [Intent](#media-equiv-av-only-alt-intent-head)
-   [Examples](#media-equiv-av-only-alt-examples-head)
-   [Related Resources](#media-equiv-av-only-alt-resources-head)
-   [Techniques & Failures](#media-equiv-av-only-alt-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-av-only-alt"></span> **Audio-only and Video-only (Prerecorded)**<span class="screenreader">:</span> Understanding SC 1.2.1
================================================================================================================================================

> **[1.2.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-av-only-alt) Audio-only and Video-only (Prerecorded):** For <a href="#prerecordeddef" class="termref">prerecorded</a> <a href="#audio-onlydef" class="termref">audio-only</a> and prerecorded <a href="#video-onlydef" class="termref">video-only</a> media, the following are true, except when the audio or video is a <a href="#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such: (Level A)
>
> -   **Prerecorded Audio-only:** An <a href="#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.
>
> -   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make information conveyed by prerecorded audio-only and prerecorded video-only content available to all users. Alternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. In the future, text could also be translated into symbols, sign language or simpler forms of the language (future).

An example of pre-recorded video with no audio information or user interaction is a silent movie. The purpose of the transcript is to provide an equivalent to what is presented visually. For prerecorded video content, authors have the option to provide an audio track. The purpose of the audio alternative is to be an equivalent to the video. This makes it possible for users with and without vision impairment to review content simultaneously. The approach can also make it easier for those with cognitive, language and learning disabilities to understand the content because it would provide parallel presentation.

*Note:* A text equivalent is not required for audio that is provided as an equivalent for video with no audio information. For example, it is not required to caption video description that is provided as an alternative to a silent movie.

See also *[Understanding Success Criterion 1.2.9 Audio-only (Live)](media-equiv-live-audio-only.html)*

### Specific Benefits of Success Criterion 1.2.1:

-   This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text alternatives aloud, present them visually, or convert them to braille.

-   Alternatives for timed-based media that are text based may help some people who have difficulty understanding the meaning of prerecorded video content.

-   People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.

-   People who are deaf-blind can read the text in braille.

-   Additionally, text supports the ability to search for non-text content and to repurpose content in a variety of ways.

Examples of Success Criterion 1.2.1
-----------------------------------

-   **An audio recording of a speech**

    The link to an audio clip says, "Chairman's speech to the assembly." A link to a text transcript is provided immediately after the link to the audio clip.

-   **An audio recording of a press conference**

    A Web page includes a link to an audio recording of a press conference that identifies the audio recording. The page also links to a text transcript of the press conference. The transcript includes a verbatim record of everything the speakers say. It identifies who is speaking as well as noting other significant sounds that are part of the recording, such as applause, laughter, questions from the audience, and so on.

-   **An animation that illustrates how a car engine works**

    An animation shows how a car engine works. There is no audio and the animation is part of a tutorial that describes how an engine works. Since the text of the tutorial already provides a full explanation, the media is an alternative for text and the text alternative includes only a brief description of the animation and refers to the tutorial text for more information.

-   **A video-only file with an audio track**

    A silent movie includes an audio track which includes a description of the action in the video.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Overcoming the challenge of podcast transcription](http://www.rnib.org.uk/travel-downloads-podcasts-and-apps?List=be9c76d3-7ad0-4e03-a1a0-e6f6953b8178&ID=16)

-   [uiAccess list of transcription services](http://www.uiaccess.com/transcripts/transcript_services.html)

-   [Transcripts on the Web: Getting people to your podcasts and videos](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html)

Techniques and Failures for Success Criterion 1.2.1 - Audio-only and Video-only (Prerecorded)
---------------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="media-equiv-av-only-alt-situation-15-head"></span> Situation A: If the content is prerecorded audio-only:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G158" class="tech-ref">G158: Providing an alternative for time-based media for audio-only content</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL17" class="tech-ref">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a> (Silverlight)

#### <span id="media-equiv-av-only-alt-situation-16-head"></span> Situation B: If the content is prerecorded video-only:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G159" class="tech-ref">G159: Providing an alternative for time-based media for video-only content</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G166" class="tech-ref">G166: Providing audio that describes the important video content and describing it as such</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL17" class="tech-ref">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a> (Silverlight)

### Additional Techniques (Advisory) for 1.2.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H96" class="tech-ref">H96: Using the track element to provide audio descriptions</a> (HTML)

-   Providing a transcript of a live audio only presentation after the fact (future link)

-   Linking to textual information that provides comparable information (e.g., for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)

### Common Failures for SC 1.2.1

The following are common mistakes that are considered failures of Success Criterion 1.2.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F30" class="tech-ref">F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F67" class="tech-ref">F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information</a>

Key Terms
---------

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

*Note:* A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="audio-onlydef"></span> audio-only  
a time-based presentation that contains only <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> (no <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> and no interaction)

 <span id="multimedia-alt-textdef"></span> media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

*Note:* A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

 <span id="prerecordeddef"></span> prerecorded  
information that is not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef" class="termref">live</a>

 <span id="video-onlydef"></span> video-only  
a time-based presentation that contains only <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> (no <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">audio</a> and no interaction)

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.2 \[Time-based Media\]](media-equiv.html "Understanding Guideline  1.2 [Time-based Media]")
-   [**Next:** SC 1.2.2 \[Captions (Prerecorded)\]](media-equiv-captions.html "Understanding SC  1.2.2 [Captions (Prerecorded)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
