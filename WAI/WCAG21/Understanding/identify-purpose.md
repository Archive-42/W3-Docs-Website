-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Identify Input Purpose](identify-input-purpose)
-   [Next SC: Use of Color](use-of-color)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.3.6: Identify Purpose
=======================================================

> Success Criterion [1.3.6 Identify Purpose](https://www.w3.org/TR/WCAG21/#identify-purpose) (Level AAA): In content implemented using markup languages, the purpose of [User Interface Components](#dfn-user-interface-component), icons, and [regions](#dfn-region) can be [programmatically determined](#dfn-programmatically-determined).

Intent
------

The intent of this Success Criterion is to ensure that the purpose of many elements on a page can be programmatically determined, so that user agents can extract and present that purpose to users using different modalities.

Many users with limited vocabularies rely on familiar terms or symbols in order to use the web. However, what is familiar to one user may not be familiar to another. When authors indicate the purpose, users can take advantage of personalization and user preferences to load a set of symbols or vocabulary familiar to them.

This Success Criterion requires the author to programmatically associate the purpose of icons, regions and components (such as buttons, links, and fields) so that user agents can determine the purpose of each and adapt indicators or terminology to make them understandable for the user. It is achieved by adding semantics or metadata that provide this context. It is similar to adding role information (as required by 4.2.1) but instead of providing information about what the UI component is (such as an image) it provides information about what the component represents (such as a link to the home page).

Identifying regions of the page allows people to remove or highlight regions with their user agent.

Products for people who are non-vocal often use symbols to help users communicate. These symbols are in fact people's language. Unfortunately, many of these symbols are both subject to copyright and not interoperable. That means end users can only use one device, and cannot use content, apps, or assistive technologies that have not been made by a single company.

This Success Criterion enables symbols to be interoperable so that symbol users can understand different content that was not just made by one company. When users' symbols are mapped to the same nodes, then user agents can load the user-understandable symbol. People can then buy the symbols and use them across different devices or applications. (Note that the symbols would still be proprietary, but they could then be interoperable.)

Benefits
--------

People who benefit have many different cognitive disabilities including:

-   Memory
-   Focus and attention
-   Language-related
-   Executive function and decision making.

Meeting this Success Criterion helps users who need extra support or a familiar interface, including the need for:

-   Symbols and graphics with which users are familiar
-   Fewer features and less cognitive overload
-   Keyboard shortcuts

Examples
--------

-   A website uses [ARIA landmarks](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/index.html) to identify the regions of the page, and users can hide areas that do not have a role of `main`.
-   The links in the navigation of a website are marked up so that users can add their own icons.
-   Icons on a website are marked up so that users can substitute their own icon sets into the page.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Issue-papers on personalization and preferences](https://rawgit.com/w3c/coga/master/issue-papers/personalization-preferences.html)
-   An [example of adaptive page](https://github.com/ayelet-seeman/coga.personalisation/tree/ExampleWebPage/)
-   [Background research document](https://w3c.github.io/wcag/coga/user-research.html)
-   [Semantics for adaptive interfaces](https://w3c.github.io/personalization-semantics/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   Programmatically indicating the purpose of icons, regions and user interface components
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11" class="aria">ARIA11: Using ARIA landmarks to identify regions of a page</a> AND
-   Using microdata to markup user interface components (future link)

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Enabling user agents to find the version of the content that best fits their needs
-   Using semantics to identify important features (e.g., `coga-simplification="simplest"`)
-   Using `aria-invalid` and `aria-required`

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

region

perceivable, programmatically determined section of content

Note

In HTML, any area designated with a landmark role would be a region.

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
