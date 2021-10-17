-   [Contents](. "Table of Contents")
-   [GL: Input Assistance](input-assistance)
-   [Previous SC: Change on Request](change-on-request)
-   [Next SC: Labels or Instructions](labels-or-instructions)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.3.1: Error Identification
===========================================================

> Success Criterion [3.3.1 Error Identification](https://www.w3.org/TR/WCAG21/#error-identification) (Level A): If an [input error](#dfn-input-error) is automatically detected, the item that is in error is identified and the error is described to the user in text.

Intent
------

The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional. Per the definition in WCAG 2.0, an "input error" is information provided by the user that is not accepted. This includes:

-   information that is required by the web page but omitted by the user, or
-   information that is provided by the user but that falls outside the required data format or allowed values.

For example:

-   the user fails to enter the proper abbreviation in to state, province, region, etc. field;
-   the user enters a state abbreviation that is not a valid state;
-   the user enters a non existent zip or postal code;
-   the user enters a birth date 2 years in the future;
-   the user enters alphabetic characters or parentheses into their phone number field that only accepts numbers;
-   the user enters a bid that is below the previous bid or the minimum bid increment.

Note

If a user enters a value that is too high or too low, and the coding on the page automatically changes that value to fall within the allowed range, the user's error would still need to be described to them as required by the success criterion. Such an error description telling the person of the changed value would meet both this success criterion (Error Identification) and <a href="error-suggestion" class="understanding">Success Criterion 3.3.3 (Error Suggestion)</a>.

The identification and description of an error can be combined with programmatic information that user agents or assistive technologies can use to identify an error and provide error information to the user. For example, certain technologies can specify that the user's input must not fall outside a specific range, or that a form field is required. Currently, few technologies support this kind of programmatic information, but the Success Criterion does not require, nor prevent it.

It is perfectly acceptable to indicate the error in other ways such as image, color etc, in addition to the text description.

See also [3.3.1: Error Suggestion](error-suggestion).

Benefits
--------

-   Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.
-   This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.

Examples
--------

-   **Identifying errors in a form submission**

    An airline Web site offers a special promotion on discounted flights. The user is asked to complete a simple form that asks for personal information such as name, address, phone number, seating preference and e-mail address. If any of the fields of the form are either not completed or completed incorrectly, an alert is displayed notifying the user which field or fields were missing or incorrect.

    Note

    This Success Criterion does not mean that color or text styles cannot be used to indicate errors. It simply requires that errors also be identified using text. In this example, two asterisks are used in addition to color.

-   **Providing multiple cues**

    The user fails to fill in two fields on the form. In addition to describing the error and providing a unique character to make it easy to search for the fields, the fields are highlighted in yellow to make it easier to visually search for them as well.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If a form contains fields for which information from the user is mandatory.

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G83" class="general">G83: Providing text descriptions to identify required fields that were not completed</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21" class="aria">ARIA21: Using Aria-Invalid to Indicate An Error Field</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5" class="pdf">PDF5: Indicating required form controls in PDF forms</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35" class="silverlight">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a>

#### Situation B: If information provided by the user is required to be in a specific data format or of certain values.

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18" class="aria">ARIA18: Using aria-alertdialog to Identify Errors</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19" class="aria">ARIA19: Using ARIA role=alert or Live Regions to Identify Errors</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21" class="aria">ARIA21: Using Aria-Invalid to Indicate An Error Field</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G84" class="general">G84: Providing a text description when the user provides information that is not in the list of allowed values</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G85" class="general">G85: Providing a text description when user input falls outside the required format or values</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>
7.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32" class="script">SCR32: Providing client-side validation and adding error text via the DOM</a>
8.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22" class="pdf">PDF22: Indicating when user input falls outside the required format or values in PDF forms</a>
9.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35" class="silverlight">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G139" class="general">G139: Creating a mechanism that allows users to jump to errors</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G199" class="general">G199: Providing success feedback when data is submitted successfully</a>

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

input error

information provided by the user that is not accepted

Note

This includes:

1.  Information that is required by the [Web page](#dfn-web-page) but omitted by the user
2.  Information that is provided by the user but that falls outside the required data format or values

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
