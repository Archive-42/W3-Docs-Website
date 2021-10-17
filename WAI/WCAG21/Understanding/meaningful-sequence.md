-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Info and Relationships](info-and-relationships)
-   [Next SC: Sensory Characteristics](sensory-characteristics)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.3.2: Meaningful Sequence
==========================================================

> Success Criterion [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence) (Level A): When the sequence in which content is presented affects its meaning, a [correct reading sequence](#dfn-correct-reading-sequence) can be [programmatically determined](#dfn-programmatically-determined).

Intent
------

The intent of this Success Criterion is to enable a user agent to provide an alternative presentation of content while preserving the reading order needed to understand the meaning. It is important that it be possible to programmatically determine at least one sequence of the content that makes sense. Content that does not meet this Success Criterion may confuse or disorient users when assistive technology reads the content in the wrong order, or when alternate style sheets or other formatting changes are applied.

A sequence is *meaningful* if the order of content in the sequence cannot be changed without affecting its meaning. For example, if a page contains two independent articles, the relative order of the articles may not affect their meaning, as long as they are not interleaved. In such a situation, the articles themselves may have meaningful sequence, but the container that contains the articles may not have a meaningful sequence.

The semantics of some elements define whether or not their content is a meaningful sequence. For instance, in HTML, text is always a meaningful sequence. Tables and ordered lists are meaningful sequences, but unordered lists are not.

The order of content in a sequence is not always meaningful. For example, the relative order of the main section of a Web page and a navigation section does not affect their meaning. They could occur in either order in the programmatically determined reading sequence. As another example, a magazine article contains several callout sidebars. The order of the article and the sidebars does not affect their meaning. In these cases there are a number of different reading orders for a Web page that can satisfy the Success Criterion.

For clarity:

1.  Providing a particular linear order is only required where it affects meaning.
2.  There may be more than one order that is "correct" (according to the WCAG 2.0 definition).
3.  Only one correct order needs to be provided.

Benefits
--------

-   This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.

Examples
--------

-   **Example 1:** In a multi-column document, the linear presentation of the content flows from the top of a column to the bottom of the column, then to the top of the next column.
-   **Example 2:** CSS is used to position a navigation bar, the main story on a page, and a side story. The visual presentation of the sections does not match the programmatically determined order, but the meaning of the page does not depend on the order of the sections.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G57" class="general">G57: Ordering the content in a meaningful sequence</a> for all the content in the Web page
2.  Marking sequences in the content as meaningful using one of the following techniques **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G57" class="general">G57: Ordering the content in a meaningful sequence</a> for those sequences

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H34" class="html">H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H56" class="html">H56: Using the dir attribute on an inline element to resolve problems with nested directional runs</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C6" class="css">C6: Positioning content based on structural markup</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C8" class="css">C8: Using CSS letter-spacing to control spacing within a word</a>

3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C27" class="css">C27: Making the DOM order match the visual order</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3" class="pdf">PDF3: Ensuring correct tab and reading order in PDF documents</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL34" class="silverlight">SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F34" class="failure">F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F33" class="failure">F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F32" class="failure">F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F49" class="failure">F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F1" class="failure">F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS</a>

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

correct reading sequence

any sequence where words and paragraphs are presented in an order that does not change the meaning of the content

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
