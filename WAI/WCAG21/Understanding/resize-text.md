-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Contrast (Minimum)](contrast-minimum)
-   [Next SC: Images of Text](images-of-text)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.4: Resize text
==================================================

> Success Criterion [1.4.4 Resize text](https://www.w3.org/TR/WCAG21/#resize-text) (Level AA): Except for [captions](#dfn-captions) and [images of text](#dfn-image-of-text), [text](#dfn-text) can be resized without [assistive technology](#dfn-assistive-technology) up to 200 percent without loss of content or functionality.

Intent
------

The intent of this Success Criterion is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen \[vs. text characters that are still in data form such as ASCII\]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier. Users may benefit from scaling all content on the Web page, but text is most critical.

The scaling of content is primarily a user agent responsibility. User agents that satisfy [UAAG 1.0 Checkpoint 4.1](https://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale) allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content effectively. Authors may satisfy this Success Criterion by verifying that content does not interfere with user agent support for resizing text, including text-based controls, or by providing direct support for resizing text or changing the layout. An example of direct support might be via server-side script that can be used to assign different style sheets.

The author cannot rely on the user agent to satisfy this Success Criterion for HTML content if users do not have access to a user agent with zoom support. For example, if they work in an environment that requires them to use IE 6.

If the author is using a technology whose user agents do not provide zoom support, the author is responsible to provide this type of functionality directly or to provide content that works with the type of functionality provided by the user agent. If the user agent doesn't provide zoom functionality but does let the the user change the text size, the author is responsible for ensuring that the content remains usable when the text is resized.

Some user interface components that function as a label and require activation by the user to access content are not wide enough to accommodate the label's content. For example, in Web mail applications the subject column may not be wide enough to accommodate every possible subject header, but activating the subject header takes the user to the full message with the full subject header. In Web-based spreadsheets, cell content that is too long to be displayed in a column can be truncated, and the full content of the cell is available to the user when the cell receives focus. The content of a user interface component may also become too wide in user interfaces where the user can resize the column width. In this type of user interface component, line wrapping is not required; truncation is acceptable if the component's full content is available on focus or after user activation and an indication that this information can be accessed, is provided to the user in some way besides the fact that it is truncated.

Content satisfies the Success Criterion if it can be scaled up to 200%, that is, up to twice the width and height. Authors may support scaling beyond that limit, however, as scaling becomes more extreme, adaptive layouts may introduce usability problems. For example, words may be too wide to fit into the horizontal space available to them, causing them to be truncated; layout constraints may cause text to overlap with other content when it is scaled larger; or only one word of a sentence may fit on each line, causing the sentence to be displayed as a vertical column of text that is difficult to read.

The working group feels that 200% is a reasonable accommodation that can support a wide range of designs and layouts, and complements older screen magnifiers that provide a minimum magnification of 200%. Above 200%, zoom (which resizes text, images, and layout regions and creates a larger canvas that may require both horizontal and vertical scrolling) may be more effective than text resizing. Assistive technology dedicated to zoom support would usually be used in such a situation and may provide better accessibility than attempts by the author to support the user directly.

Note

Images of text do not scale as well as text because they tend to pixelate, and therefore we suggest using text wherever possible. It is also harder to change foreground and background contrast and color combinations for images of text, which are necessary for some users.

See also [1.4.3: Visual Presentation](visual-presentation).

Benefits
--------

-   This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.

Examples
--------

-   A user with vision impairments increases the text size on a Web page in a browser from 1 em to 1.2 ems. While the user could not read the text at the smaller size, she can read the larger text. All the information on the page is still displayed when the larger font is used for the text.
-   A Web page contains a control for changing the scale of the page. Selecting different settings changes the layout of the page to use the best design for that scale.
-   A user uses a zoom function in his user agent to change the scale of the content. All the content scales uniformly, and the user agent provides scroll bars, if necessary.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS 2 Box Model](https://www.w3.org/TR/CSS2/box.html)
-   [CSS 2 Visual formatting Model](https://www.w3.org/TR/CSS2/visuren.html)
-   [CSS 2 Visual formatting Model Details](https://www.w3.org/TR/CSS2/visudet.html)
-   [About fluid and fixed width layouts](http://www.456bereastreet.com/archive/200504/about_fluid_and_fixed_width_layouts/)
-   [Accessible CSS](http://cookiecrook.com/AIR/2003/train/accessiblecss.php)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G142" class="general">G142: Using a technology that has commonly-available user agents that support zoom</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL22" class="silverlight">SL22: Supporting Browser Zoom in Silverlight</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL23" class="silverlight">SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements</a>
4.  Ensuring that text containers resize when the text resizes **AND** using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C28" class="css">C28: Specifying the size of text containers using em units</a>
    -   Techniques for relative measurements

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C12" class="css">C12: Using percent for font sizes</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C13" class="css">C13: Using named font sizes</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C14" class="css">C14: Using em units for font sizes</a>

    -   Techniques for text container resizing

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34" class="script">SCR34: Calculating size and position in a way that scales with text size</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G146" class="general">G146: Using liquid layout</a>

5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G178" class="general">G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G179" class="general">G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C17" class="css">C17: Scaling form elements which contain text</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C20" class="css">C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C22" class="css">C22: Using CSS to control visual presentation of text</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F69" class="failure">F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F80" class="failure">F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%</a>
-   [F94: Failure of Success Criterion 1.4.4 due to incorrect use of viewport units to resize text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94)

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [meta viewport allows for zoom](/WAI/standards-guidelines/act/rules/meta-viewport-b4f0c3/)

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
