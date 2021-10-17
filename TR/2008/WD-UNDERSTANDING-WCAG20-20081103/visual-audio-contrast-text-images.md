[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.8 \[Visual Presentation\]](visual-audio-contrast-visual-presentation.html "Understanding SC  1.4.8 [Visual Presentation]")
-   [**Next:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")

On this page:

-   [Intent](#visual-audio-contrast-text-images-intent-head)
-   [Examples](#visual-audio-contrast-text-images-examples-head)
-   [Related Resources](#visual-audio-contrast-text-images-resources-head)
-   [Techniques & Failures](#visual-audio-contrast-text-images-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-text-images"></span> **Images of Text (No Exception)**<span class="screenreader">:</span> Understanding SC 1.4.9
================================================================================================================================================

> **[1.4.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-text-images) Images of Text (No Exception):** <a href="#images-of-textdef" class="termref">Images of text</a> are only used for <a href="#puredecdef" class="termref">pure decoration</a> or where a particular presentation of <a href="#textdef" class="termref">text</a> is <a href="#essentialdef" class="termref">essential</a> to the information being conveyed. (Level AAA)
>
> Note: Logotypes (text that is part of a logo or brand name) are considered essential.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable people who require a particular visual presentation of text to be able to adjust the text presentation as required. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.

This means implementing the text in a manner that allows its presentation to be changed or providing a mechanism by which users can select an alternate presentation. Using images of text is an example of an implementation that does not allow users to alter the presentation of the text within it.

In some situations, a particular visual presentation of the text is essential to the information being conveyed. This means that information would be lost without that particular visual presentation. In this case implementing the text in a manner that allows its presentation to be changed is not required. This includes text that demonstrates a particular visual aspect of the text, such as a particular font family, or text that conveys an identity, such as text within a company logo.

Text that is decorative does not require implementing the text in a manner that allows its presentation to be changed.

### Specific Benefits of Success Criterion 1.4.9:

-   People with low vision (who may have trouble reading the text with the authored font family, size and/or color).

-   People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).

-   People with cognitive disabilities that affect reading.

Examples of Success Criterion 1.4.9
-----------------------------------

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

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [CSS Web fonts](http://www.alistapart.com/articles/cssatten)

-   [Weblog comments: WebKit now supports CSS @font-face rules](http://clagnut.com/blog/2042/)

-   [Creating Cross Browser Compatible CSS Text Shadows](http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows)

-   [CSS and text](http://www.yourhtmlsource.com/stylesheets/csstext.html)

Techniques and Failures for Success Criterion 1.4.9 - Images of Text (No Exception)
-----------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

2.  [C30: Using CSS to replace text with images of text and providing user interface controls to switch](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C30) (CSS)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

### Additional Techniques (Advisory) for 1.4.9

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### <span id="d0e4890"></span> General Techniques for Non-Decorative Content

-   Using server-side scripts to resize images of text (future link)

#### <span id="d0e4897"></span> CSS Techniques

-   [C12: Using percent for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C12) (CSS)

-   [C13: Using named font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C13) (CSS)

-   [C14: Using em units for font sizes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C14) (CSS)

-   [C8: Using CSS letter-spacing to control spacing within a word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C8) (CSS)

-   [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

-   Avoid applying text styling to text characters within a word (future link)

### Common Failures for SC 1.4.9

The following are common mistakes that are considered failures of Success Criterion 1.4.9 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="essentialdef"></span> essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality can not be achieved in another way that would conform

 <span id="images-of-textdef"></span> image of text  
text that has been rendered in a non-text form (e.g. an image) in order to achieve a particular visual effect

Note: This does not include <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> that is part of a picture that contains significant other visual content.

Example: A person's name on a nametag in a photograph.

 <span id="puredecdef"></span> pure decoration  
serving only an aesthetic purpose, providing no information, and having no functionality

Note: Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

Example: The cover page of a dictionary has random words in very light text in the background.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>, where the sequence is expressing something in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a>

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.8 \[Visual Presentation\]](visual-audio-contrast-visual-presentation.html "Understanding SC  1.4.8 [Visual Presentation]")
-   [**Next:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
