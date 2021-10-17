-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Media Alternative (Prerecorded)](media-alternative-prerecorded)
-   [Next SC: Info and Relationships](info-and-relationships)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.9: Audio-only (Live)
========================================================

> Success Criterion [1.2.9 Audio-only (Live)](https://www.w3.org/TR/WCAG21/#audio-only-live) (Level AAA): An [alternative for time-based media](#dfn-alternative-for-time-based-media) that presents equivalent information for [live](#dfn-live) [audio-only](#dfn-audio-only) content is provided.

Intent
------

The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.

Using untrained operators, or providing a transcript which differs markedly from what actually happens would not be considered meeting this Success Criterion.

This success criterion was intended to apply to broadcast of audio and is not intended to require that two-way audio calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.

Examples
--------

-   A public relations firm uses Web based caption services to cover live events; the output from the service is incorporated in a sub frame of the Web page which includes the streaming audio control.
-   A live radio play of a fringe theatre group is being broadcast to the Web. As the actors stick largely to a set script, and the budget for the program is small, the producers provide a link (with the playwright's permission) to the script of the play.
-   A streaming audio server uses a technology which can also accommodate text and graphics, such as HTML5 or Silverlight. A stenographer is used to create live captions at an event, and these are mixed on the fly to produce live captions in the media stream which can be viewed by the media player.
-   A CEO is to give a press release by telephone to the media in response to a breaking news story, the audio is being recorded and streamed over the internet, but due to time constraints a Web captioning service cannot be set up in time. As the press release is a set statement which the CEO will be reading out, the company simultaneously provides the transcript of the release.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Captioning and Subtitling International](http://www.captioningandsubtitling.com.au/work/internet/)
-   [WebAIM Real time captioning resource](http://webaim.org/techniques/captions/realtime)
-   [uiAccess list of transcription services](http://www.uiaccess.com/transcripts/transcript_services.html)
-   [Transcripts on the Web: Getting people to your podcasts and videos](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G151" class="general">G151: Providing a link to a text transcript of a prepared statement or script if the script is followed</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G150" class="general">G150: Providing text based alternatives for live audio-only content</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G157" class="general">G157: Incorporating a live audio captioning service into a Web page</a>

Key Terms
---------

alternative for time-based media

document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

Note

A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

audio

the technology of sound reproduction

Note

Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

audio-only

a time-based presentation that contains only [audio](#dfn-audio) (no [video](#dfn-video) and no interaction)

live

information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

Note

A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to cue or censor the audio (or video) feed, but not sufficient to allow significant editing.

Note

If information is completely computer generated, it is not live.

video

the technology of moving or sequenced pictures or images

Note

Video can be made up of animated or photographic images, or both.
