-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Captions (Live)](captions-live)
-   [Next SC: Sign Language (Prerecorded)](sign-language-prerecorded)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)
======================================================================

> Success Criterion [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded) (Level AA): [Audio description](#dfn-audio-description) is provided for all [prerecorded](#dfn-prerecorded) [video](#dfn-video) content in [synchronized media](#dfn-synchronized-media).

Intent
------

The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.

Note

For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.

1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.

Benefits
--------

-   People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.

Examples
--------

-   **A movie with audio description.**

    **Describer:** A title, "Teaching Evolution Case Studies. Bonnie Chen." A teacher shows photographs of birds with long, thin beaks.

    **Bonnie Chen:** "These photos were all taken at the Everglades."

    **Describer:** The teacher hands each student two flat, thin wooden sticks.

    **Bonnie Chen:** "Today you will pretend to be a species of wading bird that has a beak like this."

    **Describer:** The teacher holds two of the sticks to her mouth making the shape of a beak.

    Transcript of audio based on the first few minutes of " [Teaching Evolution Case Studies, Bonnie Chen](http://www.pbs.org/wgbh/evolution/educators/teachstuds/tvideos.html)" (copyright WGBH and Clear Blue Sky Productions, Inc.)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)
-   [Standard Techniques in Audio Description](http://joeclark.org/access/description/ad-principles.html)
-   [Synchronized Multimedia Integration Language (SMIL) 1.0](https://www.w3.org/TR/REC-smil/)
-   [Synchronized Multimedia Integration Language (SMIL 2.0)](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G78" class="general">G78: Providing a second, user-selectable, audio track that includes audio descriptions</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G78" class="general">G78: Providing a second, user-selectable, audio track that includes audio descriptions</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1" class="silverlight">SL1: Accessing Alternate Audio Tracks in Silverlight Media</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G173" class="general">G173: Providing a version of a movie with audio descriptions</a> using one of the following:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6" class="smil">SM6: Providing audio description in SMIL 1.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7" class="smil">SM7: Providing audio description in SMIL 2.0</a>
    -   Using any player that supports audio and video

4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G8" class="general">G8: Providing a movie with extended audio descriptions</a> using one of the following:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1" class="smil">SM1: Adding extended audio description in SMIL 1.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2" class="smil">SM2: Adding extended audio description in SMIL 2.0</a>
    -   Using any player that supports audio and video

5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G203" class="general">G203: Using a static text alternative to describe a talking head video</a>

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
