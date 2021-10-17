<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

W3C First Public Working Draft 14 October 2021
----------------------------------------------

This version:  
<a href="https://www.w3.org/TR/2021/WD-remote-meetings-20211014/" class="u-url">https://www.w3.org/TR/2021/WD-remote-meetings-20211014/</a>

Latest published version:  
<https://www.w3.org/TR/remote-meetings/>

Latest editor's draft:  
<https://w3c.github.io/apa/remote-meetings>

Editors:  
<a href="mailto:scott.hollier@accessibility.org.au" class="ed_mailto u-email email p-name">Scott Hollier</a> (<span class="p-org org h-org">Centre For Accessibility Australia</span>)

<a href="https://www.w3.org/People/Brewer/" class="u-url url p-name fn">Judy Brewer</a> (<span class="p-org org h-org">W3C</span>)

<a href="mailto:jjwhite@ets.org" class="ed_mailto u-email email p-name">Jason White</a> (<span class="p-org org h-org">Educational Testing Service</span>)

<a href="http://rednote.net/" class="u-url url p-name fn">Janina Sajka</a>

<a href="mailto:joconnor@w3.org" class="ed_mailto u-email email p-name">Joshue O'Connor</a> (<span class="p-org org h-org">W3C</span>)

<a href="mailto:steve.noble@pearson.com" class="ed_mailto u-email email p-name">Stephen Noble</a> (<span class="p-org org h-org">Pearson</span>)

