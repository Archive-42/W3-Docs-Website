-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Orientation](orientation)
-   [Next SC: Identify Purpose](identify-purpose)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.3.5: Identify Input Purpose
=============================================================

> Success Criterion [1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG21/#identify-input-purpose) (Level AA): The purpose of each input field collecting information about the user can be [programmatically determined](#dfn-programmatically-determined) when:
>
> -   The input field serves a purpose identified in the [Input Purposes for User Interface Components section](https://www.w3.org/TR/WCAG21/#input-purposes); and
> -   The content is implemented using technologies with support for identifying the expected meaning for form input data.

Intent
------

The intent of this Success Criterion is to ensure that the purpose of a form input collecting information about the user can be programmatically determined, so that user agents can extract and present this purpose to users using different modalities. The ability to programmatically declare the specific kind of data expected in a particular field makes filling out forms easier, especially for people with cognitive disabilities.

Appropriate visible labels and instruction can help users understand the purpose of form input fields, but users may benefit from having fields that collect specific types of information be rendered in an unambiguous, consistent, and possibly customized way for different modalities - either through defaults in their user agent, or through the aid of assistive technologies.

For some input fields, the type attribute already offers a way to broadly specify the intention of the input field, for example, input type="tel", input type="email", or input type="password". However, these are only very broad categories, describing the type of input, but not necessarily its purpose, especially as it relates to user-specific input fields. As an example, type="email" indicates that the field is for an e-mail address but does not clarify if the purpose is for entering the user's e-mail address or some other person's e-mail.

This success criterion defines the types of user interface component input purposes, found in [Section 7 of the WCAG 2.1 Recommendation](https://www.w3.org/TR/WCAG21/#input-purposes), that must be programmatically identifiable. When these user input purposes are present, and if the technology supports doing so, the field purpose must be programmatically identifiable.

The HTML autocomplete attribute only accepts a certain number of specific well-defined fixed values. This allows a more fine-grained definition or identification of purpose than the type attribute, for example, by allowing the author to specify a specific type of name: Name (autocomplete="name”), Given Name (autocomplete="given-name”), Family Name (autocomplete="family-name”), as well as Username (autocomplete="username”), and Nickname (autocomplete="nickname”).

By adopting and repurposing this predefined taxonomy of definitions, user agents and assistive technologies can now present the purpose of the inputs to users in different modalities. For example, assistive technologies may display familiar icons next to input fields to help users who have difficulties reading. An icon of a birthday cake may be shown in front of an input field with autocomplete="bday", or the icon of a telephone in front of an input field with autocomplete="tel".

In addition to repurposing this taxonomy, when the autocomplete attribute technique is used to meet this Success Criterion, browsers and other user-agents can suggest and 'autofill' the right content by autocompleting these fields based on past user input stored in the browser. By defining more granular definitions of common input purposes, for example “Birthday” (autocomplete=”bday”), browsers can store personalized values for each of these fields (the user's birthday date). The user is relieved of having to type the information and can instead confirm or, if needed, change the value of the field, a significant benefit for users with memory issues, dyslexia, and other disabilities. Because the autocomplete values are independent of language, users that may not be familiar with the text used to visually identify user input fields (the label) can still have that purpose consistently identified to them due to the fixed taxonomy of terms.

If an input field accepts two different types of input purpose (as in combined user name/user email fields) and the technology used does not allow multiple purpose values to be defined, it is valid to provide either one or the other value or leave out the designation of input purpose altogether.

When the user agent and assistive technology support for other metadata formats matures, metadata schemes like the [Personalization Semantics Content Module](https://w3c.github.io/personalization-semantics/content/) may be used in addition or instead of the HTML autocomplete attribute to identify the purpose of input fields. They can also support automated adaptations that identify and match author-provided input labels to defined vocabularies or symbols that are used instead for labelling inputs.

Benefits
--------

-   People with language and memory related disabilities or disabilities that affects executive function and decision-making benefit from the browser auto-filling personal information (such as name or address) when the autocomplete attribute is used to meet this Success Criterion, which means information does not need to be remembered by the user.
-   People with cerebral palsy, stroke, head injury, motor neuron disease or learning disability sometimes prefer images for communication. They can employ assistive technology which adds icons to input fields to communicate the purpose of the fields visually.
-   People with motor impairments also benefit from reducing the need for manual input when filling out forms.

Examples
--------

-   **A contact form using autofill**  
    A contact form auto-fills in the fields for name, street, post code, city, telephone number and email address from autofill values stored in the user's browser. Assistive technology can offer a customized way of identifying particular input fields, for example drawing on a set of symbols / icons that is familiar to the user, to communicate the purpose of the fields visually.
-   **An order from with separate billing and shipping address**  
    A product order form fills in the address fields for billing address and a separate set of address fields for the shipping address, using the autofill detail tokens 'billing' and 'shipping'
-   **A contact form using icons**  
    A browser plugin to add icons inserts icons representing the person's name, home address, telephone number and email address to identify the input purpose visually.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [COGA Gap Analysis Table 3: Entering Data, Error Prevention, & Recovery](https://www.w3.org/TR/coga-gap-analysis/#table3)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [H98: Using HTML 5.2 autocomplete attributes](https://www.w3.org/WAI/WCAG21/Techniques/html/H98)

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F107: Failure of Success Criterion 1.3.5 due to incorrect autocomplete attribute values](https://www.w3.org/WAI/WCAG21/Techniques/failures/F107)

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

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
