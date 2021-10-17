-   [Contents](. "Table of Contents")
-   [GL: Predictable](predictable)
-   [Previous SC: On Focus](on-focus)
-   [Next SC: Consistent Navigation](consistent-navigation)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.2.2: On Input
===============================================

> Success Criterion [3.2.2 On Input](https://www.w3.org/TR/WCAG21/#on-input) (Level A): Changing the setting of any [user interface component](#dfn-user-interface-component) does not automatically cause a [change of context](#dfn-changes-of-context) unless the user has been advised of the behavior before using the component.

Intent
------

The intent of this Success Criterion is to ensure that entering data or selecting a form control has predictable effects. Changing the setting of any user interface component is changing some aspect in the control that will persist when the user is no longer interacting with it. So checking a checkbox, entering text into a text field, or changing the selected option in a list control changes its setting, but activating a link or a button does not. Changes in context can confuse users who do not easily perceive the change or are easily distracted by changes. Changes of context are appropriate only when it is clear that such a change will happen in response to the user's action.

Note

This Success Criterion covers changes in context due to changing the setting of a control. Clicking on links or tabs in a tab control is activating the control, not changing the setting of that control.

Note

What is meant by "component" and "user interface component" here is also sometimes called "user interface element".

Benefits
--------

-   This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.
-   Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example:

    -   Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.

-   Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.

Examples
--------

-   A form is provided for creating calendar entries in a Web based calendaring and scheduling application. Along with the standard fields for subject, time and location, there is a set of radio buttons to select the type of calendar entry to create. The calendar entry type can be meeting, appointment or reminder. If the user selects the radio for meeting, additional fields are displayed on the page for entering the meeting participants. Different fields appear if the reminder button is chosen. Because only parts of the entry change and the overall structure remains the same the basic context remains for the user.
-   A form contains fields representing US phone numbers. All of the numbers have a three digit area code followed by a three digit prefix and finally a four digit number, and each part of the phone number is entered into a separate field. When the user completes the entry of one field the focus automatically moves to the next field of the phone number. This behavior of phone fields is described for the user at the beginning of the form.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G80" class="general">G80: Providing a submit button to initiate a change of context</a> using a technology-specific technique listed below

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H32" class="html">H32: Providing submit buttons</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H84" class="html">H84: Using a button with a select element to perform an action</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF15" class="pdf">PDF15: Providing submit buttons with the submit-form action in PDF forms</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL10" class="silverlight">SL10: Implementing a Submit-Form Pattern in Silverlight</a>

2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G13" class="general">G13: Describing what will happen before a change to a form control that causes a change of context to occur is made</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19" class="script">SCR19: Using an onchange event on a select element without causing a change of context</a>

Note

A change of content is not always a [change of context](#dfn-changes-of-context). This success criterion is automatically met if changes in content are not also changes of context.

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G201" class="general">G201: Giving users advanced warning when opening a new window</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F36" class="failure">F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F37" class="failure">F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed</a>

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