Participate:  
[GitHub w3c/apa](https://github.com/w3c/apa/)

[File an issue](https://github.com/w3c/apa/issues/)

[Commit history](https://github.com/w3c/apa/commits/)

[Pull requests](https://github.com/w3c/apa/pulls/)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2021 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

This document summarizes considerations of accessibility that arise in the conduct of remote and hybrid meetings. Such meetings are mediated, for some or all participants, by real-time communication software typically built upon Web technologies. Issues of software selection, and the roles of meeting hosts and participants in providing access are explained. Relevant W3C documents are referred to, where applicable, as sources of more detailed and in some instances normative guidance.

Whereas the [RTC Accessibility User Requirements](https://www.w3.org/TR/raur/) \[<a href="#bib-raur" class="bibref" title="RTC Accessibility User Requirements">raur</a>\] address the design of the underlying technologies and software, the present document examines the accessibility of remote and hybrid meetings from a larger perspective. It is recognized that the accessibility of a meeting experience to participants with disabilities depends on a variety of conditions, only some of which are ensured by the design of the software used. Further conditions need to be put in place as part of the process of organizing and conducting the meeting itself, including the appropriate application of features offered by the meeting software as well as the creation of accessible content.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [Accessible Platform Architectures Working Group](https://www.w3.org/WAI/APA/) as a First Public Working Draft.

To comment, [file an issue in the W3C APA GitHub repository](https://github.com/w3c/apa/issues/new). If this is not feasible, send email to <public-apa@w3.org> ([subscribe](mailto:public-apa@w3.org?subject=subscribe), [archives](https://lists.w3.org/Archives/Public/public-apa/)). Comments are requested by **19th November 2021**.

Publication as a First Public Working Draft does not imply endorsement by the W3C Membership.

This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). The group does not expect this document to become a W3C Recommendation. W3C maintains a [public list of any patent disclosures](https://www.w3.org/groups/wg/apa/ipr) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2020/Process-20200915/" id="w3c_process_revision">15 September 2020 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#abstract" class="tocxref">Abstract</a>
2.  <a href="#sotd" class="tocxref">Status of This Document</a>
3.  <a href="#definitions" class="tocxref">1. Definitions</a>
    1.  <a href="#remote-meeting" class="tocxref">1.1 Remote meeting</a>
    2.  <a href="#types-of-remote-meeting-platforms" class="tocxref">1.2 Types of remote meeting platforms</a>
4.  <a href="#accessibility-context" class="tocxref">2. Accessibility context</a>
5.  <a href="#meeting-platform-selection-and-development" class="tocxref">3. Meeting Platform Selection and Development</a>
    1.  <a href="#selection" class="tocxref">3.1 Selecting an accessible remote meeting platform</a>
    2.  <a href="#creating-accessible-remote-meeting-software-platforms" class="tocxref">3.2 Creating accessible remote meeting software platforms</a>
    3.  <a href="#w3c-guidance-relevant-to-platform-development-and-selection" class="tocxref">3.3 W3C guidance relevant to platform development and selection</a>
        1.  <a href="#relevance-of-the-web-content-accessibility-guidelines" class="tocxref">3.3.1 Relevance of the Web Content Accessibility Guidelines</a>
        2.  <a href="#relevance-of-the-user-agent-accessibility-guidelines" class="tocxref">3.3.2 Relevance of the User Agent Accessibility Guidelines</a>
        3.  <a href="#relevance-of-the-authoring-tool-accessibility-guidelines" class="tocxref">3.3.3 Relevance of the Authoring Tool Accessibility Guidelines</a>
        4.  <a href="#relevance-of-the-real-time-communication-accessibility-user-requirements" class="tocxref">3.3.4 Relevance of the Real-Time Communication Accessibility User Requirements</a>
        5.  <a href="#relevance-of-the-xr-accessibility-user-requirements-xaur" class="tocxref">3.3.5 Relevance of the XR Accessibility User Requirements (XAUR)</a>
    4.  <a href="#additional-guidance-for-creating-remote-meeting-platforms" class="tocxref">3.4 Additional guidance for creating remote meeting platforms</a>
6.  <a href="#creating-accessible-content-for-remote-meetings" class="tocxref">4. Creating accessible content for remote meetings</a>
    1.  <a href="#w3c-guidance-relevant-for-accessible-remote-meetings" class="tocxref">4.1 W3C guidance relevant for accessible remote meetings</a>
        1.  <a href="#relevance-of-the-web-content-accessibility-guidelines-0" class="tocxref">4.1.1 Relevance of the Web Content Accessibility Guidelines</a>
        2.  <a href="#relevance-of-the-authoring-tool-accessibility-guidelines-atag" class="tocxref">4.1.2 Relevance of the Authoring Tool Accessibility Guidelines (ATAG)</a>
7.  <a href="#holding-accessible-remote-meetings" class="tocxref">5. Holding accessible remote meetings</a>
    1.  <a href="#hosting-accessible-remote-meetings" class="tocxref">5.1 Hosting accessible remote meetings</a>
    2.  <a href="#participating-in-accessible-remote-meetings" class="tocxref">5.2 Participating in accessible remote meetings</a>
8.  <a href="#holding-accessible-hybrid-meetings" class="tocxref">6. Holding accessible hybrid meetings</a>
9.  <a href="#resources" class="tocxref">A. Resources</a>
10. <a href="#references" class="tocxref">B. References</a>
    1.  <a href="#informative-references" class="tocxref">B.1 Informative references</a>

1. Definitions<a href="#definitions" class="self-link"></a>
-----------------------------------------------------------

For consistency and clarity, the following terms are used throughout this document, as defined here.

### 1.1 Remote meeting<a href="#remote-meeting" class="self-link"></a>

*Remote meeting* is an umbrella term used to describe real-time discussions or presentations held between two or more parties online. Other related terms often used include virtual meetings, online meetings, online presentations, video conferencing. Webinars can also be considered a remote meeting, however the interaction between presenter and attendee may be restricted.

A remote meeting generally requires the use of an online meeting platform on an online device such as a computer, smartphone or digital assistant that allows participants to interact with each other. Typical features of remote meeting platforms include the use of audio communication via an online microphone or traditional telephone, video communication via an online camera, a chat feature for text-based communication and the ability to share content. This can include the sharing of a participant’s computer screen, the sharing of an on-screen presentation with media-rich content such as slides and videos, and the transferring of files. In addition, the remote meeting platforms generally have the ability for participants to allocate a meeting host which controls the features that are available to other participants.

### 1.2 Types of remote meeting platforms<a href="#types-of-remote-meeting-platforms" class="self-link"></a>

There are a number of different platform delivery types. These include, but are not limited to:

Standalone client  
This includes a specific web portal or app where the primary purpose is to provide a remote meeting. Examples include Zoom, Microsoft Teams and Cisco WebEx.

Conference or event platform  
This platform provides remote meeting functionality alongside additional content such as the ability to register for a conference, view exhibitors and follow social media feeds.

Educational platform  
This provides remote meeting functionality within a Learning Management System (LMS) for educational purposes such as the addition of a discussion board and learning materials. In these instances the standard remote meeting features are available for the real-time presentation aspects with the extended functionality providing additional features designed to be an equivalent to a real-world experience.

Medical platform  
The delivery of remote meeting functionality within a medical platform such as telehealth facilities or to assist with medical procedures.

XR platform  
This is an immersive remote meeting platform'' where immersive XR environments are used as a real-time virtual meeting place.

Hybrid meetings: In addition to the meetings which occur exclusively online, there are also hybrid meetings where there is a combination of participants using remote meeting software combined with two or more people physically located in a meeting room.

2. Accessibility context<a href="#accessibility-context" class="self-link"></a>
-------------------------------------------------------------------------------

In broad terms, the accessibility requirements of standard remote meeting delivery rely on three distinct elements:

-   The accessibility of the remote meeting platform;
-   The accessibility of content that is shared during the meeting; and
-   The accessibility awareness of host participants when the remote meeting is taking place.

The accessibility challenges faced by people with disabilities participating in remote meetings will depend on how these three elements interact. An example that highlights the challenges across these three areas is the provision of captioned video. In the case of the remote meeting platform, if captioned video playback is not implemented in the software then the tool fails the WCAG requirement. If the tool can support the playback of captioned video but the video itself does not have captions, the same accessibility issue occurs but for a different reason. Additionally, if both the meeting platform can support the display of captions, and the content contains captions, there is the possibility that the host does not know how to enable the captions for viewing by all participants leading to the accessibility issue occurring through yet another mechanism.

While the playback of captioned video highlights a consistent issue across all three elements, the issues faced by people with disabilities will vary depending on the implementation of accessibility requirements and current limitations of remote meeting software. For example, interface elements for a remote meeting platform can be made operable for screen reader users, but content presented by screen sharing is unlikely to be available due to the way in which visual content is refreshed on screen. As such, specific guidance is needed for software developers, content producers and users respectively to ensure that best practice in remote meeting delivery is achieved. Hybrid meetings add another layer of complexity whereby audio, video and the distribution of meeting materials need to be accessible to all participants regardless of whether they are physically or remotely attending the meeting.

While W3C has applicable guidance across several standards and Notes relating to real-time communication and XR, it is this level of complexity that this document endeavours to address. In each instance, the level of responsibility for accessibility is different: for the remote meeting tool, guidance is required for developers of the platform. For presentation materials used during a remote meeting, the responsibility is with the content producer. If both of these elements cater effectively for people with disabilities, the final responsibility is with the host to ensure the accessibility features are enabled, or best efforts are made to ensure current limitations of the medium are overcome. In the case of hybrid meetings, there may be a shared responsibility between the online meeting host and the host of the physical meeting attendees.

For organisations considering these factors, there is also a need to explore appropriate procurement solutions. With the accessibility of remote meeting platforms varying considerably, it is an important consideration that accessibility criteria are prioritized when selecting a platform.

3. Meeting Platform Selection and Development<a href="#meeting-platform-selection-and-development" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------

This section summarizes W3C guidance relevant to the selection and development of remote meeting software (i.e., meeting platforms) supporting users' access needs. Additional suggestions that extend beyond existing W3C guidance are also included.

### 3.1 Selecting an accessible remote meeting platform<a href="#selection" class="self-link"></a>

Organizational roles associated with procurement will need to carefully examine the accessibility support and features in remote meeting software before committing to its purchase. The following guidance can help to identify which remote meeting platforms support accessibility requirements.

Persons responsible for procuring or selecting a platform on which to conduct remote meetings should

-   Ensure that platforms have user interfaces that conform to Level AA of the latest version of the WCAG standard
-   Ensure that the client platform supports a diversity of operating systems for which the remote meeting platform is supported. Not all access needs or assistive technologies are equally served by each of the popular operating systems. Therefore, the more choice the user has of underlying operating system, the more likely it is that accessibility and compatibility needs can be satisfied.
-   Ensure that multiple meeting connection methods are available. This should include the interoperability of remote meeting platforms with the public switched telephone network, and with telephony standards such as the Session Initiation Protocol (SIP). Offering telephone-based access to the meeting allows users greater opportunities to participate using hardware and software that satisfy their access needs and with which they are familiar.
-   Preference authoring tools that comply with ATAG 2.0 so that users with disabilities can interact with them and produce accessible content.
-   Ensure that accessible authoring tools are recommended in preparing content (documents, presentations, etc.) for dissemination in remote meetings, taking into account the requirements of [Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/) \[<a href="#bib-atag20" class="bibref" title="Authoring Tool Accessibility Guidelines (ATAG) 2.0">atag20</a>\].
-   Evaluate other accessibility-related features of meeting platforms in light of users' access needs, as described here and in the *Real-Time Accessibility User Requirements*.

More generally, selecting an appropriate platform can be accomplished by reviewing the extent to which each of the available options supports the applicable standards identified in this document. The commitment of the chosen platform's developers to maintaining and enhancing accessibility-related aspects of the software is an important consideration in making a suitable choice.

The developers of remote meeting products may publish, or provide on request, an Accessibility Conformance Report based on the [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat). This report assesses the software with respect to public-sector procurement standards established in the European Union ([EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) \[<a href="#bib-en-301-549" class="bibref" title="EN 301 549 v3.2.1: Harmonised European Standard - Accessibility requirements for ICT products and services">en-301-549</a>\]) and in the United States ([36 CFR Part 1194](https://www.law.cornell.edu/cfr/text/36/part-1194) \[<a href="#bib-36-cfr-1194" class="bibref" title="36 CFR Appendix C to Part 1194, Functional Performance Criteria and Technical Requirements">36-cfr-1194</a>\]), which in turn incorporate the *Web Content Accessibility Guidelines*, together with other accessibility requirements. Such information, if verified as accurate, provides an important basis for assessing the extent to which a remote meeting platform is likely to meet the accessibility-related needs of its users. Nevertheless, as noted elsewhere in this document, current technical accessibility standards do not fully address user needs associated with remote meeting applications. Therefore, additional evaluations are desirable to identify relevant features provided by remote meeting platforms that extend beyond what is required for conformance to technical accessibility standards, and which may not be documented in an Accessibility Conformance Report.

### 3.2 Creating accessible remote meeting software platforms<a href="#creating-accessible-remote-meeting-software-platforms" class="self-link"></a>

Software developers that create and maintain remote meeting software need to ensure that accessibility features and support for accessible user interface elements are included in their products. W3C provides a number of accessibility resources that can assist along with other guidance in this section.

### 3.3 W3C guidance relevant to platform development and selection<a href="#w3c-guidance-relevant-to-platform-development-and-selection" class="self-link"></a>

The W3C Web Accessibility Initiative contains three guidelines and two Notes that provide assistance to the creation of accessible remote meeting platforms. Such guidance can also serve as a basis for criteria with which to evaluate the accessibility of remote meeting platforms, thus facilitating platform selection as well as development. These W3C resources include standards relating to web content, user agents and authoring tools along with non-normative notes relating to real-time communication and XR accessibility

#### 3.3.1 Relevance of the Web Content Accessibility Guidelines<a href="#relevance-of-the-web-content-accessibility-guidelines" class="self-link"></a>

Guidance in the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">wcag21</a>\] standard applies to user interface elements in remote meeting software.

#### 3.3.2 Relevance of the User Agent Accessibility Guidelines<a href="#relevance-of-the-user-agent-accessibility-guidelines" class="self-link"></a>

The following success criteria are relevant to the design and implementation of meeting platforms.

> -   1.1.4 Facilitate Clear Display of Alternative Content for Time-based Media:
>
> For recognized on-screen alternative content for time-based media (e.g. captions, sign language video), the following are all true: (Level A)
>
> Don't obscure controls: Displaying time-based media alternatives doesn't obscure recognized controls for the primary time-based media.
>
> Don't obscure primary media: The user can specify that displaying time-based media alternatives doesn't obscure the primary time-based media.
>
> Note: Depending on the screen area available, the display of the primary time-based media (slides, documents, etc.) may need to be reduced in size to meet this requirement.
>
> Reference for 1.1.4
>
> -   1.1.5 Provide Configurable Alternative Content Defaults:
>
> The user can specify which type(s) of alternative content to render by default for each type of non-text content, including time based media. (Level AA) Reference for 1.1.5
>
> -   1.1.6 Use Configurable Text for Time-based Media Captions:
>
> For recognized on-screen alternative content for time-based media (e.g. captions, sign language video), the user can configure recognized text within time-based media alternatives (e.g. captions) in conformance with 1.4.1. (Level AA) Reference for 1.1.6
>
> -   1.1.7 Allow Resize and Reposition of Time-based Media Alternatives:
>
> The user can configure recognized alternative content for time-based media (e.g. captions, sign language video) as follows: (Level AAA)
>
> Resize: The user can resize alternative content for time-based media to at least 50% of the size of the top-level viewports.
>
> Reposition: The user can reposition alternative content for time-based media to two or more of the following: above, below, to the right, to the left, and overlapping the primary time-based media.
>
> Note 1: Depending on the screen area available, the display of the primary time-based media can need to be reduced in size or hidden to meet this requirement.
>
> Note 2: Implementation can involve displaying alternative content for time-based media in a separate viewport, but this is not required.
>
> Reference for 1.1.7

-   [User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/) \[<a href="#bib-uaag20" class="bibref" title="User Agent Accessibility Guidelines (UAAG) 2.0">uaag20</a>\]: this standard applies to remote meeting software that incorporates web browsers or other agents for its presentation mechanism

#### 3.3.3 Relevance of the Authoring Tool Accessibility Guidelines<a href="#relevance-of-the-authoring-tool-accessibility-guidelines" class="self-link"></a>

The [Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/) \[<a href="#bib-atag20" class="bibref" title="Authoring Tool Accessibility Guidelines (ATAG) 2.0">atag20</a>\] offers normative guidance concerning the development of authoring tools that support the creation of content. This is relevant in the context of extended remote meeting platforms such as conference hubs and LMS platforms where remote functionality is an embedded function. People with disabilities will therefore need to be able to use the frontend and backend processes of these platforms (ATAG 2.0 Part A).

#### 3.3.4 Relevance of the Real-Time Communication Accessibility User Requirements<a href="#relevance-of-the-real-time-communication-accessibility-user-requirements" class="self-link"></a>

Important considerations relating to the real-time communication development aspects of remote meeting platforms are addressed in greater detail in [RTC Accessibility User Requirements](https://www.w3.org/TR/raur/) \[<a href="#bib-raur" class="bibref" title="RTC Accessibility User Requirements">raur</a>\] (W3C Working Group Note). This document also offers additional considerations, based on analysis of users' needs.

-   Real-time Text (RTT) support, in which characters are sent to the other party to the communication almost as soon as they are entered, instead of waiting for an entire message to be composed before it is transmitted. This allows for a more immediate conversational exchange (e.g., participants can interrupt each other), and often proves to be a more effective communication method for people who are deaf or hard of hearing than an "instant message" style of textual communication.
-   Interoperability with relay services (allowing them to be brought into a conversation, as needed, to support communication, including provision of sign language interpretation).
-   Support for enabling the user to switch seamlessly between modes of interaction (voice, video, real-time text, sign language interpreting).
-   Support for an "instant message" style of communication in which the entire message is transmitted as a unit, rather than character-by-character. (This may be preferred, for example, by screen reader users.)
-   Minimum audio and video quality requirements. Such requirements, addressing issues of video frame rates, audio clarity, and synchronization of audio and video are identified in [RTC Accessibility User Requirements](https://www.w3.org/TR/raur/) \[<a href="#bib-raur" class="bibref" title="RTC Accessibility User Requirements">raur</a>\], with reference to applicable standards.

#### 3.3.5 Relevance of the XR Accessibility User Requirements (XAUR)<a href="#relevance-of-the-xr-accessibility-user-requirements-xaur" class="self-link"></a>

Important considerations relating to the development of remote meeting platforms that make use of immersive environments are addressed in greater detail in the [XR Accessibility User Requirements](https://www.w3.org/TR/xaur/) \[<a href="#bib-xaur" class="bibref" title="XR Accessibility User Requirements">xaur</a>\]. This Note also offers additional considerations, based on analysis of users' needs.

An example of where this guidance may be helpful is if a meeting were to take place entirely in virtual reality. XAUR can assist developers creating remote meeting platforms for this purpose to ensure people with disabilities can effectively participate.

### 3.4 Additional guidance for creating remote meeting platforms<a href="#additional-guidance-for-creating-remote-meeting-platforms" class="self-link"></a>

In addition to existing W3C WAI guidance, meeting platform developers should

-   Provide the ability to record a specific user view throughout the meeting such as a sign language interpreter.
-   Allow customized window views. For example, sign language participants could be pinned on screen and in particular places, or a consistent view across all participants could be established. This would allow, for example, to reference 'a 'person on the left' which is the same for all participants which provides a more consistent experience for people with cognitive disabilities.
-   Allow the size of windows to be adjustable to assist participants with low vision.
-   Allow the display of captions and subtitles to be customizable. This would include allowing the text to be enlarged, colors changed, a high contrast mode and moving the on-screen location based on user preferences .
-   Ensure that status messages of video-conference controls, including user notification upon activation of camera-on status, is provided to assistive technologies so that someone who cannot see a visual activation sensor is not broadcasting video unawares.
-   Provide a prioritization mechanism for low bandwidth scenarios, e.g. sign language participants can prioritize video over audio.

4. Creating accessible content for remote meetings<a href="#creating-accessible-content-for-remote-meetings" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------

In order for remote meetings to be accessible, the content used within a meeting, such as presentation slides and reference documents, also need to be made accessible. Limitations to the remote meeting software may make it necessary to distribute these documents separately. The following sections provide W3C guidance on content preparation and other practical guidance.

### 4.1 W3C guidance relevant for accessible remote meetings<a href="#w3c-guidance-relevant-for-accessible-remote-meetings" class="self-link"></a>

#### 4.1.1 Relevance of the Web Content Accessibility Guidelines<a href="#relevance-of-the-web-content-accessibility-guidelines-0" class="self-link"></a>

-   **Any prepared content (e.g., documents, presentation slides, prerecorded multimedia) that is shared with or shown to meeting participants is subject to the Web Content Accessibility Guidelines (WCAG).** Policies typically specify that documents, presentations and related materials should conform to WCAG 2.1 Level AA.
-   **Live audio and video communications that take place among meeting participants.** This is the real-time communication component of the meeting. The following WCAG 2.1 success criteria provide support for accessibility of live audio and video:
    -   Success Criterion 1.2.4: Captions (Live). This is applicable to real-time communication by meeting participants. The quality of captions is essential to effective communication. It should be noted that the use of automatic speech recognition (ASR) technology to generate captions will not yield sufficiently high quality without manual intervention to correct errors. Moreover, such correction is difficult to perform effectively in real time.
    -   Success criterion 1.2.9: Audio-only (Live). This success criterion specifies that a text transcript of live, audio-only content be provided. In a meeting. This could be achieved by transcribing the dialogue in real time. As with captions of videoconferences, automatic speech recognition will not yield sufficiently high quality captions for most settings.
    -   For user interfaces presented live in a meeting via screen sharing: success criteria 1.4.1 (Use of color), 1.4.3 (text contrast), 1.4.6 (contrast - enhanced), 2.3.1 (three flashes or below threshold), 2.3.2 (three flashes) are applicable.

Note: sign language interpretation greatly facilitates accessibility of meetings for sign language users. Sign language interpretation is a Level AAA requirement of WCAG 2.1 for prerecorded audio content only. However, sign language can be streamed into a videoconference window during a live videoconferencing session; this may need clarification in future versions of the Guidelines.

#### 4.1.2 Relevance of the Authoring Tool Accessibility Guidelines (ATAG)<a href="#relevance-of-the-authoring-tool-accessibility-guidelines-atag" class="self-link"></a>

[Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/) \[<a href="#bib-atag20" class="bibref" title="Authoring Tool Accessibility Guidelines (ATAG) 2.0">atag20</a>\] offers normative guidance concerning the development of authoring tools that support the creation of content that meets WCAG accessibility requirements. ATAG 2.0 also specifies requirements for accessibility of the user interface of an authoring tool.

Although a meeting platform is not, in itself, an authoring tool, authoring tools are used to prepare materials such as presentations and documents for dissemination in remote meetings. These tools include document editing and file format conversion software. In addition, a meeting platform may be integrated with an authoring tool to enable the real-time, collaborative writing or editing of documents or other content during a meeting.

In summary, ATAG 2.0 is applicable as follows.

-   Authoring tools that partly or fully conform to ATAG 2.0 at any level of conformance are the preferred environment in which to create documents, presentations, multimedia and other materials disseminated to participants in remote meetings.
-   Authoring tools included in or associated with platforms used for remote meetings, such as real-time document editing environments that allow content to be created and edited collaboratively during a meeting, should conform to ATAG 2.0.

5. Holding accessible remote meetings<a href="#holding-accessible-remote-meetings" class="self-link"></a>
---------------------------------------------------------------------------------------------------------

The successful delivery of a remote meeting will require an awareness from the meeting host and participants as to what accessibility features are available and how to ensure they are available to all participants. Guidance for hosts and participants is provided as best practice.

In addition, the following Web Accessibility Initiative (WAI) resources should be consulted as complements to this document.

-   Making Audio and Video Media Accessible \[<a href="#bib-media-av" class="bibref" title="Making Audio and Video Media Accessible">media-av</a>\].
-   How to Make your Presentations Accessible to All \[<a href="#bib-accessible-presentations" class="bibref" title="How to Make Your Presentations Accessible to All">accessible-presentations</a>\].

### 5.1 Hosting accessible remote meetings<a href="#hosting-accessible-remote-meetings" class="self-link"></a>

Hosts in remote meetings should:

-   Verify that the meeting platform has been selected appropriately for accessibility, as described in <a href="#selection" class="sec-ref">§ 3.1 Selecting an accessible remote meeting platform</a>.
-   Verify that audio and video tests are integrated into the platform.
-   Ensure that participants are informed as to what the core features are, e.g. registration, exhibitions, presentations, etc.
-   Ensure that help options are clearly identified.
-   Prepare documents, presentations, multimedia and other materials so as to conform to [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/tR/wcag21/) \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">wcag21</a>\], preferably at Level AA or beyond. For an overview, see \[<a href="#bib-media-av" class="bibref" title="Making Audio and Video Media Accessible">media-av</a>\] and \[<a href="#bib-accessible-presentations" class="bibref" title="How to Make Your Presentations Accessible to All">accessible-presentations</a>\].
-   Ensure that the files containing such documents, presentations, multimedia, etc., are available directly to meeting participants, and that screen sharing is not the only means of obtaining these materials.
-   Ensure captions are provided.
-   Ensure a sign language interpreter is present where applicable.
-   Provide alternatives to any aspects of the remote meeting platform that are not accessible to meeting participants. For example, if a tool used to coordinate turn taking in a meeting (e.g., a "hand raising" control) is not accessible to keyboard-only users or to users of assistive technologies, offer alternative means of managing turn taking.
-   Create accessible meeting notes that can be made available to participants before or after the meeting.
-   Be familiar with the accessibility features of the meeting software platform. See <a href="#resources" class="sec-ref">§ A. Resources</a> below for a partial list of links to accessibility information offered by well known meeting platform providers. For example, enabling live captions. and verifying that core functionality is keyboard accessible
-   Encourage all participants to test their audio and video in advance of any meeting.
-   Remind all participants to, if possible, ensure that their faces, including their mouths, are visible and well-lit in the videoconferencing window.
-   Ensure that any participants using virtual backgrounds (photo or video) test the quality of their projection to ensure that there is no flicker of the participant’s image.
-   If the sound degrades during a videoconference, request that participants turn off their video to see if that improves the audio quality.
-   If streaming captions or streaming sign language interpreting will be used during a videoconference, make sure to select a videoconferencing platform in which participants can anchor and freely re-size any window in which these communication accommodations will be displayed, independently from the windows showing any content (for instance, slides, whiteboard, etc.), or any other speaker.
-   Provide participants with a variety of meeting connection methods (e.g. computer, app, telephone) to maximise accessibility and choice for participants with disabilities. This may also lead to additional in-meeting accessibility considerations (e.g. the need to live caption telephone participants).

A more detailed elaboration of users' accessibility needs in these scenarios may be found in the [RTC Accessibility User Requirements](https://www.w3.org/TR/raur/) \[<a href="#bib-raur" class="bibref" title="RTC Accessibility User Requirements">raur</a>\].

### 5.2 Participating in accessible remote meetings<a href="#participating-in-accessible-remote-meetings" class="self-link"></a>

Participants in remote meetings should:

-   Ensure that the video and audio features of the remote meeting connection are tested ahead of the meeting.
-   Ensure that any documents, presentations, multimedia and other materials to be used in the meeting conform to [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/tR/wcag21/) \[<a href="#bib-wcag21" class="bibref" title="Web Content Accessibility Guidelines (WCAG) 2.1">wcag21</a>\], preferably at Level AA or beyond.
-   Ensure that the host has an accessible copy of any resources intended for use prior to the meeting commencing so that the resources can be provided to participants with disabilities.
-   If a remote meeting features sign language interpretation, participants should turn off their videos so that the interpreter’s view is prioritized.

6. Holding accessible hybrid meetings<a href="#holding-accessible-hybrid-meetings" class="self-link"></a>
---------------------------------------------------------------------------------------------------------

Hosts for hybrid meetings need to ensure that all participants can access all aspects of a meeting, regardless of whether they are physically present or joining remotely. Issues may include audio, video or content being only available to people attending in person or exclusively for people joining in remotely. The following guidance can help you ensure that your meeting is accessible to all.

-   Ensure that the selected online platform conforms to accessibility requirements, as noted in the previously discussed procurement guidance.

<!-- -->

-   Ensure that all content is prepared to be accessible as discussed in the Creating accessible content for remote meetings section.

<!-- -->

-   Ensure that online participants and in-person participants can see and hear each other.

<!-- -->

-   Ensure that captions and subtitles can be viewed simultaneously by online participants and in-person participants. for example, live captions could be on a display in the room while also being available on the remote meeting platform.

<!-- -->

-   Ensure that online waiting rooms are disabled so online participants that lose connection can easily rejoin without disturbing the hybrid meeting.

<!-- -->

-   Ensure that the timeing of discussions and breaks are effectivley conveyed to both in-person participants and online participants.

A. Resources<a href="#resources" class="self-link"></a>
-------------------------------------------------------

-   [Zoom Accessibility](https://zoom.us/accessibility)
-   [Blackboard collaborate: (integrated into Blackboard Ultra)](https://help.blackboard.com/Collaborate/Ultra/Administrator/Accessibility)
-   [WebEx App Accessibility](https://help.webex.com/en-us/cfojgdb/Webex-Web-App-Accessibility-Features)
-   [Accessibility support for Microsoft Teams](https://support.office.com/en-us/article/accessibility-support-for-microsoft-teams-d12ee53f-d15f-445e-be8d-f0ba2c5ee68f)
-   [Hangouts Meet accessibility](https://support.google.com/meet/answer/7313544?hl=en)
-   [ITU Guidelines for accessible meetings (PDF, Word)](http://handle.itu.int/11.1002/pub/80d1f733-en)

B. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### B.1 Informative references<a href="#informative-references" class="self-link"></a>

\[36-cfr-1194\]  
[36 CFR Appendix C to Part 1194, Functional Performance Criteria and Technical Requirements](https://www.law.cornell.edu/cfr/text/36/appendix-C_to_part_1194). Legal Information Institute. URL: <https://www.law.cornell.edu/cfr/text/36/appendix-C_to_part_1194>

\[accessible-presentations\]  
[How to Make Your Presentations Accessible to All](https://www.w3.org/WAI/teach-advocate/accessible-presentations/). W3C Web accessibility Initiative (WAI). February 2021. URL: <https://www.w3.org/WAI/teach-advocate/accessible-presentations/>

\[atag20\]  
[Authoring Tool Accessibility Guidelines (ATAG) 2.0](https://www.w3.org/TR/ATAG20/). Jan Richards; Jeanne F Spellman; Jutta Treviranus. W3C. 24 September 2015. W3C Recommendation. URL: <https://www.w3.org/TR/ATAG20/>

\[en-301-549\]  
[EN 301 549 v3.2.1: Harmonised European Standard - Accessibility requirements for ICT products and services](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf). CEN/CENELEC/ETSI. 2021-03. URL: <https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf>

\[media-av\]  
[Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/). W3C web Accessibility Initiative (WAI). January 2021. URL: <https://www.w3.org/WAI/media/av/>

\[raur\]  
[RTC Accessibility User Requirements](https://www.w3.org/TR/raur/). Joshue O'Connor; Janina Sajka; Jason White; Michael Cooper. W3C. 25 May 2021. W3C Note. URL: <https://www.w3.org/TR/raur/>

\[uaag20\]  
[User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/). James Allan; Greg Lowney; Kimberly Patch; Jeanne F Spellman. W3C. 15 December 2015. W3C Note. URL: <https://www.w3.org/TR/UAAG20/>

\[wcag21\]  
[Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/). Andrew Kirkpatrick; Joshue O'Connor; Alastair Campbell; Michael Cooper. W3C. 5 June 2018. W3C Recommendation. URL: <https://www.w3.org/TR/WCAG21/>

\[xaur\]  
[XR Accessibility User Requirements](https://www.w3.org/TR/xaur/). W3C. 16 Sept 2020. URL: <https://www.w3.org/TR/xaur/>

[↑](#title)
