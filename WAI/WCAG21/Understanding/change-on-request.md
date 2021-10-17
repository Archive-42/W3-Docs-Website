-   [Contents](. "Table of Contents")
-   [GL: Predictable](predictable)
-   [Previous SC: Consistent Identification](consistent-identification)
-   [Next SC: Error Identification](error-identification)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.2.5: Change on Request
========================================================

> Success Criterion [3.2.5 Change on Request](https://www.w3.org/TR/WCAG21/#change-on-request) (Level AAA): [Changes of context](#dfn-changes-of-context) are initiated only by user request or a [mechanism](#dfn-mechanism) is available to turn off such changes.

Intent
------

The intent of this Success Criterion is to encourage design of Web content that gives users full control of changes of context. This Success Criterion aims to eliminate potential confusion that may be caused by unexpected changes of context such as automatic launching of new windows, automatic submission of forms after selecting an item from a list, etcetera. Such unexpected changes of context may cause difficulties for people with motor impairments, people with low vision, people who are blind, and people with certain cognitive limitations.

Some types of change of context are not disruptive to some users, or actively benefit some users. For example, single-switch users rely on context changes that are animated by the system, and the preferences of low-vision users may vary depending on how much of the content they can see at once and how much of the session structure they can retain in working memory. Some types of content, such as slide shows, require the ability to change context in order to provide the intended user experience. Content that initiates changes of context automatically only when user preferences allow can conform to this Success Criterion.

Note

It is possible for more than one change of context to occur simultaneously. For example, clicking on a link which automatically opens a new window is an example of two separate changes of context related to the change in content and to the change in the viewport (window). The change in the content in this case is initiated by user request when they click on the link, but unless the user can be aware that the link will open in a new window then that change of context cannot be regarded as user-initiated.

Benefits
--------

-   Individuals who are unable to detect changes of context or may not realize that the context has changed are less likely to become disoriented while navigating a site. For example:

    -   individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.

-   Some individuals with low vision, with reading and intellectual disabilities, and who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.
-   People with certain **cognitive limitations** do not get confused if automatic redirects are performed by the Web server instead of the browser.

Examples
--------

-   **an "update now" button**

    Instead of automatically updating the content, the author provides an "Update now" button that requests a refresh of the content.

-   **An automatic redirection**

    A user is automatically redirected from an old page to a new page in such a way that he or she never realizes the redirect has occurred.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Use standard redirects: don't break the back button!](https://www.w3.org/QA/Tips/reback) (W3C QA Tip).
-   [HTTP/1.1 Status Code Definitions: Redirection 3xx](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3).

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the Web page allows automatic updates:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G76" class="general">G76: Providing a mechanism to request an update of the content instead of updating automatically</a>

#### Situation B: If automatic redirects are possible:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR1" class="server">SVR1: Implementing automatic redirects on the server side instead of on the client side</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G110" class="general">G110: Using an instant client-side redirect</a> using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H76" class="html">H76: Using meta refresh to create an instant client-side redirect</a>

#### Situation C: If the Web page uses pop-up windows:

1.  Including pop-up windows using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H83" class="html">H83: Using the target attribute to open a new window on user request and indicating this in link text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR24" class="script">SCR24: Using progressive enhancement to open new windows on user request</a>

#### Situation D: If using an onchange event on a select element:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19" class="script">SCR19: Using an onchange event on a select element without causing a change of context</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G200" class="general">G200: Opening new windows and tabs from a link only when necessary</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F60" class="failure">F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F61" class="failure">F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F9" class="failure">F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F22" class="failure">F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F52" class="failure">F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F40" class="failure">F40: Failure due to using meta redirect with a time limit</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F41" class="failure">F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page</a>

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

changes of context

major changes in the content of the [Web page](#dfn-web-page) that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  [user agent](#dfn-user-agent);
2.  [viewport](#dfn-viewport);
3.  focus;
4.  [content](#dfn-content) that changes the meaning of the [Web page](#dfn-web-page)

Note

A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

conformance

satisfying all the requirements of a given standard, guideline or specification

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

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

viewport

object in which the user agent presents content

Note

The [user agent](#dfn-user-agent) presents content through one or more viewports. Viewports include windows, frames, loudspeakers, and virtual magnifying glasses. A viewport may contain another viewport (e.g., nested frames). Interface components created by the user agent such as prompts, menus, and alerts are not viewports.

Note

This definition is based on [User Agent Accessibility Guidelines 1.0 Glossary](https://www.w3.org/TR/WAI-USERAGENT/glossary.html) \[\[UAAG10\]\].

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
