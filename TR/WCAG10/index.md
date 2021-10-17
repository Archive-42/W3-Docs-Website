\[[contents](#toc)\]   \[[checklist](full-checklist.html)\]  

------------------------------------------------------------------------

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/ "Go to W3C Home Page")

Web Content Accessibility Guidelines 1.0
========================================

W3C Recommendation 5-May-1999 superseded 18 May 2021
----------------------------------------------------

This version:   
<http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505>

([plain text](wai-pageauth.txt), [PostScript](wai-pageauth.ps), [PDF](wai-pageauth.pdf), [gzip tar file of HTML](wai-pageauth.tgz), [zip archive of HTML](wai-pageauth.zip))

Latest version:   
<http://www.w3.org/TR/WAI-WEBCONTENT>

Previous version:   
<http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990324>

Editors:   
Wendy Chisholm, [Trace R & D Center](http://www.tracecenter.org/), University of Wisconsin -- Madison  
Gregg Vanderheiden, [Trace R & D Center](http://www.tracecenter.org/), University of Wisconsin -- Madison  
Ian Jacobs, [W3C](http://www.w3.org/)

[  
Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 1999 [W3C](http://www.w3.org/) ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software) rules apply.

------------------------------------------------------------------------

<span id="Abstract">Abstract</span>
-----------------------------------

These guidelines explain how to make [<span class="dfn-instance">Web content </span>](#content-structure "Definition of Web Content") accessible to people with disabilities. The guidelines are intended for all [<span class="dfn-instance">Web content developers</span>](#content-developer "Definition of Web Content developer") (page authors and site designers) and for developers of [<span class="dfn-instance">authoring tools</span>](#authoring-tool "Definition of
authoring tool"). The primary goal of these guidelines is to promote accessibility. However, following them will also make Web content more available to *all* users, whatever [<span class="dfn-instance">user agent</span>](#user-agent "Definition of user agent") they are using (e.g., desktop browser, voice browser, mobile phone, automobile-based personal computer, etc.) or constraints they may be operating under (e.g., noisy surroundings, under- or over-illuminated rooms, in a hands-free environment, etc.). Following these guidelines will also help people find information on the Web more quickly. These guidelines do not discourage content developers from using images, video, etc., but rather explain how to make multimedia content more accessible to a wide audience.

This is a reference document for accessibility principles and design ideas. Some of the strategies discussed in this document address certain Web internationalization and mobile access concerns. However, this document focuses on accessibility and does not fully address the related concerns of other W3C Activities. Please consult the [W3C Mobile Access Activity home page](http://www.w3.org/Mobile) and the [W3C Internationalization Activity home page](http://www.w3.org/International) for more information.

This document is meant to be stable and therefore does not provide specific information about browser support for different technologies as that information changes rapidly. Instead, the [Web Accessibility Initiative](http://www.w3.org/WAI/) (WAI) Web site provides such information (refer to [\[WAI-UA-SUPPORT\]](#ref-WAI-UA-SUPPORT)).

This document includes an appendix that organizes all of the [<span class="dfn-instance">checkpoints</span>](#def-checkpoint "Definition of checkpoint") by topic and priority. The checkpoints in the appendix link to their definitions in the current document. The topics identified in the appendix include images, multimedia, tables, frames, forms, and scripts. The appendix is available as either a [tabular summary of checkpoints](full-checklist.html) or as a [simple list of checkpoints](checkpoint-list.html).

A separate document, entitled "Techniques for Web Content Accessibility Guidelines 1.0" ([\[TECHNIQUES\]](#ref-TECHNIQUES)), explains how to implement the checkpoints defined in the current document. The Techniques Document discusses each checkpoint in more detail and provides examples using the Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), Synchronized Multimedia Integration Language (SMIL), and the Mathematical Markup Language (MathML). The Techniques Document also includes techniques for document validation and testing, and an index of HTML elements and attributes (and which techniques use them). The Techniques Document has been designed to track changes in technology and is expected to be updated more frequently than the current document. **Note.** Not all browsers or multimedia tools may support the features described in the guidelines. In particular, new features of HTML 4.0 or CSS 1 or CSS 2 may not be supported.

"Web Content Accessibility Guidelines 1.0" is part of a series of accessibility guidelines published by the [Web Accessibility Initiative](http://www.w3.org/WAI/). The series also includes User Agent Accessibility Guidelines ([\[WAI-USERAGENT\]](#ref-WAI-USERAGENT)) and Authoring Tool Accessibility Guidelines ([\[WAI-AUTOOLS\]](#ref-WAI-AUTOOLS)).

<span id="Status">Status of this document</span>
------------------------------------------------

This specification is a [Superseded Recommendation](https://www.w3.org/2020/Process-20200915/#rec-rescind). A newer specification exists that is recommended for new adoption in place of this specification.

This document remains available as a reference for old -- and possibly still deployed -- implementations, but is not recommended for future implementation. Implementers are strongly encouraged to use the latest version of WCAG, which is available from the [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

The English version of this specification is the only normative version. However, for translations in other languages see <http://www.w3.org/WAI/GL/WAI-WEBCONTENT-TRANSLATIONS>.

The list of known errors in this document is available at <http://www.w3.org/WAI/GL/WAI-WEBCONTENT-ERRATA>. Please report errors in this document to <wai-wcag-editor@w3.org>.

A list of current W3C Recommendations and other technical documents can be found at <http://www.w3.org/TR>.

This document has been produced as part of the W3C [Web Accessibility Initiative](http://www.w3.org/WAI). The goal of the [Web Content Guidelines Working Group](http://www.w3.org/WAI/GL) is discussed in the [Working Group charter](http://www.w3.org/WAI/GL/new-charter.html).

<span id="toc">Table of Contents</span>
---------------------------------------

-   <a href="#Abstract" id="toc-Abstract" class="tocxref">Abstract</a>
-   <a href="#Status" id="toc-Status" class="tocxref">Status of this document</a>
-   <a href="#Introduction" id="toc-Introduction" class="tocxref">1. Introduction</a>
-   <a href="#themes" id="toc-themes" class="tocxref">2. Themes of Accessible Design</a>
    -   <a href="#transform-gracefully" id="toc-transform-gracefully" class="tocxref">2.1 Ensuring Graceful Transformation</a>
    -   <a href="#context-and-orientation" id="toc-context-and-orientation" class="tocxref">2.2 Making Content Understandable and Navigable</a>
-   <a href="#organization" id="toc-organization" class="tocxref">3. How the Guidelines are Organized</a>
    -   <a href="#conventions" id="toc-conventions" class="tocxref">3.1 Document conventions</a>
-   <a href="#priorities" id="toc-priorities" class="tocxref">4. Priorities</a>
-   <a href="#Conformance" id="toc-Conformance" class="tocxref">5. Conformance</a>
-   <a href="#Guidelines" id="toc-Guidelines" class="tocxref">6. Web Content Accessibility Guidelines</a>
    -   <a href="#gl-provide-equivalents" id="toc-gl-provide-equivalents" class="tocxref">1. Provide equivalent alternatives to auditory and visual content.</a>
    -   <a href="#gl-color" id="toc-gl-color" class="tocxref">2. Don't rely on color alone.</a>
    -   <a href="#gl-structure-presentation" id="toc-gl-structure-presentation" class="tocxref">3. Use markup and style sheets and do so properly.</a>
    -   <a href="#gl-abbreviated-and-foreign" id="toc-gl-abbreviated-and-foreign" class="tocxref">4. Clarify natural language usage</a>
    -   <a href="#gl-table-markup" id="toc-gl-table-markup" class="tocxref">5. Create tables that transform gracefully.</a>
    -   <a href="#gl-new-technologies" id="toc-gl-new-technologies" class="tocxref">6. Ensure that pages featuring new technologies transform gracefully.</a>
    -   <a href="#gl-movement" id="toc-gl-movement" class="tocxref">7. Ensure user control of time-sensitive content changes.</a>
    -   <a href="#gl-own-interface" id="toc-gl-own-interface" class="tocxref">8. Ensure direct accessibility of embedded user interfaces.</a>
    -   <a href="#gl-device-independence" id="toc-gl-device-independence" class="tocxref">9. Design for device-independence.</a>
    -   <a href="#gl-interim-accessibility" id="toc-gl-interim-accessibility" class="tocxref">10. Use interim solutions.</a>
    -   <a href="#gl-use-w3c" id="toc-gl-use-w3c" class="tocxref">11. Use W3C technologies and guidelines.</a>
    -   <a href="#gl-complex-elements" id="toc-gl-complex-elements" class="tocxref">12. Provide context and orientation information.</a>
    -   <a href="#gl-facilitate-navigation" id="toc-gl-facilitate-navigation" class="tocxref">13. Provide clear navigation mechanisms.</a>
    -   <a href="#gl-facilitate-comprehension" id="toc-gl-facilitate-comprehension" class="tocxref">14. Ensure that documents are clear and simple.</a>
-   <a href="#validation" id="toc-validation" class="tocxref">Appendix A. -- Validation</a>
-   <a href="#glossary" id="toc-glossary" class="tocxref">Appendix B. -- Glossary</a>
-   <a href="#Acknowledgments" id="toc-Acknowledgments" class="tocxref">Acknowledgments</a>
-   <a href="#References" id="toc-References" class="tocxref">References</a>

The appendix list of checkpoints is available as either a [tabular summary of checkpoints](full-checklist.html) or as a [simple list of checkpoints](checkpoint-list.html).

------------------------------------------------------------------------

1. <span id="Introduction">Introduction</span>
----------------------------------------------

For those unfamiliar with accessibility issues pertaining to Web page design, consider that many users may be operating in contexts very different from your own:

-   They may not be able to see, hear, move, or may not be able to process some types of information easily or at all.
-   They may have difficulty reading or comprehending text.
-   They may not have or be able to use a keyboard or mouse.
-   They may have a text-only screen, a small screen, or a slow Internet connection.
-   They may not speak or understand fluently the language in which the document is written.
-   They may be in a situation where their eyes, ears, or hands are busy or interfered with (e.g., driving to work, working in a loud environment, etc.).
-   They may have an early version of a browser, a different browser entirely, a voice browser, or a different operating system.

Content developers must consider these different situations during page design. While there are several situations to consider, each accessible design choice generally benefits several disability groups at once and the Web community as a whole. For example, by using [<span class="dfn-instance">style sheets</span>](#style-sheet "Definition of style sheets") to control font styles and eliminating the FONT element, HTML authors will have more control over their pages, make those pages more accessible to people with low vision, and by sharing the style sheets, will often shorten page download times for all users.

The guidelines discuss accessibility issues and provide accessible design solutions. They address typical scenarios (similar to the font style example) that may pose problems for users with certain disabilities. For example, the [first guideline](#gl-provide-equivalents) explains how content developers can make images accessible. Some users may not be able to see images, others may use text-based browsers that do not support images, while others may have turned off support for images (e.g., due to a slow Internet connection). The guidelines do not suggest avoiding images as a way to improve accessibility. Instead, they explain that providing a [<span class="dfn-instance">text equivalent</span>](#text-equivalent "Definition of text equivalent") of the image will make it accessible.

How does a text equivalent make the image accessible? Both words in "text equivalent" are important:

-   Text content can be presented to the user as synthesized speech, braille, and visually-displayed text. Each of these three mechanisms uses a different sense -- ears for synthesized speech, tactile for braille, and eyes for visually-displayed text -- making the information accessible to groups representing a variety of sensory and other disabilities.
-   In order to be useful, the text must convey the same function or purpose as the image. For example, consider a text equivalent for a photographic image of the Earth as seen from outer space. If the purpose of the image is mostly that of decoration, then the text "Photograph of the Earth as seen from outer space" might fulfill the necessary function. If the purpose of the photograph is to illustrate specific information about world geography, then the text equivalent should convey that information. If the photograph has been designed to tell the user to select the image (e.g., by clicking on it) for information about the earth, equivalent text would be "Information about the Earth". Thus, if the text conveys the same function or purpose for the user with a disability as the image does for other users, then it can be considered a text equivalent.

Note that, in addition to benefitting users with disabilities, text equivalents can help all users find pages more quickly, since search robots can use the text when indexing the pages.

While Web content developers must provide text equivalents for images and other multimedia content, it is the responsibility of [<span class="dfn-instance">user agents</span>](#user-agent) (e.g., browsers and assistive technologies such as [<span class="dfn-instance">screen readers</span>](#screen-reader), [<span class="dfn-instance">braille displays</span>](#braille-display), etc.) to present the information to the user.

<span id="non-text-equivalent"><span class="dfn-instance">Non-text equivalents</span></span> of text (e.g., icons, pre-recorded speech, or a video of a person translating the text into sign language) can make documents accessible to people who may have difficulty accessing written text, including many individuals with cognitive disabilities, learning disabilities, and deafness. Non-text equivalents of text can also be helpful to non-readers. An [<span class="dfn-instance">auditory description</span>](#auditory-description) is an example of a non-text equivalent of visual information. An auditory description of a multimedia presentation's visual track benefits people who cannot see the visual information.

2. <span id="themes">Themes of Accessible Design</span>
-------------------------------------------------------

The guidelines address two general themes: ensuring graceful transformation, and making content understandable and navigable.

### 2.1 <span id="transform-gracefully">Ensuring Graceful Transformation</span>

By following these guidelines, content developers can create pages that transform gracefully. Pages that transform gracefully remain accessible despite any of the constraints described in the [introduction](#Introduction), including physical, sensory, and cognitive disabilities, work constraints, and technological barriers. Here are some keys to designing pages that transform gracefully:

-   Separate structure from presentation (refer to the difference between [<span class="dfn-instance">content, structure, and presentation</span>](#content-structure "Definition of content/structure/presentation")).
-   Provide text (including [<span class="dfn-instance">text equivalents</span>](#text-equivalent "Definition of text equivalent")). Text can be rendered in ways that are available to almost all browsing devices and accessible to almost all users.
-   Create documents that work even if the user cannot see and/or hear. Provide information that serves the same purpose or function as audio or video in ways suited to alternate sensory channels as well. This does not mean creating a prerecorded audio version of an entire site to make it accessible to users who are blind. Users who are blind can use [<span class="dfn-instance">screen reader</span>](#screen-reader "Definition of screen reader") technology to render all text information in a page.
-   Create documents that do not rely on one type of hardware. Pages should be usable by people without mice, with small screens, low resolution screens, black and white screens, no screens, with only voice or text output, etc.

The theme of graceful transformation is addressed primarily by guidelines 1 to 11.

### 2.2 <span id="context-and-orientation">Making Content Understandable and Navigable</span>

Content developers should make content understandable and navigable. This includes not only making the language clear and simple, but also providing understandable mechanisms for navigating within and between pages. Providing navigation tools and orientation information in pages will maximize accessibility and usability. Not all users can make use of visual clues such as image maps, proportional scroll bars, side-by-side frames, or graphics that guide sighted users of graphical desktop browsers. Users also lose contextual information when they can only view a portion of a page, either because they are accessing the page one word at a time (speech synthesis or [<span class="dfn-instance"> braille display</span>](#braille-display "Definition of braille display")), or one section at a time (small display, or a magnified display). Without orientation information, users may not be able to understand very large tables, lists, menus, etc.

The theme of making content understandable and navigable is addressed primarily in guidelines 12 to 14.

3. <span id="organization">How the Guidelines are Organized</span>
------------------------------------------------------------------

This document includes fourteen <span id="def-guideline">guidelines</span>, or general principles of accessible design. Each guideline includes:

-   The guideline number.
-   The statement of the guideline.
-   Guideline navigation links. Three links allow navigation to the next guideline (right arrow icon), the previous guideline (left arrow icon), or the current guideline's position in the table of contents (up arrow icon).
-   The rationale behind the guideline and some groups of users who benefit from it.
-   A list of checkpoint definitions.

The <span id="def-checkpoint">checkpoint</span> definitions in each guideline explain how the guideline applies in typical content development scenarios. Each checkpoint definition includes:

-   The checkpoint number.
-   The statement of the checkpoint.
-   The priority of the checkpoint. Priority 1 checkpoints are highlighted through the use of style sheets.
-   Optional informative notes, clarifying examples, and cross references to related guidelines or checkpoints.
-   A link to a section of the Techniques Document ([\[TECHNIQUES\]](#ref-TECHNIQUES)) where implementations and examples of the checkpoint are discussed.

Each checkpoint is intended to be specific enough so that someone reviewing a page or site may verify that the checkpoint has been satisfied.

### 3.1 <span id="conventions">Document conventions</span>

The following editorial conventions are used throughout this document:

-   Element names are in uppercase letters.
-   Attribute names are quoted in lowercase letters.
-   Links to definitions are highlighted through the use of style sheets.

4. <span id="priorities">Priorities</span>
------------------------------------------

Each checkpoint has a priority level assigned by the Working Group based on the checkpoint's impact on accessibility.

<span id="wc-priority-1">\[Priority 1\]</span>   
A Web content developer **must** satisfy this checkpoint. Otherwise, one or more groups will find it impossible to access information in the document. Satisfying this checkpoint is a basic requirement for some groups to be able to use Web documents.

<span id="wc-priority-2">\[Priority 2\]</span>  
A Web content developer **should** satisfy this checkpoint. Otherwise, one or more groups will find it difficult to access information in the document. Satisfying this checkpoint will remove significant barriers to accessing Web documents.

<span id="wc-priority-3">\[Priority 3\]</span>  
A Web content developer **may** address this checkpoint. Otherwise, one or more groups will find it somewhat difficult to access information in the document. Satisfying this checkpoint will improve access to Web documents.

Some checkpoints specify a priority level that may change under certain (indicated) conditions.

5. <span id="Conformance">Conformance</span>
--------------------------------------------

This section defines three levels of conformance to this document:

-   **Conformance Level "A"**: all Priority 1 checkpoints are satisfied;
-   **Conformance Level "Double-A"**: all Priority 1 and 2 checkpoints are satisfied;
-   **Conformance Level "Triple-A"**: all Priority 1, 2, and 3 checkpoints are satisfied;

**Note.** Conformance levels are spelled out in text so they may be understood when rendered to speech.

Claims of conformance to this document must use one of the following two forms.

Form 1: Specify:

-   The guidelines title: "Web Content Accessibility Guidelines 1.0"
-   The guidelines URI: http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505
-   The conformance level satisfied: "A", "Double-A", or "Triple-A".
-   The scope covered by the claim (e.g., page, site, or defined portion of a site.).

Example of Form 1:

> This page conforms to W3C's "Web Content Accessibility Guidelines 1.0", available at http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505, level Double-A.

Form 2: Include, on each page claiming conformance, one of three icons provided by W3C and link the icon to the appropriate W3C explanation of the claim. Information about the icons and how to insert them in pages is available at [\[WCAG-ICONS\]](#ref-WCAG-ICONS).

------------------------------------------------------------------------

6. <span id="Guidelines">Web Content Accessibility Guidelines</span>
--------------------------------------------------------------------

### Guideline 1. <span id="gl-provide-equivalents">Provide equivalent alternatives to auditory and visual content.</span>

[![Next guideline: 2](images/next.jpg)](#gl-color) [![Previous guideline: 14](images/previous.jpg)](#gl-facilitate-comprehension) [![Go to contents](images/contents.jpg)](#toc-gl-provide-equivalents)

#### <span id="q15">Provide content that, when presented to the user, conveys essentially the same function or purpose as auditory or visual content.</span>

Although some people cannot use images, movies, sounds, applets, etc. directly, they may still use pages that include [<span class="dfn-instance">equivalent</span>](#equivalent "Definition of equivalent") information to the visual or auditory content. The equivalent information must serve the same purpose as the visual or auditory content. Thus, a text equivalent for an image of an upward arrow that links to a table of contents could be "Go to table of contents". In some cases, an equivalent should also describe the appearance of visual content (e.g., for complex charts, billboards, or diagrams) or the sound of auditory content (e.g., for audio samples used in education).

This guideline emphasizes the importance of providing [<span class="dfn-instance">text equivalents</span>](#text-equivalent "Definition of text equivalent") of non-text content (images, pre-recorded audio, video). The power of text equivalents lies in their capacity to be rendered in ways that are accessible to people from various disability groups using a variety of technologies. Text can be readily output to speech synthesizers and [<span class="dfn-instance">braille displays</span>](#braille-display), and can be presented visually (in a variety of sizes) on computer displays and paper. Synthesized speech is critical for individuals who are blind and for many people with the reading difficulties that often accompany cognitive disabilities, learning disabilities, and deafness. Braille is essential for individuals who are both deaf and blind, as well as many individuals whose only sensory disability is blindness. Text displayed visually benefits users who are deaf as well as the majority of Web users.

Providing non-text equivalents (e.g., pictures, videos, and pre-recorded audio) of text is also beneficial to some users, especially nonreaders or people who have difficulty reading. In movies or visual presentations, visual action such as body language or other visual cues may not be accompanied by enough audio information to convey the same information. Unless verbal descriptions of this visual information are provided, people who cannot see (or look at) the visual content will not be able to perceive it.

#### <span id="q16">Checkpoints:</span>

<span class="checkpoint"><span id="tech-text-equivalent">1.1</span></span> Provide a text equivalent for every non-text element (e.g., via "alt", "longdesc", or in element content). *This includes*: images, graphical representations of text (including symbols), image map regions, animations (e.g., animated GIFs), applets and programmatic objects, ascii art, frames, scripts, images used as list bullets, spacers, graphical buttons, sounds (played with or without user interaction), stand-alone audio files, audio tracks of video, and video. <span class="priority1">\[Priority 1\]</span>   
For example, in HTML:

-   Use "alt" for the IMG, INPUT, and APPLET elements, or provide a text equivalent in the content of the OBJECT and APPLET elements.
-   For complex content (e.g., a chart) where the "alt" text does not provide a complete text equivalent, provide an additional description using, for example, "longdesc" with IMG or FRAME, a link inside an OBJECT element, or a [description link](#d-link).
-   For image maps, either use the "alt" attribute with AREA, or use the MAP element with A elements (and other text) as content.

Refer also to <a href="#tech-client-side-maps" class="noxref">checkpoint 9.1</a> and <a href="#tech-skip-over-ascii" class="noxref">checkpoint 13.10</a>.

[Techniques for checkpoint 1.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-text-equivalent "Provide a text equivalent for every non-text element")

<span class="checkpoint"><span id="tech-redundant-server-links">1.2</span></span> Provide redundant text links for each active region of a server-side image map. <span class="priority1">\[Priority 1\]</span>   
Refer also to <a href="#tech-redundant-client-links" class="noxref">checkpoint 1.5</a> and <a href="#tech-client-side-maps" class="noxref">checkpoint 9.1</a>.

[Techniques for checkpoint 1.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-redundant-server-links "Provide redundant text links for each active region of a server-side image map.")

<span class="checkpoint"><span id="tech-auditory-descriptions">1.3</span></span> [Until user agents](wai-pageauth.html#until-user-agents) can automatically read aloud the text equivalent of a visual track, provide an auditory description of the important information of the visual track of a multimedia presentation. <span class="priority1">\[Priority 1\]</span>   
Synchronize the [<span class="dfn-instance">auditory description</span>](#auditory-description) with the audio track as per <a href="#tech-synchronize-equivalents" class="noxref">checkpoint 1.4</a>. Refer to <a href="#tech-text-equivalent" class="noxref">checkpoint 1.1</a> for information about textual equivalents for visual information.

[Techniques for checkpoint 1.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-auditory-descriptions "provide an auditory description of the important information of the visual track of a multimedia presentation.")

<span class="checkpoint"><span id="tech-synchronize-equivalents">1.4</span></span> For any time-based multimedia presentation (e.g., a movie or animation), synchronize equivalent alternatives (e.g., captions or auditory descriptions of the visual track) with the presentation. <span class="priority1">\[Priority 1\]</span>   
[Techniques for checkpoint 1.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-synchronize-equivalents "synchronize equivalent alternatives (e.g., captions or auditory descriptions of the visual track) with the presentation.")

<span class="checkpoint"><span id="tech-redundant-client-links">1.5</span></span> [Until user agents](wai-pageauth.html#until-user-agents) render text equivalents for client-side image map links, provide redundant text links for each active region of a client-side image map. <span class="priority3">\[Priority 3\]</span>   
Refer also to <a href="#tech-redundant-server-links" class="noxref">checkpoint 1.2</a> and <a href="#tech-client-side-maps" class="noxref">checkpoint 9.1</a>.

[Techniques for checkpoint 1.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-redundant-client-links "provide redundant text links for each active region of a client-side image map.")

### Guideline 2. <span id="gl-color">Don't rely on color alone.</span>

[![Next guideline: 3](images/next.jpg)](#gl-structure-presentation) [![Previous guideline: 1](images/previous.jpg)](#gl-provide-equivalents) [![Go to contents](images/contents.jpg)](#toc-gl-color)

#### <span id="q18">Ensure that text and graphics are understandable when viewed without color.</span>

If color alone is used to convey information, people who cannot differentiate between certain colors and users with devices that have non-color or non-visual displays will not receive the information. When foreground and background colors are too close to the same hue, they may not provide sufficient contrast when viewed using monochrome displays or by people with different types of color deficits.

#### <span id="q19">Checkpoints:</span>

<span class="checkpoint"><span id="tech-color-convey">2.1</span></span> Ensure that all information conveyed with color is also available without color, for example from context or markup. <span class="priority1">\[Priority 1\]</span>   
[Techniques for checkpoint 2.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-color-convey "also available without color,")

<span class="checkpoint"><span id="tech-color-contrast">2.2</span></span> Ensure that foreground and background color combinations provide sufficient contrast when viewed by someone having color deficits or when viewed on a black and white screen. \[Priority 2 for images, Priority 3 for text\].   
[Techniques for checkpoint 2.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-color-contrast "color combinations provide sufficient contrast")

### Guideline 3. <span id="gl-structure-presentation">Use markup and style sheets and do so properly.</span>

[![Next guideline: 4](images/next.jpg)](#gl-abbreviated-and-foreign) [![Previous guideline: 2](images/previous.jpg)](#gl-color) [![Go to contents](images/contents.jpg)](#toc-gl-structure-presentation)

#### <span id="q21">Mark up documents with the proper structural elements. Control presentation with style sheets rather than with presentation elements and attributes.</span>

Using markup improperly -- not according to specification -- hinders accessibility. Misusing markup for a presentation effect (e.g., using a table for layout or a header to change the font size) makes it difficult for users with specialized software to understand the organization of the page or to navigate through it. Furthermore, using presentation markup rather than structural markup to convey structure (e.g., constructing what looks like a table of data with an HTML PRE element) makes it difficult to render a page intelligibly to other devices (refer to the description of [<span class="dfn-instance"> difference between content, structure, and presentation</span>](#content-structure "Definition of content/structure/presentation")).

Content developers may be tempted to use (or misuse) constructs that achieve a desired formatting effect on older browsers. They must be aware that these practices cause accessibility problems and must consider whether the formatting effect is so critical as to warrant making the document inaccessible to some users.

At the other extreme, content developers must not sacrifice appropriate markup because a certain browser or assistive technology does not process it correctly. For example, it is appropriate to use the TABLE element in HTML to mark up [<span class="dfn-instance">tabular information</span>](#tabular-information) even though some older screen readers may not handle side-by-side text correctly (refer to <a href="#tech-linear-tables" class="noxref">checkpoint 10.3</a>). Using TABLE correctly and creating tables that transform gracefully (refer to <a href="#gl-table-markup" class="noxref">guideline 5</a>) makes it possible for software to render tables other than as two-dimensional grids.

#### <span id="q22">Checkpoints:</span>

<span class="checkpoint"><span id="tech-use-markup">3.1</span></span> When an appropriate markup language exists, use markup rather than images to convey information. <span class="priority2">\[Priority 2\]</span>   
For example, use MathML to mark up mathematical equations, and [<span class="dfn-instance"> style sheets</span>](#style-sheet "Definition of style sheets") to format text and control layout. Also, avoid using images to represent text -- use text and style sheets instead. Refer also to <a href="#gl-new-technologies" class="noxref">guideline 6</a> and <a href="#gl-use-w3c" class="noxref">guideline 11</a>.

[Techniques for checkpoint 3.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-use-markup "use markup rather than images")

<span class="checkpoint"><span id="tech-identify-grammar">3.2</span></span> Create documents that validate to published formal grammars. <span class="priority2">\[Priority 2\]</span>   
For example, include a document type declaration at the beginning of a document that refers to a published DTD (e.g., the strict HTML 4.0 DTD).

[Techniques for checkpoint 3.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-grammar "Create documents that validate")

<span class="checkpoint"><span id="tech-style-sheets">3.3</span></span> Use style sheets to control layout and presentation. <span class="priority2">\[Priority 2\]</span>   
For example, use the CSS 'font' property instead of the HTML FONT element to control font styles.

[Techniques for checkpoint 3.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-style-sheets "Use style sheets to control layout and presentation.")

<span class="checkpoint"><span id="tech-relative-units">3.4</span></span> Use relative rather than absolute units in markup language attribute values and style sheet property values. <span class="priority2">\[Priority 2\]</span>   
For example, in CSS, use 'em' or percentage lengths rather than 'pt' or 'cm', which are absolute units. If absolute units are used, validate that the rendered content is usable (refer to the [section on validation](#validation)).

[Techniques for checkpoint 3.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-relative-units "Use relative rather than absolute units")

<span class="checkpoint"><span id="tech-logical-headings">3.5</span></span> Use header elements to convey document structure and use them according to specification. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, use H2 to indicate a subsection of H1. Do not use headers for font effects.

[Techniques for checkpoint 3.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-logical-headings "Use header elements to convey document structure")

<span class="checkpoint"><span id="tech-list-structure">3.6</span></span> Mark up lists and list items properly. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, nest OL, UL, and DL lists properly.

[Techniques for checkpoint 3.6](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-list-structure "Mark up lists and list items properly.")

<span class="checkpoint"><span id="tech-quotes">3.7</span></span> Mark up quotations. Do not use quotation markup for formatting effects such as indentation. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, use the Q and BLOCKQUOTE elements to markup short and longer quotations, respectively.

[Techniques for checkpoint 3.7](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-quotes "Mark up quotations.")

### Guideline 4. <span id="gl-abbreviated-and-foreign">Clarify natural language usage</span>

[![Next guideline: 5](images/next.jpg)](#gl-table-markup) [![Previous guideline: 3](images/previous.jpg)](#gl-structure-presentation) [![Go to contents](images/contents.jpg)](#toc-gl-abbreviated-and-foreign)

#### <span id="q24">Use markup that facilitates pronunciation or interpretation of abbreviated or foreign text.</span>

When content developers mark up natural language changes in a document, speech synthesizers and braille devices can automatically switch to the new language, making the document more accessible to multilingual users. Content developers should identify the predominant [<span class="dfn-instance">natural language</span>](#natural-language "Definition of natural language") of a document's content (through markup or HTTP headers). Content developers should also provide expansions of abbreviations and acronyms.

In addition to helping assistive technologies, natural language markup allows search engines to find key words and identify documents in a desired language. Natural language markup also improves readability of the Web for all people, including those with learning disabilities, cognitive disabilities, or people who are deaf.

When abbreviations and natural language changes are not identified, they may be indecipherable when machine-spoken or brailled.

#### <span id="q25">Checkpoints:</span>

<span class="checkpoint"><span id="tech-identify-changes">4.1</span></span> Clearly identify changes in the natural language of a document's text and any [<span class="dfn-instance"> text equivalents</span>](wai-pageauth.html#text-equivalent "Definition of text equivalent") (e.g., captions). <span class="priority1">\[Priority 1\]</span>   
For example, in HTML use the "lang" attribute. In XML, use "xml:lang".

[Techniques for checkpoint 4.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-changes "Clearly identify changes in the natural language of a document's text")

<span class="checkpoint"><span id="tech-expand-abbr">4.2</span></span> Specify the expansion of each abbreviation or acronym in a document where it first occurs. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, use the "title" attribute of the ABBR and ACRONYM elements. Providing the expansion in the main body of the document also helps document usability.

[Techniques for checkpoint 4.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-expand-abbr "Specify the expansion of each abbreviation or acronym in a document where it first occurs.")

<span class="checkpoint"><span id="tech-identify-lang">4.3</span></span> Identify the primary natural language of a document. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML set the "lang" attribute on the HTML element. In XML, use "xml:lang". Server operators should configure servers to take advantage of HTTP content negotiation mechanisms ([\[RFC2068\]](#ref-RFC2068), section 14.13) so that clients can automatically retrieve documents of the preferred language.

[Techniques for checkpoint 4.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-lang "Identify the primary natural language of a document.")

### Guideline 5. <span id="gl-table-markup">Create tables that transform gracefully.</span>

[![Next guideline: 6](images/next.jpg)](#gl-new-technologies) [![Previous guideline: 4](images/previous.jpg)](#gl-abbreviated-and-foreign) [![Go to contents](images/contents.jpg)](#toc-gl-table-markup)

#### <span id="q27">Ensure that tables have necessary markup to be transformed by accessible browsers and other user agents.</span>

Tables should be used to mark up truly [<span class="dfn-instance">tabular information</span>](#tabular-information) ("data tables"). Content developers should avoid using them to lay out pages ("layout tables"). Tables for any use also present special problems to users of [<span class="dfn-instance">screen readers</span>](#screen-reader "Definition of screen reader") (refer to <a href="#tech-linear-tables" class="noxref">checkpoint 10.3</a>).

Some [<span class="dfn-instance">user agents</span>](#user-agent "Definition of user agent") allow users to navigate among table cells and access header and other table cell information. Unless marked-up properly, these tables will not provide user agents with the appropriate information. (<a href="#gl-structure-presentation" class="noxref">Refer also to guideline 3</a>.)

The following checkpoints will directly benefit people who access a table through auditory means (e.g., a screen reader or an automobile-based personal computer) or who view only a portion of the page at a time (e.g., users with blindness or low vision using speech output or a [<span class="dfn-instance">braille display,</span>](#braille-display "Definition of braille display") or other users of devices with small displays, etc.).

#### <span id="q28">Checkpoints:</span>

<span class="checkpoint"><span id="tech-table-headers">5.1</span></span> For data tables, identify row and column headers. <span class="priority1">\[Priority 1\]</span>   
For example, in HTML, use TD to identify data cells and TH to identify headers.

[Techniques for checkpoint 5.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-headers "identify row and column headers.")

<span class="checkpoint"><span id="tech-table-structure">5.2</span></span> For data tables that have two or more logical levels of row or column headers, use markup to associate data cells and header cells. <span class="priority1">\[Priority 1\]</span>   
For example, in HTML, use THEAD, TFOOT, and TBODY to group rows, COL and COLGROUP to group columns, and the "axis", "scope", and "headers" attributes, to describe more complex relationships among data.

[Techniques for checkpoint 5.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-structure "use markup to associate data cells and header cells.")

<span class="checkpoint"><span id="tech-avoid-table-for-layout">5.3</span></span> Do not use tables for layout unless the table makes sense when linearized. Otherwise, if the table does not make sense, provide an alternative equivalent (which may be a [<span class="dfn-instance">linearized version</span>](wai-pageauth.html#linearized-table "Definition of linearized table")). <span class="priority2">\[Priority 2\]</span>   
**Note.** [<span class="dfn-instance">Once user agents</span>](#until-user-agents "Definition of until user agents") support style sheet positioning, tables should not be used for layout. <a href="#tech-style-sheets" class="noxref">Refer also to checkpoint 3.3</a>.

[Techniques for checkpoint 5.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-table-for-layout "Do not use tables for layout unless the table makes sense when linearized.")

<span class="checkpoint"><span id="tech-table-layout">5.4</span></span> If a table is used for layout, do not use any structural markup for the purpose of visual formatting. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML do not use the TH element to cause the content of a (non-table header) cell to be displayed centered and in bold.

[Techniques for checkpoint 5.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-layout "do not use any structural markup for the purpose of visual formatting.")

<span class="checkpoint"><span id="tech-table-summaries">5.5</span></span> Provide summaries for tables. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, use the "summary" attribute of the TABLE element.

[Techniques for checkpoint 5.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-summaries "Provide summaries for tables.")

<span class="checkpoint"><span id="tech-abbreviate-labels">5.6</span></span> Provide abbreviations for header labels. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, use the "abbr" attribute on the TH element.

[Techniques for checkpoint 5.6](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-abbreviate-labels "Provide abbreviations for header labels.")

<a href="#tech-linear-tables" class="noxref">Refer also to checkpoint 10.3</a>.

### Guideline 6. <span id="gl-new-technologies">Ensure that pages featuring new technologies transform gracefully.</span>

[![Next guideline: 7](images/next.jpg)](#gl-movement) [![Previous guideline: 5](images/previous.jpg)](#gl-table-markup) [![Go to contents](images/contents.jpg)](#toc-gl-new-technologies)

#### <span id="q30">Ensure that pages are accessible even when newer technologies are not supported or are turned off.</span>

Although content developers are encouraged to use new technologies that solve problems raised by existing technologies, they should know how to make their pages still work with older browsers and people who choose to turn off features.

#### <span id="q31">Checkpoints:</span>

<span class="checkpoint"><span id="tech-order-style-sheets">6.1</span></span> Organize documents so they may be read without style sheets. For example, when an HTML document is rendered without associated style sheets, it must still be possible to read the document. <span class="priority1">\[Priority 1\]</span>   
When content is organized logically, it will be rendered in a meaningful order when style sheets are turned off or not supported.

[Techniques for checkpoint 6.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-order-style-sheets "Organize documents so they may be read without style sheets.")

<span class="checkpoint"><span id="tech-dynamic-source">6.2</span></span> Ensure that equivalents for dynamic content are updated when the dynamic content changes. <span class="priority1">\[Priority 1\]</span>   
[Techniques for checkpoint 6.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-dynamic-source "Ensure that equivalents for dynamic content are updated")

<span class="checkpoint"><span id="tech-scripts">6.3</span></span> Ensure that pages are usable when scripts, applets, or other programmatic objects are turned off or not supported. If this is not possible, provide equivalent information on an alternative accessible page. <span class="priority1">\[Priority 1\]</span>   
For example, ensure that links that trigger scripts work when scripts are turned off or not supported (e.g., do not use "javascript:" as the link target). If it is not possible to make the page usable without scripts, provide a text equivalent with the NOSCRIPT element, or use a server-side script instead of a client-side script, or provide an alternative accessible page as per <a href="#tech-alt-pages" class="noxref">checkpoint 11.4</a>. <a href="#gl-provide-equivalents" class="noxref">Refer also to guideline 1</a>.

[Techniques for checkpoint 6.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-scripts "Ensure that pages are usable when scripts, applets, or other programmatic objects are turned off or not supported.")

<span class="checkpoint"><span id="tech-keyboard-operable-scripts">6.4</span></span> For scripts and applets, ensure that event handlers are input device-independent. <span class="priority2">\[Priority 2\]</span>   
Refer to the definition of [device independence](#device-independent).

[Techniques for checkpoint 6.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-operable-scripts "ensure that event handlers are input device-independent.")

<span class="checkpoint"><span id="tech-fallback-page">6.5</span></span> Ensure that dynamic content is accessible or provide an alternative presentation or page. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, use NOFRAMES at the end of each frameset. For some applications, server-side scripts may be more accessible than client-side scripts.

[Techniques for checkpoint 6.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-fallback-page "Ensure that dynamic content is accessible")

<a href="#tech-alt-pages" class="noxref">Refer also to checkpoint 11.4</a>.

### Guideline 7. <span id="gl-movement">Ensure user control of time-sensitive content changes.</span>

[![Next guideline: 8](images/next.jpg)](#gl-own-interface) [![Previous guideline: 6](images/previous.jpg)](#gl-new-technologies) [![Go to contents](images/contents.jpg)](#toc-gl-movement)

#### <span id="q33">Ensure that moving, blinking, scrolling, or auto-updating objects or pages may be paused or stopped.</span>

Some people with cognitive or visual disabilities are unable to read moving text quickly enough or at all. Movement can also cause such a distraction that the rest of the page becomes unreadable for people with cognitive disabilities. [<span class="dfn-instance">Screen readers</span>](#screen-reader "Definition of screen reader") are unable to read moving text. People with physical disabilities might not be able to move quickly or accurately enough to interact with moving objects.

**Note.** All of the following checkpoints involve some content developer responsibility [<span class="dfn-instance">until user agents</span>](#until-user-agents "Definition of until user agents") provide adequate feature control mechanisms.

#### <span id="q34">Checkpoints:</span>

<span class="checkpoint"><span id="tech-avoid-flicker">7.1</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") allow users to control flickering, avoid causing the screen to flicker. <span class="priority1">\[Priority 1\]</span>   
**Note.** People with photosensitive epilepsy can have seizures triggered by flickering or flashing in the 4 to 59 flashes per second (Hertz) range with a peak sensitivity at 20 flashes per second as well as quick changes from dark to light (like strobe lights).

[Techniques for checkpoint 7.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-flicker "avoid causing the screen to flicker.")

<span class="checkpoint"><span id="tech-avoid-blinking">7.2</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") allow users to control blinking, avoid causing content to blink (i.e., change presentation at a regular rate, such as turning on and off). <span class="priority2">\[Priority 2\]</span>   
[Techniques for checkpoint 7.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-blinking "avoid causing content to blink")

<span class="checkpoint"><span id="tech-avoid-movement">7.3</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") allow users to freeze moving content, avoid movement in pages. <span class="priority2">\[Priority 2\]</span>   
When a page includes moving content, provide a mechanism within a script or applet to allow users to freeze motion or updates. Using style sheets with scripting to create movement allows users to turn off or override the effect more easily. <a href="#gl-own-interface" class="noxref">Refer also to guideline 8</a>.

[Techniques for checkpoint 7.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-movement "avoid movement in pages.")

<span class="checkpoint"><span id="tech-no-periodic-refresh">7.4</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") provide the ability to stop the refresh, do not create periodically auto-refreshing pages. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, don't cause pages to auto-refresh with "HTTP-EQUIV=refresh" until user agents allow users to turn off the feature.

[Techniques for checkpoint 7.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-no-periodic-refresh "do not create periodically auto-refreshing pages.")

<span class="checkpoint"><span id="tech-no-auto-forward">7.5</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") provide the ability to stop auto-redirect, do not use markup to redirect pages automatically. Instead, configure the server to perform redirects. <span class="priority2">\[Priority 2\]</span>   
[Techniques for checkpoint 7.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-no-auto-forward "do not use markup to redirect pages automatically.")

**Note.** The BLINK and MARQUEE elements are not defined in any W3C HTML specification and should not be used. <a href="#gl-use-w3c" class="noxref">Refer also to guideline 11</a>.

### Guideline 8. <span id="gl-own-interface">Ensure direct accessibility of embedded user interfaces.</span>

[![Next guideline: 9](images/next.jpg)](#gl-device-independence) [![Previous guideline: 7](images/previous.jpg)](#gl-movement) [![Go to contents](images/contents.jpg)](#toc-gl-own-interface)

#### <span id="q36">Ensure that the user interface follows principles of accessible design: device-independent access to functionality, keyboard operability, self-voicing, etc.</span>

When an embedded object has its "own interface", the interface -- like the interface to the browser itself -- must be accessible. If the interface of the embedded object cannot be made accessible, an alternative accessible solution must be provided.

**Note.** For information about accessible interfaces, please consult the User Agent Accessibility Guidelines ([\[WAI-USERAGENT\]](#ref-WAI-USERAGENT)) and the Authoring Tool Accessibility Guidelines ([\[WAI-AUTOOL\]](#ref-WAI-USERAGENT)).

#### <span id="q37">Checkpoint:</span>

<span class="checkpoint"><span id="tech-directly-accessible">8.1</span></span> Make programmatic elements such as scripts and applets directly accessible or compatible with assistive technologies \[<span class="priority1">Priority 1</span> if functionality is [<span class="dfn-instance">important</span>](wai-pageauth.html#important "Definition of important") and not presented elsewhere, otherwise Priority 2.\]   
<a href="#gl-new-technologies" class="noxref">Refer also to guideline 6</a>.

[Techniques for checkpoint 8.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-directly-accessible "Make programmatic elements")

### Guideline 9. <span id="gl-device-independence">Design for device-independence.</span>

[![Next guideline: 10](images/next.jpg)](#gl-interim-accessibility) [![Previous guideline: 8](images/previous.jpg)](#gl-own-interface) [![Go to contents](images/contents.jpg)](#toc-gl-device-independence)

#### <span id="q39">Use features that enable activation of page elements via a variety of input devices.</span>

[Device-independent](#device-independent) access means that the user may interact with the user agent or document with a preferred input (or output) device -- mouse, keyboard, voice, head wand, or other. If, for example, a form control can only be activated with a mouse or other pointing device, someone who is using the page without sight, with voice input, or with a keyboard or who is using some other non-pointing input device will not be able to use the form.

**Note.** Providing text equivalents for image maps or images used as links makes it possible for users to interact with them without a pointing device. <a href="#gl-provide-equivalents" class="noxref">Refer also to guideline 1</a>.

Generally, pages that allow keyboard interaction are also accessible through speech input or a command line interface.

#### <span id="q40">Checkpoints:</span>

<span class="checkpoint"><span id="tech-client-side-maps">9.1</span></span> Provide client-side image maps instead of server-side image maps except where the regions cannot be defined with an available geometric shape. <span class="priority1">\[Priority 1\]</span>   
Refer also to <a href="#tech-text-equivalent" class="noxref">checkpoint 1.1</a>, <a href="#tech-redundant-server-links" class="noxref">checkpoint 1.2</a>, and <a href="#tech-redundant-client-links" class="noxref">checkpoint 1.5</a>.

[Techniques for checkpoint 9.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-client-side-maps "Provide client-side image maps instead of server-side image maps")

<span class="checkpoint"><span id="tech-keyboard-operable">9.2</span></span> Ensure that any element that has its own interface can be operated in a device-independent manner. <span class="priority2">\[Priority 2\]</span>   
Refer to the definition of [device independence](#device-independent).

<a href="#gl-own-interface" class="noxref">Refer also to guideline 8</a>.

[Techniques for checkpoint 9.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-operable "Ensure that any element that has its own interface can be operated in a device-independent manner.")

<span class="checkpoint"><span id="tech-device-independent-events">9.3</span></span> For scripts, specify logical event handlers rather than device-dependent event handlers. <span class="priority2">\[Priority 2\]</span>   
[Techniques for checkpoint 9.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-device-independent-events "specify logical event handlers rather than device-dependent event handlers.")

<span class="checkpoint"><span id="tech-tab-order">9.4</span></span> Create a logical tab order through links, form controls, and objects. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, specify tab order via the "tabindex" attribute or ensure a logical page design.

[Techniques for checkpoint 9.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-tab-order "Create a logical tab order")

<span class="checkpoint"><span id="tech-keyboard-shortcuts">9.5</span></span> Provide keyboard shortcuts to important links (including those in [<span class="dfn-instance">client-side image maps</span>](wai-pageauth.html#image-map "Definition of client-side image map")), form controls, and groups of form controls. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, specify shortcuts via the "accesskey" attribute.

[Techniques for checkpoint 9.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-shortcuts "Provide keyboard shortcuts to important links")

### Guideline 10. <span id="gl-interim-accessibility">Use interim solutions.</span>

[![Next guideline: 11](images/next.jpg)](#gl-use-w3c) [![Previous guideline: 9](images/previous.jpg)](#gl-device-independence) [![Go to contents](images/contents.jpg)](#toc-gl-interim-accessibility)

#### <span id="q42">Use interim accessibility solutions so that assistive technologies and older browsers will operate correctly.</span>

For example, older browsers do not allow users to navigate to empty edit boxes. Older screen readers read lists of consecutive links as one link. These active elements are therefore difficult or impossible to access. Also, changing the current window or popping up new windows can be very disorienting to users who cannot see that this has happened.

**Note.** The following checkpoints apply [<span class="dfn-instance">until user agents</span>](#until-user-agents "Definition of until user
agents") (including [<span class="dfn-instance">assistive technologies</span>](#assistive-tech "Definition of assistive
technology")) address these issues. These checkpoints are classified as "interim", meaning that the Web Content Guidelines Working Group considers them to be valid and necessary to Web accessibility *as of the publication of this document*. However, the Working Group does not expect these checkpoints to be necessary in the future, once Web technologies have incorporated anticipated features or capabilities.

#### <span id="q43">Checkpoints:</span>

<span class="checkpoint"><span id="tech-avoid-pop-ups">10.1</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") allow users to turn off spawned windows, do not cause pop-ups or other windows to appear and do not change the current window without informing the user. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, avoid using a frame whose target is a new window.

[Techniques for checkpoint 10.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-pop-ups "do not cause pop-ups or other windows")

<span class="checkpoint"><span id="tech-unassociated-labels">10.2</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") support explicit associations between labels and form controls, for all form controls with implicitly associated labels, ensure that the label is properly positioned. <span class="priority2">\[Priority 2\]</span>   
The label must immediately precede its control on the same line (allowing more than one control/label per line) or be in the line preceding the control (with only one label and one control per line). <a href="#tech-associate-labels" class="noxref">Refer also to checkpoint 12.4</a>.

[Techniques for checkpoint 10.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-unassociated-labels "ensure that the label is properly positioned.")

<span class="checkpoint"><span id="tech-linear-tables">10.3</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") (including assistive technologies) render side-by-side text correctly, provide a linear text alternative (on the current page or some other) for *all* tables that lay out text in parallel, word-wrapped columns. <span class="priority3">\[Priority 3\]</span>   
**Note.** Please consult the definition of [<span class="dfn-instance">linearized table</span>](#linearized-table). This checkpoint benefits people with [<span class="dfn-instance">user agents</span>](#user-agent "Definition of user agent") (such as some [<span class="dfn-instance">screen readers</span>](#screen-reader "Definition of screen reader")) that are unable to handle blocks of text presented side-by-side; the checkpoint should not discourage content developers from using tables to represent [<span class="dfn-instance">tabular information</span>](#tabular-information).

[Techniques for checkpoint 10.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-linear-tables "provide a linear text alternative")

<span class="checkpoint"><span id="tech-place-holders">10.4</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") handle empty controls correctly, include default, place-holding characters in edit boxes and text areas. <span class="priority3">\[Priority 3\]</span>   
For example, in HTML, do this for TEXTAREA and INPUT.

[Techniques for checkpoint 10.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-place-holders "include default, place-holding characters")

<span class="checkpoint"><span id="tech-divide-links">10.5</span></span> [<span class="dfn-instance">Until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") (including assistive technologies) render adjacent links distinctly, include non-link, printable characters (surrounded by spaces) between adjacent links. <span class="priority3">\[Priority 3\]</span>   
[Techniques for checkpoint 10.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-divide-links "include non-link, printable characters")

### Guideline 11. <span id="gl-use-w3c">Use W3C technologies and guidelines.</span>

[![Next guideline: 12](images/next.jpg)](#gl-complex-elements) [![Previous guideline: 10](images/previous.jpg)](#gl-interim-accessibility) [![Go to contents](images/contents.jpg)](#toc-gl-use-w3c)

#### <span id="q45">Use W3C technologies (according to specification) and follow accessibility guidelines. Where it is not possible to use a W3C technology, or doing so results in material that does not transform gracefully, provide an alternative version of the content that is accessible.</span>

The current guidelines recommend W3C technologies (e.g., HTML, CSS, etc.) for several reasons:

-   W3C technologies include "built-in" accessibility features.
-   W3C specifications undergo early review to ensure that accessibility issues are considered during the design phase.
-   W3C specifications are developed in an open, industry consensus process.

Many non-W3C formats (e.g., PDF, Shockwave, etc.) require viewing with either plug-ins or stand-alone applications. Often, these formats cannot be viewed or navigated with standard [<span class="dfn-instance">user agents</span>](#user-agent "Definition of user agent") (including [<span class="dfn-instance">assistive technologies</span>](#assistive-tech "Definition of assistive
technology")). Avoiding non-W3C and non-standard features (proprietary elements, attributes, properties, and extensions) will tend to make pages more accessible to more people using a wider variety of hardware and software. When inaccessible technologies (proprietary or not) must be used, equivalent accessible pages must be provided.

Even when W3C technologies are used, they must be used in accordance with accessibility guidelines. When using new technologies, ensure that they transform gracefully (<a href="#gl-new-technologies" class="noxref">Refer also to guideline 6</a>.).

**Note.** Converting documents (from PDF, PostScript, RTF, etc.) to W3C markup languages (HTML, XML) does not always create an accessible document. Therefore, validate each page for accessibility and usability after the conversion process (refer to the [section on validation](#validation)). If a page does not readily convert, either revise the page until its original representation converts appropriately or provide an HTML or plain text version.

#### <span id="q46">Checkpoints:</span>

<span class="checkpoint"><span id="tech-latest-w3c-specs">11.1</span></span> Use W3C technologies when they are available and appropriate for a task and use the latest versions when supported. <span class="priority2">\[Priority 2\]</span>   
Refer to the [list of references](#References) for information about where to find the latest W3C specifications and [\[WAI-UA-SUPPORT\]](#ref-WAI-UA-SUPPORT) for information about user agent support for W3C technologies.

[Techniques for checkpoint 11.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-latest-w3c-specs "Use W3C technologies when they are available and appropriate for a task and use the latest versions when supported.")

<span class="checkpoint"><span id="tech-avoid-deprecated">11.2</span></span> Avoid deprecated features of W3C technologies. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, don't use the [<span class="dfn-instance">deprecated</span>](#deprecated "Definition of deprecated") FONT element; use style sheets instead (e.g., the 'font' property in CSS).

[Techniques for checkpoint 11.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-deprecated "Avoid deprecated features of W3C technologies.")

<span class="checkpoint"><span id="tech-content-preferences">11.3</span></span> Provide information so that users may receive documents according to their preferences (e.g., language, content type, etc.) <span class="priority3">\[Priority 3\]</span>   
**Note.** Use content negotiation where possible.

[Techniques for checkpoint 11.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-content-preferences "receive documents according to their preferences")

<span class="checkpoint"><span id="tech-alt-pages">11.4</span></span> If, [after best efforts](wai-pageauth.html#alt-page-note), you cannot create an [<span class="dfn-instance">accessible</span>](wai-pageauth.html#accessible) page, provide a link to an alternative page that uses W3C technologies, is accessible, has [<span class="dfn-instance">equivalent</span>](wai-pageauth.html#equivalent) information (or functionality), and is updated as often as the inaccessible (original) page. <span class="priority1">\[Priority 1\]</span>   
[Techniques for checkpoint 11.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-alt-pages "provide a link to an alternative page")

<span id="alt-page-note">**Note.**</span> Content developers should only resort to alternative pages when other solutions fail because alternative pages are generally updated less often than "primary" pages. An out-of-date page may be as frustrating as one that is inaccessible since, in both cases, the information presented on the original page is unavailable. Automatically generating alternative pages may lead to more frequent updates, but content developers must still be careful to ensure that generated pages always make sense, and that users are able to navigate a site by following links on primary pages, alternative pages, or both. Before resorting to an alternative page, reconsider the design of the original page; making it accessible is likely to improve it for all users.

### Guideline 12. <span id="gl-complex-elements">Provide context and orientation information.</span>

[![Next guideline: 13](images/next.jpg)](#gl-facilitate-navigation) [![Previous guideline: 11](images/previous.jpg)](#gl-use-w3c) [![Go to contents](images/contents.jpg)](#toc-gl-complex-elements)

#### <span id="q48">Provide context and orientation information to help users understand complex pages or elements.</span>

Grouping elements and providing contextual information about the relationships between elements can be useful for all users. Complex relationships between parts of a page may be difficult for people with cognitive disabilities and people with visual disabilities to interpret.

#### <span id="q49">Checkpoints:</span>

<span class="checkpoint"><span id="tech-frame-titles">12.1</span></span> Title each frame to facilitate frame identification and navigation. <span class="priority1">\[Priority 1\]</span>   
For example, in HTML use the "title" attribute on FRAME elements.

[Techniques for checkpoint 12.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-frame-titles "Title each frame")

<span class="checkpoint"><span id="tech-frame-longdesc">12.2</span></span> Describe the purpose of frames and how frames relate to each other if it is not obvious by frame titles alone. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, use "longdesc," or a [<span class="dfn-instance">description link.</span>](#d-link "Definition of description link/d-link")

[Techniques for checkpoint 12.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-frame-longdesc "Describe the purpose of frames")

<span class="checkpoint"><span id="tech-group-information">12.3</span></span> Divide large blocks of information into more manageable groups where natural and appropriate. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML, use OPTGROUP to group OPTION elements inside a SELECT; group form controls with FIELDSET and LEGEND; use nested lists where appropriate; use headings to structure documents, etc. <a href="#gl-structure-presentation" class="noxref">Refer also to guideline 3</a>.

[Techniques for checkpoint 12.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-group-information "Divide large blocks of information into more manageable groups")

<span class="checkpoint"><span id="tech-associate-labels">12.4</span></span> Associate labels explicitly with their controls. <span class="priority2">\[Priority 2\]</span>   
For example, in HTML use LABEL and its "for" attribute.

[Techniques for checkpoint 12.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-associate-labels "Associate labels explicitly with their controls.")

### Guideline 13. <span id="gl-facilitate-navigation">Provide clear navigation mechanisms.</span>

[![Next guideline: 14](images/next.jpg)](#gl-facilitate-comprehension) [![Previous guideline: 12](images/previous.jpg)](#gl-complex-elements) [![Go to contents](images/contents.jpg)](#toc-gl-facilitate-navigation)

#### <span id="q51">Provide clear and consistent navigation mechanisms -- orientation information, navigation bars, a site map, etc. -- to increase the likelihood that a person will find what they are looking for at a site.</span>

Clear and consistent [<span class="dfn-instance">navigation mechanisms</span>](#nav-mechanism) are important to people with cognitive disabilities or blindness, and benefit all users.

#### <span id="q52">Checkpoints:</span>

<span class="checkpoint"><span id="tech-meaningful-links">13.1</span></span> Clearly identify the target of each link. <span class="priority2">\[Priority 2\]</span>   
[<span class="dfn-instance">Link text</span>](#link-text "Definition of link text") should be meaningful enough to make sense when read out of context -- either on its own or as part of a sequence of links. Link text should also be terse.

For example, in HTML, write "Information about version 4.3" instead of "click here". In addition to clear link text, content developers may further clarify the target of a link with an informative link title (e.g., in HTML, the "title" attribute).

[Techniques for checkpoint 13.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-meaningful-links "Clearly identify the target of each link.")

<span class="checkpoint"><span id="tech-use-metadata">13.2</span></span> Provide metadata to add semantic information to pages and sites. <span class="priority2">\[Priority 2\]</span>   
For example, use RDF ([\[RDF\]](#ref-RDF)) to indicate the document's author, the type of content, etc.

**Note.** Some HTML [<span class="dfn-instance">user agents</span>](#user-agent) can build navigation tools from document relations described by the HTML LINK element and "rel" or "rev" attributes (e.g., rel="next", rel="previous", rel="index", etc.). <a href="#tech-nav-bar" class="noxref">Refer also to checkpoint 13.5</a>.

[Techniques for checkpoint 13.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-use-metadata "Provide metadata to add semantic information")

<span class="checkpoint"><span id="tech-site-description">13.3</span></span> Provide information about the general layout of a site (e.g., a site map or table of contents). <span class="priority2">\[Priority 2\]</span>   
In describing site layout, highlight and explain available accessibility features.

[Techniques for checkpoint 13.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-site-description "Provide information about the general layout of a site")

<span class="checkpoint"><span id="tech-clear-nav-mechanism">13.4</span></span> Use navigation mechanisms in a consistent manner. <span class="priority2">\[Priority 2\]</span>   
[Techniques for checkpoint 13.4](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-clear-nav-mechanism "Use navigation mechanisms in a consistent manner.")

<span class="checkpoint"><span id="tech-nav-bar">13.5</span></span> Provide navigation bars to highlight and give access to the navigation mechanism. <span class="priority3">\[Priority 3\]</span>   
[Techniques for checkpoint 13.5](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-nav-bar "Provide navigation bars")

<span class="checkpoint"><span id="tech-group-links">13.6</span></span> Group related links, identify the group (for user agents), and, [<span class="dfn-instance">until user agents</span>](wai-pageauth.html#until-user-agents "Definition of until user agents") do so, provide a way to bypass the group. <span class="priority3">\[Priority 3\]</span>   
[Techniques for checkpoint 13.6](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-group-links "Group related links,")

<span class="checkpoint"><span id="tech-searches">13.7</span></span> If search functions are provided, enable different types of searches for different skill levels and preferences. <span class="priority3">\[Priority 3\]</span>   
[Techniques for checkpoint 13.7](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-searches "enable different types of searches for different skill levels and preferences.")

<span class="checkpoint"><span id="tech-front-loading">13.8</span></span> Place distinguishing information at the beginning of headings, paragraphs, lists, etc. <span class="priority3">\[Priority 3\]</span>   
**Note.** This is commonly referred to as "front-loading" and is especially helpful for people accessing information with serial devices such as speech synthesizers.

[Techniques for checkpoint 13.8](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-front-loading "Place distinguishing information at the beginning")

<span class="checkpoint"><span id="tech-bundled-version">13.9</span></span> Provide information about document collections (i.e., documents comprising multiple pages.). <span class="priority3">\[Priority 3\]</span>   
For example, in HTML specify document collections with the LINK element and the "rel" and "rev" attributes. Another way to create a collection is by building an archive (e.g., with zip, tar and gzip, stuffit, etc.) of the multiple pages.

**Note.** The performance improvement gained by offline processing can make browsing much less expensive for people with disabilities who may be browsing slowly.

[Techniques for checkpoint 13.9](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-bundled-version "Provide information about document collections")

<span class="checkpoint"><span id="tech-skip-over-ascii">13.10</span></span> Provide a means to skip over multi-line ASCII art. <span class="priority3">\[Priority 3\]</span>   
Refer to <a href="#tech-text-equivalent" class="noxref">checkpoint 1.1</a> and [the example of ascii art in the glossary](#ascii-art).

[Techniques for checkpoint 13.10](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-skip-over-ascii "Provide a means to skip over multi-line ASCII art.")

### Guideline 14. <span id="gl-facilitate-comprehension">Ensure that documents are clear and simple.</span>

[![Next guideline: 1](images/next.jpg)](#gl-provide-equivalents) [![Previous guideline: 13](images/previous.jpg)](#gl-facilitate-navigation) [![Go to contents](images/contents.jpg)](#toc-gl-facilitate-comprehension)

#### <span id="q54">Ensure that documents are clear and simple so they may be more easily understood.</span>

Consistent page layout, recognizable graphics, and easy to understand language benefit all users. In particular, they help people with cognitive disabilities or who have difficulty reading. (However, ensure that images have text equivalents for people who are blind, have low vision, or for any user who cannot or has chosen not to view graphics. <a href="#gl-provide-equivalents" class="noxref">Refer also to guideline 1</a>.)

Using clear and simple language promotes effective communication. Access to written information can be difficult for people who have cognitive or learning disabilities. Using clear and simple language also benefits people whose first language differs from your own, including those people who communicate primarily in sign language.

#### <span id="q55">Checkpoints:</span>

<span class="checkpoint"><span id="tech-simple-and-straightforward">14.1</span></span> Use the clearest and simplest language appropriate for a site's content. <span class="priority1">\[Priority 1\]</span>   
[Techniques for checkpoint 14.1](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-simple-and-straightforward "Use the clearest and simplest language")

<span class="checkpoint"><span id="tech-icons">14.2</span></span> Supplement text with graphic or auditory presentations where they will facilitate comprehension of the page. <span class="priority3">\[Priority 3\]</span>   
<a href="#gl-provide-equivalents" class="noxref">Refer also to guideline 1</a>.

[Techniques for checkpoint 14.2](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-icons "Supplement text with graphic or auditory presentations where they will facilitate comprehension")

<span class="checkpoint"><span id="tech-consistent-style">14.3</span></span> Create a style of presentation that is consistent across pages. <span class="priority3">\[Priority 3\]</span>   
[Techniques for checkpoint 14.3](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-consistent-style "Create a style of presentation that is consistent across pages.")

------------------------------------------------------------------------

<span id="validation">Appendix A. -- Validation</span>
------------------------------------------------------

**Validate accessibility with automatic tools and human review. Automated methods are generally rapid and convenient but cannot identify all accessibility issues. Human review can help ensure clarity of language and ease of navigation.**

Begin using validation methods at the earliest stages of development. Accessibility issues identified early are easier to correct and avoid.

Following are some important validation methods, discussed in more detail in the [section on validation in the Techniques Document](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS#validation).

1.  Use an automated accessibility tool and browser validation tool. Please note that software tools do not address all accessibility issues, such as the meaningfulness of link text, the applicability of a [<span class="dfn-instance">text equivalent</span>](#text-equivalent "Definition of text equivalent"), etc.
2.  Validate syntax (e.g., HTML, XML, etc.).
3.  Validate style sheets (e.g., CSS).
4.  Use a text-only browser or emulator.
5.  Use multiple graphic browsers, with:
    -   sounds and graphics loaded,
    -   graphics not loaded,
    -   sounds not loaded,
    -   no mouse,
    -   frames, scripts, style sheets, and applets not loaded
6.  Use several browsers, old and new.
7.  Use a self-voicing browser, a screen reader, magnification software, a small display, etc.
8.  Use spell and grammar checkers. A person reading a page with a speech synthesizer may not be able to decipher the synthesizer's best guess for a word with a spelling error. Eliminating grammar problems increases comprehension.
9.  Review the document for clarity and simplicity. Readability statistics, such as those generated by some word processors may be useful indicators of clarity and simplicity. Better still, ask an experienced (human) editor to review written content for clarity. Editors can also improve the usability of documents by identifying potentially sensitive cultural issues that might arise due to language or icon usage.
10. Invite people with disabilities to review documents. Expert and novice users with disabilities will provide valuable feedback about accessibility or usability problems and their severity.

------------------------------------------------------------------------

<span id="glossary">Appendix B. -- Glossary</span>
--------------------------------------------------

<span id="accessible">**Accessible**</span>  
Content is accessible when it may be used by someone with a disability.

<span id="applet">**Applet**</span>  
A program inserted into a Web page.

<span id="assistive-tech">**Assistive technology**</span>  
Software or hardware that has been specifically designed to assist people with disabilities in carrying out daily activities. Assistive technology includes wheelchairs, reading machines, devices for grasping, etc. In the area of Web Accessibility, common software-based assistive technologies include screen readers, screen magnifiers, speech synthesizers, and voice input software that operate in conjunction with graphical desktop browsers (among other [<span class="dfn-instance">user agents</span>](#user-agent)). Hardware assistive technologies include alternative keyboards and pointing devices.

<span id="ascii-art">**ASCII art**</span>  
ASCII art refers to text characters and symbols that are combined to create an image. For example ";-)" is the smiley emoticon. The following is an ascii figure showing the relationship between flash frequency and photoconvulsive response in patients with eyes open and closed \[<a href="#authoring-tool" id="ascii-chart">skip over ascii figure</a> or consult a [description of chart](images/ascii-chart-longdesc.html)\]:

      %   __ __ __ __ __ __ __ __ __ __ __ __ __ __
    100 |             *                             |
     90 |                *  *                       |
     80 |          *           *                    |
     70 |             @           *                 |
     60 |          @                 *              |
     50 |       *        @              *           |
     40 |                   @              *        |
     30 |    *  @              @  @           *     |
     20 |                                           |
     10 |    @                       @  @  @  @     |
          0  5 10 15 20 25 30 35 40 45 50 55 60 65 70
          Flash frequency (Hertz)

<span id="authoring-tool">**Authoring tool**</span>  
HTML editors, document conversion tools, tools that generate Web content from databases are all authoring tools. Refer to the "Authoring Tool Accessibility Guidelines" ([\[WAI-AUTOOLS\]](#ref-WAI-AUTOOLS)) for information about developing accessible tools.

<span id="backward-compatible">**Backward compatible**</span>  
Design that continues to work with earlier versions of a language, program, etc.

<span id="braille">**Braille**</span>  
Braille uses six raised dots in different patterns to represent letters and numbers to be read by people who are blind with their fingertips. The word "Accessible" in braille follows:

<img src="images/access.gif" alt="Accessible" width="300" height="75" />

A <span id="braille-display">**braille display**,</span> commonly referred to as a "dynamic braille display," raises or lowers dot patterns on command from an electronic device, usually a computer. The result is a line of braille that can change from moment to moment. Current dynamic braille displays range in size from one cell (six or eight dots) to an eighty-cell line, most having between twelve and twenty cells per line.

<span id="content-developer">**Content developer**</span>  
Someone who authors Web pages or designs Web sites.

<span id="deprecated">**Deprecated**</span>   
A deprecated element or attribute is one that has been outdated by newer constructs. Deprecated elements may become obsolete in future versions of HTML. The [index of HTML elements and attributes in the Techniques Document](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS#html-index) indicates which elements and attributes are deprecated in HTML 4.0.

Authors should avoid using deprecated elements and attributes. User agents should continue to support for reasons of backward compatibility.

<span id="device-independent">**Device independent**</span>  
Users must be able to interact with a user agent (and the document it renders) using the supported input and output devices of their choice and according to their needs. Input devices may include pointing devices, keyboards, braille devices, head wands, microphones, and others. Output devices may include monitors, speech synthesizers, and braille devices.

Please note that "device-independent support" does not mean that user agents must support every input or output device. User agents should offer redundant input and output mechanisms for those devices that are supported. For example, if a user agent supports keyboard and mouse input, users should be able to interact with all features using either the keyboard or the mouse.

<span id="content-structure">**Document Content, Structure, and Presentation**</span>  
The content of a document refers to what it says to the user through natural language, images, sounds, movies, animations, etc. The structure of a document is how it is organized logically (e.g., by chapter, with an introduction and table of contents, etc.). An [<span class="dfn-instance">element</span>](#element) (e.g., P, STRONG, BLOCKQUOTE in HTML) that specifies document structure is called a <span id="structural-element">structural element</span>. The presentation of a document is how the document is rendered (e.g., as print, as a two-dimensional graphical presentation, as an text-only presentation, as synthesized speech, as braille, etc.) An [<span class="dfn-instance">element</span>](#element) that specifies document presentation (e.g., B, FONT, CENTER) is called a <span id="presentation-element">presentation element</span>.

Consider a document header, for example. The content of the header is what the header says (e.g., "Sailboats"). In HTML, the header is a structural element marked up with, for example, an H2 element. Finally, the presentation of the header might be a bold block text in the margin, a centered line of text, a title spoken with a certain voice style (like an aural font), etc.

<span id="dhtml">**Dynamic HTML (DHTML)**</span>  
DHTML is the marketing term applied to a mixture of standards including HTML, [<span class="dfn-instance"> style sheets</span>](#style-sheet "Definition of style sheets"), the Document Object Model [\[DOM1\]](#ref-DOM1) and scripting. However, there is no W3C specification that formally defines DHTML. Most guidelines may be applicable to applications using DHTML, however the following guidelines focus on issues related to scripting and style sheets: <a href="#gl-provide-equivalents" class="noxref">guideline 1</a>, <a href="#gl-structure-presentation" class="noxref">guideline 3</a>, <a href="#gl-new-technologies" class="noxref">guideline 6</a>, <a href="#gl-movement" class="noxref">guideline 7</a>, and <a href="#gl-device-independence" class="noxref">guideline 9</a>.

<span id="element">**Element**</span>   
This document uses the term "element" both in the strict SGML sense (an element is a syntactic construct) and more generally to mean a type of content (such as video or sound) or a logical construct (such as a header or list). The second sense emphasizes that a guideline inspired by HTML could easily apply to another markup language.

Note that some (SGML) elements have content that is rendered (e.g., the P, LI, or TABLE elements in HTML), some are replaced by external content (e.g., IMG), and some affect processing (e.g., STYLE and SCRIPT cause information to be processed by a style sheet or script engine). An element that causes text characters to be part of the document is called a <span id="text-element">text element</span>.

<span id="equivalent">**Equivalent**</span>   
Content is "equivalent" to other content when both fulfill essentially the same function or purpose upon presentation to the user. In the context of this document, the equivalent must fulfill essentially the same function for the person with a disability (at least insofar as is feasible, given the nature of the disability and the state of technology), as the primary content does for the person without any disability. For example, the text "The Full Moon" might convey the same information as an image of a full moon when presented to users. Note that equivalent information focuses on **fulfilling the same function**. If the image is part of a link and understanding the image is crucial to guessing the link target, an equivalent must also give users an idea of the link target. Providing equivalent information for inaccessible content is one of the primary ways authors can make their documents accessible to people with disabilities.

As part of fulfilling the same function of content an equivalent may involve a description of that content (i.e., what the content looks like or sounds like). For example, in order for users to understand the information conveyed by a complex chart, authors should describe the visual information in the chart.

Since text content can be presented to the user as synthesized speech, braille, and visually-displayed text, these guidelines require <span id="text-equivalent">**text equivalents**</span> for graphic and audio information. Text equivalents must be written so that they convey all essential content. <span id="non-text-equivalent">**Non-text equivalents**</span> (e.g., an auditory description of a visual presentation, a video of a person telling a story using sign language as an equivalent for a written story, etc.) also improve accessibility for people who cannot access visual information or written text, including many individuals with blindness, cognitive disabilities, learning disabilities, and deafness.

Equivalent information may be provided in a number of ways, including through attributes (e.g., a text value for the "alt" attribute in HTML and SMIL), as part of element content (e.g., the OBJECT in HTML), as part of the document's prose, or via a linked document (e.g., designated by the "longdesc" attribute in HTML or a <span id="d-link">description link</span>). Depending on the complexity of the equivalent, it may be necessary to combine techniques (e.g., use "alt" for an abbreviated equivalent, useful to familiar readers, in addition to "longdesc" for a link to more complete information, useful to first-time readers). The details of how and when to provide equivalent information are part of the Techniques Document ([\[TECHNIQUES\]](#ref-TECHNIQUES)).

A <span id="text-transcript">**text transcript**</span> is a text equivalent of audio information that includes spoken words and non-spoken sounds such as sound effects. A <span id="caption">**caption**</span> is a text transcript for the audio track of a video presentation that is synchronized with the video and audio tracks. Captions are generally rendered visually by being superimposed over the video, which benefits people who are deaf and hard-of-hearing, and anyone who cannot hear the audio (e.g., when in a crowded room). A <span id="collated-text-transcript">**collated text transcript**</span> combines (collates) captions with text descriptions of video information (descriptions of the actions, body language, graphics, and scene changes of the video track). These text equivalents make presentations accessible to people who are deaf-blind and to people who cannot play movies, animations, etc. It also makes the information available to search engines.

One example of a non-text equivalent is an <span id="auditory-description">**auditory description**</span> of the key visual elements of a presentation. The description is either a prerecorded human voice or a synthesized voice (recorded or generated on the fly). The auditory description is synchronized with the audio track of the presentation, usually during natural pauses in the audio track. Auditory descriptions include information about actions, body language, graphics, and scene changes.

<span id="image">**Image**</span>  
A graphical presentation.

<span id="image-map">**Image map**</span>  
An image that has been divided into regions with associated actions. Clicking on an active region causes an action to occur.

<span id="client-side-map">When a user clicks on an active region of a client-side image map,</span> the user agent calculates in which region the click occurred and follows the link associated with that region. <span id="server-side-map">Clicking on an active region of a server-side image map</span> causes the coordinates of the click to be sent to a server, which then performs some action.

Content developers can make client-side image maps accessible by providing device-independent access to the same links associated with the image map's regions. Client-side image maps allow the user agent to provide immediate feedback as to whether or not the user's pointer is over an active region.

<span id="important">**Important**</span>  
Information in a document is important if understanding that information is crucial to understanding the document.

<span id="linearized-table">**Linearized table**</span>  
A table rendering process where the contents of the cells become a series of paragraphs (e.g., down the page) one after another. The paragraphs will occur in the same order as the cells are defined in the document source. Cells should make sense when read in order and should include [structural elements](#structural-element) (that create paragraphs, headers, lists, etc.) so the page makes sense after linearization.

<span id="link-text">**Link text**</span>  
The rendered text content of a link.

<span id="natural-language">**Natural Language**</span>  
Spoken, written, or signed human languages such as French, Japanese, American Sign Language, and braille. The natural language of content may be indicated with the "lang" attribute in HTML ([\[HTML40\]](#ref-HTML40), section 8.1) and the "xml:lang" attribute in XML ([\[XML\]](#ref-XML), section 2.12).

<span id="nav-mechanism">**Navigation Mechanism**</span>  
A navigation mechanism is any means by which a user can navigate a page or site. Some typical mechanisms include:  

<span id="navbar">*navigation bars*</span>   
A navigation bar is a collection of links to the most important parts of a document or site.

<span id="sitemap">*site maps*</span>   
A site map provides a global view of the organization of a page or site.

<span id="table-of-contents">*tables of contents*</span>   
A table of contents generally lists (and links to) the most important sections of a document.

<span id="pda">**Personal Digital Assistant (PDA)**</span>  
A PDA is a small, portable computing device. Most PDAs are used to track personal data such as calendars, contacts, and electronic mail. A PDA is generally a handheld device with a small screen that allows input from various sources.

<span id="screen-magnifier">**Screen magnifier**</span>  
A software program that magnifies a portion of the screen, so that it can be more easily viewed. Screen magnifiers are used primarily by individuals with low vision.

<span id="screen-reader">**Screen reader**</span>  
A software program that reads the contents of the screen aloud to a user. Screen readers are used primarily by individuals who are blind. Screen readers can usually only read text that is printed, not painted, to the screen.

<span id="style-sheet">**Style sheets**</span>  
A style sheet is a set of statements that specify presentation of a document. Style sheets may have three different origins: they may be written by content providers, created by users, or built into user agents. In CSS ([\[CSS2\]](#ref-CSS2)), the interaction of content provider, user, and user agent style sheets is called the cascade.

<span id="presentation-markup">**Presentation markup**</span> is markup that achieves a stylistic (rather than structuring) effect such as the B or I elements in HTML. Note that the STRONG and EM elements are not considered presentation markup since they convey information that is independent of a particular font style.

<span id="tabular-information">**Tabular information**</span>   
When tables are used to represent logical relationships among data -- text, numbers, images, etc., that information is called "tabular information" and the tables are called "data tables". The relationships expressed by a table may be rendered visually (usually on a two-dimensional grid), aurally (often preceding cells with header information), or in other formats.

 <span id="until-user-agents">**Until user agents ...**</span>  
In most of the checkpoints, content developers are asked to ensure the accessibility of their pages and sites. However, there are accessibility needs that would be more appropriately met by [<span class="dfn-instance">user agents</span>](#user-agent "Definition of user agent") (including [<span class="dfn-instance">assistive technologies</span>](#assistive-tech)). As of the publication of this document, not all user agents or assistive technologies provide the accessibility control users require (e.g., some user agents may not allow users to turn off blinking content, or some screen readers may not handle tables well). Checkpoints that contain the phrase "until user agents ..." require content developers to provide additional support for accessibility until most user agents readily available to their audience include the necessary accessibility features.

**Note.** The W3C WAI Web site (refer to [\[WAI-UA-SUPPORT\]](#ref-WAI-UA-SUPPORT)) provides information about user agent support for accessibility features. Content developers are encouraged to consult this page regularly for updated information.

<span id="user-agent">**User agent**</span>  
Software to access Web content, including desktop graphical browsers, text browsers, voice browsers, mobile phones, multimedia players, plug-ins, and some software assistive technologies used in conjunction with browsers such as screen readers, screen magnifiers, and voice recognition software.

------------------------------------------------------------------------

<span id="Acknowledgments">Acknowledgments</span>
-------------------------------------------------

Web Content Guidelines Working Group Co-Chairs:  
[Chuck Letourneau](mailto:cpl@starlingweb.com), Starling Access Services

[Gregg Vanderheiden](mailto:gv@tracecenter.org), Trace Research and Development

W3C Team contacts:  
[Judy Brewer](mailto:jbrewer@w3.org) and [Daniel Dardailler](mailto:danield@w3.org)

We wish to thank the following people who have contributed their time and valuable comments to shaping these guidelines:   
Harvey Bingham, Kevin Carey, Chetz Colwell, Neal Ewers, Geoff Freed, Al Gilman, Larry Goldberg, Jon Gunderson, Eric Hansen, Phill Jenkins, Leonard Kasday, George Kerscher, Marja-Riitta Koivunen, Josh Krieger, Scott Luebking, William Loughborough, Murray Maloney, Charles McCathieNevile, MegaZone (Livingston Enterprises), Masafumi Nakane, Mark Novak, Charles Oppermann, Mike Paciello, David Pawson, Michael Pieper, Greg Rosmaita, Liam Quinn, Dave Raggett, T.V. Raman, Robert Savellis, Jutta Treviranus, Steve Tyler, Jaap van Lelieveld, and Jason White

The original draft of this document is based on "The Unified Web Site Accessibility Guidelines" ([\[UWSAG\]](#ref-UWSAG)) compiled by the Trace R & D Center at the University of Wisconsin. That document includes a list of additional contributors.

<span id="References">References</span>
---------------------------------------

For the latest version of any W3C specification please consult the list of [W3C Technical Reports](http://www.w3.org/TR).

<span id="ref-CSS1">**\[CSS1\]**</span>  
"CSS, level 1 Recommendation", B. Bos, H. Wium Lie, eds., 17 December 1996, revised 11 January 1999. The CSS1 Recommendation is: <http://www.w3.org/TR/1999/REC-CSS1-19990111>.  
The latest version of CSS1 is available at: <http://www.w3.org/TR/REC-CSS1>.

<span id="ref-CSS2">**\[CSS2\]**</span>  
"CSS, level 2 Recommendation", B. Bos, H. Wium Lie, C. Lilley, and I. Jacobs, eds., 12 May 1998. The CSS2 Recommendation is: <http://www.w3.org/TR/1998/REC-CSS2-19980512>.  
The latest version of CSS2 is available at: <http://www.w3.org/TR/REC-CSS2>.

<span id="ref-DOM1">**\[DOM1\]**</span>  
"Document Object Model (DOM) Level 1 Specification", V. Apparao, S. Byrne, M. Champion, S. Isaacs, I. Jacobs, A. Le Hors, G. Nicol, J. Robie, R. Sutor, C. Wilson, and L. Wood, eds., 1 October 1998. The DOM Level 1 Recommendation is: <http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001>.  
The latest version of DOM Level 1 is available at: <http://www.w3.org/TR/REC-DOM-Level-1>

<span id="ref-HTML40">**\[HTML40\]**</span>  
"HTML 4.0 Recommendation", D. Raggett, A. Le Hors, and I. Jacobs, eds., 17 December 1997, revised 24 April 1998. The HTML 4.0 Recommendation is: <http://www.w3.org/TR/1998/REC-html40-19980424>.  
The latest version of HTML 4.0 is available at: <http://www.w3.org/TR/REC-html40>.

<span id="ref-HTML32">**\[HTML32\]**</span>  
"HTML 3.2 Recommendation", D. Raggett, ed., 14 January 1997. The latest version of HTML 3.2 is available at: <http://www.w3.org/TR/REC-html32>.

<span id="ref-MATHML">**\[MATHML\]**</span>  
"Mathematical Markup Language", P. Ion and R. Miner, eds., 7 April 1998. The MathML 1.0 Recommendation is: <http://www.w3.org/TR/1998/REC-MathML-19980407>.  
The latest version of MathML 1.0 is available at: [http://www.w3.org/TRREC-MathML](http://www.w3.org/TR/REC-MathML).

<span id="ref-PNG">**\[PNG\]**</span>  
"PNG (Portable Network Graphics) Specification", T. Boutell, ed., T. Lane, contributing ed., 1 October 1996. The latest version of PNG 1.0 is: <http://www.w3.org/TR/REC-png>.

<span id="ref-RDF">**\[RDF\]**</span>  
"Resource Description Framework (RDF) Model and Syntax Specification", O. Lassila, R. Swick, eds., 22 February 1999. The RDF Recommendation is: <http://www.w3.org/TR/1999/REC-rdf-syntax-19990222>.  
The latest version of RDF 1.0 is available at: <http://www.w3.org/TR/REC-rdf-syntax>

<span id="ref-RFC2068">**\[RFC2068\]**</span>  
["HTTP Version 1.1"](http://www.ietf.org/rfc/rfc2068.txt), R. Fielding, J. Gettys, J. Mogul, H. Frystyk Nielsen, and T. Berners-Lee, January 1997.

<span id="ref-SMIL">**\[SMIL\]**</span>  
"Synchronized Multimedia Integration Language (SMIL) 1.0 Specification", P. Hoschka, ed., 15 June 1998. The SMIL 1.0 Recommendation is: <http://www.w3.org/TR/1998/REC-smil-19980615>  
The latest version of SMIL 1.0 is available at: <http://www.w3.org/TR/REC-smil>

<span id="ref-TECHNIQUES">**\[TECHNIQUES\]**</span>  
"Techniques for Web Content Accessibility Guidelines 1.0", W. Chisholm, G. Vanderheiden, I. Jacobs, eds. This document explains how to implement the checkpoints defined in "Web Content Accessibility Guidelines 1.0". The latest draft of the techniques is available at: [http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS)

<span id="ref-WAI-AUTOOLS">**\[WAI-AUTOOLS\]**</span>  
"Authoring Tool Accessibility Guidelines", J. Treviranus, J. Richards, I. Jacobs, C. McCathieNevile, eds. The latest Working Draft of these guidelines for designing accessible authoring tools is available at: <http://www.w3.org/TR/WAI-AUTOOLS/>

<span id="ref-WAI-UA-SUPPORT">**\[WAI-UA-SUPPORT\]**</span>  
This page documents known support by user agents (including assistive technologies) of some accessibility features listed in this document. The page is available at: <http://www.w3.org/WAI/Resources/WAI-UA-Support>

<span id="ref-WAI-USERAGENT">**\[WAI-USERAGENT\]**</span>  
"User Agent Accessibility Guidelines", J. Gunderson and I. Jacobs, eds. The latest Working Draft of these guidelines for designing accessible user agents is available at: <http://www.w3.org/TR/WAI-USERAGENT/>

<span id="ref-WCAG-ICONS">**\[WCAG-ICONS\]**</span>  
Information about conformance icons for this document and how to use them is available at <http://www.w3.org/WAI/WCAG1-Conformance.html>

<span id="ref-UWSAG">**\[UWSAG\]**</span>  
"The Unified Web Site Accessibility Guidelines", G. Vanderheiden, W. Chisholm, eds. The Unified Web Site Guidelines were compiled by the [Trace R & D Center](http://www.tracecenter.org/) at the University of Wisconsin under funding from the National Institute on Disability and Rehabilitation Research (NIDRR),  U.S. Dept. of Education. This document is available at: <http://www.tracecenter.org/docs/html_guidelines/version8.htm>

<span id="ref-XML">**\[XML\]**</span>  
"Extensible Markup Language (XML) 1.0.", T. Bray, J. Paoli, C.M. Sperberg-McQueen, eds., 10 February 1998. The XML 1.0 Recommendation is: <http://www.w3.org/TR/1998/REC-xml-19980210>.  
The latest version of XML 1.0 is available at: <http://www.w3.org/TR/REC-xml>

[<img src="http://www.w3.org/WAI/wcag1AAA" alt="Level Triple-A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0" class="conform" width="88" height="32" />](http://www.w3.org/WAI/WCAG1AAA-Conformance "Explanation of Level Triple-A Conformance")

------------------------------------------------------------------------

\[[contents](#toc)\]   \[[checklist](full-checklist.html)\]  
