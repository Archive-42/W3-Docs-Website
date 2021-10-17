[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.8 \[Media Alternative\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative]")
-   [**Next:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")

On this page:

-   [Intent](#media-equiv-live-audio-only-intent-head)
-   [Examples](#media-equiv-live-audio-only-examples-head)
-   [Related Resources](#media-equiv-live-audio-only-resources-head)
-   [Techniques & Failures](#media-equiv-live-audio-only-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="media-equiv-live-audio-only"></span> **Live Audio-only**<span class="screenreader">:</span> Understanding SC 1.2.9
============================================================================================================================

> **[1.2.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-live-audio-only) Live Audio-only:** An <a href="#alt-time-based-mediadef" class="termref">alternative for time-based media</a> that presents equivalent information for <a href="#livedef" class="termref">live</a> <a href="#audio-onlydef" class="termref">audio-only</a> content is provided. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are Deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.

Using untrained operators, or providing a transcript which differs markedly from what actually happens would not be considered meeting this Success Criterion.

Examples of Success Criterion 1.2.9
-----------------------------------

-   A public relations firm uses Web based caption services to cover live events; the output from the service is incorporated in a sub frame of the Web page which includes the streaming audio control.

-   A live radio play of a fringe theatre group is being broadcast to the Web. As the actors stick largely to a set script, and the budget for the program is small, the producers provide a link (with the playwright's permission) to the script of the play.

-   A streaming audio server uses a media format which can also accommodate text and graphics, such as Flash or Silverlight. A stenographer is used to create live captions at an event, and these are mixed on the fly to produce live captions in the media stream which can be viewed by the media player.

-   A CEO is to give a press release by telephone to the media in response to a breaking news story, the audio is being recorded and streamed over the internet, but due to time constraints a Web captioning service cannot be set up in time. As the press release is a set statement which the CEO will be reading out, the company simultaneously provides the transcript of the release.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Captioning and Subtitling International](http://www.captioningandsubtitling.com/webcapt.htm)

-   [WebAIM Real time captioning resource](http://www.webaim.org/techniques/captions/realtime.php)

Techniques and Failures for Success Criterion 1.2.9 - Live Audio-only
---------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G151: Providing a link to a text transcript of a prepared statement or script if the script is followed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G151)

2.  [G150: Providing text based alternatives for live audio-only content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G150)

3.  [G157: Incorporating a live audio captioning service into a Web page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G157)

### Additional Techniques (Advisory) for 1.2.9

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using metadata to associate text transcriptions with audio-only content (future link)

    Example: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

### Common Failures for SC 1.2.9

The following are common mistakes that are considered failures of Success Criterion 1.2.9 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="alt-time-based-mediadef"></span> alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

Note: A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

 <span id="audio-onlydef"></span> audio-only  
a time-based presentation that contains only <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> (no <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> and no interaction)

 <span id="livedef"></span> live  
information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

Note 1: A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to queue or censor the audio (or video) feed, but not sufficient to allow significant editing.

Note 2: If information is completely computer generated, it is not live.

 <span id="text-altdef"></span> text alternative  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">Text</a> that is programmatically associated with <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#non-text-contentdef" class="termref">non-text content</a> or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

Example: An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note: Refer to [Understanding Text Alternatives](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/conformance.html#uc-text-alternatives-head) for more information.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.2.8 \[Media Alternative\]](media-equiv-text-doc.html "Understanding SC  1.2.8 [Media Alternative]")
-   [**Next:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
