[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.4 \[Resize text\]](visual-audio-contrast-scale.html "Understanding SC  1.4.4 [Resize text]")
-   [**Next:** SC 1.4.6 \[Contrast (Enhanced)\]](visual-audio-contrast7.html "Understanding SC  1.4.6 [Contrast (Enhanced)]")

On this page:

-   [Intent](#visual-audio-contrast-text-presentation-intent-head)
-   [Examples](#visual-audio-contrast-text-presentation-examples-head)
-   [Related Resources](#visual-audio-contrast-text-presentation-resources-head)
-   [Techniques & Failures](#visual-audio-contrast-text-presentation-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-text-presentation"></span> **Images of Text**<span class="screenreader">:</span> Understanding SC 1.4.5
=======================================================================================================================================

> **[1.4.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-text-presentation) Images of Text:** If the technologies being used can achieve the visual presentation, <a href="#textdef" class="termref">text</a> is used to convey information rather than <a href="#images-of-textdef" class="termref">images of text</a> except for the following: (Level AA)
>
> -   **Customizable:** The image of text can be <a href="#visually-customizeddef" class="termref">visually customized</a> to the user's requirements;
>
> -   **Essential:** A particular presentation of text is <a href="#essentialdef" class="termref">essential</a> to the information being conveyed.
>
> Note: Logotypes (text that is part of a logo or brand name) are considered essential.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to encourage authors who are using technologies that are capable of achieving a specific visual presentation to enable people who require a particular visual presentation of text to be able to adjust the text presentation as required. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.

If an author can use text to achieve the same visual effect, he or she should present the information as text rather than using an image. If for any reason, the author cannot format the text to get the same effect, the effect won't be reliably presented on the commonly available user agents, or using a technology to meet this criterion would interfere with meeting other criterion such as 1.4.4, then an image of text can be used. This includes instances where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc. Images of text may also be used in order to use a particular font that is either not widely deployed or which the author doesn't have the right to redistribute, or to ensure that the text would be anti-aliased on all user agents.

Images of text can also be used where it is possible for users to customize the image of text to match their requirements.

Techniques for satisfying this Success Criterion are the same as those for Success Criterion 1.4.9, except that they only need to apply if the visual presentation can be achieved with the technologies that the author is using. For Success Criterion 1.4.9, the sufficient techniques would be applied only when the user can customize the output.

See also *[Understanding Success Criterion 1.4.9 Images of Text (No Exception)](visual-audio-contrast-text-images.html)*.

### Specific Benefits of Success Criterion 1.4.5:

-   People with low vision (who may have trouble reading the text with the authored font family, size and/or color).

-   People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).

-   People with cognitive disabilities that affect reading.

Examples of Success Criterion 1.4.5
-----------------------------------

-   **Styled Headings**

    Rather than using bitmap images to present headings in a specific font and size, an author uses CSS to achieve the same result.

-   **Dynamically Generated Images**

    A Web page uses server-side scripting to present text as an an image. The page includes controls that allow the user to adjust the font size and foreground and background colors of the generated image.

-   **A quote**

    A Web page contains a quote. The quote itself is presented as italicized text, indented from the left margin. The name of the person to whom the quote is attributed is below the quote with 1.5x the line space and further indented from the left margin. CSS is used to position the text; set the spacing between lines; as well as display the text's font family, size, color and decoration.

-   **Navigation items**

    A Web page contains a menu of navigation links that have both an icon and text to describe their target. CSS is used to display the text's font family, size and foreground and background colors; as well as the spacing between the navigation links.

-   **A logo containing text**

    A Web site contains the organization's logo in the top left corner of each Web page. The logo contains logotype (text as part, or all, of the logo). The visual presentation of the text is essential to the identity of the logo and is included as a gif image which does not allow the text characteristics to be changed. The image has a text alternative.

-   **Representation of a font family**

    A Web page contains information about a particular font family. Substituting the font family with another font would defeat the purpose of the representation. The representation is included as a jpeg image which does not allow the text characteristics to be changed. The image has a text alternative.

-   **A representation of a letter**

    A Web page contains a representation of an original letter. The depiction of the letter in its original format is essential to information being conveyed about the time period in which it was written. The letter is included as a gif image which does not allow the text characteristics to be changed. The image has a text alternative.

-   **Symbolic text characters**

    A form allows users to enter blocks of text. The form provides a number of buttons, including functions to style the text and check spelling. Some of the buttons use text characters that do not form a sequence that expresses something in human language. For example "B" to increase font weight, "I" to italicize the text and "ABC" to check the spelling. The symbolic text characters are included as gif images which do not allow the text characteristics to be changed. The buttons have text alternatives.

-   **Customizable font settings in images of text**

    A Web site allows users to specify font settings and all images of text on the site are then provided based on those settings.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS Web fonts](http://www.alistapart.com/articles/cssatten)

-   [Weblog comments: WebKit now supports CSS @font-face rules](http://clagnut.com/blog/2042/)

-   [Creating Cross Browser Compatible CSS Text Shadows](http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows)

-   [CSS and text](http://www.yourhtmlsource.com/stylesheets/csstext.html)

Techniques and Failures for Success Criterion 1.4.5 - Images of Text
--------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

2.  [C30: Using CSS to replace text with images of text and providing user interface controls to switch](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C30) (CSS)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

### Additional Techniques (Advisory) for 1.4.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### <span id="d0e3925"></span> General techniques for non-text content

1.  Identifying informative non-text content (future link)

#### <span id="d0e3932"></span> CSS Techniques

1.  [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS)

2.  [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS)

3.  [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS)

4.  [C8: Using CSS letter-spacing to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C8) (CSS)

5.  [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

6.  Avoid applying text styling to text characters within a word (future link)

### Common Failures for SC 1.4.5

The following are common mistakes that are considered failures of Success Criterion 1.4.5 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="essentialdef"></span> essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality can not be achieved in another way that would conform

 <span id="images-of-textdef"></span> image of text  
text that has been rendered in a non-text form (e.g. an image) in order to achieve a particular visual effect

Note: This does not include <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> that is part of a picture that contains significant other visual content.

Example: A person's name on a nametag in a photograph.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>, where the sequence is expressing something in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a>

 <span id="visually-customizeddef"></span> visually customized  
the font, size, color, and background can be set

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.4 \[Resize text\]](visual-audio-contrast-scale.html "Understanding SC  1.4.4 [Resize text]")
-   [**Next:** SC 1.4.6 \[Contrast (Enhanced)\]](visual-audio-contrast7.html "Understanding SC  1.4.6 [Contrast (Enhanced)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
