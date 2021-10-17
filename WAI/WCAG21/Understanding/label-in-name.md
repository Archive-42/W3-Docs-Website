-   [Contents](. "Table of Contents")
-   [GL: Input Modalities](input-modalities)
-   [Previous SC: Pointer Cancellation](pointer-cancellation)
-   [Next SC: Motion Actuation](motion-actuation)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.5.3: Label in Name
====================================================

> Success Criterion [2.5.3 Label in Name](https://www.w3.org/TR/WCAG21/#label-in-name) (Level A): For [user interface components](#dfn-user-interface-component) with [labels](#dfn-label) that include [text](#dfn-text) or [images of text](#dfn-image-of-text), the [name](#dfn-name) contains the text that is presented visually.
>
> A best practice is to have the text of the label at the start of the name.

Intent
------

The intent of this Success Criterion is to ensure that the words which visually label a component are also the words associated with the component programmatically. This helps ensure that people with disabilities can rely on visible labels as a means to interact with the components.

Most controls are accompanied by a visible text **label**. Those same controls have a programmatic **name**, also known as the [Accessible Name](https://www.w3.org/TR/accname-aam-1.1/). Users typically have a much better experience if the words and characters in the visible label of a control match or are contained within the accessible name. When these match, speech-input users (i.e., users of speech recognition applications) can navigate by speaking the visible text labels of components, such as menus, links, and buttons, that appear on the screen. Sighted users who use text-to-speech (e.g., screen readers) will also have a better experience if the text they hear matches the text they see on the screen.

Note that where a visible text label does not exist for a component, this Success Criterion does not apply to that component.

Where text labels exist and are properly linked to the user interface components through established authoring practices, the label and name will normally match. When they don't match, speech-input users who attempt to use the visible text label as a means of navigation or selection (e.g., "move to Password") will be unsuccessful. The speech-based navigation fails because the visible label spoken by the users does not match (or is not part of) the accessible name that is enabled as a speech-input command. In addition, when the accessible name is different from the visible label, it may function as a hidden command that can be accidentally activated by speech-input users.

Mismatches between visible labels and programmatic names for controls are even more of an issue for speech-input and text-to-speech users who also have cognitive challenges. Mismatches create an extra cognitive load for speech-input users, who must remember to say a speech command that is different from the visible label they see on a control. It also creates extra cognitive load for a text-to-speech user to absorb and understand speech output that does not match the visible label.

In order for the label text and accessible name to be matched, it is first necessary to determine which text on the screen should be considered a label for any given control. There are often multiple text strings in a user interface that may be relevant to a control. However, there are reasons why it is best to conservatively interpret the label as being only the text in close proximity.

Conventionally the label for user interface components is the adjacent text string. The typical positioning for left to right languages is:

-   immediately to the left of comboboxes, dropdown lists, text inputs, and other widgets (or in the absence of left-side labels, immediately above and aligned with the left edge of each input)
-   immediately to the right of checkboxes and radio buttons
-   inside buttons and tabs or immediately below icons serving as buttons

The rationale for some of these conventions is explained in [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G162).

It is important to bias towards treating only the adjacent text as a label because liberal interpretations of what constitutes a text label can jeopardize the value of this Success Criterion (SC) by lessening predictability. Isolating the label to the single string in close proximity to the component makes it easier for developers, testers, and end users to identify the label targeted for evaluation in this SC. Predictable interpretation of labeling allows users of speech recognition technologies to interact with the element via its conventionally positioned label, and allows users of screen reading technologies to enjoy consistency between the nearby visible label and the announced name of the component.

Note that placeholder text within an input field is not considered an appropriate means of providing a label. The [HTML5 specification](https://www.w3.org/TR/html52/sec-forms.html#the-placeholder-attribute) states “The placeholder attribute should not be used as an alternative to a &lt;label&gt;.” However, it is worth noting that "label" in that HTML5 statement is in code brackets and links to the `label` element. For the purposes of this Label in Name Success Criterion, "label" is not used in such a programmatic sense but is simply referring to a text string in close visual proximity to a component. As such, in the absence of any other nearby text string (as described in the preceding list), if an input contains placeholder text, such text may be a candidate for Label in Name. This is supported both through the accessible name calculation (discussed later) and from the practical sense that where a visible label is not otherwise provided, it is likely that a speech-input user may attempt to use the placeholder text value as a means of interacting with the input.

### Text labels "express something in human language"

#### Symbolic text characters

For the purposes of this SC, text should not be considered a visible label if it is used in a symbolic manner, rather than directly “expressing something in human language” as per the definition of [text](#dfn-text) in WCAG. For example, [1.4.5 Images of Text](https://www.w3.org/TR/WCAG21/#images-of-text) describes considerations for "symbolic text characters." In the images of text example "B", "I", and "ABC" appear on icons in a text editor, where they are meant to symbolize the functions for Bold, Italics, and Spelling, respectively. In such a case, the accessible name should be the function the button serves (e.g., "Spell check" or "Check spelling"), not the visible symbolic characters. A similar text editor is shown in the figure below.

![Figure 1 A detail of the rich text editor in Github, showing a variety of unlabeled icons, including icons resembling text characters.](img/rich-text-editor-detail.png)

Likewise, where an author has used a greater-than symbol ("&gt;") to mimic the appearance of the right-facing arrow, the text does not convey something in human language. It is a symbol, in this scenario likely meant to mimic the icons used for a "Play" button or a "Next" arrow.

#### Punctuation and capitalization

The use of punctuation and capitalization in labels *may* also be considered optional for the same reason. For example, the colon conventionally added at the end of input labels does not express something in human language, and capitals on the first letter of each word in a label do not normally alter the words' meaning. This is particularly relevant in the context of this SC, since it is primarily aimed at users of speech recognition; capitals and most punctuation are frequently ignored when a user speaks a label as a means of interacting with a control.

While it is certainly not an error to include the colon and capitalization in the accessible name, a computed name of "First name" should not be considered a failure of "First Name:".  
First Name:  
Likewise, "Next…" visibly shown on a button could have "Next" as the accessible name. When in doubt, where a meaningful visible label exists, match the string exactly for the accessible name.  

#### Mathematical expressions and formulae

Mathematical expressions are an exception to the previous subsection about symbolic characters. Math symbols can be used as labels; for example "11×3=33" and "A&gt;B" convey meaning. The label should not be overwritten in the accessible name, and substitutions of words where a formula is used should be avoided since there are multiple ways to express the same equation. For example, making the name "eleven multiplied by three is equivalent to thirty-three" might mean a user who said "eleven times three equals thirty-three" may not match. It is best to leave the formulas as used in the label and count on the user's familiarity with their speech software to achieve a match. Further, converting a mathematical formula label into an accessible name that is a spelled-out equivalent may create issues for translation. The name should match the label's formula text. Note that a consideration for authors is to use the proper symbol in the formula. For instance 11x3 (with a lower or upper case letter X), 11\*3 (with the asterisk symbol), and 11×3 (with the `&`times`;` symbol) are all easy for sighted users to interpret as meaning the same formula, but may not all be matched to "11 times 3" by the speech recognition software. The proper operator symbol (in this case the times symbol) should be used.  
A&gt;B A=B A&lt;B

### Accessible Name and Description Computation specification

It is important to understand how the accessible name is derived. The [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/) and the [HTML Accessibility API Mappings 1.0](https://w3c.github.io/html-aam/#accessible-name-and-description-computation) describe how the accessible name is computed, including which attributes are considered in its calculation, and in what order of preference. If a component has multiple possible attribute values that could be used for its accessible name, only the most preferred of those values will be computed. None of the other, less preferred values will be part of the name. For the most part, existing established programmatic relationships between labels and controls are reinforced by the specification.

Other text displayed on the screen that is correctly coded to meet 1.3.1: Info and Relationships is **not** normally factored into the calculation for the accessible name of a UI component without author intervention (via ARIA labeling techniques). The most common of these are:

-   headings and instructions
-   group labels for sets of components (i.e., used with `legend`/`fieldset` or with role of `group` or `radiogroup`)

Such textual information may constitute part of the component's *description*. So from both a programmatic viewpoint, and from the conservative tactic of only considering a label to be "adjacent text," neither headings, instructions, nor group 'labels' should normally be considered **labels** for the purpose of this Success Criterion.

It is important to note that the specification allows authors to override the name calculated through native semantics. Both `aria-label` and `aria-labelledby` take precedence in the name calculation, overriding the visible text as the accessible name even when the visible text label is programmatically associated with the control. For this reason, when a visible label already exists, `aria-label` should be avoided or used carefully, and `aria-labelledby` should be used as a supplement with care.

Finally, `aria-describedby` is not included in the Accessible Name computation (instead it is part of the Accessible Description computation). By convention, text associated with a control through `aria-describedby` is announced immediately after the accessible name by screen readers. Therefore, the context of headings, instructions, and group labels can be provided through the accessible description to assist users of screen readers without affecting the experience of those who navigate using speech recognition software.

Benefits
--------

-   Speech-input users can directly activate controls on a page with fewer surprising changes of focus.
-   Text-to-speech users will have a better experience because the labels that they hear match the visible text labels that they see on the screen.

Examples
--------

-   **Accessible name matches visible label:** The accessible name and visible label of a control match.
-   **Accessible name starts with visible label:** The acessible name "Search for a value" begins with the text of the visible label, "Search".

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Name and Description Computation](https://www.w3.org/TR/accname-aam-1.1/)
-   [Accessible Name and Description Computation in HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG21/Techniques/general/G208)
-   [G211: Matching the accessible name to the visible label](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G162)
-   @@ If an icon has no accompanying text, consider using its hover text as its accessible name

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F96: Failure due to the accessible name not containing the visible label text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96)
-   @@ Accessible name contains the visible label text, but the words of the visible label are not in the same order as they are in the visible label text
-   @@ Accessible name contains the visible label text, but one or more other words are interspersed in the label

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

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

image of text

text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

Note

This does not include [text](#dfn-text) that is part of a picture that contains significant other visual content.

A person's name on a nametag in a photograph.

label

[text](#dfn-text) or other component with a [text alternative](#dfn-text-alternative) that is presented to a user to identify a component within Web [content](#dfn-content)

Note

A label is presented to all users whereas the [name](#dfn-name) may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

Note

The term label is not limited to the label element in HTML.

name

text by which software can identify a component within Web content to the user

Note

The name may be hidden and only exposed by assistive technology, whereas a [label](#dfn-label) is presented to all users. In many (but not all) cases, the label and the name are the same.

Note

This is unrelated to the name attribute in HTML.

non-text content

any content that is not a sequence of characters that can be [programmatically determined](#dfn-programmatically-determined) or where the sequence is not expressing something in [human language](#dfn-human-language)

Note

This includes [ASCII Art](#dfn-ascii-art) (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

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

user interface component

a part of the content that is perceived by users as a single control for a distinct function

Note

Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

Note

User interface components include form elements and links as well as components generated by scripts.

Note

What is meant by "component" or "user interface component" here is also sometimes called "user interface element".

An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
