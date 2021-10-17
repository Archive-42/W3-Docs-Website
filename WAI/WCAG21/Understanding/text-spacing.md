-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Non-text Contrast](non-text-contrast)
-   [Next SC: Content on Hover or Focus](content-on-hover-or-focus)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.12: Text Spacing
====================================================

> Success Criterion [1.4.12 Text Spacing](https://www.w3.org/TR/WCAG21/#text-spacing) (Level AA): In content implemented using markup languages that support the following [text](#dfn-text) [style properties](#dfn-style-property), no loss of content or functionality occurs by setting all of the following and by changing no other style property:
>
> -   Line height (line spacing) to at least 1.5 times the font size;
> -   Spacing following paragraphs to at least 2 times the font size;
> -   Letter spacing (tracking) to at least 0.12 times the font size;
> -   Word spacing to at least 0.16 times the font size.
>
> Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.

Intent
------

The intent of this Success Criterion (SC) is to ensure that people can override author specified text spacing to improve their reading experience. Each of the requirements stipulated in the SC's four bullets helps ensure text styling can be adapted by the user to suit their needs.

The specified metrics set a minimum baseline. The values in between the author's metrics and the metrics specified in this SC should not have loss of content or functionality.

This SC focuses on the ability to increase spacing between lines, words, letters, and paragraphs. Any combination of these may assist a user with effectively reading text. As well, ensuring users can override author settings for spacing also significantly increases the likelihood other style preferences can be set by the user. For example, a user may need to change to a wider font family than the author has set in order to effectively read text.

### Author Responsibility

This SC does not dictate that authors must set all their content to the specified metrics. Rather, it specifies that an author's content has the ability to be set to those metrics without loss of content or functionality. The author requirement is both to not interfere with a user's ability to override the author settings, and to ensure that content thus modified does not break content in the manners shown in figures 1 through 3 in Effects of Not Allowing for Spacing Override. The values in the SC are a baseline. Authors are encouraged to surpass the values specified, not see them as a ceiling to build to. If the user chooses to go beyond the metrics specified any resulting loss of content or functionality is the user's responsibility.

#### Applicability

If the markup-based technologies being used are capable of overriding text to the Success Criterion's metrics, then this SC is applicable. For instance Cascading Style Sheet/HTML technologies are quite able to allow for the specified spacing metrics. Plugin technologies would need to have a built-in ability to modify styles to the specified metrics. Currently, this SC does not apply to PDF as it is not implemented using markup.

Examples of text that are typically not affected by [style properties](#dfn-style-property) and not expected to adapt are:

-   Video captions embedded directly into the video frames and not provided as an associated caption file
-   [Images of text](#dfn-image-of-text)

For this SC, [canvas](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element) implementations of text are considered to be [images of text](#dfn-image-of-text).

### User Responsibility

The ability to read and derive meaning from the overridden spacing rests with the user. The user may choose to exceed the spacing adjustments in the SC. If the increased spacing causes loss of content or functionality, the user will adjust or return to the author’s original spacing or spacing within the bounds of the SC. Regardless, the user needs the flexibility to adjust spacing within the bounds set in the SC without loss of content or functionality. Such changes may be achieved via user stylesheet, bookmarklet, extension, or application.

### Effects of Not Allowing for Spacing Override

The following images show some types of failures when authors do not take into consideration that users may override spacing to the metrics specified in this Success Criterion.

#### Text Cut Off

The bottom portion of the words "Your Needs" is cut off in a heading making that text unreadable in Figure 1. It should read "We Provide a Mobile Application Service to Meet Your Needs."

<figure><img src="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/images/b/ba/Spacing_cutoff_fail_vertical.png" alt="Figure 1 Vertical text cut off is a failure." width="420" height="190" /><figcaption>Figure 1 Vertical text cut off is a failure.</figcaption></figure>In Figure 2 the last portion of text is cut off in 3 side-by-side headings. The 1st heading should read "A cog in the wheel." But it reads "A cog in the whe". Only half of the second "e" is visible and the letter "l" is completely missing. The 2nd heading should read "A penny for your thoughts". But it reads "A penny for your". The 3rd should read "Back to the drawing board." But it reads "Back to the drawi".

<figure><img src="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/images/c/c2/Spacing_cutoff_fail_horizontal.png" alt="Figure 2 Horizontal text cut off is a failure." width="509" height="184" /><figcaption>Figure 2 Horizontal text cut off is a failure.</figcaption></figure>

#### Text Overlap

In Figure 3 the last 3 words "Groups and Programs" of the heading "Technologists Seeking Input from Groups and Programs" overlap the following sentence. That sentence should read, "You are invited to share ideas and areas of interest related to the integration of technology from a group or program perspective." But the words "You are invited to share ideas" are obscured and unreadable.

<figure><img src="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/images/1/11/Spacing_overlap_fail.png" alt="Figure 3 Overlapping text is a failure." width="510" height="170" /><figcaption>Figure 3 Overlapping text is a failure.</figcaption></figure>

Benefits
--------

-   People with low vision who require increased space between lines, words, and letters are able to read text.
-   People with dyslexia may increase space between lines, words, and letters to increase reading speed.
-   Although not required by this SC, white space between blocks of text can help people with cognitive disabilities discern sections and call out boxes.

Examples
--------

When spacing is be overridden to the SC's metrics:

1.  Text fits within the bounds of its containing box without being cut off.
2.  Text fits within the bounds of its containing box without overlapping other boxes.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

### Research

The grounds for this SC are [based on research](#resources). The metrics chosen as measures are based on the [McLeish](http://journals.sagepub.com/doi/pdf/10.1177/0264619607075995) study. She ran from .04 to .25 em tests. McLeish found an increasing curve in reading speed of actual materials up to .25, but it started to flatten at .20. Previous studies that reported no improvement started at .5em. Right at the flat point. [Wayne E. Dick, Ph.D. analyzed the McLeish study](https://lists.w3.org/Archives/Public/public-low-vision-a11y-tf/2017Jun/0047.html) and translated from points. Dr. Dick recommended the metrics that the Working Group adopted.

#### Languages and Scripts

Roughly 480 different languages and scripts [have been tested](https://lists.w3.org/Archives/Public/public-low-vision-a11y-tf/2018Feb/0001.html). Maximum spacing adjustments allowed by the SC were set on the following 3 pages:

1.  [Languages in their own writing systems](http://www.geonames.de/languages.html)
2.  [Online Encyclopedia of writing systems and languages – language names](https://www.omniglot.com/language/names.htm)
3.  [Universal Declaration of Human Rights (Article 1)](https://www.omniglot.com/language/phrases/index.htm)

#### Results

No adverse effects occurred. The following are the specific findings:

Character Spacing   
Individual characters in words remained intact though they were spaced a bit further apart.

Word Spacing   
Words were spaced farther apart. In languages that do not have words (e.g. Japanese) applying word spacing had no effect. This is expected.

Line Height  
Changing line height did not separate diacritics from characters, nor did it adversely impact ascenders or descenders.

As previously discussed, the ability to read text with adjusted spacing is a user responsibility. This is true no matter the language.

The SC's exception addresses cases where a text style property is not used in a language or script. In such cases, authors are only required to ensure relevant properties do not break the layout.

### Other references

-   Allan, Kirkpatrick, Lawton Henry, Editors. (2017). [Accessibility Requirements for People with Low Vision (3.4 Spacing for Reading)](https://www.w3.org/TR/low-vision-needs/#spacing). World Wide Web Consortium.
-   [Stylus Team](https://github.com/openstyles/stylus/graphs/contributors) (2012). [Stylus browser extension](https://github.com/openstyles/stylus/blob/master/README.md) (Firefox, Chrome, and Opera) (compatible with Userstyles.org material).
-   Campbell, Alastair. (2017). [Text Adaptation Bookmarklet](https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js). GitHub.
-   Chung, Susana T. L. (2012). [Dependence of Reading Speed on Letter Spacing in Central Vision Loss](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3429790/). Optom Vis Sci.
-   Chung, Susana T. L. (2002). [The Effect of Letter Spacing on Reading Speed in Central and Peripheral Vision (PDF)](http://journals.sagepub.com/doi/pdf/10.1177/0264619607075995). IOVS ARVO Journals.
-   Mcleish, Eve. (2007). [A study of the effect of letter spacing on the reading speed of young readers with low vision (PDF)](http://journals.sagepub.com/doi/pdf/10.1177/0264619607075995). The British Journal of Visual Impairment 25.2: 133-43.
-   Rello, L., & Baeza-Yates, R. A. (2017). [How to present more readable text for people with dyslexia](https://link.springer.com/article/10.1007/s10209-015-0438-8). Universal Access in the Information Society, 16(1), 29-49.
-   Sjoblom, A.M., Eaton, E. and Stagg, S.D., (2016). [The effects of letter spacing and coloured overlays on reading speed and accuracy in adult dyslexia](http://onlinelibrary.wiley.com/doi/10.1111/bjep.12127/full). British Journal of Educational Psychology, 86(4), pp. 630-639).
-   Zorzi, Marco et, al. (2012). [Extra-large letter spacing improves reading in dyslexia](http://www.pnas.org/content/109/28/11455.full). Proceedings of the National Academy of Sciences.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [C36: Allowing for text spacing override](https://www.w3.org/WAI/WCAG21/Techniques/css/C36)
-   [C35: Allowing for text spacing without wrapping](https://www.w3.org/WAI/WCAG21/Techniques/css/C35)

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C8" class="css">C8: Using CSS letter-spacing to control spacing within a word</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C21" class="css">C21: Specifying line spacing in CSS</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C28" class="css">C28: Specifying the size of text containers using em units</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F104: Failure of Success Criterion 1.4.12 due to clipped or overlapped content when text spacing is adjusted](https://www.w3.org/WAI/WCAG21/Techniques/failures/F104)

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

style property

property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents

Style properties can have several origins:

-   User agent default styles: The default style property values applied in the absence of any author or user styles. Some web content technologies specify a default rendering, others do not;
-   Author styles: Style property values that are set by the author as part of the content (e.g. in-line styles, author style sheets);
-   User styles: Style property values that are set by the user (e.g. via user agent interface settings, user style sheets)

text

sequence of characters that can be [programmatically determined](#dfn-programmatically-determined), where the sequence is expressing something in [human language](#dfn-human-language)

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
