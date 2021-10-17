-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Extended Audio Description (Prerecorded)](extended-audio-description-prerecorded)
-   [Next SC: Audio-only (Live)](audio-only-live)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.8: Media Alternative (Prerecorded)
======================================================================

> Success Criterion [1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded) (Level AAA): An [alternative for time-based media](#dfn-alternative-for-time-based-media) is provided for all [prerecorded](#dfn-prerecorded) [synchronized media](#dfn-synchronized-media) and for all prerecorded [video-only](#dfn-video-only) media.

Intent
------

The intent of this Success Criterion is to make audio visual material available to individuals whose vision is too poor to reliably read [captions](#dfn-captions) and whose hearing is too poor to reliably hear dialogue and [audio description](#dfn-audio-description). This is done by providing an alternative for time-based media.

This approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of descriptions and dialogue transcripts is the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.

If there is any interaction as part of the synchronized media presentation (e.g., "press now to answer the question") then the alternative for time-based media would provide hyperlinks or whatever is needed to provide parallel functionality.

Individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue can access the alternative for time-based media by using a refreshable braille display.

Note

For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.

1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.

Benefits
--------

-   People who cannot see well or at all and who also cannot hear well or at all can get access to information in audio-visual presentations.

Examples
--------

-   **Example 1. alternative for time-based media for a training video**

    A community center purchases a Training video for use by its clients and puts it on the center's intranet. The video involves explaining use of a new technology and has a person talking and showing things at the same time. The community center provides an alternative for time-based media that all clients, including those who can neither see the demonstrations nor hear the explanations in the synchronized media, can use to better understand what is being presented.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [uiAccess list of transcription services](http://www.uiaccess.com/transcripts/transcript_services.html)
-   [Transcripts on the Web: Getting people to your podcasts and videos](http://www.uiaccess.com/transcripts/transcripts_on_the_web.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the content is prerecorded synchronized media:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G69" class="general">G69: Providing an alternative for time based media</a> using one of the following techniques

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G58" class="general">G58: Placing a link to the alternative for time-based media immediately next to the non-text content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17" class="silverlight">SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement</a>

2.  Linking to the alternative for time-based media using one of the following techniques

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H53" class="html">H53: Using the body of the object element</a>

#### Situation B: If the content is prerecorded video-only:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G159" class="general">G159: Providing an alternative for time-based media for video-only content</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H46" class="html">H46: Using noembed with embed</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F74" class="failure">F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative</a>

Key Terms
---------

alternative for time-based media

document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

Note

A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

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

prerecorded

information that is not [live](#dfn-live)

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

video-only

a time-based presentation that contains only [video](#dfn-video) (no [audio](#dfn-audio) and no interaction)
