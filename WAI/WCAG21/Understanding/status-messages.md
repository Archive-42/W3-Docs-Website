-   [Contents](. "Table of Contents")
-   [GL: Compatible](compatible)
-   [Previous SC: Name, Role, Value](name-role-value)
-   [Next: Understanding Conformance](conformance)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 4.1.3: Status Messages
======================================================

> Success Criterion [4.1.3 Status Messages](https://www.w3.org/TR/WCAG21/#status-messages) (Level AA): In content implemented using markup languages, [status messages](#dfn-status-message) can be [programmatically determined](#dfn-programmatically-determined) through [role](#dfn-role) or properties such that they can be presented to the user by [assistive technologies](#dfn-assistive-technology) without receiving focus.

Intent
------

The intent of this Success Criterion is to make users aware of important changes in content that are not given focus, and to do so in a way that doesn't unnecessarily interrupt their work.

The intended beneficiaries are blind and low vision users of assistive technologies with screen reader capabilities. An additional benefit is that assistive technologies for users with cognitive disabilities may achieve an alternative means of indicating (or even delaying or supressing) status messages, as preferred by the user.

The scope of this Success Criterion is specific to changes in content that involve status messages. A [status message](#dfn-status-message) is a defined term in WCAG. There are two main criteria that determine whether something meets the definition of a status message:

1.  the message “provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors;”
2.  the message is not delivered via a change in context.

Information can be added to pages which does not meet the definition of a status message. For example, the list of results obtained from a search are not considered a status update and thus are not covered by this Success Criterion. However, brief text messages displayed *about* the completion or status of the search, such as "Searching...", "18 results returned" or "No results returned" would be status updates if they do not take focus. Examples of status messages are given in the section titled [Status Message Examples](#status-examples) below.

This Success Criterion specifically addresses scenarios where new content is added to the page without changing the user's context. [Changes of context](#dfn-changes-of-context), by their nature, interrupt the user by taking focus. They are already surfaced by assistive technologies, and so have already met the goal to alert the user to new content. As such, messages that involve changes of context do not need to be considered and are not within the scope of this Success Criterion. Examples of scenarios that add new content by changing the context are given in the section titled [Examples of Changes That Are Not Status Messages](#excepted-examples) below.

Benefits
--------

-   When appropriate roles or properties are assigned to status messages, the new content is spoken by screen readers in such a way as to assist blind and low vision users. Most sighted users can observe text peripherally added to the viewport. Such content provides additional information without affecting the user's current point of regard. The ability of an assistive technology to announce such new important text content allows more users to benefit from an awareness of the information in an equivalent manner.
-   Assigning proper roles or properties to status messages provides possible future uses and personalization opportunities, such as the potential to be exploited by assistive technologies created for users with some cognitive disabilities. Where page authors elect to design additions to the screen which do *not* change the user's context (i.e., take focus), the information is arguably of less importance than something presented using a modal dialog, which must be acknowledged by the user. As such, depending on the user's preferences, an assistive technology may choose to delay, suppress, or transform such messages so a user is not unnecessarily interrupted; or conversely the assistive technology may highlight such messages where the user finds it optimal to do so.

Examples
--------

### Status Message Examples

1.  After a user presses a Search button, the page content is updated to include the results of the search, which are displayed in a section below the Search button. The change to content also includes the message "5 results returned" near the top of this new content. This text is given an appropriate role for a status message. A screen reader announces, "Five results returned".
2.  After a user presses an Add to Shopping Cart button, a section of content near the Shopping Cart icon adds the text "5 items". A screen reader announces "Five items" or "Shopping cart, five items".
3.  After a user enters incorrect text in an input called Postal Code, a message appears above the input reading "Invalid entry". The screen reader announces, "Invalid entry" or "Postal code, invalid entry".
4.  After a user activates a process, an icon symbolizing 'busy' appears on the screen. The screen reader announces "application busy".
5.  An application displays a progressbar to indicate the status of an upgrade. The element is assigned a suitable role. The screen reader provides intermittent announcements of the progress.
6.  After a user submits a form, text is added to the existing form which reads, "Your form was successfully submitted." The screen reader announces the same message.
7.  After a user unsuccessfully fills in a form because some of the data is in the incorrect format, text is added to the existing form which reads "5 errors on page". The screen reader announces the same message.
8.  After a user puts a photo in an album in an online photo app, a [snackbar](https://material.io/design/components/snackbars.html#) displays the message "Saved in 'Wedding' album", which is also read by a screen reader.

### Examples of Status Messages that Do Not Add New Text to the Screen

This Success Criterion was intentionally worded to apply primarily when visible text is added to (or becomes visible on) the page. The reason for this is that where new text is displayed, it is intended to be visible to all users. By providing a programmatic means of ensuring the text is also surfaced through assistive technologies, the Success Criterion provides the same information to users who cannot or may not see it. However, not all changes to content involve the addition of text to the screen. The following are all considerations relevant to this Success Criterion:

-   Non-displayed text specific to AT users;
-   Modification of status text;
-   Removal of status text; and
-   Non-textual status content, such as images.

#### Non-displayed text specific to AT users

There may be cases where the addition of visible text does not by itself convey sufficient information to the user of assistive technology. For example, the proximity of new content to other pieces of information on the screen may provide a visual context that is lacking in the text alone.

In such cases, authors may wish to designate additional content for inclusion in the status message, including non-displayed text which can be provided to the assistive technologies, for added context. Important considerations regarding the appropriate use of such techniques are further discussed in the Sufficient Techniques.

#### Modification of status text

If a status message persists on the page, modifications to this text are usually equivalent to a new status message. An example would be a shopping cart which updates text from reading "0 items" to "3 items". Typical methods of writing such changes in the page content result in the entire modified text string being considered a new change, and thus read by assistive technologies. However, where only the number in this string was coded as an updated chunk of content, the resulting experience for screen reader users could be to only hear "three", which may not be sufficient information to provide context for the user. In such situations, marking the entire "3 items" string as the status text would normally be a better solution. See Sufficient Techniques for more discussion, including the use of `aria-atomic`. In this case it would also be a courtesy to add offscreen text such as "in shopping cart" to the message.

#### Removal of status text

In situations where status text is entirely removed, its absence may itself convey information about the status. The most obvious example of this is where a message is displayed that the system is "busy" or "waiting". For a sighted user, when this text disappears, it is normally an indication that the state is now available. However non-sighted users would be unaware of this change, unless the end of the waiting state results in a change of context for the user. Where updating the visible message (e.g., to "system available") is not feasible, the use of a non-visible status message, such as "system available", ensures equivalent status information is provided. See Sufficient Techniques for more discussion.

#### Non-textual status content

Changes in content are not restricted to text changes. Where an icon or sound indicates a status message, this information will be surfaced by the screen reader through a combination of two things: 1) existing WCAG requirements governing text alternatives (under SC 1.1.1 Non-Text Content), and 2) the requirement of this current Success Criterion to supply an appropriate role.

### Examples of Changes That Are Not Status Messages

The following examples identify situations where no additional author action is necessary. All cases are excepted from this Success Criterion since they do not meet the definition of "status messages."

-   An author displays an error message in a dialog.

    Since the dialog takes focus, it is defined as a change of context and does not meet the definition of a status message. As a result of taking focus, the new change of context is already announced by the screen reader, and thus does not need to be included in the scope of this Success Criterion.

-   Content is exposed or hidden when a user interacts with a user interface component, for example expanding components such as a menu, select, accordion or tree, or selecting a different tab item in a tablist.

    None of the resulting changes to content meet the definition of status messages. Further, all components that meet the definition of a user interface component already have requirements specified under <a href="name-role-value" class="sc">4.1.2 Name, Role, Value</a>, including the need to make notifications of changes to values and states available to user agents, including assistive technologies. As a result, changes in state, such as "expanded" or "collapsed," would be announced by the screen reader, and thus the user would be alerted to the 'addition' or 'removal' of content. As such, such content does not need to be addressed by this Success Criterion.

-   After a user completes a survey question which indicates they are unhappy, a series of new questions are added to the page about customer satisfaction.

    The new inputs do not meet the definition of status message. They do not "provide information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process or on the existence of errors," and so are not required to meet this Success Criterion.

    Note

    Creating a status message about these questions being added, or notifying the user in advance that content changes may take place based on the user's response, are best practices but are not requirements in this scenario.

### Other uses of live regions or alerts

Live regions and alerts can be usefully applied in many situations where a change of content takes place which does not constitute a status message, as defined in this Success Criterion. However, there is a risk of making an application too "chatty" for a screen reader user. User testing should be carried out to ensure the appropriate level of feedback is achieved. The Advisory Techniques provide examples of how alerts or live regions can enhance the user experience.

Note

The purpose of this success criterion is not to force authors to generate new status messages. Its intent is to ensure that when status messages *are* displayed, they are programmatically identified in a way that allows assistive technologies to present them to the user.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If a status message advises on the success or results of an action, or the state of an application:

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22" class="aria">ARIA22: Using role=status to present status messages</a> in combination with any of the following:
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G199" class="general">G199: Providing success feedback when data is submitted successfully</a>

#### Situation B: If a status message conveys a suggestion, or a warning on the existence of an error:

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19" class="aria">ARIA19: Using ARIA role=alert or Live Regions to Identify Errors</a> in combination with any of the following:
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G83" class="general">G83: Providing text descriptions to identify required fields that were not completed</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G84" class="general">G84: Providing a text description when the user provides information that is not in the list of allowed values</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G85" class="general">G85: Providing a text description when user input falls outside the required format or values</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G177" class="general">G177: Providing suggested correction text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G194" class="general">G194: Providing spell checking and suggestions for text input</a>

Note

Not all examples in the preceding general techniques use status messages to convey warnings or errors to users. A role of "alert" is only necessary where a change of context does *not* take place.

#### Situation C: If a status message conveys information on the progress of a process:

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23" class="aria">ARIA23: Using role=log to identify sequential information updates</a>
-   Using `role="progressbar"` (future link)
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22" class="aria">ARIA22: Using role=status to present status messages</a> in combination with <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G193" class="general">G193: Providing help by an assistant in the Web page</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using aria-live regions with chat clients (future link)
-   Using aria-live regions to support [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) (future link)
-   Using `role="marquee"` (future link)
-   Using `role="timer"` (future link)
-   Where appropriate, moving focus to new content with <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18" class="aria">ARIA18: Using aria-alertdialog to Identify Errors</a>
-   Supporting personalization with <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR14" class="script">SCR14: Using scripts to make nonessential alerts optional</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F103" class="failure">F103: Failure of Success Criterion 4.1.3 due to providing status messages that cannot be programmatically determined through role or properties</a>
-   Using `role="alert"` or `aria-live="assertive"` on content which is not important and time-sensitive (future link)

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

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

role

text or number by which software can identify the function of a component within Web content

A number that indicates whether an image functions as a hyperlink, command button, or check box.

status message

change in content that is not a [change of context](#dfn-changes-of-context), and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

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
