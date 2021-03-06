<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

W3C First Public Working Draft 12 October 2021
----------------------------------------------

This version:  
<a href="https://www.w3.org/TR/2021/WD-naur-20211012/" class="u-url">https://www.w3.org/TR/2021/WD-naur-20211012/</a>

Latest published version:  
<https://www.w3.org/TR/naur/>

Latest editor's draft:  
<https://w3c.github.io/apa/naur/>

Editors:  
<a href="mailto:jjwhite@ets.org" class="ed_mailto u-email email p-name">Jason White</a> (<span class="p-org org h-org">Educational Testing Service</span>)

<a href="mailto:joconnor@w3.org" class="ed_mailto u-email email p-name">Joshue O'Connor</a> (<span class="p-org org h-org">W3C</span>)

<a href="https://www.accessibility.org.au/" class="ed_mailto u-email email p-name">Scott Hollier</a> (<span class="p-org org h-org">Centre For Accessibility Australia</span>)

<a href="http://rednote.net/" class="ed_mailto u-email email p-name">Janina Sajka</a>

Participate:  
[GitHub w3c/apa](https://github.com/w3c/apa/)

[File an issue](https://github.com/w3c/apa/issues/)

[Commit history](https://github.com/w3c/apa/commits/)

[Pull requests](https://github.com/w3c/apa/pulls/)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2021 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

This document outlines accessibility user needs, requirements and scenarios, for natural language interfaces. These user needs should influence accessibility requirements in related specifications, and be considered in the design of applications that include natural language interfaces.

This document is most explicitly not a collection of baseline requirements. It is also important to note that some of the requirements may be implemented at a system or platform level, and some may be authoring requirements for development of applications.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [Accessible Platform Architectures Working Group](https://www.w3.org/WAI/APA/) as a First Public Working Draft.

To comment, [file an issue in the W3C APA GitHub repository](https://github.com/w3c/apa/issues/new). If this is not feasible, send email to <public-apa@w3.org> ([subscribe](mailto:public-apa@w3.org?subject=subscribe), [archives](https://lists.w3.org/Archives/Public/public-apa/)). Comments are requested by **12th November 2021**.

Publication as a First Public Working Draft does not imply endorsement by the W3C Membership.

This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). The group does not expect this document to become a W3C Recommendation. W3C maintains a [public list of any patent disclosures](https://www.w3.org/groups/wg/apa/ipr) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2020/Process-20200915/" id="w3c_process_revision">15 September 2020 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#abstract" class="tocxref">Abstract</a>
2.  <a href="#sotd" class="tocxref">Status of This Document</a>
3.  <a href="#introduction" class="tocxref">1. Introduction</a>
    1.  <a href="#what-is-a-natural-language-interface" class="tocxref">1.1 What is a Natural Language Interface?</a>
    2.  <a href="#natural-language-interfaces-and-accessibility" class="tocxref">1.2 Natural Language Interfaces and Accessibility</a>
    3.  <a href="#voice-user-interfaces" class="tocxref">1.3 Voice User Interfaces</a>
    4.  <a href="#scope" class="tocxref">1.4 Scope</a>
    5.  <a href="#services-and-agents" class="tocxref">1.5 Services and Agents</a>
    6.  <a href="#user-need-definition" class="tocxref">1.6 User need definition</a>
4.  <a href="#user-needs-and-requirements" class="tocxref">2. User needs and requirements</a>
    1.  <a href="#user-identification-and-authentication" class="tocxref">2.1 User Identification and Authentication</a>
    2.  <a href="#means-of-input-and-output" class="tocxref">2.2 Means of Input and Output</a>
    3.  <a href="#communicating-in-a-language-that-the-user-needs" class="tocxref">2.3 Communicating in a Language that the User Needs</a>
    4.  <a href="#speech-recognition-and-speech-production" class="tocxref">2.4 Speech Recognition and Speech Production</a>
    5.  <a href="#visually-displayed-text" class="tocxref">2.5 Visually displayed text</a>
    6.  <a href="#designing-for-understanding-and-effective-use" class="tocxref">2.6 Designing for Understanding and Effective Use</a>
        1.  <a href="#understanding-how-to-interact-with-the-interface" class="tocxref">2.6.1 Understanding How to Interact with the Interface</a>
        2.  <a href="#giving-users-enough-time-to-interact" class="tocxref">2.6.2 Giving Users Enough Time to Interact</a>
        3.  <a href="#communicating-in-language-that-is-clear-simple-and-appropriate-to-the-audience" class="tocxref">2.6.3 Communicating in Language that is Clear, Simple, and Appropriate to the Audience</a>
        4.  <a href="#pronunciation" class="tocxref">2.6.4 Pronunciation</a>
        5.  <a href="#avoiding-and-recovering-from-input-errors" class="tocxref">2.6.5 Avoiding and Recovering from Input Errors</a>
        6.  <a href="#using-multimodal-interfaces-to-enhance-understanding" class="tocxref">2.6.6 Using Multimodal Interfaces to Enhance Understanding</a>
5.  <a href="#enabling-funders" class="tocxref">3. Enabling Funders<span class="formerLink" data-aria-label="§"></span></a>
6.  <a href="#references" class="tocxref">A. References</a>
    1.  <a href="#informative-references" class="tocxref">A.1 Informative references</a>

1. Introduction<a href="#introduction" class="self-link"></a>
-------------------------------------------------------------

### 1.1 What is a Natural Language Interface?<a href="#what-is-a-natural-language-interface" class="self-link"></a>

A natural language interface is a user interface in which the user and the system communicate via a natural (human) language. The user provides input as sentences via speech or some other input, and the system generates responses in the form of sentences delivered by speech, text or another suitable modality.

Often, systems that provide natural language interfaces support spoken interaction. In this scenario, speech recognition is used to process the user's input, and speech synthesis is used to generate the system's spoken responses. However, the use of speech is not essential to a natural language interface.

Typical examples of natural language interfaces include:

-   **Voice agents designed primarily to communicate via speech**. These agents may run on a computing device such as a mobile phone, tablet, laptop or desktop computer. They may also be embedded in specialized hardware such as consumer appliances, or the automation system of a vehicle.
-   **Chat bots included in Web applications** that process natural language requests from the user. For example, a customer service application available on an organization's web site could offer a natural language user interface to handle customers' inquiries.
-   Interactive Voice Response (IVR) systems that interact with the user via a telephone call, accepting speech or key pad input and generating speech output.

These examples are indicative of applications that use natural language interfaces. They are not definitive. Variations of the examples and applications that do not fit these patterns at all are possible.

Note

An increasingly popular type of system offering a natural language interface is the *intelligent personal assistant*. A general architecture for such systems, and opportunities for future technical standardization, are proposed in \[<a href="#bib-personal-assistant-architecture" class="bibref" title="Intelligent Personal Assistant Architecture and Potential for Standardization Version 1.2">personal-assistant-architecture</a>\]. Although intelligent personal assistant applications are growing in prominence, it should be noted that the scope of this document is not restricted to these tools. Any application that uses natural language interaction can benefit from consideration of the needs and requirements identified here.

### 1.2 Natural Language Interfaces and Accessibility<a href="#natural-language-interfaces-and-accessibility" class="self-link"></a>

The accessibility of natural language interfaces to users with disabilities can be supported by a variety of features at the platform and application levels, including assistive technologies. Multiple modes of input and output should be provided to enable interaction with the system by users who have a variety of physical and sensory capabilities. For example, whereas speech input may be needed by some users with physical disabilities, keyboard input, switch input, or an eye tracking system may be needed by other users.

Similarly, natural language output may be spoken, or it may be provided as visually displayed text. These and other requirements are elaborated further below. In some cases, these requirements may best be satisfied by an assistive technology. For example, a chat bot that does not provide a spoken interface directly may nevertheless satisfy a user's need for speech input via a dictation function provided as part of the user's browser or operating system. There may also be other 'service' aspects that are specifically needed to better support accessibility that operate at a different layer to any modality input or output considerations.

The design of the application should support the cognitive needs of users, including those who have learning or cognitive disabilities. Discoverability, simplicity, and affordances for example, are important considerations in the design of the natural language interaction.

### 1.3 Voice User Interfaces<a href="#voice-user-interfaces" class="self-link"></a>

Voice user interfaces (VUI) using speech such as those found on a range of commercially available devices for home and mobile use represent a part of the stack that make up natural language interfaces. This document aims to identify accessibility related user needs and requirements for VUIs and indicate further areas of work and research in terms of how they relate to new standards like WCAG 3 and other emerging technologies.

### 1.4 Scope<a href="#scope" class="self-link"></a>

Natural language interfaces frequently occur as components of larger user interfaces and systems. For example, a chat bot may be included in a web application. A natural language interface may be an essential part of a multi-modal application that uses a combinations of language and gestural inputs. An example would be an interactive navigation tool that allows the user to issue spoken commands and to interact with a graphical map with a pointing device.

The scope of this document is largely confined to the accessibility of the natural language aspect of the over-all user interface. It is concerned with the accessibility of natural language interactions to users with disabilities.

Editor's note

The scope of this work is currently under active discussion in the Research Questions Task Force.

### 1.5 Services and Agents<a href="#services-and-agents" class="self-link"></a>

Behind these interfaces there are services that provide core processing, evaluation and content. This document aims to look at these services and determine to what degree they can and should support the needs of people with disabilities; what system requirements are, or where further research is needed.

Ideally by satisfying system requirements, developers of platforms and applications offering natural language interfaces can meet corresponding user needs. Currently, no stance is taken in this document regarding which needs are best satisfied at the platform level, by an assistive technology, or in the development of applications, but this will change as the document develops. These architectural considerations are left to be decided by system designers, and therefore there may be requirements in accessible system design that they need to be aware of. Often, they also depend on the services provided by the underlying operating system or by the web platform.

If natural language interaction is provided as part of a system that also offers other styles of interaction, this document should be read in combination with guidance provided elsewhere which is relevant to the other interface and service aspects. Notably,

-   [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\] establishes normative requirements for the accessibility of web-based applications.
-   [RTC Accessibility User Requirements (RAUR)](https://www.w3.org/TR/raur/) \[<a href="#bib-raur" class="bibref" title="RTC Accessibility User Requirements">raur</a>\] identifies user needs and corresponding requirements for the accessibility of real-time communication applications, such as video conference tools and web-based telephony systems.
-   [XR Accessibility User Requirements (XAUR)](https://www.w3.org/TR/xaur/) \[<a href="#bib-xaur" class="bibref" title="XR Accessibility User Requirements">xaur</a>\] identifies user needs and corresponding requirements for the accessibility of virtual reality and augmented reality.
-   [User Agent Accessibility Guidelines (UAAG)](https://www.w3.org/WAI/standards-guidelines/uaag/) \[<a href="#bib-uaag" class="bibref" title="User Agent Accessibility Guidelines (UAAG) 2.0">uaag</a>\]- if we consider the service behind the interface - what parts of the User Agent Accessibility Guidelines (UAAG) are relevant for these particular services?

As a general principle, the entire interface of a system or application needs to be accessible to users with disabilities. If only the natural language interaction component is accessible, some users will be unable to complete tasks successfully. For example, a smart agent that answers a user's questions by searching the web for information and then displaying it on screen is only accessible as a whole if both the interaction and the presentation of the information satisfy the user's access needs. If the on-screen information is not accessible, then the user cannot complete the task of acquiring and understanding the information requested.

### 1.6 User need definition<a href="#user-need-definition" class="self-link"></a>

User needs relate to what a user needs from a particular application or platform to complete a task or to achieve a particular goal. User needs are dependent on the context in which an application is used, including the user's capabilities and the environmental conditions in which interaction with the interface takes place. For example, a spoken interaction would be inaccessible to a person who is deaf, or to a hearing person situated in a noisy environment. Although disability-related needs are the focus of this document, the user needs described here are not limited to people with specific types of disability. The capabilities of users vary greatly. They include a variety of physical, sensory, learning and cognitive abilities that should be taken into account in the design of platforms and applications.

The user needs and associated requirements are actively being reviewed by the Research Questions Task Force (RQTF) and by the Accessible Platform Architectures (APA) Working Group.

2. User needs and requirements<a href="#user-needs-and-requirements" class="self-link"></a>
-------------------------------------------------------------------------------------------

This section outlines a variety of user needs and system requirements that can satisfy them.

### 2.1 User Identification and Authentication<a href="#user-identification-and-authentication" class="self-link"></a>

-   **User Need 1:** A user with a physical disability needs to use speech as the only means of communicating with a system that can be shared with other users. Due to security and privacy requirements, each user must be authenticated individually.
-   **REQ 1:** Support voice identification as a means of biometric authentication.

Note

To achieve adequate security, voice identification may need to be combined with other factors of authentication.

-   **User Need 2:** A user who is deaf or who has a speech disability needs to interact with a system that can be shared with other users. Due to security and privacy requirements, each user must be authenticated individually.
-   **REQ 2a:** Support a means of biometric authentication other than voice recognition.
-   **REQ 2b:** Support a non-biometric means of authentication, such as a hardware security token.

Note

In some cases, this requirement can be met simply by using authentication mechanisms provided by the underlying operating system or browser environment.

<a href="#example-1" class="self-link">Example 1</a>

A smart agent is designed to run under several operating systems used by mobile devices. It can use authentication methods provided by each of these platforms to identify the user reliably. These mechanisms include face recognition and fingerprint recognition.

<a href="#example-2" class="self-link">Example 2</a>

A smart agent is embedded in a public kiosk, located for example at an airport. A user can choose face recognition or voice recognition as the means of biometric authentication.

### 2.2 Means of Input and Output<a href="#means-of-input-and-output" class="self-link"></a>

-   **User Need 3:** Different users have a need for different input devices or mechanisms. For example, a person with a physical disability may need speech input, or single switch input, or eye tracking input. A person who is deaf or who has a speech disability may need to use keyboard input.
-   **REQ 3:** Support multiple input devices and methods either within the natural language interface/s or via alternatives.

Note

This requirement can often be met by supporting the input methods available from the underlying platform, including assistive technologies.

Note

If software that incorporates a natural language interface supports multiple input mechanisms, support for any specific mechanism may be available only on particular hardware devices or in particular environments. For example, a smart speaker may support only speech input, whereas the same smart agent running on a mobile system such as a phone or tablet may support text input via a keyboard or any device capable of emulating a keyboard.

Note

See the requirement to support a keyboard interface specified in WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criterion 2.1.1.

-   **User Need 4:** Different users have a need for different output devices or mechanisms. For example, a user who is blind may require speech output. A user who is deaf or who has a speech disability may require visually displayed text output. A user who is deaf-blind may require braille output.
-   **REQ 4:** Support multiple output devices and methods either within the natural language interface/s or via alternatives.

Note

This requirement can often be met by supporting the output methods available from the underlying platform, including assistive technologies.

Note

If software that incorporates a natural language interface supports multiple output mechanisms, support for any specific mechanism may be available only on particular hardware devices or in particular environments. For example, a smart speaker supports only speech output, whereas the same smart agent running on a mobile system such as a phone or tablet may support a visual display as well, and may be compatible with braille devices.

-   **User Need 5:** A user needs to use the same input and output mechanisms to complete an entire task involving an interaction with the system.
-   **REQ 5:** Provide a mode of operation in which the user does not need to switch from one input or output mechanism to another partway through completing an interactive task.

<a href="#example-3" class="self-link">Example 3</a>

A user who is blind or who has a physical disability needs to use spoken interaction to complete an entire task, such as searching the web for information on a topic of interest. The system can be configured or requested to use speech for the entire process, instead of displaying search results as a web page.

<a href="#example-4" class="self-link">Example 4</a>

A user who is deaf or who has a speech disability engages the system to process a customer service request. The system is unable to handle the request on its own. It initiates a real-time call between the user and a human customer support representative. Since keyboard input and text output were used in the dialogue between the user and the system, the call with the customer support representative is set up to use real-time text (RTT) rather than speech for communication.

-   **User Need 6:** A user who is deaf or hard of hearing needs to provide speech input to an application, while having the output presented as text.
-   **REQ 6:** Support a mode of operation in which the user can speak to the system, and the system's natural language output is presented textually (e.g., displayed visually or conveyed via the user's assistive technology).

<!-- -->

-   **User Need 7:** A user needs linguistic information presented both as speech and as text to be adequately perceived or understood.
-   **REQ 7:** Provide a mode of operation in which the spoken output of the system is accompanied by a synchronized text transcript.
-   **User Need 8:** A user with a speech disability needs to provide textual input to the system, but can effectively perceive and understand spoken information.
-   **REQ 8:** Provide a mode of operation in which keyboard or other forms of textual input can be given, in combination with speech output.

<!-- -->

-   **User Need 9:** A user who is deaf-blind needs to communicate with the system via a refreshable braille device.
-   **REQ 9:** Support a mode of operation in which input and output are both provided as text.

Note

Support for braille displays is assumed to be provided by a screen reader running under the device's operating system. Therefore, support for keyboard input and textual output is the stated requirement for the natural language interface itself, leaving interaction with the braille hardware to the operating system on which the user interface is run.

### 2.3 Communicating in a Language that the User Needs<a href="#communicating-in-a-language-that-the-user-needs" class="self-link"></a>

-   **User Need 10:** A user who is deaf or hard of hearing needs to communicate with the system in a sign language.
-   **REQ 10a:** Provide a mode of operation in which sign language presented by the user is recognized and processed by the system.
-   **REQ 10b:** Provide a mode of operation in which the system's output is presented visually in a sign language.
-   **REQ 10c:** As an alternative to requirements 10a and 10b, provide a mode of operation in which a human sign language interpreter relays communication between the user and the system.

Note

At present, it is generally infeasible to implement REQ 9a and REQ 9b with sufficient reliability and accuracy to be useful. Sign language processing (including automatic recognition, translation, and production of sign languages) involves challenging research problems. See \[<a href="#bib-bragg-et-al" class="bibref" title="Sign language recognition, generation, and translation: An interdisciplinary perspective">Bragg-et-al</a>\] for details. These two requirements are nevertheless stated here to encourage further research and development efforts.

Note

Sign languages vary by country and region. Therefore, multiple sign languages may need to be supported, depending on the intended audience of the system.

-   **User Need 11:** A user with a learning or cognitive disability needs to communicate with the system in a symbol set supported by a particular augmentative and alternative communication (AAC) assistive technology.

### 2.4 Speech Recognition and Speech Production<a href="#speech-recognition-and-speech-production" class="self-link"></a>

-   **User Need 12:** A user with atypical speech characteristics needs to provide spoken input to the system.
-   **REQ 12a:** Ensure that the system can recognize atypical varieties of speech with adequate accuracy to enable the application to be successfully used.
-   **REQ 12b:** Provide a mode of operation in which the system is trained to recognize a particular user's speech more accurately than it can without training.

<!-- -->

-   **User Need 13:** A user with atypical speech characteristics needs opportunities to correct the system's speech recognition errors.
-   **REQ 13a:** Enable the system to estimate the probability that a user's utterance has been recognized correctly.
-   **REQ 13b:** If the system's confidence in its recognition of the user's utterance is below a reasonable threshold, prompt the user to repeat or confirm the request made or the information spoken.
-   **REQ 13c:** Allow the user to decide at any time to interact with the system via means of input other than speech, even if a spoken dialogue is already in progress.

<!-- -->

-   **User Need 14:** A user needs to adjust the speaking rate, volume or pitch of speech generated by the system in order to understand it well or to interact more efficiently.
-   **REQ 14:** Provide an accessible user interface with which the speaking rate, pitch and volume of speech generated by the system can be configured.

Note

To ensure this user interface is accessible, it should satisfy relevant accessibility requirements drawn from this document or elsewhere. For example, a system could provide spoken commands, and a settings dialogue in a graphical user interface, as alternative mechanisms for configuring speech properties.

### 2.5 Visually displayed text<a href="#visually-displayed-text" class="self-link"></a>

-   **User Need 15:** A user who has low vision or a learning disability needs to adjust the font style or spacing of text displayed by the system.
-   **REQ 15:** Ensure that font properties and text spacing are configurable by the user, including font size, font style, character, word, line and paragraph spacing.

Note

In some cases, this requirement can be met by capabilities of the operating system or browsing environment.

Note

See the text spacing requirement specified in WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criterion 1.4.12.

### 2.6 Designing for Understanding and Effective Use<a href="#designing-for-understanding-and-effective-use" class="self-link"></a>

#### 2.6.1 Understanding How to Interact with the Interface<a href="#understanding-how-to-interact-with-the-interface" class="self-link"></a>

-   **User Need 16:** A user who is unfamiliar with the system or who has a learning or cognitive disability needs to know what the system can do and how to ask the system to do it.
-   **REQ 16a:** Provide commands with which the user can request help or instructions that give an overview of what the system can do and what requests or commands can be used to achieve it.
-   **REQ 16b:** Provide documentation in a form that satisfies accessibility guidelines which explains and gives examples of how to use the system.

Note

This need is particularly applicable to systems which can serve a wide range of requests, such as personal assistants. Although all users need to know how to interact with a system to start using it, those with learning or cognitive disabilities are likely to be differentially and adversely affected by designs that do not make it obvious what the system can achieve and how to set about achieving it.

-   **User Need 17:** A user who is unfamiliar with the system or who has a learning or cognitive disability needs to know how to interact with it to achieve a particular goal.
-   **REQ 17a:** Provide prompts or menus of options that inform the user of what choices are available and what information is requested at each step of a dialogue with the system.
-   **REQ 17b:** Provide commands or menu options for requesting explanations and instructions that help the user to complete tasks successfully.

<!-- -->

-   **User Need 18:** A user who is unfamiliar with the system or who has a learning or cognitive disability needs to use it without having to learn specific commands, requests, phrases or vocabulary.
-   **REQ 18a:** Design the system to respond appropriately to a variety of alternative words, phrases and sentences that may be used to ask the same question, to give the same command, or to supply the same information.
-   **REQ 18b:** Design the system to respond appropriately to words and phrases that are likely to be familiar to users of other systems with similar features.
-   **REQ 18c:** If the user's input is ambiguous or cannot be processed, prompt for clarification or additional information, or present a menu of relevant choices.

Note

Ensuring this need is met typically involves including people with disabilities in data collection and testing procedures that enable software developers to improve the variety of linguistic inputs to which the system can appropriately respond.

Note

Commands for performing a variety of functions typically supported by speech interfaces used for telephony and multimedia applications are standardized in \[<a href="#bib-etsi-es-202-076" class="bibref" title="ETSI ES 202 076 V2.1.1: Human Factors (HF); User Interfaces; Generic spoken command vocabulary for ICT devices and services">ETSI-ES-202-076</a>\].

-   **User Need 19:** A user with a learning or cognitive disability needs to review information, prompts or questions before deciding how to respond.
-   **REQ 19a:** Design the system to comply with a user's requests for its natural language output (e.g., spoken utterances) to be repeated.
-   **REQ 19b:** Summarize or present information that has been supplied by the user, then ask the user for confirmation, before performing irreversible actions such as financial transactions.
-   **REQ 19c:** If the text of the dialogue between the user and the system is presented in writing (e.g., on screen or via a braille device), ensure that the user can review the entire history of the conversation (scrolling the display, if necessary).

Note

See WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criterion 3.3.4.

#### 2.6.2 Giving Users Enough Time to Interact<a href="#giving-users-enough-time-to-interact" class="self-link"></a>

-   **User Need 20:** A user with a learning or cognitive disability needs ample time to decide how to respond during a dialogue with the system.
-   **REQ 20a:** Unless there are compelling reasons to the contrary, do not limit the amount of time available for the user to respond.
-   **REQ 20b:** If a time limit is unavoidable, allow the length of the time limit to be adjusted, or for the time limit to be eliminated, or prompt for the user to extend it before it expires.
-   **REQ 20c:** Warn users of time limits before any period of time that is subject to a limit begins.
-   **REQ 20d:** Provide a mode of operation in which the system reminds the user periodically that it is waiting for input, and of any time limit that has been imposed.

Note

The mode of operation described in requirement 19d may be distracting or anxiety-provoking for some users. Therefore, it should be optional.

Note

See WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criteria 2.2.1, 2.2.3, and 2.2.6.

#### 2.6.3 Communicating in Language that is Clear, Simple, and Appropriate to the Audience<a href="#communicating-in-language-that-is-clear-simple-and-appropriate-to-the-audience" class="self-link"></a>

-   **User Need 21:** Users, especially those who have learning or cognitive disabilities, need the system to use language that is clear and comprehensible to them.
-   **REQ 21a:** Use language (including vocabulary and syntax) that is no more complex than is necessary for clear communication.
-   **REQ 21b:** Use vocabulary (including terminology) that is reasonably predicted to be familiar to the intended users of the system, including users who may have learning or cognitive disabilities.
-   **REQ 21c:** Provide a mode of operation in which simpler language than the default can be requested.
-   **REQ 21d:** Provide definitions or explanations of terms that are likely to be unfamiliar to intended users of the system, including users who may have learning or cognitive disabilities.

Note

See WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criteria 3.1.3, 3.1.4, and 3.1.5.

-   **User Need 22:** Users, especially those who have learning or cognitive disabilities, need the system to use language that is appropriate to their social and cultural context in order to be clear and understandable.
-   **REQ 22a:** Provide a mode of operation in which the use of language, including terminology, currency, units of measure, and date and time formats, is localized according to the user's preferences.
-   **REQ 22b:** By default, localize the use of language, including terminology, currency, units of measure, and date and time formats, to the user's country and region.

#### 2.6.4 Pronunciation<a href="#pronunciation" class="self-link"></a>

-   **User Need 23:** Users, especially those who have learning or cognitive disabilities, need spoken language to be pronounced correctly in order to be understood.
-   **REQ 23a:** Provide a mode of operation in which the pronunciation (e.g., accent) of spoken language is localized according to the user's preferences.
-   **REQ 23b:** By default, localize the pronunciation of spoken language according to the user's country and region.
-   **REQ 23c:** Ensure that spoken text is pronounced correctly, including names, rarely occurring words, and words that have different pronunciations depending on context.

#### 2.6.5 Avoiding and Recovering from Input Errors<a href="#avoiding-and-recovering-from-input-errors" class="self-link"></a>

-   **User Need 24:** Users, especially those who have learning or cognitive disabilities, need opportunities to correct data entry errors.
-   **REQ 24a:** Check information provided by the user for errors.
-   **REQ 24b:** If errors are detected that can be automatically corrected with high reliability, make the correction and then prompt the user to confirm the information provided.
-   **REQ 24c:** For errors that cannot be reliably and automatically corrected, provide an explanation to the user and request valid information.
-   **REQ 24d:** Provide suggestions for correcting the error, if there is a known and relatively short list of alternative, valid responses.

Note

See WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criteria 3.3.1, 3.3.3, 3.3.4, and 3.3.6.

-   **User Need 25:** Users, especially those with learning or cognitive disabilities, need opportunities to avoid making errors that are irrevocable.
-   **REQ 25a:** Provide means of reversing actions that can be made reversible.

Note

See WCAG 2.1 \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">WCAG21</a>\], success criterion 3.3.6.

#### 2.6.6 Using Multimodal Interfaces to Enhance Understanding<a href="#using-multimodal-interfaces-to-enhance-understanding" class="self-link"></a>

-   **User Need 26:** Some users with learning disabilities need textual information to be spoken and presented in written form simultaneously.
-   **REQ 26:** Provide a mode of operation in which textual information is spoken and presented on screen concurrently, with synchronized visual highlighting of the text as it is spoken.

Note

The purpose of this multimodal presentation of text is to enhance comprehension of the material, especially by people with learning disabilities that affect reading.

-   **User Need 27:** Some users with learning or cognitive disabilities need graphical content that complements and reinforces the meaning of textual information.
-   **REQ 27:** If appropriate graphical conventions exist for presenting information that is provided to the user, then display a graphical presentation in addition to any textual (e.g., spoken) output.

Note

Information presented graphically must also be available as text. See '<a href="#means-of-input-and-output" class="sec-ref">§ 2.2 Means of Input and Output</a>' above.

<a href="#example-5" class="self-link">Example 5</a>

A user asks a smart agent for travel directions to reach a desired destination. The agent displays the requested directions on a map by highlighting the route, in addition to providing spoken, step-by-step navigation instructions.

3. Enabling Funders<a href="#enabling-funders" class="self-link"></a><a href="#enabling-funders" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------

This work is supported by the [EC-funded WAI-Guide Project](https://www.w3.org/WAI/about/projects/wai-guide/).

A. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### A.1 Informative references<a href="#informative-references" class="self-link"></a>

\[Bragg-et-al\]  
Sign language recognition, generation, and translation: An interdisciplinary perspective. Danielle Bragg; Oscar Koller; Mary Bellard; Larwan Berke; Patrick Boudreault; Annelies Braffort; Naomi Caselli; Matt Huenerfauth; Hernisa Kacorri; Tessa Verhoef; Christian Vogler; Meredith Ringel Morris. The 21st International ACM SIGACCESS Conference on Computers and Accessibility. October 2019.

\[ETSI-ES-202-076\]  
[ETSI ES 202 076 V2.1.1: Human Factors (HF); User Interfaces; Generic spoken command vocabulary for ICT devices and services](https://www.etsi.org/deliver/etsi_es/202000_202099/202076/02.01.01_50/es_202076v020101m.pdf). ETSI. URL: <https://www.etsi.org/deliver/etsi_es/202000_202099/202076/02.01.01_50/es_202076v020101m.pdf>

\[personal-assistant-architecture\]  
[Intelligent Personal Assistant Architecture and Potential for Standardization Version 1.2](https://w3c.github.io/voiceinteraction/voice%20interaction%20drafts/paArchitecture-1-2.htm). Voice Interaction Community Group. 19 July 2021. URL: <https://w3c.github.io/voiceinteraction/voice%20interaction%20drafts/paArchitecture-1-2.htm>

\[raur\]  
[RTC Accessibility User Requirements](https://www.w3.org/TR/raur/). Joshue O'Connor; Janina Sajka; Jason White; Michael Cooper. W3C. 25 May 2021. W3C Note. URL: <https://www.w3.org/TR/raur/>

\[uaag\]  
[User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/). W3C. 15 December 2015. URL: <https://www.w3.org/TR/UAAG20/>

\[WCAG21\]  
[Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/). Andrew Kirkpatrick; Joshue O'Connor; Alastair Campbell; Michael Cooper. W3C. 5 June 2018. W3C Recommendation. URL: <https://www.w3.org/TR/WCAG21/>

\[xaur\]  
[XR Accessibility User Requirements](https://www.w3.org/TR/xaur/). W3C. 16 Sept 2020. URL: <https://www.w3.org/TR/xaur/>

[↑](#title)

<span class="caret"></span>

<a href="#dfn-natural-language-interface" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-interactive-voice-response" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-user-needs" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.
