-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Low or No Background Audio](low-or-no-background-audio)
-   [Next SC: Images of Text (No Exception)](images-of-text-no-exception)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.8: Visual Presentation
==========================================================

> Success Criterion [1.4.8 Visual Presentation](https://www.w3.org/TR/WCAG21/#visual-presentation) (Level AAA): For the visual presentation of [blocks of text](#dfn-blocks-of-text), a [mechanism](#dfn-mechanism) is available to achieve the following:
>
> -   Foreground and background colors can be selected by the user.
> -   Width is no more than 80 characters or glyphs (40 if CJK).
> -   Text is not justified (aligned to both the left and the right margins).
> -   Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.
> -   Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text [on a full-screen window](#dfn-on-a-full-screen-window).

Intent
------

The intent of this Success Criterion is to ensure that visually rendered text is presented in such a manner that it can be perceived without its layout interfering with its readability. People with some cognitive, language and learning disabilities and some low vision users cannot perceive the text and/or lose their reading place if the text is presented in a manner that is difficult for them to read.

People with some visual or cognitive disabilities need to be able to select the color of text and the color of the background. They sometimes choose combinations that seem unintuitive to someone without that disability. Sometimes these combinations have very low contrast. Sometimes only very specific color combinations work for them. Control of color or other aspects of text presentation makes a huge difference to their comprehension.

For people with some reading or vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines should not exceed 80 characters or glyphs (40 if CJK), where glyphs are the element of writing in the writing system for the text. Studies have shown that Chinese, Japanese and Korean (CJK) characters are approximately twice as wide as non-CJK characters when both types of characters are displayed with characteristics that achieve the same readability, so the maximum line width for CJK characters is half that of non-CJK characters.

People with some cognitive disabilities find it difficult to track text where the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. It is best if there are several different options, for instance, space-and-a-half and double spacing for line spacing. By space and a half within paragraphs we mean that top of one line is 150% further from the top of the line below it than would be true when the text is 'single spaced' (the default spacing for the font). By Paragraph spacing that is 1.5 times larger than the line spacing we mean that the spacing from the top of the last line of 1 paragraph is 250% farther from the Top of the first line of the next paragraph (i.e., that there is a blank line between the two paragraphs that is 150% of the single space blank line).

People with certain cognitive disabilities have problems reading text that is both left and right justified. The uneven spacing between words in fully justified text can cause "rivers of white" space to run down the page making reading difficult and in some cases impossible. Text justification can also cause words to be spaced closely together, so that it is difficult for them to locate word boundaries.

The resizing provision ensures that visually rendered text (text characters that have been displayed so that they can be seen \[vs. text characters that are still in data form such as ASCII\]) can be scaled successfully without requiring that the user scroll left and right to see all of the content. When the content has been authored so that this is possible, the content is said to reflow. This permits people with low vision and people with cognitive disabilities to increase the size of the text without becoming disoriented.

The scaling of content is primarily a user agent responsibility. User agents that satisfy UAAG 1.0 Checkpoint 4.1 allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content and that allows the reflow of the content within the current width of the viewport. See [1.4.2: Resize text](resize-text) for additional discussion of resizing text.

The horizontal scrolling requirement is not intended to apply to small-screen devices where long words may be displayed on a single line and require users to scroll horizontally. For the purposes of this requirement, authors should ensure that content meets this requirement on standard desktop/laptop displays with the browser window maximized. Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

Wrapping should always be possible as long as words are not so long that a single word is more than half the width of a full screen. Very long URIs may run off the side of an enlarged screen, but they would not be considered text for "reading" and, therefore, would not violate this provision.

This provision does not mean that a user would never need to use horizontal scrolling. It only means that they would not need to use horizontal scrolling back and forth to read a line of text. For example, if a page consisted of two equal sized columns of text, it would automatically meet this provision. Enlarging the page would mean that the first column was completely on screen and the user could just scroll vertically down the page to read it. To read the second column, they would horizontally scroll to the right, where the right hand column would then fit entirely within the width of the screen, and read that column without further horizontal scrolling.

Benefits
--------

This Success Criterion helps low vision users by letting them see text without distracting presentational features. It lets them configure text in ways that will be easier for them to see by letting them control the color and size of blocks of text.

This Success Criterion helps people with cognitive, language and learning disabilities perceive text and track their location within blocks of text.

-   People with some cognitive disabilities can read text better when they select their own foreground and background color combinations.
-   People with some cognitive disabilities can track their locations more easily when blocks of text are narrow and when they can configure the amount of space between lines and paragraphs.
-   People with some cognitive disabilities can read text more easily when the spacing between words is regular.

Examples
--------

The following images show examples of single-spacing, space-and-a-half and double-spaced text in a paragraph.

Examples of glyphs include "A", "→" (an arrow symbol), and "さ" (a Japanese character).

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS 2 Box Model](https://www.w3.org/TR/CSS2/box.html)
-   [CSS 2 Visual formatting Model](https://www.w3.org/TR/CSS2/visuren.html)
-   [CSS 2 Visual formatting Model Details](https://www.w3.org/TR/CSS2/visudet.html)
-   [About fluid and fixed width layouts](http://www.456bereastreet.com/archive/200504/about_fluid_and_fixed_width_layouts/)
-   [Accessible CSS](http://cookiecrook.com/AIR/2003/train/accessiblecss.php)
-   [Ideal line length for content](http://maxdesign.com.au/articles/em/)
-   [Developing sites for users with Cognitive disabilities and learning difficulties](http://juicystudio.com/article/cognitive-impairment.php)
-   [RDFA Primer](https://www.w3.org/TR/2007/WD-xhtml-rdfa-primer-20071026/)
-   [MULTIFUNK: Bringing computer-supported reading one step further](http://publications.nr.no/Multifunk-NR-rapport.pdf), Date: April 2002, ISBN: 82-539-0491-6, Author: Gjertrud W. Kamstrup, Eva Mjøvik, Anne-Lise Rygvold og Bjørn Gunnar Saltnes
-   [Effective Monitor Display Design](http://eric.ed.gov/?id=EJ601947) on the ERIC Web portal
-   [Cognitive difficulties and access to information systems - an interaction design perspective](http://www.sigaccess.org/2005/09/september-2005-newsletter/)", Peter Gregor and Anna Dickinson, Applied Computing, University of Dundee
-   Legge, G.E., Pelli, D.G., Rubin, G.S., & Schleske, M.M.:Psychophysics of reading. I. Normal Vision,Vision Research, 25, 239-252, 1985.
-   Legge, G.E., Rubin, G.S., Pelli, D.G., & Schleske, M.M.:Psychophysics of reading. II. Low Vision,Vision Research, 25, 253-266, 1985.
-   Osaka,N. and Oda, K. (1991). Effective visual field size necessary for vertical reading during Japanese text processing. Bulletin of Psychonomic Society,29(4),345-347.
-   Beckmann, P.J. & Legge, G.E. (1996). Psychophysics of reading. XIV. The page-navigation problem in using magnifiers. Vision Research, 36, 3723-3733.
-   川嶋英嗣・小田浩一(2003).読書におけるスクロール方向とウィンドウ幅の影響　日本心理学会第67回大会, 502.
-   小田浩一・今橋真理子(1995). 文字認知の閾値と読みの閾値. VISION, 7, 165-168.
-   Osaka,N. (1994). Size of saccade and fixation duration of eye movements during reading: psychophysics of Japanese text processing. Journal of Optical Society of America A, 9(1), 5-13.
-   山中今日子・小田浩一 (2007). 漢字の画数と書体のウェイトが視認性に及ぼす 影響. 視覚学会2007年夏季大会ポスター 1p1 Vision, P.167.
-   [Line Length, Volume, and Density](http://paul-m-jones.com/archives/276)
-   [Guidance on accessible publishing](http://webarchive.nationalarchives.gov.uk/20130812104657/http://odi.dwp.gov.uk/inclusive-communications/channels/publishing.php)
-   [An Accessibility Frontier: Cognitive disabilities and learning difficulties](http://usability.com.au/2004/12/an-accessibility-frontier-cognitive-disabilities-and-learning-difficulties-2004/)
-   [Cognitive/Perceptual Difference And Good Web Design](http://leftbrainrightbrain.co.uk/2005/03/08/cognitiveperceptual-difference-and-good-web-design/)
-   [6 Surprising Bad Practices That Hurt Dyslexic Users](http://uxmovement.com/content/6-surprising-bad-practices-that-hurt-dyslexic-users/)
-   [Design for Dyslexics](http://accessites.org/site/2006/11/designing-for-dyslexics-part-3-of-3)
-   [Web Design for Dyslexia](http://www.dyslexia.com/library/webdesign.htm)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Since this is a multi-part success criterion, you must satisfy one of the numbered items for each of the requirements below.

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C23" class="css">C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content</a> OR
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C25" class="css">C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors</a> OR
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G156" class="general">G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text</a> OR
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G148" class="general">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a> OR
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G175" class="general">G175: Providing a multi color selection tool on the page for foreground and background colors</a>

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G204" class="general">G204: Not interfering with the user agent's reflow of text as the viewing window is narrowed</a> OR
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C20" class="css">C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized</a>

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C19" class="css">C19: Specifying alignment either to the left OR right in CSS</a> OR
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G172" class="general">G172: Providing a mechanism to remove full justification of text</a> OR
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G169" class="general">G169: Aligning text on only one side</a>

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G188" class="general">G188: Providing a button on the page to increase line spaces and paragraph spaces</a> OR
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C21" class="css">C21: Specifying line spacing in CSS</a>

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G204" class="general">G204: Not interfering with the user agent's reflow of text as the viewing window is narrowed</a> OR
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G146" class="general">G146: Using liquid layout</a> *AND* using measurements that are relative to other measurements in the content by using one or more of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C12" class="css">C12: Using percent for font sizes</a> OR
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C13" class="css">C13: Using named font sizes</a> OR
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C14" class="css">C14: Using em units for font sizes</a> OR
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C24" class="css">C24: Using percentage values in CSS for container sizes</a> OR
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34" class="script">SCR34: Calculating size and position in a way that scales with text size</a> OR

3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G206" class="general">G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F24" class="failure">F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F88" class="failure">F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)</a>

Key Terms
---------

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

blocks of text

more than one sentence of text

conformance

satisfying all the requirements of a given standard, guideline or specification

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

on a full-screen window

on the most common sized desktop/laptop display with the viewport maximized

Note

Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
