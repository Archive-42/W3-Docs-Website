[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")
-   [**Next:** SC 1.4.5 \[Images of Text\]](visual-audio-contrast-text-presentation.html "Understanding SC  1.4.5 [Images of Text]")

On this page:

-   [Intent](#visual-audio-contrast-scale-intent-head)
-   [Examples](#visual-audio-contrast-scale-examples-head)
-   [Related Resources](#visual-audio-contrast-scale-resources-head)
-   [Techniques & Failures](#visual-audio-contrast-scale-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-scale"></span> **Resize text**<span class="screenreader">:</span> Understanding SC 1.4.4
========================================================================================================================

> **[1.4.4](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale) Resize text:** Except for <a href="#captionsdef" class="termref">captions</a> and <a href="#images-of-textdef" class="termref">images of text</a>, <a href="#textdef" class="termref">text</a> can be resized without <a href="#atdef" class="termref">assistive technology</a> up to 200 percent without loss of content or functionality. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen \[vs. text characters that are still in data form such as ASCII\]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier. Users may benefit from scaling all content on the Web page, but text is most critical.

The scaling of content is primarily a user agent responsibility. User agents that satisfy [UAAG 1.0 Checkpoint 4.1](http://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale) allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content effectively. Authors may satisfy this Success Criterion by verifying that content does not interfere with user agent support for resizing text, including text-based controls, or by providing direct support for resizing text or changing the layout. An example of direct support might be via server-side script that can be used to assign different style sheets.

The author cannot rely on the user agent to satisfy this Success Criterion for HTML content if users do not have access to a user agent with zoom support. For example, if they work in an environment that requires them to use IE 6.

If the author is using a technology whose user agents do not provide zoom support, the author is responsible to provide this type of functionality directly or to provide content that works with the type of functionality provided by the user agent. If the user agent doesn't provide zoom functionality but does let the the user change the text size, the author is responsible for ensuring that the content remains usable when the text is resized.

Some user interface components that function as a label and require activation by the user to access content are not wide enough to accommodate the label's content. For example, in Web mail applications the subject column may not be wide enough to accommodate every possible subject header, but activating the subject header takes the user to the full message with the full subject header. In Web-based spreadsheets, cell content that is too long to be displayed in a column can be truncated, and the full content of the cell is available to the user when the cell receives focus. The content of a user interface component may also become too wide in user interfaces where the user can resize the column width. In this type of user interface component, line wrapping is not required; truncation is acceptable if the component's full content is available on focus or after user activation and an indication that this information can be accessed, is provided to the user in some way besides the fact that it is truncated.

Content satisfies the Success Criterion if it can be scaled up to 200%, that is, up to twice the width and height. Authors may support scaling beyond that limit, however, as scaling becomes more extreme, adaptive layouts may introduce usability problems. For example, words may be too wide to fit into the horizontal space available to them, causing them to be truncated; layout constraints may cause text to overlap with other content when it is scaled larger; or only one word of a sentence may fit on each line, causing the sentence to be displayed as a vertical column of text that is difficult to read.

The working group feels that 200% is a reasonable accommodation that can support a wide range of designs and layouts, and complements older screen magnifiers that provide a minimum magnification of 200%. Above 200%, zoom (which resizes text, images, and layout regions and creates a larger canvas that may require both horizontal and vertical scrolling) may be more effective than text resizing. Assistive technology dedicated to zoom support would usually be used in such a situation and may provide better accessibility than attempts by the author to support the user directly.

*Note:* Images of text do not scale as well as text because they tend to pixelate, and therefore we suggest using text wherever possible. It is also harder to change foreground and background contrast and color combinations for images of text, which are necessary for some users.

See also *[Understanding Success Criterion 1.4.8 Visual Presentation](visual-audio-contrast-visual-presentation.html)*.

### Specific Benefits of Success Criterion 1.4.4:

-   This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.

Examples of Success Criterion 1.4.4
-----------------------------------

-   A user with vision impairments increases the text size on a Web page in a browser from 1 em to 1.2 ems. While the user could not read the text at the smaller size, she can read the larger text. All the information on the page is still displayed when the larger font is used for the text.

-   A Web page contains a control for changing the scale of the page. Selecting different settings changes the layout of the page to use the best design for that scale.

-   A user uses a zoom function in his user agent to change the scale of the content. All the content scales uniformly, and the user agent provides scroll bars, if necessary.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS 2 Box Model](http://www.w3.org/TR/CSS2/box.html)

-   [CSS 2 Visual formatting Model](http://www.w3.org/TR/CSS2/visuren.html)

-   [CSS 2 Visual formatting Model Details](http://www.w3.org/TR/CSS2/visudet.html)

-   [About fluid and fixed width layouts](http://www.456bereastreet.com/archive/200504/about_fluid_and_fixed_width_layouts/)

-   [Accessible CSS](http://cookiecrook.com/AIR/2003/train/accessiblecss.php)

Techniques and Failures for Success Criterion 1.4.4 - Resize text
-----------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G142" class="tech-ref">G142: Using a technology that has commonly-available user agents that support zoom</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL22" class="tech-ref">SL22: Supporting Browser Zoom in Silverlight</a> (Silverlight)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL23" class="tech-ref">SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements</a> (Silverlight)

4.  Ensuring that text containers resize when the text resizes **AND** using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C28" class="tech-ref">C28: Specifying the size of text containers using em units</a> (CSS)

    -   Techniques for relative measurements

        -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C12" class="tech-ref">C12: Using percent for font sizes</a> (CSS)

        -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C13" class="tech-ref">C13: Using named font sizes</a> (CSS)

        -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C14" class="tech-ref">C14: Using em units for font sizes</a> (CSS)

    -   Techniques for text container resizing

        -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR34" class="tech-ref">SCR34: Calculating size and position in a way that scales with text size</a> (Scripting)

        -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G146" class="tech-ref">G146: Using liquid layout</a>

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G178" class="tech-ref">G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent</a>

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G179" class="tech-ref">G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width</a>

### Additional Techniques (Advisory) for 1.4.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing large fonts by default (future link)

-   Using page-percent for container sizes (future link)

-   Avoiding scaling font sizes smaller than the user-agent default (future link)

    *Note:* The author won't actually know the font size, but should avoid percentage scaling that results in less than 100%

-   Avoiding justified text (future link)

-   Providing sufficient inter-line and inter-column spacing (future link)

-   Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)

-   Avoiding the use of text in raster images (future link)

-   Using server-side scripts to resize images of text (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C17" class="tech-ref">C17: Scaling form elements which contain text</a> (CSS)

-   Ensuring that text in raster images is at least 18pt (future link)

-   Scaling text down to 50% (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C20" class="tech-ref">C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized</a> (CSS)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C22" class="tech-ref">C22: Using CSS to control visual presentation of text</a> (CSS)

-   Providing a mechanism to allow captions to be enlarged (future link)

### Common Failures for SC 1.4.4

The following are common mistakes that are considered failures of Success Criterion 1.4.4 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F69" class="tech-ref">F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F80" class="tech-ref">F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%</a>

Key Terms
---------

 <span id="atdef"></span> assistive technology (as used in this document)  
hardware and/or software that acts as a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

*Note 1:* functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

*Note 2:* Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

*Note 3:* The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

*Example:* Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;

-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;

-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;

-   speech recognition software, which may be used by people who have some physical disabilities;

-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);

-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

 <span id="captionsdef"></span> captions  
synchronized visual and/or <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-altdef" class="termref">text alternative</a> for both speech and non-speech audio information needed to understand the media content

*Note 1:* Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

*Note 2:* Closed Captions are equivalents that can be turned on and off with some players.

*Note 3:* Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#images-of-textdef" class="termref">images of text</a> embedded in <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#videodef" class="termref">video</a>.

*Note 4:* Captions should not obscure or obstruct relevant information in the video.

*Note 5:* In some countries, captions are called subtitles.

*Note 6:* <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodescdef" class="termref">Audio descriptions</a> can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

 <span id="images-of-textdef"></span> image of text  
text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

*Note:* This does not include <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#textdef" class="termref">text</a> that is part of a picture that contains significant other visual content.

*Example:* A person's name on a nametag in a photograph.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#programmaticallydetermineddef" class="termref">programmatically determined</a>, where the sequence is expressing something in <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef" class="termref">human language</a>

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")
-   [**Next:** SC 1.4.5 \[Images of Text\]](visual-audio-contrast-text-presentation.html "Understanding SC  1.4.5 [Images of Text]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
