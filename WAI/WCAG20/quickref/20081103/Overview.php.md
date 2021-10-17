[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C logo" width="72" height="48" />](http://www.w3.org/ "W3C Home")[<img src="http://www.w3.org/WAI/images/wai-temp" alt="Web Accessibility Initiative (WAI) logo" height="48" />](http://www.w3.org/WAI/ "WAI Home")

<span id="title"></span> \[Draft\] How to Meet WCAG 2.0
=======================================================

<span id="subtitle"></span> A customizable quick reference to Web Content Accessibility Guidelines 2.0 requirements (success criteria) and techniques
-----------------------------------------------------------------------------------------------------------------------------------------------------

Customize this Quick Reference
------------------------------

**Technologies:**

-   HTML Techniques (always shown)
-   Show CSS techniques and failures
-   Show SMIL techniques and failures
-   Show Client-side Scripting techniques and failures
-   Show Server-side Scripting techniques and failures
-   Show WAI-ARIA techniques and failures

**Levels:**

-   Show Level A Success Criteria
-   Show Level AA Success Criteria
-   Show Level AAA Success Criteria

**Sections:**

-   Show Sufficient Techniques and Failures
-   Show Advisory Techniques

**Save Settings Option:**

-   Save these settings (requires cookies)

<span id="intro"></span>

Introduction
------------

<span class="showhideinline">\[[Hide Introduction](Overview.php?introopt=N)\]</span>

This document lists all of the requirements (called "success criteria") from the latest [Web Content Accessibility Guidelines (WCAG) 2.0 Working Draft](http://www.w3.org/TR/2008/PR-WCAG20-20081103/). It also lists techniques to meet the requirements, which link to more details. The "Understanding" links go to descriptions, examples, and resources.

You can customize the list by selecting the technologies that apply to your Web project, and the [levels](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#uc-levels-head) and techniques that you want included in the list.

See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an introduction to WCAG 2.0 and supporting documents, including more information about this document.

### About the Techniques

Note that all techniques are [informative](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#informativedef) - you don't have to follow them. The "sufficient techniques" listed below are considered sufficient to meet the success criteria; however, it is not necessary to use these particular techniques. Anyone can [submit new techniques](http://www.w3.org/WAI/GL/WCAG20/TECHS-SUBMIT/) at any time. If techniques are used other than those listed by the Working Group, then some other method for establishing the technique's ability to meet the success criteria would be needed.

In addition to the 'sufficient techniques', there are also advisory techniques that go beyond WCAG 2.0's requirements. Authors are encouraged to apply all techniques that they are able to, including the advisory techniques, in order to best address the needs of the widest possible range of users.

Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive language and learning areas. Authors are encouraged to seek relevant advice about current best practice to ensure that Web content is accessible, as far as possible, to this community.

See also [Sufficient and Advisory Techniques](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/intro.html#introduction-layers-techs-head).

<span id="contents"></span> Table of Contents
---------------------------------------------

-   [WCAG 2.0 Quick Reference List](#guidelines)
    -   1.1 [**Text Alternatives:** Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language](#text-equiv)
    -   1.2 [**Time-based Media:** Provide alternatives for time-based media](#media-equiv)
    -   1.3 [**Adaptable:** Create content that can be presented in different ways (for example simpler layout ) without losing information or structure](#content-structure-separation)
    -   1.4 [**Distinguishable:** Make it easier for users to see and hear content including separating foreground from background](#visual-audio-contrast)
    -   2.1 [**Keyboard Accessible:** Make all functionality available from a keyboard](#keyboard-operation)
    -   2.2 [**Enough Time:** Provide users enough time to read and use content](#time-limits)
    -   2.3 [**Seizures:** Do not design content in a way that is known to cause seizures](#seizure)
    -   2.4 [**Navigable:** Provide ways to help users navigate, find content and determine where they are](#navigation-mechanisms)
    -   3.1 [**Readable:** Make text content readable and understandable](#meaning)
    -   3.2 [**Predictable:** Make Web pages appear and operate in predictable ways](#consistent-behavior)
    -   3.3 [**Input Assistance:** Help users avoid and correct mistakes](#minimize-error)
    -   4.1 [**Compatible:** Maximize compatibility with current and future user agents, including assistive technologies](#ensure-compat)
-   [Conformance Requirements](#conformance-reqs)

WCAG 2.0 Quick Reference List
-----------------------------

This Quick Reference is currently customized to include:

-   **Techniques and Failures:** HTML, CSS, SMIL, Client-side Scripting, Server-side Scripting, WAI-ARIA
-   **Success Criteria Levels:** A, AA, AAA
-   **Sections:** Introduction, Sufficient Techniques and Failures, Advisory Techniques, Conformance Requirements

### Text Alternatives<span class="screenreader">:</span>

[Guideline 1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-equiv) Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/text-equiv.html" class="GLlink">Understanding Guideline 1.1</a>

#### Advisory Techniques for Guideline 1.1

-   Providing sign language videos for audio-only files (future link)

<a href="Overview.php" id="qr-text-equiv-all" class="showhideR" title="Go to top of page">top of page</a>

#### Non-text Content<span class="screenreader">:</span>

[1.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-equiv-all) All <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#non-text-contentdef" class="termref">non-text content</a> that is presented to the user has a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-altdef" class="termref">text alternative</a> that serves the equivalent purpose, except for the situations listed below. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/text-equiv-all.html" class="HTMlink">Understanding Success Criterion 1.1.1</a>

-   **Controls, Input:** If non-text content is a control or accepts user input, then it has a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#namedef" class="termref">name</a> that describes its purpose. (Refer to *[Guideline 4.1](#ensure-compat)* for additional requirements for controls and content that accepts user input.)

-   **Time-Based Media:** If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to *[Guideline 1.2](#media-equiv)* for additional requirements for media.)

-   **Test:** If non-text content is a test or exercise that would be invalid if presented in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a>, then text alternatives at least provide descriptive identification of the non-text content.

-   **Sensory:** If non-text content is primarily intended to create a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#sensoryexpdef" class="termref">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.

-   **<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#CAPTCHAdef" class="termref">CAPTCHA</a>:** If the purpose non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.

-   **Decoration, Formatting, Invisible:** If non-text content is <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#puredecdef" class="termref">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technology</a>.

##### Sufficient Techniques for 1.1.1 - Non-text Content

###### Situation A: If a short description can serve the same purpose and present the same information as the non-text content:

1.  [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G94) using a **short** text alternative technique listed below

###### Situation B: If a short description can **not** serve the same purpose and present the same information as the non-text content (e.g. a chart or diagram):

1.  [G95: Providing short text alternatives that provide a brief description of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G95) using a **short** text alternative technique listed below **AND** one of the following techniques for **long** description:

    -   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G92) using a **long** text alternative technique listed below

    -   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G74)

    -   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G73)

###### Situation C: If non-text content is a control or accepts user input:

1.  [G82: Providing a text alternative that identifies the purpose of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G82) using a **short** text alternative technique listed below

2.  [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

3.  [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

###### Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:

1.  Providing a descriptive label using a **short** text alternative technique listed below

2.  [G68: Providing a descriptive label that describes the purpose of live audio-only and live video-only content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G68) using a **short** text alternative technique listed below

3.  [G100: Providing the accepted name or a descriptive name of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G100) using a **short** text alternative technique listed below

###### Situation E: If non-text content is a CAPTCHA:

1.  [G143: Providing a text alternative that describes the purpose of the CAPTCHA](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G143) **AND** [G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G144)

###### Situation F: If the non-text content should be ignored by assistive technology:

1.  Implementing or marking the non-text content so that it will be ignored by assistive technology using one of the technology-specific techniques listed below

    -   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H67) (HTML)

    -   [C9: Using CSS to include decorative images](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C9) (CSS)

###### **Short** text alternative techniques for use in sufficient techniques above

1.  [H36: Using alt attributes on images used as submit buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H36) (HTML)

2.  [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H2) (HTML)

3.  [H37: Using alt attributes on img elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H37) (HTML)

4.  [H35: Providing text alternatives on applet elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H35) (HTML)

5.  [H53: Using the body of the object element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H53) (HTML)

6.  [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H24) (HTML)

7.  [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H86) (HTML)

8.  [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H30) (HTML)

    Note: See *[Understanding Success Criterion 2.4.4 Link Purpose (In Context)](#navigation-mechanisms-refs)*.

9.  [G196: Using a text alternative on one item within a group of images that describes all items in the group](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G196)

###### **Long** text alternative techniques for use in sufficient techniques above

1.  [H45: Using longdesc](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H45) (HTML)

2.  [H53: Using the body of the object element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H53) (HTML)

##### Advisory Techniques for 1.1.1 - Non-text Content

###### General Techniques for Informative Non-Text Content (Advisory)

-   Identifying informative non-text content (future link)

-   Keeping short descriptions short (future link)

-   Describing images that include text (future link)

-   Providing a longer description of the non-text content where only a descriptive label is required using a technology-specific technique (for an accessibility-supported content technology) for long description listed above (future link)

-   Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)

-   Using server-side scripts to resize images of text (future link)

###### General Techniques for Live Non-Text Content (Advisory)

-   Linking to textual information that provides comparable information (e.g. for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)

###### General techniques to minimize the barrier of CAPTCHAs

-   Providing more than two modalities of CAPTCHAs (future link)

-   Providing access to a human customer service representative who can bypass CAPTCHA (future link)

-   Not requiring CAPTCHAs for authorized users (future link)

###### HTML Techniques (Advisory)

-   [H46: Using noembed with embed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H46) (HTML)

-   Writing for browsers that do not support frame (future link)

-   Providing alternative content for iframe (future link)

-   [H27: Providing text and non-text alternatives for object](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H27) (HTML)

-   Not using long descriptions for iframe (future link)

-   Providing redundant text links for client-side image maps (future link)

###### CSS Techniques (Advisory)

-   [C18: Using CSS margin and padding rules instead of spacer images for layout design](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C18) (CSS)

-   Using CSS background, :before or :after rules for decorative images instead of img elements (future link)

-   Displaying empty table cells (future link)

###### ARIA Techniques (Advisory)

-   Using the ARIA presentation role to indicate elements are purely presentational (future link)

###### Metadata Techniques (Advisory)

-   Using metadata to associate text transcriptions with a video (future link)

-   Using metadata to associate text transcriptions with audio-only content (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that points to an audio description and a text transcript of a video.

    -   EXAMPLE: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

##### Failures for SC 1.1.1 - Non-text Content

-   [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g. filenames or placeholder text)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F30)

-   [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F20)

-   [F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F3)

-   [F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null. (e.g. alt="spacer" or alt="image") for images that should be ignored by assistive technology](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F39)

-   [F38: Failure of Success Criterion 1.1.1 due to omitting the alt-attribute for non-text content used for decorative purposes only in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F38)

-   [F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F71)

-   [F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F72)

-   [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute on img elements, area elements, and input elements of type "image"](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F65)

-   [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long description for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F67)

### Time-based Media<span class="screenreader">:</span>

[Guideline 1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv) Provide alternatives for time-based media<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv.html" class="GLlink">Understanding Guideline 1.2</a>

<a href="Overview.php" id="qr-media-equiv-av-only-alt" class="showhideR" title="Go to top of page">top of page</a>

#### Audio-only and Video-only (Prerecorded)<span class="screenreader">:</span>

[1.2.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-av-only-alt) For <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audio-onlydef" class="termref">audio-only</a> and prerecorded <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#video-onlydef" class="termref">video-only</a> media, the following are true, except when the audio or video is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such: *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-av-only-alt.html" class="HTMlink">Understanding Success Criterion 1.2.1</a>

-   **Prerecorded Audio-only:** An <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.

-   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

##### Sufficient Techniques for 1.2.1 - Audio-only and Video-only (Prerecorded)

###### Situation A: If the content is prerecorded audio-only:

1.  [G158: Providing an alternative for time-based media for the audio](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G158)

###### Situation B: If the content is prerecorded video-only:

1.  [G159: Providing an alternative for time-based media of the video content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G159)

2.  [G166: Providing audio that describes the important video content and describing it as such](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G166)

##### Advisory Techniques for 1.2.1 - Audio-only and Video-only (Prerecorded)

-   Providing a transcript of a live audio only presentation after the fact (future link)

-   Linking to textual information that provides comparable information (e.g. for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)

##### Failures for SC 1.2.1 - Audio-only and Video-only (Prerecorded)

-   [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g. filenames or placeholder text)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F30)

-   [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long description for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F67)

<a href="Overview.php" id="qr-media-equiv-captions" class="showhideR" title="Go to top of page">top of page</a>

#### Captions (Prerecorded)<span class="screenreader">:</span>

[1.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-captions) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#captionsdef" class="termref">Captions</a> are provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> content in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-captions.html" class="HTMlink">Understanding Success Criterion 1.2.2</a>

##### Sufficient Techniques for 1.2.2 - Captions (Prerecorded)

1.  [G93: Providing open (always visible) captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G93)

2.  [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any readily available media format that has a video player that supports closed captioning

3.  [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any of the technology-specific techniques below

    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM11) (SMIL)

    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM12) (SMIL)

##### Advisory Techniques for 1.2.2 - Captions (Prerecorded)

-   Providing a note saying "No sound is used in this clip" for video-only clips (future link)

-   Using SMIL 1.0 to provide captions for all languages for which there are audio tracks (future link)

-   Using SMIL 2.0 to provide captions for all languages for which there are audio tracks (future link)

##### Failures for SC 1.2.2 - Captions (Prerecorded)

-   [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F8)

-   [F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F75)

-   [F74: Failure of SC1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F74)

<a href="Overview.php" id="qr-media-equiv-audio-desc" class="showhideR" title="Go to top of page">top of page</a>

#### Audio Description or Media Alternative<span class="screenreader">:</span>

[1.2.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-audio-desc) An <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> or <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodescdef" class="termref">audio description</a> of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> content is provided for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-audio-desc.html" class="HTMlink">Understanding Success Criterion 1.2.3</a>

##### Sufficient Techniques for 1.2.3 - Audio Description or Media Alternative

1.  [G69: Providing an alternative for time based media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G69)

2.  [G78: Providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G78)

3.  [G173: Providing a version of a movie with audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G173) using one of the following:

    -   [SM6: Providing audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM6) (SMIL)

    -   [SM7: Providing audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM7) (SMIL)

    -   Using any player that supports audio and video

4.  [G8: Providing a movie with extended audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G8) using one of the following:

    -   [SM1: Adding extended audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM1) (SMIL)

    -   [SM2: Adding extended audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM2) (SMIL)

    -   Using any player that supports audio and video

##### Advisory Techniques for 1.2.3 - Audio Description or Media Alternative

-   Providing audio description in multiple languages in SMIL 1.0 (future link)

-   Providing audio description in multiple languages in SMIL 2.0 (future link)

<a href="Overview.php" id="qr-media-equiv-real-time-captions" class="showhideR" title="Go to top of page">top of page</a>

#### Captions (Live)<span class="screenreader">:</span>

[1.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-real-time-captions) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#captionsdef" class="termref">Captions</a> are provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#livedef" class="termref">live</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> content in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-real-time-captions.html" class="HTMlink">Understanding Success Criterion 1.2.4</a>

##### Sufficient Techniques for 1.2.4 - Captions (Live)

1.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G93: Providing open (always visible) captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G93)

2.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using any readily available media format that has a video player that supports closed captioning

3.  [G9: Creating captions for live synchronized media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G9) **AND** [G87: Providing closed captions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G87) using one of the following techniques:

    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM11) (SMIL)

    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM12) (SMIL)

Note: Captions may be generated using real-time text translation service.

<a href="Overview.php" id="qr-media-equiv-audio-desc-only" class="showhideR" title="Go to top of page">top of page</a>

#### Audio Description<span class="screenreader">:</span>

[1.2.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-audio-desc-only) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodescdef" class="termref">Audio description</a> is provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> content in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-audio-desc-only.html" class="HTMlink">Understanding Success Criterion 1.2.5</a>

##### Sufficient Techniques for 1.2.5 - Audio Description

1.  [G78: Providing a second, user-selectable, audio track that includes audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G78)

2.  [G173: Providing a version of a movie with audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G173) using one of the following:

    -   [SM6: Providing audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM6) (SMIL)

    -   [SM7: Providing audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM7) (SMIL)

    -   Using any player that supports audio and video

3.  [G8: Providing a movie with extended audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G8) using one of the following:

    -   [SM1: Adding extended audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM1) (SMIL)

    -   [SM2: Adding extended audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM2) (SMIL)

    -   Using any player that supports audio and video

##### Advisory Techniques for 1.2.5 - Audio Description

-   Providing audio description in multiple languages in SMIL 1.0 (future link)

-   Providing audio description in multiple languages in SMIL 2.0 (future link)

-   Providing audio description for live synchronized media (future link)

<a href="Overview.php" id="qr-media-equiv-sign" class="showhideR" title="Go to top of page">top of page</a>

#### Sign Language<span class="screenreader">:</span>

[1.2.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-sign) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#sign-languageinterpdef" class="termref">Sign language interpretation</a> is provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodef" class="termref">audio</a> content in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-sign.html" class="HTMlink">Understanding Success Criterion 1.2.6</a>

##### Sufficient Techniques for 1.2.6 - Sign Language

1.  [G54: Including a sign language interpreter in the video stream](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G54)

2.  [G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G81) using one of the following techniques

    -   [SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM13) (SMIL)

    -   [SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM14) (SMIL)

##### Advisory Techniques for 1.2.6 - Sign Language

###### Metadata Techniques

-   Using metadata to associate sign language alternatives of a video to enable choice of sign language (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that point to several English sign language translations (ASL, SASL, BSL, Auslan, ISL, NZSL) of a Web page.

<a href="Overview.php" id="qr-media-equiv-extended-ad" class="showhideR" title="Go to top of page">top of page</a>

#### Audio Description (Extended)<span class="screenreader">:</span>

[1.2.7](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-extended-ad) Where pauses in foreground audio are insufficient to allow <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audiodescdef" class="termref">audio descriptions</a> to convey the sense of the video, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#extended-addef" class="termref">extended audio description</a> is provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#videodef" class="termref">video</a> content in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-extended-ad.html" class="HTMlink">Understanding Success Criterion 1.2.7</a>

##### Sufficient Techniques for 1.2.7 - Audio Description (Extended)

1.  [G8: Providing a movie with extended audio descriptions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G8) using one of the following:

    -   [SM1: Adding extended audio description in SMIL 1.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM1) (SMIL)

    -   [SM2: Adding extended audio description in SMIL 2.0](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SM2) (SMIL)

    -   Using any player that supports audio and video

##### Advisory Techniques for 1.2.7 - Audio Description (Extended)

-   Adding extended audio description in multiple languages in SMIL 1.0 (future link)

-   Adding extended audio description in multiple languages in SMIL 2.0 (future link)

<a href="Overview.php" id="qr-media-equiv-text-doc" class="showhideR" title="Go to top of page">top of page</a>

#### Media Alternative<span class="screenreader">:</span>

[1.2.8](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-text-doc) An <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided for all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a> and for all prerecorded <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#video-onlydef" class="termref">video-only</a> media. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-text-doc.html" class="HTMlink">Understanding Success Criterion 1.2.8</a>

##### Sufficient Techniques for 1.2.8 - Media Alternative

###### Situation A: If the content is prerecorded synchronized media:

1.  [G69: Providing an alternative for time based media](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G69) using one of the following techniques

    -   [G58: Placing a link to the alternative for time-based media immediately next to the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G58)

    -   Linking to the alternative for time-based media using one of the following techniques

        -   [H53: Using the body of the object element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H53) (HTML)

###### Situation B: If the content is prerecorded video-only:

1.  [G159: Providing an alternative for time-based media of the video content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G159)

##### Advisory Techniques for 1.2.8 - Media Alternative

-   [H46: Using noembed with embed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H46) (HTML)

-   Providing a corrected script (future link)

-   Adding detail to audio description (future link)

##### Failures for SC 1.2.8 - Media Alternative

-   [F74: Failure of SC1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F74)

<a href="Overview.php" id="qr-media-equiv-live-audio-only" class="showhideR" title="Go to top of page">top of page</a>

#### Live Audio-only<span class="screenreader">:</span>

[1.2.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#media-equiv-live-audio-only) An <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> that presents equivalent information for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#livedef" class="termref">live</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audio-onlydef" class="termref">audio-only</a> content is provided. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/media-equiv-live-audio-only.html" class="HTMlink">Understanding Success Criterion 1.2.9</a>

##### Sufficient Techniques for 1.2.9 - Live Audio-only

1.  [G151: Providing a link to a text transcript of a prepared statement or script if the script is followed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G151)

2.  [G150: Providing text based alternatives for live audio-only content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G150)

3.  [G157: Incorporating a live audio captioning service into a Web page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G157)

##### Advisory Techniques for 1.2.9 - Live Audio-only

-   Using metadata to associate text transcriptions with audio-only content (future link)

    Example: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

### Adaptable<span class="screenreader">:</span>

[Guideline 1.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation) Create content that can be presented in different ways (for example simpler layout ) without losing information or structure<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/content-structure-separation.html" class="GLlink">Understanding Guideline 1.3</a>

<a href="Overview.php" id="qr-content-structure-separation-programmatic" class="showhideR" title="Go to top of page">top of page</a>

#### Info and Relationships<span class="screenreader">:</span>

[1.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation-programmatic) Information, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#structuredef" class="termref">structure</a>, and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#relationshipsdef" class="termref">relationships</a> conveyed through <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#presentationdef" class="termref">presentation</a> can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a> or are available in text. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/content-structure-separation-programmatic.html" class="HTMlink">Understanding Success Criterion 1.3.1</a>

##### Sufficient Techniques for 1.3.1 - Info and Relationships

###### Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

1.  [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G115) **AND** [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H49) (HTML)

2.  [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G117)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

4.  Making information and relationships conveyed through presentation programmatically determinable using the following techniques:

    -   [G138: Using semantic markup whenever color cues are used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G138)

    -   [H51: Using table markup to present tabular information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H51) (HTML)

    -   [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H39) (HTML)

    -   [H73: Using the summary attribute of the table element to give an overview of data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H73) (HTML)

    -   [H63: Using the scope attribute to associate header cells and data cells in data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H63) (HTML)

    -   [H43: Using id and headers attributes to associate data cells with header cells in data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H43) (HTML)

    -   [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

    -   [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H71) (HTML)

    -   [H85: Using OPTGROUP to group OPTION elements inside a SELECT](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H85) (HTML)

    -   [H48: Using ol, ul and dl for lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H48) (HTML)

    -   [H42: Using h1-h6 to identify headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H42) (HTML)

    -   [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR21) (Scripting)

###### Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

1.  [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G117)

2.  Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:

    -   [T1: Using standard text formatting conventions for paragraphs](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T1) (TXT)

    -   [T2: Using standard text formatting conventions for lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T2) (TXT)

    -   [T3: Using standard text formatting conventions for headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T3) (TXT)

##### Advisory Techniques for 1.3.1 - Info and Relationships

-   [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

-   Using CSS rather than tables for page layout (future link)

-   [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G162)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

-   [ARIA4: Using Accessible Rich Internet Applications to programmatically identify form fields as required](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA4) (ARIA)

-   Providing labels for all form controls that do not have implicit labels (future link)

-   [G141: Organizing a page using headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G141)

##### Failures for SC 1.3.1 - Info and Relationships

-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F2)

-   [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F17)

-   [F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F33)

-   [F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F34)

-   [F42: Failure of Success Criterion 1.3.1 and 2.1.1 due to using scripting events to emulate links in a way that is not programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F42)

-   [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F43)

-   [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F46)

-   [F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F48)

-   [F62: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine specific relationships in XML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F62)

-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F2)

-   [F68: Failure of Success Criterion 1.3.1 and 4.1.2 due to the association of label and user interface controls not being programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F68)

-   [F87: Failure of 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F87)

<a href="Overview.php" id="qr-content-structure-separation-sequence" class="showhideR" title="Go to top of page">top of page</a>

#### Meaningful Sequence<span class="screenreader">:</span>

[1.3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation-sequence) When the sequence in which content is presented affects its meaning, a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#correct-reading-sequencedef" class="termref">correct reading sequence</a> can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/content-structure-separation-sequence.html" class="HTMlink">Understanding Success Criterion 1.3.2</a>

##### Sufficient Techniques for 1.3.2 - Meaningful Sequence

1.  [G57: Ordering the content in a meaningful sequence](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G57) for all the content in the Web page

2.  Marking sequences in the content as meaningful using one of the following techniques **AND** [G57: Ordering the content in a meaningful sequence](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G57) for those sequences

    -   [H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H34) (HTML)

    -   [H56: Using the dir attribute on an inline element to resolve problems with nested directional runs](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H56) (HTML)

    -   [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

    -   [C8: Using CSS letter-spacing to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C8) (CSS)

3.  [C27: Making the DOM order match the visual order](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C27) (CSS)

##### Advisory Techniques for 1.3.2 - Meaningful Sequence

-   Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left (future link)

-   Using appropriate justification for languages that are written right-to-left (future link)

-   Providing a link to linearized rendering (future link)

-   Providing a style switcher between style sheets that affect presentation order (future link)

##### Failures for SC 1.3.2 - Meaningful Sequence

-   [F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F34)

-   [F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F33)

-   [F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F32)

-   [F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F49)

-   [F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F1)

<a href="Overview.php" id="qr-content-structure-separation-understanding" class="showhideR" title="Go to top of page">top of page</a>

#### Sensory Characteristics<span class="screenreader">:</span>

[1.3.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation-understanding) Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/content-structure-separation-understanding.html" class="HTMlink">Understanding Success Criterion 1.3.3</a>

Note: For requirements related to color, refer to *[Guideline 1.4](#visual-audio-contrast)*.

##### Sufficient Techniques for 1.3.3 - Sensory Characteristics

1.  [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G96)

##### Advisory Techniques for 1.3.3 - Sensory Characteristics

-   Using an image with a text alternative for graphical symbols instead of a Unicode font glyph with the desired graphical appearance but different meaning (future link)

##### Failures for SC 1.3.3 - Sensory Characteristics

-   [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F14)

-   [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F26)

### Distinguishable<span class="screenreader">:</span>

[Guideline 1.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast) Make it easier for users to see and hear content including separating foreground from background <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast.html" class="GLlink">Understanding Guideline 1.4</a>

#### Advisory Techniques for Guideline 1.4

-   Using readable fonts (future link)

-   Making sure any text in images of text is at least 14 points and has good contrast (future link)

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

<a href="Overview.php" id="qr-visual-audio-contrast-without-color" class="showhideR" title="Go to top of page">top of page</a>

#### Use of Color<span class="screenreader">:</span>

[1.4.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-without-color) Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-without-color.html" class="HTMlink">Understanding Success Criterion 1.4.1</a>

Note: This success criterion addresses color perception specifically. Other forms of perception are covered in *[Guideline 1.3](#content-structure-separation)* including programmatic access to color and other visual presentation coding.

##### Sufficient Techniques for 1.4.1 - Use of Color

###### Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:

1.  [G14: Ensuring that information conveyed by color differences is also available in text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G14)

2.  [G122: Including a text cue whenever color cues are used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G122)

3.  [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G182)

4.  [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G183)

###### Situation B: If color is used within an image to convey information:

1.  [G111: Using color and pattern](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G111)

2.  [G14: Ensuring that information conveyed by color differences is also available in text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G14)

##### Advisory Techniques for 1.4.1 - Use of Color

-   Conveying information redundantly using color (future link)

-   [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C15) (CSS)

##### Failures for SC 1.4.1 - Use of Color

-   [F13: Failure of Success Criterion 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F13)

-   [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F73)

-   [F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F81)

<a href="Overview.php" id="qr-visual-audio-contrast-dis-audio" class="showhideR" title="Go to top of page">top of page</a>

#### Audio Control<span class="screenreader">:</span>

[1.4.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-dis-audio) If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-dis-audio.html" class="HTMlink">Understanding Success Criterion 1.4.2</a>

Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

##### Sufficient Techniques for 1.4.2 - Audio Control

1.  [G60: Playing a sound that turns off automatically within three seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G60)

2.  [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G170)

3.  [G171: Playing sounds only on user request](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G171)

##### Advisory Techniques for 1.4.2 - Audio Control

-   Providing a site-wide preference to turn off audio in addition to providing a control near the top of the Web page that turns off sounds that play automatically (future link)

##### Failures for SC 1.4.2 - Audio Control

-   [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F23)

<a href="Overview.php" id="qr-visual-audio-contrast-contrast" class="showhideR" title="Go to top of page">top of page</a>

#### Contrast (Minimum)<span class="screenreader">:</span>

[1.4.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-contrast) The visual presentation of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">images of text</a> has a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contrast-ratiodef" class="termref">contrast ratio</a> of at least 5:1, except for the following: *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-contrast.html" class="HTMlink">Understanding Success Criterion 1.4.3</a>

-   **Large Text:** <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#larger-scaledef" class="termref">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;

-   **Incidental:** Text or images of text that are part of an inactive <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-interface-componentdef" class="termref">user interface component</a>, that are <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#puredecdef" class="termref">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

##### Sufficient Techniques for 1.4.3 - Contrast (Minimum)

###### Situation A: text is less than 18 point if not bold and less than 14 point if bold

1.  [G18: Ensuring that a contrast ratio of at least 5:1 exists between text (and images of text) and background behind the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G18)

2.  [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G148)

3.  [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G174)

###### Situation B: text is as least 18 point if not bold and at least 14 point if bold

1.  [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G145)

2.  [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G148)

3.  [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G174)

##### Advisory Techniques for 1.4.3 - Contrast (Minimum)

-   [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G156)

-   Using a higher contrast value for text that is over a patterned background (future link)

-   Using a light pastel background rather than a white background behind black text (future link)

-   Using Unicode text and style sheets instead of images of text (future link)

-   Using a higher contrast values for lines in diagrams (future link)

-   Using greater contrast level for red-black text/background combinations (future link)

-   Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark

-   Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast (future link)

-   Making icons using simple line drawings that meet the contrast provisions for text (future link)

-   Providing sufficient color contrast in graphs and charts (future link)

-   Using a 3:1 contrast ratio or higher as the default presentation (future link)

-   Providing sufficient color contrast for empty text fields (future link)

##### Failures for SC 1.4.3 - Contrast (Minimum)

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F24)

-   [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F83)

<a href="Overview.php" id="qr-visual-audio-contrast-scale" class="showhideR" title="Go to top of page">top of page</a>

#### Resize text<span class="screenreader">:</span>

[1.4.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-scale) Except for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#captionsdef" class="termref">captions</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">images of text</a>, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> can be resized without <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technology</a> up to 200 percent without loss of content or functionality. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-scale.html" class="HTMlink">Understanding Success Criterion 1.4.4</a>

##### Sufficient Techniques for 1.4.4 - Resize text

1.  [G142: Using a technology that has commonly-available user agents that support zoom](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G142)

2.  Ensuring that text containers resize when the text resizes **AND** using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   [C28: Specifying the size of text containers using em units](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C28) (CSS)

    -   Techniques for relative measurements

        -   [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS)

        -   [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS)

        -   [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS)

    -   Techniques for text container resizing

        -   [SCR34: Calculating size and position in a way that scales with text size](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR34) (Scripting)

        -   [G146: Using liquid layout](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G146)

3.  [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G178)

4.  [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not resize](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G179)

##### Advisory Techniques for 1.4.4 - Resize text

-   Providing large fonts by default (future link)

-   Using page-percent for container sizes (future link)

-   Avoiding scaling font sizes smaller than the user-agent default (future link)

    Note: The author won't actually know the font size, but should avoid percentage scaling that results in less than 100%

-   Avoiding justified text (future link)

-   Providing sufficient inter-line and inter-column spacing (future link)

-   Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)

-   Avoiding the use of text in raster images (future link)

-   Using server-side scripts to resize images of text (future link)

-   [C17: Scaling form elements which contain text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C17) (CSS)

-   Ensuring that text in raster images is at least 18pt (future link)

-   Scaling text down to 50% (future link)

-   [C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C20) (CSS)

-   [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

-   Providing a mechanism to allow captions to be enlarged (future link)

##### Failures for SC 1.4.4 - Resize text

-   [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F69)

-   [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F80)

<a href="Overview.php" id="qr-visual-audio-contrast-text-presentation" class="showhideR" title="Go to top of page">top of page</a>

#### Images of Text<span class="screenreader">:</span>

[1.4.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-text-presentation) If the technologies being used can achieve the visual presentation, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> is used to convey information rather than <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">images of text</a> except for the following: *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-text-presentation.html" class="HTMlink">Understanding Success Criterion 1.4.5</a>

-   **Customizable:** The image of text can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visually-customizeddef" class="termref">visually customized</a> to the user's requirements;

-   **Essential:** A particular presentation of text is <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#essentialdef" class="termref">essential</a> to the information being conveyed.

Note: Logotypes (text that is part of a logo or brand name) are considered essential.

##### Sufficient Techniques for 1.4.5 - Images of Text

1.  [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

2.  [C30: Using CSS to replace text with images of text and providing user interface controls to switch](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C30) (CSS)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

##### Advisory Techniques for 1.4.5 - Images of Text

###### General techniques for non-text content

1.  Identifying informative non-text content (future link)

###### CSS Techniques

1.  [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS)

2.  [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS)

3.  [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS)

4.  [C8: Using CSS letter-spacing to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C8) (CSS)

5.  [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

6.  Avoid applying text styling to text characters within a word (future link)

<a href="Overview.php" id="qr-visual-audio-contrast7" class="showhideR" title="Go to top of page">top of page</a>

#### Contrast (Enhanced)<span class="screenreader">:</span>

[1.4.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast7) The visual presentation of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">images of text</a> has a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contrast-ratiodef" class="termref">contrast ratio</a> of at least 7:1, except for the following: *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast7.html" class="HTMlink">Understanding Success Criterion 1.4.6</a>

-   **Large Text:** <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#larger-scaledef" class="termref">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 5:1;

-   **Incidental:** Text or images of text that are part of an inactive <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-interface-componentdef" class="termref">user interface component</a>, that are <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#puredecdef" class="termref">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

##### Sufficient Techniques for 1.4.6 - Contrast (Enhanced)

###### Situation A: text is less than 18 point if not bold and less than 14 point if bold

1.  [G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G17)

2.  [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G148)

3.  [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G174)

###### Situation B: text is as least 18 point if not bold and at least 14 point if bold

1.  [G18: Ensuring that a contrast ratio of at least 5:1 exists between text (and images of text) and background behind the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G18)

2.  [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G148)

3.  [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G174)

##### Advisory Techniques for 1.4.6 - Contrast (Enhanced)

-   [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G156)

-   Using a higher contrast value for text that is over a patterned background (future link)

-   Using Unicode text and style sheets instead of images of text (future link)

-   Using a light pastel background rather than a white background behind black text (future link)

-   Using a higher contrast values for lines in diagrams (future link)

-   Using greater contrast level for red-black text/background combinations

-   Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark

-   Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast (future link)

-   Making icons using simple line drawings that meet the contrast provisions for text (future link)

-   Providing sufficient color contrast in graphs and charts (future link)

-   Using a 3:1 contrast ratio or higher as the default presentation (future link)

-   Providing sufficient color contrast for empty text fields (future link)

##### Failures for SC 1.4.6 - Contrast (Enhanced)

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F24)

-   [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F83)

<a href="Overview.php" id="qr-visual-audio-contrast-noaudio" class="showhideR" title="Go to top of page">top of page</a>

#### Low or No Background Audio<span class="screenreader">:</span>

[1.4.7](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-noaudio) For <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#prerecordeddef" class="termref">prerecorded</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#audio-onlydef" class="termref">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#CAPTCHAdef" class="termref">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-noaudio.html" class="HTMlink">Understanding Success Criterion 1.4.7</a>

-   **No Background:** The audio does not contain background sounds.

-   **Turn Off:** The background sounds can be turned off.

-   **20 dB:** The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.

    Note: Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.

##### Sufficient Techniques for 1.4.7 - Low or No Background Audio

1.  [G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G56)

##### Advisory Techniques for 1.4.7 - Low or No Background Audio

-   Providing a way for users to adjust auditory levels of foreground and background sound independently (future link)

<a href="Overview.php" id="qr-visual-audio-contrast-visual-presentation" class="showhideR" title="Go to top of page">top of page</a>

#### Visual Presentation<span class="screenreader">:</span>

[1.4.8](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-visual-presentation) For the visual presentation of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#blockstextdef" class="termref">blocks of text</a>, a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available to achieve the following: *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-visual-presentation.html" class="HTMlink">Understanding Success Criterion 1.4.8</a>

1.  foreground and background colors can be selected by the user

2.  width is no more than 80 characters or glyphs (40 if CJK)

3.  text is not justified (aligned to both the left and the right margins)

4.  line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing

5.  text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#fullscreenwindowdef" class="termref">on a full-screen window</a>

##### Sufficient Techniques for 1.4.8 - Visual Presentation

**Instructions:** Since this is a multi-part success criterion, you must satisfy one of the numbered items for each of the requirements below.

###### First Requirement: Techniques to ensure foreground and background colors can be selected by the user

1.  [C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C23) (CSS) OR

2.  [C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C25) (CSS) OR

3.  [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G156) OR

4.  [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G148) OR

5.  [G175: Providing a multi color selection tool on the page for foreground and background colors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G175)

###### Second Requirement: Techniques to ensure width is no more than 80 characters or glyphs (40 if CJK)

1.  [H87: Not interfering with the user agent's reflow of text as the viewing window is narrowed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H87) (HTML) OR

2.  [C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C20) (CSS)

###### Third Requirement: Techniques to ensure text is not justified (aligned to both the left and the right margins)

1.  [C19: Specifying alignment either to the left OR right in CSS](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C19) (CSS) OR

2.  [G172: Providing a mechanism to remove full justification of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G172) OR

3.  [G169: Aligning text on only one side](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G169)

###### Fourth Requirement: Techniques to ensure line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing

1.  [G188: Providing a button on the page to increase line spaces and paragraph spaces](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G188) OR

2.  [C21: Specifying line spacing in CSS](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C21) (CSS)

###### Fifth Requirement: Techniques to ensure text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window

1.  Not interfering with the user agent's reflow of text as the viewing window is narrowed (General, Future Link) OR

2.  [G146: Using liquid layout](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G146) *AND* using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS) OR

    -   [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS) OR

    -   [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS) OR

    -   [C24: Using percentage values in CSS for container sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C24) (CSS) OR

    -   [SCR34: Calculating size and position in a way that scales with text size](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR34) (Scripting) OR

3.  [C26: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C26) (CSS)

##### Advisory Techniques for 1.4.8 - Visual Presentation

-   Using a hover effect to highlight a paragraph, list items, or table cells (HTML, CSS) (future link)

-   Presenting text in sans serif font or providing a mechanism to achieve this (CSS) (future link)

-   Using vertical (bulleted or numbered) lists rather than inline lists (future link)

-   Using upper and lower case according to the spelling conventions of the text language (future link)

-   Providing large fonts by default (future link)

-   Avoiding the use of text in raster images (future link)

-   Avoiding scaling font sizes smaller than the user-agent default (future link)

-   Providing sufficient inter-column spacing (future link)

-   Avoiding centrally aligned text (future link)

-   Avoiding chunks of italic text (future link)

-   Avoiding overuse of different styles on individual pages and in sites (future link)

-   Making links visually distinct (future link)

-   Providing expandable bullets (future link)

-   Show/hide bullet points (future link)

-   Putting an em-space or two spaces after sentences (future link)

##### Failures for SC 1.4.8 - Visual Presentation

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F24)

-   [F88: Failure of SC 1.4.8 due to using text that is justified (aligned to both the left and the right margins)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F88)

<a href="Overview.php" id="qr-visual-audio-contrast-text-images" class="showhideR" title="Go to top of page">top of page</a>

#### Images of Text (No Exception)<span class="screenreader">:</span>

[1.4.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-text-images) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#images-of-textdef" class="termref">Images of text</a> are only used for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#puredecdef" class="termref">pure decoration</a> or where a particular presentation of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> is <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#essentialdef" class="termref">essential</a> to the information being conveyed. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/visual-audio-contrast-text-images.html" class="HTMlink">Understanding Success Criterion 1.4.9</a>

Note: Logotypes (text that is part of a logo or brand name) are considered essential.

##### Sufficient Techniques for 1.4.9 - Images of Text (No Exception)

1.  [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

2.  [C30: Using CSS to replace text with images of text and providing user interface controls to switch](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C30) (CSS)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

##### Advisory Techniques for 1.4.9 - Images of Text (No Exception)

###### General Techniques for Non-Decorative Content

-   Using server-side scripts to resize images of text (future link)

###### CSS Techniques

-   [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS)

-   [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS)

-   [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS)

-   [C8: Using CSS letter-spacing to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C8) (CSS)

-   [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

-   Avoid applying text styling to text characters within a word (future link)

### Keyboard Accessible<span class="screenreader">:</span>

[Guideline 2.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation) Make all functionality available from a keyboard <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/keyboard-operation.html" class="GLlink">Understanding Guideline 2.1</a>

<a href="Overview.php" id="qr-keyboard-operation-keyboard-operable" class="showhideR" title="Go to top of page">top of page</a>

#### Keyboard<span class="screenreader">:</span>

[2.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation-keyboard-operable) All <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#functiondef" class="termref">functionality</a> of the content is operable through a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/keyboard-operation-keyboard-operable.html" class="HTMlink">Understanding Success Criterion 2.1.1</a>

Note 1: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path dependent input but the underlying function (text input) does not.

Note 2: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

##### Sufficient Techniques for 2.1.1 - Keyboard

1.  Ensuring keyboard control by using one of the following techniques.

    -   [H91: Using HTML form controls and links](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H91) (HTML)

2.  [G90: Providing keyboard-triggered event handlers](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G90) using one of the following techniques:

    -   [SCR20: Using both keyboard and other device-specific functions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR20) (Scripting)

    -   [SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR35) (Scripting)

    -   [SCR2: Using redundant keyboard and mouse event handlers](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR2) (Scripting)

##### Advisory Techniques for 2.1.1 - Keyboard

-   Using XHTML role, state, and value attributes if repurposing static elements as interactive user interface components (future link) AND [SCR29: Adding keyboard-accessible actions to static HTML elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR29) (Scripting)

-   Providing keyboard shortcuts to important links and form controls (future link)

-   Using unique letter combinations to begin each item of a list (future link)

-   Choosing the most abstract event handler (future link) (Scripting)

-   Using the onactivate event (future link) (Scripting)

-   Avoiding use of common user-agent keyboard commands for other purposes (future link)

##### Failures for SC 2.1.1 - Keyboard

-   [F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F54)

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

-   [F42: Failure of Success Criterion 1.3.1 and 2.1.1 due to using scripting events to emulate links in a way that is not programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F42)

<a href="Overview.php" id="qr-keyboard-operation-trapping" class="showhideR" title="Go to top of page">top of page</a>

#### No Keyboard Trap<span class="screenreader">:</span>

[2.1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation-trapping) If keyboard focus can be moved to a component of the page using a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keybrd-interfacedef" class="termref">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/keyboard-operation-trapping.html" class="HTMlink">Understanding Success Criterion 2.1.2</a>

Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

##### Sufficient Techniques for 2.1.2 - No Keyboard Trap

1.  [G21: Ensuring that users are not trapped in content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G21)

##### Failures for SC 2.1.2 - No Keyboard Trap

-   [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F10)

<a href="Overview.php" id="qr-keyboard-operation-all-funcs" class="showhideR" title="Go to top of page">top of page</a>

#### Keyboard (No Exception)<span class="screenreader">:</span>

[2.1.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation-all-funcs) All <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#functiondef" class="termref">functionality</a> of the content is operable through a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/keyboard-operation-all-funcs.html" class="HTMlink">Understanding Success Criterion 2.1.3</a>

##### Sufficient Techniques for 2.1.3 - Keyboard (No Exception)

1.  No additional techniques exist for this Success Criterion. Follow [techniques for Success Criterion 2.1.1](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/keyboard-operation-keyboard-operable.html#keyboard-operation-keyboard-operable-techniques-head) . If that is not possible because there is a requirement for analog, time-dependent input, then it is not possible to meet this Level AAA Success Criterion.

### Enough Time<span class="screenreader">:</span>

[Guideline 2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits) Provide users enough time to read and use content <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits.html" class="GLlink">Understanding Guideline 2.2</a>

<a href="Overview.php" id="qr-time-limits-required-behaviors" class="showhideR" title="Go to top of page">top of page</a>

#### Timing Adjustable<span class="screenreader">:</span>

[2.2.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-required-behaviors) For each time limit that is set by the content, at least one of the following is true: *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-required-behaviors.html" class="HTMlink">Understanding Success Criterion 2.2.1</a>

-   **Turn off:** The user is allowed to turn off the time limit before encountering it; or

-   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or

-   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or

-   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or

-   **Essential Exception:** The time limit is <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#essentialdef" class="termref">essential</a> and extending it would invalidate the activity; or

-   **20 Hour Exception:** The time limit is longer than 20 hours.

Note: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](#consistent-behavior-receive-focus) which puts limits on changes of content or context as a result of user action.

##### Sufficient Techniques for 2.2.1 - Timing Adjustable

###### Situation A: If there are session time limits:

1.  [G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G133)

2.  [G198: Providing a way for the user to turn the time limit off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G198)

###### Situation B: If a time limit is controlled by a script on the page:

1.  [G198: Providing a way for the user to turn the time limit off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G198)

2.  [G180: Providing the user with a means to set the time limit to 10 times the default time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G180)

3.  [SCR16: Providing a script that warns the user a time limit is about to expire](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR16) (Scripting) **AND** [SCR1: Allowing the user to extend the default time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR1) (Scripting)

###### Situation C: If there are time limits on reading:

1.  [G4: Allowing the content to be paused and restarted from where it was paused](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G4)

2.  [G198: Providing a way for the user to turn the time limit off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G198)

3.  [SCR33: Using script to scroll content, and providing a mechanism to pause it](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR33) (Scripting)

4.  [SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR36) (Scripting)

##### Advisory Techniques for 2.2.1 - Timing Adjustable

-   Using a script to poll the server and notify a user if a time limit is present (future link) (Scripting)

##### Failures for SC 2.2.1 - Timing Adjustable

-   [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F40)

-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F41)

-   [F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F58)

-   [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F16)

<a href="Overview.php" id="qr-time-limits-pause" class="showhideR" title="Go to top of page">top of page</a>

#### Pause, Stop, Hide<span class="screenreader">:</span>

[2.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-pause) For moving, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#blinksdef" class="termref">blinking</a>, scrolling, or auto-updating information, all of the following are true: *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-pause.html" class="HTMlink">Understanding Success Criterion 2.2.2</a>

-   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#pauseddef" class="termref">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#essentialdef" class="termref">essential</a>; and

-   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

Note 1: For requirements related to flickering or flashing content, refer to *[Guideline 2.3](#seizure)*.

Note 2: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

Note 3: Content that is updated periodically by software, or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.

Note 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users, and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

##### Sufficient Techniques for 2.2.2 - Pause, Stop, Hide

1.  [G4: Allowing the content to be paused and restarted from where it was paused](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G4)

2.  [SCR33: Using script to scroll content, and providing a mechanism to pause it](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR33) (Scripting)

3.  [G11: Creating content that blinks for less than 5 seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G11)

4.  [G187: Using a technology to include blinking content that can be turned off via the user agent](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G187)

5.  [G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G152)

6.  [SCR22: Using scripts to control blinking and stop it in five seconds or less](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR22) (Scripting)

7.  [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G186)

8.  [G191: Providing a link, button, or other mechanism that reloads the page without blinking any content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G191)

##### Advisory Techniques for 2.2.2 - Pause, Stop, Hide

-   Providing a mechanism to stop all content that blinks within a Web page (future link)

-   Providing the user with a means to stop moving content even if it stops automatically within 5 seconds (future link)

##### Failures for SC 2.2.2 - Pause, Stop, Hide

-   [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F16)

-   [F47: Failure of Success Criterion 2.2.2 due to using the blink element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F47)

-   [F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F4)

-   [F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F50)

-   [F7: Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, that has blinking content without a mechanism to pause the content that blinks for more than five seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F7)

<a href="Overview.php" id="qr-time-limits-no-exceptions" class="showhideR" title="Go to top of page">top of page</a>

#### No Timing<span class="screenreader">:</span>

[2.2.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-no-exceptions) Timing is not an <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#essentialdef" class="termref">essential</a> part of the event or activity presented by the content, except for non-interactive <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#synchronizedmediadef" class="termref">synchronized media</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#real-time-eventsdef" class="termref">real-time events</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-no-exceptions.html" class="HTMlink">Understanding Success Criterion 2.2.3</a>

##### Sufficient Techniques for 2.2.3 - No Timing

1.  [G5: Allowing users to complete an activity without any time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G5)

<a href="Overview.php" id="qr-time-limits-postponed" class="showhideR" title="Go to top of page">top of page</a>

#### Interruptions<span class="screenreader">:</span>

[2.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-postponed) Interruptions can be postponed or suppressed by the user, except interruptions involving an <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#emergencydef" class="termref">emergency</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-postponed.html" class="HTMlink">Understanding Success Criterion 2.2.4</a>

##### Sufficient Techniques for 2.2.4 - Interruptions

1.  [G75: Providing a mechanism to postpone any updating of content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G75)

2.  [G76: Providing a mechanism to request an update of the content instead of updating automatically](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G76)

3.  [SCR14: Using scripts to make nonessential alerts optional](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR14) (Scripting)

##### Failures for SC 2.2.4 - Interruptions

-   [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F40)

-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F41)

<a href="Overview.php" id="qr-time-limits-server-timeout" class="showhideR" title="Go to top of page">top of page</a>

#### Re-authenticating<span class="screenreader">:</span>

[2.2.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-server-timeout) When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-server-timeout.html" class="HTMlink">Understanding Success Criterion 2.2.5</a>

##### Sufficient Techniques for 2.2.5 - Re-authenticating

1.  Providing options to continue without loss of data using one of the following techniques:

    -   [G105: Saving data so that it can be used after a user re-authenticates](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G105)

    -   [G181: Encoding user data as hidden or encrypted data in a re-authorization page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G181)

Note: Refer to [Techniques for Addressing Success Criterion 2.2.1](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/time-limits-required-behaviors.html#time-limits-required-behaviors-techniques-head) for techniques related to providing notifications about time limits.

##### Failures for SC 2.2.5 - Re-authenticating

-   [F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism for saving user's input and re-establishing that information upon re-authentication](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F12)

### Seizures<span class="screenreader">:</span>

[Guideline 2.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure) Do not design content in a way that is known to cause seizures<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/seizure.html" class="GLlink">Understanding Guideline 2.3</a>

#### Advisory Techniques for Guideline 2.3

-   Ensuring that content does not violate spatial pattern thresholds (future link)

<a href="Overview.php" id="qr-seizure-does-not-violate" class="showhideR" title="Go to top of page">top of page</a>

#### Three Flashes or Below Threshold<span class="screenreader">:</span>

[2.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure-does-not-violate) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#flash-def" class="termref">flash</a> is below the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#general-thresholddef" class="termref">general flash and red flash thresholds</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/seizure-does-not-violate.html" class="HTMlink">Understanding Success Criterion 2.3.1</a>

Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

##### Sufficient Techniques for 2.3.1 - Three Flashes or Below Threshold

1.  [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G19)

2.  [G176: Keeping the flashing area small enough](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G176)

3.  [G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G15)

##### Advisory Techniques for 2.3.1 - Three Flashes or Below Threshold

-   Reducing contrast for any flashing content (future link)

-   Avoiding fully saturated reds for any flashing content (future link)

-   Reducing the number of flashes even if they do not violate thresholds (future link)

-   Providing a mechanism to suppress any flashing content before it begins (future link)

-   Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)

-   Freezing the image momentarily if 3 flashes within one second are detected (future link)

-   Dropping the contrast ratio if 3 flashes within one second are detected (future link)

<a href="Overview.php" id="qr-seizure-three-times" class="showhideR" title="Go to top of page">top of page</a>

#### Three Flashes<span class="screenreader">:</span>

[2.3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#seizure-three-times) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> do not contain anything that <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#flash-def" class="termref">flashes</a> more than three times in any one second period. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/seizure-three-times.html" class="HTMlink">Understanding Success Criterion 2.3.2</a>

##### Sufficient Techniques for 2.3.2 - Three Flashes

1.  [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G19)

##### Advisory Techniques for 2.3.2 - Three Flashes

-   Reducing contrast for any flashing content (future link)

-   Avoiding fully saturated reds for any flashing content (future link)

-   Reducing the number of flashes even if they don't violate thresholds (future link)

-   Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)

-   Freezing the image momentarily if 3 flashes within one second are detected (future link)

-   Dropping the contrast ratio if 3 flashes within one second are detected (future link)

### Navigable<span class="screenreader">:</span>

[Guideline 2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms) Provide ways to help users navigate, find content and determine where they are <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms.html" class="GLlink">Understanding Guideline 2.4</a>

#### Advisory Techniques for Guideline 2.4

-   Limiting the number of links per page (future link)

-   Providing mechanisms to navigate to different sections of the content of a Web page (future link)

-   Making links visually distinct (future link)

<a href="Overview.php" id="qr-navigation-mechanisms-skip" class="showhideR" title="Go to top of page">top of page</a>

#### Bypass Blocks<span class="screenreader">:</span>

[2.4.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-skip) A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-skip.html" class="HTMlink">Understanding Success Criterion 2.4.1</a>

##### Sufficient Techniques for 2.4.1 - Bypass Blocks

1.  Creating links to skip blocks of repeated material using one of the following techniques:

    -   [G1: Adding a link at the top of each page that goes directly to the main content area](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G1)

    -   [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G123)

    -   [G124: Adding links at the top of the page to each area of the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G124)

2.  Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques:

    -   [H69: Providing heading elements at the beginning of each section of content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H69) (HTML)

    -   [H50: Using structural elements to group links](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H50) (HTML)

    -   [H70: Using frame elements to group blocks of repeated material](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H70) (HTML) **AND** [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H64) (HTML)

    -   [SCR28: Using an expandable and collapsible menu to bypass block of content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR28) (Scripting)

##### Advisory Techniques for 2.4.1 - Bypass Blocks

-   Providing keyboard access to important links and form controls (future link)

-   Providing skip links to enhance page navigation (future link)

-   Providing access keys (future link)

-   Using accessibility supported technologies which allow structured navigation by user agents and assistive technologies (future link)

-   [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

<a href="Overview.php" id="qr-navigation-mechanisms-title" class="showhideR" title="Go to top of page">top of page</a>

#### Page Titled<span class="screenreader">:</span>

[2.4.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-title) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> have titles that describe topic or purpose. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-title.html" class="HTMlink">Understanding Success Criterion 2.4.2</a>

##### Sufficient Techniques for 2.4.2 - Page Titled

1.  [G88: Providing descriptive titles for Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G88) **AND** associating a title with a Web page using one of the following techniques:

    -   [H25: Providing a title using the title element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H25) (HTML)

##### Advisory Techniques for 2.4.2 - Page Titled

-   [G127: Identifying a Web page's relationship to a larger collection of Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G127) using a technology-specific technique

-   Identifying the subject of the Web page (future link)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

-   Providing a meaningful name for identifying frames (future link)

-   Using unique titles for Web pages (future link)

-   Providing a descriptive top-level page heading (future link)

##### Failures for SC 2.4.2 - Page Titled

-   [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F25)

<a href="Overview.php" id="qr-navigation-mechanisms-focus-order" class="showhideR" title="Go to top of page">top of page</a>

#### Focus Order<span class="screenreader">:</span>

[2.4.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-focus-order) If a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#nav-seqdef" class="termref">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-focus-order.html" class="HTMlink">Understanding Success Criterion 2.4.3</a>

##### Sufficient Techniques for 2.4.3 - Focus Order

1.  [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G59)

2.  Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques:

    -   [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H4) (HTML)

    -   [C27: Making the DOM order match the visual order](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C27) (CSS)

3.  Changing a Web page dynamically using one of the following techniques:

    -   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR26) (Scripting)

    -   [SCR37: Creating Custom Dialogs in a Device Independent Way](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR37) (Scripting)

    -   [SCR27: Reordering page sections using the Document Object Model](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR27) (Scripting)

##### Advisory Techniques for 2.4.3 - Focus Order

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

-   Creating alternative presentation orders (future link)

##### Failures for SC 2.4.3 - Focus Order

-   [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F44)

-   [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F85)

<a href="Overview.php" id="qr-navigation-mechanisms-refs" class="showhideR" title="Go to top of page">top of page</a>

#### Link Purpose (In Context)<span class="screenreader">:</span>

[2.4.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-refs) The <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#linkpurposedef" class="termref">purpose of each link</a> can be determined from the link text alone, or from the link text together with its <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#pdlinkcontextdef" class="termref">programmatically determined link context</a>, except where the purpose of the link would be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-refs.html" class="HTMlink">Understanding Success Criterion 2.4.4</a>

##### Sufficient Techniques for 2.4.4 - Link Purpose (In Context)

1.  [G91: Providing link text that describes the purpose of a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G91)

    -   [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H30) (HTML)

    -   [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H24) (HTML)

2.  Allowing the user to choose short or long link text using one of the technology specific techniques below:

    -   [G189: Providing a control near the beginning of the Web page that changes the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G189)

    -   [SCR30: Using scripts to change the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR30) (Scripting)

3.  [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G53)

4.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   [H33: Supplementing link text with the title attribute](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H33) (HTML)

    -   [C7: Using CSS to hide a portion of the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C7) (CSS)

5.  Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:

    -   [H77: Identifying the purpose of a link using link text combined with its enclosing list item](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H77) (HTML)

    -   [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H78) (HTML)

    -   [H79: Identifying the purpose of a link using link text combined with its enclosing table cell and associated table headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H79) (HTML)

    -   [H80: Identifying the purpose of a link using link text combined with the preceding heading element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H80) (HTML)

    -   [H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H81) (HTML)

##### Advisory Techniques for 2.4.4 - Link Purpose (In Context)

-   [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H2) (HTML)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

##### Failures for SC 2.4.4 - Link Purpose (In Context)

-   [F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F63)

-   [F89: Failure of 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F89)

<a href="Overview.php" id="qr-navigation-mechanisms-mult-loc" class="showhideR" title="Go to top of page">top of page</a>

#### Multiple Ways<span class="screenreader">:</span>

[2.4.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-mult-loc) More than one way is available to locate a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> within a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#set-of-web-pagesdef" class="termref">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a>. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-mult-loc.html" class="HTMlink">Understanding Success Criterion 2.4.5</a>

##### Sufficient Techniques for 2.4.5 - Multiple Ways

1.  Using two or more of the following techniques:

    -   [G125: Providing links to navigate to related Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G125)

    -   [G64: Providing a Table of Contents](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G64)

    -   [G63: Providing a site map](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G63)

    -   [G161: Providing a search function to help users find content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G161)

    -   [G126: Providing a list of links to all other Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G126)

    -   [G185: Linking to all of the pages on the site from the home page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G185)

##### Advisory Techniques for 2.4.5 - Multiple Ways

-   [H59: Using the link element and navigation tools](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H59) (HTML)

-   Including information about presentation modes in tables of contents and concept maps (future link)

<a href="Overview.php" id="qr-navigation-mechanisms-descriptive" class="showhideR" title="Go to top of page">top of page</a>

#### Headings and Labels<span class="screenreader">:</span>

[2.4.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-descriptive) Headings and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#labeldef" class="termref">labels</a> describe topic or purpose. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-descriptive.html" class="HTMlink">Understanding Success Criterion 2.4.6</a>

##### Sufficient Techniques for 2.4.6 - Headings and Labels

1.  [G130: Providing descriptive headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G130)

2.  [G131: Providing descriptive labels](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G131)

Note: Headings and labels must be programmatically determined, per [Success Criterion 1.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation-programmatic) .

##### Advisory Techniques for 2.4.6 - Headings and Labels

-   Using unique section headings in a Web Page (future link)

-   Starting section headings with unique information (future link)

<a href="Overview.php" id="qr-navigation-mechanisms-focus-visible" class="showhideR" title="Go to top of page">top of page</a>

#### Focus Visible<span class="screenreader">:</span>

[2.4.7](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-focus-visible) Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-focus-visible.html" class="HTMlink">Understanding Success Criterion 2.4.7</a>

##### Sufficient Techniques for 2.4.7 - Focus Visible

1.  [G149: Using user interface components that are highlighted by the user agent when they receive focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G149)

2.  [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C15) (CSS)

3.  [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G165)

4.  [G195: Using an author-supplied, highly visible focus indicator](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G195)

5.  [SCR31: Using script to change the background color or border of the element with focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR31) (Scripting)

##### Advisory Techniques for 2.4.7 - Focus Visible

-   Highlighting a link or control when the mouse hovers over it (future link)

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

##### Failures for SC 2.4.7 - Focus Visible

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

-   [F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F78)

<a href="Overview.php" id="qr-navigation-mechanisms-location" class="showhideR" title="Go to top of page">top of page</a>

#### Location<span class="screenreader">:</span>

[2.4.8](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-location) Information about the user's location within a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#set-of-web-pagesdef" class="termref">set of Web pages</a> is available. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-location.html" class="HTMlink">Understanding Success Criterion 2.4.8</a>

##### Sufficient Techniques for 2.4.8 - Location

1.  [G65: Providing a breadcrumb trail](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G65)

2.  [G63: Providing a site map](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G63)

3.  [G128: Indicating current location within navigation bars](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G128)

4.  [G127: Identifying a Web page's relationship to a larger collection of Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G127) using one of the following techniques:

    -   [H59: Using the link element and navigation tools](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H59) (HTML)

##### Advisory Techniques for 2.4.8 - Location

-   Providing a link to the home page or main page (future link)

-   Providing an easy-to-read version of information about the organization of a set of Web pages (future link)

-   Providing a sign language version of information about the organization of a set of Web pages (future link)

-   Providing an easy-to-read summary at the beginning of each section of content (future link)

<a href="Overview.php" id="qr-navigation-mechanisms-link" class="showhideR" title="Go to top of page">top of page</a>

#### Link Purpose (Link Only)<span class="screenreader">:</span>

[2.4.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-link) A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-link.html" class="HTMlink">Understanding Success Criterion 2.4.9</a>

##### Sufficient Techniques for 2.4.9 - Link Purpose (Link Only)

1.  [G91: Providing link text that describes the purpose of a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G91) using one of the following techniques:

    -   [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H30) (HTML)

    -   [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H24) (HTML)

2.  Allowing the user to choose short or long link text using one of the technology specific techniques below:

    -   [G189: Providing a control near the beginning of the Web page that changes the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G189)

    -   [SCR30: Using scripts to change the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR30) (Scripting)

3.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   [C7: Using CSS to hide a portion of the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C7) (CSS)

##### Advisory Techniques for 2.4.9 - Link Purpose (Link Only)

-   [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H2) (HTML)

-   [H33: Supplementing link text with the title attribute](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H33) (HTML)

##### Failures for SC 2.4.9 - Link Purpose (Link Only)

-   [F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F84)

-   [F89: Failure of 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F89)

<a href="Overview.php" id="qr-navigation-mechanisms-headings" class="showhideR" title="Go to top of page">top of page</a>

#### Section Headings<span class="screenreader">:</span>

[2.4.10](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-headings) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#sectiondef" class="termref">Section</a> headings are used to organize the content. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/navigation-mechanisms-headings.html" class="HTMlink">Understanding Success Criterion 2.4.10</a>

Note 1: "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.

Note 2: This success criterion covers sections within writing, not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-interface-componentdef" class="termref">user interface components</a>. User Interface components are covered under [Success Criterion 4.1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ensure-compat-rsv).

##### Sufficient Techniques for 2.4.10 - Section Headings

1.  [G141: Organizing a page using headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G141)

##### Advisory Techniques for 2.4.10 - Section Headings

-   Using the 'live' property to mark live regions (future link) (ARIA)

-   Providing mechanisms to navigate to different sections of the content of a Web page (future link)

### Readable<span class="screenreader">:</span>

[Guideline 3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning) Make text content readable and understandable <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning.html" class="GLlink">Understanding Guideline 3.1</a>

#### Advisory Techniques for Guideline 3.1

-   Setting expectations about content in the page from uncontrolled sources (future link)

-   Providing sign language interpretation for all content (future link)

-   Using the clearest and simplest language appropriate for the content (future link)

-   Avoiding centrally aligned text (future link)

-   Avoiding text that is fully justified (to both left and right margins) in a way that causes poor spacing between words or characters (future link)

-   Using left-justified text for languages that are written left to right (future link)

-   Using appropriate justification for languages that are written right-to-left (future link)

-   Limiting text column width (future link)

-   Avoiding chunks of italic text (future link)

-   Avoiding overuse of different styles on individual pages and in sites (future link)

-   Making links visually distinct (future link)

-   Using images, illustrations, video, audio, or symbols to clarify meaning (future link)

-   Providing practical examples to clarify content (future link)

-   Using a light pastel background rather than a white background behind black text (future link)

-   Avoiding the use of unique interface controls unnecessarily (future link)

-   Using upper and lower case according to the spelling rules of the text language (future link)

-   Avoiding unusual foreign words (future link)

-   Providing sign language versions of information, ideas, and processes that must be understood in order to use the content (future link)

-   Making any reference to a location in a Web page into a link to that location (future link)

-   Making references to a heading or title include the full text of the title (future link)

-   Providing easy-to-read versions of basic information about a set of Web pages, including information about how to contact the Webmaster (future link)

-   Providing a sign language version of basic information about a set of Web pages, including information about how to contact the Webmaster (future link)

<a href="Overview.php" id="qr-meaning-doc-lang-id" class="showhideR" title="Go to top of page">top of page</a>

#### Language of Page<span class="screenreader">:</span>

[3.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-doc-lang-id) The default <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a> of each <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-doc-lang-id.html" class="HTMlink">Understanding Success Criterion 3.1.1</a>

##### Sufficient Techniques for 3.1.1 - Language of Page

1.  Identifying default human language(s) using one of the following techniques:

    -   [H57: Using language attributes on the html element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H57) (HTML)

##### Advisory Techniques for 3.1.1 - Language of Page

-   Specifying the default language in the HTTP header (future link)

-   using http or the Content-Language meta tag for metadata (future link)

<a href="Overview.php" id="qr-meaning-other-lang-id" class="showhideR" title="Go to top of page">top of page</a>

#### Language of Parts<span class="screenreader">:</span>

[3.1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-other-lang-id) The <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a> of each passage or phrase in the content can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-other-lang-id.html" class="HTMlink">Understanding Success Criterion 3.1.2</a>

##### Sufficient Techniques for 3.1.2 - Language of Parts

1.  Identifying changes in human languages using one of the following techniques:

    -   [H58: Using language attributes to identify changes in the human language](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H58) (HTML)

##### Advisory Techniques for 3.1.2 - Language of Parts

-   Making text that is not in the default human language of the Web page visually distinct (future link)

-   Giving the names of any languages used in foreign passages or phrases (future link)

-   Providing language markup on proper names to facilitate correct pronunciation by screen readers (future link)

<a href="Overview.php" id="qr-meaning-idioms" class="showhideR" title="Go to top of page">top of page</a>

#### Unusual Words<span class="screenreader">:</span>

[3.1.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-idioms) A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available for identifying specific definitions of words or phrases <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#unusual-restricteddef" class="termref">used in an unusual or restricted way</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#idiomsdef" class="termref">idioms</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#jargondef" class="termref">jargon</a>. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-idioms.html" class="HTMlink">Understanding Success Criterion 3.1.3</a>

##### Sufficient Techniques for 3.1.3 - Unusual Words

###### Situation A: If the word or phrase has a unique meaning within the Web page:

1.  [G101: Providing the definition of a word or phrase used in an unusual or restricted way](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G101) for the first occurrence of the word or phrase in a Web page using one of the following techniques:

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

        -   [H40: Using definition lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H40) (HTML)

        -   [H60: Using the link element to link to a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H60) (HTML)

    -   [G112: Using inline definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G112)

        -   [H54: Using the dfn element to identify the defining instance of a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H54) (HTML)

2.  [G101: Providing the definition of a word or phrase used in an unusual or restricted way](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G101) for each occurrence of the word or phrase in a Web page using one of the following techniques:

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

        -   [H40: Using definition lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H40) (HTML)

        -   [H60: Using the link element to link to a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H60) (HTML)

    -   [G62: Providing a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G62)

    -   [G70: Providing a function to search an online dictionary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G70)

###### Situation B: If the word or phrase means different things within the same Web page:

1.  [G101: Providing the definition of a word or phrase used in an unusual or restricted way](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G101) for each occurrence of the word or phrase in a Web page using one of the following techniques:

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

        -   [H40: Using definition lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H40) (HTML)

        -   [H60: Using the link element to link to a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H60) (HTML)

    -   [G112: Using inline definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G112)

        -   [H54: Using the dfn element to identify the defining instance of a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H54) (HTML)

##### Advisory Techniques for 3.1.3 - Unusual Words

-   Using the title attribute to provide explanations of words or phrases (future link)

-   Using markup and visual formatting to help users recognize words that have special meaning (future link)

-   Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need (future link)

-   Providing a sign language dictionary to help users who are deaf find the necessary definitions (future link)

-   Providing a mechanism for finding definitions for all words in text content (future link)

-   Providing a mechanism to determine the meaning of each word or phrase in text content (future link)

-   Avoiding unusual foreign words (future link)

-   Using a series of dictionaries in cascading fashion to provide meanings (future link)

<a href="Overview.php" id="qr-meaning-located" class="showhideR" title="Go to top of page">top of page</a>

#### Abbreviations<span class="screenreader">:</span>

[3.1.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-located) A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> for identifying the expanded form or meaning of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#abbreviationsdef" class="termref">abbreviations</a> is available. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-located.html" class="HTMlink">Understanding Success Criterion 3.1.4</a>

##### Sufficient Techniques for 3.1.4 - Abbreviations

###### Situation A: If the abbreviation has only one meaning within the Web page:

1.  [G102: Providing the expansion or explanation of an abbreviation](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G102) for the first occurrence of the abbreviation in a Web page using one of the following techniques:

    -   [G97: Providing the abbreviation immediately following the expanded form](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G97)

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

    -   [H28: Providing definitions for abbreviations by using the abbr and acronym elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H28) (HTML)

2.  [G102: Providing the expansion or explanation of an abbreviation](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G102) for all occurrences of the abbreviation in a Web page using one of the following techniques:

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

    -   [G62: Providing a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G62)

    -   [H60: Using the link element to link to a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H60) (HTML)

    -   [G70: Providing a function to search an online dictionary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G70)

    -   [H28: Providing definitions for abbreviations by using the abbr and acronym elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H28) (HTML)

###### Situation B: If the abbreviation means different things within the same Web page:

1.  [G102: Providing the expansion or explanation of an abbreviation](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G102) for all occurrences of abbreviations in a Web page using one of the following techniques:

    -   [G55: Linking to definitions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G55)

    -   [H28: Providing definitions for abbreviations by using the abbr and acronym elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H28) (HTML)

##### Advisory Techniques for 3.1.4 - Abbreviations

-   Using the title attribute to provide explanations of words or phrases (future link)

-   Using unique abbreviations in a Web page (future link)

-   Using visual formatting to help users recognize abbreviations (future link)

-   Providing access to a talking dictionary to support users who might have difficulty decoding written definitions (future link)

-   Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need (future link)

<a href="Overview.php" id="qr-meaning-supplements" class="showhideR" title="Go to top of page">top of page</a>

#### Reading Level<span class="screenreader">:</span>

[3.1.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-supplements) When text requires reading ability more advanced than the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#lowseceddef" class="termref">lower secondary education level</a> after removal of proper names and titles, <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#suppcontentdef" class="termref">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-supplements.html" class="HTMlink">Understanding Success Criterion 3.1.5</a>

##### Sufficient Techniques for 3.1.5 - Reading Level

1.  [G86: Providing a text summary that requires reading ability less advanced than the upper secondary education level](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G86)

2.  [G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G103)

3.  [G79: Providing a spoken version of the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G79)

4.  [G153: Making the text easier to read](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G153)

5.  [G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G160)

Note: Different sites may address this Success Criterion in different ways. An audio version of the content may be helpful to some users. For some people who are deaf, a sign language version of the page may be easier to understand than a written language version since sign language may be their first language. Some sites may decide to do both or other combinations. No technique will help all users who have difficulty. So different techniques are provided as sufficient techniques here for authors trying to make their sites more accessible. Any numbered technique or combination above can be used by a particular site and it is considered sufficient by the Working Group.

##### Advisory Techniques for 3.1.5 - Reading Level

-   Providing text for navigational and landing pages that requires reading ability that is less advanced than the lower secondary education level (future link)

-   Providing text for interior pages that requires reading ability at the lower secondary education level (future link)

-   Including content summaries in metadata (future link)

-   Using the clearest and simplest language appropriate for the content (future link)

-   Using RDF to associate supplements with primary content (future link)

-   Providing a clear representational image on the site's home page (future link)

-   Clearly marking, by use of text or icon, content which has been optimized for easy reading (future link)

-   Using sentences that contain no redundant words, that is, words that do not change the meaning of the sentence (future link)

-   Using sentences that contain no more than two conjunctions (future link)

-   Using sentences that are no longer than the typical accepted length for secondary education (Note: In English that is 25 words) (future link)

-   Using sentences that do not contain complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence (future link)

-   Providing summaries for different sections of text (future link)

-   Using metadata to associate alternatives at different reading levels. (future link)

-   Using the Dublin Core accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Using the ISO AfA accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Using the IMS accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Making metadata viewable by humans (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that point to a pre-primary-reading-level and a primary-reading-level text transcript of a new scientific discovery advanced-reading-level article.

<a href="Overview.php" id="qr-meaning-pronunciation" class="showhideR" title="Go to top of page">top of page</a>

#### Pronunciation<span class="screenreader">:</span>

[3.1.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-pronunciation) A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/meaning-pronunciation.html" class="HTMlink">Understanding Success Criterion 3.1.6</a>

##### Sufficient Techniques for 3.1.6 - Pronunciation

1.  [G120: Providing the pronunciation immediately following the word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G120)

2.  [G121: Linking to pronunciations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G121)

3.  [G62: Providing a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G62) that includes pronunciation information for words that have a unique pronunciation in the content and have meaning that depends on pronunciation

4.  Providing pronunciation information using a technology-specific technique below

    -   [H62: Using the ruby element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H62) (HTML) (XHTML 1.1)

    -   [G163: Using standard diacritical marks that can be turned off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G163)

##### Advisory Techniques for 3.1.6 - Pronunciation

-   Providing pronunciations in a sound file, so that users can listen to the pronunciations of the word (future link)

-   Providing a mechanism for finding pronunciations for all foreign words in text content (future link)

-   Providing a mechanism to determine the pronunciations of each word or phrase in text content (future link)

### Predictable<span class="screenreader">:</span>

[Guideline 3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior) Make Web pages appear and operate in predictable ways <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior.html" class="GLlink">Understanding Guideline 3.2</a>

#### Advisory Techniques for Guideline 3.2

-   Positioning labels to maximize predictability of relationships

<a href="Overview.php" id="qr-consistent-behavior-receive-focus" class="showhideR" title="Go to top of page">top of page</a>

#### On Focus<span class="screenreader">:</span>

[3.2.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-receive-focus) When any component receives focus, it does not initiate a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef" class="termref">change of context</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior-receive-focus.html" class="HTMlink">Understanding Success Criterion 3.2.1</a>

##### Sufficient Techniques for 3.2.1 - On Focus

1.  [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G107)

Note: A change of content is not always a [change of context](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef). This success criterion is automatically met if changes in content are not also changes of context.

##### Advisory Techniques for 3.2.1 - On Focus

-   Not causing persistent changes of state or value when a component receives focus, or providing an alternate means to reset any changes (future link)

-   Opening new windows only when best from an accessibility perspective (future link)

-   Giving users advanced warning when opening a new window. (future link)

##### Failures for SC 3.2.1 - On Focus

-   [F52: Failure of Success Criterion 3.2.1 due to opening a new window as soon as a new page is loaded](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F52)

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

<a href="Overview.php" id="qr-consistent-behavior-unpredictable-change" class="showhideR" title="Go to top of page">top of page</a>

#### On Input<span class="screenreader">:</span>

[3.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-unpredictable-change) Changing the setting of any <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-interface-componentdef" class="termref">user interface component</a> does not automatically cause a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef" class="termref">change of context</a> unless the user has been advised of the behavior before using the component. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior-unpredictable-change.html" class="HTMlink">Understanding Success Criterion 3.2.2</a>

##### Sufficient Techniques for 3.2.2 - On Input

1.  [G80: Providing a submit button to initiate a change of context](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G80) using a technology-specific technique listed below

    -   [H32: Providing submit buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H32) (HTML)

    -   [H84: Using a button with a select element to perform an action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H84) (HTML)

2.  [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G13)

Note: A change of content is not always a [change of context](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef). This success criterion is automatically met if changes in content are not also changes of context.

##### Advisory Techniques for 3.2.2 - On Input

-   Giving users advanced warning when opening a new window. (future link)

##### Failures for SC 3.2.2 - On Input

-   [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F36)

-   [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the status of a radio button, check box or select list is changed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F37)

-   [F76: Failure of 3.2.2 due to providing instruction material about the change of context by change of setting in a user interface element at a location that users may bypass](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F76)

<a href="Overview.php" id="qr-consistent-behavior-consistent-locations" class="showhideR" title="Go to top of page">top of page</a>

#### Consistent Navigation<span class="screenreader">:</span>

[3.2.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-consistent-locations) Navigational mechanisms that are repeated on multiple <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> within a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#set-of-web-pagesdef" class="termref">set of Web pages</a> occur in the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#samerelorderdef" class="termref">same relative order</a> each time they are repeated, unless a change is initiated by the user. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior-consistent-locations.html" class="HTMlink">Understanding Success Criterion 3.2.3</a>

##### Sufficient Techniques for 3.2.3 - Consistent Navigation

1.  [G61: Presenting repeated components in the same relative order each time they appear](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G61)

##### Advisory Techniques for 3.2.3 - Consistent Navigation

-   Using templates to ensure consistency across multiple Web pages (future link)

-   Creating layout, positioning, layering, and alignment (future link)

##### Failures for SC 3.2.3 - Consistent Navigation

-   [F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F66)

<a href="Overview.php" id="qr-consistent-behavior-consistent-functionality" class="showhideR" title="Go to top of page">top of page</a>

#### Consistent Identification<span class="screenreader">:</span>

[3.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-consistent-functionality) Components that have the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#samefunctionalitydef" class="termref">same functionality</a> within a set of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> are identified consistently. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior-consistent-functionality.html" class="HTMlink">Understanding Success Criterion 3.2.4</a>

##### Sufficient Techniques for 3.2.4 - Consistent Identification

1.  [G197: Using labels, names, and text alternatives consistently for content that has the same functionality](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G197) **AND** following the [sufficient techniques for Success Criterion 1.1.1](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/text-equiv-all.html#text-equiv-all-techniques-head) and [sufficient techniques for Success Criterion 4.1.2](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/ensure-compat-rsv.html#ensure-compat-rsv-techniques-head) for providing labels, names, and text alternatives.

Note 1: Text alternatives that are "consistent" are not always "identical." For instance, you may have an graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say "Go to page 4." Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say "Go to page 5". Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.

Note 2: A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as "approved", "completed", or "included", to name a few, depending on the situation. Using "check mark" as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions.

##### Advisory Techniques for 3.2.4 - Consistent Identification

-   Ensuring that the text alternative conveys the function of the component and what will happen when the user activates it (future link)

-   Using the same non-text content for a given function whenever possible (future link)

##### Failures for SC 3.2.4 - Consistent Identification

-   [F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F31)

<a href="Overview.php" id="qr-consistent-behavior-no-extreme-changes-context" class="showhideR" title="Go to top of page">top of page</a>

#### Change on Request<span class="screenreader">:</span>

[3.2.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-no-extreme-changes-context) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef" class="termref">Changes of context</a> are initiated only by user request or a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available to turn off such changes. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/consistent-behavior-no-extreme-changes-context.html" class="HTMlink">Understanding Success Criterion 3.2.5</a>

##### Sufficient Techniques for 3.2.5 - Change on Request

###### Situation A: If the Web page allows automatic updates:

1.  [G76: Providing a mechanism to request an update of the content instead of updating automatically](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G76)

###### Situation B: If automatic redirects are possible:

1.  [SVR1: Implementing automatic redirects on the server side instead of on the client side](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SVR1) (SERVER)

2.  [G110: Using an instant client-side redirect](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G110) using one of the following techniques:

    -   [H76: Using meta refresh to create an instant client-side redirect](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H76) (HTML)

###### Situation C: If the Web page uses pop-up windows:

1.  Including pop-up windows using one of the following techniques:

    -   [H83: Using the target attribute to open a new window on user request and indicating this in link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H83) (HTML)

    -   [SCR24: Using progressive enhancement to open new windows on user request](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR24) (Scripting)

###### Situation D: If using an onchange event on a select element:

1.  [SCR19: Using an onchange event on a select element without causing a change of context](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR19) (Scripting)

##### Advisory Techniques for 3.2.5 - Change on Request

-   Opening new windows by providing normal hyperlinks without the target attribute (future link), because many user agents allow users to open links in another window or tab.

-   Opening new windows only when best from an accessibility perspective (future link)

##### Failures for SC 3.2.5 - Change on Request

-   [F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F60)

-   [F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F61)

-   [F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F9)

-   [F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F22)

-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F41)

### Input Assistance<span class="screenreader">:</span>

[Guideline 3.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error) Help users avoid and correct mistakes <a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error.html" class="GLlink">Understanding Guideline 3.3</a>

<a href="Overview.php" id="qr-minimize-error-identified" class="showhideR" title="Go to top of page">top of page</a>

#### Error Identification<span class="screenreader">:</span>

[3.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-identified) If an <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#input-errordef" class="termref">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-identified.html" class="HTMlink">Understanding Success Criterion 3.3.1</a>

##### Sufficient Techniques for 3.3.1 - Error Identification

###### Situation A: If a form contains fields for which information from the user is mandatory.

1.  [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

2.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

###### Situation B: If information provided by the user is required to be in a specific data format or of certain values.

1.  [G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G84)

2.  [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G85)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

##### Advisory Techniques for 3.3.1 - Error Identification

-   [G139: Creating a mechanism that allows users to jump to errors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G139)

-   Validating form submissions on the server (future link)

-   Re-displaying a form with a summary of errors (future link)

-   Providing error notification as the user enters information (future link)

-   Assisting the user in making corrections by providing links to each error (future link)

-   Highlighting or visually emphasizing errors where they occur (future link)

-   Supplementing text with non-text content when reporting errors (future link)

-   Providing success feedback when data is submitted successfully (future link)

<a href="Overview.php" id="qr-minimize-error-cues" class="showhideR" title="Go to top of page">top of page</a>

#### Labels or Instructions<span class="screenreader">:</span>

[3.3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-cues) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#labeldef" class="termref">Labels</a> or instructions are provided when content requires user input. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-cues.html" class="HTMlink">Understanding Success Criterion 3.3.2</a>

##### Sufficient Techniques for 3.3.2 - Labels or Instructions

1.  [G131: Providing descriptive labels](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G131) **AND** one of the following:

    -   [G89: Providing expected data format and example](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G89)

    -   [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G184)

    -   [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G162)

    -   [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

2.  [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

3.  [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H71) (HTML)

4.  [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

5.  [G167: Using an adjacent button to label the purpose of a field](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G167)

Note: The techniques at the end of the above list should be considered "last resort" and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.

##### Advisory Techniques for 3.3.2 - Labels or Instructions

-   [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G13)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

-   [ARIA4: Using Accessible Rich Internet Applications to programmatically identify form fields as required](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA4) (ARIA)

-   Providing linear form design and grouping similar items (future link)

##### Failures for SC 3.3.2 - Labels or Instructions

-   [F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F82)

<a href="Overview.php" id="qr-minimize-error-suggestions" class="showhideR" title="Go to top of page">top of page</a>

#### Error Suggestion<span class="screenreader">:</span>

[3.3.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-suggestions) If an <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#input-errordef" class="termref">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-suggestions.html" class="HTMlink">Understanding Success Criterion 3.3.3</a>

##### Sufficient Techniques for 3.3.3 - Error Suggestion

###### Situation A: If a mandatory field contains no information:

1.  [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

###### Situation B: If information for a field is required to be in a specific data format:

1.  [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G85)

2.  [G177: Providing suggested correction text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G177)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

###### Situation C: Information provided by the user is required to be one of a limited set of values:

1.  [G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G84)

2.  [G177: Providing suggested correction text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G177)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

##### Advisory Techniques for 3.3.3 - Error Suggestion

-   [G139: Creating a mechanism that allows users to jump to errors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G139)

-   Making error messages easy to understand and distinguishable from other text in the Web page (future link)

-   Validating form submissions on the server (future link)

-   When mandatory information has not been provided, including descriptions or examples of correct information in addition to identifying the field as mandatory (future link)

-   Repeating and emphasizing suggestions for correcting each input error in the context of its form field (future link)

-   Providing a way for the user to skip from each item in a list of suggestions to its corresponding form field (future link)

-   Providing additional contextual help for the form field requiring change (future link)

-   Accepting input data in a variety of formats (future link)

-   Providing success feedback when data is submitted successfully (future link)

###### Techniques for providing suggestions to the user (Advisory)

-   Providing a text description that contains information about the number of input errors, suggestions for corrections to each item, and instructions on how to proceed (future link)

-   Providing a text description that contains suggestions for correction as the first item (or one of the first items) of content, or emphasizing this information in the content (future link)

-   Displaying errors and suggestions in the context of the original form (for example, re-displaying a form where input errors and suggestions for correction are highlighted and displayed in the context of the original form) (future link)

###### HTML Techniques (Advisory)

-   Providing "correct examples" for data and data formats as initial text in mandatory form fields (future link)

-   Providing links to suggested correction text "close to" form fields, or providing the suggested correction text itself directly on the Web page "next to" form fields (future link)

###### Client-Side Scripting Techniques (Advisory)

-   [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

-   Providing client-side validation and adding error text via the DOM (future link)

-   Calling a function from the submit action of a form to perform client side validation (future link)

###### ARIA Techniques (Advisory)

-   [ARIA2: Identifying required fields with the "required" property](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA2) (ARIA)

-   [ARIA3: Identifying valid range information with the "valuemin" and "valuemax" properties](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA3) (ARIA)

<a href="Overview.php" id="qr-minimize-error-reversible" class="showhideR" title="Go to top of page">top of page</a>

#### Error Prevention (Legal, Financial, Data)<span class="screenreader">:</span>

[3.3.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-reversible) For <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> that cause <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#legalcommitmentsdef" class="termref">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-controllabledef" class="termref">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: *(Level AA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-reversible.html" class="HTMlink">Understanding Success Criterion 3.3.4</a>

1.  **Reversible:** Submissions are reversible.

2.  **Checked:** Data entered by the user is checked for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.

3.  **Confirmed:** A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.

##### Sufficient Techniques for 3.3.4 - Error Prevention (Legal, Financial, Data)

###### Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:

1.  [G164: Providing a stated period of time after submission of the form when the order can be updated or canceled by the user](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G164)

2.  [G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G98)

3.  [G155: Providing a checkbox in addition to a submit button](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G155)

###### Situation B: If an action causes information to be deleted:

1.  [G99: Providing the ability to recover deleted information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G99)

2.  [G168: Requesting confirmation to continue with selected action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G168)

3.  [G155: Providing a checkbox in addition to a submit button](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G155)

###### Situation C: If the Web page includes a testing application:

1.  [G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G98)

2.  [G168: Requesting confirmation to continue with selected action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G168)

##### Advisory Techniques for 3.3.4 - Error Prevention (Legal, Financial, Data)

-   Informing the user what irreversible action is about to happen (future link)

-   [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

-   Placing focus in the field containing the error (future link)

-   Avoiding use of the same words or letter combinations to begin each item of a drop-down list (future link)

-   Providing success feedback when data is submitted successfully (future link)

<a href="Overview.php" id="qr-minimize-error-context-help" class="showhideR" title="Go to top of page">top of page</a>

#### Help<span class="screenreader">:</span>

[3.3.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-context-help) <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-sensitivehelpdef" class="termref">Context-sensitive help</a> is available. *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-context-help.html" class="HTMlink">Understanding Success Criterion 3.3.5</a>

##### Sufficient Techniques for 3.3.5 - Help

###### Situation A: If a form requires text input:

1.  [G71: Providing a help link on every Web page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G71)

2.  [G193: Providing help by an assistant in the Web page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G193)

3.  [G194: Providing spell checking and suggestions for text input](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G194)

4.  [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G184)

###### Situation B: If a form requires text input in an expected data format:

1.  [G89: Providing expected data format and example](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G89)

2.  [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G184)

##### Advisory Techniques for 3.3.5 - Help

-   [H89: Using the title attribute to provide context-sensitive help](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H89) (HTML)

-   Checking byte of character and auto-converting to expected byte for text input if applicable (future link)

<a href="Overview.php" id="qr-minimize-error-reversible-all" class="showhideR" title="Go to top of page">top of page</a>

#### Error Prevention (All)<span class="screenreader">:</span>

[3.3.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-reversible-all) For <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> that require the user to submit information, at least one of the following is true: *(Level AAA)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-reversible-all.html" class="HTMlink">Understanding Success Criterion 3.3.6</a>

1.  **Reversible:** Submissions are reversible.

2.  **Checked:** Data entered by the user is checked for <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.

3.  **Confirmed:** A <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.

##### Sufficient Techniques for 3.3.6 - Error Prevention (All)

1.  Following the [sufficient techniques for Success Criterion 3.3.4](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/minimize-error-reversible.html#minimize-error-reversible-techniques-head) for all forms that require the user to submit information.

### Compatible<span class="screenreader">:</span>

[Guideline 4.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ensure-compat) Maximize compatibility with current and future user agents, including assistive technologies<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/ensure-compat.html" class="GLlink">Understanding Guideline 4.1</a>

#### Advisory Techniques for Guideline 4.1

-   Avoiding deprecated features of W3C technologies (future link)

-   Not displaying content that relies on technologies that are not accessibility-supported when the technology is turned off or not supported.

<a href="Overview.php" id="qr-ensure-compat-parses" class="showhideR" title="Go to top of page">top of page</a>

#### Parsing<span class="screenreader">:</span>

[4.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ensure-compat-parses) In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/ensure-compat-parses.html" class="HTMlink">Understanding Success Criterion 4.1.1</a>

Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

##### Sufficient Techniques for 4.1.1 - Parsing

1.  [G134: Validating Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G134)

2.  [G192: Fully conforming to specifications](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G192)

3.  [H88: Using HTML according to spec](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H88)

4.  Ensuring that Web pages can be parsed by using one of the following techniques:

    -   [H74: Ensuring that opening and closing tags are used according to specification](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H74) (HTML)

    -   [H75: Ensuring that Web pages are well-formed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H75) (HTML)

##### Failures for SC 4.1.1 - Parsing

-   [F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F70)

-   [F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F77)

-   [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F17)

-   [F62: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine specific relationships in XML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F62)

<a href="Overview.php" id="qr-ensure-compat-rsv" class="showhideR" title="Go to top of page">top of page</a>

#### Name, Role, Value<span class="screenreader">:</span>

[4.1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ensure-compat-rsv) For all <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#user-interface-componentdef" class="termref">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#namedef" class="termref">name</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#roledef" class="termref">role</a> can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallysetdef" class="termref">programmatically set</a>; and notification of changes to these items is available to <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>. *(Level A)*<a href="http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/ensure-compat-rsv.html" class="HTMlink">Understanding Success Criterion 4.1.2</a>

Note: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.

##### Sufficient Techniques for 4.1.2 - Name, Role, Value

###### Situation A: If using a standard user interface component in a markup language (e.g. HTML):

1.  [G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G108) using technology-specific techniques below:

    -   [H91: Using HTML form controls and links](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H91) (HTML)

    -   [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

    -   [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H64) (HTML)

    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

    -   [H88: Using HTML according to spec](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H88)

    -   [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR21) (Scripting)

###### Situation B: If using script or code to re-purpose a standard user interface component in a markup language:

1.  Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes using one of the following techniques:

    -   [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR21) (Scripting)

###### Situation C: If using a standard user interface component in a programming technology:

1.  [G135: Using the accessibility API features of a technology to expose names and roles, to allow user-settable properties to be directly set, and to provide notification of changes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G135)

###### Situation D: If creating your own user interface component in a programming language:

1.  [G10: Creating components using a technology that supports the accessibility API features of the platforms on which the user agents will be run to expose the names and roles, allow user-settable properties to be directly set, and provide notification of changes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G10)

##### Advisory Techniques for 4.1.2 - Name, Role, Value

-   Providing labels for all form controls that do not have implicit labels (future link)

##### Failures for SC 4.1.2 - Name, Role, Value

-   [F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F59)

    Note: This failure may be solved in the future using DHTML roadmap techniques.

-   [F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F15)

-   [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F20)

-   [F68: Failure of Success Criterion 1.3.1 and 4.1.2 due to the association of label and user interface controls not being programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F68)

-   [F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F79)

-   [F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F86)

-   [F89: Failure of 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F89)

<span id="conformance-reqs"></span>

Conformance requirements
------------------------

<span class="showhideinline">\[[Hide Conformance Requirements](Overview.php?confreqs=N#conformance-reqs)\]</span>

In order for a Web page to conform to WCAG 2.0, all of the following conformance requirements must be satisfied:

**1. Conformance Level:** One of the following levels of conformance is met in full.

-   **Level A:** For Level A conformance (the minimum level of conformance), the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#satisfiesdef" class="termref">satisfies</a> all the Level A Success Criteria, or a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conforming-alternate-versiondef" class="termref">conforming alternate version</a> is provided.

-   **Level AA:** For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.

-   **Level AAA:** For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.

Note 1: Although conformance can only be achieved at the stated levels, authors are encouraged to report (in their claim) any progress toward meeting success criteria from all levels beyond the achieved level of conformance.

Note 2: It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

<a href="Overview.php" id="qr-cc1" class="showhideR" title="Go to top of page">top of page</a>

##### Sufficient Techniques for Conformance Requirement 1 - Conformance Level

1.  [G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G136)

2.  [G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G190)

3.  [C29: Using a style switcher to provide a conforming alternate version](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C29) (CSS)

4.  [SVR2: Using .htaccess to ensure that the only way to access non-conforming content is from conforming content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SVR2) (SERVER)

5.  [SVR3: Using HTTP referer to ensure that the only way to access non-conforming content is from conforming content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SVR3) (SERVER)

6.  [SVR4: Allowing users to provide preferences for the display of conforming alternate versions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SVR4) (SERVER)

##### Failures for Conformance Requirement 1 - Conformance Level

-   [F19: Failure of Conformance Requirement 1 due to not providing a method for the user to find the alternative conforming version of a non-conforming Web page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F19)

##### Advisory Techniques for Conformance Requirement 1 - Conformance Level

-   Providing reciprocal links between conforming and non-conforming versions (future link)

-   Excluding non-conforming content from search results (future link)

-   Using content negotiation (future link)

-   Not displaying content that relies on technologies that are not accessibility-supported when the technology is turned off or not supported. (future link)

-   Using metadata to allow location of a conforming alternative version from the URI of a non-conforming page (future link)

**2. Full pages:** <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformancedef" class="termref">Conformance</a> (and conformance level) is for full <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page(s)</a> only, and cannot be achieved if part of a Web page is excluded.

Note 1: For the purpose of determining conformance, alternatives to part of a page's content are considered part of the page when the alternatives can be obtained directly from the page, e.g., a long description or an alternative presentation of a video.

Note 2: Web pages that cannot conform due to content outside of the author's control may consider a [Statement of partial conformance](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-partial).

**3. Complete processes:** When a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> is one of a series of Web pages presenting a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> (i.e. a sequence of steps that need to be completed in order to accomplish an activity) all Web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)

Example: An online store has a series of pages that are used to select and purchase products. All pages in the series from start to finish (checkout) conform in order for any page that is part of the process to conform.

**4. Only Accessibility-Supported Ways of Using Technologies:** Only <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#accessibility-supporteddef" class="termref">accessibility supported</a> ways of using <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#technologydef" class="termref">technologies</a> are <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported. (See [Understanding accessibility support](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/conformance.html#uc-accessibility-support-head).)

**5. Non-Interference:** If <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#technologydef" class="termref">technologies</a> are used in a way that is not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#accessibility-supporteddef" class="termref">accessibility supported</a>, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> as a whole continues to meet the conformance requirements under each of the following conditions:

1.  when any technology that is not <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> is turned on in a user agent,

2.  when any technology that is not relied upon is turned off in a user agent, and

3.  when any technology that is not relied upon is not supported by a user agent

In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:

-   **1.4.2 - Audio Control**,

-   **2.1.2 - No Keyboard Trap**,

-   **2.3.1 - Three Flashes or Below Threshold**, and

-   **2.2.2 - Pause, Stop, Hide**.

**Note:** If a page cannot conform (for example, a conformance test page or an example page), it cannot be included in the scope of conformance or in a conformance claim.

For more information, including examples, see [Understanding Conformance Requirements](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/conformance.html#uc-conformance-requirements-head).

------------------------------------------------------------------------

**Content last updated:** 03 November 2008  
Developed by the Web Content Accessibility Guidelines Working Group ([WCAG WG](http://www.w3.org/WAI/GL/)).  
Editors: Gregg Vanderheiden, Loretta Guarino Reid, Ben Caldwell, Shawn Lawton Henry. Original coding by Gez Lemon.

\[[Contacting WAI](/WAI/contacts)\] Feedback welcome to <public-comments-wcag20@w3.org>.

[Copyright](/Consortium/Legal/ipr-notice#Copyright) © 1994-2007 [W3C](/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.
