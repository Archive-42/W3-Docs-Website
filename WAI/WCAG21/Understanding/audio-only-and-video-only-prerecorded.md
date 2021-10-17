-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Non-text Content](non-text-content)
-   [Next SC: Captions (Prerecorded)](captions-prerecorded)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)
==============================================================================

> Success Criterion [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded) (Level A): For [prerecorded](#dfn-prerecorded) [audio-only](#dfn-audio-only) and prerecorded [video-only](#dfn-video-only) media, the following are true, except when the audio or video is a [media alternative for text](#dfn-media-alternative-for-text) and is clearly labeled as such:
>
> Prerecorded Audio-only  
> An [alternative for time-based media](#dfn-alternative-for-time-based-media) is provided that presents equivalent information for prerecorded audio-only content.
>
> Prerecorded Video-only  
> Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

Intent
------

The intent of this Success Criterion is to make information conveyed by prerecorded audio-only and prerecorded video-only content available to all users. Alternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. In the future, text could also be translated into symbols, sign language or simpler forms of the language (future).

An example of pre-recorded video with no audio information or user interaction is a silent movie. The purpose of the transcript is to provide an equivalent to what is presented visually. For prerecorded video content, authors have the option to provide an audio track. The purpose of the audio alternative is to be an equivalent to the video. This makes it possible for users with and without vision impairment to review content simultaneously. The approach can also make it easier for those with cognitive, language and learning disabilities to understand the content because it would provide parallel presentation.

Note

A text equivalent is not required for audio that is provided as an equivalent for video with no audio information. For example, it is not required to caption video description that is provided as an alternative to a silent movie.

See also [1.2.4: Audio-only (Live)](audio-only-live)

Benefits
--------

-   This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text alternatives aloud, present them visually, or convert them to braille.
-   Alternatives for timed-based media that are text based may help some people who have difficulty understanding the meaning of prerecorded video content.
-   People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.
-   People who are deaf-blind can read the text in braille.
-   Additionally, text supports the ability to search for non-text content and to repurpose content in a variety of ways.

Examples
--------

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

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the content is prerecorded audio-only:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G158" class="general">G158: Providing an alternative for time-based media for audio-only content</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17" class="silverlight">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a>

#### Situation B: If the content is prerecorded video-only:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G159" class="general">G159: Providing an alternative for time-based media for video-only content</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G166" class="general">G166: Providing audio that describes the important video content and describing it as such</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17" class="silverlight">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H96" class="html">H96: Using the track element to provide audio descriptions</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F30" class="failure">F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F67" class="failure">F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information</a>

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

media alternative for text

media that presents no more information than is already presented in text (directly or via text alternatives)

Note

A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

prerecorded

information that is not [live](#dfn-live)

video

the technology of moving or sequenced pictures or images

Note

Video can be made up of animated or photographic images, or both.

video-only

a time-based presentation that contains only [video](#dfn-video) (no [audio](#dfn-audio) and no interaction)
