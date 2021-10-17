-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Resize text](resize-text)
-   [Next SC: Contrast (Enhanced)](contrast-enhanced)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.5: Images of Text
=====================================================

> Success Criterion [1.4.5 Images of Text](https://www.w3.org/TR/WCAG21/#images-of-text) (Level AA): If the technologies being used can achieve the visual presentation, [text](#dfn-text) is used to convey information rather than [images of text](#dfn-image-of-text) except for the following:
>
> Customizable  
> The image of text can be [visually customized](#dfn-visually-customized) to the user's requirements;
>
> Essential  
> A particular presentation of text is [essential](#dfn-essential) to the information being conveyed.
>
> Logotypes (text that is part of a logo or brand name) are considered essential.

Intent
------

The intent of this Success Criterion is to encourage authors, who are using technologies which are capable of achieving their desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.

If an author can use text to achieve the same visual effect, he or she should present the information as text rather than using an image. If for any reason, the author cannot format the text to get the same effect, the effect won't be reliably presented on the commonly available user agents, or using a technology to meet this criterion would interfere with meeting other criteria such as 1.4.4, then an image of text can be used. This includes instances where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc. Images of text may also be used in order to use a particular font that is either not widely deployed or which the author doesn't have the right to redistribute, or to ensure that the text would be anti-aliased on all user agents.

Images of text can also be used where it is possible for users to customize the image of text to match their requirements.

The definition of image of text contains the note: Note: This does not include text that is part of a picture that contains significant other visual content. Examples of such pictures include graphs, screenshots, and diagrams which visually convey important information through more than just text.

Techniques for satisfying this Success Criterion are the same as those for Success Criterion 1.4.9, except that they only need to apply if the visual presentation can be achieved with the technologies that the author is using. For Success Criterion 1.4.9, the sufficient techniques would be applied only when the user can customize the output.

See also [1.4.4: Images of Text (No Exception)](images-of-text-no-exception).

Benefits
--------

-   People with low vision (who may have trouble reading the text with the authored font family, size and/or color).
-   People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).
-   People with cognitive disabilities that affect reading.

Examples
--------

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

-   [CSS Web fonts](http://alistapart.com/article/cssatten)
-   [Weblog comments: WebKit now supports CSS @font-face rules](http://clagnut.com/blog/2042/)
-   [Creating Cross Browser Compatible CSS Text Shadows](http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows)
-   [CSS and text](http://www.yourhtmlsource.com/stylesheets/csstext.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C22" class="css">C22: Using CSS to control visual presentation of text</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL31" class="silverlight">SL31: Using Silverlight Font Properties to Control Text Presentation</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C30" class="css">C30: Using CSS to replace text with images of text and providing user interface controls to switch</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G140" class="general">G140: Separating information and structure from presentation to enable different presentations</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7" class="pdf">PDF7: Performing OCR on a scanned PDF document to provide actual text</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### CSS Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C12" class="css">C12: Using percent for font sizes</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C13" class="css">C13: Using named font sizes</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C14" class="css">C14: Using em units for font sizes</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C8" class="css">C8: Using CSS letter-spacing to control spacing within a word</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C6" class="css">C6: Positioning content based on structural markup</a>

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

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

image of text

text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

Note

This does not include [text](#dfn-text) that is part of a picture that contains significant other visual content.

A person's name on a nametag in a photograph.

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

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

visually customized

the font, size, color, and background can be set
