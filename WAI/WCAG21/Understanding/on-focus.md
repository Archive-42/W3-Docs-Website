-   [Contents](. "Table of Contents")
-   [GL: Predictable](predictable)
-   [Previous SC: Pronunciation](pronunciation)
-   [Next SC: On Input](on-input)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.2.1: On Focus
===============================================

> Success Criterion [3.2.1 On Focus](https://www.w3.org/TR/WCAG21/#on-focus) (Level A): When any [user interface component](#dfn-user-interface-component) receives focus, it does not initiate a [change of context](#dfn-changes-of-context).

Intent
------

The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:

-   forms submitted automatically when a component receives focus;
-   new windows launched when a component receives focus;
-   focus is changed to another component when that component receives focus;

Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context.

Note

What is meant by "component" here is also sometimes called "user interface element" or "user interface component''.

Benefits
--------

-   This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Examples
--------

-   **Example 1: A dropdown menu**

    A dropdown menu on a page allows users to choose between jump destinations. If the person uses the keyboard to move down to a choice and activates it (with a spacebar or enter key) it will jump to a new page. However, if the person moves down to a choice and either hits the escape or the tab key to move out of the pulldown menu – it does not jump to a new screen as the focus shifts out of the dropdown menu.

-   **Example of a Failure: A help dialog**

    When a field receives focus, a help dialog window describing the field and providing options opens. As a keyboard user tabs through the Web page, the dialog opens, moving the keyboard focus away from the control every time the user attempts to tab past the field.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G107" class="general">G107: Using "activate" rather than "focus" as a trigger for changes of context</a>

Note

A change of content is not always a [change of context](#dfn-changes-of-context). This success criterion is automatically met if changes in content are not also changes of context.

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G200" class="general">G200: Opening new windows and tabs from a link only when necessary</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G201" class="general">G201: Giving users advanced warning when opening a new window</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F55" class="failure">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>

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

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

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
