-   [Contents](. "Table of Contents")
-   [GL: Time-based Media](time-based-media)
-   [Previous SC: Audio-only and Video-only (Prerecorded)](audio-only-and-video-only-prerecorded)
-   [Next SC: Audio Description or Media Alternative (Prerecorded)](audio-description-or-media-alternative-prerecorded)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.2.2: Captions (Prerecorded)
=============================================================

> Success Criterion [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG21/#captions-prerecorded) (Level A): [Captions](#dfn-captions) are provided for all [prerecorded](#dfn-prerecorded) [audio](#dfn-audio) content in [synchronized media](#dfn-synchronized-media), except when the media is a [media alternative for text](#dfn-media-alternative-for-text) and is clearly labeled as such.

Intent
------

The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.

It is acknowledged that at the present time there may be difficulty in creating captions for time-sensitive material and this may result in the author being faced with the choice of delaying the information until captions are available, or publishing time-sensitive content that is inaccessible to the deaf, at least for the interval until captions are available. Over time, the tools for captioning as well as building the captioning into the delivery process can shorten or eliminate such delays.

Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page. For example, if information on a page is accompanied by a synchronized media presentation that presents no more information than is already presented in text, but is easier for people with cognitive, language, or learning disabilities to understand, then it would not need to be captioned since the information is already presented on the page in text or in text alternatives (e.g., for images).

See also [1.2.1: Captions (Live)](captions-live).

Benefits
--------

-   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.

Examples
--------

-   **A captioned tutorial**

    A video clip shows how to tie a knot. The captions read,

    "(music)

    Using rope to tie knots was an important skill

    for the likes of sailors, soldiers and woodsmen.."

    From Sample Transcript Formatting by Whit Anderson.

-   A complex legal document contains synchronized media clips for different paragraphs that show a person speaking the contents of the paragraph. Each clip is associated with its corresponding paragraph. No captions are provided for the synchronized media.
-   An instruction manual containing a description of a part and its necessary orientation is accompanied by a synchronized media clip showing the part in its correct orientation. No captions are provided for the synchronized media clip.
-   An orchestra provides captions for videos of performances. In addition to capturing dialog and lyrics verbatim, captions identify non-vocal music by title, movement, composer, and any information that will help the user comprehend the nature of the audio. For instance captions read,

    "\[Orchestral Suite No. 3.2 in D major, BWV 1068, Air\]

    \[Johann Sebastian Bach, Composer\]

    ♪ Calm melody with a slow tempo ♪"

    Note

    Style guides for captions may differ among different languages.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

### Guides to Captioning

-   [Captioning Key: Guidelines and Preferred Techniques](http://www.captioningkey.org/)
-   [Best Practices in Online Captioning](http://joeclark.org/access/captioning/bpoc/)

### SMIL Resources

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](https://www.w3.org/TR/REC-smil/)
-   [Synchronized Multimedia Integration Language (SMIL 2.0)](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)
-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

### Other Captioning Resources

-   [National Center for Accessible Media](http://ncam.wgbh.org/)
-   [WebAIM: Captioning Resource List](http://webaim.org/techniques/captions/)

### Captioning Tools

-   [Media Access Generator (MAGpie)](http://ncam.wgbh.org/invent_build/web_multimedia/tools-guidelines)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G93" class="general">G93: Providing open (always visible) captions</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G87" class="general">G87: Providing closed captions</a> using any readily available media format that has a video player that supports closed captioning
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G87" class="general">G87: Providing closed captions</a> using any of the technology-specific techniques below

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11" class="smil">SM11: Providing captions through synchronized text streams in SMIL 1.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12" class="smil">SM12: Providing captions through synchronized text streams in SMIL 2.0</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H95" class="html">H95: Using the track element to provide captions</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL16" class="silverlight">SL16: Providing Script-Embedded Text Captions for MediaElement Content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL28" class="silverlight">SL28: Using Separate Text-Format Text Captions for MediaElement Content</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F8" class="failure">F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F75" class="failure">F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F74" class="failure">F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative</a>

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
