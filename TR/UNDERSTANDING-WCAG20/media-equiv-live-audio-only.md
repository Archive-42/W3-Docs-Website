[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.8 \[Media Alternative (Prerecorded)\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative (Prerecorded)]")
-   [**Next:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")

On this page:

-   [Intent](#media-equiv-live-audio-only-intent-head)
-   [Examples](#media-equiv-live-audio-only-examples-head)
-   [Related Resources](#media-equiv-live-audio-only-resources-head)
-   [Techniques & Failures](#media-equiv-live-audio-only-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-live-audio-only"></span> **Audio-only (Live)**<span class="screenreader">:</span> Understanding SC 1.2.9
==============================================================================================================================

> **[1.2.9](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-live-audio-only) Audio-only (Live):** An <a href="#alt-time-based-mediadef" class="termref">alternative for time-based media</a> that presents equivalent information for <a href="#livedef" class="termref">live</a> <a href="#audio-onlydef" class="termref">audio-only</a> content is provided. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.

Using untrained operators, or providing a transcript which differs markedly from what actually happens would not be considered meeting this Success Criterion.

This success criterion was intended to apply to broadcast of audio and is not intended to require that two-way audio calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.

Examples of Success Criterion 1.2.9
-----------------------------------

-   A public relations firm uses Web based caption services to cover live events; the output from the service is incorporated in a sub frame of the Web page which includes the streaming audio control.

-   A live radio play of a fringe theatre group is being broadcast to the Web. As the actors stick largely to a set script, and the budget for the program is small, the producers provide a link (with the playwright's permission) to the script of the play.

-   A streaming audio server uses a media format which can also accommodate text and graphics, such as Flash or Silverlight. A stenographer is used to create live captions at an event, and these are mixed on the fly to produce live captions in the media stream which can be viewed by the media player.

-   A CEO is to give a press release by telephone to the media in response to a breaking news story, the audio is being recorded and streamed over the internet, but due to time constraints a Web captioning service cannot be set up in time. As the press release is a set statement which the CEO will be reading out, the company simultaneously provides the transcript of the release.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Captioning and Subtitling International](http://www.captioningandsubtitling.com.au/work/internet/)

-   [WebAIM Real time captioning resource](http://webaim.org/techniques/captions/realtime)

-   [uiAccess list of transcription services](http://www.uiaccess.com/transcripts/transcript_services.html)

-   [Transcripts on the Web: Getting people to your podcasts and videos](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html)

Techniques and Failures for Success Criterion 1.2.9 - Audio-only (Live)
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G151" class="tech-ref">G151: Providing a link to a text transcript of a prepared statement or script if the script is followed</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G150" class="tech-ref">G150: Providing text based alternatives for live audio-only content</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G157" class="tech-ref">G157: Incorporating a live audio captioning service into a Web page</a>

### Additional Techniques (Advisory) for 1.2.9

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using metadata to associate text transcriptions with audio-only content (future link)

    *Example:* Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

### Common Failures for SC 1.2.9

The following are common mistakes that are considered failures of Success Criterion 1.2.9 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

*Note:* A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="audio-onlydef"></span> audio-only  
a time-based presentation that contains only <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef" class="termref">audio</a> (no <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a> and no interaction)

 <span id="livedef"></span> live  
information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

*Note 1:* A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to queue or censor the audio (or video) feed, but not sufficient to allow significant editing.

*Note 2:* If information is completely computer generated, it is not live.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.8 \[Media Alternative (Prerecorded)\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative (Prerecorded)]")
-   [**Next:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
