-   [Contents](. "Table of Contents")
-   [GL: Input Assistance](input-assistance)
-   [Previous SC: Labels or Instructions](labels-or-instructions)
-   [Next SC: Error Prevention (Legal, Financial, Data)](error-prevention-legal-financial-data)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.3.3: Error Suggestion
=======================================================

> Success Criterion [3.3.3 Error Suggestion](https://www.w3.org/TR/WCAG21/#error-suggestion) (Level AA): If an [input error](#dfn-input-error) is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

Intent
------

The intent of this Success Criterion is to ensure that users receive appropriate suggestions for correction of an input error if it is possible. The WCAG 2.0 definition of "input error" says that it is "information provided by the user that is not accepted" by the system. Some examples of information that is not accepted include information that is required but omitted by the user and information that is provided by the user but that falls outside the required data format or allowed values.

Success Criterion 3.3.1 provides for notification of errors. However, persons with cognitive limitations may find it difficult to understand how to correct the errors. People with visual disabilities may not be able to figure out exactly how to correct the error. In the case of an unsuccessful form submission, users may abandon the form because they may be unsure of how to correct the error even though they are aware that it has occurred.

The content author may provide the description of the error, or the user agent may provide the description of the error based on technology-specific, programmatically determined information.

Benefits
--------

-   Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.

Examples
--------

-   **Additional Help for Correcting An Input Error**

    The result of a form that was not successfully submitted describes an input error in place in the page along with the correct input and offers additional help for the form field that caused the input error.

-   **Suggestions from a Limited Set of Values**

    An input field requires that a month name be entered. If the user enters "12," suggestions for correction may include

    -   A list of the acceptable values, e.g., "Choose one of: January, February, March, April, May, June, July, August, September, October, November, December."
    -   A description of the set of values, e.g., "Please provide the name of the month."
    -   The conversion of the input data interpreted as a different month format, e.g., "Do you mean 'December'?"

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

Note

In some cases, more than one of these situations may apply. For example, when a mandatory field also requires the data to be in a specific format.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If a mandatory field contains no information:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G83" class="general">G83: Providing text descriptions to identify required fields that were not completed</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2" class="aria">ARIA2: Identifying a required field with the aria-required property</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5" class="pdf">PDF5: Indicating required form controls in PDF forms</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35" class="silverlight">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a>

#### Situation B: If information for a field is required to be in a specific data format:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18" class="aria">ARIA18: Using aria-alertdialog to Identify Errors</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G85" class="general">G85: Providing a text description when user input falls outside the required format or values</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G177" class="general">G177: Providing suggested correction text</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32" class="script">SCR32: Providing client-side validation and adding error text via the DOM</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22" class="pdf">PDF22: Indicating when user input falls outside the required format or values in PDF forms</a>

#### Situation C: Information provided by the user is required to be one of a limited set of values:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18" class="aria">ARIA18: Using aria-alertdialog to Identify Errors</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G84" class="general">G84: Providing a text description when the user provides information that is not in the list of allowed values</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G177" class="general">G177: Providing suggested correction text</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32" class="script">SCR32: Providing client-side validation and adding error text via the DOM</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22" class="pdf">PDF22: Indicating when user input falls outside the required format or values in PDF forms</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G139" class="general">G139: Creating a mechanism that allows users to jump to errors</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G199" class="general">G199: Providing success feedback when data is submitted successfully</a>

#### Client-Side Scripting Techniques (Advisory)

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>

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
