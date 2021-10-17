-   [Contents](. "Table of Contents")
-   [GL: Input Assistance](input-assistance)
-   [Previous SC: Help](help)
-   [Next SC: Parsing](parsing)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.3.6: Error Prevention (All)
=============================================================

> Success Criterion [3.3.6 Error Prevention (All)](https://www.w3.org/TR/WCAG21/#error-prevention-all) (Level AAA): For [Web pages](#dfn-web-page) that require the user to submit information, at least one of the following is true:
>
> Reversible  
> Submissions are reversible.
>
> Checked  
> Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
>
> Confirmed  
> A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Intent
------

The intent of this Success Criterion is to help users with disabilities avoid consequences that may result from making a mistake when submitting form data. This criterion builds on <a href="error-prevention-legal-financial-data" class="guideline">Success Criterion 3.3.4</a> in that it applies to all forms that require users to submit information.

Users with disabilities may be more likely to make mistakes and may have more difficulty detecting or recovering from mistakes. People with reading disabilities may transpose numbers and letters, and those with motor disabilities may hit keys by mistake. Providing the ability to reverse actions allows users to correct a mistake. Providing the ability to review and correct information gives the user an opportunity to detect a mistake before taking an action.

Benefits
--------

-   Providing safeguards to avoid consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Following the <a href="error-prevention-legal-financial-data#techniques" class="understanding">sufficient techniques for Success Criterion 3.3.4</a> for all forms that require the user to submit information.

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
