[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.7 \[Low or No Background Audio\]](visual-audio-contrast-noaudio.html "Understanding SC  1.4.7 [Low or No Background Audio]")
-   [**Next:** SC 1.4.9 \[Images of Text (No Exception)\]](visual-audio-contrast-text-images.html "Understanding SC  1.4.9 [Images of Text (No Exception)]")

On this page:

-   [Intent](#visual-audio-contrast-visual-presentation-intent-head)
-   [Examples](#visual-audio-contrast-visual-presentation-examples-head)
-   [Related Resources](#visual-audio-contrast-visual-presentation-resources-head)
-   [Techniques & Failures](#visual-audio-contrast-visual-presentation-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-visual-presentation"></span> **Visual Presentation**<span class="screenreader">:</span> Understanding SC 1.4.8
==============================================================================================================================================

> **[1.4.8](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-visual-presentation) Visual Presentation:** For the visual presentation of <a href="#blockstextdef" class="termref">blocks of text</a>, a <a href="#mechanismdef" class="termref">mechanism</a> is available to achieve the following: (Level AAA)
>
> 1.  Foreground and background colors can be selected by the user.
>
> 2.  Width is no more than 80 characters or glyphs (40 if CJK).
>
> 3.  Text is not justified (aligned to both the left and the right margins).
>
> 4.  Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.
>
> 5.  Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="#fullscreenwindowdef" class="termref">on a full-screen window</a>.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that visually rendered text is presented in such a manner that it can be perceived without its layout interfering with its readability. People with some cognitive, language and learning disabilities and some low vision users cannot perceive the text and/or lose their reading place if the text is presented in a manner that is difficult for them to read.

People with some visual or cognitive disabilities need to be able to select the color of text and the color of the background. They sometimes choose combinations that seem unintuitive to someone without that disability. Sometimes these combinations have very low contrast. Sometimes only very specific color combinations work for them. Control of color or other aspects of text presentation makes a huge difference to their comprehension.

For people with some reading or vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines should not exceed 80 characters or glyphs (40 if CJK), where glyphs are the element of writing in the writing system for the text. Studies have shown that Chinese, Japanese and Korean (CJK) characters are approximately twice as wide as non-CJK characters when both types of characters are displayed with characteristics that achieve the same readability, so the maximum line width for CJK characters is half that of non-CJK characters.

People with some cognitive disabilities find it difficult to track text where the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. It is best if there are several different options, for instance, space-and-a-half and double spacing for line spacing. By space and a half within paragraphs we mean that top of one line is 150% further from the top of the line below it than would be true when the text is 'single spaced' (the default spacing for the font). By Paragraph spacing that is 1.5 times larger than the line spacing we mean that the spacing from the top of the last line of 1 paragraph is 250% farther from the Top of the first line of the next paragraph (i.e., that there is a blank line between the two paragraphs that is 150% of the single space blank line).

People with certain cognitive disabilities have problems reading text that is both left and right justified. The uneven spacing between words in fully justified text can cause "rivers of white" space to run down the page making reading difficult and in some cases impossible. Text justification can also cause words to be spaced closely together, so that it is difficult for them to locate word boundaries.

The resizing provision ensures that visually rendered text (text characters that have been displayed so that they can be seen \[vs. text characters that are still in data form such as ASCII\]) can be scaled successfully without requiring that the user scroll left and right to see all of the content. When the content has been authored so that this is possible, the content is said to reflow. This permits people with low vision and people with cognitive disabilities to increase the size of the text without becoming disoriented.

The scaling of content is primarily a user agent responsibility. User agents that satisfy UAAG 1.0 Checkpoint 4.1 allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content and that allows the reflow of the content within the current width of the viewport. See *[Understanding Success Criterion 1.4.4 Resize text](visual-audio-contrast-scale.html)* for additional discussion of resizing text.

The horizontal scrolling requirement is not intended to apply to small-screen devices where long words may be displayed on a single line and require users to scroll horizontally. For the purposes of this requirement, authors should ensure that content meets this requirement on standard desktop/laptop displays with the browser window maximized. Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

Wrapping should always be possible as long as words are not so long that a single word is more than half the width of a full screen. Very long URIs may run off the side of an enlarged screen, but they would not be considered text for "reading" and, therefore, would not violate this provision.

This provision does not mean that a user would never need to use horizontal scrolling. It only means that they would not need to use horizontal scrolling back and forth to read a line of text. For example, if a page consisted of two equal sized columns of text, it would automatically meet this provision. Enlarging the page would mean that the first column was completely on screen and the user could just scroll vertically down the page to read it. To read the second column, they would horizontally scroll to the right, where the right hand column would then fit entirely within the width of the screen, and read that column without further horizontal scrolling.

### Specific Benefits of Success Criterion 1.4.8:

This Success Criterion helps low vision users by letting them see text without distracting presentational features. It lets them configure text in ways that will be easier for them to see by letting them control the color and size of blocks of text.

This Success Criterion helps people with cognitive, language and learning disabilities perceive text and track their location within blocks of text.

-   People with some cognitive disabilities can read text better when they select their own foreground and background color combinations.

-   People with some cognitive disabilities can track their locations more easily when blocks of text are narrow and when they can configure the amount of space between lines and paragraphs.

-   People with some cognitive disabilities can read text more easily when the spacing between words is regular.

Examples of Success Criterion 1.4.8
-----------------------------------

The following images show examples of single-spacing, space-and-a-half and double-spaced text in a paragraph.

![Example of single-spaced text. (no space between each line of text)](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/images/single-space.gif)![Example of space-and-a-half text. (a space equal to half the height of a line of text line)](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/images/space-and-a-half.gif)![Example of double-spaced text. (a space equal to the height of a line of text between each line)](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/images/double-space.gif)

Examples of glyphs include "A", "→" (an arrow symbol), and "さ" (a Japanese character).

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS 2 Box Model](http://www.w3.org/TR/CSS2/box.html)

-   [CSS 2 Visual formatting Model](http://www.w3.org/TR/CSS2/visuren.html)

-   [CSS 2 Visual formatting Model Details](http://www.w3.org/TR/CSS2/visudet.html)

-   [About fluid and fixed width layouts](http://www.456bereastreet.com/archive/200504/about_fluid_and_fixed_width_layouts/)

-   [Accessible CSS](http://cookiecrook.com/AIR/2003/train/accessiblecss.php)

-   [Ideal line length for content](http://maxdesign.com.au/articles/em/)

-   [Developing sites for users with Cognitive disabilities and learning difficulties](http://juicystudio.com/article/cognitive-impairment.php)

-   [RDFA Primer](http://www.w3.org/TR/2007/WD-xhtml-rdfa-primer-20071026/)

-   [MULTIFUNK: Bringing computer-supported reading one step further](http://publications.nr.no/Multifunk-NR-rapport.pdf), Date: April 2002, ISBN: 82-539-0491-6, Author: Gjertrud W. Kamstrup, Eva Mjøvik, Anne-Lise Rygvold og Bjørn Gunnar Saltnes

-   [Effective Monitor Display Design](http://eric.ed.gov/?id=EJ601947) on the ERIC Web portal

-   [Cognitive difficulties and access to information systems - an interaction design perspective](http://www.sigaccess.org/2005/09/september-2005-newsletter/)", Peter Gregor and Anna Dickinson, Applied Computing, University of Dundee

-   Legge, G.E., Pelli, D.G., Rubin, G.S., & Schleske, M.M.:Psychophysics of reading. I. Normal Vision,Vision Research, 25, 239-252, 1985.

-   Legge, G.E., Rubin, G.S., Pelli, D.G., & Schleske, M.M.:Psychophysics of reading. II. Low Vision,Vision Research, 25, 253-266, 1985.

-   Osaka,N. and Oda, K. (1991). Effective visual field size necessary for vertical reading during Japanese text processing. Bulletin of Psychonomic Society,29(4),345-347.

-   Beckmann, P.J. & Legge, G.E. (1996). Psychophysics of reading. XIV. The page-navigation problem in using magnifiers. Vision Research, 36, 3723-3733.

-   <span lang="jp" lang="jp">川嶋英嗣・小田浩一</span>(2003).<span lang="jp" lang="jp">読書におけるスクロール方向とウィンドウ幅の影響　日本心理学会第</span>67<span lang="jp" lang="jp">回大会</span>, 502.

-   <span lang="jp" lang="jp">小田浩一・今橋真理子</span>(1995). <span lang="jp" lang="jp">文字認知の閾値と読みの閾値</span>. VISION, 7, 165-168.

-   Osaka,N. (1994). Size of saccade and fixation duration of eye movements during reading: psychophysics of Japanese text processing. Journal of Optical Society of America A, 9(1), 5-13.

-   <span lang="jp" lang="jp">山中今日子・小田浩一</span> (2007). <span lang="jp" lang="jp">漢字の画数と書体のウェイトが視認性に及ぼす 影響. 視覚学会</span>2007<span lang="jp" lang="jp">年夏季大会ポスター</span> 1p1 Vision, P.167.

-   [Line Length, Volume, and Density](http://paul-m-jones.com/archives/276)

-   [Guidance on accessible publishing](http://webarchive.nationalarchives.gov.uk/20130812104657/http://odi.dwp.gov.uk/inclusive-communications/channels/publishing.php)

-   [An Accessibility Frontier: Cognitive disabilities and learning difficulties](http://usability.com.au/2004/12/an-accessibility-frontier-cognitive-disabilities-and-learning-difficulties-2004/)

-   [Cognitive/Perceptual Difference And Good Web Design](http://leftbrainrightbrain.co.uk/2005/03/08/cognitiveperceptual-difference-and-good-web-design/)

-   [6 Surprising Bad Practices That Hurt Dyslexic Users](http://uxmovement.com/content/6-surprising-bad-practices-that-hurt-dyslexic-users/)

-   [Design for Dyslexics](http://accessites.org/site/2006/11/designing-for-dyslexics-part-3-of-3)

-   [Web Design for Dyslexia](http://www.dyslexia.com/library/webdesign.htm)

Techniques and Failures for Success Criterion 1.4.8 - Visual Presentation
-------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Since this is a multi-part success criterion, you must satisfy one of the numbered items for each of the requirements below.

#### <span id="visual-audio-contrast-visual-presentation-section-30-head"></span> First Requirement: Techniques to ensure foreground and background colors can be selected by the user

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C23" class="tech-ref">C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content</a> (CSS) OR

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C25" class="tech-ref">C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors</a> (CSS) OR

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G156" class="tech-ref">G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text</a> OR

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G148" class="tech-ref">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a> OR

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G175" class="tech-ref">G175: Providing a multi color selection tool on the page for foreground and background colors</a>

#### <span id="visual-audio-contrast-visual-presentation-section-31-head"></span> Second Requirement: Techniques to ensure width is no more than 80 characters or glyphs (40 if CJK)

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G204" class="tech-ref">G204: Not interfering with the user agent's reflow of text as the viewing window is narrowed</a> OR

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C20" class="tech-ref">C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized</a> (CSS)

#### <span id="visual-audio-contrast-visual-presentation-section-32-head"></span> Third Requirement: Techniques to ensure text is not justified (aligned to both the left and the right margins)

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C19" class="tech-ref">C19: Specifying alignment either to the left OR right in CSS</a> (CSS) OR

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G172" class="tech-ref">G172: Providing a mechanism to remove full justification of text</a> OR

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G169" class="tech-ref">G169: Aligning text on only one side</a>

#### <span id="visual-audio-contrast-visual-presentation-section-33-head"></span> Fourth Requirement: Techniques to ensure line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G188" class="tech-ref">G188: Providing a button on the page to increase line spaces and paragraph spaces</a> OR

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C21" class="tech-ref">C21: Specifying line spacing in CSS</a> (CSS)

#### <span id="visual-audio-contrast-visual-presentation-section-34-head"></span> Fifth Requirement: Techniques to ensure text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G204" class="tech-ref">G204: Not interfering with the user agent's reflow of text as the viewing window is narrowed</a> OR

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G146" class="tech-ref">G146: Using liquid layout</a> *AND* using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C12" class="tech-ref">C12: Using percent for font sizes</a> (CSS) OR

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C13" class="tech-ref">C13: Using named font sizes</a> (CSS) OR

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C14" class="tech-ref">C14: Using em units for font sizes</a> (CSS) OR

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C24" class="tech-ref">C24: Using percentage values in CSS for container sizes</a> (CSS) OR

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH33" class="tech-ref">FLASH33: Using relative values for Flash object dimensions</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR34" class="tech-ref">SCR34: Calculating size and position in a way that scales with text size</a> (Scripting) OR

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G206" class="tech-ref">G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text</a>

### Additional Techniques (Advisory) for 1.4.8

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using a hover effect to highlight a paragraph, list items, or table cells (CSS) (future link)

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

### Common Failures for SC 1.4.8

The following are common mistakes that are considered failures of Success Criterion 1.4.8 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F24" class="tech-ref">F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F88" class="tech-ref">F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)</a>

Key Terms
---------

 <span id="blockstextdef"></span> blocks of text  
more than one sentence of text

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

 <span id="fullscreenwindowdef"></span> on a full-screen window  
on the most common sized desktop/laptop display with the viewport maximized

*Note:* Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.7 \[Low or No Background Audio\]](visual-audio-contrast-noaudio.html "Understanding SC  1.4.7 [Low or No Background Audio]")
-   [**Next:** SC 1.4.9 \[Images of Text (No Exception)\]](visual-audio-contrast-text-images.html "Understanding SC  1.4.9 [Images of Text (No Exception)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
