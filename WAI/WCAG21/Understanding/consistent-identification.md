-   [Contents](. "Table of Contents")
-   [GL: Predictable](predictable)
-   [Previous SC: Consistent Navigation](consistent-navigation)
-   [Next SC: Change on Request](change-on-request)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.2.4: Consistent Identification
================================================================

> Success Criterion [3.2.4 Consistent Identification](https://www.w3.org/TR/WCAG21/#consistent-identification) (Level AA): Components that have the [same functionality](#dfn-same-functionality) within a [set of Web pages](#dfn-set-of-web-pages) are identified consistently.

Intent
------

The intent of this Success Criterion is to ensure consistent identification of functional components that appear repeatedly within a set of Web pages. A strategy that people who use screen readers use when operating a Web site is to rely heavily on their familiarity with functions that may appear on different Web pages. If identical functions have different labels (or, more generally, a different [accessible name](https://www.w3.org/TR/accname-aam-1.1/)) on different Web pages, the site will be considerably more difficult to use. It may also be confusing and increase the cognitive load for people with cognitive limitations. Therefore, consistent labeling will help.

This consistency extends to the text alternatives. If icons or other non-text items have the same functionality, then their text alternatives should be consistent as well.

If there are two components on a web page that both have the same functionality as a component on another page in a set of web pages, then all 3 must be consistent. Hence the two on the same page will be consistent.

While it is desirable and best practice always to be consistent within a single web page, 3.2.4 only addresses consistency within a set of web pages where something is repeated on more than one page in the set.

Benefits
--------

-   People who learn functionality on one page on a site can find the desired functions on other pages if they are present.
-   When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.
-   People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.

Examples
--------

-   **Example 1: Document Icon**

    A document icon is used to indicate document download throughout a site. The text alternative for the icon always begins with the word “Download," followed by a shortened form of the document title. Using different text alternatives to identify document names for different documents is a consistent use of text alternatives.

-   **Example 2: Check Mark**

    A check mark icon functions as "approved", on one page but as "included" on another. Since they serve different functions, they have different text alternatives.

-   **Example 3: Consistent references to other pages**

    A Web site publishes articles on-line. Each article spans multiple Web pages and each page contains a link to the first page, the next page and the previous page of the article. If the references to the next page read "page 2", "page 3", "page 4" etcetera, the labels are not the same but they are consistent. Therefore, these references are not failures of this Success Criterion.

-   **Example 4: Icons with similar functions**

    An e-commerce application uses a printer icon that allows the user to print receipts and invoices. In one part of the application, the printer icon is labeled "Print receipt" and is used to print receipts, while in another part it is labeled "Print invoice" and is used to print invoices. The labeling is consistent ("Print x"), but the labels are different to reflect the different functions of the icons. Therefore, this example does not fail the Success Criterion.

-   **Example 5: Save icon**

    A common "save" icon is used through out the site where page save function is provided on multiple Web pages.

-   **Example 6: Icon and adjacent link to same destination**

    An icon with alt text and a link are next to each other and go to the same location. The best practice would be to group them into one link as per <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H2" class="html">H2: Combining adjacent image and text links for the same resource</a>. However if they are visually positioned one above the other but separated in the source, this may not be possible. To meet the Success Criterion, the link text for these two links need only be consistent, not identical. But best practice is to have identical text so that when users encounter the second one, it is clear that it goes to the same place as the first.

-   **Example 7: Example of a Failure**

    A submit "search" button on one Web page and a "find" button on another Web page both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, the buttons have the same functionality but are not labeled consistently.

-   **Example 8: Failure primarily impacting assistive technology users**

    Two buttons with the same functionality visually have the same text, but have been given different `aria-label="..."` accessible names. For users of assistive technologies, these two buttons will be announced differently and inconsistently.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G197" class="general">G197: Using labels, names, and text alternatives consistently for content that has the same functionality</a> **AND** following the <a href="non-text-content#techniques" class="understanding">sufficient techniques for Success Criterion 1.1.1</a> and <a href="name-role-value#techniques" class="understanding">sufficient techniques for Success Criterion 4.1.2</a> for providing labels, names, and text alternatives.

Note

Text alternatives that are "consistent" are not always "identical." For instance, you may have a graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say "Go to page 4." Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say "Go to page 5". Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.

A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as "approved", "completed", or "included", to name a few, depending on the situation. Using "check mark" as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions.

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F31" class="failure">F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages</a>

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

same functionality

same result when used

A submit "search" button on one Web page and a "find" button on another Web page may both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, they would have the same functionality but would not be labeled consistently.

set of web pages

collection of [web pages](#dfn-web-page) that share a common purpose and that are created by the same author, group or organization

Examples include a publication which is split across multiple Web pages, where each page contains one chapter or other significant section of the work. The publication is logically a single contiguous unit, and contains navigation features that enable access to the full set of pages.

Note

Different language versions would be considered different sets of Web pages.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

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
