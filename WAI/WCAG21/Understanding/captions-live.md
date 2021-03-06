-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Audio Description or Media Alternative (Prerecorded)](audio-description-or-media-alternative-prerecorded)
-   [Next SC: Audio Description (Prerecorded)](audio-description-prerecorded)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.4: Captions (Live)
======================================================

> Success Criterion [1.2.4 Captions (Live)](https://www.w3.org/TR/WCAG21/#captions-live) (Level AA): [Captions](#dfn-captions) are provided for all [live](#dfn-live) [audio](#dfn-audio) content in [synchronized media](#dfn-synchronized-media).

Intent
------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch *real-time* presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and notate sound effects and other significant audio.

This success criterion was intended to apply to broadcast of synchronized media and is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.

Benefits
--------

-   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.

Examples
--------

-   **A Web cast**

    A news organization provides a live, captioned Web cast.

-   **A music Web cast**

    An orchestra provides Communication Access Realtime Translation (CART) captioning of each real-time Web performance. The CART service captures lyrics and dialog as well as identifies non-vocal music by title, movement, composer, and any information that will help the user comprehend the nature of the audio.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   See [1.2.2: Captions (Prerecorded)](captions-prerecorded).

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G9" class="general">G9: Creating captions for live synchronized media</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G93" class="general">G93: Providing open (always visible) captions</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G9" class="general">G9: Creating captions for live synchronized media</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G87" class="general">G87: Providing closed captions</a> using any readily available media format that has a video player that supports closed captioning
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G9" class="general">G9: Creating captions for live synchronized media</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G87" class="general">G87: Providing closed captions</a> using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11" class="smil">SM11: Providing captions through synchronized text streams in SMIL 1.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12" class="smil">SM12: Providing captions through synchronized text streams in SMIL 2.0</a>

Note

Captions may be generated using real-time text translation service.

Key Terms
---------

ascii art

picture created by a spatial arrangement of characters or glyphs (typically from the 95 printable characters defined by ASCII)

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

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

captions

synchronized visual and/or [text alternative](#dfn-text-alternative) for both speech and non-speech audio information needed to understand the media content

Note

Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

Note

Closed Captions are equivalents that can be turned on and off with some players.

Note

Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent [images of text](#dfn-image-of-text) embedded in [video](#dfn-video).

Note

Captions should not obscure or obstruct relevant information in the video.

Note

In some countries, captions are called subtitles.

Note

[Audio descriptions](#dfn-audio-description) can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

extended audio description

audio description that is added to an audiovisual presentation by pausing the [video](#dfn-video) so that there is time to add additional description

Note

This technique is only used when the sense of the [video](#dfn-video) would be lost without the additional [audio description](#dfn-audio-description) and the pauses between dialogue/narration are too short.

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

image of text

text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

Note

This does not include [text](#dfn-text) that is part of a picture that contains significant other visual content.

A person's name on a nametag in a photograph.

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

non-text content

any content that is not a sequence of characters that can be [programmatically determined](#dfn-programmatically-determined) or where the sequence is not expressing something in [human language](#dfn-human-language)

Note

This includes [ASCII Art](#dfn-ascii-art) (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

synchronized media

[audio](#dfn-audio) or [video](#dfn-video) synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a [media alternative for text](#dfn-media-alternative-for-text) that is clearly labeled as such

text

sequence of characters that can be [programmatically determined](#dfn-programmatically-determined), where the sequence is expressing something in [human language](#dfn-human-language)

text alternative

[Text](#dfn-text) that is programmatically associated with [non-text content](#dfn-non-text-content) or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note

Refer to [Understanding Text Alternatives](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance) for more information.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

video

the technology of moving or sequenced pictures or images

Note

Video can be made up of animated or photographic images, or both.
