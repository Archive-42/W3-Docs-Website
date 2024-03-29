[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 4.1.1 \[Parsing\]](ensure-compat-parses.html "Understanding SC  4.1.1 [Parsing]")
-   [**Next:** Understanding Conformance](conformance.html "Understanding Understanding Conformance")

On this page:

-   [Intent](#ensure-compat-rsv-intent-head)
-   [Examples](#ensure-compat-rsv-examples-head)
-   [Related Resources](#ensure-compat-rsv-resources-head)
-   [Techniques & Failures](#ensure-compat-rsv-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="ensure-compat-rsv"></span> **Name, Role, Value**<span class="screenreader">:</span> Understanding SC 4.1.2
====================================================================================================================

> **[4.1.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv) Name, Role, Value:** For all <a href="#user-interface-componentdef" class="termref">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="#namedef" class="termref">name</a> and <a href="#roledef" class="termref">role</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="#programmaticallysetdef" class="termref">programmatically set</a>; and notification of changes to these items is available to <a href="#useragentdef" class="termref">user agents</a>, including <a href="#atdef" class="termref">assistive technologies</a>. (Level A)
>
> *Note:* This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate(or set) and keep up to date on the status of user interface controls in the content.

When standard controls from accessible technologies are used, this process is straightforward. If the user interface elements are used according to specification the conditions of this provision will be met. (See examples of Success Criterion 4.1.2 below)

If custom controls are created, however, or interface elements are programmed (in code or script) to have a different role and/or function than usual, then additional measures need to be taken to ensure that the controls provide important information to assistive technologies and allow themselves to be controlled by assistive technologies.

A particularly important state of a user interface control is whether or not it has focus. The focus state of a control can be programmatically determined, and notifications about change of focus are sent to user agents and assistive technology. Other examples of user interface control state are whether or not a checkbox or radio button has been selected, or whether or not a collapsible tree or list node is expanded or collapsed.

*Note:* Success Criterion 4.1.2 requires a programmatically determinable name for all user interface components. Names may be visible or invisible. Occasionally, the name must be visible, in which case it is identified as a label. Refer to the definition of name and label in the glossary for more information.

### Specific Benefits of Success Criterion 4.1.2:

-   Providing role, state, and value information on all user interface components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities.

Examples of Success Criterion 4.1.2
-----------------------------------

-   **Accessible APIs**

    A Java applet uses the accessibility API defined by the language.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Dynamic Accessible Web Content Roadmap](http://www.w3.org/WAI/PF/roadmap/)

-   [Role Taxonomy for Accessible Adaptable Applications](http://www.w3.org/WAI/PF/GUI/)

-   [States and Adaptable Properties Module](http://www.w3.org/WAI/PF/adaptable/)

-   [Microsoft Active Accessibility, Version 2.0](https://msdn.microsoft.com/en-us/library/ms697707.aspx)

-   [Adobe Flash accessibility design guidelines](http://www.adobe.com/accessibility.htmlproducts/flash/best-practices.html)

Techniques and Failures for Success Criterion 4.1.2 - Name, Role, Value
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="ensure-compat-rsv-situation-61-head"></span> Situation A: If using a standard user interface component in a markup language (e.g., HTML):

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA14" class="tech-ref">ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used</a> (ARIA)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA16" class="tech-ref">ARIA16: Using aria-labelledby to provide a name for user interface controls</a> (ARIA)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G108" class="tech-ref">G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes</a> using technology-specific techniques below:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H91" class="tech-ref">H91: Using HTML form controls and links</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H44" class="tech-ref">H44: Using label elements to associate text labels with form controls</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H64" class="tech-ref">H64: Using the title attribute of the frame and iframe elements</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H65" class="tech-ref">H65: Using the title attribute to identify form controls when the label element cannot be used</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H88" class="tech-ref">H88: Using HTML according to spec</a> (HTML)

#### <span id="ensure-compat-rsv-situation-62-head"></span> Situation B: If using script or code to re-purpose a standard user interface component in a markup language:

1.  Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA16" class="tech-ref">ARIA16: Using aria-labelledby to provide a name for user interface controls</a> (ARIA)

#### <span id="ensure-compat-rsv-situation-63-head"></span> Situation C: If using a standard user interface component in a programming technology:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G135" class="tech-ref">G135: Using the accessibility API features of a technology to expose names and roles, to allow user-settable properties to be directly set, and to provide notification of changes</a> using technology-specific techniques below:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH32" class="tech-ref">FLASH32: Using auto labeling to associate text labels with form controls</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH29" class="tech-ref">FLASH29: Setting the label property for form components</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH30" class="tech-ref">FLASH30: Specifying accessible names for image buttons</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF10" class="tech-ref">PDF10: Providing labels for interactive form controls in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF12" class="tech-ref">PDF12: Providing name, role, value information for form fields in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL26" class="tech-ref">SL26: Using LabeledBy to Associate Labels and Targets in Silverlight</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL32" class="tech-ref">SL32: Using Silverlight Text Elements for Appropriate Accessibility Role</a> (Silverlight)

#### <span id="ensure-compat-rsv-situation-64-head"></span> Situation D: If creating your own user interface component in a programming language:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G10" class="tech-ref">G10: Creating components using a technology that supports the accessibility API features of the platforms on which the user agents will be run to expose the names and roles, allow user-settable properties to be directly set, and provide notification of changes</a> using technology-specific techniques below:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA4" class="tech-ref">ARIA4: Using a WAI-ARIA role to expose the role of a user interface component</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5" class="tech-ref">ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA16" class="tech-ref">ARIA16: Using aria-labelledby to provide a name for user interface controls</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL6" class="tech-ref">SL6: Defining a UI Automation Peer for a Custom Silverlight Control</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL18" class="tech-ref">SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL20" class="tech-ref">SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL30" class="tech-ref">SL30: Using Silverlight Control Compositing and AutomationProperties.Name</a> (Silverlight)

### Additional Techniques (Advisory) for 4.1.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing labels for all form controls that do not have implicit labels (future link)

### Common Failures for SC 4.1.2

The following are common mistakes that are considered failures of Success Criterion 4.1.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F59" class="tech-ref">F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control</a>

    *Note:* This failure may be solved in the future using DHTML roadmap techniques.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F15" class="tech-ref">F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F20" class="tech-ref">F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F68" class="tech-ref">F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F79" class="tech-ref">F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F86" class="tech-ref">F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F89" class="tech-ref">F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link</a>

Key Terms
---------

 <span id="atdef"></span> assistive technology (as used in this document)  
hardware and/or software that acts as a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

*Note 1:* functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

*Note 2:* Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

*Note 3:* The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

*Example:* Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;

-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;

-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;

-   speech recognition software, which may be used by people who have some physical disabilities;

-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);

-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

 <span id="namedef"></span> name  
text by which software can identify a component within Web content to the user

*Note 1:* The name may be hidden and only exposed by assistive technology, whereas a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#labeldef" class="termref">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.

*Note 2:* This is unrelated to the name attribute in HTML.

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

*Example 1:* Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

*Example 2:* Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

 <span id="programmaticallysetdef"></span> programmatically set  
set by software using methods that are supported by user agents, including assistive technologies

 <span id="roledef"></span> role  
text or number by which software can identify the function of a component within Web content

*Example:* A number that indicates whether an image functions as a hyperlink, command button, or check box.

 <span id="useragentdef"></span> user agent  
any software that retrieves and presents Web content for users

*Example:* Web browsers, media players, plug-ins, and other programs — including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a> — that help in retrieving, rendering, and interacting with Web content.

 <span id="user-interface-componentdef"></span> user interface component  
a part of the content that is perceived by users as a single control for a distinct function

*Note 1:* Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

*Note 2:* User interface components include form elements and links as well as components generated by scripts.

*Example:* An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 4.1.1 \[Parsing\]](ensure-compat-parses.html "Understanding SC  4.1.1 [Parsing]")
-   [**Next:** Understanding Conformance](conformance.html "Understanding Understanding Conformance")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
