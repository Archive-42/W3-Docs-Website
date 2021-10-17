-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Sign Language (Prerecorded)](sign-language-prerecorded)
-   [Next SC: Media Alternative (Prerecorded)](media-alternative-prerecorded)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.7: Extended Audio Description (Prerecorded)
===============================================================================

> Success Criterion [1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded) (Level AAA): Where pauses in foreground audio are insufficient to allow [audio descriptions](#dfn-audio-description) to convey the sense of the video, [extended audio description](#dfn-extended-audio-description) is provided for all [prerecorded](#dfn-prerecorded) [video](#dfn-video) content in [synchronized media](#dfn-synchronized-media).

Intent
------

The intent of this Success Criterion is to provide people who are blind or visually impaired access to a synchronized media presentation beyond that which can be provided by standard audio description. This is done by periodically freezing the synchronized media presentation and playing additional audio description. The synchronized media presentation is then resumed.

Because it disrupts viewing for those who do not need the additional description, techniques that allow you to turn the feature on and off are often provided. Alternately, versions with and without the additional description can be provided.

Benefits
--------

-   People who are blind, people with low vision who cannot see the screen, as well as those with cognitive limitations who have difficulty interpreting visually what is happening, often use audio description of the visual information. However, if there is too much dialogue the audio description is insufficient. Extended audio description can provide the additional information needed to understand the video.

Examples
--------

-   *Example 1. Video of a lecture.* A physics professor is giving a lecture. He makes freehand sketches on the whiteboard, speaking rapidly as he draws. As soon as he has finished discussing one problem, he erases the drawing and makes another sketch while continuing to speak and gesture with his other hand. The video is paused between problems, and extended audio description of the professor's drawings and gestures is provided; the video is then resumed.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](https://www.w3.org/TR/REC-smil/)
-   [Synchronized Multimedia Integration Language (SMIL) 2.0](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)
-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)
-   [Standard Techniques in Audio Description](http://joeclark.org/access/description/ad-principles.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G8" class="general">G8: Providing a movie with extended audio descriptions</a> using one of the following:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1" class="smil">SM1: Adding extended audio description in SMIL 1.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2" class="smil">SM2: Adding extended audio description in SMIL 2.0</a>
    -   Using any player that supports audio and video

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H96" class="html">H96: Using the track element to provide audio descriptions</a>

Key Terms
---------

audio

the technology of sound reproduction

Note

Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

audio description

narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

Note

Audio description of [video](#dfn-video) provides information about actions, characters, scene changes, on-screen text, and other visual content.

Note

In standard audio description, narration is added during existing pauses in dialogue. (See also [extended audio description](#dfn-extended-audio-description).)

Note

Where all of the [video](#dfn-video) information is already provided in existing [audio](#dfn-audio), no additional audio description is necessary.

Note

Also called "video description" and "descriptive narration."

extended audio description

audio description that is added to an audiovisual presentation by pausing the [video](#dfn-video) so that there is time to add additional description

Note

This technique is only used when the sense of the [video](#dfn-video) would be lost without the additional [audio description](#dfn-audio-description) and the pauses between dialogue/narration are too short.

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

synchronized media

[audio](#dfn-audio) or [video](#dfn-video) synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a [media alternative for text](#dfn-media-alternative-for-text) that is clearly labeled as such

video

the technology of moving or sequenced pictures or images

Note

Video can be made up of animated or photographic images, or both.
