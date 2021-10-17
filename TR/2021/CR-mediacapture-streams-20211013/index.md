<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

[W3C Candidate Recommendation Snapshot](https://www.w3.org/standards/types) 13 October 2021
-------------------------------------------------------------------------------------------

More details about this document

This version:  
<a href="https://www.w3.org/TR/2021/CR-mediacapture-streams-20211013/" class="u-url">https://www.w3.org/TR/2021/CR-mediacapture-streams-20211013/</a>

Latest published version:  
<https://www.w3.org/TR/mediacapture-streams/>

Latest editor's draft:  
<https://w3c.github.io/mediacapture-main/>

History:  
[Publication history](https://www.w3.org/standards/history/mediacapture-streams)

[Commit history](https://github.com/w3c/mediacapture-main/commits/)

Implementation report:  
<https://wpt.fyi/mediacapture-streams>

Previous version:  
<https://www.w3.org/TR/2021/CRD-mediacapture-streams-20210819/>

Editors:  
<span class="p-name fn">Cullen Jennings</span> (<span class="p-org org h-org">Cisco</span>)

<span class="p-name fn">Bernard Aboba</span> (<span class="p-org org h-org">Microsoft Corporation</span>)

<span class="p-name fn">Jan-Ivar Bruaroey</span> (<span class="p-org org h-org">Mozilla</span>)

<span class="p-name fn">Henrik Boström</span> (<span class="p-org org h-org">Google</span>)

<span class="p-name fn">Youenn Fablet</span> (<span class="p-org org h-org">Apple</span>)

 Former editors:   
<span class="p-name fn">Daniel C. Burnett</span> (<span class="p-org org h-org">Invited Expert</span>) - Until 01 June 2018

<span class="p-name fn">Adam Bergkvist</span> (<span class="p-org org h-org">Ericsson</span>) - Until 01 June 2018

<span class="p-name fn">Anant Narayanan</span> (<span class="p-org org h-org">Mozilla</span>) - Until 30 November 2012

Feedback:  
[GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main/) ([pull requests](https://github.com/w3c/mediacapture-main/pulls/), [new issue](https://github.com/w3c/mediacapture-main/issues/new/choose), [open issues](https://github.com/w3c/mediacapture-main/issues/))

[public-webrtc@w3.org](mailto:public-webrtc@w3.org?subject=%5Bmediacapture-streams%5D%20YOUR%20TOPIC%20HERE) with subject line \[mediacapture-streams\] *… message topic …* ([archives](https://lists.w3.org/Archives/Public/public-webrtc))

Participate  
[Mailing list](https://lists.w3.org/Archives/Public/public-webrtc/)

Initial Author of this Specification was Ian Hickson, Google Inc., with the following copyright statement:  
© Copyright 2004-2011 Apple Computer, Inc., Mozilla Foundation, and Opera Software ASA. You are granted a license to use, reproduce and create derivative works of this document.

------------------------------------------------------------------------

All subsequent changes since 26 July 2011 done by the W3C WebRTC Working Group (and previously the Device APIs Working Group) are under the following [Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright):  
© 2011-2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

Abstract
--------

This document defines a set of JavaScript APIs that allow local media, including audio and video, to be requested from a platform.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document is not complete. The API is based on preliminary work done in the WHATWG.

Before this document proceeds to Proposed Recommendation, the WebRTC Working Group intends to address [issues that emerged from wide review](https://www.w3.org/PM/horizontal/review.html?shortname=mediacapture-streams).

This document was published by the [Web Real-Time Communications Working Group](https://www.w3.org/groups/wg/webrtc) as a Candidate Recommendation Snapshot. This document is intended to become a W3C Recommendation.

[GitHub Issues](https://github.com/w3c/mediacapture-main/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-webrtc@w3.org> ([subscribe](mailto:public-webrtc-request@w3.org?subject=subscribe), [archives](https://lists.w3.org/Archives/Public/public-webrtc/)).

Publication as a Candidate Recommendation does not imply endorsement by the W3C Membership. A Candidate Recommendation Snapshot has received [wide review](https://www.w3.org/2020/Process-20200915/#dfn-wide-review) and is intended to gather [implementation experience](https://wpt.fyi/mediacapture-streams).

This Candidate Recommendation is not expected to advance to Proposed Recommendation any earlier than 13 November 2021.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/groups/wg/webrtc/ipr) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2020/Process-20200915/" id="w3c_process_revision">15 September 2020 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#abstract" class="tocxref">Abstract</a>
2.  <a href="#sotd" class="tocxref">Status of This Document</a>
3.  <a href="#intro" class="tocxref">1. Introduction</a>
4.  <a href="#conformance" class="tocxref">2. Conformance</a>
5.  <a href="#terminology" class="tocxref">3. Terminology</a>
6.  <a href="#stream-api" class="tocxref">4. MediaStream API</a>
    1.  <a href="#introduction" class="tocxref">4.1 Introduction</a>
    2.  <a href="#mediastream" class="tocxref">4.2 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStream"><code>MediaStream</code></span></a>
    3.  <a href="#mediastreamtrack" class="tocxref">4.3 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStreamTrack"><code>MediaStreamTrack</code></span></a>
        1.  <a href="#life-cycle-and-media-flow" class="tocxref">4.3.1 Life-cycle and Media Flow</a>
        2.  <a href="#tracks-and-constraints" class="tocxref">4.3.2 Tracks and Constraints</a>
        3.  <a href="#media-stream-track-interface-definition" class="tocxref">4.3.3 Interface Definition</a>
        4.  <a href="#media-track-supported-constraints" class="tocxref">4.3.4 <span data-export="" data-dfn-type="dictionary" data-idl="dictionary" data-title="MediaTrackSupportedConstraints" data-dfn-for=""><code>MediaTrackSupportedConstraints</code></span></a>
        5.  <a href="#media-track-capabilities" class="tocxref">4.3.5 <span data-export="" data-dfn-type="dictionary" data-idl="dictionary" data-title="MediaTrackCapabilities" data-dfn-for=""><code>MediaTrackCapabilities</code></span></a>
        6.  <a href="#media-track-constraints" class="tocxref">4.3.6 <span data-export="" data-dfn-type="dictionary" data-idl="dictionary" data-title="MediaTrackConstraints" data-dfn-for=""><code>MediaTrackConstraints</code></span></a>
        7.  <a href="#media-track-settings" class="tocxref">4.3.7 <span data-export="" data-dfn-type="dictionary" data-idl="dictionary" data-title="MediaTrackSettings" data-dfn-for=""><code>MediaTrackSettings</code></span></a>
        8.  <a href="#constrainable-properties" class="tocxref">4.3.8 Constrainable Properties</a>
    4.  <a href="#mediastreamtrackevent" class="tocxref">4.4 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStreamTrackEvent"><code>MediaStreamTrackEvent</code></span></a>
7.  <a href="#the-model-sources-sinks-constraints-and-settings" class="tocxref">5. The model: sources, sinks, constraints, and settings</a>
8.  <a href="#mediastreams-in-media-elements" class="tocxref">6. MediaStreams in Media Elements</a>
9.  <a href="#error-handling" class="tocxref">7. Error Handling</a>
    1.  <a href="#overconstrainederror-interface" class="tocxref">7.1 OverconstrainedError Interface</a>
        1.  <a href="#constructors" class="tocxref">7.1.1 Constructors</a>
        2.  <a href="#attributes" class="tocxref">7.1.2 Attributes</a>
10. <a href="#event-summary" class="tocxref">8. Event summary</a>
11. <a href="#enumerating-devices" class="tocxref">9. Enumerating Local Media Devices</a>
    1.  <a href="#navigator-interface-extensions" class="tocxref">9.1 <code>Navigator</code> Interface Extensions</a>
    2.  <a href="#mediadevices" class="tocxref">9.2 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaDevices"><code>MediaDevices</code></span></a>
        1.  <a href="#access-control-model" class="tocxref">9.2.1 Access control model</a>
        2.  <a href="#device-information-exposure" class="tocxref">9.2.2 Device information exposure</a>
        3.  <a href="#set-device-information-exposure-0" class="tocxref">9.2.3 Set device information exposure</a>
        4.  <a href="#exposure-decision-algorithm-for-devices-other-than-camera-and-microphone" class="tocxref">9.2.4 Exposure decision algorithm for devices other than camera and microphone</a>
    3.  <a href="#device-info" class="tocxref">9.3 Device Info</a>
    4.  <a href="#input-specific-device-info" class="tocxref">9.4 Input-specific Device Info</a>
12. <a href="#local-content" class="tocxref">10. Obtaining local multimedia content</a>
    1.  <a href="#legacy-interface-extensions" class="tocxref">10.1 Legacy Interface Extensions</a>
    2.  <a href="#mediadevices-interface-extensions" class="tocxref">10.2 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaDevices"><code>MediaDevices</code></span> Interface Extensions</a>
    3.  <a href="#mediastreamconstraints" class="tocxref">10.3 <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStreamConstraints"><code>MediaStreamConstraints</code></span></a>
    4.  <a href="#navigatorusermediasuccesscallback" class="tocxref">10.4 <span data-export="" data-dfn-type="callback" data-idl="callback" data-title="NavigatorUserMediaSuccessCallback" data-dfn-for=""><code>NavigatorUserMediaSuccessCallback</code></span></a>
    5.  <a href="#navigatorusermediaerrorcallback" class="tocxref">10.5 <span data-export="" data-dfn-type="callback" data-idl="callback" data-title="NavigatorUserMediaErrorCallback" data-dfn-for=""><code>NavigatorUserMediaErrorCallback</code></span></a>
    6.  <a href="#implementation-suggestions" class="tocxref">10.6 Implementation Suggestions</a>
13. <a href="#constrainable-interface" class="tocxref">11. Constrainable Pattern</a>
    1.  <a href="#interface-definition" class="tocxref">11.1 Interface Definition</a>
    2.  <a href="#types-for-constrainable-properties" class="tocxref">11.2 Types for Constrainable Properties</a>
    3.  <a href="#capabilities" class="tocxref">11.3 Capabilities</a>
    4.  <a href="#settings" class="tocxref">11.4 Settings</a>
    5.  <a href="#constraints" class="tocxref">11.5 <span>Constraints and ConstraintSet</span></a>
        1.  <a href="#dictionary-constraints-members" class="tocxref">11.5.1 Dictionary <span data-export="" data-dfn-type="dictionary" data-idl="dictionary" data-title="Constraints" data-dfn-for=""><code>Constraints</code></span> Members</a>
14. <a href="#examples" class="tocxref">12. Examples</a>
15. <a href="#permissions-policy-integration" class="tocxref">13. Permissions Policy Integration</a>
16. <a href="#privacy-indicator-requirements" class="tocxref">14. Privacy Indicator Requirements</a>
17. <a href="#privacy-and-security-considerations" class="tocxref">15. Privacy and Security Considerations</a>
18. <a href="#extensibility" class="tocxref">16. Extensibility</a>
    1.  <a href="#defining-a-new-media-type-beyond-the-existing-audio-and-video-types" class="tocxref">16.1 Defining a new media type (beyond the existing Audio and Video types)</a>
    2.  <a href="#defining-a-new-constrainable-property" class="tocxref">16.2 Defining a new constrainable property</a>
    3.  <a href="#defining-new-consumers-of-mediastreams-and-mediastreamtracks" class="tocxref">16.3 Defining new consumers of <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStream"><code>MediaStream</code></span>s and <span class="formerLink" data-xref-type="_IDL_" data-link-type="idl" data-lt="MediaStreamTrack"><code>MediaStreamTrack</code></span>s</a>
19. <a href="#acknowledgements" class="tocxref">A. Acknowledgements</a>
20. <a href="#references" class="tocxref">B. References</a>
    1.  <a href="#normative-references" class="tocxref">B.1 Normative references</a>
    2.  <a href="#informative-references" class="tocxref">B.2 Informative references</a>

1. Introduction<a href="#intro" class="self-link"></a>
------------------------------------------------------

*This section is non-normative.*

This document defines APIs for requesting access to local multimedia devices, such as microphones or video cameras.

This document also defines the MediaStream API, which provides the means to control where multimedia stream data is consumed, and provides some control over the devices that produce the media. It also exposes information about devices able to capture and render media.

2. Conformance<a href="#conformance" class="self-link"></a>
-----------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *NOT REQUIRED*, and *SHOULD* in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) \[<a href="#bib-rfc2119" class="bibref" title="Key words for use in RFCs to Indicate Requirement Levels">RFC2119</a>\] \[<a href="#bib-rfc8174" class="bibref" title="Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words">RFC8174</a>\] when, and only when, they appear in all capitals, as shown here.

This specification defines conformance criteria that apply to a single product: the User Agent that implements the interfaces that it contains.

Conformance requirements phrased as algorithms or specific steps may be implemented in any manner, so long as the end result is equivalent. (In particular, the algorithms defined in this specification are intended to be easy to follow, and not intended to be performant.)

Implementations that use ECMAScript \[<a href="#bib-ecma-262" class="bibref" title="ECMAScript Language Specification">ECMA-262</a>\] to implement the APIs defined in this specification must implement them in a manner consistent with the ECMAScript Bindings defined in the Web IDL specification \[<a href="#bib-webidl" class="bibref" title="Web IDL Standard">WEBIDL</a>\], as this specification uses that specification and terminology.

3. Terminology<a href="#terminology" class="self-link"></a>
-----------------------------------------------------------

source  
A source is the "thing" providing the source of a media stream track. The source is the broadcaster of the media itself. A source can be a physical webcam, microphone, local video or audio file from the user's hard drive, network resource, or static image. Note that this document describes the use of microphone and camera type sources only, the use of other source types is described in other documents.

An application that has no prior authorization regarding sources is only given the number of available sources, their type and any relationship to other devices. Additional information about sources can become available when applications are authorized to use a source (see <a href="#access-control-model" class="sec-ref">§ 9.2.1 Access control model</a>).

Sources **do not** have constraints — tracks have constraints. When a source is connected to a track, it must produce media that conforms to the constraints present on that track, to that track. Multiple tracks can be attached to the same source. User Agent processing, such as downsampling, *MAY* be used to ensure that all tracks have appropriate media.

Sources have constrainable properties which have <a href="#dfn-capabilities" id="ref-for-dfn-capabilities-1" class="internalDFN">capabilities</a> and <a href="#dfn-settings" id="ref-for-dfn-settings-1" class="internalDFN">settings</a> exposed on tracks. While the constrainable properties are "owned" by the source, sources *MAY* be able to accomodate different demands at once. For this reason, capabilities are common to any (multiple) tracks that happen to be using the same source, whereas settings *MAY* differ per track (e.g., if two different track objects bound to the same source query capability and settings information, they will get back the same capabilities, but may get different settings that are tailored to satisfy their individual constraints).

Setting (Source Setting)  
A setting refers to the immediate, current value of the source's constrainable properties. Settings are always read-only.

A source conditions may dynamically change, such as when a camera switches to a lower frame rate due to low light conditions. In these cases the tracks related to the affected source might not satisfy the set constraints any longer. The platform *SHOULD* try to minimize such excursions as far as possible, but will continue to deliver media even when a temporary or permanent condition exists that prevents satisfying the constraints.

Although settings are a property of the source, they are only exposed to the application through the tracks attached to the source. This is exposed via the <a href="#dom-constrainablepattern" id="ref-for-dom-constrainablepattern-1" class="internalDFN"><code>ConstrainablePattern</code></a> interface.

Capability  
For each constrainable property, there is a capability that describes whether it is supported by the source and if so, the range of supported values. As with settings, capabilities are exposed to the application via the <a href="#dom-constrainablepattern" id="ref-for-dom-constrainablepattern-2" class="internalDFN"><code>ConstrainablePattern</code></a> interface.

The values of the supported capabilities must be normalized to the ranges and enumerated types defined in this specification.

A <a href="#dom-mediastreamtrack-getcapabilities" id="ref-for-dom-mediastreamtrack-getcapabilities-1" class="internalDFN"><code>getCapabilities()</code></a> call on a track returns the same underlying per-source capabilities for all tracks connected to the source.

Source capabilities are effectively constant. Applications should be able to depend on a specific source having the same capabilities for any browsing session.

This API is intentionally simplified. Capabilities are not capable of describing interactions between different values. For instance, it is not possible to accurately describe the capabilities of a camera that can produce a high resolution video stream at a low frame rate and lower resolutions at a higher frame rate. Capabilities describe the complete range of each value. Interactions between constraints are exposed by attempting to apply constraints.

Constraints  
Constraints provide a general control surface that allows applications to both select an appropriate source for a track and, once selected, to influence how a source operates.

Constraints limit the range of operating modes that a source can use when providing media for a track. Without provided track constraints, implementations are free to select a source's settings from the full ranges of its supported capabilities. Implementations may also adjust source settings at any time within the bounds imposed by all applied constraints.

<a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-1" class="internalDFN"><code>getUserMedia()</code></a> uses constraints to help select an appropriate source for a track and configure it. Additionally, the <a href="#dom-constrainablepattern" id="ref-for-dom-constrainablepattern-3" class="internalDFN"><code>ConstrainablePattern</code></a> interface on tracks includes an API for dynamically changing the track's constraints at any later time.

A track will not be connected to a source using <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-2" class="internalDFN"><code>getUserMedia()</code></a> if its initial constraints cannot be satisfied. However, the ability to meet the constraints on a track can change over time, and constraints can be changed. If circumstances change such that constraints cannot be met, the <a href="#dom-constrainablepattern" id="ref-for-dom-constrainablepattern-4" class="internalDFN"><code>ConstrainablePattern</code></a> interface defines an appropriate error to inform the application. <a href="#the-model-sources-sinks-constraints-and-settings" class="sec-ref">§ 5. The model: sources, sinks, constraints, and settings</a> explains how constraints interact in more detail.

For each constrainable property, a constraint exists whose name corresponds with the relevant source setting name and capability name.

A constraint falls into one of three groups, depending on its place in the constraints structure. The groups are:

-   required constraints are all <a href="#dfn-advanced-constraints" id="ref-for-dfn-advanced-constraints-1" class="internalDFN">non-advanced</a> constraints that are <a href="#dfn-required" id="ref-for-dfn-required-1" class="internalDFN">required</a>.
-   optional basic constraints are the remaining <a href="#dfn-advanced-constraints" id="ref-for-dfn-advanced-constraints-2" class="internalDFN">non-advanced</a> constraints.
-   advanced constraints are all constraints specified using the `advanced` keyword.

In general, User Agents will have more flexibility to optimize the media streaming experience the fewer constraints are applied, so application authors are strongly encouraged to use <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-1" class="internalDFN">required constraints</a> sparingly.

4. MediaStream API<a href="#stream-api" class="self-link"></a>
--------------------------------------------------------------

### 4.1 Introduction<a href="#introduction" class="self-link"></a>

The two main components in the MediaStream API are the `MediaStreamTrack` and `MediaStream` interfaces. The <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-1" class="internalDFN"><code>MediaStreamTrack</code></a> object represents media of a single type that originates from one media source in the User Agent, e.g. video produced by a web camera. A <a href="#dom-mediastream" id="ref-for-dom-mediastream-1" class="internalDFN"><code>MediaStream</code></a> is used to group several <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-2" class="internalDFN"><code>MediaStreamTrack</code></a> objects into one unit that can be recorded or rendered in a media element.

Each <a href="#dom-mediastream" id="ref-for-dom-mediastream-2" class="internalDFN"><code>MediaStream</code></a> can contain zero or more <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-3" class="internalDFN"><code>MediaStreamTrack</code></a> objects. All tracks in a <a href="#dom-mediastream" id="ref-for-dom-mediastream-3" class="internalDFN"><code>MediaStream</code></a> are intended to be synchronized when rendered. This is not a hard requirement, since it might not be possible to synchronize tracks from sources that have different clocks. Different <a href="#dom-mediastream" id="ref-for-dom-mediastream-4" class="internalDFN"><code>MediaStream</code></a> objects do not need to be synchronized.

Note

While the intent is to synchronize tracks, it could be better in some circumstances to permit tracks to lose synchronization. In particular, when tracks are remotely sourced and real-time \[<a href="#bib-webrtc" class="bibref" title="WebRTC 1.0: Real-Time Communication Between Browsers">WEBRTC</a>\], it can be better to allow loss of synchronization than to accumulate delays or risk glitches and other artifacts. Implementations are expected to understand the implications of choices regarding synchronization of playback and the effect that these have on user perception.

A single <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-4" class="internalDFN"><code>MediaStreamTrack</code></a> can represent multi-channel content, such as stereo or 5.1 audio or stereoscopic video, where the channels have a well defined relationship to each other. Information about channels might be exposed through other APIs, such as \[<a href="#bib-webaudio" class="bibref" title="Web Audio API">WEBAUDIO</a>\], but this specification provides no direct access to channels.

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-5" class="internalDFN"><code>MediaStream</code></a> object has an input and an output that represent the combined input and output of all the object's tracks. The output of the <a href="#dom-mediastream" id="ref-for-dom-mediastream-6" class="internalDFN"><code>MediaStream</code></a> controls how the object is rendered, e.g., what is saved if the object is recorded to a file or what is displayed if the object is used in a `video` element. A single <a href="#dom-mediastream" id="ref-for-dom-mediastream-7" class="internalDFN"><code>MediaStream</code></a> object can be attached to multiple different outputs at the same time.

A new <a href="#dom-mediastream" id="ref-for-dom-mediastream-8" class="internalDFN"><code>MediaStream</code></a> object can be created from existing media streams or tracks using the <a href="#dom-mediastream" id="ref-for-dom-mediastream-9" class="internalDFN"><code>MediaStream</code></a>`()` constructor. The constructor argument can either be an existing <a href="#dom-mediastream" id="ref-for-dom-mediastream-10" class="internalDFN"><code>MediaStream</code></a> object, in which case all the tracks of the given stream are added to the new <a href="#dom-mediastream" id="ref-for-dom-mediastream-11" class="internalDFN"><code>MediaStream</code></a> object, or an array of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-5" class="internalDFN"><code>MediaStreamTrack</code></a> objects. The latter form makes it possible to compose a stream from different source streams.

Both <a href="#dom-mediastream" id="ref-for-dom-mediastream-12" class="internalDFN"><code>MediaStream</code></a> and <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-6" class="internalDFN"><code>MediaStreamTrack</code></a> objects can be cloned. A cloned <a href="#dom-mediastream" id="ref-for-dom-mediastream-13" class="internalDFN"><code>MediaStream</code></a> contains clones of all member tracks from the original stream. A cloned <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-7" class="internalDFN"><code>MediaStreamTrack</code></a> has a [set of constraints](#constrainable-interface) that is independent of the instance it is cloned from, which allows media from the same source to have different constraints applied for different <a href="#dfn-consumer" id="ref-for-dfn-consumer-1" class="internalDFN">consumer</a>s. The <a href="#dom-mediastream" id="ref-for-dom-mediastream-14" class="internalDFN"><code>MediaStream</code></a> object is also used in contexts outside <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-3" class="internalDFN"><code>getUserMedia</code></a>, such as \[<a href="#bib-webrtc" class="bibref" title="WebRTC 1.0: Real-Time Communication Between Browsers">WEBRTC</a>\].

### 4.2 <a href="#dom-mediastream" id="ref-for-dom-mediastream-15" class="internalDFN"><code>MediaStream</code></a><a href="#mediastream" class="self-link"></a>

The MediaStream `constructor` composes a new stream out of existing tracks. It takes an optional argument of type <a href="#dom-mediastream" id="ref-for-dom-mediastream-16" class="internalDFN"><code>MediaStream</code></a> or an array of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-8" class="internalDFN"><code>MediaStreamTrack</code></a> objects. When the constructor is invoked, the User Agent must run the following steps:

1.  Let stream be a newly constructed <a href="#dom-mediastream" id="ref-for-dom-mediastream-17" class="internalDFN"><code>MediaStream</code></a> object.

2.  Initialize stream.<a href="#dom-mediastream-id" id="ref-for-dom-mediastream-id-1" class="internalDFN"><code>id</code></a> attribute to a newly generated value.

3.  If the constructor's argument is present, run the following steps:

    1.  Construct a set of tracks tracks based on the type of argument:

        -   A <a href="#dom-mediastream" id="ref-for-dom-mediastream-18" class="internalDFN"><code>MediaStream</code></a> object:

            Let tracks be a set containing all the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-9" class="internalDFN"><code>MediaStreamTrack</code></a> objects in the <a href="#dom-mediastream" id="ref-for-dom-mediastream-19" class="internalDFN"><code>MediaStream</code></a> <a href="#track-set" id="ref-for-track-set-1">track set</a>.

        -   A sequence of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-10" class="internalDFN"><code>MediaStreamTrack</code></a> objects:

            Let tracks be a set containing all the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-11" class="internalDFN"><code>MediaStreamTrack</code></a> objects in the provided sequence.

    2.  For each <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-12" class="internalDFN"><code>MediaStreamTrack</code></a>, track , in tracks, run the following steps:

        1.  If track is already in stream's <a href="#track-set" id="ref-for-track-set-2">track set</a>, skip track.

        2.  Otherwise, add track to stream's <a href="#track-set" id="ref-for-track-set-3">track set</a>.

4.  Return stream.

The tracks of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-20" class="internalDFN"><code>MediaStream</code></a> are stored in a track set. The track set *MUST* contain the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-13" class="internalDFN"><code>MediaStreamTrack</code></a> objects that correspond to the tracks of the stream. The relative order of the tracks in the set is User Agent defined and the API will never put any requirements on the order. The proper way to find a specific <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-14" class="internalDFN"><code>MediaStreamTrack</code></a> object in the set is to look it up by its <a href="#dom-mediastreamtrack-id" id="ref-for-dom-mediastreamtrack-id-1" class="internalDFN"><code>id</code></a>.

An object that reads data from the output of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-21" class="internalDFN"><code>MediaStream</code></a> is referred to as a <a href="#dom-mediastream" id="ref-for-dom-mediastream-22" class="internalDFN"><code>MediaStream</code></a> consumer. The list of <a href="#dom-mediastream" id="ref-for-dom-mediastream-23" class="internalDFN"><code>MediaStream</code></a> consumers currently include media elements (such as `video` and `audio`) \[<a href="#bib-html" class="bibref" title="HTML Standard">HTML</a>\], Web Real-Time Communications (WebRTC; [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection)) \[<a href="#bib-webrtc" class="bibref" title="WebRTC 1.0: Real-Time Communication Between Browsers">WEBRTC</a>\], media recording (`MediaRecorder`) \[<a href="#bib-mediastream-recording" class="bibref" title="MediaStream Recording">mediastream-recording</a>\], image capture (`ImageCapture`) \[<a href="#bib-image-capture" class="bibref" title="MediaStream Image Capture">image-capture</a>\], and web audio ([`MediaStreamAudioSourceNode`](https://www.w3.org/TR/webaudio/#mediastreamaudiosourcenode)) \[<a href="#bib-webaudio" class="bibref" title="Web Audio API">WEBAUDIO</a>\].

Note

<a href="#dom-mediastream" id="ref-for-dom-mediastream-24" class="internalDFN"><code>MediaStream</code></a> consumers must be able to handle tracks being added and removed. This behavior is specified per consumer.

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-25" class="internalDFN"><code>MediaStream</code></a> object is said to be active when it has at least one <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-15" class="internalDFN"><code>MediaStreamTrack</code></a> that has not <a href="#track-ended" id="ref-for-track-ended-1" class="internalDFN">ended</a>. A <a href="#dom-mediastream" id="ref-for-dom-mediastream-26" class="internalDFN"><code>MediaStream</code></a> that does not have any tracks or only has tracks that are <a href="#track-ended" id="ref-for-track-ended-2" class="internalDFN">ended</a> is inactive.

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-27" class="internalDFN"><code>MediaStream</code></a> object is said to be audible when it has at least one <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-16" class="internalDFN"><code>MediaStreamTrack</code></a> whose <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-1" class="internalDFN"><code>kind</code></a> is <a href="#dfn-audio" id="ref-for-dfn-audio-1" class="internalDFN"><code>"audio"</code></a> that has not <a href="#track-ended" id="ref-for-track-ended-3" class="internalDFN">ended</a>. A <a href="#dom-mediastream" id="ref-for-dom-mediastream-28" class="internalDFN"><code>MediaStream</code></a> that does not have any audio tracks or only has audio tracks that are <a href="#track-ended" id="ref-for-track-ended-4" class="internalDFN">ended</a> is inaudible.

The User Agent may update a <a href="#dom-mediastream" id="ref-for-dom-mediastream-29" class="internalDFN"><code>MediaStream</code></a>'s <a href="#track-set" id="ref-for-track-set-4">track set</a> in response to, for example, an external event. This specification does not specify any such cases, but other specifications using the MediaStream API may. One such example is the WebRTC 1.0 \[<a href="#bib-webrtc" class="bibref" title="WebRTC 1.0: Real-Time Communication Between Browsers">WEBRTC</a>\] specification where the <a href="#track-set" id="ref-for-track-set-5">track set</a> of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-30" class="internalDFN"><code>MediaStream</code></a>, received from another peer, can be updated as a result of changes to the media session.

To add a track track to a <a href="#dom-mediastream" id="ref-for-dom-mediastream-31" class="internalDFN"><code>MediaStream</code></a> stream, the User Agent *MUST* run the following steps:

1.  If track is already in stream's <a href="#track-set" id="ref-for-track-set-6">track set</a>, then abort these steps.

2.  Add track to stream's <a href="#track-set" id="ref-for-track-set-7">track set</a>.

3.  Fire a track event named <a href="#event-mediastream-addtrack" id="ref-for-event-mediastream-addtrack-1" class="internalDFN"><code>addtrack</code></a> with track at stream.

To remove a track track from a <a href="#dom-mediastream" id="ref-for-dom-mediastream-32" class="internalDFN"><code>MediaStream</code></a> stream, the User Agent *MUST* run the following steps:

1.  If track is not in stream's <a href="#track-set" id="ref-for-track-set-8">track set</a>, then abort these steps.

2.  Remove track from stream's <a href="#track-set" id="ref-for-track-set-9">track set</a>.

3.  Fire a track event named <a href="#event-mediastream-removetrack" id="ref-for-event-mediastream-removetrack-1" class="internalDFN"><code>removetrack</code></a> with track at stream.

    WebIDL[Exposed=Window]
    interface MediaStream : EventTarget {
      constructor();
      constructor(MediaStream stream);
      constructor(sequence<MediaStreamTrack> tracks);
      readonly attribute DOMString id;
      sequence<MediaStreamTrack> getAudioTracks();
      sequence<MediaStreamTrack> getVideoTracks();
      sequence<MediaStreamTrack> getTracks();
      MediaStreamTrack? getTrackById(DOMString trackId);
      undefined addTrack(MediaStreamTrack track);
      undefined removeTrack(MediaStreamTrack track);
      MediaStream clone();
      readonly attribute boolean active;
      attribute EventHandler onaddtrack;
      attribute EventHandler onremovetrack;
    };

#### Constructors<a href="#constructors-0" class="self-link"></a>

<a href="#dom-mediastream" id="ref-for-dom-mediastream-36" class="internalDFN"><code>MediaStream</code></a>  
See the [MediaStream constructor algorithm](#mediastream-constructor)

*No parameters.*

<a href="#dom-mediastream" id="ref-for-dom-mediastream-37" class="internalDFN"><code>MediaStream</code></a>  
See the [MediaStream constructor algorithm](#mediastream-constructor)

<a href="#dom-mediastream" id="ref-for-dom-mediastream-38" class="internalDFN"><code>MediaStream</code></a>  
See the [MediaStream constructor algorithm](#mediastream-constructor)

#### Attributes<a href="#attributes-0" class="self-link"></a>

<a href="#dom-mediastream-id" id="ref-for-dom-mediastream-id-3" class="internalDFN"><code>id</code></a> of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
When a <a href="#dom-mediastream" id="ref-for-dom-mediastream-39" class="internalDFN"><code>MediaStream</code></a> is created, the User Agent *MUST* generate an identifier string, and *MUST* initialize the object's <a href="#dom-mediastream-id" id="ref-for-dom-mediastream-id-4" class="internalDFN"><code>id</code></a> attribute to that string, unless the object is created as part of a special purpose algorithm that specifies how the stream id must be initialized. A good practice is to use a UUID \[<a href="#bib-rfc4122" class="bibref" title="A Universally Unique IDentifier (UUID) URN Namespace">rfc4122</a>\], which is 36 characters long in its canonical form. To avoid fingerprinting, implementations *SHOULD* use the forms in section 4.4 or 4.5 of RFC 4122 when generating UUIDs.

The `id` attribute *MUST* return the value to which it was initialized when the object was created.

`active` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), readonly  
The <a href="#dom-mediastream-active" id="ref-for-dom-mediastream-active-2" class="internalDFN"><code>active</code></a> attribute *MUST* return `true` if this <a href="#dom-mediastream" id="ref-for-dom-mediastream-40" class="internalDFN"><code>MediaStream</code></a> is <a href="#stream-active" id="ref-for-stream-active-1" class="internalDFN">active</a> and `false` otherwise.

`onaddtrack` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#dom-mediastream-addtrack" id="ref-for-dom-mediastream-addtrack-2" class="internalDFN"><code>addtrack</code></a>.

`onremovetrack` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#dom-mediastream-removetrack" id="ref-for-dom-mediastream-removetrack-2" class="internalDFN"><code>removetrack</code></a>.

#### Methods<a href="#methods" class="self-link"></a>

`getAudioTracks`  
Returns a sequence of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-24" class="internalDFN"><code>MediaStreamTrack</code></a> objects representing the audio tracks in this stream.

The <a href="#dom-mediastream-getaudiotracks" id="ref-for-dom-mediastream-getaudiotracks-2" class="internalDFN"><code>getAudioTracks</code></a> method *MUST* return a sequence that represents a snapshot of all the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-25" class="internalDFN"><code>MediaStreamTrack</code></a> objects in this stream's <a href="#track-set" id="ref-for-track-set-10" class="internalDFN">track set</a> whose <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-2" class="internalDFN"><code>kind</code></a> is equal to <a href="#dfn-audio" id="ref-for-dfn-audio-2" class="internalDFN"><code>"audio"</code></a>. The conversion from the <a href="#track-set" id="ref-for-track-set-11" class="internalDFN">track set</a> to the sequence is User Agent defined and the order does not have to be stable between calls.

`getVideoTracks`  
Returns a sequence of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-26" class="internalDFN"><code>MediaStreamTrack</code></a> objects representing the video tracks in this stream.

The <a href="#dom-mediastream-getvideotracks" id="ref-for-dom-mediastream-getvideotracks-2" class="internalDFN"><code>getVideoTracks</code></a> method *MUST* return a sequence that represents a snapshot of all the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-27" class="internalDFN"><code>MediaStreamTrack</code></a> objects in this stream's <a href="#track-set" id="ref-for-track-set-12" class="internalDFN">track set</a> whose <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-3" class="internalDFN"><code>kind</code></a> is equal to <a href="#dfn-video" id="ref-for-dfn-video-1" class="internalDFN"><code>"video"</code></a>. The conversion from the <a href="#track-set" id="ref-for-track-set-13" class="internalDFN">track set</a> to the sequence is User Agent defined and the order does not have to be stable between calls.

`getTracks`  
Returns a sequence of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-28" class="internalDFN"><code>MediaStreamTrack</code></a> objects representing all the tracks in this stream.

The <a href="#dom-mediastream-gettracks" id="ref-for-dom-mediastream-gettracks-2" class="internalDFN"><code>getTracks</code></a> method *MUST* return a sequence that represents a snapshot of all the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-29" class="internalDFN"><code>MediaStreamTrack</code></a> objects in this stream's <a href="#track-set" id="ref-for-track-set-14" class="internalDFN">track set</a>, regardless of <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-4" class="internalDFN"><code>kind</code></a>. The conversion from the <a href="#track-set" id="ref-for-track-set-15" class="internalDFN">track set</a> to the sequence is User Agent defined and the order does not have to be stable between calls.

`getTrackById`  
The <a href="#dom-mediastream-gettrackbyid" id="ref-for-dom-mediastream-gettrackbyid-2" class="internalDFN"><code>getTrackById</code></a> method *MUST* return either a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-30" class="internalDFN"><code>MediaStreamTrack</code></a> object from this stream's <a href="#track-set" id="ref-for-track-set-16" class="internalDFN">track set</a> whose <a href="#dom-mediastreamtrack-id" id="ref-for-dom-mediastreamtrack-id-2" class="internalDFN"><code>id</code></a> is equal to trackId, or `null`, if no such track exists.

`addTrack`  
Adds the given <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-31" class="internalDFN"><code>MediaStreamTrack</code></a> to this <a href="#dom-mediastream" id="ref-for-dom-mediastream-41" class="internalDFN"><code>MediaStream</code></a>.

When the <a href="#dom-mediastream-addtrack" id="ref-for-dom-mediastream-addtrack-3" class="internalDFN"><code>addTrack</code></a> method is invoked, the User Agent *MUST* run the following steps:

1.  Let track be the methods argument and stream the <a href="#dom-mediastream" id="ref-for-dom-mediastream-42" class="internalDFN"><code>MediaStream</code></a> object on which the method was called.

2.  If track is already in stream's <a href="#track-set" id="ref-for-track-set-17" class="internalDFN">track set</a>, then abort these steps.

3.  Add track to stream's <a href="#track-set" id="ref-for-track-set-18" class="internalDFN">track set</a>.

`removeTrack`  
Removes the given <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-32" class="internalDFN"><code>MediaStreamTrack</code></a> object from this <a href="#dom-mediastream" id="ref-for-dom-mediastream-43" class="internalDFN"><code>MediaStream</code></a>.

When the <a href="#dom-mediastream-removetrack" id="ref-for-dom-mediastream-removetrack-3" class="internalDFN"><code>removeTrack</code></a> method is invoked, the User Agent *MUST* run the following steps:

1.  Let track be the methods argument and stream the <a href="#dom-mediastream" id="ref-for-dom-mediastream-44" class="internalDFN"><code>MediaStream</code></a> object on which the method was called.

2.  If track is not in stream's <a href="#track-set" id="ref-for-track-set-19" class="internalDFN">track set</a>, then abort these steps.

3.  Remove track from stream's <a href="#track-set" id="ref-for-track-set-20" class="internalDFN">track set</a>.

`clone`  
Clones the given <a href="#dom-mediastream" id="ref-for-dom-mediastream-45" class="internalDFN"><code>MediaStream</code></a> and all its tracks.

When the <a href="#dom-mediastream-clone" id="ref-for-dom-mediastream-clone-2" class="internalDFN"><code>clone</code></a>`()` method is invoked, the User Agent *MUST* run the following steps:

1.  Let streamClone be a newly constructed <a href="#dom-mediastream" id="ref-for-dom-mediastream-46" class="internalDFN"><code>MediaStream</code></a> object.

2.  Initialize streamClone.<a href="#dom-mediastream" id="ref-for-dom-mediastream-47" class="internalDFN"><code>MediaStream</code></a>.<a href="#dom-mediastream-id" id="ref-for-dom-mediastream-id-5" class="internalDFN"><code>id</code></a> to a newly generated value.

3.  <a href="#track-clone" id="ref-for-track-clone-1">Clone each track</a> in this <a href="#dom-mediastream" id="ref-for-dom-mediastream-48" class="internalDFN"><code>MediaStream</code></a> object and add the result to streamClone's <a href="#track-set" id="ref-for-track-set-21">track set</a>.

4.  Return streamClone.

### 4.3 <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-33" class="internalDFN"><code>MediaStreamTrack</code></a><a href="#mediastreamtrack" class="self-link"></a>

A <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-34" class="internalDFN"><code>MediaStreamTrack</code></a> object represents a media source in the User Agent. An example source is a device connected to the User Agent. Other specifications may define sources for <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-35" class="internalDFN"><code>MediaStreamTrack</code></a> that override the behavior specified here. Several <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-36" class="internalDFN"><code>MediaStreamTrack</code></a> objects can represent the same media source, e.g., when the user chooses the same camera in the UI shown by two consecutive calls to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-4" class="internalDFN"><code>getUserMedia</code></a>`()`.

The data from a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-37" class="internalDFN"><code>MediaStreamTrack</code></a> object does not necessarily have a canonical binary form; for example, it could just be "the video currently coming from the user's video camera". This allows User Agents to manipulate media in whatever fashion is most suitable on the user's platform.

A script can indicate that a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-38" class="internalDFN"><code>MediaStreamTrack</code></a> object no longer needs its source with the <a href="#dom-mediastreamtrack-stop" id="ref-for-dom-mediastreamtrack-stop-1" class="internalDFN"><code>stop</code></a>`()` method. When all tracks using a source have been stopped or ended by some other means, the source is stopped. If the source is a device exposed by <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-5" class="internalDFN"><code>getUserMedia</code></a>`()`, then when the source is stopped, the UA *MUST* run the following steps:

1.  Let deviceId be the device's <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-1" class="internalDFN"><code>deviceId</code></a>.

2.  Set <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-1" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] to `false`.

3.  If the [permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) of the permission associated with the device's kind and deviceId, is not "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)", then set <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-1" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] to `false`.

At creation of any <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-39" class="internalDFN"><code>MediaStreamTrack</code></a>, its underlying source is initialized. To initialize the underlying source of a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-40" class="internalDFN"><code>MediaStreamTrack</code></a> named track to a source named source, with an optional parameter tieSourceToContext, which value is `true` unless specified explicitely, the User Agent *MUST* run the following steps :

1.  Let source be track's underlying source.

2.  If tieSourceToContext is set to `false`, abort these steps.

3.  Let globalObject be track's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).

4.  Add source to globalObject's <a href="#dfn-mediastreamtracksources" id="ref-for-dfn-mediastreamtracksources-1" class="internalDFN"><code>[[mediaStreamTrackSources]]</code></a>.

To stop all sources of a [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object), named globalObject, the User Agent *MUST* run the following steps:

1.  For each <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-41" class="internalDFN"><code>MediaStreamTrack</code></a> object track whose [relevant global object](https://html.spec.whatwg.org/multipage/#concept-relevant-global) is globalObject, set track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-1" class="internalDFN"><code>readyState</code></a> to "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-1" class="internalDFN"><code>ended</code></a>".

2.  For each source in globalObject's <a href="#dfn-mediastreamtracksources" id="ref-for-dfn-mediastreamtracksources-2" class="internalDFN"><code>[[mediaStreamTrackSources]]</code></a>, <a href="#source-stopped" id="ref-for-source-stopped-1" class="internalDFN">stop</a> source.

The User Agent *MUST* <a href="#dfn-stop-all-sources" id="ref-for-dfn-stop-all-sources-1" class="internalDFN">stop all sources</a> of a globalObject in the following conditions:

1.  If globalObject is a [`Window`](https://html.spec.whatwg.org/multipage/window-object.html#window) object and the [unloading document cleanup steps](https://html.spec.whatwg.org/multipage/browsing-the-web.html#unloading-document-cleanup-steps) are executed for its [associated document](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).

2.  If globalObject is a [`WorkerGlobalScope`](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope) object and its [closing](https://html.spec.whatwg.org/multipage/workers.html#dom-workerglobalscope-closing) flag is set to true.

An implementation may use a per-source reference count to keep track of source usage, but the specifics are out of scope for this specification.

To clone a track the User Agent *MUST* run the following steps:

1.  Let track be the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-42" class="internalDFN"><code>MediaStreamTrack</code></a> object to be cloned.

2.  Let trackClone be a newly constructed <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-43" class="internalDFN"><code>MediaStreamTrack</code></a> object.

3.  Initialize trackClone.<a href="#dom-mediastreamtrack-id" id="ref-for-dom-mediastreamtrack-id-3" class="internalDFN"><code>id</code></a> to a newly generated value.

4.  Initialize trackClone's <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-5" class="internalDFN"><code>kind</code></a>, <a href="#dom-mediastreamtrack-label" id="ref-for-dom-mediastreamtrack-label-1" class="internalDFN"><code>label</code></a>, <a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-2" class="internalDFN"><code>readyState</code></a>, and <a href="#dom-mediastreamtrack-enabled" id="ref-for-dom-mediastreamtrack-enabled-1" class="internalDFN"><code>enabled</code></a> attributes by copying the corresponding values from track.

5.  <a href="#dfn-initialize-the-underlying-source" id="ref-for-dfn-initialize-the-underlying-source-1" class="internalDFN">Initialize the underlying source</a> of trackClone to the source of track with <a href="#dfn-tiesourcetocontext" id="ref-for-dfn-tiesourcetocontext-1" class="internalDFN">tieSourceToContext</a> equal to `false`.

6.  Set trackClone's constraints to the active constrains of track.

7.  Return trackClone.

#### 4.3.1 Life-cycle and Media Flow<a href="#life-cycle-and-media-flow" class="self-link"></a>

#### Life-cycle<a href="#life-cycle-and-media-flow" class="self-link"></a>

A <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-44" class="internalDFN"><code>MediaStreamTrack</code></a> has two states in its life-cycle: live and ended. A newly created <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-45" class="internalDFN"><code>MediaStreamTrack</code></a> can be in either state depending on how it was created. For example, cloning an ended track results in a new ended track. The current state is reflected by the object's <a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-3" class="internalDFN"><code>readyState</code></a> attribute.

In the live state, the track is active and media is available for use by consumers (but may be replaced by zero-information-content if the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-46" class="internalDFN"><code>MediaStreamTrack</code></a> is <a href="#track-muted" id="ref-for-track-muted-1" class="internalDFN">muted</a> or <a href="#track-enabled" id="ref-for-track-enabled-1" class="internalDFN">disabled</a>, see below).

A muted or disabled <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-47" class="internalDFN"><code>MediaStreamTrack</code></a> renders either silence (audio), black frames (video), or a zero-information-content equivalent. For example, a video element sourced by a muted or disabled <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-48" class="internalDFN"><code>MediaStreamTrack</code></a> (contained within a <a href="#dom-mediastream" id="ref-for-dom-mediastream-49" class="internalDFN"><code>MediaStream</code></a> ), is playing but the rendered content is the muted output.

If the source is a device exposed by <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-6" class="internalDFN"><code>getUserMedia</code></a>`()`, then when a track becomes either muted or disabled, and this brings all tracks connected to the device to be either muted, disabled, or stopped, then the UA *MAY*, using the device's <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-2" class="internalDFN"><code>deviceId</code></a>, deviceId, set <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-2" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] to `false`, provided the UA sets it back to `true` as soon as any unstopped track connected to this device becomes un-muted or enabled again.

When a "<a href="#idl-def-MediaStreamTrackState.live" id="ref-for-idl-def-MediaStreamTrackState.live-1" class="internalDFN"><code>live</code></a>", <a href="#track-muted" id="ref-for-track-muted-2" class="internalDFN">unmuted</a>, and <a href="#track-enabled" id="ref-for-track-enabled-2" class="internalDFN">enabled</a> track sourced by a device exposed by <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-7" class="internalDFN"><code>getUserMedia</code></a>`()` becomes either \[= track/muted or <a href="#track-enabled" id="ref-for-track-enabled-3" class="internalDFN">disabled</a>, and this brings *all* tracks connected to the device (regardless of browsing context) to be either muted, disabled, or stopped, then the UA *SHOULD* relinquish the device within 3 seconds while allowing time for a reasonably-observant user to become aware of the transition. The UA *SHOULD* attempt to reacquire the device as soon as any live track sourced by the device becomes both <a href="#track-muted" id="ref-for-track-muted-3" class="internalDFN">unmuted</a> and <a href="#track-enabled" id="ref-for-track-enabled-4" class="internalDFN">enabled</a> again, provided that track's [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) [has focus](https://html.spec.whatwg.org/multipage/#gains-focus) at that time. If the document does not [have focus](https://html.spec.whatwg.org/multipage/#gains-focus) at that time, the UA *SHOULD* instead queue a task to <a href="#track-muted" id="ref-for-track-muted-4" class="internalDFN">mute</a> the track, and not queue a task to <a href="#track-muted" id="ref-for-track-muted-5" class="internalDFN">unmute</a> it until the document [regains focus](https://html.spec.whatwg.org/multipage/#gains-focus). If reacquiring the device fails, the UA *MUST* <a href="#ends-nostop" id="ref-for-ends-nostop-1" class="internalDFN">end the track</a> (The UA *MAY* end it earlier should it detect a device problem, like the device being physically removed).

Note

The intent is to give users the assurance of privacy that having physical camera (and microphone) hardware lights off brings, by aligning physical and logical “privacy indicators”, at least while the current document is the sole user of a device.

While other applications and documents using the device simultaneously may interfere with this intent at times, they do not interfere with the rules laid forth.

The muted/unmuted state of a track reflects whether the source provides any media at this moment. The enabled/disabled state is under application control and determines whether the track outputs media (to its consumers). Hence, media from the source only flows when a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-49" class="internalDFN"><code>MediaStreamTrack</code></a> object is both unmuted and enabled.

A <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-50" class="internalDFN"><code>MediaStreamTrack</code></a> is <a href="#track-muted" id="ref-for-track-muted-6" class="internalDFN">muted</a> when the source is temporarily unable to provide the track with data. A track can be muted by a user. Often this action is outside the control of the application. This could be as a result of the user hitting a hardware switch or toggling a control in the operating system / User Agent chrome. A track can also be muted by the User Agent.

Applications are able to <a href="#track-enabled" id="ref-for-track-enabled-5" class="internalDFN">enable</a> or disable a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-51" class="internalDFN"><code>MediaStreamTrack</code></a> to prevent it from rendering media from the source. A muted track will however, regardless of the enabled state, render silence and blackness. A disabled track is logically equivalent to a muted track, from a consumer point of view.

For a newly created <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-52" class="internalDFN"><code>MediaStreamTrack</code></a> object, the following applies. The track is always enabled unless stated otherwise (for example when cloned) and the muted state reflects the state of the source at the time the track is created.

A <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-53" class="internalDFN"><code>MediaStreamTrack</code></a> object is said to *end* when the source of the track is disconnected or exhausted.

If all <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-54" class="internalDFN"><code>MediaStreamTrack</code></a>s that are using the same source are <a href="#track-ended" id="ref-for-track-ended-5" class="internalDFN">ended</a>, the source will be <a href="#source-stopped" id="ref-for-source-stopped-2" class="internalDFN">stopped</a>.

When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-55" class="internalDFN"><code>MediaStreamTrack</code></a> object ends for any reason (e.g., because the user rescinds the permission for the page to use the local camera, or because the application invoked the <a href="#dom-mediastreamtrack-stop" id="ref-for-dom-mediastreamtrack-stop-2" class="internalDFN"><code>stop</code></a>`()` method on the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-56" class="internalDFN"><code>MediaStreamTrack</code></a> object, or because the User Agent has instructed the track to end for any reason) it is said to be ended.

When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-57" class="internalDFN"><code>MediaStreamTrack</code></a> track ends for any reason other than the `stop()` method being invoked, the User Agent *MUST* queue a task that runs the following steps:

1.  If track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-4" class="internalDFN"><code>readyState</code></a> has the value "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-2" class="internalDFN"><code>ended</code></a>" already, then abort these steps.

2.  Set track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-5" class="internalDFN"><code>readyState</code></a> to "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-3" class="internalDFN"><code>ended</code></a>".

3.  Notify track's source that track is <a href="#track-ended" id="ref-for-track-ended-6" class="internalDFN">ended</a> so that the source may be <a href="#source-stopped" id="ref-for-source-stopped-3" class="internalDFN">stopped</a>, unless other <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-58" class="internalDFN"><code>MediaStreamTrack</code></a> objects depend on it.

4.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named <a href="#event-mediastreamtrack-ended" id="ref-for-event-mediastreamtrack-ended-1" class="internalDFN">ended</a> at the object.

If the end of the track was reached due to a user request, the event source for this event is the user interaction event source.

To invoke the device permission revocation algorithm with [`PermissionName`](https://www.w3.org/TR/permissions/#dom-permissionname) permissionName and [`deviceId`](https://www.w3.org/TR/permissions/#dom-devicepermissiondescriptor-deviceid) deviceId, run the following steps:

1.  Let tracks be the set of all currently "<a href="#idl-def-MediaStreamTrackState.live" id="ref-for-idl-def-MediaStreamTrackState.live-2" class="internalDFN"><code>live</code></a>" `MediaStreamTrack`s that fit the following criteria:

    -   If deviceId is not `undefined`, tracks whose associated <a href="#dfn-deviceid" id="ref-for-dfn-deviceid-1" class="internalDFN">deviceId</a> matches deviceId
    -   If deviceId is `undefined`, tracks whose permission associated with this kind of track (e.g. "[`camera`](https://www.w3.org/TR/permissions/#dom-permissionname-camera)", "[`microphone`](https://www.w3.org/TR/permissions/#dom-permissionname-microphone)") matches permissionName

2.  For each track in tracks, <a href="#ends-nostop" id="ref-for-ends-nostop-2">end</a> the track.

#### Media Flow<a href="#life-cycle-and-media-flow" class="self-link"></a>

There are two dimensions related to the media flow for a "<a href="#idl-def-MediaStreamTrackState.live" id="ref-for-idl-def-MediaStreamTrackState.live-3" class="internalDFN"><code>live</code></a>" <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-59" class="internalDFN"><code>MediaStreamTrack</code></a> : muted / not muted, and enabled / disabled.

Muted refers to the input to the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-60" class="internalDFN"><code>MediaStreamTrack</code></a>. If live samples are not made available to the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-61" class="internalDFN"><code>MediaStreamTrack</code></a> it is muted.

Muted is out of control for the application, but can be observed by the application by reading the <a href="#dom-mediastreamtrack-muted" id="ref-for-dom-mediastreamtrack-muted-1" class="internalDFN"><code>muted</code></a> attribute and listening to the associated events <a href="#event-mediastreamtrack-mute" id="ref-for-event-mediastreamtrack-mute-1" class="internalDFN"><code>mute</code></a> and <a href="#event-mediastreamtrack-unmute" id="ref-for-event-mediastreamtrack-unmute-1" class="internalDFN"><code>unmute</code></a>. There can be several reasons for a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-62" class="internalDFN"><code>MediaStreamTrack</code></a> to be muted: the user pushing a physical mute button on the microphone, the user closing a laptop lid with an embedded camera, the user toggling a control in the operating system, the user clicking a mute button in the User Agent chrome, the User Agent (on behalf of the user) mutes, etc.

Whenever the User Agent initiates such a change, it *MUST* queue a task, using the user interaction task source, to <a href="#set-track-muted" id="ref-for-set-track-muted-1" class="internalDFN">set a track's muted state</a> to the state desired by the user.

task, using the user interaction task source, to <a href="#set-track-muted" id="ref-for-set-track-muted-2" class="internalDFN">set a track's muted state</a> to the state desired by the user.

To set a track's muted state to newState, the User Agent *MUST* run the following steps:

1.  Let track be the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-63" class="internalDFN"><code>MediaStreamTrack</code></a> in question.

2.  If track.<a href="#dom-mediastreamtrack-muted" id="ref-for-dom-mediastreamtrack-muted-2" class="internalDFN"><code>muted</code></a> is already newState, then abort these steps.

3.  Set track.<a href="#dom-mediastreamtrack-muted" id="ref-for-dom-mediastreamtrack-muted-3" class="internalDFN"><code>muted</code></a> to newState.

4.  If newState is `true` let eventName be <a href="#event-mediastreamtrack-mute" id="ref-for-event-mediastreamtrack-mute-2" class="internalDFN"><code>mute</code></a>, otherwise <a href="#event-mediastreamtrack-unmute" id="ref-for-event-mediastreamtrack-unmute-2" class="internalDFN"><code>unmute</code></a>.

5.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named eventName on track.

Enabled/disabled on the other hand is available to the application to control (and observe) via the <a href="#dom-mediastreamtrack-enabled" id="ref-for-dom-mediastreamtrack-enabled-2" class="internalDFN"><code>enabled</code></a> attribute.

The result for the consumer is the same in the sense that whenever <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-64" class="internalDFN"><code>MediaStreamTrack</code></a> is muted or disabled (or both) the consumer gets zero-information-content, which means silence for audio and black frames for video. In other words, media from the source only flows when a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-65" class="internalDFN"><code>MediaStreamTrack</code></a> object is both unmuted and enabled. For example, a video element sourced by a muted or disabled <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-66" class="internalDFN"><code>MediaStreamTrack</code></a> (contained in a <a href="#dom-mediastream" id="ref-for-dom-mediastream-50" class="internalDFN"><code>MediaStream</code></a> ), is playing but rendering blackness.

For a newly created <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-67" class="internalDFN"><code>MediaStreamTrack</code></a> object, the following applies: the track is always enabled unless stated otherwise (for example when cloned) and the muted state reflects the state of the source at the time the track is created.

#### 4.3.2 Tracks and Constraints<a href="#tracks-and-constraints" class="self-link"></a>

<a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-68" class="internalDFN"><code>MediaStreamTrack</code></a> is a <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-1" class="internalDFN">constrainable object</a> as defined in the [Constrainable Pattern](#constrainable-interface) section. Constraints are set on tracks and may affect sources.

Whether `Constraints` were provided at track initialization time or need to be established later at runtime, the APIs defined in the <a href="#dom-constrainablepattern" id="ref-for-dom-constrainablepattern-5" class="internalDFN"><code>ConstrainablePattern</code></a> Interface allow the retrieval and manipulation of the constraints currently established on a track.

Once ended, a track will continue exposing a list of inherent constrainable track properties. This list contains `deviceId`, `facingMode` and `groupId`.

#### 4.3.3 Interface Definition<a href="#media-stream-track-interface-definition" class="self-link"></a>

    WebIDL[Exposed=Window]
    interface MediaStreamTrack : EventTarget {
      readonly attribute DOMString kind;
      readonly attribute DOMString id;
      readonly attribute DOMString label;
      attribute boolean enabled;
      readonly attribute boolean muted;
      attribute EventHandler onmute;
      attribute EventHandler onunmute;
      readonly attribute MediaStreamTrackState readyState;
      attribute EventHandler onended;
      MediaStreamTrack clone();
      undefined stop();
      MediaTrackCapabilities getCapabilities();
      MediaTrackConstraints getConstraints();
      MediaTrackSettings getSettings();
      Promise<undefined> applyConstraints(optional MediaTrackConstraints constraints = {});
    };

##### Attributes<a href="#attributes-1" class="self-link"></a>

<a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-7" class="internalDFN"><code>kind</code></a> of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
The `kind` attribute *MUST* return the string `"audio"` if this object represents an audio track or `"video"` if this object represents a video track.

<a href="#dom-mediastreamtrack-id" id="ref-for-dom-mediastreamtrack-id-5" class="internalDFN"><code>id</code></a> of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-71" class="internalDFN"><code>MediaStreamTrack</code></a> is created, the User Agent *MUST* generate an identifier string, and *MUST* initialize the object's <a href="#dom-mediastreamtrack-id" id="ref-for-dom-mediastreamtrack-id-6" class="internalDFN"><code>id</code></a> attribute to that string, unless the object is created as part of a special purpose algorithm that specifies how the stream id must be initialized. See <a href="#dom-mediastream" id="ref-for-dom-mediastream-51" class="internalDFN"><code>MediaStream</code></a>.<a href="#dom-mediastream-id" id="ref-for-dom-mediastream-id-6" class="internalDFN"><code>id</code></a> attribute for guidelines on how to generate such an identifier.

An example of an algorithm that specifies how the track id must be initialized is the algorithm to represent an incoming network component with a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-72" class="internalDFN"><code>MediaStreamTrack</code></a> object. \[<a href="#bib-webrtc" class="bibref" title="WebRTC 1.0: Real-Time Communication Between Browsers">WEBRTC</a>\]

`id` attribute *MUST* return the value to which it was initialized when the object was created.

<a href="#dom-mediastreamtrack-label" id="ref-for-dom-mediastreamtrack-label-3" class="internalDFN"><code>label</code></a> of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
User Agents *MAY* label audio and video sources (e.g., "Internal microphone" or "External USB Webcam"). The `label` attribute *MUST* return the label of the object's corresponding source, if any. If the corresponding source has or had no label, the attribute *MUST* instead return the empty string.

<a href="#dom-mediastreamtrack-enabled" id="ref-for-dom-mediastreamtrack-enabled-4" class="internalDFN"><code>enabled</code></a> of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
The `enabled` attribute controls the <a href="#track-enabled" id="ref-for-track-enabled-6" class="internalDFN">enabled</a> state for the object.

On getting, the attribute *MUST* return the value to which it was last set. On setting, it *MUST* be set to the new value.

Note

Thus, after a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-73" class="internalDFN"><code>MediaStreamTrack</code></a> has <a href="#track-ended" id="ref-for-track-ended-7" class="internalDFN">ended</a>, its <a href="#track-enabled" id="ref-for-track-enabled-7" class="internalDFN"><code>enabled</code></a> attribute still changes value when set; it just doesn't do anything with that new value.

<a href="#dom-mediastreamtrack-muted" id="ref-for-dom-mediastreamtrack-muted-5" class="internalDFN"><code>muted</code></a> of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), readonly  
The `muted` attribute *MUST* return `true` if the track is <a href="#track-muted" id="ref-for-track-muted-7" class="internalDFN">muted</a>, and `false` otherwise.

`onmute` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#event-mediastreamtrack-mute" id="ref-for-event-mediastreamtrack-mute-3" class="internalDFN">mute</a>.

`onunmute` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#event-mediastreamtrack-unmute" id="ref-for-event-mediastreamtrack-unmute-3" class="internalDFN">unmute</a>.

<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-7" class="internalDFN"><code>readyState</code></a> of type <a href="#dom-mediastreamtrackstate" id="ref-for-dom-mediastreamtrackstate-2" class="internalDFN"><code>MediaStreamTrackState</code></a>, readonly  
The `readyState` attribute represents the state of the track. It *MUST* return the value as most recently set by the User Agent.

`onended` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#event-mediastreamtrack-ended" id="ref-for-event-mediastreamtrack-ended-2" class="internalDFN">ended</a>.

##### Methods<a href="#methods-0" class="self-link"></a>

`clone`  
Clones this <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-74" class="internalDFN"><code>MediaStreamTrack</code></a>.

When the <a href="#dom-mediastreamtrack-clone" id="ref-for-dom-mediastreamtrack-clone-2" class="internalDFN"><code>clone</code></a>`()` method is invoked, the User Agent *MUST* return the result of <a href="#track-clone" id="ref-for-track-clone-2" class="internalDFN">cloning this track</a>.

<a href="#dom-mediastreamtrack-stop" id="ref-for-dom-mediastreamtrack-stop-4" class="internalDFN"><code>stop</code></a>  
When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-75" class="internalDFN"><code>MediaStreamTrack</code></a> object's `stop()` method is invoked, the User Agent *MUST* run following steps:

1.  Let track be the current <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-76" class="internalDFN"><code>MediaStreamTrack</code></a> object.

2.  If track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-8" class="internalDFN"><code>readyState</code></a> is "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-4" class="internalDFN"><code>ended</code></a>", then abort these steps.

3.  Notify track's source that track is <a href="#track-ended" id="ref-for-track-ended-8" class="internalDFN">ended</a>.

    A source that is notified of a track ending will be <a href="#source-stopped" id="ref-for-source-stopped-4" class="internalDFN">stopped</a>, unless other <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-77" class="internalDFN"><code>MediaStreamTrack</code></a> objects depend on it.

4.  Set track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-9" class="internalDFN"><code>readyState</code></a> to "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-5" class="internalDFN"><code>ended</code></a>".

`getCapabilities`  
Returns the capabilites of the source that this <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-78" class="internalDFN"><code>MediaStreamTrack</code></a>, the <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-2" class="internalDFN">constrainable object</a>, represents.

See [ConstrainablePattern Interface](#constrainable-interface) for the definition of this method.

Since this method gives likely persistent, cross-origin information about the underlying device, it adds to the fingerprint surface of the device.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

`getConstraints`  
See [ConstrainablePattern Interface](#constrainable-interface) for the definition of this method.

`getSettings`  
When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-79" class="internalDFN"><code>MediaStreamTrack</code></a> object's <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-80" class="internalDFN"><code>MediaStreamTrack</code></a>.<a href="#dom-mediastreamtrack-getsettings" id="ref-for-dom-mediastreamtrack-getsettings-2" class="internalDFN"><code>getSettings</code></a>`()` method is invoked, the User Agent *MUST* run following steps:

1.  Let track be the current <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-81" class="internalDFN"><code>MediaStreamTrack</code></a> object.

2.  If track.<a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-82" class="internalDFN"><code>MediaStreamTrack</code></a>.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-10" class="internalDFN"><code>readyState</code></a> is "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-6" class="internalDFN"><code>ended</code></a>", run the following sub steps:

    1.  Let settings be a new <a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-2" class="internalDFN"><code>MediaTrackSettings</code></a> dictionary.

    2.  For each property of the <a href="#list-of-inherent-constrainable-track-properties" id="ref-for-list-of-inherent-constrainable-track-properties-1" class="internalDFN">list of inherent constrainable track properties</a>, add a corresponding property to settings if track had such property at the time it was ended, with the value at the time track was ended.

    3.  Return settings.

3.  Return the current settings of the track as defined in [ConstrainablePattern Interface](#constrainable-interface).

`applyConstraints`  
When a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-83" class="internalDFN"><code>MediaStreamTrack</code></a> object's <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-2" class="internalDFN"><code>applyConstraints</code></a>`()` method is invoked, the User Agent *MUST* run following steps:

1.  Let track be the current <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-84" class="internalDFN"><code>MediaStreamTrack</code></a> object.

2.  If track.<a href="#dom-mediastreamtrack-readystate" id="ref-for-dom-mediastreamtrack-readystate-11" class="internalDFN"><code>readyState</code></a> is "<a href="#idl-def-MediaStreamTrackState.ended" id="ref-for-idl-def-MediaStreamTrackState.ended-7" class="internalDFN"><code>ended</code></a>", run the following sub steps:

    1.  Let p be a new promise.

    2.  [resolve](https://webidl.spec.whatwg.org/#resolve) p with `undefined`.

    3.  Return p.

3.  Invoke and return the result of the <a href="#dfn-applyconstraints-template-method" id="ref-for-dfn-applyconstraints-template-method-1" class="internalDFN">applyConstraints template method</a> where:

    -   In the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-1" class="internalDFN">SelectSettings</a> algorithm,
        -   object is the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-85" class="internalDFN"><code>MediaStreamTrack</code></a> on which this method was called, and
        -   <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-1" class="internalDFN">settings dictionary</a> refers to a possible instance of the <a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-3" class="internalDFN"><code>MediaTrackSettings</code></a> dictionary. The User Agent *MUST NOT* include inherent unchangeable device properties as members unless they are in the <a href="#list-of-inherent-constrainable-track-properties" id="ref-for-list-of-inherent-constrainable-track-properties-2" class="internalDFN">list of inherent constrainable track properties</a>, or otherwise include device properties that must not be exposed.
            Note

            Other specifications may define constrainable properties that at times <a href="#dfn-must-not-be-exposed" id="ref-for-dfn-must-not-be-exposed-1" class="internalDFN">must not be exposed</a>.
    -   In step 3 of the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-1" class="internalDFN">ApplyConstraints algorithm</a>, all changes listed are to be made to object, and
    -   In step 4 of the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-2" class="internalDFN">ApplyConstraints algorithm</a>, the requirement on getConstraints() applies to the getConstraints() method of object.

    WebIDLenum MediaStreamTrackState {
      "live",
      "ended"
    };

`MediaStreamTrackState` Enumeration description

`live`

The track is active (the track's underlying media source is making a best-effort attempt to provide data in real time).

The output of a track in the "<a href="#idl-def-MediaStreamTrackState.live" id="ref-for-idl-def-MediaStreamTrackState.live-5" class="internalDFN"><code>live</code></a>" state can be switched on and off with the <a href="#dom-mediastreamtrack-enabled" id="ref-for-dom-mediastreamtrack-enabled-5" class="internalDFN"><code>enabled</code></a> attribute.

`ended`

The track has <a href="#track-ended" id="ref-for-track-ended-9" class="internalDFN">ended</a> (the track's underlying media source is no longer providing data, and will never provide more data for this track). Once a track enters this state, it never exits it.

For example, a video track in a <a href="#dom-mediastream" id="ref-for-dom-mediastream-52" class="internalDFN"><code>MediaStream</code></a> ends when the user unplugs the USB web camera that acts as the track's media source.

#### 4.3.4 `MediaTrackSupportedConstraints`<a href="#media-track-supported-constraints" class="self-link"></a>

<a href="#dom-mediatracksupportedconstraints" id="ref-for-dom-mediatracksupportedconstraints-1" class="internalDFN"><code>MediaTrackSupportedConstraints</code></a> represents the list of constraints recognized by a User Agent for controlling the <a href="#dfn-capabilities" id="ref-for-dfn-capabilities-2" class="internalDFN">Capabilities</a> of a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-86" class="internalDFN"><code>MediaStreamTrack</code></a> object. This dictionary is used as a function return value, and never as an operation argument.

Future specifications can extend the <a href="#dom-mediatracksupportedconstraints" id="ref-for-dom-mediatracksupportedconstraints-2" class="internalDFN"><code>MediaTrackSupportedConstraints</code></a> dictionary by defining a partial dictionary with dictionary members of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean).

Note

The constraints specified in this specification apply only to instances of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-87" class="internalDFN"><code>MediaStreamTrack</code></a> generated by <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-1" class="internalDFN"><code>MediaDevices</code></a>.<a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-8" class="internalDFN"><code>getUserMedia</code></a>`()`, unless stated otherwise in other specifications.

    WebIDLdictionary MediaTrackSupportedConstraints {
      boolean width = true;
      boolean height = true;
      boolean aspectRatio = true;
      boolean frameRate = true;
      boolean facingMode = true;
      boolean resizeMode = true;
      boolean sampleRate = true;
      boolean sampleSize = true;
      boolean echoCancellation = true;
      boolean autoGainControl = true;
      boolean noiseSuppression = true;
      boolean latency = true;
      boolean channelCount = true;
      boolean deviceId = true;
      boolean groupId = true;
    };

##### Dictionary <a href="#dom-mediatracksupportedconstraints" id="ref-for-dom-mediatracksupportedconstraints-4" class="internalDFN"><code>MediaTrackSupportedConstraints</code></a> Members<a href="#dictionary-mediatracksupportedconstraints-members" class="self-link"></a>

`width` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [width](#def-constraint-width) for details.

`height` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [height](#def-constraint-height) for details.

`aspectRatio` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [aspectRatio](#def-constraint-aspect) for details.

`frameRate` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [frameRate](#def-constraint-frameRate) for details.

`facingMode` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [facingMode](#def-constraint-facingMode) for details.

`resizeMode` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [resizeMode](#def-constraint-resizeMode) for details.

`sampleRate` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [sampleRate](#def-constraint-sampleRate) for details.

`sampleSize` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [sampleSize](#def-constraint-sampleSize) for details.

`echoCancellation` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [echoCancellation](#def-constraint-echoCancellation) for details.

`autoGainControl` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [autoGainControl](#def-constraint-autoGainControl) for details.

`noiseSuppression` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [noiseSuppression](#def-constraint-noiseSuppression) for details.

`latency` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [latency](#def-constraint-latency) for details.

`channelCount` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [channelCount](#def-constraint-channelCount) for details.

`deviceId` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [deviceId](#def-constraint-deviceId) for details.

`groupId` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean), defaulting to `true`  
See [groupId](#def-constraint-groupId) for details.

#### 4.3.5 `MediaTrackCapabilities`<a href="#media-track-capabilities" class="self-link"></a>

<a href="#dom-mediatrackcapabilities" id="ref-for-dom-mediatrackcapabilities-2" class="internalDFN"><code>MediaTrackCapabilities</code></a> represents the <a href="#dfn-capabilities" id="ref-for-dfn-capabilities-3" class="internalDFN">Capabilities</a> of a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-88" class="internalDFN"><code>MediaStreamTrack</code></a> object.

Future specifications can extend the MediaTrackCapabilities dictionary by defining a partial dictionary with dictionary members of appropriate type.

    WebIDLdictionary MediaTrackCapabilities {
      ULongRange width;
      ULongRange height;
      DoubleRange aspectRatio;
      DoubleRange frameRate;
      sequence<DOMString> facingMode;
      sequence<DOMString> resizeMode;
      ULongRange sampleRate;
      ULongRange sampleSize;
      sequence<boolean> echoCancellation;
      sequence<boolean> autoGainControl;
      sequence<boolean> noiseSuppression;
      DoubleRange latency;
      ULongRange channelCount;
      DOMString deviceId;
      DOMString groupId;
    };

##### Dictionary <a href="#dom-mediatrackcapabilities" id="ref-for-dom-mediatrackcapabilities-4" class="internalDFN"><code>MediaTrackCapabilities</code></a> Members<a href="#dictionary-mediatrackcapabilities-members" class="self-link"></a>

`width` of type <a href="#dom-ulongrange" id="ref-for-dom-ulongrange-6" class="internalDFN"><code>ULongRange</code></a>  
See [width](#def-constraint-width) for details.

`height` of type <a href="#dom-ulongrange" id="ref-for-dom-ulongrange-7" class="internalDFN"><code>ULongRange</code></a>  
See [height](#def-constraint-height) for details.

`aspectRatio` of type <a href="#dom-doublerange" id="ref-for-dom-doublerange-4" class="internalDFN"><code>DoubleRange</code></a>  
See [aspectRatio](#def-constraint-aspect) for details.

`frameRate` of type <a href="#dom-doublerange" id="ref-for-dom-doublerange-5" class="internalDFN"><code>DoubleRange</code></a>  
See [frameRate](#def-constraint-frameRate) for details.

`facingMode` of type `sequence<DOMString`&gt;  
A camera can report multiple facing modes. For example, in a high-end telepresence solution with several cameras facing the user, a camera to the left of the user can report both "<a href="#dom-videofacingmodeenum-left" id="ref-for-dom-videofacingmodeenum-left-1" class="internalDFN"><code>left</code></a>" and "<a href="#dom-videofacingmodeenum-user" id="ref-for-dom-videofacingmodeenum-user-1" class="internalDFN"><code>user</code></a>". See [facingMode](#def-constraint-facingMode) for additional details.

`resizeMode` of type `sequence<DOMString`&gt;  
The User Agent *MAY* use cropping and downscaling to offer more resolution choices than this camera naturally produces. The reported sequence *MUST* list all the means the UA may employ to derive resolution choices for this camera. The value "<a href="#idl-def-VideoResizeModeEnum.user" id="ref-for-idl-def-VideoResizeModeEnum.user-1" class="internalDFN"><code>none</code></a>" *MUST* be present, indicating the ability to constrain the UA from cropping and downscaling. See [resizeMode](#def-constraint-resizeMode) for additional details.

`sampleRate` of type <a href="#dom-ulongrange" id="ref-for-dom-ulongrange-8" class="internalDFN"><code>ULongRange</code></a>  
See [sampleRate](#def-constraint-sampleRate) for details.

`sampleSize` of type <a href="#dom-ulongrange" id="ref-for-dom-ulongrange-9" class="internalDFN"><code>ULongRange</code></a>  
See [sampleSize](#def-constraint-sampleSize) for details.

`echoCancellation` of type `sequence<boolean`&gt;  
If the source cannot do echo cancellation a single `false` is reported. If echo cancellation cannot be turned off, a single `true` is reported. If the script can control the feature, the source reports a list with both `true` and `false` as possible values. See [echoCancellation](#def-constraint-echoCancellation) for additional details.

`autoGainControl` of type `sequence<boolean`&gt;  
If the source cannot do auto gain control a single `false` is reported. If auto gain control cannot be turned off, a single `true` is reported. If the script can control the feature, the source reports a list with both `true` and `false` as possible values. See [autoGainControl](#def-constraint-autoGainControl) for additional details.

`noiseSuppression` of type `sequence<boolean`&gt;  
If the source cannot do noise suppression a single `false` is reported. If noise suppression cannot be turned off, a single `true` is reported. If the script can control the feature, the source reports a list with both `true` and `false` as possible values. See [noiseSuppression](#def-constraint-noiseSuppression) for additional details.

`latency` of type <a href="#dom-doublerange" id="ref-for-dom-doublerange-6" class="internalDFN"><code>DoubleRange</code></a>  
See [latency](#def-constraint-latency) for details.

`channelCount` of type <a href="#dom-ulongrange" id="ref-for-dom-ulongrange-10" class="internalDFN"><code>ULongRange</code></a>  
See [channelCount](#def-constraint-channelCount) for details.

`deviceId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [deviceId](#def-constraint-deviceId) for details.

`groupId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [groupId](#def-constraint-groupId) for details.

#### 4.3.6 `MediaTrackConstraints`<a href="#media-track-constraints" class="self-link"></a>

    WebIDLdictionary MediaTrackConstraints : MediaTrackConstraintSet {
      sequence<MediaTrackConstraintSet> advanced;
    };

##### Dictionary <a href="#dom-mediatrackconstraints" id="ref-for-dom-mediatrackconstraints-4" class="internalDFN"><code>MediaTrackConstraints</code></a> Members<a href="#dictionary-mediatrackconstraints-members" class="self-link"></a>

`advanced` of type `sequence<MediaTrackConstraintSet`&gt;  
See [Constraints and ConstraintSet](#constraints) for the definition of this element.

Future specifications can extend the `MediaTrackConstraintSet` dictionary by defining a partial dictionary with dictionary members of appropriate type.

    WebIDLdictionary MediaTrackConstraintSet {
      ConstrainULong width;
      ConstrainULong height;
      ConstrainDouble aspectRatio;
      ConstrainDouble frameRate;
      ConstrainDOMString facingMode;
      ConstrainDOMString resizeMode;
      ConstrainULong sampleRate;
      ConstrainULong sampleSize;
      ConstrainBoolean echoCancellation;
      ConstrainBoolean autoGainControl;
      ConstrainBoolean noiseSuppression;
      ConstrainDouble latency;
      ConstrainULong channelCount;
      ConstrainDOMString deviceId;
      ConstrainDOMString groupId;
    };

##### Dictionary <a href="#dom-mediatrackconstraintset" id="ref-for-dom-mediatrackconstraintset-5" class="internalDFN"><code>MediaTrackConstraintSet</code></a> Members<a href="#dictionary-mediatrackconstraintset-members" class="self-link"></a>

`width` of type <a href="#dom-constrainulong" id="ref-for-dom-constrainulong-6" class="internalDFN"><code>ConstrainULong</code></a>  
See [width](#def-constraint-width) for details.

`height` of type <a href="#dom-constrainulong" id="ref-for-dom-constrainulong-7" class="internalDFN"><code>ConstrainULong</code></a>  
See [height](#def-constraint-height) for details.

`aspectRatio` of type <a href="#dom-constraindouble" id="ref-for-dom-constraindouble-4" class="internalDFN"><code>ConstrainDouble</code></a>  
See [aspectRatio](#def-constraint-aspect) for details.

`frameRate` of type <a href="#dom-constraindouble" id="ref-for-dom-constraindouble-5" class="internalDFN"><code>ConstrainDouble</code></a>  
See [frameRate](#def-constraint-frameRate) for details.

`facingMode` of type <a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-5" class="internalDFN"><code>ConstrainDOMString</code></a>  
See [facingMode](#def-constraint-facingMode) for details.

`resizeMode` of type <a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-6" class="internalDFN"><code>ConstrainDOMString</code></a>  
See [resizeMode](#def-constraint-resizeMode) for details.

`sampleRate` of type <a href="#dom-constrainulong" id="ref-for-dom-constrainulong-8" class="internalDFN"><code>ConstrainULong</code></a>  
See [sampleRate](#def-constraint-sampleRate) for details.

`sampleSize` of type <a href="#dom-constrainulong" id="ref-for-dom-constrainulong-9" class="internalDFN"><code>ConstrainULong</code></a>  
See [sampleSize](#def-constraint-sampleSize) for details.

`echoCancellation` of type <a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-4" class="internalDFN"><code>ConstrainBoolean</code></a>  
See [echoCancellation](#def-constraint-echoCancellation) for details.

`autoGainControl` of type <a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-5" class="internalDFN"><code>ConstrainBoolean</code></a>  
See [autoGainControl](#def-constraint-autoGainControl) for details.

`noiseSuppression` of type <a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-6" class="internalDFN"><code>ConstrainBoolean</code></a>  
See [noiseSuppression](#def-constraint-noiseSuppression) for details.

`latency` of type <a href="#dom-constraindouble" id="ref-for-dom-constraindouble-6" class="internalDFN"><code>ConstrainDouble</code></a>  
See [latency](#def-constraint-latency) for details.

`channelCount` of type <a href="#dom-constrainulong" id="ref-for-dom-constrainulong-10" class="internalDFN"><code>ConstrainULong</code></a>  
See [channelCount](#def-constraint-channelCount) for details.

`deviceId` of type <a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-7" class="internalDFN"><code>ConstrainDOMString</code></a>  
See [deviceId](#def-constraint-deviceId) for details.

`groupId` of type <a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-8" class="internalDFN"><code>ConstrainDOMString</code></a>  
See [groupId](#def-constraint-groupId) for details.

#### 4.3.7 `MediaTrackSettings`<a href="#media-track-settings" class="self-link"></a>

<a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-4" class="internalDFN"><code>MediaTrackSettings</code></a> represents the <a href="#dfn-settings" id="ref-for-dfn-settings-2" class="internalDFN">Settings</a> of a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-89" class="internalDFN"><code>MediaStreamTrack</code></a> object.

Future specifications can extend the MediaTrackSettings dictionary by defining a partial dictionary with dictionary members of appropriate type.

    WebIDLdictionary MediaTrackSettings {
      long width;
      long height;
      double aspectRatio;
      double frameRate;
      DOMString facingMode;
      DOMString resizeMode;
      long sampleRate;
      long sampleSize;
      boolean echoCancellation;
      boolean autoGainControl;
      boolean noiseSuppression;
      double latency;
      long channelCount;
      DOMString deviceId;
      DOMString groupId;
    };

##### Dictionary <a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-6" class="internalDFN"><code>MediaTrackSettings</code></a> Members<a href="#dictionary-mediatracksettings-members" class="self-link"></a>

`width` of type [`long`](https://webidl.spec.whatwg.org/#idl-long)  
See [width](#def-constraint-width) for details.

`height` of type [`long`](https://webidl.spec.whatwg.org/#idl-long)  
See [height](#def-constraint-height) for details.

`aspectRatio` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
See [aspectRatio](#def-constraint-aspect) for details.

`frameRate` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
See [frameRate](#def-constraint-frameRate) for details.

`facingMode` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [facingMode](#def-constraint-facingMode) for details.

`resizeMode` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [resizeMode](#def-constraint-resizeMode) for details.

`sampleRate` of type [`long`](https://webidl.spec.whatwg.org/#idl-long)  
See [sampleRate](#def-constraint-sampleRate) for details.

`sampleSize` of type [`long`](https://webidl.spec.whatwg.org/#idl-long)  
See [sampleSize](#def-constraint-sampleSize) for details.

`echoCancellation` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
See [echoCancellation](#def-constraint-echoCancellation) for details.

`autoGainControl` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
See [autoGainControl](#def-constraint-autoGainControl) for details.

`noiseSuppression` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
See [noiseSuppression](#def-constraint-noiseSuppression) for details.

`latency` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
See [latency](#def-constraint-latency) for details.

`channelCount` of type [`long`](https://webidl.spec.whatwg.org/#idl-long)  
See [channelCount](#def-constraint-channelCount) for details.

`deviceId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [deviceId](#def-constraint-deviceId) for details.

`groupId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)  
See [groupId](#def-constraint-groupId) for details.

#### 4.3.8 Constrainable Properties<a href="#constrainable-properties" class="self-link"></a>

The names of the initial set of constrainable properties for MediaStreamTrack are defined below.

The following constrainable properties are defined to apply to both video and audio <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-90" class="internalDFN"><code>MediaStreamTrack</code></a> objects:

<table><thead><tr class="header"><th>Property Name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>deviceId</td><td>DOMString</td><td>The identifier of the device generating the content of the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-91" class="internalDFN"><code>MediaStreamTrack</code></a>. It conforms with the definition of <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-1" class="internalDFN"><code>MediaDeviceInfo</code></a>.<a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-3" class="internalDFN"><code>deviceId</code></a>. Note that the setting of this property is uniquely determined by the source that is attached to the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-92" class="internalDFN"><code>MediaStreamTrack</code></a>. In particular, <a href="#dom-mediastreamtrack-getcapabilities" id="ref-for-dom-mediastreamtrack-getcapabilities-3" class="internalDFN"><code>getCapabilities</code></a><code>()</code> will return only a single value for deviceId. This property can therefore be used for initial media selection with <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-9" class="internalDFN"><code>getUserMedia</code></a><code>()</code>. However, it is not useful for subsequent media control with <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-3" class="internalDFN"><code>applyConstraints</code></a><code>()</code>, since any attempt to set a different value will result in an unsatisfiable <a href="#dom-constraintset" id="ref-for-dom-constraintset-1" class="internalDFN"><code>ConstraintSet</code></a>. If a string of length 0 is used as a deviceId value constraint with <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-10" class="internalDFN"><code>getUserMedia</code></a><code>()</code>, it <em>MAY</em> be interpreted as if the constraint is not specified.</td></tr><tr class="even"><td>groupId</td><td><a href="https://webidl.spec.whatwg.org/#idl-DOMString"><code>DOMString</code></a></td><td>The <a href="https://dom.spec.whatwg.org/#concept-document">document</a>-unique group identifier for the device generating the content of the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-93" class="internalDFN"><code>MediaStreamTrack</code></a>. It conforms with the definition of <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-2" class="internalDFN"><code>MediaDeviceInfo</code></a>.<a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-1" class="internalDFN"><code>groupId</code></a>. Note that the setting of this property is uniquely determined by the source that is attached to the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-94" class="internalDFN"><code>MediaStreamTrack</code></a>. In particular, <a href="#dom-mediastreamtrack-getcapabilities" id="ref-for-dom-mediastreamtrack-getcapabilities-4" class="internalDFN"><code>getCapabilities</code></a><code>()</code> will return only a single value for groupId. Since this property is not stable between browsing sessions, its usefulness for initial media selection with <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-11" class="internalDFN"><code>getUserMedia</code></a><code>()</code> is limited. It is not useful for subsequent media control with <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-4" class="internalDFN"><code>applyConstraints</code></a><code>()</code>, since any attempt to set a different value will result in an unsatisfiable <a href="#dom-constraintset" id="ref-for-dom-constraintset-2" class="internalDFN"><code>ConstraintSet</code></a>.</td></tr></tbody></table>

The following constrainable properties are defined to apply only to video <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-95" class="internalDFN"><code>MediaStreamTrack</code></a> objects:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property Name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>width</td><td><a href="#dom-constrainulong" id="ref-for-dom-constrainulong-11" class="internalDFN"><code>ConstrainULong</code></a></td><td>The width or width range, in pixels. As a capability, the range should span the video source's pre-set width values with min being equal to 1 and max being the largest width. The User Agent <em>MUST</em> support downsampling to any value between the min width range value and the native resolution width.</td></tr><tr class="even"><td>height</td><td><a href="#dom-constrainulong" id="ref-for-dom-constrainulong-12" class="internalDFN"><code>ConstrainULong</code></a></td><td>The height or height range, in pixels. As a capability, the range should span the video source's pre-set height values with min being equal to 1 and max being the largest height. The User Agent <em>MUST</em> support downsampling to any value between the min height range value and the native resolution height.</td></tr><tr class="odd"><td>frameRate</td><td><a href="#dom-constraindouble" id="ref-for-dom-constraindouble-7" class="internalDFN"><code>ConstrainDouble</code></a></td><td>The exact frame rate (frames per second) or frame rate range. If video source's pre-set can determine frame rate values, the range, as a capacity, should span the video source's pre-set frame rate values with min being equal to 0 and max being the largest frame rate. The User Agent <em>MUST</em> support frame rates obtained from integral decimation of the native resolution frame rate. If this frame rate cannot be determined (e.g. the source does not natively provide a frame rate, or the frame rate cannot be determined from the source stream), then this value <em>MUST</em> refer to the User Agent's vsync display rate.</td></tr><tr class="even"><td>aspectRatio</td><td><a href="#dom-constraindouble" id="ref-for-dom-constraindouble-8" class="internalDFN"><code>ConstrainDouble</code></a></td><td>The exact aspect ratio (width in pixels divided by height in pixels, represented as a double rounded to the tenth decimal place) or aspect ratio range.</td></tr><tr class="odd"><td>facingMode</td><td><a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-9" class="internalDFN"><code>ConstrainDOMString</code></a></td><td>This string (or each string, when a list) should be one of the members of <a href="#dom-videofacingmodeenum" id="ref-for-dom-videofacingmodeenum-1" class="internalDFN"><code>VideoFacingModeEnum</code></a>. The members describe the directions that the camera can face, as seen from the user's perspective. Note that <code>getConstraints</code> may not return exactly the same string for strings not in this enum. This preserves the possibility of using a future version of WebIDL enum for this property.</td></tr><tr class="even"><td>resizeMode</td><td><a href="#dom-constraindomstring" id="ref-for-dom-constraindomstring-10" class="internalDFN"><code>ConstrainDOMString</code></a></td><td>This string (or each string, when a list) should be one of the members of <a href="#dom-videoresizemodeenum" id="ref-for-dom-videoresizemodeenum-1" class="internalDFN"><code>VideoResizeModeEnum</code></a>. The members describe the means by which the resolution can be derived by the UA. In other words, whether the UA is allowed to use cropping and downscaling on the camera output.<p>The UA <em>MAY</em> disguise concurrent use of the camera, by cropping and/or downscaling to mimic native resolutions when "none" is used, but only when the camera is in use in another browsing context.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" /></p>Note that <code>getConstraints</code> may not return exactly the same string for strings not in this enum. This preserves the possibility of using a future version of WebIDL enum for this property.</td></tr></tbody></table>

On systems where it's desirable to sometimes automatically flip the X and Y axis of the resulting captured video in response to ongoing environmental factors, the <a href="#dfn-width" id="ref-for-dfn-width-1" class="internalDFN"><code>width</code></a>, <a href="#dfn-height" id="ref-for-dfn-height-1" class="internalDFN"><code>height</code></a> and <a href="#dfn-aspectratio" id="ref-for-dfn-aspectratio-1" class="internalDFN"><code>aspectRatio</code></a> constraints and capabilities *MUST* remain unaffected in all algorithms and be considered in the <a href="#dfn-primary-orientation" id="ref-for-dfn-primary-orientation-1" class="internalDFN">primary orientation</a> only, except for the <a href="#dom-mediastreamtrack-getsettings" id="ref-for-dom-mediastreamtrack-getsettings-3" class="internalDFN"><code>getSettings</code></a>`()` algorithm where settings for these constrainable properties *MUST* be flipped if necessary to match the returned dimensions of the captured video at any point in time.

The primary orientation of a system that supports flipping the X and Y axis of resulting captured video is defined by the User Agent for the particular system.

Note

On systems that support automatic switching between landscape and portrait mode, User Agents are encouraged to make landscape mode the <a href="#dfn-primary-orientation" id="ref-for-dfn-primary-orientation-2" class="internalDFN">primary orientation</a>.

    WebIDLenum VideoFacingModeEnum {
      "user",
      "environment",
      "left",
      "right"
    };

`VideoFacingModeEnum` Enumeration description

`user`

The source is facing toward the user (a self-view camera).

`environment`

The source is facing away from the user (viewing the environment).

`left`

The source is facing to the left of the user.

`right`

The source is facing to the right of the user.

Below is an illustration of the video facing modes in relation to the user.  
<img src="images/camera-names-exp.svg" alt="Illustration of video facing modes in relation to user" width="300" height="300" />

    WebIDLenum VideoResizeModeEnum {
      "none",
      "crop-and-scale"
    };

`VideoResizeModeEnum` Enumeration description

`none`

This resolution and frame rate is offered by the camera, its driver, or the OS.

Note: The UA *MAY* report this value to disguise concurrent use, but only when the camera is in use in another browsing context.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

`crop-and-scale`

This resolution is downscaled and/or cropped from a higher camera resolution by the User Agent, or its frame rate is decimated by the User Agent. The media *MUST NOT* be upscaled, stretched or have fake data created that did not occur in the input source.

The following constrainable properties are defined to apply only to audio <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-96" class="internalDFN"><code>MediaStreamTrack</code></a> objects:

<table><thead><tr class="header"><th>Property Name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>sampleRate</td><td><a href="#dom-constrainulong" id="ref-for-dom-constrainulong-13" class="internalDFN"><code>ConstrainULong</code></a></td><td>The sample rate in samples per second for the audio data.</td></tr><tr class="even"><td>sampleSize</td><td><a href="#dom-constrainulong" id="ref-for-dom-constrainulong-14" class="internalDFN"><code>ConstrainULong</code></a></td><td>The linear sample size in bits. This constraint can only be satisfied for audio devices that produce linear samples.</td></tr><tr class="odd"><td>echoCancellation</td><td><a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-7" class="internalDFN"><code>ConstrainBoolean</code></a></td><td>When one or more audio streams is being played in the processes of various microphones, it is often desirable to attempt to remove all the sound being played from the input signals recorded by the microphones. This is referred to as echo cancellation. There are cases where it is not needed and it is desirable to turn it off so that no audio artifacts are introduced. This allows applications to control this behavior.</td></tr><tr class="even"><td>autoGainControl</td><td><a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-8" class="internalDFN"><code>ConstrainBoolean</code></a></td><td>Automatic gain control is often desirable on the input signal recorded by the microphone. There are cases where it is not needed and it is desirable to turn it off so that the audio is not altered. This allows applications to control this behavior.</td></tr><tr class="odd"><td>noiseSuppression</td><td><a href="#dom-constrainboolean" id="ref-for-dom-constrainboolean-9" class="internalDFN"><code>ConstrainBoolean</code></a></td><td>Noise suppression is often desirable on the input signal recorded by the microphone. There are cases where it is not needed and it is desirable to turn it off so that the audio is not altered. This allows applications to control this behavior.</td></tr><tr class="even"><td>latency</td><td><a href="#dom-constraindouble" id="ref-for-dom-constraindouble-9" class="internalDFN"><code>ConstrainDouble</code></a></td><td>The latency or latency range, in seconds. The latency is the time between start of processing (for instance, when sound occurs in the real world) to the data being available to the next step in the process. Low latency is critical for some applications; high latency may be acceptable for other applications because it helps with power constraints. The number is expected to be the target latency of the configuration; the actual latency may show some variation from that.</td></tr><tr class="odd"><td>channelCount</td><td><a href="#dom-constrainulong" id="ref-for-dom-constrainulong-15" class="internalDFN"><code>ConstrainULong</code></a></td><td>The number of independent channels of sound that the audio data contains, i.e. the number of audio samples per sample frame.</td></tr></tbody></table>

### 4.4 <a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-1" class="internalDFN"><code>MediaStreamTrackEvent</code></a><a href="#mediastreamtrackevent" class="self-link"></a>

The <a href="#event-mediastream-addtrack" id="ref-for-event-mediastream-addtrack-2" class="internalDFN"><code>addtrack</code></a> and <a href="#event-mediastream-removetrack" id="ref-for-event-mediastream-removetrack-2" class="internalDFN"><code>removetrack</code></a> events use the <a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-2" class="internalDFN"><code>MediaStreamTrackEvent</code></a> interface.

The <a href="#event-mediastream-addtrack" id="ref-for-event-mediastream-addtrack-3" class="internalDFN"><code>addtrack</code></a> and <a href="#event-mediastream-removetrack" id="ref-for-event-mediastream-removetrack-3" class="internalDFN"><code>removetrack</code></a> events notify the script that the <a href="#track-set" id="ref-for-track-set-22" class="internalDFN">track set</a> of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-53" class="internalDFN"><code>MediaStream</code></a> has been updated by the User Agent.

Firing a track event named e with a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-97" class="internalDFN"><code>MediaStreamTrack</code></a> track means that an event with the name e, which does not bubble (except where otherwise stated) and is not cancelable (except where otherwise stated), and which uses the <a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-3" class="internalDFN"><code>MediaStreamTrackEvent</code></a> interface with the <a href="#dom-mediastreamtrackevent-track" id="ref-for-dom-mediastreamtrackevent-track-1" class="internalDFN"><code>track</code></a> attribute set to track, *MUST* be created and dispatched at the given target.

    WebIDL[Exposed=Window]
    interface MediaStreamTrackEvent : Event {
      constructor(DOMString type, MediaStreamTrackEventInit eventInitDict);
      [SameObject] readonly attribute MediaStreamTrack track;
    };

#### Constructors<a href="#constructors-1" class="self-link"></a>

`constructor()`  
Constructs a new <a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-4" class="internalDFN"><code>MediaStreamTrackEvent</code></a>.

#### Attributes<a href="#attributes-2" class="self-link"></a>

<a href="#dom-mediastreamtrackevent-track" id="ref-for-dom-mediastreamtrackevent-track-3" class="internalDFN"><code>track</code></a> of type <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-99" class="internalDFN"><code>MediaStreamTrack</code></a>, readonly  
The `track` attribute represents the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-100" class="internalDFN"><code>MediaStreamTrack</code></a> object associated with the event.

    WebIDLdictionary MediaStreamTrackEventInit : EventInit {
      required MediaStreamTrack track;
    };

#### Dictionary `MediaStreamTrackEventInit` Members<a href="#dictionary-mediastreamtrackeventinit-members" class="self-link"></a>

`track` of type <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-102" class="internalDFN"><code>MediaStreamTrack</code></a>, required  

5. The model: sources, sinks, constraints, and settings<a href="#the-model-sources-sinks-constraints-and-settings" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

User Agents provide a media pipeline from sources to sinks. In a User Agent, sinks are the &lt;`img`&gt;, &lt;`video`&gt;, and &lt;`audio`&gt; tags. Traditional sources include streamed content, files, and web resources. The media produced by these sources typically does not change over time - these sources can be considered to be static.

The sinks that display these sources to the user (the actual tags themselves) have a variety of controls for manipulating the source content. For example, an &lt;`img`&gt; tag scales down a huge source image of 1600x1200 pixels to fit in a rectangle defined with `width="400"` and `height="300"`.

Sources have a lifetime. By default, a source lifetime is tied to the context that created it. For instance, sources created by <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-2" class="internalDFN"><code>MediaDevices</code></a>.<a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-12" class="internalDFN"><code>getUserMedia</code></a>`()` are considered as created by its navigator.<a href="#dom-mediadevices" id="ref-for-dom-mediadevices-3" class="internalDFN"><code>mediaDevices</code></a> context. Similarly, sources of [`RTCRtpReceiver`](https://www.w3.org/TR/webrtc/#dom-rtcrtpreceiver) objects are bound to the [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection) itself, which is bound to its creation context. Except if stated explicitly in the definition of specific sources, a source is always <a href="#source-stopped" id="ref-for-source-stopped-5" class="internalDFN">stopped</a> when its creation context goes away. It should be noted that two sources of different contexts may use the same capture device at the same time. One source can be stopped independently of the other one.

The getUserMedia API adds dynamic sources such as microphones and cameras - the characteristics of these sources can change in response to application needs. These sources can be considered to be dynamic in nature. A &lt;`video`&gt; element that displays media from a dynamic source can either perform scaling or it can feed back information along the media pipeline and have the source produce content more suitable for display.

Note

**Note:** This sort of feedback loop is obviously just enabling an "optimization", but it's a non-trivial gain. This optimization can save battery, allow for less network congestion, etc...

Note that <a href="#dom-mediastream" id="ref-for-dom-mediastream-54" class="internalDFN"><code>MediaStream</code></a> sinks (such as &lt;`video`&gt;, &lt;`audio`&gt;, and even [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection)) will continue to have mechanisms to further transform the source stream beyond that which the <a href="#dfn-settings" id="ref-for-dfn-settings-3" class="internalDFN">Settings</a>, <a href="#dfn-capabilities" id="ref-for-dfn-capabilities-4" class="internalDFN">Capabilities</a>, and <a href="#dom-constraints" id="ref-for-dom-constraints-2" class="internalDFN"><code>Constraints</code></a> described in this specification offer. (The sink transformation options, including those of [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection), are outside the scope of this specification.)

The act of changing or applying a track constraint may affect the <a href="#dfn-settings" id="ref-for-dfn-settings-4" class="internalDFN">settings</a> of all tracks sharing that source and consequently all down-level sinks that are using that source. Many sinks may be able to take these changes in stride, such as the `<video`&gt; element or [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection). Others like the Recorder API may fail as a result of a source setting change.

The [`RTCPeerConnection`](https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection) is an interesting object because it acts simultaneously as both a sink **and** a source for over-the-network streams. As a sink, it has source transformational capabilities (e.g., lowering bit-rates, scaling-up / down resolutions, and adjusting frame-rates), and as a source it could have its own settings changed by a track source.

To illustrate how changes to a given source impact various sinks, consider the following example. This example only uses width and height, but the same principles apply to all of the <a href="#dfn-settings" id="ref-for-dfn-settings-5" class="internalDFN">Settings</a> exposed in this specification. In the first figure a home client has obtained a video source from its local video camera. The source's width and height settings are 800 pixels and 600 pixels, respectively. Three <a href="#dom-mediastream" id="ref-for-dom-mediastream-55" class="internalDFN"><code>MediaStream</code></a> objects on the home client contain tracks that use this same &lt;<a href="#dfn-deviceid" id="ref-for-dfn-deviceid-2" class="internalDFN"><code>deviceId</code></a>. The three media streams are connected to three different sinks: a `<video`&gt; element (A), another `<video`&gt; element (B), and a peer connection (C). The peer connection is streaming the source video to a remote client. On the remote client there are two media streams with tracks that use the peer connection as a source. These two media streams are connected to two `<video`&gt; element sinks (Y and Z).

![Changing media stream source effects: before the requested change](images/change_states_before.svg)

Note that at this moment, all of the sinks on the home client must apply a transformation to the original source's provided dimension settings. B is scaling the video down, A is scaling the video up (resulting in loss of quality), and C is also scaling the video up slightly for sending over the network. On the remote client, sink Y is scaling the video *way* down, while sink Z is not applying any scaling.

In response to <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-5" class="internalDFN"><code>applyConstraints</code></a>`()` being called, one of the tracks wants a higher resolution (1920 by 1200 pixels) from the home client's video source.

![Changing media stream source effects: after the requested change](images/change_states_after.svg)

Note that the source change immediately affects all of the tracks and sinks on the home client, but does not impact any of the sinks (or sources) on the remote client. With the increase in the home client source video's dimensions, sink A no longer has to perform any scaling, while sink B must scale down even further than before. Sink C (the peer connection) must now scale down the video in order to keep the transmission constant to the remote client.

While not shown, an equally valid settings change request could be made on the remote client's side. In addition to impacting sink Y and Z in the same manner as A, B and C were impacted earlier, it could lead to re-negotiation with the peer connection on the home client in order to alter the transformation that it is applying to the home client's video source. Such a change is *NOT REQUIRED* to change anything related to sink A or B or the home client's video source.

Note that this specification does not define a mechanism by which a change to the remote client's video source could automatically trigger a change to the home client's video source. Implementations may choose to make such source-to-sink optimizations as long as they only do so within the constraints established by the application, as the next example demonstrates.

It is fairly obvious that changes to a given source will impact sink consumers. However, in some situations changes to a given sink may also cause implementations to adjust a source's settings. This is illustrated in the following figures. In the first figure below, the home client's video source is sending a video stream sized at 1920 by 1200 pixels. The video source is also unconstrained, such that the exact source dimensions are flexible as far as the application is concerned. Two <a href="#dom-mediastream" id="ref-for-dom-mediastream-56" class="internalDFN"><code>MediaStream</code></a> objects contain tracks with the same <a href="#dfn-deviceid" id="ref-for-dfn-deviceid-3" class="internalDFN"><code>deviceId</code></a>, and those <a href="#dom-mediastream" id="ref-for-dom-mediastream-57" class="internalDFN"><code>MediaStream</code></a>s are connected to two different `<video`&gt; element sinks A and B. Sink A has been sized to `width="1920"` and `height="1200"` and is displaying the source's video content without any transformations. Sink B has been sized smaller and, as a result, is scaling the video down to fit its rectangle of 320 pixels across by 200 pixels down.

![Changing media stream sinks may affect sources: before the requested change](images/change_states_before2.svg)

When the application changes sink A to a smaller dimension (from 1920 to 1024 pixels wide and from 1200 to 768 pixels tall), the User Agent's media pipeline may recognize that none of its sinks require the higher source resolution, and needless work is being done both on the part of the source and sink A. In such a case and without any other constraints forcing the source to continue producing the higher resolution video, the media pipeline *MAY* change the source resolution:

<img src="images/change_states_after2.svg" alt="Changing media stream sinks may affect sources: after the requested change" width="690" height="278" />

In the above figure, the home client's video source resolution was changed to the greater of that from sink A and B in order to optimize playback. While not shown above, the same behavior could apply to peer connections and other sinks.

It is possible that <a href="#dom-constraints" id="ref-for-dom-constraints-3" class="internalDFN">constraints</a> can be applied to a track which a source is unable to satisfy, either because the source itself cannot satisfy the constraint or because the source is already satisfying a conflicting constraint. When this happens, the promise returned from <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-6" class="internalDFN"><code>applyConstraints</code></a>`()` will be [rejected](https://webidl.spec.whatwg.org/#reject), without applying any of the new constraints. Since no change in constraints occurs in this case, there is also no required change to the source itself as a result of this condition. Here is an example of this behavior.

In this example, two media streams each have a video track that share the same source. The first track initially has no constraints applied. It is connected to sink N. Sink N has a resolution of 800 by 600 pixels and is scaling down the source's resolution of 1024 by 768 to fit. The other track has a <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-2" class="internalDFN">required constraint</a> forcing off the source's fill light; it is connected to sink P. Sink P has a width and height equal to that of the source.

<img src="images/overconstrained_apply.svg" alt="Overconstrained application" width="650" height="334" />

Now, the first track adds a <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-3" class="internalDFN">required constraint</a> that the fill light should be forced on. At this point, both <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-4" class="internalDFN">required constraints</a> cannot be satisfied by the source (the fill light cannot be simultaneously on and off at the same time). Since this state was caused by the first track's attempt to apply a conflicting constraint, the constraint application fails and there is no change in the source's settings nor to the constraints on either track.

6. MediaStreams in Media Elements<a href="#mediastreams-in-media-elements" class="self-link"></a>
-------------------------------------------------------------------------------------------------

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-58" class="internalDFN"><code>MediaStream</code></a> may be assigned to media elements. A <a href="#dom-mediastream" id="ref-for-dom-mediastream-59" class="internalDFN"><code>MediaStream</code></a> is not preloadable or seekable and represents a simple, potentially infinite, linear [media timeline](https://html.spec.whatwg.org/multipage/#media-timeline). The timeline starts at 0 and increments linearly in real time as long as the media element is [potentially playing](https://html.spec.whatwg.org/multipage/#potentially-playing). The timeline does not increment when the playout of the <a href="#dom-mediastream" id="ref-for-dom-mediastream-60" class="internalDFN"><code>MediaStream</code></a> is paused.

User Agents that support this specification *MUST* support the [`srcObject`](https://html.spec.whatwg.org/multipage/media.html#dom-media-srcobject) attribute of the [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) interface defined in \[<a href="#bib-html" class="bibref" title="HTML Standard">HTML</a>\], which includes support for playing <a href="#dom-mediastream" id="ref-for-dom-mediastream-61" class="internalDFN"><code>MediaStream</code></a> objects.

The \[<a href="#bib-html" class="bibref" title="HTML Standard">HTML</a>\] document outlines how the [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) works with a *media provider object*. The following applies when the *media provider object* is a <a href="#dom-mediastream" id="ref-for-dom-mediastream-62" class="internalDFN"><code>MediaStream</code></a>:

-   Whenever an [`AudioTrack`](https://html.spec.whatwg.org/multipage/media.html#audiotrack) or a [`VideoTrack`](https://html.spec.whatwg.org/multipage/media.html#videotrack) is created, the `id` and `label` attributes must be initialized to the corresponding attributes of the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-103" class="internalDFN"><code>MediaStreamTrack</code></a>, the `kind` attribute must be initialized to `"main"` and the `language` attribute to the empty string

-   The User Agent *MUST* always play the current data from the <a href="#dom-mediastream" id="ref-for-dom-mediastream-63" class="internalDFN"><code>MediaStream</code></a> and *MUST NOT* buffer.
-   Since the order in the <a href="#dom-mediastream" id="ref-for-dom-mediastream-64" class="internalDFN"><code>MediaStream</code></a> 's <a href="#track-set" id="ref-for-track-set-23" class="internalDFN">track set</a> is undefined, no requirements are put on how the [`AudioTrackList`](https://html.spec.whatwg.org/multipage/media.html#audiotracklist) and [`VideoTrackList`](https://html.spec.whatwg.org/multipage/media.html#videotracklist) is ordered

-   If the element is an [`HTMLVideoElement`](https://html.spec.whatwg.org/multipage/media.html#htmlvideoelement), then it is said to have [ended playback](https://html.spec.whatwg.org/multipage/#ended-playback) when it has ended video playback, which is when:

    1.  The element's [`readyState`](https://html.spec.whatwg.org/multipage/media.html#dom-media-readystate) is [`HAVE_METADATA`](https://html.spec.whatwg.org/multipage/media.html#dom-media-have_metadata) or greater, and

        1.  The <a href="#dom-mediastream" id="ref-for-dom-mediastream-65" class="internalDFN"><code>MediaStream</code></a> state is <a href="#stream-inactive" id="ref-for-stream-inactive-1" class="internalDFN">inactive</a> after having been <a href="#stream-active" id="ref-for-stream-active-2" class="internalDFN">active</a>, or

        2.  The <a href="#dom-mediastream" id="ref-for-dom-mediastream-66" class="internalDFN"><code>MediaStream</code></a> state is <a href="#stream-active" id="ref-for-stream-active-3" class="internalDFN">active</a> after having been <a href="#stream-inactive" id="ref-for-stream-inactive-2" class="internalDFN">inactive</a> after having been <a href="#stream-active" id="ref-for-stream-active-4" class="internalDFN">active</a> after [`play`](https://html.spec.whatwg.org/multipage/media.html#dom-media-play)`()` was last called, and [`autoplay`](https://html.spec.whatwg.org/multipage/media.html#dom-media-autoplay) is `false`.

        Note

        Once playback has ended, it won't resume if new <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-104" class="internalDFN"><code>MediaStreamTrack</code></a>s are added to the <a href="#dom-mediastream" id="ref-for-dom-mediastream-67" class="internalDFN"><code>MediaStream</code></a> unless [`autoplay`](https://html.spec.whatwg.org/multipage/media.html#dom-media-autoplay) is `true` or the element is restarted, e.g., by the web application calling [`play`](https://html.spec.whatwg.org/multipage/media.html#dom-media-play)`()`.

-   If the element is an [`HTMLAudioElement`](https://html.spec.whatwg.org/multipage/media.html#htmlaudioelement), then it is said to have [ended playback](https://html.spec.whatwg.org/multipage/#ended-playback) when it has ended audio playback, which is when:

    1.  The element's [`readyState`](https://html.spec.whatwg.org/multipage/media.html#dom-media-readystate) is [`HAVE_METADATA`](https://html.spec.whatwg.org/multipage/media.html#dom-media-have_metadata) or greater, and

        1.  The <a href="#dom-mediastream" id="ref-for-dom-mediastream-68" class="internalDFN"><code>MediaStream</code></a> state is <a href="#stream-inaudible" id="ref-for-stream-inaudible-1" class="internalDFN">inaudible</a> after having been <a href="#stream-audible" id="ref-for-stream-audible-1" class="internalDFN">audible</a>, or

        2.  The <a href="#dom-mediastream" id="ref-for-dom-mediastream-69" class="internalDFN"><code>MediaStream</code></a> state is <a href="#stream-audible" id="ref-for-stream-audible-2" class="internalDFN">audible</a> after having been <a href="#stream-inaudible" id="ref-for-stream-inaudible-2" class="internalDFN">inaudible</a> after having been <a href="#stream-audible" id="ref-for-stream-audible-3" class="internalDFN">audible</a> after [`play`](https://html.spec.whatwg.org/multipage/media.html#dom-media-play)`()` was last called, and [`autoplay`](https://html.spec.whatwg.org/multipage/media.html#dom-media-autoplay) is `false`.

        Note

        Once playback has ended, it won't resume if new audio <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-105" class="internalDFN"><code>MediaStreamTrack</code></a>s are added to the <a href="#dom-mediastream" id="ref-for-dom-mediastream-70" class="internalDFN"><code>MediaStream</code></a> unless [`autoplay`](https://html.spec.whatwg.org/multipage/media.html#dom-media-autoplay) is `true` or the element is restarted, e.g., by the web application calling [`play`](https://html.spec.whatwg.org/multipage/media.html#dom-media-play)`()`.

-   Any calls to the [`fastSeek`](https://html.spec.whatwg.org/multipage/media.html#dom-media-fastseek)`()` method on a [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) must be ignored

The nature of the <a href="#dom-mediastream" id="ref-for-dom-mediastream-71" class="internalDFN"><code>MediaStream</code></a> places certain restrictions on the behavior of attributes of the associated [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) and on the operations that can be performed on it, as shown below:

<table><thead><tr class="header"><th>Attribute Name</th><th>Attribute Type</th><th>Setter/Getter Behavior When Provider is a MediaStream</th><th>Additional considerations</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-preload"><code>preload</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-DOMString"><code>DOMString</code></a></td><td>On getting: <code>none</code>. On setting: ignored.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-72" class="internalDFN"><code>MediaStream</code></a> cannot be preloaded.</td></tr><tr class="even"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-buffered"><code>buffered</code></a></td><td><a href="https://html.spec.whatwg.org/multipage/media.html#timeranges"><code>TimeRanges</code></a></td><td><code>buffered.length</code> <em>MUST</em> return <code>0</code>.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-73" class="internalDFN"><code>MediaStream</code></a> cannot be preloaded. Therefore, the amount buffered is always an empty time range.</td></tr><tr class="odd"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-currenttime"><code>currentTime</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-double"><code>double</code></a></td><td>Any non-negative integer. The initial value is <code>0</code> and the values increments linearly in real time whenever the stream is playing.</td><td>The value is the <a href="https://html.spec.whatwg.org/multipage/#official-playback-position">official playback position</a>, in seconds. Any attempt to alter it <em>MUST</em> be ignored.</td></tr><tr class="even"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-seeking"><code>seeking</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-boolean"><code>boolean</code></a></td><td><code>false</code></td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-74" class="internalDFN"><code>MediaStream</code></a> is not seekable. Therefore, this attribute <em>MUST</em> always return the value <code>false</code>.</td></tr><tr class="odd"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-defaultplaybackrate"><code>defaultPlaybackRate</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-double"><code>double</code></a></td><td>On getting: <code>1.0</code>. On setting: ignored.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-75" class="internalDFN"><code>MediaStream</code></a> is not seekable. Therefore, this attribute <em>MUST</em> always return the value <code>1.0</code> and any attempt to alter it <em>MUST</em> be ignored. Note that this also means that the <code>ratechange</code> event will not fire.</td></tr><tr class="even"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-playbackrate"><code>playbackRate</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-double"><code>double</code></a></td><td>On getting: <code>1.0</code>. On setting: ignored.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-76" class="internalDFN"><code>MediaStream</code></a> is not seekable. Therefore, this attribute <em>MUST</em> always return the value <code>1.0</code> and any attempt to alter it <em>MUST</em> be ignored. Note that this also means that the <code>ratechange</code> event will not fire.</td></tr><tr class="odd"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-played"><code>played</code></a></td><td><a href="https://html.spec.whatwg.org/multipage/media.html#timeranges"><code>TimeRanges</code></a></td><td><code>played.length</code> <em>MUST</em> return <code>1</code>.<br />
<code>played.start(0)</code> <em>MUST</em> return <code>0</code>.<br />
<code>played.end(0)</code> <em>MUST</em> return the last known <a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-currenttime"><code>currentTime</code></a>.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-77" class="internalDFN"><code>MediaStream</code></a>'s timeline always consists of a single range, starting at 0 and extending up to the currentTime.</td></tr><tr class="even"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-seekable"><code>seekable</code></a></td><td><a href="https://html.spec.whatwg.org/multipage/media.html#timeranges"><code>TimeRanges</code></a></td><td><code>seekable.length</code> <em>MUST</em> return <code>0</code>.</td><td>A <a href="#dom-mediastream" id="ref-for-dom-mediastream-78" class="internalDFN"><code>MediaStream</code></a> is not seekable.</td></tr><tr class="odd"><td><a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-loop"><code>loop</code></a></td><td><a href="https://webidl.spec.whatwg.org/#idl-boolean"><code>boolean</code></a></td><td><code>true</code>, <code>false</code></td><td>Setting the <a href="https://html.spec.whatwg.org/multipage/media.html#dom-media-loop"><code>loop</code></a> attribute has no effect since a <a href="#dom-mediastream" id="ref-for-dom-mediastream-79" class="internalDFN"><code>MediaStream</code></a> has no defined end and therefore cannot be looped.</td></tr></tbody></table>

Since none of the setters listed above alter internal state of the [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement), once a <a href="#dom-mediastream" id="ref-for-dom-mediastream-80" class="internalDFN"><code>MediaStream</code></a> is no longer the element's [assigned media provider object](https://html.spec.whatwg.org/multipage/#assigned-media-provider-object), the attributes listed will appear to resume the values they had before a stream was assigned to the element.

Note

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-81" class="internalDFN"><code>MediaStream</code></a> stops being the element's [assigned media provider object](https://html.spec.whatwg.org/multipage/#assigned-media-provider-object) when [`srcObject`](https://html.spec.whatwg.org/multipage/media.html#dom-media-srcobject) is assigned `null` or a non-stream object, just ahead of the [media element load algorithm](https://html.spec.whatwg.org/multipage/#media-element-load-algorithm). As a result, the `ratechange` event may fire (from step 7) if [`playbackRate`](https://html.spec.whatwg.org/multipage/media.html#dom-media-playbackrate) and [`defaultPlaybackRate`](https://html.spec.whatwg.org/multipage/media.html#dom-media-defaultplaybackrate) were different from before a <a href="#dom-mediastream" id="ref-for-dom-mediastream-82" class="internalDFN"><code>MediaStream</code></a> was assigned.

7. Error Handling<a href="#error-handling" class="self-link"></a>
-----------------------------------------------------------------

Some operations throw or fire `OverconstrainedError`. This is an extension of [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) that carries additional information related to constraints failure.

### 7.1 OverconstrainedError Interface<a href="#overconstrainederror-interface" class="self-link"></a>

    WebIDL[Exposed=Window]
    interface OverconstrainedError : DOMException {
      constructor(DOMString constraint, optional DOMString message = "");
      readonly attribute DOMString constraint;
    };

#### 7.1.1 Constructors<a href="#constructors" class="self-link"></a>

`OverconstrainedError`  
Run the following steps:

1.  Let constraint be the constructor's first argument.

2.  Let message be the constructor's second argument.

3.  Let e be a new <a href="#dom-overconstrainederror" id="ref-for-dom-overconstrainederror-2" class="internalDFN"><code>OverconstrainedError</code></a> object.

4.  Invoke the [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) constructor of e with the `message` argument set to message and the `name` argument set to `"OverconstrainedError"`.

    Note

    This name does not have a mapping to a legacy code so e's `code` attribute will return 0.

5.  Set e.constraint to constraint.

6.  Return e.

#### 7.1.2 Attributes<a href="#attributes" class="self-link"></a>

`constraint` of type <span class="idlAttrType">[`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)</span>, readonly  
The name of a constraint associated with this error, or `""` if no specific constraint name is revealed.

8. Event summary<a href="#event-summary" class="self-link"></a>
---------------------------------------------------------------

*This section is non-normative.*

The following events fire on <a href="#dom-mediastream" id="ref-for-dom-mediastream-83" class="internalDFN"><code>MediaStream</code></a> objects:

<table><thead><tr class="header"><th>Event name</th><th>Interface</th><th>Fired when...</th></tr></thead><tbody><tr class="odd"><td>addtrack</td><td><a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-5" class="internalDFN"><code>MediaStreamTrackEvent</code></a></td><td>A new <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-106" class="internalDFN"><code>MediaStreamTrack</code></a> has been added to this stream. Note that this event is not fired when the script directly modifies the tracks of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-84" class="internalDFN"><code>MediaStream</code></a>.</td></tr><tr class="even"><td>removetrack</td><td><a href="#dom-mediastreamtrackevent" id="ref-for-dom-mediastreamtrackevent-6" class="internalDFN"><code>MediaStreamTrackEvent</code></a></td><td>A <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-107" class="internalDFN"><code>MediaStreamTrack</code></a> has been removed from this stream. Note that this event is not fired when the script directly modifies the tracks of a <a href="#dom-mediastream" id="ref-for-dom-mediastream-85" class="internalDFN"><code>MediaStream</code></a>.</td></tr></tbody></table>

The following events fire on <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-108" class="internalDFN"><code>MediaStreamTrack</code></a> objects:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Event name</th><th>Interface</th><th>Fired when...</th></tr></thead><tbody><tr class="odd"><td>mute</td><td><a href="https://dom.spec.whatwg.org/#event"><code>Event</code></a></td><td>The <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-109" class="internalDFN"><code>MediaStreamTrack</code></a> object's source is temporarily unable to provide data.</td></tr><tr class="even"><td>unmute</td><td><a href="https://dom.spec.whatwg.org/#event"><code>Event</code></a></td><td>The <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-110" class="internalDFN"><code>MediaStreamTrack</code></a> object's source is live again after having been temporarily unable to provide data.</td></tr><tr class="odd"><td>ended</td><td><a href="https://dom.spec.whatwg.org/#event"><code>Event</code></a></td><td><p>The <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-111" class="internalDFN"><code>MediaStreamTrack</code></a> object's source will no longer provide any data, either because the user revoked the permissions, or because the source device has been ejected, or because the remote peer permanently stopped sending data.</p></td></tr></tbody></table>

The following events fire on <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-4" class="internalDFN"><code>MediaDevices</code></a> objects:

<table><thead><tr class="header"><th>Event name</th><th>Interface</th><th>Fired when...</th></tr></thead><tbody><tr class="odd"><td>devicechange</td><td><a href="https://dom.spec.whatwg.org/#event"><code>Event</code></a></td><td>The set of media devices, available to the User Agent, has changed. The current list devices can be retrieved with the <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-1" class="internalDFN"><code>enumerateDevices</code></a><code>()</code> method.</td></tr></tbody></table>

9. Enumerating Local Media Devices<a href="#enumerating-devices" class="self-link"></a>
---------------------------------------------------------------------------------------

This section describes an API that the script can use to query the User Agent about connected media input and output devices (for example a web camera or a headset).

### 9.1 `Navigator` Interface Extensions<a href="#navigator-interface-extensions" class="self-link"></a>

    WebIDLpartial interface Navigator {
      [SameObject, SecureContext] readonly attribute MediaDevices mediaDevices;
    };

#### Attributes<a href="#attributes-3" class="self-link"></a>

`mediaDevices` of type <a href="#dom-navigator-mediadevices" id="ref-for-dom-navigator-mediadevices-2" class="internalDFN"><code>MediaDevices</code></a>, readonly  
Returns the <a href="#dom-navigator-mediadevices" id="ref-for-dom-navigator-mediadevices-3" class="internalDFN"><code>MediaDevices</code></a> object associated with this [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) object.

### 9.2 <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-6" class="internalDFN"><code>MediaDevices</code></a><a href="#mediadevices" class="self-link"></a>

The `MediaDevices` object is the entry point to the API used to examine and get access to media devices available to the User Agent.

On page load, run the following steps:

1.  On the [relevant global object](https://html.spec.whatwg.org/multipage/#concept-relevant-global), run the following steps:

    1.  Create three internal slots: \[\[devicesLiveMap\]\], \[\[devicesAccessibleMap\]\], and \[\[kindsAccessibleMap\]\], each initialized to a different empty object.

    2.  Create one internal slot: \[\[storedDeviceList\]\], initialized to `null`.

    3.  Create one internal slot: \[\[canExposeCameraInfo\]\], initialized to `false`.

    4.  Create one internal slot: \[\[canExposeMicrophoneInfo\]\], initialized to `false`.

    5.  Create one internal slot: \[\[mediaStreamTrackSources\]\], initialized to an empty set.

2.  For each kind of device, kind, that <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-7" class="internalDFN"><code>MediaDevices</code></a>.<a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-13" class="internalDFN"><code>getUserMedia</code></a>`()` exposes, set <a href="#dfn-kindsaccessiblemap" id="ref-for-dfn-kindsaccessiblemap-1" class="internalDFN"><code>[[kindsAccessibleMap]]</code></a>\[kind\] either to `true` if the [permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) of the permission associated with kind (e.g. "[`camera`](https://www.w3.org/TR/permissions/#dom-permissionname-camera)", "[`microphone`](https://www.w3.org/TR/permissions/#dom-permissionname-microphone)"), is "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)", or to `false` otherwise.

3.  For each individual device that <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-8" class="internalDFN"><code>MediaDevices</code></a>.<a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-14" class="internalDFN"><code>getUserMedia</code></a>`()` exposes, using the device's deviceId, deviceId, set <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-3" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] to `false`, and set <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-2" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] either to `true` if the [permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) of the permission associated with the device’s kind and deviceId, is "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)", or to false otherwise.

For each kind of device, kind, that <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-15" class="internalDFN"><code>getUserMedia</code></a>`()` exposes, [whenever a transition occurs of the permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) of the permission associated with kind, run the following steps:

1.  If the transition is to "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)" from another value, then set <a href="#dfn-kindsaccessiblemap" id="ref-for-dfn-kindsaccessiblemap-2" class="internalDFN"><code>[[kindsAccessibleMap]]</code></a>\[kind\] to `true`.

2.  If the transition is from "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)" to another value, then set <a href="#dfn-kindsaccessiblemap" id="ref-for-dfn-kindsaccessiblemap-3" class="internalDFN"><code>[[kindsAccessibleMap]]</code></a>\[kind\] to `false`.

For each device that <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-16" class="internalDFN"><code>getUserMedia</code></a>`()` exposes, whenever a transition occurs of the [permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) of the permission associated with the device's kind and the device's deviceId, deviceId, run the following steps:

1.  If the transition is to "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)" from another value, then set <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-3" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] to `true`, if it isn’t already `true`.

2.  If the transition is from "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)" to another value, and the device is currently <a href="#source-stopped" id="ref-for-source-stopped-6" class="internalDFN">stopped</a>, then set <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-4" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] to `false`.

When new media input and/or output devices of a <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-1" class="internalDFN"><code>MediaDeviceKind</code></a> are made available where zero devices of that <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-2" class="internalDFN"><code>MediaDeviceKind</code></a> were available before, or the lone input and/or output device of a <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-3" class="internalDFN"><code>MediaDeviceKind</code></a> becomes unavailable, the User Agent *MUST* run the following device change notification steps in browsing contexts for which <a href="#device-enumeration-can-proceed" id="ref-for-device-enumeration-can-proceed-1" class="internalDFN">device enumeration can proceed</a> is `true` and <a href="#device-information-can-be-exposed" id="ref-for-device-information-can-be-exposed-1" class="internalDFN">device information can be exposed</a> is `false`, but in no other contexts:

1.  If <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-1" class="internalDFN"><code>[[storedDeviceList]]</code></a> already lists the exact same set of devices in the same order as the list of devices that would be generated by a call to <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-2" class="internalDFN"><code>enumerateDevices</code></a> now, then abort these steps.

    Note

    Due to the <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-3" class="internalDFN"><code>enumerateDevices</code></a> algorithm, the above step limits firing the <a href="#event-mediadevices-devicechange" id="ref-for-event-mediadevices-devicechange-1" class="internalDFN">devicechange</a> event to documents [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use) <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-4" class="internalDFN"><code>enumerateDevices</code></a> to enumerate devices of a particular <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-4" class="internalDFN"><code>MediaDeviceKind</code></a>.

2.  Set <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-2" class="internalDFN"><code>[[storedDeviceList]]</code></a> to `null`.

3.  Queue a task that fires a simple event named <a href="#event-mediadevices-devicechange" id="ref-for-event-mediadevices-devicechange-2" class="internalDFN">devicechange</a> at the <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-9" class="internalDFN"><code>MediaDevices</code></a> object.

    The User Agent *MAY* combine firing multiple events into firing one event when several events are due or when multiple devices are added or removed at the same time, e.g. a camera with a microphone.

Additionally, when new media input and/or output devices are made available, or any available input and/or output device becomes unavailable, or the system default for input and/or output devices changed, the User Agent *MUST* run the <a href="#dfn-device-change-notification-steps" id="ref-for-dfn-device-change-notification-steps-1" class="internalDFN">device change notification steps</a> in browsing contexts for which <a href="#device-enumeration-can-proceed" id="ref-for-device-enumeration-can-proceed-2" class="internalDFN">device enumeration can proceed</a> is `true` and <a href="#device-information-can-be-exposed" id="ref-for-device-information-can-be-exposed-2" class="internalDFN">device information can be exposed</a> is `true`, but in no other contexts.

In both cases above, if a browsing context that was traversed comes to meet the <a href="#device-enumeration-can-proceed" id="ref-for-device-enumeration-can-proceed-3" class="internalDFN">device enumeration can proceed</a> criteria later (e.g. [gains focus](https://html.spec.whatwg.org/multipage/#gains-focus)), the User Agent *MUST* execute the <a href="#dfn-device-change-notification-steps" id="ref-for-dfn-device-change-notification-steps-2" class="internalDFN">device change notification steps</a> on the browsing context at that time.

Note

These events are potentially triggered simultaneously on documents of different origins. User Agents *MAY* add fuzzing on the timing of events to avoid cross-origin activity correlation.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

    WebIDL[Exposed=Window, SecureContext]
    interface MediaDevices : EventTarget {
      attribute EventHandler ondevicechange;
      Promise<sequence<MediaDeviceInfo>> enumerateDevices();
    };

#### Attributes<a href="#attributes-4" class="self-link"></a>

`ondevicechange` of type [`EventHandler`](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)  
The event type of this event handler is <a href="#event-mediadevices-devicechange" id="ref-for-event-mediadevices-devicechange-3" class="internalDFN">devicechange</a>.

#### Methods<a href="#methods-1" class="self-link"></a>

`enumerateDevices`  
Collects information about the User Agent's available media input and output devices.

This method returns a promise. The promise will be [fulfilled](https://webidl.spec.whatwg.org/#upon-fulfillment) with a sequence of <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-4" class="internalDFN"><code>MediaDeviceInfo</code></a> objects representing the User Agent's available media input and output devices if enumeration is successful.

Elements of this sequence that represent input devices will be of type <a href="#dom-inputdeviceinfo" id="ref-for-dom-inputdeviceinfo-1" class="internalDFN"><code>InputDeviceInfo</code></a> which extends <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-5" class="internalDFN"><code>MediaDeviceInfo</code></a>.

Camera and microphone sources *SHOULD* be enumerable. Specifications that add additional types of source will provide recommendations about whether the source type should be enumerable.

When the <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-6" class="internalDFN"><code>enumerateDevices</code></a>`()` method is called, the User Agent must run the following steps:

1.  Let p be a new promise.

2.  Run the following steps in parallel:

    1.  Let document be the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document).

    2.  The User Agent *MUST* wait to proceed to the next step until <a href="#device-enumeration-can-proceed" id="ref-for-device-enumeration-can-proceed-4" class="internalDFN">device enumeration can proceed</a> is `true`.

        The User Agent *MAY* wait to proceed to the next step until document is [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) and [has focus.](https://html.spec.whatwg.org/multipage/#gains-focus)

    3.  Let resultList be an empty list.

    4.  If <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-3" class="internalDFN"><code>[[storedDeviceList]]</code></a> is not `null`, run the following sub steps:

        1.  For each <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-6" class="internalDFN"><code>MediaDeviceInfo</code></a> object in <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-4" class="internalDFN"><code>[[storedDeviceList]]</code></a>, storedDeviceInfo:

            -   Append to resultList a <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-7" class="internalDFN"><code>MediaDeviceInfo</code></a> copy of storedDeviceInfo.

        2.  [resolve](https://webidl.spec.whatwg.org/#resolve) p with resultList.

        3.  Abort these steps.

    5.  Probe the User Agent for available media devices, and let be deviceList be the list of all discovered devices.

    6.  Let microphoneList, cameraList and otherDeviceList be empty lists.

    7.  Run the following sub steps for each discovered device in deviceList, device:

        1.  If device is not a microphone, or document is not [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use) the feature identified by <a href="#dfn-microphone" id="ref-for-dfn-microphone-1" class="internalDFN"><code>"microphone"</code></a>, abort these sub steps and continue with the next device (if any).

        2.  Let deviceInfo be the result of <a href="#creating-a-device-info-object" id="ref-for-creating-a-device-info-object-1" class="internalDFN">creating a device info object</a> to represent device.

        3.  If device is the system default microphone, prepend deviceInfo to microphoneList. Otherwise, append deviceInfo to microphoneList.

    8.  Run the following sub steps for each discovered device in deviceList, device:

        1.  If device is not a camera, or document is not [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use) the feature identified by <a href="#dfn-camera" id="ref-for-dfn-camera-1" class="internalDFN"><code>"camera"</code></a>, abort these sub steps and continue with the next device (if any).

        2.  Let deviceInfo be the result of <a href="#creating-a-device-info-object" id="ref-for-creating-a-device-info-object-2" class="internalDFN">creating a device info object</a> to represent device.

        3.  If device is the system default camera, prepend deviceInfo to cameraList. Otherwise, append deviceInfo to cameraList.

    9.  If <a href="#device-information-can-be-exposed" id="ref-for-device-information-can-be-exposed-3" class="internalDFN">device information can be exposed</a> is `false`, run the following sub steps:

        1.  If microphoneList is not empty, truncate microphoneList to its first item.

        2.  If cameraList is not empty, truncate cameraList to its first item.

    10. Run the following sub steps for each discovered device in deviceList, device:

        1.  If device is a microphone or device is a camera, abort these sub steps and continue with the next device (if any).

        2.  Run the <a href="#device-exposure-decision-non-camera-microphone" id="ref-for-device-exposure-decision-non-camera-microphone-1" class="internalDFN">exposure decision algorithm for devices other than camera and microphone</a>, with device, microphoneList and cameraList as input. If the result of this algorithm is `false`, abort these sub steps and continue with the next device (if any).

        3.  Let deviceInfo be the result of <a href="#creating-a-device-info-object" id="ref-for-creating-a-device-info-object-3" class="internalDFN">creating a device info object</a> to represent device.

        4.  If device is the system default audio output, prepend deviceInfo to otherDeviceList. Otherwise, append deviceInfo to otherDeviceList.

    11. Append to resultList all devices of microphoneList in order.

    12. Append to resultList all devices of cameraList in order.

    13. Append to resultList all devices of otherDeviceList in order.

    14. Set <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-5" class="internalDFN"><code>[[storedDeviceList]]</code></a> to resultList.

    15. [resolve](https://webidl.spec.whatwg.org/#resolve) p with resultList.

3.  Return p.

Since this method returns persistent information across browsing sessions and origins via the availability of media capture devices, it adds to the fingerprinting surface exposed by the User Agent.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

As long as the [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) did not capture, this method will limit exposure to two bits of information: whether there is a camera and whether there is a microphone. A User Agent may mitigate this by pretending the system has a camera and a microphone, for instance until the [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) calls <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-17" class="internalDFN"><code>getUserMedia</code></a>`()` with constraints deemed reasonable.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

After the [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) started capture, it provides additional persistent cross-origin information via the list of all media capture devices, including their grouping and human readable labels associated with the capture devices, which further adds to the fingerprinting surface. A User Agent may limit exposure by sanitizing device labels. This could for instance mean removing user names found in labels, but keeping device manufacturer or model information. It is important that the sanitized labels allow users to identify the corresponding devices. <img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

#### 9.2.1 Access control model<a href="#access-control-model" class="self-link"></a>

The algorithm described above means that the access to media device information depends on whether or not the [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) did capture.

For camera and microphone devices, if the browsing context did not capture (i.e. <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-18" class="internalDFN"><code>getUserMedia</code></a>`()` was not called or never resolved successfully), the <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-8" class="internalDFN"><code>MediaDeviceInfo</code></a> object will contain a valid value for <a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-1" class="internalDFN"><code>kind</code></a> but empty strings for <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-4" class="internalDFN"><code>deviceId</code></a>, <a href="#dom-mediadeviceinfo-label" id="ref-for-dom-mediadeviceinfo-label-1" class="internalDFN"><code>label</code></a>, and <a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-2" class="internalDFN"><code>groupId</code></a>. Additionally, at most one device of each <a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-2" class="internalDFN"><code>kind</code></a> will be listed in <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-7" class="internalDFN"><code>enumerateDevices</code></a>`()` result.

Otherwise, the `MediaDeviceInfo` object will contain meaningful values for <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-5" class="internalDFN"><code>deviceId</code></a>, <a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-3" class="internalDFN"><code>kind</code></a>, <a href="#dom-mediadeviceinfo-label" id="ref-for-dom-mediadeviceinfo-label-2" class="internalDFN"><code>label</code></a>, and <a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-3" class="internalDFN"><code>groupId</code></a>. All available devices are listed in <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-8" class="internalDFN"><code>enumerateDevices</code></a>`()` result.

To perform creating a device info object to represent a discovered device, device, run the following steps:

1.  Let deviceInfo be a new <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-9" class="internalDFN"><code>MediaDeviceInfo</code></a> object to represent device.

2.  Initialize deviceInfo.<a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-4" class="internalDFN"><code>kind</code></a> for device.

3.  If deviceInfo.<a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-5" class="internalDFN"><code>kind</code></a> is equal to "videoinput" and <a href="#camera-information-can-be-exposed" id="ref-for-camera-information-can-be-exposed-1" class="internalDFN">camera information can be exposed</a> is `false`, return deviceInfo.

4.  If deviceInfo.<a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-6" class="internalDFN"><code>kind</code></a> is equal to "audioinput" and <a href="#microphone-information-can-be-exposed" id="ref-for-microphone-information-can-be-exposed-1" class="internalDFN">microphone information can be exposed</a> is `false`, return deviceInfo.

5.  Initialize deviceInfo.<a href="#dom-mediadeviceinfo-label" id="ref-for-dom-mediadeviceinfo-label-3" class="internalDFN"><code>label</code></a> for device.

6.  If a stored <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-6" class="internalDFN"><code>deviceId</code></a> exists for device, initialize deviceInfo.<a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-7" class="internalDFN"><code>deviceId</code></a> to that value. Otherwise, let deviceInfo.<a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-8" class="internalDFN"><code>deviceId</code></a> be a newly generated unique identifier as described under <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-9" class="internalDFN"><code>deviceId</code></a>.

7.  If device belongs to the same physical device as a device already represented for document, initialize deviceInfo.<a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-4" class="internalDFN"><code>groupId</code></a> to the <a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-5" class="internalDFN"><code>groupId</code></a> value of the existing <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-10" class="internalDFN"><code>MediaDeviceInfo</code></a> object. Otherwise, let deviceInfo.<a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-6" class="internalDFN"><code>groupId</code></a> be a newly generated unique identifier as described under <a href="#dom-mediadeviceinfo-groupid" id="ref-for-dom-mediadeviceinfo-groupid-7" class="internalDFN"><code>groupId</code></a>.

8.  Return deviceInfo

#### 9.2.2 Device information exposure<a href="#device-information-exposure" class="self-link"></a>

To perform a device enumeration can proceed check, run the following steps:

1.  If <a href="#device-information-can-be-exposed" id="ref-for-device-information-can-be-exposed-4" class="internalDFN">device information can be exposed</a> is `true`, return `true`.

2.  If the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) is [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) and [has focus](https://html.spec.whatwg.org/multipage/#gains-focus), return `true`.

3.  Return `false`.

To perform a device information can be exposed check, run the following steps:

1.  If <a href="#camera-information-can-be-exposed" id="ref-for-camera-information-can-be-exposed-2" class="internalDFN">camera information can be exposed</a> is `true`, return `true`.

2.  If <a href="#microphone-information-can-be-exposed" id="ref-for-microphone-information-can-be-exposed-2" class="internalDFN">microphone information can be exposed</a> is `true`, return `true`.

3.  Return `false`.

To perform a camera information can be exposed check, run the following steps:

1.  If any of the local devices of kind "videoinput" are attached to a live <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-112" class="internalDFN"><code>MediaStreamTrack</code></a> in the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document), return `true`.

2.  Return <a href="#dfn-canexposecamerainfo" id="ref-for-dfn-canexposecamerainfo-1" class="internalDFN"><code>[[canExposeCameraInfo]]</code></a>.

To perform a microphone information can be exposed check, run the following steps:

1.  If any of the local devices of kind "audioinput" are attached to a live <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-113" class="internalDFN"><code>MediaStreamTrack</code></a> in the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document), return `true`.

2.  Return <a href="#dfn-canexposemicrophoneinfo" id="ref-for-dfn-canexposemicrophoneinfo-1" class="internalDFN"><code>[[canExposeMicrophoneInfo]]</code></a>.

#### 9.2.3 Set device information exposure<a href="#set-device-information-exposure-0" class="self-link"></a>

To set the device information exposure, with a requestedTypes set and value of type boolean, run the following steps:

1.  If <a href="#dfn-video" id="ref-for-dfn-video-2" class="internalDFN"><code>"video"</code></a> is in requestedTypes and <a href="#dfn-canexposecamerainfo" id="ref-for-dfn-canexposecamerainfo-2" class="internalDFN"><code>[[canExposeCameraInfo]]</code></a> is not value, run the following sub steps:

    1.  Set <a href="#dfn-canexposecamerainfo" id="ref-for-dfn-canexposecamerainfo-3" class="internalDFN"><code>[[canExposeCameraInfo]]</code></a> to value.

    2.  Set <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-6" class="internalDFN"><code>[[storedDeviceList]]</code></a> to `null`.

2.  If <a href="#dfn-audio" id="ref-for-dfn-audio-3" class="internalDFN"><code>"audio"</code></a> is in requestedTypes and <a href="#dfn-canexposemicrophoneinfo" id="ref-for-dfn-canexposemicrophoneinfo-2" class="internalDFN"><code>[[canExposeMicrophoneInfo]]</code></a> is not value, run the following sub steps:

    1.  Set <a href="#dfn-canexposemicrophoneinfo" id="ref-for-dfn-canexposemicrophoneinfo-3" class="internalDFN"><code>[[canExposeMicrophoneInfo]]</code></a> to value.

    2.  Set <a href="#dfn-storeddevicelist" id="ref-for-dfn-storeddevicelist-7" class="internalDFN"><code>[[storedDeviceList]]</code></a> to `null`.

Note

A User Agent *MAY* at any point set the device information exposure back to `false`, for instance if the User Agent decides to revoke device access on a given browsing context.

#### 9.2.4 Exposure decision algorithm for devices other than camera and microphone<a href="#exposure-decision-algorithm-for-devices-other-than-camera-and-microphone" class="self-link"></a>

The exposure decision algorithm for devices other than camera and microphone takes a device, microphoneList and cameraList as input and returns a boolean to decide whether exposing the device to the web page or not.

By default, it returns `false`.

Other specifications can define the algorithm for specific device types.

### 9.3 Device Info<a href="#device-info" class="self-link"></a>

    WebIDL[Exposed=Window, SecureContext]
    interface MediaDeviceInfo {
      readonly attribute DOMString deviceId;
      readonly attribute MediaDeviceKind kind;
      readonly attribute DOMString label;
      readonly attribute DOMString groupId;
      [Default] object toJSON();
    };

#### Attributes<a href="#attributes-5" class="self-link"></a>

`deviceId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
The identifier of the represented device. The device *MUST* be uniquely identified by its identifier and its <a href="#dom-mediadeviceinfo-kind" id="ref-for-dom-mediadeviceinfo-kind-8" class="internalDFN"><code>kind</code></a>.

To to ensure stored identifiers are recognized, the identifier *MUST* be the same in documents of the same origin in [top-level browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context). In [nested browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#nested-browsing-context), the decision of whether or not the identifier is the same across documents, *MUST* follow the User Agent's partitioning rules for storage (such as [`localStorage`](https://html.spec.whatwg.org/multipage/webstorage.html#dom-localstorage)), if any, to not interfere with mitigations for cross-site correlation. If the identifier can uniquely identify the user, then it *MUST* be un-guessable in documents from other origins to prevent the identifier from being used to correlate the same user across different origins. An identifier can be reused across origins as long as it is not tied to the user and can be guessed by other means, like the User-Agent string.

If any local devices have been attached to a live <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-114" class="internalDFN"><code>MediaStreamTrack</code></a> in a page from this origin, or <a href="#stored-permissions" id="ref-for-stored-permissions-1" class="internalDFN">stored permission</a> to access local devices has been granted to this origin, then this identifier *MUST* be persisted, except as detailed below. Unique and stable identifiers let the application save, identify the availability of, and directly request specific sources, across multiple visits.

However, as long as no local device has been attached to a live MediaStreamTrack in a page from this origin, and no <a href="#stored-permissions" id="ref-for-stored-permissions-2" class="internalDFN">stored permission</a> to access local devices has been granted to this origin, then the User Agent *MAY* clear this identifier once the last browsing session from this origin has been closed. If the User Agent chooses not to clear the identifier in this condition, then it *MUST* provide for the user to visibly inspect and delete the identifier, like a cookie.

Since <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-11" class="internalDFN"><code>deviceId</code></a> may persist across browsing sessions and to reduce its potential as a fingerprinting mechanism, <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-12" class="internalDFN"><code>deviceId</code></a> is to be treated as other persistent storage mechanisms such as cookies \[<a href="#bib-cookies" class="bibref" title="HTTP State Management Mechanism">COOKIES</a>\], in that User Agents *MUST NOT* persist device identifiers for sites that are blocked from using cookies, and User Agents *MUST* rotate per-origin device identifiers when other persistent storage are cleared.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

`kind` of type <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-6" class="internalDFN"><code>MediaDeviceKind</code></a>, readonly  
The kind of the represented device.

`label` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
A label describing this device (for example "External USB Webcam"). This label is intended to allow the end user to tell the difference between devices. Applications can’t assume that the label contains any specific information, such as the device type or model. If the device has no associated label, then this attribute *MUST* return the empty string.

`groupId` of type [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString), readonly  
The group identifier of the represented device. Two devices have the same group identifier if they belong to the same physical device. For example, the audio input and output devices representing the speaker and microphone of the same headset have the same groupId.

The group identifier *MUST* be uniquely generated for each [document](https://dom.spec.whatwg.org/#concept-document).

#### Methods<a href="#methods-2" class="self-link"></a>

`toJSON`  
When called, run \[<a href="#bib-webidl" class="bibref" title="Web IDL Standard">WEBIDL</a>\]'s [default toJSON steps](https://webidl.spec.whatwg.org/#default-tojson-steps).

    WebIDLenum MediaDeviceKind {
      "audioinput",
      "audiooutput",
      "videoinput"
    };

`MediaDeviceKind` Enumeration description

`audioinput`

Represents an audio input device; for example a microphone.

`audiooutput`

Represents an audio output device; for example a pair of headphones.

`videoinput`

Represents a video input device; for example a webcam.

### 9.4 Input-specific Device Info<a href="#input-specific-device-info" class="self-link"></a>

The `InputDeviceInfo` interface gives access to the capabilities of the input device it represents.

    WebIDL[Exposed=Window]
    interface InputDeviceInfo : MediaDeviceInfo {
      MediaTrackCapabilities getCapabilities();
    };

#### Methods<a href="#methods-3" class="self-link"></a>

`getCapabilities`  
Returns a <a href="#dom-mediatrackcapabilities" id="ref-for-dom-mediatrackcapabilities-6" class="internalDFN"><code>MediaTrackCapabilities</code></a> object describing the primary audio or video track of a device's <a href="#dom-mediastream" id="ref-for-dom-mediastream-86" class="internalDFN"><code>MediaStream</code></a> (according to its <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-8" class="internalDFN"><code>kind</code></a> value), in the absence of any user-supplied constraints. These capabilities *MUST* be identical to those that would have been obtained by calling <a href="#dom-mediastreamtrack-getcapabilities" id="ref-for-dom-mediastreamtrack-getcapabilities-5" class="internalDFN"><code>getCapabilities</code></a>`()` on the first <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-115" class="internalDFN"><code>MediaStreamTrack</code></a> of this type in a <a href="#dom-mediastream" id="ref-for-dom-mediastream-87" class="internalDFN"><code>MediaStream</code></a> returned by `getUserMedia({deviceId: id})` where id is the value of the <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-13" class="internalDFN"><code>deviceId</code></a> attribute of this <a href="#dom-mediadeviceinfo" id="ref-for-dom-mediadeviceinfo-13" class="internalDFN"><code>MediaDeviceInfo</code></a>.

If no access has been granted to any local devices and this <a href="#dom-inputdeviceinfo" id="ref-for-dom-inputdeviceinfo-3" class="internalDFN"><code>InputDeviceInfo</code></a> has been filtered with respect to unique identifying information (see above description of <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-9" class="internalDFN"><code>enumerateDevices</code></a>`()` result), then this method returns an empty dictionary.

10. Obtaining local multimedia content<a href="#local-content" class="self-link"></a>
-------------------------------------------------------------------------------------

This section extends [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) and <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-11" class="internalDFN"><code>MediaDevices</code></a> with APIs to request permission to access media input devices available to the User Agent.

Alternatively, a local <a href="#dom-mediastream" id="ref-for-dom-mediastream-88" class="internalDFN"><code>MediaStream</code></a> can be captured from certain types of DOM elements, such as the video element \[<a href="#bib-mediacapture-fromelement" class="bibref" title="Media Capture from DOM Elements">mediacapture-fromelement</a>\]. This can be useful for automated testing.

### 10.1 Legacy Interface Extensions<a href="#legacy-interface-extensions" class="self-link"></a>

Note

The definition of getUserMedia() in this section reflects two major changes from the method definition that has existed here for many months.

First, the official definition for the getUserMedia() method, and the one which developers are encouraged to use, is now at <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-12" class="internalDFN"><code>MediaDevices</code></a>. This decision reflected consensus as long as the original API remained available here under the Navigator object for backwards compatibility reasons, since the working group acknowledges that early users of these APIs have been encouraged to define getUserMedia as "var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;" in order for their code to be functional both before and after official implementations of getUserMedia() in popular User Agents. To ensure functional equivalence, the getUserMedia() method here is defined in terms of the method under MediaDevices.

Second, the decision to change all other callback-based methods in the specification to be based on Promises instead required that the navigator.getUserMedia() definition reflect this in its use of navigator.mediaDevices.getUserMedia(). Because navigator.getUserMedia() is now the only callback-based method remaining in the specification, there is ongoing discussion as to a) whether it still belongs in the specification, and b) if it does, whether its syntax should remain callback-based or change in some way to use Promises. Input on these questions is encouraged, particularly from developers actively using today's implementations of this functionality.

Note that the other methods that changed from a callback-based syntax to a Promises-based syntax were not considered to have been implemented widely enough in any form to have to consider legacy usage.

    WebIDLpartial interface Navigator {
      [SecureContext] undefined getUserMedia(MediaStreamConstraints constraints,
                                        NavigatorUserMediaSuccessCallback successCallback,
                                        NavigatorUserMediaErrorCallback errorCallback);
    };

#### Methods<a href="#methods-4" class="self-link"></a>

`getUserMedia`  
Prompts the user for permission to use their Web cam or other video or audio input.

The constraints argument is a dictionary of type <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-2" class="internalDFN"><code>MediaStreamConstraints</code></a>.

The successCallback will be invoked with a suitable <a href="#dom-mediastream" id="ref-for-dom-mediastream-89" class="internalDFN"><code>MediaStream</code></a> object as its argument if the user accepts valid tracks as described in <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-19" class="internalDFN"><code>getUserMedia</code></a>`()` on <a href="#dom-navigator-mediadevices" id="ref-for-dom-navigator-mediadevices-4" class="internalDFN"><code>MediaDevices</code></a>.

The errorCallback will be invoked if there is a failure in finding valid tracks or if the user denies permission, as described in <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-20" class="internalDFN"><code>getUserMedia</code></a>`()` on <a href="#dom-navigator-mediadevices" id="ref-for-dom-navigator-mediadevices-5" class="internalDFN"><code>MediaDevices</code></a>.

When the <a href="#dom-navigator-getusermedia" id="ref-for-dom-navigator-getusermedia-2" class="internalDFN"><code>getUserMedia</code></a>`()` method is called, the User Agent *MUST* run the following steps:

1.  Let constraints be the method's first argument.

2.  Let successCallback be the callback indicated by the method's second argument.

3.  Let errorCallback be the callback indicated by the method's third argument.

4.  Run the steps specified by the <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-21">getUserMedia() algorithm</a> with constraints as the argument, and let p be the resulting promise.

5.  [Upon fulfillment](https://webidl.spec.whatwg.org/#upon-fulfillment) of p with value stream, run the following step:

    1.  Invoke successCallback with stream as the argument.

6.  [Upon rejection](https://webidl.spec.whatwg.org/#upon-rejection) of p with reason r, run the following step:

    1.  Invoke errorCallback with r as the argument.

### 10.2 <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-13" class="internalDFN"><code>MediaDevices</code></a> Interface Extensions<a href="#mediadevices-interface-extensions" class="self-link"></a>

Note

The definition of <a href="#dom-navigator-getusermedia" id="ref-for-dom-navigator-getusermedia-3" class="internalDFN"><code>getUserMedia</code></a>`()` in this section reflects two major changes from the method definition that has existed under [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) for many months.

First, the official definition for the <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-22" class="internalDFN"><code>getUserMedia</code></a>`()` method, and the one which developers are encouraged to use, is now the one defined here under <a href="#dom-mediadevices" id="ref-for-dom-mediadevices-14" class="internalDFN"><code>MediaDevices</code></a>. This decision reflected consensus as long as the original API remained available at <a href="#dom-navigator-getusermedia" id="ref-for-dom-navigator-getusermedia-4" class="internalDFN"><code>Navigator.getUserMedia</code></a> under the [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) object for backwards compatibility reasons, since the working group acknowledges that early users of these APIs have been encouraged to define getUserMedia as "var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;" in order for their code to be functional both before and after official implementations of getUserMedia() in popular User Agents. To ensure functional equivalence, the getUserMedia() method under [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) is defined in terms of the method here.

Second, the method defined here is Promises-based, while the one defined under [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator) is currently still callback-based. Developers expecting to find getUserMedia() defined under Navigator are strongly encouraged to read the detailed Note given there.

The <a href="#dom-mediadevices-getsupportedconstraints" id="ref-for-dom-mediadevices-getsupportedconstraints-1" class="internalDFN"><code>getSupportedConstraints</code></a> method is provided to allow the application to determine which constraints the User Agent recognizes. Applications may need this information to use <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-5" class="internalDFN">required constraints</a> reliably or get predictable results from combinatory logic in <a href="#dfn-advanced-constraints" id="ref-for-dfn-advanced-constraints-3" class="internalDFN">advanced constraints</a>.

    WebIDLpartial interface MediaDevices {
      MediaTrackSupportedConstraints getSupportedConstraints();
      Promise<MediaStream> getUserMedia(optional MediaStreamConstraints constraints = {});
    };

#### Methods<a href="#methods-5" class="self-link"></a>

`getSupportedConstraints`  
Returns a dictionary whose members are the constrainable properties known to the User Agent. A supported constrainable property *MUST* be represented and any constrainable properties not supported by the User Agent *MUST NOT* be present in the returned dictionary. The values returned represent what the User Agent implements and will not change during a browsing session.

getUserMedia  
Prompts the user for permission to use their Web cam or other video or audio input.

The constraints argument is a dictionary of type <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-4" class="internalDFN"><code>MediaStreamConstraints</code></a>.

This method returns a promise. The promise will be [fulfilled](https://webidl.spec.whatwg.org/#upon-fulfillment) with a suitable <a href="#dom-mediastream" id="ref-for-dom-mediastream-91" class="internalDFN"><code>MediaStream</code></a> object if the user accepts valid tracks as described below.

The promise will be [rejected](https://webidl.spec.whatwg.org/#reject) if there is a failure in finding valid tracks or if the user denies permission, as described below.

When the `getUserMedia()` method is called, the User Agent *MUST* run the following steps:

1.  Let constraints be the method's first argument.

2.  Let requestedMediaTypes be the set of media types in constraints with either a dictionary value or a value of `true`.

3.  If requestedMediaTypes is the empty set, return a promise [rejected](https://webidl.spec.whatwg.org/#reject) with a [`TypeError`](https://webidl.spec.whatwg.org/#exceptiondef-typeerror). The word "optional" occurs in the WebIDL due to WebIDL rules, but the argument *MUST* be supplied in order for the call to succeed.

4.  If the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) is NOT [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active), return a promise [rejected](https://webidl.spec.whatwg.org/#reject) with a [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) object whose [`name`](https://webidl.spec.whatwg.org/#dom-domexception-name) attribute has the value "[`InvalidStateError`](https://webidl.spec.whatwg.org/#invalidstateerror)".

5.  Let p be a new promise.

6.  Run the following steps in parallel:

    1.  The User Agent *MUST* wait to proceed to the next step until the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [responsible document](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-document) is [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) and [has focus.](https://html.spec.whatwg.org/multipage/#gains-focus)

    2.  Let finalSet be an (initially) empty set.

    3.  For each media type kind in requestedMediaTypes, run the following steps:

        1.  For each possible source for media of type kind, construct an unconstrained MediaStreamTrack with that source as its source.

            Call this set of tracks the candidateSet.

            If candidateSet is the empty set, [reject](https://webidl.spec.whatwg.org/#reject) p with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) object whose [`name`](https://webidl.spec.whatwg.org/#dom-domexception-name) attribute has the value "[`NotFoundError`](https://webidl.spec.whatwg.org/#notfounderror)" and abort these steps.

        2.  If the value of the kind entry of constraints is `true`, set CS to the empty constraint set (no constraint). Otherwise, continue with CS set to the value of the kind entry of constraints.
        3.  Remove any constrainable property inside of CS that are not defined for <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-116" class="internalDFN"><code>MediaStreamTrack</code></a> objects of type kind. This means that audio-only constraints inside of <a href="#dfn-video" id="ref-for-dfn-video-3" class="internalDFN"><code>"video"</code></a> and video-only constraints inside of <a href="#dfn-audio" id="ref-for-dfn-audio-4" class="internalDFN"><code>"audio"</code></a> are simply ignored rather than causing `OverconstrainedError`.
        4.  If CS contains a member that is a <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-6" class="internalDFN">required constraint</a> and whose name is not in the list of <a href="#dfn-allowed-required-constraints-for-device-selection" id="ref-for-dfn-allowed-required-constraints-for-device-selection-1" class="internalDFN">allowed required constraints for device selection</a>, then [reject](https://webidl.spec.whatwg.org/#reject) p with a [`TypeError`](https://webidl.spec.whatwg.org/#exceptiondef-typeerror), and abort these steps.

        5.  Run the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-2" class="internalDFN">SelectSettings</a> algorithm on each track in candidateSet with CS as the constraint set. If the algorithm returns `undefined`, remove the track from candidateSet. This eliminates devices unable to satisfy the constraints, by verifying that at least one settings dictionary exists that satisfies the constraints.

            If candidateSet is the empty set, let failedConstraint be any <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-7" class="internalDFN">required constraint</a> whose fitness distance was infinity for all settings dictionaries examined while executing the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-3" class="internalDFN">SelectSettings</a> algorithm, or `""` if there isn't one, and jump to the step labeled *Constraint Failure* below.

            This error gives information about what the underlying device is not capable of producing, before the user has given any authorization to any device, and can thus be used as a fingerprinting surface.<img src="images/fingerprint.png" alt="(This is a fingerprinting vector.)" width="15" height="21" />

        6.  Read the current [permission state](https://www.w3.org/TR/permissions/#dfn-permission-state) for all candidate devices in candidateSet that are not attached to a live <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-117" class="internalDFN"><code>MediaStreamTrack</code></a> in the current browsing context. Remove from candidateSet any device for which the permission state is "[`denied`](https://www.w3.org/TR/permissions/#dom-permissionstate-denied)".

            If candidateSet is now empty, indicating that all devices of this type are in state "[`denied`](https://www.w3.org/TR/permissions/#dom-permissionstate-denied)", jump to the step labeled *PermissionFailure* below.

        7.  Optionally, e.g., based on a previously-established user preference, for security reasons, or due to platform limitations, jump to the step labeled *Permission Failure* below.

        8.  Add all tracks from candidateSet to finalSet.

    4.  Let stream be a new and empty <a href="#dom-mediastream" id="ref-for-dom-mediastream-92" class="internalDFN"><code>MediaStream</code></a> object.

    5.  For each media type kind in requestedMediaTypes, run the following sub steps, preferably at the same time:

        Note

        User Agents are encouraged to bundle concurrent requests for different kinds of media into a single user-facing permission prompt.

        1.  [Request permission to use](https://www.w3.org/TR/permissions/#dfn-request-permission-to-use) a [`PermissionDescriptor`](https://www.w3.org/TR/permissions/#dom-permissiondescriptor) with its [`name`](https://www.w3.org/TR/permissions/#dom-permissiondescriptor-name) member set to the permission name associated with kind (e.g. "[`camera`](https://www.w3.org/TR/permissions/#dom-permissionname-camera)" for <a href="#dfn-video" id="ref-for-dfn-video-4" class="internalDFN"><code>"video"</code></a>, "[`microphone`](https://www.w3.org/TR/permissions/#dom-permissionname-microphone)" for <a href="#dfn-audio" id="ref-for-dfn-audio-5" class="internalDFN"><code>"audio"</code></a>), and, optionally, consider its deviceId member set to any appropriate device's deviceId, while considering all devices attached to a live and <a href="#dfn-same-permission" id="ref-for-dfn-same-permission-1" class="internalDFN">same-permission</a> <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-118" class="internalDFN"><code>MediaStreamTrack</code></a> in the current [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) to have permission status "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)", resulting in a set of provided media. Same-permission in this context means a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-119" class="internalDFN"><code>MediaStreamTrack</code></a> that required the same level of permission to obtain as what is being requested (e.g. not isolated).

            When asking the user’s permission, the User Agent *MUST* disclose whether permission will be granted only to the device chosen, or to all devices of that kind.

            Let track be the provided media, which *MUST* be precisely one track of type kind from finalSet. The decision of which track to choose from the finalSet is completely up to the User Agent and may be determined by asking the user. Once selected, the source of the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-120" class="internalDFN"><code>MediaStreamTrack</code></a> *MUST NOT* change.

            The User Agent *SHOULD* use the value of the computed <a href="#dfn-fitness-distance" id="ref-for-dfn-fitness-distance-1" class="internalDFN">fitness distance</a> from the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-4" class="internalDFN">SelectSettings</a> algorithm as an input to the selection algorithm. However, it *MAY* also use other internally-available information about the devices, such as user preference.

            User Agents are encouraged to default to using the user's primary or system default device for kind (when possible). User Agents *MAY* allow users to use any media source, including pre-recorded media files.

        2.  If the user never responds, this algorithm stalls on this step.

        3.  If the result of the request is "[`denied`](https://www.w3.org/TR/permissions/#dom-permissionstate-denied)", jump to the step labeled *Permission Failure* below.

        4.  The result of the request is "[`granted`](https://www.w3.org/TR/permissions/#dom-permissionstate-granted)". If a hardware error such as an OS/program/webpage lock prevents access, remove track from finalSet. If finalSet has no track of type kind, [reject](https://webidl.spec.whatwg.org/#reject) p with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) object whose [`name`](https://webidl.spec.whatwg.org/#dom-domexception-name) attribute has the value "[`NotReadableError`](https://webidl.spec.whatwg.org/#notreadableerror)" and abort these steps. Otherwise, restart these sub steps with the updated finalSet.

            If device access fails for any reason other than those listed above, remove track from finalSet. If finalSet has no track of type kind, [reject](https://webidl.spec.whatwg.org/#reject) p with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) object whose [`name`](https://webidl.spec.whatwg.org/#dom-domexception-name) attribute has the value "[`AbortError`](https://webidl.spec.whatwg.org/#aborterror)" and abort these steps. Otherwise, restart these sub steps with the updated finalSet.

        5.  Using the granted device's deviceId, deviceId, set <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-4" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] to `true`, if it isn’t already `true`, and set the <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-5" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] to `true`, if it isn’t already `true`.

        6.  Add track to stream's track set.

    6.  Run the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-3" class="internalDFN">ApplyConstraints algorithm</a> on all tracks in stream with the appropriate constraints. If any of them returns something other than `undefined`, let failedConstraint be that result and jump to the step labeled *Constraint Failure* below.

    7.  <a href="#set-device-information-exposure" id="ref-for-set-device-information-exposure-1" class="internalDFN">Set the device information exposure</a> with `requestedMediaTypes` and `true`.

    8.  [resolve](https://webidl.spec.whatwg.org/#resolve) p with stream and abort these steps.

    9.  *Permission Failure*: [Reject](https://webidl.spec.whatwg.org/#reject) p with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) object whose [`name`](https://webidl.spec.whatwg.org/#dom-domexception-name) attribute has the value "[`NotAllowedError`](https://webidl.spec.whatwg.org/#notallowederror)".

    10. *Constraint Failure*: Let message be either `undefined` or an informative human-readable message, let constraint be failedConstraint if <a href="#device-information-can-be-exposed" id="ref-for-device-information-can-be-exposed-5" class="internalDFN">device information can be exposed</a> is `true`, or `""` otherwise, and then [reject](https://webidl.spec.whatwg.org/#reject) p with a new `OverconstrainedError` created by calling `OverconstrainedError(constraint,                       message)`.

7.  Return p.

Note

In the algorithm above, constraints are checked twice - once at device selection, and once after access approval. Time may have passed between those checks, so it is conceivable that the selected device is no longer suitable. In this case, a NotReadableError will result.

The allowed required constraints for device selection contains the following constraint names: <a href="#dfn-width" id="ref-for-dfn-width-2" class="internalDFN">width</a>, <a href="#dfn-height" id="ref-for-dfn-height-2" class="internalDFN">height</a>, <a href="#dfn-aspectratio" id="ref-for-dfn-aspectratio-2" class="internalDFN">aspectRatio</a>, <a href="#dfn-framerate" id="ref-for-dfn-framerate-1" class="internalDFN">frameRate</a>, <a href="#dfn-facingmode" id="ref-for-dfn-facingmode-1" class="internalDFN">facingMode</a>, <a href="#dfn-resizemode" id="ref-for-dfn-resizemode-1" class="internalDFN">resizeMode</a>, <a href="#dfn-samplerate" id="ref-for-dfn-samplerate-1" class="internalDFN">sampleRate</a>, <a href="#dfn-samplesize" id="ref-for-dfn-samplesize-1" class="internalDFN">sampleSize</a>, <a href="#dfn-echocancellation" id="ref-for-dfn-echocancellation-1" class="internalDFN">echoCancellation</a>, <a href="#dfn-autogaincontrol" id="ref-for-dfn-autogaincontrol-1" class="internalDFN">autoGainControl</a>, <a href="#dfn-noisesuppression" id="ref-for-dfn-noisesuppression-1" class="internalDFN">noiseSuppression</a>, <a href="#dfn-latency" id="ref-for-dfn-latency-1" class="internalDFN">latency</a>, <a href="#dfn-channelcount" id="ref-for-dfn-channelcount-1" class="internalDFN">channelCount</a>, <a href="#dfn-deviceid" id="ref-for-dfn-deviceid-4" class="internalDFN">deviceId</a>, <a href="#dfn-groupid" id="ref-for-dfn-groupid-1" class="internalDFN">groupId</a>.

### 10.3 <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-5" class="internalDFN"><code>MediaStreamConstraints</code></a><a href="#mediastreamconstraints" class="self-link"></a>

The `MediaStreamConstraints` dictionary is used to instruct the User Agent what sort of <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-121" class="internalDFN"><code>MediaStreamTrack</code></a>s to include in the <a href="#dom-mediastream" id="ref-for-dom-mediastream-93" class="internalDFN"><code>MediaStream</code></a> returned by <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-24" class="internalDFN"><code>getUserMedia()</code></a>.

    WebIDLdictionary MediaStreamConstraints {
      (boolean or MediaTrackConstraints) video = false;
      (boolean or MediaTrackConstraints) audio = false;
    };

#### Dictionary <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-7" class="idlType internalDFN"><code>MediaStreamConstraints</code></a> Members<a href="#dictionary-mediastreamconstraints-members" class="self-link"></a>

`video` of type `(boolean` or <a href="#dom-mediatrackconstraints" id="ref-for-dom-mediatrackconstraints-7" class="internalDFN"><code>MediaTrackConstraints</code></a>), defaulting to `false`  
If `true`, it requests that the returned <a href="#dom-mediastream" id="ref-for-dom-mediastream-94" class="internalDFN"><code>MediaStream</code></a> contain a video track. If a <a href="#dom-constraints" id="ref-for-dom-constraints-4" class="internalDFN"><code>Constraints</code></a> structure is provided, it further specifies the nature and settings of the video Track. If `false`, the <a href="#dom-mediastream" id="ref-for-dom-mediastream-95" class="internalDFN"><code>MediaStream</code></a> *MUST NOT* contain a video Track.

`audio` of type `(boolean` or <a href="#dom-mediatrackconstraints" id="ref-for-dom-mediatrackconstraints-8" class="internalDFN"><code>MediaTrackConstraints</code></a>), defaulting to `false`  
If `true`, it requests that the returned <a href="#dom-mediastream" id="ref-for-dom-mediastream-96" class="internalDFN"><code>MediaStream</code></a> contain an audio track. If a <a href="#dom-constraints" id="ref-for-dom-constraints-5" class="internalDFN"><code>Constraints</code></a> structure is provided, it further specifies the nature and settings of the audio Track. If `false`, the <a href="#dom-mediastream" id="ref-for-dom-mediastream-97" class="internalDFN"><code>MediaStream</code></a> *MUST NOT* contain an audio Track.

### 10.4 `NavigatorUserMediaSuccessCallback`<a href="#navigatorusermediasuccesscallback" class="self-link"></a>

    WebIDLcallback NavigatorUserMediaSuccessCallback = undefined (MediaStream stream);

#### Callback <a href="#dom-navigatorusermediasuccesscallback" id="ref-for-dom-navigatorusermediasuccesscallback-3" class="idlType internalDFN"><code>NavigatorUserMediaSuccessCallback</code></a> Parameters<a href="#callback-navigatorusermediasuccesscallback-parameters" class="self-link"></a>

stream of type <a href="#dom-mediastream" id="ref-for-dom-mediastream-99" class="internalDFN"><code>MediaStream</code></a>  
<a href="#dom-mediastream" id="ref-for-dom-mediastream-100" class="internalDFN"><code>MediaStream</code></a> object representing the stream to which the user granted permission as described in the [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator).<a href="#dom-navigator-getusermedia" id="ref-for-dom-navigator-getusermedia-5" class="internalDFN"><code>getUserMedia</code></a> algorithm.

### 10.5 `NavigatorUserMediaErrorCallback`<a href="#navigatorusermediaerrorcallback" class="self-link"></a>

    WebIDLcallback NavigatorUserMediaErrorCallback = undefined (DOMException error);

#### Callback <a href="#dom-navigatorusermediaerrorcallback" id="ref-for-dom-navigatorusermediaerrorcallback-3" class="idlType internalDFN"><code>NavigatorUserMediaErrorCallback</code></a> Parameters<a href="#callback-navigatorusermediaerrorcallback-parameters" class="self-link"></a>

error of type [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException)  
Error in obtaining a <a href="#dom-mediastream" id="ref-for-dom-mediastream-101" class="internalDFN"><code>MediaStream</code></a> as described in the failure steps of the [`Navigator`](https://html.spec.whatwg.org/multipage/system-state.html#navigator).<a href="#dom-navigator-getusermedia" id="ref-for-dom-navigator-getusermedia-6" class="internalDFN"><code>getUserMedia</code></a> algorithm.

### 10.6 Implementation Suggestions<a href="#implementation-suggestions" class="self-link"></a>

*This section is non-normative.*

<a href="#resource-reservation" class="marker self-link">Best Practice 1</a>: <span id="resource-reservation" class="practicelab">Resource reservation</span>

The User Agent is encouraged to reserve resources when it has determined that a given call to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-25" class="internalDFN"><code>getUserMedia()</code></a> will be successful. It is preferable to reserve the resource prior to resolving the returned promise. Subsequent calls to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-26" class="internalDFN"><code>getUserMedia()</code></a> (in this page or any other) should treat the resource that was previously allocated, as well as resources held by other applications, as busy. Resources marked as busy should not be provided as sources to the current web page, unless specified by the user. Optionally, the User Agent may choose to provide a stream sourced from a busy source but only to a page whose origin matches the owner of the original stream that is keeping the source busy.

This document recommends that in the permission grant dialog or device selection interface (if one is present), the user be allowed to select any available hardware as a source for the stream requested by the page (provided the resource is able to fulfill any specified <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-8" class="internalDFN">required constraints</a>). Although not specifically recommended as best practice, note that some User Agents may support the ability to substitute a video or audio source with local files and other media. A file picker may be used to provide this functionality to the user.

This document also recommends that the user be shown all resources that are currently busy as a result of prior calls to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-27">getUserMedia()</a> (in this page or any other page that is still alive) and be allowed to terminate that stream and utilize the resource for the current page instead. If possible in the current operating environment, it is also suggested that resources currently held by other applications be presented and treated in the same manner. If the user chooses this option, the track corresponding to the resource that was provided to the page whose stream was affected must be removed.

<a href="#stored-permissions" id="ref-for-stored-permissions-3" class="marker self-link">Best Practice 2</a>: Stored Permission s

When permission is requested for a device, the User Agent may choose to store this permission for later use by the same origin, so that the user does not need to grant permission again at a later time. It is a User Agent choice whether it offers functionality to store permission to each device separately, all devices of a given class, or all devices; the choice needs to be apparent to the user, and permission must have been granted for the entire set whose permission is being stored, e.g., to store permission to use all cameras the user must have given permission to use all cameras and not just one.

As described, this specification does not dictate whether or not granting permission results in a stored permission. When permission is not stored, permission will last only until such time as all MediaStreamTracks sourced from that device have been stopped.

<a href="#handling-devices" class="marker self-link">Best Practice 3</a>: <span id="handling-devices" class="practicelab">Handling multiple devices</span>

A <a href="#dom-mediastream" id="ref-for-dom-mediastream-102" class="internalDFN"><code>MediaStream</code></a> may contain more than one video and audio track. This makes it possible to include video from two or more webcams in a single stream object, for example. However, the current API does not allow a page to express a need for multiple video streams from independent sources.

It is recommended for multiple calls to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-28">getUserMedia()</a> from the same page to be allowed as a way for pages to request multiple discrete video and/or audio streams.

Note also that if multiple <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-29">getUserMedia()</a> calls are done by a page, the order in which they request resources, and the order in which they complete, is not constrained by this specification.

A single call to <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-30">getUserMedia()</a> will always return a stream with either zero or one audio tracks, and either zero or one video tracks. If a script calls <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-31">getUserMedia()</a> multiple times before reaching a stable state, this document advises the UI designer that the permission dialogs should be merged, so that the user can give permission for the use of multiple cameras and/or media sources in one dialog interaction. The constraints on each getUserMedia call can be used to decide which stream gets which media sources.

<a href="#generating-deviceids" class="marker self-link">Best Practice 4</a>: <span id="generating-deviceids" class="practicelab">Generating deviceIds</span>

An efficient practice for generating a <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-14" class="internalDFN"><code>deviceId</code></a> is to generate a cryptographic hash from a private key + (origin or origin + top-level origin, based on the user agents' partitioning rules) + salt + device's underlying (hardware) id in the driver, and present the resulting hash as an alphanumeric string. Using 32 bits or fewer for the hash is recommended, but not much lower, to avoid risk of collision.

A lower-entropy alternative, at the cost of storage, is to assign the numbers 0 through 255 randomly to each new device encountered for each origin or origin + top-level origin, based on the User Agent's partitioning rules, retiring the number that hasn't been seen the longest if numbers run out.

<a href="#muting-devices" class="marker self-link">Best Practice 5</a>: <span id="muting-devices" class="practicelab">Device muting initiated by User Agent</span>

A track sourced by a camera or microphone may be forcibly <a href="#track-muted" id="ref-for-track-muted-8" class="internalDFN">muted</a> by a User Agent at any time, in order to manage a user's privacy. However, doing so may create web compatibility issues, as well as leak information about user activity, so caution is advised.

Best practice is to <a href="#track-muted" id="ref-for-track-muted-9" class="internalDFN">mute</a> a camera or microphone track in the following instances:

-   An OS-level event for which the User Agent already suspends media playback globally, but JavaScript is not suspended. The rationale is users may otherwise be surprised if capture were to continue in this situation (unless they've intentionally configured it this way). If the OS-level event already causes frames to stop coming in on the track, then no new information of user activity is revealed by this. Even when this is not the case, revealing that capture is ending seems like a reasonable privacy tradeoff compared to continuing capture in situations that may surprise users.

-   A web page [without focus](https://html.spec.whatwg.org/multipage/#gains-focus) <a href="#track-enabled" id="ref-for-track-enabled-8" class="internalDFN">re-enables</a> a track when all tracks from that source are <a href="#track-enabled" id="ref-for-track-enabled-9" class="internalDFN">disabled</a>, in order to delay resumption of capture until the page [gains focus](https://html.spec.whatwg.org/multipage/#gains-focus).

Best practice is to <a href="#track-muted" id="ref-for-track-muted-10" class="internalDFN">unmute</a> a camera or microphone track it previously <a href="#track-muted" id="ref-for-track-muted-11" class="internalDFN">muted</a>, in the following instances:

-   An OS-level event for which the User Agent already resumes media playback globally, *and* the page is visible to the user (e.g. not during a lock screen). User Agents may defer such action if it determines significant time has passed that may jeopardize a user's awareness of the earlier capture session.

-   A web page [gains focus](https://html.spec.whatwg.org/multipage/#gains-focus) and has one or more <a href="#track-enabled" id="ref-for-track-enabled-10" class="internalDFN">enabled</a> tracks that are also <a href="#track-muted" id="ref-for-track-muted-12" class="internalDFN">muted</a>.

11. Constrainable Pattern<a href="#constrainable-interface" class="self-link"></a>
----------------------------------------------------------------------------------

The Constrainable pattern allows applications to inspect and adjust the properties of objects implementing it (the constrainable object). It is broken out as a separate set of definitions so that it can be referred to by other specifications. The core concept is the Capability, which consists of a constrainable property of an object and the set of its possible values, which may be specified either as a range or as an enumeration. For example, a camera might be capable of framerates (a property) between 20 and 50 frames per second (a range) and may be able to be positioned (a property) facing towards the user, away from the user, or to the left or right of the user (an enumerated set). The application can examine a constrainable property's supported Capabilities via the `getCapabilities()` accessor.

The application can select the (range of) values it wants for an object's Capabilities by means of basic and/or advanced ConstraintSets and the `applyConstraints()` method. A ConstraintSet consists of the names of one or more properties of the object plus the desired value (or a range of desired values) for each property. Each of those property/value pairs can be considered to be an individual constraint. For example, the application may set a ConstraintSet containing two constraints, the first stating that the framerate of a camera be between 30 and 40 frames per second (a range) and the second that the camera should be facing the user (a specific value). How the individual constraints interact depends on whether and how they are given in the basic Constraint structure, which is a ConstraintSet with an additional 'advanced' property, or whether they are in a ConstraintSet in the advanced list. The behavior is as follows: all 'min', 'max', and 'exact' constraints in the basic Constraint structure are together treated as the <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-9" class="internalDFN">required constraints</a>, and if it is not possible to satisfy simultaneously all of those individual constraints for the indicated property names, the User Agent *MUST* [reject](https://webidl.spec.whatwg.org/#reject) the returned promise. Otherwise, it must apply the required constraints. Next, it will consider any ConstraintSets given in the `advanced` list, in the order in which they are specified, and will try to satisfy/apply each complete ConstraintSet (i.e., all constraints in the ConstraintSet together), but will skip a ConstraintSet if and only if it cannot satisfy/apply it in its entirety. Next, the User Agent *MUST* attempt to apply, individually, any 'ideal' constraints or a constraint given as a bare value for the property (referred to as <a href="#dfn-optional-basic-constraints" id="ref-for-dfn-optional-basic-constraints-1" class="internalDFN">optional basic constraints</a>). Of these properties, it *MUST* satisfy the largest number that it can, in any order. Finally, the User Agent *MUST* [resolve](https://webidl.spec.whatwg.org/#resolve) the returned promise.

Note

Any constraint provided via this API will only be considered if the given constrainable property is supported by the User Agent. JavaScript application code is expected to first check, via `getSupportedConstraints()`, that all the named properties that are used are supported by the User Agent. The reason for this is that WebIDL drops any unsupported names from the dictionary holding the constraints, so the User Agent does not see them and the unsupported names end up being silently ignored. This will cause confusing programming errors as the JavaScript code will be setting constraints but the User Agent will be ignoring them. User Agents that support (recognize) the name of a required constraint but cannot satisfy it will generate an error, while User Agents that do not support the constrainable property will not generate an error.

The following examples may help to understand how constraints work. The first shows a basic Constraint structure. Three constraints are given, each of which the User Agent will attempt to satisfy individually. Depending upon the resolutions available for this camera, it is possible that not all three constraints can be satisfied at the same time. If so, the User Agent will satisfy two if it can, or only one if not even two constraints can be satisfied together. Note that if not all three can be satisfied simultaneously, it is possible that there is more than one combination of two constraints that could be satisfied. If so, the User Agent will choose.

<a href="#example-1" class="self-link">Example 1</a>

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1280,
        height: 720,
        aspectRatio: 3/2
      }
    });

This next example adds a small bit of complexity. The ideal values are still given for width and height, but this time with minimum requirements on each as well as a minimum frameRate that must be satisfied. If it cannot satisfy the frameRate, width or height minimum it will [reject](https://webidl.spec.whatwg.org/#reject) the promise. Otherwise, it will try to satisfy the width, height, and aspectRatio target values as well and then [resolve](https://webidl.spec.whatwg.org/#resolve) the promise.

<a href="#example-2" class="self-link">Example 2</a>

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: {min: 640, ideal: 1280},
          height: {min: 480, ideal: 720},
          aspectRatio: 3/2,
          frameRate: {min: 20}
        }
      });
    } catch (error) {
      if (error.name != "OverconstrainedError") {
        throw error;
      }
      // Overconstrained. Try again with a different combination (no prompt was shown)
    }

This example illustrates the full control possible with the Constraints structure by adding the 'advanced' property. In this case, the User Agent behaves the same way with respect to the required constraints, but before attempting to satisfy the ideal values it will process the 'advanced' list. In this example the 'advanced' list contains two ConstraintSets. The first specifies width and height constraints, and the second specifies an aspectRatio constraint. Note that in the advanced list, these bare values are treated as 'exact' values. This example represents the following: "I need my video to be at least 640 pixels wide and at least 480 pixels high. My preference is for precisely 1920x1280, but if you can't give me that, give me an aspectRatio of 4x3 if at all possible. If even that is not possible, give me a resolution as close to 1280x720 as possible."

<a href="#example-3" class="self-link">Example 3</a>

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: {min: 640, ideal: 1280},
          height: {min: 480, ideal: 720},
          frameRate: {min: 30},
          advanced: [
            {width: 1920, height: 1280},
            {aspectRatio: 4/3},
            {frameRate: {min: 50}},
            {frameRate: {min: 40}}
          ]
        }
      });
    } catch (error) {
      if (error.name != "OverconstrainedError") {
        throw error;
      }
      // Overconstrained. Try again with a different combination (no prompt was shown)
    }

The ordering of advanced ConstraintSets is significant. In the preceding example it is impossible to satisfy both the 1920x1280 ConstraintSet and the 4x3 aspect ratio ConstraintSet at the same time. Since the 1920x1280 occurs first in the list, the User Agent will attempt to satisfy it first. Application authors can therefore implement a backoff strategy by specifying multiple advanced ConstraintSets for the same property. The application also specifies two more advanced ConstraintSets, the first asking for a frame rate greater than 50, the second asking for a frame rate greater than 40. If the User Agent is capable of setting a frame rate greater than 50, it will (and the subsequent ConstraintSet will be trivially satisfied). However, if the User Agent cannot set the frame rate above 50, it will skip that ConstraintSet and attempt to set the frame rate above 40. In case the User Agent cannot satisfy either of the two ConstraintSets, the 'min' value in the basic ConstraintSet insists on 30 as a lower bound. In other words, the User Agent would fail altogether if it couldn't get a value over 30, but would choose a value over 50 if possible, then try for a value over 40.

Note that, unlike basic constraints, the constraints within a ConstraintSet in the advanced list must be satisfied together or skipped together. Thus, {width: 1920, height: 1280} is a request for that specific resolution, not a request for that width or that height. One can think of the basic constraints as requesting an 'or' (non-exclusive) of the individual constraints, while each advanced ConstraintSet is requesting an 'and' of the individual constraints in the ConstraintSet. An application may inspect the full set of Constraints currently in effect via the `getConstraints()` accessor.

The specific value that the User Agent chooses for a constrainable property is referred to as a Setting. For example, if the application applies a ConstraintSet specifying that the frameRate must be at least 30 frames per second, and no greater than 40, the Setting can be any intermediate value, e.g., 32, 35, or 37 frames per second. The application can query the current settings of the object's constrainable properties via the <a href="#dom-mediastreamtrack-getsettings" id="ref-for-dom-mediastreamtrack-getsettings-4" class="internalDFN"><code>getSettings</code></a>`()` accessor.

### 11.1 Interface Definition<a href="#interface-definition" class="self-link"></a>

Although this specification formally defines `ConstrainablePattern` as a WebIDL interface, it is actually a template or pattern for other interfaces and cannot be inherited directly since the return values of the methods need to be extended, something WebIDL cannot do. Thus, each interface that wishes to make use of the functionality defined here will have to provide its own copy of the WebIDL for the functions and interfaces given here. However it can refer to the semantics defined here, which will not change. See [MediaStreamTrack Interface Definition](#media-stream-track-interface-definition) for an example of this.

This pattern relies on the <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-3" class="internalDFN">constrainable object</a> defining three internal slots:

1.  A \[\[Capabilities\]\] internal slot, initialized to a `Capabilities` dictionary describing the aggregate allowable values for each constrainable property exposed, as explained under <a href="#dom-capabilities" id="ref-for-dom-capabilities-1">Capabilities</a>, or an empty dictionary if it has none.

2.  A \[\[Constraints\]\] internal slot, initialized to an empty `Constraints` dictionary.

3.  A \[\[Settings\]\] internal slot, initialized to a `Settings` dictionary describing the currently active settings values for each constrainable property exposed, as explained under <a href="#dom-settings" id="ref-for-dom-settings-1">Settings</a>, or an empty dictionary if it has none.

Template:

    WebIDL[Exposed=Window]
    interface ConstrainablePattern {
      Capabilities  getCapabilities();
      Constraints   getConstraints();
      Settings      getSettings();
      Promise<undefined> applyConstraints(optional Constraints constraints = {});
    };

#### Methods<a href="#methods-6" class="self-link"></a>

getCapabilities  
The `getCapabilities()` method returns the dictionary of the names of the constrainable properties that the object supports. When invoked, the User Agent *MUST* return the value of the <a href="#dfn-capabilities-0" id="ref-for-dfn-capabilities-0-1" class="internalDFN">[[Capabilities]]</a> internal slot.

Note

It is possible that the underlying hardware may not exactly map to the range defined for the constrainable property. Where this is possible, the entry *SHOULD* define how to translate and scale the hardware's setting onto the values defined for the property. For example, suppose that a hypothetical fluxCapacitance property ranges from -10 (min) to 10 (max), but there are common hardware devices that support only values of "off" "medium" and "full". The constrainable property definition might specify that for such hardware, the User Agent should map the range value of -10 to "off", 10 to "full", and 0 to "medium". It might also indicate that given a ConstraintSet imposing a strict value of 3, the User Agent should attempt to set the value of "medium" on the hardware, and that <a href="#dom-constrainablepattern-getsettings" id="ref-for-dom-constrainablepattern-getsettings-2" class="internalDFN"><code>getSettings</code></a>`()` should return a fluxCapacitance of 0, since that is the value defined as corresponding to "medium".

<a href="#dom-constrainablepattern-getconstraints" id="ref-for-dom-constrainablepattern-getconstraints-4" class="internalDFN"><code>getConstraints</code></a>  
The `getConstraints()` method returns the Constraints that were the argument to the most recent successful invocation of the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-4" class="internalDFN">ApplyConstraints algorithm</a> on the object, maintaining the order in which they were specified. Note that some of the advanced ConstraintSets returned may not be currently satisfied. To check which ConstraintSets are currently in effect, the application should use <a href="#dom-constrainablepattern-getsettings" id="ref-for-dom-constrainablepattern-getsettings-3" class="internalDFN"><code>getSettings</code></a>. Instead of returning the exact constraints as described above, the UA *MAY* return a constraint set that has the identical effect in all situations as the applied constraints. When invoked, the User Agent *MUST* return the value of the <a href="#dfn-constraints" id="ref-for-dfn-constraints-1" class="internalDFN">[[Constraints]]</a> internal slot.

getSettings  
The `getSettings()` method returns the current settings of all the constrainable properties of the object, whether they are platform defaults or have been set by the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-5" class="internalDFN">ApplyConstraints algorithm</a>. Note that a setting is a target value that complies with constraints, and therefore may differ from measured performance at times. When invoked, the User Agent *MUST* return the value of the <a href="#dfn-settings-0" id="ref-for-dfn-settings-0-1" class="internalDFN">[[Settings]]</a> internal slot.

applyConstraints  
When the applyConstraints template method is invoked, the User Agent *MUST* run the following steps:

1.  Let object be the object on which this method was invoked.

2.  Let newConstraints be the argument to this method.

3.  Let p be a new promise.

4.  Run the following steps in parallel, maintaining the order of invocations if this method is called multiple times:

    1.  Let failedConstraint be the result of running the <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-6" class="internalDFN">ApplyConstraints algorithm</a> with newConstraints as the argument.

    2.  Let successfulSettings be the object's current settings after the algorithm in the above step has finished.

    3.  Queue a task that runs the following steps:

        1.  If failedConstraint is not `undefined`, let message be either `undefined` or an informative human-readable message, [reject](https://webidl.spec.whatwg.org/#reject) p with a new `OverconstrainedError` created by calling `OverconstrainedError(failedConstraint,                           message)`, and abort these steps. The existing constraints remain in effect in this case.

        2.  Set object's <a href="#dfn-constraints" id="ref-for-dfn-constraints-2" class="internalDFN">[[Constraints]]</a> internal slot to newConstraints or a `Constraints` dictionary that has the identical effect in all situations as newConstraints.

        3.  Set object's <a href="#dfn-settings-0" id="ref-for-dfn-settings-0-2" class="internalDFN">[[Settings]]</a> internal slot to successfulSettings.

        4.  [resolve](https://webidl.spec.whatwg.org/#resolve) p with `undefined`.

5.  Return p.

The <a href="#dfn-applyconstraints-algorithm" id="ref-for-dfn-applyconstraints-algorithm-7" class="internalDFN">ApplyConstraints algorithm</a> for applying constraints is stated below. Here are some preliminary definitions that are used in the statement of the algorithm:

We use the term settings dictionary for the set of values that might be applied as settings to the object.

For string valued constraints, we define "==" below to be true if one of the values in the sequence is exactly the same as the value being compared against.

We define the fitness distance between a <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-2" class="internalDFN">settings dictionary</a> and a constraint set CS as the sum, for each member (represented by a constraintName and constraintValue pair) which [exist](https://infra.spec.whatwg.org/#map-exists)s in CS, of the following values:

1.  If constraintName is not supported by the User Agent, the fitness distance is 0.

2.  If the constraint is required (constraintValue either contains one or more members named 'min', 'max', or 'exact', or is itself a bare value and bare values are to be treated as 'exact'), and the <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-3" class="internalDFN">settings dictionary</a>'s constraintName member's value does not satisfy the constraint or doesn't [exist](https://infra.spec.whatwg.org/#map-exists), the fitness distance is positive infinity.

3.  If the constraint does not apply for this type of object, the fitness distance is 0 (that is, the constraint does not influence the fitness distance).

4.  If constraintValue is a boolean, but the constrainable property is not, then the fitness distance is based on whether the <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-4" class="internalDFN">settings dictionary</a>'s constraintName member [exists](https://infra.spec.whatwg.org/#map-exists) or not, from the formula

        (constraintValue == exists) ? 0 : 1

5.  If the <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-5" class="internalDFN">settings dictionary</a>'s constraintName member does [not exist](https://infra.spec.whatwg.org/#map-exists), the fitness distance is 1.

6.  If no ideal value is specified (constraintValue either contains no member named 'ideal', or, if bare values are to be treated as 'ideal', isn't a bare value), the fitness distance is 0.
7.  For all positive numeric constraints (such as height, width, frameRate, aspectRatio, sampleRate and sampleSize), the fitness distance is the result of the formula

        (actual == ideal) ? 0 : |actual - ideal| / max(|actual|, |ideal|)

8.  For all string, enum and boolean constraints (e.g. deviceId, groupId, facingMode, resizeMode, echoCancellation), the fitness distance is the result of the formula

        (actual == ideal) ? 0 : 1

More definitions:

-   We refer to each element of a ConstraintSet (other than the special term 'advanced') as a 'constraint' since it is intended to constrain the acceptable settings for the given property from the full list or range given in the corresponding Capability of the ConstrainablePattern object to a value that is within the range or list of values it specifies.
-   We refer to the "effective Capability" C of an object O as the possibly proper subset of the possible values of C (as returned by getCapabilities) taking into consideration environmental limitations and/or restrictions placed by other constraints. For example given a ConstraintSet that constrains the aspectRatio, height, and width properties, the values assigned to any two of the properties limit the effective Capability of the third. The set of effective Capabilities may be platform dependent. For example, on a resource-limited device it may not be possible to set properties P1 and P2 both to 'high', while on another less limited device, this may be possible.
-   A settings dictionary, which is a set of values for the constrainable properties of an object O, satisfies ConstraintSet CS if the <a href="#dfn-fitness-distance" id="ref-for-dfn-fitness-distance-2" class="internalDFN">fitness distance</a> between the set and CS is less than infinity.
-   A set of ConstraintSets CS1...CSn (n &gt;= 1) can be satisfied by an object O if it is possible to find a settings dictionary of O that satisfies CS1...CSn simultaneously.
-   To apply a set of ConstraintSets CS1...CSn to object O is to choose such a sequence of values that satisfy CS1...CSn and assign them as the settings for the properties of O.

We define the SelectSettings algorithm as follows:

1.  Each <a href="#dfn-constraint" id="ref-for-dfn-constraint-1" class="internalDFN">constraint</a> specifies one or more values (or a range of values) for its property. A property *MAY* appear more than once in the list of 'advanced' ConstraintSets. If an empty list has been given as the value for a constraint, it *MUST* be interpreted as if the constraint were not specified (in other words, an empty constraint == no constraint).

    Note that unknown properties are discarded by WebIDL, which means that unknown/unsupported required constraints will silently disappear. To avoid this being a surprise, application authors are expected to first use the <a href="#dom-mediadevices-getsupportedconstraints" id="ref-for-dom-mediadevices-getsupportedconstraints-3" class="internalDFN"><code>getSupportedConstraints</code></a>`()` method as shown in the Examples below.

2.  Let object be the `ConstrainablePattern` object on which this algorithm is applied. Let copy be an unconstrained copy of object (i.e., copy should behave as if it were object with all ConstraintSets removed.)
3.  For every possible <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-6" class="internalDFN">settings dictionary</a> of copy compute its <a href="#dfn-fitness-distance" id="ref-for-dfn-fitness-distance-3" class="internalDFN">fitness distance</a>, treating bare values of properties as ideal values. Let candidates be the set of <a href="#dfn-settings-dictionary" id="ref-for-dfn-settings-dictionary-7" class="internalDFN">settings dictionaries</a> for which the fitness distance is finite.

4.  If candidates is empty, return `undefined` as the result of the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-5" class="internalDFN">SelectSettings</a> algorithm.

5.  Iterate over the 'advanced' ConstraintSets in newConstraints in the order in which they were specified. For each ConstraintSet:
    1.  compute the <a href="#dfn-fitness-distance" id="ref-for-dfn-fitness-distance-4" class="internalDFN">fitness distance</a> between it and each settings dictionary in candidates, treating bare values of properties as exact.

    2.  If the fitness distance is finite for one or more settings dictionaries in candidates, keep those settings dictionaries in candidates, discarding others.

        If the fitness distance is infinite for all settings dictionaries in candidates, ignore this ConstraintSet.

6.  Select one settings dictionary from candidates, and return it as the result of the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-6" class="internalDFN">SelectSettings</a> algorithm. The User Agent *MUST* use one with the smallest <a href="#dfn-fitness-distance" id="ref-for-dfn-fitness-distance-5" class="internalDFN">fitness distance</a>, as calculated in step 3. If more than one settings dictionary have the smallest fitness distance, the User Agent chooses one of them based on system default property values and User Agent default property values.

For any property with a system default value for the selected device, the system default value *SHOULD* be used if compatible with the above algorithm. This is usually the case for properties like [sampleRate](#def-constraint-sampleRate) or [sampleSize](#def-constraint-sampleSize). Other properties, like [echoCancellation](#def-constraint-echoCancellation) or [resizeMode](#def-constraint-resizeMode) do not usually have system default values. The User Agent defines its own default values for these properties. Implementors need to be cautious to select good default values since they will often have an impact on how media content is generated.

Note

It is recommended to look at existing implementations to select meaningful default values. Note that default values may differ based on the system, for instance desktop vs. mobile. At time of writing, User Agent implementations tend to use the following default values, which were chosen for their suitability for using RTCPeerConnection as a sink:

1.  [width](#def-constraint-width) set to 640.

2.  [height](#def-constraint-height) set to 480.

3.  [frameRate](#def-constraint-frameRate) set to 30.

4.  [echoCancellation](#def-constraint-echoCancellation) set to `true`.

To apply the ApplyConstraints algorithm to an object, given newConstraints as an argument, the User Agent *MUST* run the following steps:

1.  Let successfulSettings be the result of running the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-7" class="internalDFN">SelectSettings</a> algorithm with newConstraints as the constraint set.

2.  If successfulSettings is `undefined`, let failedConstraint be any <a href="#dfn-required-constraints" id="ref-for-dfn-required-constraints-10" class="internalDFN">required constraint</a> whose fitness distance was infinity for all settings dictionaries examined while executing the <a href="#dfn-selectsettings" id="ref-for-dfn-selectsettings-8" class="internalDFN">SelectSettings</a> algorithm, or `""` if there isn't one, and then return failedConstraint and abort these steps.

3.  In a single operation, remove the existing constraints from object, apply newConstraints, and apply successfulSettings as the current settings.
4.  Return `undefined`.

Note

Any implementation that has the same result as the algorithm above is an allowed implementation. For instance, the implementation may choose to keep track of the maximum and minimum values for a setting that are OK under the constraints considered, rather than keeping track of all possible values for the setting.

Note

When picking a settings dictionary, the UA can use any information available to it. Examples of such information may be whether the selection is done as part of device selection in getUserMedia, whether the energy usage of the camera varies between the settings dictionaries, or whether using a settings dictionary will cause the device driver to apply resampling.

The User Agent *MAY* choose new settings for the constrainable properties of the object at any time. When it does so it *MUST* attempt to satisfy all current Constraints, in the manner described in the algorithm above, let successfulSettings be the resulting new settings, and queue a task to run the following steps:

1.  Let object be the `ConstrainablePattern` object on which new settings for one or more constrainable properties have changed.

2.  Set object's <a href="#dfn-settings-0" id="ref-for-dfn-settings-0-3" class="internalDFN">[[Settings]]</a> internal slot to successfulSettings.

An example of Constraints that could be passed into <a href="#dom-mediastreamtrack-applyconstraints" id="ref-for-dom-mediastreamtrack-applyconstraints-7" class="internalDFN"><code>applyConstraints</code></a>`()` or returned as a value of `constraints` is below. It uses the [constrainable properties](#constrainable-properties) defined for camera-sourced <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-122" class="internalDFN"><code>MediaStreamTrack</code></a>s. In this example, all constraints are ideal values, which means results are "best effort" based on the user's specific camera:

<a href="#example-4" class="self-link">Example 4</a>

    await track.applyConstraints({
      width: 1920,
      height: 1080,
      frameRate: 30,
    });
    const {width, height, frameRate} = track.getSettings();

    console.log(`${width}x${height}x${frameRate}`); // 1920x1080x30, or it might be e.g.
                                                    // 1280x720x30 as best effort

For finer control, an application can insist on an exact match, provided it's prepared to handle failure:

<a href="#example-5" class="self-link">Example 5</a>

    try {
      await track.applyConstraints({
        width: {exact: 1920},
        height: {exact: 1080},
        frameRate: {min: 25, ideal: 30, max: 30},
      });
      const {width, height, frameRate} = track.getSettings();

      console.log(`${width}x${height}x${frameRate}`); // 1920x1080x25-30!

    } catch (error) {
      if (error.name != "OverconstrainedError") {
        throw error;
      }
      console.log(`This camera cannot produce the requested ${error.constraint}.`);
    }

Constraints can also be passed into <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-32" class="internalDFN"><code>getUserMedia</code></a>, not just as an initialization convenience, but to influence device selection. In this case, <a href="#list-of-inherent-constrainable-track-properties" id="ref-for-list-of-inherent-constrainable-track-properties-3" class="internalDFN">inherent constraints</a> are also available.

Here's an example of using constraints to prefer a specific camera and microphone from a previous visit, with requirements on dimensions and a preference for stereo, to be applied once granted, and to help find suitable replacements in case the requested devices are no longer available (or in some user agents, overriden by the user).

<a href="#example-6" class="self-link">Example 6</a>

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: localStorage.camId,
          width: {min: 800, ideal: 1024, max: 1280},
          height: {min: 600}
        },
        audio: {
          deviceId: localStorage.micId,
          channelCount: 2
        }
      });

      // Granted. Store deviceIds for next time
      localStorage.camId = stream.getVideoTracks()[0].getSettings().deviceId;
      localStorage.micId = stream.getAudioTracks()[0].getSettings().deviceId;

    } catch (error) {
      if (error.name != "OverconstrainedError") {
        throw error;
      }
      // Overconstrained. No suitable replacements found
    }

Note

The above example avoids using `{exact: deviceId}`, so that browsers can immediately offer a choice between different cameras if your preferred device is not available.

The example also stores the `deviceId`s on every grant, in case they represent a new choice.

In contrast, here's an example of using constraints to implement an in-content camera picker. In this case, we use `exact` and rely solely on a `deviceId` that comes from the user picking from a list of choices:

<a href="#example-7" class="self-link">Example 7</a>

    async function switchCameraTrack(freshlyChosenDeviceId, oldTrack) {
      if (isMobile) {
        oldTrack.stop(); // Some platforms can only open one camera at a time.
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {exact: freshlyChosenDeviceId}
        }
      });
      const [track] = stream.getVideoTracks();
      localStorage.camId = track.getSettings().deviceId;
      return track;
    }

Here's an example asking for a back camera on a phone, ideally in 720p, but accepting anything close to that. Note how constraints on dimensions are specified in landscape mode:

<a href="#example-8" class="self-link">Example 8</a>

    async function getBackCamera() {
      return await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {exact: 'environment'},
          width: 1280,
          height: 720
        }
      });
    }

Here's an example of "I want a native 16:9 resolution near 720p, but with an exact frame rate of 10 even if not natively available". This needs to be done in two steps: One to discover the native mode, and a second step to apply the custom frame rate. This also shows how to derive constraints from current settings, which may be rotated:

<a href="#example-9" class="self-link">Example 9</a>

    async function nativeResolutionButDecimatedFrameRate() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          resizeMode: 'none', // means native resolution and frame rate
          width: 1280,
          height: 720,
          aspectRatio: 16 / 9 // aspect ratios may not be exactly accurate
        }
      });
      const [track] = stream.getVideoTracks();
      const {width, height, aspectRatio} = track.getSettings();

      // Constraints are in landscape, while settings may be rotated (portrait)
      if (width < height) {
        [width, height] = [height, width];
        aspectRatio = 1 / aspectRatio;
      }

      await track.applyConstraints({
        resizeMode: 'crop-and-scale',
        width: {exact: width},
        height: {exact: height},
        frameRate: {exact: 10},
        aspectRatio,
      });

      return stream;
    }

Note

The above example assumes the <a href="#dfn-primary-orientation" id="ref-for-dfn-primary-orientation-3" class="internalDFN">primary orientation</a> is landscape.

Here's an example showing how to use <a href="#dom-mediadevices-getsupportedconstraints" id="ref-for-dom-mediadevices-getsupportedconstraints-4" class="internalDFN"><code>getSupportedConstraints</code></a>, for cases where a constraint being ignored due to lack of support in a user agent is not tolerated by the application:

<a href="#example-10" class="self-link">Example 10</a>

    async function getFrontCameraRes() {
      const supports = navigator.mediaDevices.getSupportedConstraints();

      for (const constraint of ["facingMode", "aspectRatio", "resizeMode"]) {
        if (!(constraint in supports) {
          throw new OverconstrainedError(constraint, "Not supported");
        }
      }
      return await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {exact: 'user'},
          advanced: [
            {aspectRatio: 16/9, height: 1080, resizeMode: "none"},
            {aspectRatio: 4/3, width: 1280, resizeMode: "none"}
          ]
        }
      });
    }

### 11.2 Types for Constrainable Properties<a href="#types-for-constrainable-properties" class="self-link"></a>

The syntax for the specification of the set of legal values depends on the type of the values. In addition to the standard atomic types (boolean, long, double, DOMString), legal values include lists of any of the atomic types, plus min-max ranges, as defined below.

List values *MUST* be interpreted as disjunctions. For example, if a property 'facingMode' for a camera is defined as having legal values \["left", "right", "user", "environment"\], this means that 'facingMode' can have the values "left", "right", "environment", and "user". Similarly <a href="#dom-constraints" id="ref-for-dom-constraints-9" class="internalDFN"><code>Constraints</code></a> restricting 'facingMode' to \["user", "left", "right"\] would mean that the User Agent should select a camera (or point the camera, if that is possible) so that "facingMode" is either "user", "left", or "right". This Constraint would thus request that the camera not be facing away from the user, but would allow the User Agent to allow the user to choose other directions.

    WebIDLdictionary DoubleRange {
      double max;
      double min;
    };

#### Dictionary `DoubleRange` Members<a href="#dictionary-doublerange-members" class="self-link"></a>

`max` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
The maximum legal value of this property.

`min` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
The minimum value of this Property.

    WebIDLdictionary ConstrainDoubleRange : DoubleRange {
      double exact;
      double ideal;
    };

#### Dictionary `ConstrainDoubleRange` Members<a href="#dictionary-constraindoublerange-members" class="self-link"></a>

`exact` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
The exact required value for this property.

`ideal` of type [`double`](https://webidl.spec.whatwg.org/#idl-double)  
The ideal (target) value for this property.

    WebIDLdictionary ULongRange {
      [Clamp] unsigned long max;
      [Clamp] unsigned long min;
    };

#### Dictionary `ULongRange` Members<a href="#dictionary-ulongrange-members" class="self-link"></a>

`max` of type [`unsigned long`](https://webidl.spec.whatwg.org/#idl-unsigned-long)  
The maximum legal value of this property.

`min` of type [`unsigned long`](https://webidl.spec.whatwg.org/#idl-unsigned-long)  
The minimum value of this property.

    WebIDLdictionary ConstrainULongRange : ULongRange {
      [Clamp] unsigned long exact;
      [Clamp] unsigned long ideal;
    };

#### Dictionary `ConstrainULongRange` Members<a href="#dictionary-constrainulongrange-members" class="self-link"></a>

`exact` of type [`unsigned long`](https://webidl.spec.whatwg.org/#idl-unsigned-long)  
The exact required value for this property.

`ideal` of type [`unsigned long`](https://webidl.spec.whatwg.org/#idl-unsigned-long)  
The ideal (target) value for this property.

    WebIDLdictionary ConstrainBooleanParameters {
      boolean exact;
      boolean ideal;
    };

#### Dictionary `ConstrainBooleanParameters` Members<a href="#dictionary-constrainbooleanparameters-members" class="self-link"></a>

`exact` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
The exact required value for this property.

`ideal` of type [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)  
The ideal (target) value for this property.

    WebIDLdictionary ConstrainDOMStringParameters {
      (DOMString or sequence<DOMString>) exact;
      (DOMString or sequence<DOMString>) ideal;
    };

#### Dictionary `ConstrainDOMStringParameters` Members<a href="#dictionary-constraindomstringparameters-members" class="self-link"></a>

`exact` of type `(DOMString` or sequence&lt;[`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)&gt;)  
The exact required value for this property.

`ideal` of type `(DOMString` or sequence&lt;[`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)&gt;)  
The ideal (target) value for this property.

    WebIDLtypedef ([Clamp] unsigned long or ConstrainULongRange) ConstrainULong;

Throughout this specification, the identifier `ConstrainULong` is used to refer to the <span class="idlTypedefType">(\[Clamp\] unsigned long or ConstrainULongRange)</span> type.

    WebIDLtypedef (double or ConstrainDoubleRange) ConstrainDouble;

Throughout this specification, the identifier `ConstrainDouble` is used to refer to the <span class="idlTypedefType">(double or ConstrainDoubleRange)</span> type.

    WebIDLtypedef (boolean or ConstrainBooleanParameters) ConstrainBoolean;

Throughout this specification, the identifier `ConstrainBoolean` is used to refer to the <span class="idlTypedefType">(boolean or ConstrainBooleanParameters)</span> type.

    WebIDLtypedef (DOMString or
             sequence<DOMString> or
             ConstrainDOMStringParameters) ConstrainDOMString;

Throughout this specification, the identifier `ConstrainDOMString` is used to refer to the <span class="idlTypedefType">(DOMString or sequence&lt;DOMString&gt; or ConstrainDOMStringParameters)</span> type.

### 11.3 Capabilities<a href="#capabilities" class="self-link"></a>

`Capabilities` is a dictionary containing one or more key-value pairs, where each key *MUST* be a constrainable property, and each value *MUST* be a subset of the set of values allowed for that property. The exact syntax of the value expression depends on the type of the property. The Capabilities dictionary specifies which constrainable properties that can be applied, as constraints, to the <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-4" class="internalDFN">constrainable object</a>. Note that the Capabilities of a <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-5" class="internalDFN">constrainable object</a> *MAY* be a subset of the properties defined in the Web platform, with a subset of the set values for those properties. Note that Capabilities are returned from the User Agent to the application, and cannot be specified by the application. However, the application can control the Settings that the User Agent chooses for constrainable properties by means of Constraints.

An example of a Capabilities dictionary is shown below. In this case, the <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-6" class="internalDFN">constrainable object</a> is a video source with a very limited set of Capabilities.

<a href="#example-11" class="self-link">Example 11</a>

    {
      frameRate: {min: 1.0, max: 60.0},
      facingMode: ['user', 'left']
    }

The next example below points out that capabilities for range values provide ranges for individual constrainable properties, not combinations. This is particularly relevant for video width and height, since the ranges for width and height are reported separately. In the example, if the <a href="#dfn-constrainable-object" id="ref-for-dfn-constrainable-object-7" class="internalDFN">constrainable object</a> can only provide 640x480 and 800x600 resolutions the relevant capabilities returned would be:

<a href="#example-12" class="self-link">Example 12</a>

    {
      width: {min: 640, max: 800},
      height: {min: 480, max: 600},
      aspectRatio: 4/3
    }

Note in the example above that the aspectRatio would make clear that arbitrary combination of widths and heights are not possible, although it would still suggest that more than two resolutions were available.

A specification using the Constrainable Pattern should not subclass the below dictionary, but instead provide its own definition. See <a href="#dom-mediatrackcapabilities" id="ref-for-dom-mediatrackcapabilities-7" class="internalDFN"><code>MediaTrackCapabilities</code></a> for an example.

Template:

    WebIDLdictionary Capabilities {};

### 11.4 Settings<a href="#settings" class="self-link"></a>

`Settings` is a dictionary containing one or more key-value pairs. It *MUST* contain each key returned in `getCapabilities()` for which the property is defined on the object type it's returned on; for instance, an audio <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-123" class="internalDFN"><code>MediaStreamTrack</code></a> has no "width" property. There *MUST* be a single value for each key and the value *MUST* be a member of the set defined for that property by `getCapabilities()`. The `Settings` dictionary contains the actual values that the User Agent has chosen for the object's constrainable properties. The exact syntax of the value depends on the type of the property.

A conforming User Agent *MUST* support all the constrainable properties defined in this specification.

An example of a Settings dictionary is shown below. This example is not very realistic in that a User Agent would actually be required to support more constrainable properties than just these.

<a href="#example-13" class="self-link">Example 13</a>

    {
      frameRate: 30.0,
      facingMode: 'user'
    }

A specification using the Constrainable Pattern should not subclass the below dictionary, but instead provide its own definition. See <a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-7" class="internalDFN"><code>MediaTrackSettings</code></a> for an example.

Template:

    WebIDLdictionary Settings {};

### 11.5 Constraints and ConstraintSet<a href="#constraints" class="self-link"></a>

Due to the limitations of WebIDL, interfaces implementing the Constrainable Pattern cannot simply subclass Constraints and ConstraintSet as they are defined here. Instead they must provide their own definitions that follow this pattern. See [MediaTrackConstraints](#media-track-constraints) for an example of this.

Template:

    WebIDLdictionary ConstraintSet {};

Each member of a `ConstraintSet` corresponds to a constrainable property and specifies a subset of the property's legal Capability values. Applying a ConstraintSet instructs the User Agent to restrict the settings of the corresponding constrainable properties to the specified values or ranges of values. A given property *MAY* occur both in the basic Constraints set and in the advanced ConstraintSets list, and *MAY* occur at most once in each ConstraintSet in the advanced list.

Template:

    WebIDLdictionary Constraints : ConstraintSet {
      sequence<ConstraintSet> advanced;
    };

#### 11.5.1 Dictionary `Constraints` Members<a href="#dictionary-constraints-members" class="self-link"></a>

`advanced` of type <span class="idlMemberType">sequence&lt;<a href="#dom-constraintset" id="ref-for-dom-constraintset-6" class="internalDFN"><code>ConstraintSet</code></a>&gt;</span>  
This is the list of ConstraintSets that the User Agent *MUST* attempt to satisfy, in order, skipping only those that cannot be satisfied. The order of these ConstraintSets is significant. In particular, when they are passed as an argument to `applyConstraints`, the User Agent *MUST* try to satisfy them in the order that is specified. Thus if advanced ConstraintSets C1 and C2 can be satisfied individually, but not together, then whichever of C1 and C2 is first in this list will be satisfied, and the other will not. The User Agent *MUST* attempt to satisfy all ConstraintSets in the list, even if some cannot be satisfied. Thus, in the preceding example, if constraint C3 is specified after C1 and C2, the User Agent will attempt to satisfy C3 even though C2 cannot be satisfied. Note that a given property name may occur only once in each ConstraintSet but may occur in more than one ConstraintSet.

12. Examples<a href="#examples" class="self-link"></a>
------------------------------------------------------

This sample code exposes a button. When clicked, the button is disabled and the user is prompted to offer a stream. The user can cause the button to be re-enabled by providing a stream (e.g., giving the page access to the local camera) and then disabling the stream (e.g., revoking that access).

<a href="#example-14" class="self-link">Example 14</a>

    <button id="startBtn">Start</button>
    <script>
    const startBtn = document.getElementById('startBtn');

    startBtn.onclick = async () => {
      try {
        startBtn.disabled = true;
        const constraints = {
          audio: true,
          video: true
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        for (const track of stream.getTracks()) {
          track.onended = () => {
            startBtn.disabled = stream.getTracks().some((t) => t.readyState == 'live');
          };
        }
      } catch (err) {
        console.error(err);
      }
    };
    </script>

This example allows people to take photos of themselves from the local video camera. Note that the Image Capture specification \[<a href="#bib-image-capture" class="bibref" title="MediaStream Image Capture">image-capture</a>\] provides a simpler way to accomplish this.

<a href="#example-15" class="self-link">Example 15</a>

    <script>
    window.onload = async () => {
      const video = document.getElementById('monitor');
      const canvas = document.getElementById('photo');
      const shutter = document.getElementById('shutter');

      try {
        video.srcObject = await navigator.mediaDevices.getUserMedia({video: true});

        await new Promise(resolve => video.onloadedmetadata = resolve);
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        document.getElementById('splash').hidden = true;
        document.getElementById('app').hidden = false;

        shutter.onclick = () => canvas.getContext('2d').drawImage(video, 0, 0);
      } catch (err) {
        console.error(err);
      }
    };
    </script>

    <h1>Snapshot Kiosk</h1>

    <section id="splash">
      <p id="errorMessage">Loading...</p>
    </section>

    <section id="app" hidden>
      <video id="monitor" autoplay></video>
      <button id="shutter">&#x1F4F7;</button>
      <canvas id="photo"></canvas>
    </section>

13. Permissions Policy Integration<a href="#permissions-policy-integration" class="self-link"></a>
--------------------------------------------------------------------------------------------------

This specification defines two [policy-controlled feature](https://www.w3.org/TR/permissions-policy-1/#policy-controlled-feature)s identified by the strings `"camera"` and `"microphone"`. Both have a [default allowlist](https://www.w3.org/TR/permissions-policy-1/#default-allowlist) of `"self"`.

Note

A [document](https://dom.spec.whatwg.org/#concept-document)'s [permissions policy](https://html.spec.whatwg.org/multipage/dom.html#concept-document-permissions-policy) determines whether any content in that document is allowed to use <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-33" class="internalDFN"><code>getUserMedia</code></a> to request camera or microphone respectively. If disabled in any document, no content in the document will be [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use) <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-34" class="internalDFN"><code>getUserMedia</code></a> to request the camera or microphone respectively. This is enforced by the [request permission to use](https://www.w3.org/TR/permissions/#dfn-request-permission-to-use) algorithm.

Additionally, <a href="#dom-mediadevices-enumeratedevices" id="ref-for-dom-mediadevices-enumeratedevices-10" class="internalDFN"><code>enumerateDevices</code></a> will only enumerate devices the document is [allowed to use](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#allowed-to-use).

14. Privacy Indicator Requirements<a href="#privacy-indicator-requirements" class="self-link"></a>
--------------------------------------------------------------------------------------------------

For each kind of device that <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-35" class="internalDFN"><code>getUserMedia()</code></a> exposes,

-   Define any&lt;kind&gt;Accessible (e.g. anyAudioAccessible, anyVideoAccessible) as the logical OR of the <a href="#dfn-kindsaccessiblemap" id="ref-for-dfn-kindsaccessiblemap-4" class="internalDFN"><code>[[kindsAccessibleMap]]</code></a>\[kind\] value and all the <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-6" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] values for devices of that kind.
-   Define any&lt;kind&gt;Live (e.g. anyAudioLive, anyVideoLive) to be the logical OR of the <a href="#dfn-kindsaccessiblemap" id="ref-for-dfn-kindsaccessiblemap-5" class="internalDFN"><code>[[kindsAccessibleMap]]</code></a>\[kind\] value and all the <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-5" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] values for devices of that kind.

Define anyAccessible to be the logical OR of all any&lt;kind&gt;Accessible values.

Define anyLive to be the logical OR of all any&lt;kind&gt;Live values.

Then the following are requirements on the User Agent:

-   The User Agent *MUST* indicate to the user when the value of anyAccessible changes.
-   The User Agent *MUST* indicate to the user when the value of anyLive changes.
-   If the User Agent provides indication to the user per kind, then for each any&lt;kind&gt;Accessible value and any&lt;kind&gt;Live value, it *MUST* at minimum indicate when the value changes.
-   If the User Agent provides indication to the user per device, then for each <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-7" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] value and <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-6" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] value, it *MUST* at minimum indicate when the value changes.
-   Any false-to-true transition indicated *MUST* remain observable for a sufficient time that a reasonably-observant user could become aware of it. This *SHOULD* be at least 3 seconds.
-   Any of the above transition indications *MAY* be combined as long as the combined indication cannot transition to false if any of its component indications are still true.

and the following are encouraged behaviors for the User Agent:

-   The User Agent is encouraged to provide ongoing indication of the current state of anyAccessible.
-   The User Agent is encouraged to provide ongoing indication of the current state of anyLive and to make any generic hardware device indicator light match.
-   If the User Agent provides indication to the user per kind, then for each any&lt;kind&gt;Accessible value and any&lt;kind&gt;Live value, it is encouraged to provide ongoing indication of the current state of the value. It is also encouraged to make any device-type-specific hardware indicator light match the corresponding any&lt;kind&gt;Live value.
-   If the User Agent provides indication to the user per device, then for each <a href="#dfn-devicesaccessiblemap" id="ref-for-dfn-devicesaccessiblemap-8" class="internalDFN"><code>[[devicesAccessibleMap]]</code></a>\[deviceId\] value and <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-7" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] value, it is encouraged to provide ongoing indication of the current state of the value. It is also encouraged to make any device-specific hardware indicator light match the corresponding <a href="#dfn-deviceslivemap" id="ref-for-dfn-deviceslivemap-8" class="internalDFN"><code>[[devicesLiveMap]]</code></a>\[deviceId\] value.
-   Any of the above ongoing indications *MAY* be used instead of the corresponding required transition indication provided the false-to-true transition requirement is met.

15. Privacy and Security Considerations<a href="#privacy-and-security-considerations" class="self-link"></a>
------------------------------------------------------------------------------------------------------------

This section is non-normative; it specifies no new behavior, but instead summarizes information already present in other parts of the specification.

This document extends the Web platform with the ability to manage input devices for media - in this iteration, microphones, and cameras. It also allows the manipulation of audio output devices (speakers and headphones). Capturing audio and video exposes personally-identifiable information to applications, and this specification requires obtaining explicit user consent before sharing it.

Without authorization (to the "drive-by web"), it offers the ability to tell how many devices there are of each class, and how they are grouped together (e.g. a microphone and camera belonging to a single Web cam). The identifiers for the devices are designed to not be useful for a fingerprint that can track the user between origins, but the number and grouping of devices adds to the fingerprint surface. It recommends to treat the per-origin persistent identifier <a href="#dom-mediadeviceinfo-deviceid" id="ref-for-dom-mediadeviceinfo-deviceid-15" class="internalDFN"><code>deviceId</code></a> as other persistent storage (e.g. cookies) are treated.

When authorization is given, this document describes how to get access to, and use, media data from the devices mentioned. This data may be sensitive; advice is given that indicators should be supplied to indicate that devices are in use, but both the nature of authorization and the indicators of in-use devices are platform decisions.

Authorization may be given on a case-by-case basis, or be persistent. In the case of a case-by-case authorization, it is important that the user be able to say "no" in a way that prevents the UI from blocking user interaction until permission is given - either by offering a way to say a "persistent NO" or by not using a modal permissions dialog.

When authorization to any media device is given, application developers gain access to the labels of all available media capture devices. In most cases, the labels are persistent across browsing sessions and across origins that have also been granted authorization, and thus potentially provide a way to track a given device across time and origins.

For origins to which permission has been granted, the <a href="#event-mediadevices-devicechange" id="ref-for-event-mediadevices-devicechange-4" class="internalDFN">devicechange</a> event will be emitted across browsing contexts and origins each time a new media device is added or removed; user agents can mitigate the risk of correlation of browsing activity across origins by fuzzing the timing of these events.

Once a developer gains access to a media stream from a capture device, the developer also gains access to detailed information about the device, including its range of operating capabilities (e.g. available resolutions for a camera). These operating capabilities are for the most part persistent across browsing sessions and origins, and thus provide a way to track a given device across time and origins.

Once access to a video stream from a capture device is obtained, that stream can most likely be used to fingerprint uniquely the said device (e.g. via dead pixel detection). Similarly, once access to an audio stream is obtained, that stream can most likely be used to fingerprint user location down to the level of a room or even simultaneous occupation of a room by disparate users (e.g. via analysis of ambient audio or of unique audio purposely played out of the device speaker). User-level mitigation for both audio and video consists of covering up the camera and/or microphone or revoking permission via User Agent chrome controls.

It is possible to use constraints so that the failure of a getUserMedia call will return information about devices on the system without prompting the user, which increases the surface available for fingerprinting. The User Agent should consider limiting the rate at which failed getUserMedia calls are allowed in order to limit this additional surface.

In the case of persistent authorization via a stored permission, it is important that it is easy to find the list of granted permissions and revoke permissions that the user wishes to revoke.

Once permission has been granted, the User Agent should make two things readily apparent to the user:

-   That the page has access to the devices for which permission is given
-   Whether or not any of the devices are presently recording ("on air") indicator

Note

Developers of sites with stored permissions should be careful that these permissions not be abused. These permissions can be revoked using the \[<a href="#bib-permissions" class="bibref" title="Permissions">permissions</a>\] API.

In particular, they should not make it possible to automatically send audio or video streams from authorized media devices to an end point that a third party can select.

Indeed, if a site offered URLs such as `https://webrtc.example.org/?call=user` that would automatically set up calls and transmit audio/video to `user`, it would be open for instance to the following abuse:

Users who have granted stored permissions to `https://webrtc.example.org/` could be tricked to send their audio/video streams to an attacker `EvilSpy` by following a link or being redirected to `https://webrtc.example.org/?user=EvilSpy`.

16. Extensibility<a href="#extensibility" class="self-link"></a>
----------------------------------------------------------------

*This section is non-normative.*

Although new versions of this specification may be produced in the future, it is also expected that other standards will need to define new capabilities that build upon those in this specification. The purpose of this section is to provide guidance to creators of such extensions.

Any WebIDL-defined interfaces, methods, or attributes in the specification may be extended. Two likely extension points are defining a new media type and defining a new constrainable property.

### 16.1 Defining a new media type (beyond the existing Audio and Video types)<a href="#defining-a-new-media-type-beyond-the-existing-audio-and-video-types" class="self-link"></a>

At a minimum, defining a new media type would require

-   adding a new getXXXXTracks() method for the type to the <a href="#dom-mediastream" id="ref-for-dom-mediastream-103" class="internalDFN"><code>MediaStream</code></a> interface,
-   describing what a muted or disabled track of that type will render (see <a href="#life-cycle-and-media-flow" class="sec-ref">§ 4.3.1 Life-cycle and Media Flow</a>),
-   adding the new type as an additional legal value for the <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-9" class="internalDFN"><code>kind</code></a> attribute on the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-124" class="internalDFN"><code>MediaStreamTrack</code></a> interface,
-   defining any constrainable properties (see <a href="#constrainable-properties" class="sec-ref">§ 4.3.8 Constrainable Properties</a>) that are applicable to the media type,
-   updating how the [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) works with a <a href="#dom-mediastream" id="ref-for-dom-mediastream-104" class="internalDFN"><code>MediaStream</code></a> containing a track of the new media type (see <a href="#mediastreams-in-media-elements" class="sec-ref">§ 6. MediaStreams in Media Elements</a>), including adding a corollary to <a href="#stream-audible" id="ref-for-stream-audible-4" class="internalDFN">audible</a>/inaudible for the new media type,
-   updating <a href="#dom-mediadevicekind" id="ref-for-dom-mediadevicekind-8" class="internalDFN"><code>MediaDeviceKind</code></a> if the new type has enumerable devices,
-   updating the <a href="#dom-mediastreamtrack-getcapabilities" id="ref-for-dom-mediastreamtrack-getcapabilities-6" class="internalDFN"><code>getCapabilities</code></a>`()` and <a href="#dom-mediadevices-getusermedia" id="ref-for-dom-mediadevices-getusermedia-36" class="internalDFN"><code>getUserMedia</code></a>`()` descriptions,
-   adding the new type to the <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-8" class="internalDFN"><code>MediaStreamConstraints</code></a> dictionary,
-   describing any new security and/or privacy considerations (see <a href="#privacy-and-security-considerations" class="sec-ref">§ 15. Privacy and Security Considerations</a>) introduced by the new type, and
-   if the new type requires user authorization, defining new permissions for it, including a new PermissionDescriptor name associated with the new <a href="#dom-mediastreamtrack-kind" id="ref-for-dom-mediastreamtrack-kind-10" class="internalDFN"><code>kind</code></a>, and defining how these permissions, along with access starting and ending, as well as muting/disabling, affect any new and/or existing "on-air" and "device accessible" indicator states (see [MediaDevices](#mediadevices)).

Additionally, it should include updating

-   the <a href="#dfn-source" id="ref-for-dfn-source-1" class="internalDFN">source</a> definition,
-   the list of media stream <a href="#dfn-consumer" id="ref-for-dfn-consumer-2" class="internalDFN">consumer</a>s,
-   the description of the <a href="#dom-mediastreamtrack-label" id="ref-for-dom-mediastreamtrack-label-4" class="internalDFN"><code>label</code></a> attribute on the <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-125" class="internalDFN"><code>MediaStreamTrack</code></a> interface,
-   the list of sinks (see <a href="#the-model-sources-sinks-constraints-and-settings" class="sec-ref">§ 5. The model: sources, sinks, constraints, and settings</a>), and
-   the best practice statements referring to video and audio (see <a href="#implementation-suggestions" class="sec-ref">§ 10.6 Implementation Suggestions</a>).

It might also include

-   explaining how the media is expected to be used by potential <a href="#dfn-consumer" id="ref-for-dfn-consumer-3" class="internalDFN">consumer</a>s, and
-   giving examples in <a href="#dom-mediastreamtrackstate" id="ref-for-dom-mediastreamtrackstate-4" class="internalDFN"><code>MediaStreamTrackState</code></a> of how such a track might become ended.

### 16.2 Defining a new constrainable property<a href="#defining-a-new-constrainable-property" class="self-link"></a>

This will require thinking through and defining how Constraints, Capabilities, and Settings for the property (see <a href="#terminology" class="sec-ref">§ 3. Terminology</a>) will work. The relevant text in <a href="#dom-mediatracksupportedconstraints" id="ref-for-dom-mediatracksupportedconstraints-6" class="internalDFN"><code>MediaTrackSupportedConstraints</code></a>, <a href="#dom-mediatrackcapabilities" id="ref-for-dom-mediatrackcapabilities-8" class="internalDFN"><code>MediaTrackCapabilities</code></a>, <a href="#dom-mediatrackconstraints" id="ref-for-dom-mediatrackconstraints-9" class="internalDFN"><code>MediaTrackConstraints</code></a>, <a href="#dom-mediatracksettings" id="ref-for-dom-mediatracksettings-8" class="internalDFN"><code>MediaTrackSettings</code></a>, <a href="#constrainable-properties" class="sec-ref">§ 4.3.8 Constrainable Properties</a>, and <a href="#dom-mediastreamconstraints" id="ref-for-dom-mediastreamconstraints-9" class="internalDFN"><code>MediaStreamConstraints</code></a> are the model to use.

Creators of extension specifications are strongly encouraged to notify the specification maintainers on [the specification repository](https://github.com/w3c/mediacapture-main/issues).  
Future versions of this specification and others created by the WebRTC Working Group will take into consideration all extensions they are aware of in an attempt to reduce potential usage conflicts.

 

It is also likely that new consumers of <a href="#dom-mediastream" id="ref-for-dom-mediastream-105" class="internalDFN"><code>MediaStream</code></a>s or <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-126" class="internalDFN"><code>MediaStreamTrack</code></a>s will be defined in the future. The following section provides guidance.

### 16.3 Defining new consumers of <a href="#dom-mediastream" id="ref-for-dom-mediastream-106" class="internalDFN"><code>MediaStream</code></a>s and <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-127" class="internalDFN"><code>MediaStreamTrack</code></a>s<a href="#defining-new-consumers-of-mediastreams-and-mediastreamtracks" class="self-link"></a>

At a minimum, any new consumer of a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-128" class="internalDFN"><code>MediaStreamTrack</code></a> will need to define

-   how a <a href="#dom-mediastreamtrack" id="ref-for-dom-mediastreamtrack-129" class="internalDFN"><code>MediaStreamTrack</code></a> will render in the various states in which it can be, including muted and disabled (see <a href="#life-cycle-and-media-flow" class="sec-ref">§ 4.3.1 Life-cycle and Media Flow</a>).

A. Acknowledgements<a href="#acknowledgements" class="self-link"></a>
---------------------------------------------------------------------

The editors wish to thank the Working Group chairs and Team Contact, Harald Alvestrand, Stefan Håkansson, Erik Lagerway and Dominique Hazaël-Massieux, for their support. Substantial text in this specification was provided by many people including Jim Barnett, Harald Alvestrand, Travis Leithead, Josh Soref, Martin Thomson, Jan-Ivar Bruaroey, Peter Thatcher, Dominique Hazaël-Massieux, and Stefan Håkansson. Dan Burnett would like to acknowledge the significant support received from Voxeo and Aspect during the development of this specification.

B. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### B.1 Normative references<a href="#normative-references" class="self-link"></a>

\[COOKIES\]  
[HTTP State Management Mechanism](https://httpwg.org/specs/rfc6265.html). A. Barth. IETF. April 2011. Proposed Standard. URL: <https://httpwg.org/specs/rfc6265.html>

\[dom\]  
[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://dom.spec.whatwg.org/>

\[ECMA-262\]  
[ECMAScript Language Specification](https://tc39.es/ecma262/multipage/). Ecma International. URL: <https://tc39.es/ecma262/multipage/>

\[HTML\]  
[HTML Standard](https://html.spec.whatwg.org/multipage/). Anne van Kesteren; Domenic Denicola; Ian Hickson; Philip Jägenstedt; Simon Pieters. WHATWG. Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[infra\]  
[Infra Standard](https://infra.spec.whatwg.org/). Anne van Kesteren; Domenic Denicola. WHATWG. Living Standard. URL: <https://infra.spec.whatwg.org/>

\[permissions\]  
[Permissions](https://www.w3.org/TR/permissions/). Marcos Caceres; Mike Taylor; Jeffrey Yasskin. W3C. 12 October 2021. W3C Working Draft. URL: <https://www.w3.org/TR/permissions/>

\[permissions-policy\]  
[Permissions Policy](https://www.w3.org/TR/permissions-policy-1/). Ian Clelland. W3C. 16 July 2020. W3C Working Draft. URL: <https://www.w3.org/TR/permissions-policy-1/>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://www.rfc-editor.org/rfc/rfc2119>

\[rfc4122\]  
[A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122). P. Leach; M. Mealling; R. Salz. IETF. July 2005. Proposed Standard. URL: <https://www.rfc-editor.org/rfc/rfc4122>

\[RFC8174\]  
[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: <https://www.rfc-editor.org/rfc/rfc8174>

\[WEBAUDIO\]  
[Web Audio API](https://www.w3.org/TR/webaudio/). Paul Adenot; Hongchan Choi. W3C. 17 June 2021. W3C Recommendation. URL: <https://www.w3.org/TR/webaudio/>

\[WEBIDL\]  
[Web IDL Standard](https://webidl.spec.whatwg.org/). Edgar Chen; Timothy Gu. WHATWG. Living Standard. URL: <https://webidl.spec.whatwg.org/>

\[WEBRTC\]  
[WebRTC 1.0: Real-Time Communication Between Browsers](https://www.w3.org/TR/webrtc/). Cullen Jennings; Henrik Boström; Jan-Ivar Bruaroey. W3C. 26 January 2021. W3C Recommendation. URL: <https://www.w3.org/TR/webrtc/>

### B.2 Informative references<a href="#informative-references" class="self-link"></a>

\[image-capture\]  
[MediaStream Image Capture](https://www.w3.org/TR/image-capture/). Miguel Casas-sanchez; Rijubrata Bhaumik; Giridhar Mandyam. W3C. 6 April 2021. W3C Working Draft. URL: <https://www.w3.org/TR/image-capture/>

\[mediacapture-fromelement\]  
[Media Capture from DOM Elements](https://www.w3.org/TR/mediacapture-fromelement/). Martin Thomson; Miguel Casas-sanchez; Emircan Uysaler. W3C. 5 July 2021. W3C Working Draft. URL: <https://www.w3.org/TR/mediacapture-fromelement/>

\[mediastream-recording\]  
[MediaStream Recording](https://www.w3.org/TR/mediastream-recording/). Miguel Casas-sanchez; James Barnett; Travis Leithead. W3C. 4 June 2021. W3C Working Draft. URL: <https://www.w3.org/TR/mediastream-recording/>

[↑](#title)

<span class="caret"></span>

<a href="#dfn-user-agent" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-source" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dfn-source-1 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#dfn-settings" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dfn-settings-1 "§ 3. Terminology")
-   [§ 4.3.7 MediaTrackSettings](#ref-for-dfn-settings-2 "§ 4.3.7 MediaTrackSettings")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dfn-settings-3 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dfn-settings-4 "Reference 2") [(3)](#ref-for-dfn-settings-5 "Reference 3")
-   [§ 11.1 Interface Definition](#ref-for-dfn-settings-6 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dfn-capabilities" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dfn-capabilities-1 "§ 3. Terminology")
-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dfn-capabilities-2 "§ 4.3.4 MediaTrackSupportedConstraints")
-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dfn-capabilities-3 "§ 4.3.5 MediaTrackCapabilities")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dfn-capabilities-4 "§ 5. The model: sources, sinks, constraints, and settings")
-   [§ 11.1 Interface Definition](#ref-for-dfn-capabilities-5 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dfn-constraint" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-constraint-1 "§ Methods")

<span class="caret"></span>

<a href="#dfn-required-constraints" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dfn-required-constraints-1 "§ 3. Terminology")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dfn-required-constraints-2 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dfn-required-constraints-3 "Reference 2") [(3)](#ref-for-dfn-required-constraints-4 "Reference 3")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-required-constraints-5 "§ 10.2 MediaDevices Interface Extensions")
-   [§ Methods](#ref-for-dfn-required-constraints-6 "§ Methods") [(2)](#ref-for-dfn-required-constraints-7 "Reference 2") [(3)](#ref-for-dfn-required-constraints-10 "Reference 3")
-   [§ 10.6 Implementation Suggestions](#ref-for-dfn-required-constraints-8 "§ 10.6 Implementation Suggestions")
-   [§ 11. Constrainable Pattern](#ref-for-dfn-required-constraints-9 "§ 11. Constrainable Pattern")

<span class="caret"></span>

<a href="#dfn-optional-basic-constraints" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 11. Constrainable Pattern](#ref-for-dfn-optional-basic-constraints-1 "§ 11. Constrainable Pattern")

<span class="caret"></span>

<a href="#dfn-advanced-constraints" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dfn-advanced-constraints-1 "§ 3. Terminology") [(2)](#ref-for-dfn-advanced-constraints-2 "Reference 2")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-advanced-constraints-3 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dom-mediastreamtrack" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.1 Introduction](#ref-for-dom-mediastreamtrack-1 "§ 4.1 Introduction") [(2)](#ref-for-dom-mediastreamtrack-2 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-3 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-4 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-5 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-6 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-7 "Reference 7")
-   [§ 4.2 MediaStream](#ref-for-dom-mediastreamtrack-8 "§ 4.2 MediaStream") [(2)](#ref-for-dom-mediastreamtrack-9 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-10 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-11 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-12 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-13 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-14 "Reference 7") [(8)](#ref-for-dom-mediastreamtrack-15 "Reference 8") [(9)](#ref-for-dom-mediastreamtrack-16 "Reference 9") [(10)](#ref-for-dom-mediastreamtrack-17 "Reference 10") [(11)](#ref-for-dom-mediastreamtrack-18 "Reference 11") [(12)](#ref-for-dom-mediastreamtrack-19 "Reference 12") [(13)](#ref-for-dom-mediastreamtrack-20 "Reference 13") [(14)](#ref-for-dom-mediastreamtrack-21 "Reference 14") [(15)](#ref-for-dom-mediastreamtrack-22 "Reference 15") [(16)](#ref-for-dom-mediastreamtrack-23 "Reference 16")
-   [§ Methods](#ref-for-dom-mediastreamtrack-24 "§ Methods") [(2)](#ref-for-dom-mediastreamtrack-25 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-26 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-27 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-28 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-29 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-30 "Reference 7") [(8)](#ref-for-dom-mediastreamtrack-31 "Reference 8") [(9)](#ref-for-dom-mediastreamtrack-32 "Reference 9") [(10)](#ref-for-dom-mediastreamtrack-74 "Reference 10") [(11)](#ref-for-dom-mediastreamtrack-75 "Reference 11") [(12)](#ref-for-dom-mediastreamtrack-76 "Reference 12") [(13)](#ref-for-dom-mediastreamtrack-77 "Reference 13") [(14)](#ref-for-dom-mediastreamtrack-78 "Reference 14") [(15)](#ref-for-dom-mediastreamtrack-79 "Reference 15") [(16)](#ref-for-dom-mediastreamtrack-80 "Reference 16") [(17)](#ref-for-dom-mediastreamtrack-81 "Reference 17") [(18)](#ref-for-dom-mediastreamtrack-82 "Reference 18") [(19)](#ref-for-dom-mediastreamtrack-83 "Reference 19") [(20)](#ref-for-dom-mediastreamtrack-84 "Reference 20") [(21)](#ref-for-dom-mediastreamtrack-85 "Reference 21") [(22)](#ref-for-dom-mediastreamtrack-115 "Reference 22") [(23)](#ref-for-dom-mediastreamtrack-116 "Reference 23") [(24)](#ref-for-dom-mediastreamtrack-117 "Reference 24") [(25)](#ref-for-dom-mediastreamtrack-118 "Reference 25") [(26)](#ref-for-dom-mediastreamtrack-119 "Reference 26") [(27)](#ref-for-dom-mediastreamtrack-120 "Reference 27")
-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-33 "§ 4.3 MediaStreamTrack") [(2)](#ref-for-dom-mediastreamtrack-34 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-35 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-36 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-37 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-38 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-39 "Reference 7") [(8)](#ref-for-dom-mediastreamtrack-40 "Reference 8") [(9)](#ref-for-dom-mediastreamtrack-41 "Reference 9") [(10)](#ref-for-dom-mediastreamtrack-42 "Reference 10") [(11)](#ref-for-dom-mediastreamtrack-43 "Reference 11")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastreamtrack-44 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-dom-mediastreamtrack-45 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-46 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-47 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-48 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-49 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-50 "Reference 7") [(8)](#ref-for-dom-mediastreamtrack-51 "Reference 8") [(9)](#ref-for-dom-mediastreamtrack-52 "Reference 9") [(10)](#ref-for-dom-mediastreamtrack-53 "Reference 10") [(11)](#ref-for-dom-mediastreamtrack-54 "Reference 11") [(12)](#ref-for-dom-mediastreamtrack-55 "Reference 12") [(13)](#ref-for-dom-mediastreamtrack-56 "Reference 13") [(14)](#ref-for-dom-mediastreamtrack-57 "Reference 14") [(15)](#ref-for-dom-mediastreamtrack-58 "Reference 15") [(16)](#ref-for-dom-mediastreamtrack-59 "Reference 16") [(17)](#ref-for-dom-mediastreamtrack-60 "Reference 17") [(18)](#ref-for-dom-mediastreamtrack-61 "Reference 18") [(19)](#ref-for-dom-mediastreamtrack-62 "Reference 19") [(20)](#ref-for-dom-mediastreamtrack-63 "Reference 20") [(21)](#ref-for-dom-mediastreamtrack-64 "Reference 21") [(22)](#ref-for-dom-mediastreamtrack-65 "Reference 22") [(23)](#ref-for-dom-mediastreamtrack-66 "Reference 23") [(24)](#ref-for-dom-mediastreamtrack-67 "Reference 24")
-   [§ 4.3.2 Tracks and Constraints](#ref-for-dom-mediastreamtrack-68 "§ 4.3.2 Tracks and Constraints")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-69 "§ 4.3.3 Interface Definition") [(2)](#ref-for-dom-mediastreamtrack-70 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-71 "§ Attributes") [(2)](#ref-for-dom-mediastreamtrack-72 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-73 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-99 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-100 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-114 "Reference 6")
-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediastreamtrack-86 "§ 4.3.4 MediaTrackSupportedConstraints") [(2)](#ref-for-dom-mediastreamtrack-87 "Reference 2")
-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediastreamtrack-88 "§ 4.3.5 MediaTrackCapabilities")
-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediastreamtrack-89 "§ 4.3.7 MediaTrackSettings")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediastreamtrack-90 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-mediastreamtrack-91 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-92 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-93 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-94 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-95 "Reference 6") [(7)](#ref-for-dom-mediastreamtrack-96 "Reference 7")
-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrack-97 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-dom-mediastreamtrack-98 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-101 "Reference 3")
-   [§ Dictionary MediaStreamTrackEventInit Members](#ref-for-dom-mediastreamtrack-102 "§ Dictionary MediaStreamTrackEventInit Members")
-   [§ 6. MediaStreams in Media Elements](#ref-for-dom-mediastreamtrack-103 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-dom-mediastreamtrack-104 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-105 "Reference 3")
-   [§ 8. Event summary](#ref-for-dom-mediastreamtrack-106 "§ 8. Event summary") [(2)](#ref-for-dom-mediastreamtrack-107 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-108 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-109 "Reference 4") [(5)](#ref-for-dom-mediastreamtrack-110 "Reference 5") [(6)](#ref-for-dom-mediastreamtrack-111 "Reference 6")
-   [§ 9.2.2 Device information exposure](#ref-for-dom-mediastreamtrack-112 "§ 9.2.2 Device information exposure") [(2)](#ref-for-dom-mediastreamtrack-113 "Reference 2")
-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediastreamtrack-121 "§ 10.3 MediaStreamConstraints")
-   [§ 11.1 Interface Definition](#ref-for-dom-mediastreamtrack-122 "§ 11.1 Interface Definition")
-   [§ 11.4 Settings](#ref-for-dom-mediastreamtrack-123 "§ 11.4 Settings")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamtrack-124 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)") [(2)](#ref-for-dom-mediastreamtrack-125 "Reference 2")
-   [§ 16. Extensibility](#ref-for-dom-mediastreamtrack-126 "§ 16. Extensibility")
-   [§ 16.3 Defining new consumers of MediaStreams and MediaStreamTracks](#ref-for-dom-mediastreamtrack-127 "§ 16.3 Defining new consumers of MediaStreams and MediaStreamTracks") [(2)](#ref-for-dom-mediastreamtrack-128 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-129 "Reference 3")

<span class="caret"></span>

<a href="#dom-mediastream" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.1 Introduction](#ref-for-dom-mediastream-1 "§ 4.1 Introduction") [(2)](#ref-for-dom-mediastream-2 "Reference 2") [(3)](#ref-for-dom-mediastream-3 "Reference 3") [(4)](#ref-for-dom-mediastream-4 "Reference 4") [(5)](#ref-for-dom-mediastream-5 "Reference 5") [(6)](#ref-for-dom-mediastream-6 "Reference 6") [(7)](#ref-for-dom-mediastream-7 "Reference 7") [(8)](#ref-for-dom-mediastream-8 "Reference 8") [(9)](#ref-for-dom-mediastream-9 "Reference 9") [(10)](#ref-for-dom-mediastream-10 "Reference 10") [(11)](#ref-for-dom-mediastream-11 "Reference 11") [(12)](#ref-for-dom-mediastream-12 "Reference 12") [(13)](#ref-for-dom-mediastream-13 "Reference 13") [(14)](#ref-for-dom-mediastream-14 "Reference 14")
-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-15 "§ 4.2 MediaStream") [(2)](#ref-for-dom-mediastream-16 "Reference 2") [(3)](#ref-for-dom-mediastream-17 "Reference 3") [(4)](#ref-for-dom-mediastream-18 "Reference 4") [(5)](#ref-for-dom-mediastream-19 "Reference 5") [(6)](#ref-for-dom-mediastream-20 "Reference 6") [(7)](#ref-for-dom-mediastream-21 "Reference 7") [(8)](#ref-for-dom-mediastream-22 "Reference 8") [(9)](#ref-for-dom-mediastream-23 "Reference 9") [(10)](#ref-for-dom-mediastream-24 "Reference 10") [(11)](#ref-for-dom-mediastream-25 "Reference 11") [(12)](#ref-for-dom-mediastream-26 "Reference 12") [(13)](#ref-for-dom-mediastream-27 "Reference 13") [(14)](#ref-for-dom-mediastream-28 "Reference 14") [(15)](#ref-for-dom-mediastream-29 "Reference 15") [(16)](#ref-for-dom-mediastream-30 "Reference 16") [(17)](#ref-for-dom-mediastream-31 "Reference 17") [(18)](#ref-for-dom-mediastream-32 "Reference 18") [(19)](#ref-for-dom-mediastream-33 "Reference 19") [(20)](#ref-for-dom-mediastream-34 "Reference 20") [(21)](#ref-for-dom-mediastream-35 "Reference 21")
-   [§ Constructors](#ref-for-dom-mediastream-36 "§ Constructors") [(2)](#ref-for-dom-mediastream-37 "Reference 2") [(3)](#ref-for-dom-mediastream-38 "Reference 3")
-   [§ Attributes](#ref-for-dom-mediastream-39 "§ Attributes") [(2)](#ref-for-dom-mediastream-40 "Reference 2") [(3)](#ref-for-dom-mediastream-51 "Reference 3")
-   [§ Methods](#ref-for-dom-mediastream-41 "§ Methods") [(2)](#ref-for-dom-mediastream-42 "Reference 2") [(3)](#ref-for-dom-mediastream-43 "Reference 3") [(4)](#ref-for-dom-mediastream-44 "Reference 4") [(5)](#ref-for-dom-mediastream-45 "Reference 5") [(6)](#ref-for-dom-mediastream-46 "Reference 6") [(7)](#ref-for-dom-mediastream-47 "Reference 7") [(8)](#ref-for-dom-mediastream-48 "Reference 8") [(9)](#ref-for-dom-mediastream-86 "Reference 9") [(10)](#ref-for-dom-mediastream-87 "Reference 10") [(11)](#ref-for-dom-mediastream-89 "Reference 11") [(12)](#ref-for-dom-mediastream-91 "Reference 12") [(13)](#ref-for-dom-mediastream-92 "Reference 13")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastream-49 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-dom-mediastream-50 "Reference 2")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastream-52 "§ 4.3.3 Interface Definition")
-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastream-53 "§ 4.4 MediaStreamTrackEvent")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dom-mediastream-54 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dom-mediastream-55 "Reference 2") [(3)](#ref-for-dom-mediastream-56 "Reference 3") [(4)](#ref-for-dom-mediastream-57 "Reference 4")
-   [§ 6. MediaStreams in Media Elements](#ref-for-dom-mediastream-58 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-dom-mediastream-59 "Reference 2") [(3)](#ref-for-dom-mediastream-60 "Reference 3") [(4)](#ref-for-dom-mediastream-61 "Reference 4") [(5)](#ref-for-dom-mediastream-62 "Reference 5") [(6)](#ref-for-dom-mediastream-63 "Reference 6") [(7)](#ref-for-dom-mediastream-64 "Reference 7") [(8)](#ref-for-dom-mediastream-65 "Reference 8") [(9)](#ref-for-dom-mediastream-66 "Reference 9") [(10)](#ref-for-dom-mediastream-67 "Reference 10") [(11)](#ref-for-dom-mediastream-68 "Reference 11") [(12)](#ref-for-dom-mediastream-69 "Reference 12") [(13)](#ref-for-dom-mediastream-70 "Reference 13") [(14)](#ref-for-dom-mediastream-71 "Reference 14") [(15)](#ref-for-dom-mediastream-72 "Reference 15") [(16)](#ref-for-dom-mediastream-73 "Reference 16") [(17)](#ref-for-dom-mediastream-74 "Reference 17") [(18)](#ref-for-dom-mediastream-75 "Reference 18") [(19)](#ref-for-dom-mediastream-76 "Reference 19") [(20)](#ref-for-dom-mediastream-77 "Reference 20") [(21)](#ref-for-dom-mediastream-78 "Reference 21") [(22)](#ref-for-dom-mediastream-79 "Reference 22") [(23)](#ref-for-dom-mediastream-80 "Reference 23") [(24)](#ref-for-dom-mediastream-81 "Reference 24") [(25)](#ref-for-dom-mediastream-82 "Reference 25")
-   [§ 8. Event summary](#ref-for-dom-mediastream-83 "§ 8. Event summary") [(2)](#ref-for-dom-mediastream-84 "Reference 2") [(3)](#ref-for-dom-mediastream-85 "Reference 3")
-   [§ 10. Obtaining local multimedia content](#ref-for-dom-mediastream-88 "§ 10. Obtaining local multimedia content")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediastream-90 "§ 10.2 MediaDevices Interface Extensions")
-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediastream-93 "§ 10.3 MediaStreamConstraints")
-   [§ Dictionary MediaStreamConstraints Members](#ref-for-dom-mediastream-94 "§ Dictionary MediaStreamConstraints Members") [(2)](#ref-for-dom-mediastream-95 "Reference 2") [(3)](#ref-for-dom-mediastream-96 "Reference 3") [(4)](#ref-for-dom-mediastream-97 "Reference 4")
-   [§ 10.4 NavigatorUserMediaSuccessCallback](#ref-for-dom-mediastream-98 "§ 10.4 NavigatorUserMediaSuccessCallback")
-   [§ Callback NavigatorUserMediaSuccessCallback Parameters](#ref-for-dom-mediastream-99 "§ Callback NavigatorUserMediaSuccessCallback Parameters") [(2)](#ref-for-dom-mediastream-100 "Reference 2")
-   [§ Callback NavigatorUserMediaErrorCallback Parameters](#ref-for-dom-mediastream-101 "§ Callback NavigatorUserMediaErrorCallback Parameters")
-   [§ 10.6 Implementation Suggestions](#ref-for-dom-mediastream-102 "§ 10.6 Implementation Suggestions")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastream-103 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)") [(2)](#ref-for-dom-mediastream-104 "Reference 2")
-   [§ 16. Extensibility](#ref-for-dom-mediastream-105 "§ 16. Extensibility")
-   [§ 16.3 Defining new consumers of MediaStreams and MediaStreamTracks](#ref-for-dom-mediastream-106 "§ 16.3 Defining new consumers of MediaStreams and MediaStreamTracks")

<span class="caret"></span>

<a href="#dom-mediastream-constructor" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-constructor-1 "§ 4.2 MediaStream")

<span class="caret"></span>

<a href="#track-set" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-track-set-1 "§ 4.2 MediaStream") [(2)](#ref-for-track-set-2 "Reference 2") [(3)](#ref-for-track-set-3 "Reference 3") [(4)](#ref-for-track-set-4 "Reference 4") [(5)](#ref-for-track-set-5 "Reference 5") [(6)](#ref-for-track-set-6 "Reference 6") [(7)](#ref-for-track-set-7 "Reference 7") [(8)](#ref-for-track-set-8 "Reference 8") [(9)](#ref-for-track-set-9 "Reference 9")
-   [§ Methods](#ref-for-track-set-10 "§ Methods") [(2)](#ref-for-track-set-11 "Reference 2") [(3)](#ref-for-track-set-12 "Reference 3") [(4)](#ref-for-track-set-13 "Reference 4") [(5)](#ref-for-track-set-14 "Reference 5") [(6)](#ref-for-track-set-15 "Reference 6") [(7)](#ref-for-track-set-16 "Reference 7") [(8)](#ref-for-track-set-17 "Reference 8") [(9)](#ref-for-track-set-18 "Reference 9") [(10)](#ref-for-track-set-19 "Reference 10") [(11)](#ref-for-track-set-20 "Reference 11") [(12)](#ref-for-track-set-21 "Reference 12")
-   [§ 4.4 MediaStreamTrackEvent](#ref-for-track-set-22 "§ 4.4 MediaStreamTrackEvent")
-   [§ 6. MediaStreams in Media Elements](#ref-for-track-set-23 "§ 6. MediaStreams in Media Elements")

<span class="caret"></span>

<a href="#dfn-consumer" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.1 Introduction](#ref-for-dfn-consumer-1 "§ 4.1 Introduction")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dfn-consumer-2 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)") [(2)](#ref-for-dfn-consumer-3 "Reference 2")

<span class="caret"></span>

<a href="#stream-active" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Attributes](#ref-for-stream-active-1 "§ Attributes")
-   [§ 6. MediaStreams in Media Elements](#ref-for-stream-active-2 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-stream-active-3 "Reference 2") [(3)](#ref-for-stream-active-4 "Reference 3")

<span class="caret"></span>

<a href="#stream-inactive" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 6. MediaStreams in Media Elements](#ref-for-stream-inactive-1 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-stream-inactive-2 "Reference 2")

<span class="caret"></span>

<a href="#stream-audible" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 6. MediaStreams in Media Elements](#ref-for-stream-audible-1 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-stream-audible-2 "Reference 2") [(3)](#ref-for-stream-audible-3 "Reference 3")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-stream-audible-4 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#stream-inaudible" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 6. MediaStreams in Media Elements](#ref-for-stream-inaudible-1 "§ 6. MediaStreams in Media Elements") [(2)](#ref-for-stream-inaudible-2 "Reference 2")

<span class="caret"></span>

<a href="#add-track" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#remove-track" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-mediastream-constructor!overload-1" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-mediastream-constructor!overload-2" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-mediastream-id" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-id-1 "§ 4.2 MediaStream") [(2)](#ref-for-dom-mediastream-id-2 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediastream-id-3 "§ Attributes") [(2)](#ref-for-dom-mediastream-id-4 "Reference 2") [(3)](#ref-for-dom-mediastream-id-6 "Reference 3")
-   [§ Methods](#ref-for-dom-mediastream-id-5 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-active" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-active-1 "§ 4.2 MediaStream")
-   [§ Attributes](#ref-for-dom-mediastream-active-2 "§ Attributes")

<span class="caret"></span>

<a href="#dom-mediastream-onaddtrack" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-onaddtrack-1 "§ 4.2 MediaStream")

<span class="caret"></span>

<a href="#dom-mediastream-onremovetrack" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-onremovetrack-1 "§ 4.2 MediaStream")

<span class="caret"></span>

<a href="#dom-mediastream-getaudiotracks" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-getaudiotracks-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastream-getaudiotracks-2 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-getvideotracks" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-getvideotracks-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastream-getvideotracks-2 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-gettracks" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-gettracks-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastream-gettracks-2 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-gettrackbyid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-gettrackbyid-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastream-gettrackbyid-2 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-addtrack" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-addtrack-1 "§ 4.2 MediaStream")
-   [§ Attributes](#ref-for-dom-mediastream-addtrack-2 "§ Attributes")
-   [§ Methods](#ref-for-dom-mediastream-addtrack-3 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-removetrack" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-removetrack-1 "§ 4.2 MediaStream")
-   [§ Attributes](#ref-for-dom-mediastream-removetrack-2 "§ Attributes")
-   [§ Methods](#ref-for-dom-mediastream-removetrack-3 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastream-clone" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1647796506" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastream-clone-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastream-clone-2 "§ Methods")

<span class="caret"></span>

<a href="#source-stopped" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-source-stopped-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-source-stopped-2 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-source-stopped-3 "Reference 2")
-   [§ Methods](#ref-for-source-stopped-4 "§ Methods")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-source-stopped-5 "§ 5. The model: sources, sinks, constraints, and settings")
-   [§ 9.2 MediaDevices](#ref-for-source-stopped-6 "§ 9.2 MediaDevices")

<span class="caret"></span>

<a href="#dfn-initialize-the-underlying-source" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-initialize-the-underlying-source-1 "§ 4.3 MediaStreamTrack")

<span class="caret"></span>

<a href="#dfn-tiesourcetocontext" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-tiesourcetocontext-1 "§ 4.3 MediaStreamTrack")

<span class="caret"></span>

<a href="#dfn-stop-all-sources" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-stop-all-sources-1 "§ 4.3 MediaStreamTrack")

<span class="caret"></span>

<a href="#track-clone" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-track-clone-1 "§ Methods") [(2)](#ref-for-track-clone-2 "Reference 2")

<span class="caret"></span>

<a href="#track-ended" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-track-ended-1 "§ 4.2 MediaStream") [(2)](#ref-for-track-ended-2 "Reference 2") [(3)](#ref-for-track-ended-3 "Reference 3") [(4)](#ref-for-track-ended-4 "Reference 4")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-track-ended-5 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-track-ended-6 "Reference 2")
-   [§ Attributes](#ref-for-track-ended-7 "§ Attributes")
-   [§ Methods](#ref-for-track-ended-8 "§ Methods")
-   [§ 4.3.3 Interface Definition](#ref-for-track-ended-9 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#ends-nostop" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-ends-nostop-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-ends-nostop-2 "Reference 2")

<span class="caret"></span>

<a href="#dfn-device-permission-revocation-algorithm" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#track-muted" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-track-muted-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-track-muted-2 "Reference 2") [(3)](#ref-for-track-muted-3 "Reference 3") [(4)](#ref-for-track-muted-4 "Reference 4") [(5)](#ref-for-track-muted-5 "Reference 5") [(6)](#ref-for-track-muted-6 "Reference 6")
-   [§ Attributes](#ref-for-track-muted-7 "§ Attributes")
-   [§ 10.6 Implementation Suggestions](#ref-for-track-muted-8 "§ 10.6 Implementation Suggestions") [(2)](#ref-for-track-muted-9 "Reference 2") [(3)](#ref-for-track-muted-10 "Reference 3") [(4)](#ref-for-track-muted-11 "Reference 4") [(5)](#ref-for-track-muted-12 "Reference 5")

<span class="caret"></span>

<a href="#set-track-muted" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-set-track-muted-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-set-track-muted-2 "Reference 2")

<span class="caret"></span>

<a href="#track-enabled" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-track-enabled-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-track-enabled-2 "Reference 2") [(3)](#ref-for-track-enabled-3 "Reference 3") [(4)](#ref-for-track-enabled-4 "Reference 4") [(5)](#ref-for-track-enabled-5 "Reference 5")
-   [§ Attributes](#ref-for-track-enabled-6 "§ Attributes") [(2)](#ref-for-track-enabled-7 "Reference 2")
-   [§ 10.6 Implementation Suggestions](#ref-for-track-enabled-8 "§ 10.6 Implementation Suggestions") [(2)](#ref-for-track-enabled-9 "Reference 2") [(3)](#ref-for-track-enabled-10 "Reference 3")

<span class="caret"></span>

<a href="#list-of-inherent-constrainable-track-properties" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-list-of-inherent-constrainable-track-properties-1 "§ Methods") [(2)](#ref-for-list-of-inherent-constrainable-track-properties-2 "Reference 2")
-   [§ 11.1 Interface Definition](#ref-for-list-of-inherent-constrainable-track-properties-3 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-kind" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastreamtrack-kind-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastreamtrack-kind-2 "§ Methods") [(2)](#ref-for-dom-mediastreamtrack-kind-3 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-kind-4 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-kind-8 "Reference 4")
-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-kind-5 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-kind-6 "§ 4.3.3 Interface Definition")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-kind-7 "§ Attributes")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamtrack-kind-9 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)") [(2)](#ref-for-dom-mediastreamtrack-kind-10 "Reference 2")

<span class="caret"></span>

<a href="#dfn-audio" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dfn-audio-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dfn-audio-2 "§ Methods") [(2)](#ref-for-dfn-audio-4 "Reference 2") [(3)](#ref-for-dfn-audio-5 "Reference 3")
-   [§ 9.2.3 Set device information exposure](#ref-for-dfn-audio-3 "§ 9.2.3 Set device information exposure")

<span class="caret"></span>

<a href="#dfn-video" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-video-1 "§ Methods") [(2)](#ref-for-dfn-video-3 "Reference 2") [(3)](#ref-for-dfn-video-4 "Reference 3")
-   [§ 9.2.3 Set device information exposure](#ref-for-dfn-video-2 "§ 9.2.3 Set device information exposure")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-id" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-dom-mediastreamtrack-id-1 "§ 4.2 MediaStream")
-   [§ Methods](#ref-for-dom-mediastreamtrack-id-2 "§ Methods")
-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-id-3 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-id-4 "§ 4.3.3 Interface Definition")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-id-5 "§ Attributes") [(2)](#ref-for-dom-mediastreamtrack-id-6 "Reference 2")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-label" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-label-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-label-2 "§ 4.3.3 Interface Definition")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-label-3 "§ Attributes")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamtrack-label-4 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-enabled" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-enabled-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastreamtrack-enabled-2 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-enabled-3 "§ 4.3.3 Interface Definition") [(2)](#ref-for-dom-mediastreamtrack-enabled-5 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-enabled-4 "§ Attributes")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-muted" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastreamtrack-muted-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-dom-mediastreamtrack-muted-2 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-muted-3 "Reference 3")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-muted-4 "§ 4.3.3 Interface Definition")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-muted-5 "§ Attributes")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-onmute" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-onmute-1 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-onunmute" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-onunmute-1 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-readystate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-readystate-1 "§ 4.3 MediaStreamTrack") [(2)](#ref-for-dom-mediastreamtrack-readystate-2 "Reference 2")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastreamtrack-readystate-3 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-dom-mediastreamtrack-readystate-4 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-readystate-5 "Reference 3")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-readystate-6 "§ 4.3.3 Interface Definition")
-   [§ Attributes](#ref-for-dom-mediastreamtrack-readystate-7 "§ Attributes")
-   [§ Methods](#ref-for-dom-mediastreamtrack-readystate-8 "§ Methods") [(2)](#ref-for-dom-mediastreamtrack-readystate-9 "Reference 2") [(3)](#ref-for-dom-mediastreamtrack-readystate-10 "Reference 3") [(4)](#ref-for-dom-mediastreamtrack-readystate-11 "Reference 4")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-onended" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-onended-1 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-clone" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-clone-1 "§ 4.3.3 Interface Definition")
-   [§ Methods](#ref-for-dom-mediastreamtrack-clone-2 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-stop" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediastreamtrack-stop-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediastreamtrack-stop-2 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-stop-3 "§ 4.3.3 Interface Definition")
-   [§ Methods](#ref-for-dom-mediastreamtrack-stop-4 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-getcapabilities" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dom-mediastreamtrack-getcapabilities-1 "§ 3. Terminology")
-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-getcapabilities-2 "§ 4.3.3 Interface Definition")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediastreamtrack-getcapabilities-3 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-mediastreamtrack-getcapabilities-4 "Reference 2")
-   [§ Methods](#ref-for-dom-mediastreamtrack-getcapabilities-5 "§ Methods")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamtrack-getcapabilities-6 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-getconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-getconstraints-1 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-getsettings" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-getsettings-1 "§ 4.3.3 Interface Definition")
-   [§ Methods](#ref-for-dom-mediastreamtrack-getsettings-2 "§ Methods")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediastreamtrack-getsettings-3 "§ 4.3.8 Constrainable Properties")
-   [§ 11. Constrainable Pattern](#ref-for-dom-mediastreamtrack-getsettings-4 "§ 11. Constrainable Pattern")

<span class="caret"></span>

<a href="#dom-mediastreamtrack-applyconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-103228790" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrack-applyconstraints-1 "§ 4.3.3 Interface Definition")
-   [§ Methods](#ref-for-dom-mediastreamtrack-applyconstraints-2 "§ Methods")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediastreamtrack-applyconstraints-3 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-mediastreamtrack-applyconstraints-4 "Reference 2")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dom-mediastreamtrack-applyconstraints-5 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dom-mediastreamtrack-applyconstraints-6 "Reference 2")
-   [§ 11.1 Interface Definition](#ref-for-dom-mediastreamtrack-applyconstraints-7 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dfn-must-not-be-exposed" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-must-not-be-exposed-1 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastreamtrackstate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-297015978" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediastreamtrackstate-1 "§ 4.3.3 Interface Definition") [(2)](#ref-for-dom-mediastreamtrackstate-3 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediastreamtrackstate-2 "§ Attributes")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamtrackstate-4 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#idl-def-MediaStreamTrackState.live" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-297015978" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-idl-def-MediaStreamTrackState.live-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-idl-def-MediaStreamTrackState.live-2 "Reference 2") [(3)](#ref-for-idl-def-MediaStreamTrackState.live-3 "Reference 3")
-   [§ 4.3.3 Interface Definition](#ref-for-idl-def-MediaStreamTrackState.live-4 "§ 4.3.3 Interface Definition") [(2)](#ref-for-idl-def-MediaStreamTrackState.live-5 "Reference 2")

<span class="caret"></span>

<a href="#idl-def-MediaStreamTrackState.ended" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-297015978" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-idl-def-MediaStreamTrackState.ended-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-idl-def-MediaStreamTrackState.ended-2 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-idl-def-MediaStreamTrackState.ended-3 "Reference 2")
-   [§ Methods](#ref-for-idl-def-MediaStreamTrackState.ended-4 "§ Methods") [(2)](#ref-for-idl-def-MediaStreamTrackState.ended-5 "Reference 2") [(3)](#ref-for-idl-def-MediaStreamTrackState.ended-6 "Reference 3") [(4)](#ref-for-idl-def-MediaStreamTrackState.ended-7 "Reference 4")
-   [§ 4.3.3 Interface Definition](#ref-for-idl-def-MediaStreamTrackState.ended-8 "§ 4.3.3 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-1 "§ 4.3.4 MediaTrackSupportedConstraints") [(2)](#ref-for-dom-mediatracksupportedconstraints-2 "Reference 2") [(3)](#ref-for-dom-mediatracksupportedconstraints-3 "Reference 3")
-   [§ Dictionary MediaTrackSupportedConstraints Members](#ref-for-dom-mediatracksupportedconstraints-4 "§ Dictionary MediaTrackSupportedConstraints Members")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediatracksupportedconstraints-5 "§ 10.2 MediaDevices Interface Extensions")
-   [§ 16.2 Defining a new constrainable property](#ref-for-dom-mediatracksupportedconstraints-6 "§ 16.2 Defining a new constrainable property")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-width" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-width-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-height" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-height-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-aspectratio" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-aspectratio-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-framerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-framerate-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-facingmode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-facingmode-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-resizemode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-resizemode-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-samplerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-samplerate-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-samplesize" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-samplesize-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-echocancellation" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-echocancellation-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-autogaincontrol" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-autogaincontrol-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-noisesuppression" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-noisesuppression-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-latency" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-latency-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-channelcount" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-channelcount-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-deviceid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-deviceid-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksupportedconstraints-groupid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1918094735" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediatracksupportedconstraints-groupid-1 "§ 4.3.4 MediaTrackSupportedConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediatrackcapabilities-1 "§ 4.3.3 Interface Definition")
-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-2 "§ 4.3.5 MediaTrackCapabilities") [(2)](#ref-for-dom-mediatrackcapabilities-3 "Reference 2")
-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-dom-mediatrackcapabilities-4 "§ Dictionary MediaTrackCapabilities Members")
-   [§ 9.4 Input-specific Device Info](#ref-for-dom-mediatrackcapabilities-5 "§ 9.4 Input-specific Device Info")
-   [§ Methods](#ref-for-dom-mediatrackcapabilities-6 "§ Methods")
-   [§ 11.3 Capabilities](#ref-for-dom-mediatrackcapabilities-7 "§ 11.3 Capabilities")
-   [§ 16.2 Defining a new constrainable property](#ref-for-dom-mediatrackcapabilities-8 "§ 16.2 Defining a new constrainable property")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-width" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-width-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-height" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-height-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-aspectratio" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-aspectratio-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-framerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-framerate-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-facingmode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-facingmode-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-resizemode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-resizemode-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-samplerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-samplerate-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-samplesize" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-samplesize-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-echocancellation" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-echocancellation-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-autogaincontrol" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-autogaincontrol-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-noisesuppression" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-noisesuppression-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-latency" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-latency-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-channelcount" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-channelcount-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-deviceid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-deviceid-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackcapabilities-groupid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1135231111" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-mediatrackcapabilities-groupid-1 "§ 4.3.5 MediaTrackCapabilities")

<span class="caret"></span>

<a href="#dom-mediatrackconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1990788238" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediatrackconstraints-1 "§ 4.3.3 Interface Definition") [(2)](#ref-for-dom-mediatrackconstraints-2 "Reference 2")
-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraints-3 "§ 4.3.6 MediaTrackConstraints")
-   [§ Dictionary MediaTrackConstraints Members](#ref-for-dom-mediatrackconstraints-4 "§ Dictionary MediaTrackConstraints Members")
-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediatrackconstraints-5 "§ 10.3 MediaStreamConstraints") [(2)](#ref-for-dom-mediatrackconstraints-6 "Reference 2")
-   [§ Dictionary MediaStreamConstraints Members](#ref-for-dom-mediatrackconstraints-7 "§ Dictionary MediaStreamConstraints Members") [(2)](#ref-for-dom-mediatrackconstraints-8 "Reference 2")
-   [§ 16.2 Defining a new constrainable property](#ref-for-dom-mediatrackconstraints-9 "§ 16.2 Defining a new constrainable property")

<span class="caret"></span>

<a href="#dom-mediatrackconstraints-advanced" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1990788238" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraints-advanced-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-1 "§ 4.3.6 MediaTrackConstraints") [(2)](#ref-for-dom-mediatrackconstraintset-2 "Reference 2") [(3)](#ref-for-dom-mediatrackconstraintset-4 "Reference 3")
-   [§ Dictionary MediaTrackConstraints Members](#ref-for-dom-mediatrackconstraintset-3 "§ Dictionary MediaTrackConstraints Members")
-   [§ Dictionary MediaTrackConstraintSet Members](#ref-for-dom-mediatrackconstraintset-5 "§ Dictionary MediaTrackConstraintSet Members")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-width" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-width-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-height" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-height-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-aspectratio" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-aspectratio-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-framerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-framerate-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-facingmode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-facingmode-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-resizemode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-resizemode-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-samplerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-samplerate-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-samplesize" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-samplesize-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-echocancellation" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-echocancellation-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-autogaincontrol" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-autogaincontrol-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-noisesuppression" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-noisesuppression-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-latency" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-latency-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-channelcount" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-channelcount-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-deviceid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-deviceid-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatrackconstraintset-groupid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1321993046" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-mediatrackconstraintset-groupid-1 "§ 4.3.6 MediaTrackConstraints")

<span class="caret"></span>

<a href="#dom-mediatracksettings" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.3 Interface Definition](#ref-for-dom-mediatracksettings-1 "§ 4.3.3 Interface Definition")
-   [§ Methods](#ref-for-dom-mediatracksettings-2 "§ Methods") [(2)](#ref-for-dom-mediatracksettings-3 "Reference 2")
-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-4 "§ 4.3.7 MediaTrackSettings") [(2)](#ref-for-dom-mediatracksettings-5 "Reference 2")
-   [§ Dictionary MediaTrackSettings Members](#ref-for-dom-mediatracksettings-6 "§ Dictionary MediaTrackSettings Members")
-   [§ 11.4 Settings](#ref-for-dom-mediatracksettings-7 "§ 11.4 Settings")
-   [§ 16.2 Defining a new constrainable property](#ref-for-dom-mediatracksettings-8 "§ 16.2 Defining a new constrainable property")

<span class="caret"></span>

<a href="#dom-mediatracksettings-width" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-width-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-height" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-height-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-aspectratio" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-aspectratio-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-framerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-framerate-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-facingmode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-facingmode-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-resizemode" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-resizemode-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-samplerate" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-samplerate-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-samplesize" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-samplesize-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-echocancellation" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-echocancellation-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-autogaincontrol" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-autogaincontrol-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-noisesuppression" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-noisesuppression-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-latency" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-latency-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-channelcount" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-channelcount-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-deviceid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-deviceid-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dom-mediatracksettings-groupid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1407576612" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.7 MediaTrackSettings](#ref-for-dom-mediatracksettings-groupid-1 "§ 4.3.7 MediaTrackSettings")

<span class="caret"></span>

<a href="#dfn-deviceid" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dfn-deviceid-1 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dfn-deviceid-2 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dfn-deviceid-3 "Reference 2")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-deviceid-4 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-groupid" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-groupid-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-width" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dfn-width-1 "§ 4.3.8 Constrainable Properties")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-width-2 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-height" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dfn-height-1 "§ 4.3.8 Constrainable Properties")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-height-2 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-framerate" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-framerate-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-aspectratio" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dfn-aspectratio-1 "§ 4.3.8 Constrainable Properties")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-aspectratio-2 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-facingmode" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-facingmode-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-resizemode" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-resizemode-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-primary-orientation" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dfn-primary-orientation-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dfn-primary-orientation-2 "Reference 2")
-   [§ 11.1 Interface Definition](#ref-for-dfn-primary-orientation-3 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dom-videofacingmodeenum" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1048699732" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videofacingmodeenum-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-videofacingmodeenum-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-videofacingmodeenum-user" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1048699732" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-dom-videofacingmodeenum-user-1 "§ Dictionary MediaTrackCapabilities Members")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videofacingmodeenum-user-2 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#dom-videofacingmodeenum-environment" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1048699732" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videofacingmodeenum-environment-1 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#dom-videofacingmodeenum-left" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1048699732" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-dom-videofacingmodeenum-left-1 "§ Dictionary MediaTrackCapabilities Members")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videofacingmodeenum-left-2 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#dom-videofacingmodeenum-right" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1048699732" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videofacingmodeenum-right-1 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#dom-videoresizemodeenum" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1960342920" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-videoresizemodeenum-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-videoresizemodeenum-2 "Reference 2")

<span class="caret"></span>

<a href="#idl-def-VideoResizeModeEnum.user" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1960342920" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-idl-def-VideoResizeModeEnum.user-1 "§ Dictionary MediaTrackCapabilities Members")
-   [§ 4.3.8 Constrainable Properties](#ref-for-idl-def-VideoResizeModeEnum.user-2 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#idl-def-VideoResizeModeEnum.right" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1960342920" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-idl-def-VideoResizeModeEnum.right-1 "§ 4.3.8 Constrainable Properties")

<span class="caret"></span>

<a href="#dfn-samplerate" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-samplerate-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-samplesize" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-samplesize-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-echocancellation" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-echocancellation-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-autogaincontrol" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-autogaincontrol-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-noisesuppression" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-noisesuppression-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-latency" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-latency-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-channelcount" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dfn-channelcount-1 "§ 10.2 MediaDevices Interface Extensions")

<span class="caret"></span>

<a href="#dfn-fire-a-track-event" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-mediastreamtrackevent" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrackevent-1 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-dom-mediastreamtrackevent-2 "Reference 2") [(3)](#ref-for-dom-mediastreamtrackevent-3 "Reference 3")
-   [§ Constructors](#ref-for-dom-mediastreamtrackevent-4 "§ Constructors")
-   [§ 8. Event summary](#ref-for-dom-mediastreamtrackevent-5 "§ 8. Event summary") [(2)](#ref-for-dom-mediastreamtrackevent-6 "Reference 2")

<span class="caret"></span>

<a href="#dom-mediastreamtrackevent-constructor" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1754772952" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrackevent-constructor-1 "§ 4.4 MediaStreamTrackEvent")

<span class="caret"></span>

<a href="#dom-mediastreamtrackevent-track" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1754772952" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrackevent-track-1 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-dom-mediastreamtrackevent-track-2 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediastreamtrackevent-track-3 "§ Attributes")

<span class="caret"></span>

<a href="#dom-mediastreamtrackeventinit" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1488799090" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrackeventinit-1 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-dom-mediastreamtrackeventinit-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-mediastreamtrackeventinit-track" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1488799090" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.4 MediaStreamTrackEvent](#ref-for-dom-mediastreamtrackeventinit-track-1 "§ 4.4 MediaStreamTrackEvent")

<span class="caret"></span>

<a href="#dfn-ended-video-playback" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-ended-audio-playback" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-overconstrainederror-constructor" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-overconstrainederror" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-425844780" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 7.1 OverconstrainedError Interface](#ref-for-dom-overconstrainederror-1 "§ 7.1 OverconstrainedError Interface")
-   [§ 7.1.1 Constructors](#ref-for-dom-overconstrainederror-2 "§ 7.1.1 Constructors")

<span class="caret"></span>

<a href="#dom-overconstrainederror-constraint" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-425844780" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 7.1 OverconstrainedError Interface](#ref-for-dom-overconstrainederror-constraint-1 "§ 7.1 OverconstrainedError Interface")

<span class="caret"></span>

<a href="#event-mediastream-addtrack" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-event-mediastream-addtrack-1 "§ 4.2 MediaStream")
-   [§ 4.4 MediaStreamTrackEvent](#ref-for-event-mediastream-addtrack-2 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-event-mediastream-addtrack-3 "Reference 2")

<span class="caret"></span>

<a href="#event-mediastream-removetrack" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.2 MediaStream](#ref-for-event-mediastream-removetrack-1 "§ 4.2 MediaStream")
-   [§ 4.4 MediaStreamTrackEvent](#ref-for-event-mediastream-removetrack-2 "§ 4.4 MediaStreamTrackEvent") [(2)](#ref-for-event-mediastream-removetrack-3 "Reference 2")

<span class="caret"></span>

<a href="#event-mediastreamtrack-mute" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-event-mediastreamtrack-mute-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-event-mediastreamtrack-mute-2 "Reference 2")
-   [§ Attributes](#ref-for-event-mediastreamtrack-mute-3 "§ Attributes")

<span class="caret"></span>

<a href="#event-mediastreamtrack-unmute" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-event-mediastreamtrack-unmute-1 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-event-mediastreamtrack-unmute-2 "Reference 2")
-   [§ Attributes](#ref-for-event-mediastreamtrack-unmute-3 "§ Attributes")

<span class="caret"></span>

<a href="#event-mediastreamtrack-ended" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-event-mediastreamtrack-ended-1 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ Attributes](#ref-for-event-mediastreamtrack-ended-2 "§ Attributes")

<span class="caret"></span>

<a href="#event-mediadevices-devicechange" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-event-mediadevices-devicechange-1 "§ 9.2 MediaDevices") [(2)](#ref-for-event-mediadevices-devicechange-2 "Reference 2")
-   [§ Attributes](#ref-for-event-mediadevices-devicechange-3 "§ Attributes")
-   [§ 15. Privacy and Security Considerations](#ref-for-event-mediadevices-devicechange-4 "§ 15. Privacy and Security Considerations")

<span class="caret"></span>

<a href="#dom-navigator-mediadevices" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1483683772" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.1 Navigator Interface Extensions](#ref-for-dom-navigator-mediadevices-1 "§ 9.1 Navigator Interface Extensions")
-   [§ Attributes](#ref-for-dom-navigator-mediadevices-2 "§ Attributes") [(2)](#ref-for-dom-navigator-mediadevices-3 "Reference 2")
-   [§ Methods](#ref-for-dom-navigator-mediadevices-4 "§ Methods") [(2)](#ref-for-dom-navigator-mediadevices-5 "Reference 2")

<span class="caret"></span>

<a href="#dom-mediadevices" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2019836602" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediadevices-1 "§ 4.3.4 MediaTrackSupportedConstraints")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dom-mediadevices-2 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dom-mediadevices-3 "Reference 2")
-   [§ 8. Event summary](#ref-for-dom-mediadevices-4 "§ 8. Event summary")
-   [§ 9.1 Navigator Interface Extensions](#ref-for-dom-mediadevices-5 "§ 9.1 Navigator Interface Extensions")
-   [§ 9.2 MediaDevices](#ref-for-dom-mediadevices-6 "§ 9.2 MediaDevices") [(2)](#ref-for-dom-mediadevices-7 "Reference 2") [(3)](#ref-for-dom-mediadevices-8 "Reference 3") [(4)](#ref-for-dom-mediadevices-9 "Reference 4") [(5)](#ref-for-dom-mediadevices-10 "Reference 5")
-   [§ 10. Obtaining local multimedia content](#ref-for-dom-mediadevices-11 "§ 10. Obtaining local multimedia content")
-   [§ 10.1 Legacy Interface Extensions](#ref-for-dom-mediadevices-12 "§ 10.1 Legacy Interface Extensions")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediadevices-13 "§ 10.2 MediaDevices Interface Extensions") [(2)](#ref-for-dom-mediadevices-14 "Reference 2") [(3)](#ref-for-dom-mediadevices-15 "Reference 3")

<span class="caret"></span>

<a href="#dfn-deviceslivemap" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-deviceslivemap-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dfn-deviceslivemap-2 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ 9.2 MediaDevices](#ref-for-dfn-deviceslivemap-3 "§ 9.2 MediaDevices")
-   [§ Methods](#ref-for-dfn-deviceslivemap-4 "§ Methods")
-   [§ 14. Privacy Indicator Requirements](#ref-for-dfn-deviceslivemap-5 "§ 14. Privacy Indicator Requirements") [(2)](#ref-for-dfn-deviceslivemap-6 "Reference 2") [(3)](#ref-for-dfn-deviceslivemap-7 "Reference 3") [(4)](#ref-for-dfn-deviceslivemap-8 "Reference 4")

<span class="caret"></span>

<a href="#dfn-devicesaccessiblemap" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-devicesaccessiblemap-1 "§ 4.3 MediaStreamTrack")
-   [§ 9.2 MediaDevices](#ref-for-dfn-devicesaccessiblemap-2 "§ 9.2 MediaDevices") [(2)](#ref-for-dfn-devicesaccessiblemap-3 "Reference 2") [(3)](#ref-for-dfn-devicesaccessiblemap-4 "Reference 3")
-   [§ Methods](#ref-for-dfn-devicesaccessiblemap-5 "§ Methods")
-   [§ 14. Privacy Indicator Requirements](#ref-for-dfn-devicesaccessiblemap-6 "§ 14. Privacy Indicator Requirements") [(2)](#ref-for-dfn-devicesaccessiblemap-7 "Reference 2") [(3)](#ref-for-dfn-devicesaccessiblemap-8 "Reference 3")

<span class="caret"></span>

<a href="#dfn-kindsaccessiblemap" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-dfn-kindsaccessiblemap-1 "§ 9.2 MediaDevices") [(2)](#ref-for-dfn-kindsaccessiblemap-2 "Reference 2") [(3)](#ref-for-dfn-kindsaccessiblemap-3 "Reference 3")
-   [§ 14. Privacy Indicator Requirements](#ref-for-dfn-kindsaccessiblemap-4 "§ 14. Privacy Indicator Requirements") [(2)](#ref-for-dfn-kindsaccessiblemap-5 "Reference 2")

<span class="caret"></span>

<a href="#dfn-storeddevicelist" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-dfn-storeddevicelist-1 "§ 9.2 MediaDevices") [(2)](#ref-for-dfn-storeddevicelist-2 "Reference 2")
-   [§ Methods](#ref-for-dfn-storeddevicelist-3 "§ Methods") [(2)](#ref-for-dfn-storeddevicelist-4 "Reference 2") [(3)](#ref-for-dfn-storeddevicelist-5 "Reference 3")
-   [§ 9.2.3 Set device information exposure](#ref-for-dfn-storeddevicelist-6 "§ 9.2.3 Set device information exposure") [(2)](#ref-for-dfn-storeddevicelist-7 "Reference 2")

<span class="caret"></span>

<a href="#dfn-canexposecamerainfo" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2.2 Device information exposure](#ref-for-dfn-canexposecamerainfo-1 "§ 9.2.2 Device information exposure")
-   [§ 9.2.3 Set device information exposure](#ref-for-dfn-canexposecamerainfo-2 "§ 9.2.3 Set device information exposure") [(2)](#ref-for-dfn-canexposecamerainfo-3 "Reference 2")

<span class="caret"></span>

<a href="#dfn-canexposemicrophoneinfo" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2.2 Device information exposure](#ref-for-dfn-canexposemicrophoneinfo-1 "§ 9.2.2 Device information exposure")
-   [§ 9.2.3 Set device information exposure](#ref-for-dfn-canexposemicrophoneinfo-2 "§ 9.2.3 Set device information exposure") [(2)](#ref-for-dfn-canexposemicrophoneinfo-3 "Reference 2")

<span class="caret"></span>

<a href="#dfn-mediastreamtracksources" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dfn-mediastreamtracksources-1 "§ 4.3 MediaStreamTrack") [(2)](#ref-for-dfn-mediastreamtracksources-2 "Reference 2")

<span class="caret"></span>

<a href="#dfn-device-change-notification-steps" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-dfn-device-change-notification-steps-1 "§ 9.2 MediaDevices") [(2)](#ref-for-dfn-device-change-notification-steps-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-mediadevices-ondevicechange" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2019836602" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-dom-mediadevices-ondevicechange-1 "§ 9.2 MediaDevices")

<span class="caret"></span>

<a href="#dom-mediadevices-enumeratedevices" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2019836602" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 8. Event summary](#ref-for-dom-mediadevices-enumeratedevices-1 "§ 8. Event summary")
-   [§ 9.2 MediaDevices](#ref-for-dom-mediadevices-enumeratedevices-2 "§ 9.2 MediaDevices") [(2)](#ref-for-dom-mediadevices-enumeratedevices-3 "Reference 2") [(3)](#ref-for-dom-mediadevices-enumeratedevices-4 "Reference 3") [(4)](#ref-for-dom-mediadevices-enumeratedevices-5 "Reference 4")
-   [§ Methods](#ref-for-dom-mediadevices-enumeratedevices-6 "§ Methods") [(2)](#ref-for-dom-mediadevices-enumeratedevices-9 "Reference 2")
-   [§ 9.2.1 Access control model](#ref-for-dom-mediadevices-enumeratedevices-7 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadevices-enumeratedevices-8 "Reference 2")
-   [§ 13. Permissions Policy Integration](#ref-for-dom-mediadevices-enumeratedevices-10 "§ 13. Permissions Policy Integration")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediadeviceinfo-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-mediadeviceinfo-2 "Reference 2")
-   [§ 9.2 MediaDevices](#ref-for-dom-mediadeviceinfo-3 "§ 9.2 MediaDevices")
-   [§ Methods](#ref-for-dom-mediadeviceinfo-4 "§ Methods") [(2)](#ref-for-dom-mediadeviceinfo-5 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-6 "Reference 3") [(4)](#ref-for-dom-mediadeviceinfo-7 "Reference 4") [(5)](#ref-for-dom-mediadeviceinfo-13 "Reference 5")
-   [§ 9.2.1 Access control model](#ref-for-dom-mediadeviceinfo-8 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadeviceinfo-9 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-10 "Reference 3")
-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-11 "§ 9.3 Device Info")
-   [§ 9.4 Input-specific Device Info](#ref-for-dom-mediadeviceinfo-12 "§ 9.4 Input-specific Device Info")

<span class="caret"></span>

<a href="#creating-a-device-info-object" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-creating-a-device-info-object-1 "§ Methods") [(2)](#ref-for-creating-a-device-info-object-2 "Reference 2") [(3)](#ref-for-creating-a-device-info-object-3 "Reference 3")

<span class="caret"></span>

<a href="#device-enumeration-can-proceed" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-device-enumeration-can-proceed-1 "§ 9.2 MediaDevices") [(2)](#ref-for-device-enumeration-can-proceed-2 "Reference 2") [(3)](#ref-for-device-enumeration-can-proceed-3 "Reference 3")
-   [§ Methods](#ref-for-device-enumeration-can-proceed-4 "§ Methods")

<span class="caret"></span>

<a href="#device-information-can-be-exposed" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-device-information-can-be-exposed-1 "§ 9.2 MediaDevices") [(2)](#ref-for-device-information-can-be-exposed-2 "Reference 2")
-   [§ Methods](#ref-for-device-information-can-be-exposed-3 "§ Methods") [(2)](#ref-for-device-information-can-be-exposed-5 "Reference 2")
-   [§ 9.2.2 Device information exposure](#ref-for-device-information-can-be-exposed-4 "§ 9.2.2 Device information exposure")

<span class="caret"></span>

<a href="#camera-information-can-be-exposed" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2.1 Access control model](#ref-for-camera-information-can-be-exposed-1 "§ 9.2.1 Access control model")
-   [§ 9.2.2 Device information exposure](#ref-for-camera-information-can-be-exposed-2 "§ 9.2.2 Device information exposure")

<span class="caret"></span>

<a href="#microphone-information-can-be-exposed" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 9.2.1 Access control model](#ref-for-microphone-information-can-be-exposed-1 "§ 9.2.1 Access control model")
-   [§ 9.2.2 Device information exposure](#ref-for-microphone-information-can-be-exposed-2 "§ 9.2.2 Device information exposure")

<span class="caret"></span>

<a href="#set-device-information-exposure" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-set-device-information-exposure-1 "§ Methods")

<span class="caret"></span>

<a href="#device-exposure-decision-non-camera-microphone" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ Methods](#ref-for-device-exposure-decision-non-camera-microphone-1 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo-deviceid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediadeviceinfo-deviceid-1 "§ 4.3 MediaStreamTrack")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediadeviceinfo-deviceid-2 "§ 4.3.1 Life-cycle and Media Flow")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediadeviceinfo-deviceid-3 "§ 4.3.8 Constrainable Properties")
-   [§ 9.2.1 Access control model](#ref-for-dom-mediadeviceinfo-deviceid-4 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadeviceinfo-deviceid-5 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-deviceid-6 "Reference 3") [(4)](#ref-for-dom-mediadeviceinfo-deviceid-7 "Reference 4") [(5)](#ref-for-dom-mediadeviceinfo-deviceid-8 "Reference 5") [(6)](#ref-for-dom-mediadeviceinfo-deviceid-9 "Reference 6")
-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-deviceid-10 "§ 9.3 Device Info")
-   [§ Attributes](#ref-for-dom-mediadeviceinfo-deviceid-11 "§ Attributes") [(2)](#ref-for-dom-mediadeviceinfo-deviceid-12 "Reference 2")
-   [§ Methods](#ref-for-dom-mediadeviceinfo-deviceid-13 "§ Methods")
-   [§ 10.6 Implementation Suggestions](#ref-for-dom-mediadeviceinfo-deviceid-14 "§ 10.6 Implementation Suggestions")
-   [§ 15. Privacy and Security Considerations](#ref-for-dom-mediadeviceinfo-deviceid-15 "§ 15. Privacy and Security Considerations")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo-kind" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.2.1 Access control model](#ref-for-dom-mediadeviceinfo-kind-1 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadeviceinfo-kind-2 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-kind-3 "Reference 3") [(4)](#ref-for-dom-mediadeviceinfo-kind-4 "Reference 4") [(5)](#ref-for-dom-mediadeviceinfo-kind-5 "Reference 5") [(6)](#ref-for-dom-mediadeviceinfo-kind-6 "Reference 6")
-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-kind-7 "§ 9.3 Device Info")
-   [§ Attributes](#ref-for-dom-mediadeviceinfo-kind-8 "§ Attributes")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo-label" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.2.1 Access control model](#ref-for-dom-mediadeviceinfo-label-1 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadeviceinfo-label-2 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-label-3 "Reference 3")
-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-label-4 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo-groupid" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediadeviceinfo-groupid-1 "§ 4.3.8 Constrainable Properties")
-   [§ 9.2.1 Access control model](#ref-for-dom-mediadeviceinfo-groupid-2 "§ 9.2.1 Access control model") [(2)](#ref-for-dom-mediadeviceinfo-groupid-3 "Reference 2") [(3)](#ref-for-dom-mediadeviceinfo-groupid-4 "Reference 3") [(4)](#ref-for-dom-mediadeviceinfo-groupid-5 "Reference 4") [(5)](#ref-for-dom-mediadeviceinfo-groupid-6 "Reference 5") [(6)](#ref-for-dom-mediadeviceinfo-groupid-7 "Reference 6")
-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-groupid-8 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#dom-mediadeviceinfo-tojson" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1099534138" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.3 Device Info](#ref-for-dom-mediadeviceinfo-tojson-1 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#dom-mediadevicekind" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-512153022" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.2 MediaDevices](#ref-for-dom-mediadevicekind-1 "§ 9.2 MediaDevices") [(2)](#ref-for-dom-mediadevicekind-2 "Reference 2") [(3)](#ref-for-dom-mediadevicekind-3 "Reference 3") [(4)](#ref-for-dom-mediadevicekind-4 "Reference 4")
-   [§ 9.3 Device Info](#ref-for-dom-mediadevicekind-5 "§ 9.3 Device Info") [(2)](#ref-for-dom-mediadevicekind-7 "Reference 2")
-   [§ Attributes](#ref-for-dom-mediadevicekind-6 "§ Attributes")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediadevicekind-8 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#idl-def-MediaDeviceKind.audioinput" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-512153022" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.3 Device Info](#ref-for-idl-def-MediaDeviceKind.audioinput-1 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#idl-def-MediaDeviceKind.audiooutput" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-512153022" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.3 Device Info](#ref-for-idl-def-MediaDeviceKind.audiooutput-1 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#idl-def-MediaDeviceKind.videoinput" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-512153022" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.3 Device Info](#ref-for-idl-def-MediaDeviceKind.videoinput-1 "§ 9.3 Device Info")

<span class="caret"></span>

<a href="#dom-inputdeviceinfo" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-516297588" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ Methods](#ref-for-dom-inputdeviceinfo-1 "§ Methods") [(2)](#ref-for-dom-inputdeviceinfo-3 "Reference 2")
-   [§ 9.4 Input-specific Device Info](#ref-for-dom-inputdeviceinfo-2 "§ 9.4 Input-specific Device Info")

<span class="caret"></span>

<a href="#dom-inputdeviceinfo-getcapabilities" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-516297588" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 9.4 Input-specific Device Info](#ref-for-dom-inputdeviceinfo-getcapabilities-1 "§ 9.4 Input-specific Device Info")

<span class="caret"></span>

<a href="#dom-navigator-getusermedia" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-453757607" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.1 Legacy Interface Extensions](#ref-for-dom-navigator-getusermedia-1 "§ 10.1 Legacy Interface Extensions")
-   [§ Methods](#ref-for-dom-navigator-getusermedia-2 "§ Methods")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-navigator-getusermedia-3 "§ 10.2 MediaDevices Interface Extensions") [(2)](#ref-for-dom-navigator-getusermedia-4 "Reference 2")
-   [§ Callback NavigatorUserMediaSuccessCallback Parameters](#ref-for-dom-navigator-getusermedia-5 "§ Callback NavigatorUserMediaSuccessCallback Parameters")
-   [§ Callback NavigatorUserMediaErrorCallback Parameters](#ref-for-dom-navigator-getusermedia-6 "§ Callback NavigatorUserMediaErrorCallback Parameters")

<span class="caret"></span>

<a href="#dom-mediadevices-getsupportedconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-823932458" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediadevices-getsupportedconstraints-1 "§ 10.2 MediaDevices Interface Extensions") [(2)](#ref-for-dom-mediadevices-getsupportedconstraints-2 "Reference 2")
-   [§ Methods](#ref-for-dom-mediadevices-getsupportedconstraints-3 "§ Methods")
-   [§ 11.1 Interface Definition](#ref-for-dom-mediadevices-getsupportedconstraints-4 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dom-mediadevices-getusermedia" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-823932458" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dom-mediadevices-getusermedia-1 "§ 3. Terminology") [(2)](#ref-for-dom-mediadevices-getusermedia-2 "Reference 2")
-   [§ 4.1 Introduction](#ref-for-dom-mediadevices-getusermedia-3 "§ 4.1 Introduction")
-   [§ 4.3 MediaStreamTrack](#ref-for-dom-mediadevices-getusermedia-4 "§ 4.3 MediaStreamTrack") [(2)](#ref-for-dom-mediadevices-getusermedia-5 "Reference 2")
-   [§ 4.3.1 Life-cycle and Media Flow](#ref-for-dom-mediadevices-getusermedia-6 "§ 4.3.1 Life-cycle and Media Flow") [(2)](#ref-for-dom-mediadevices-getusermedia-7 "Reference 2")
-   [§ 4.3.4 MediaTrackSupportedConstraints](#ref-for-dom-mediadevices-getusermedia-8 "§ 4.3.4 MediaTrackSupportedConstraints")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-mediadevices-getusermedia-9 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-mediadevices-getusermedia-10 "Reference 2") [(3)](#ref-for-dom-mediadevices-getusermedia-11 "Reference 3")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dom-mediadevices-getusermedia-12 "§ 5. The model: sources, sinks, constraints, and settings")
-   [§ 9.2 MediaDevices](#ref-for-dom-mediadevices-getusermedia-13 "§ 9.2 MediaDevices") [(2)](#ref-for-dom-mediadevices-getusermedia-14 "Reference 2") [(3)](#ref-for-dom-mediadevices-getusermedia-15 "Reference 3") [(4)](#ref-for-dom-mediadevices-getusermedia-16 "Reference 4")
-   [§ Methods](#ref-for-dom-mediadevices-getusermedia-17 "§ Methods") [(2)](#ref-for-dom-mediadevices-getusermedia-19 "Reference 2") [(3)](#ref-for-dom-mediadevices-getusermedia-20 "Reference 3") [(4)](#ref-for-dom-mediadevices-getusermedia-21 "Reference 4")
-   [§ 9.2.1 Access control model](#ref-for-dom-mediadevices-getusermedia-18 "§ 9.2.1 Access control model")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediadevices-getusermedia-22 "§ 10.2 MediaDevices Interface Extensions") [(2)](#ref-for-dom-mediadevices-getusermedia-23 "Reference 2")
-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediadevices-getusermedia-24 "§ 10.3 MediaStreamConstraints")
-   [§ 10.6 Implementation Suggestions](#ref-for-dom-mediadevices-getusermedia-25 "§ 10.6 Implementation Suggestions") [(2)](#ref-for-dom-mediadevices-getusermedia-26 "Reference 2") [(3)](#ref-for-dom-mediadevices-getusermedia-27 "Reference 3") [(4)](#ref-for-dom-mediadevices-getusermedia-28 "Reference 4") [(5)](#ref-for-dom-mediadevices-getusermedia-29 "Reference 5") [(6)](#ref-for-dom-mediadevices-getusermedia-30 "Reference 6") [(7)](#ref-for-dom-mediadevices-getusermedia-31 "Reference 7")
-   [§ 11.1 Interface Definition](#ref-for-dom-mediadevices-getusermedia-32 "§ 11.1 Interface Definition")
-   [§ 13. Permissions Policy Integration](#ref-for-dom-mediadevices-getusermedia-33 "§ 13. Permissions Policy Integration") [(2)](#ref-for-dom-mediadevices-getusermedia-34 "Reference 2")
-   [§ 14. Privacy Indicator Requirements](#ref-for-dom-mediadevices-getusermedia-35 "§ 14. Privacy Indicator Requirements")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediadevices-getusermedia-36 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")

<span class="caret"></span>

<a href="#dfn-same-permission" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-same-permission-1 "§ Methods")

<span class="caret"></span>

<a href="#dfn-allowed-required-constraints-for-device-selection" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-allowed-required-constraints-for-device-selection-1 "§ Methods")

<span class="caret"></span>

<a href="#dom-mediastreamconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2044375472" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.1 Legacy Interface Extensions](#ref-for-dom-mediastreamconstraints-1 "§ 10.1 Legacy Interface Extensions")
-   [§ Methods](#ref-for-dom-mediastreamconstraints-2 "§ Methods") [(2)](#ref-for-dom-mediastreamconstraints-4 "Reference 2")
-   [§ 10.2 MediaDevices Interface Extensions](#ref-for-dom-mediastreamconstraints-3 "§ 10.2 MediaDevices Interface Extensions")
-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediastreamconstraints-5 "§ 10.3 MediaStreamConstraints") [(2)](#ref-for-dom-mediastreamconstraints-6 "Reference 2")
-   [§ Dictionary MediaStreamConstraints Members](#ref-for-dom-mediastreamconstraints-7 "§ Dictionary MediaStreamConstraints Members")
-   [§ 16.1 Defining a new media type (beyond the existing Audio and Video types)](#ref-for-dom-mediastreamconstraints-8 "§ 16.1 Defining a new media type (beyond the existing Audio and Video types)")
-   [§ 16.2 Defining a new constrainable property](#ref-for-dom-mediastreamconstraints-9 "§ 16.2 Defining a new constrainable property")

<span class="caret"></span>

<a href="#dom-mediastreamconstraints-video" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2044375472" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediastreamconstraints-video-1 "§ 10.3 MediaStreamConstraints")

<span class="caret"></span>

<a href="#dom-mediastreamconstraints-audio" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2044375472" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.3 MediaStreamConstraints](#ref-for-dom-mediastreamconstraints-audio-1 "§ 10.3 MediaStreamConstraints")

<span class="caret"></span>

<a href="#dom-navigatorusermediasuccesscallback" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1645394190" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.1 Legacy Interface Extensions](#ref-for-dom-navigatorusermediasuccesscallback-1 "§ 10.1 Legacy Interface Extensions")
-   [§ 10.4 NavigatorUserMediaSuccessCallback](#ref-for-dom-navigatorusermediasuccesscallback-2 "§ 10.4 NavigatorUserMediaSuccessCallback")
-   [§ Callback NavigatorUserMediaSuccessCallback Parameters](#ref-for-dom-navigatorusermediasuccesscallback-3 "§ Callback NavigatorUserMediaSuccessCallback Parameters")

<span class="caret"></span>

<a href="#dom-navigatorusermediaerrorcallback" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1436108300" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 10.1 Legacy Interface Extensions](#ref-for-dom-navigatorusermediaerrorcallback-1 "§ 10.1 Legacy Interface Extensions")
-   [§ 10.5 NavigatorUserMediaErrorCallback](#ref-for-dom-navigatorusermediaerrorcallback-2 "§ 10.5 NavigatorUserMediaErrorCallback")
-   [§ Callback NavigatorUserMediaErrorCallback Parameters](#ref-for-dom-navigatorusermediaerrorcallback-3 "§ Callback NavigatorUserMediaErrorCallback Parameters")

<span class="caret"></span>

<a href="#stored-permissions" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Attributes](#ref-for-stored-permissions-1 "§ Attributes") [(2)](#ref-for-stored-permissions-2 "Reference 2")
-   [§ 10.6 Implementation Suggestions](#ref-for-stored-permissions-3 "§ 10.6 Implementation Suggestions")

<span class="caret"></span>

<a href="#dfn-constrainable-object" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 4.3.2 Tracks and Constraints](#ref-for-dfn-constrainable-object-1 "§ 4.3.2 Tracks and Constraints")
-   [§ Methods](#ref-for-dfn-constrainable-object-2 "§ Methods")
-   [§ 11.1 Interface Definition](#ref-for-dfn-constrainable-object-3 "§ 11.1 Interface Definition")
-   [§ 11.3 Capabilities](#ref-for-dfn-constrainable-object-4 "§ 11.3 Capabilities") [(2)](#ref-for-dfn-constrainable-object-5 "Reference 2") [(3)](#ref-for-dfn-constrainable-object-6 "Reference 3") [(4)](#ref-for-dfn-constrainable-object-7 "Reference 4")

<span class="caret"></span>

<a href="#dom-constrainablepattern" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-396517552" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dom-constrainablepattern-1 "§ 3. Terminology") [(2)](#ref-for-dom-constrainablepattern-2 "Reference 2") [(3)](#ref-for-dom-constrainablepattern-3 "Reference 3") [(4)](#ref-for-dom-constrainablepattern-4 "Reference 4")
-   [§ 4.3.2 Tracks and Constraints](#ref-for-dom-constrainablepattern-5 "§ 4.3.2 Tracks and Constraints")
-   [§ 11.1 Interface Definition](#ref-for-dom-constrainablepattern-6 "§ 11.1 Interface Definition")
-   [§ Methods](#ref-for-dom-constrainablepattern-7 "§ Methods") [(2)](#ref-for-dom-constrainablepattern-8 "Reference 2")

<span class="caret"></span>

<a href="#dfn-capabilities-0" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-capabilities-0-1 "§ Methods")

<span class="caret"></span>

<a href="#dfn-constraints" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-constraints-1 "§ Methods") [(2)](#ref-for-dfn-constraints-2 "Reference 2")

<span class="caret"></span>

<a href="#dfn-settings-0" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-settings-0-1 "§ Methods") [(2)](#ref-for-dfn-settings-0-2 "Reference 2") [(3)](#ref-for-dfn-settings-0-3 "Reference 3")

<span class="caret"></span>

<a href="#dom-constrainablepattern-applyconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-constrainablepattern-getcapabilities" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-396517552" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.1 Interface Definition](#ref-for-dom-constrainablepattern-getcapabilities-1 "§ 11.1 Interface Definition")

<span class="caret"></span>

<a href="#dom-constrainablepattern-getconstraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-396517552" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constrainablepattern-getconstraints-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constrainablepattern-getconstraints-2 "Reference 2")
-   [§ 11.1 Interface Definition](#ref-for-dom-constrainablepattern-getconstraints-3 "§ 11.1 Interface Definition")
-   [§ Methods](#ref-for-dom-constrainablepattern-getconstraints-4 "§ Methods")

<span class="caret"></span>

<a href="#dom-constrainablepattern-getsettings" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-396517552" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.1 Interface Definition](#ref-for-dom-constrainablepattern-getsettings-1 "§ 11.1 Interface Definition")
-   [§ Methods](#ref-for-dom-constrainablepattern-getsettings-2 "§ Methods") [(2)](#ref-for-dom-constrainablepattern-getsettings-3 "Reference 2")

<span class="caret"></span>

<a href="#dfn-applyconstraints-template-method" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-applyconstraints-template-method-1 "§ Methods")

<span class="caret"></span>

<a href="#dfn-settings-dictionary" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-settings-dictionary-1 "§ Methods") [(2)](#ref-for-dfn-settings-dictionary-2 "Reference 2") [(3)](#ref-for-dfn-settings-dictionary-3 "Reference 3") [(4)](#ref-for-dfn-settings-dictionary-4 "Reference 4") [(5)](#ref-for-dfn-settings-dictionary-5 "Reference 5") [(6)](#ref-for-dfn-settings-dictionary-6 "Reference 6") [(7)](#ref-for-dfn-settings-dictionary-7 "Reference 7")

<span class="caret"></span>

<a href="#dfn-fitness-distance" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-fitness-distance-1 "§ Methods") [(2)](#ref-for-dfn-fitness-distance-2 "Reference 2") [(3)](#ref-for-dfn-fitness-distance-3 "Reference 3") [(4)](#ref-for-dfn-fitness-distance-4 "Reference 4") [(5)](#ref-for-dfn-fitness-distance-5 "Reference 5")

<span class="caret"></span>

<a href="#dfn-required" class="self-link">Permalink</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dfn-required-1 "§ 3. Terminology")

<span class="caret"></span>

<a href="#dfn-selectsettings" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-selectsettings-1 "§ Methods") [(2)](#ref-for-dfn-selectsettings-2 "Reference 2") [(3)](#ref-for-dfn-selectsettings-3 "Reference 3") [(4)](#ref-for-dfn-selectsettings-4 "Reference 4") [(5)](#ref-for-dfn-selectsettings-5 "Reference 5") [(6)](#ref-for-dfn-selectsettings-6 "Reference 6") [(7)](#ref-for-dfn-selectsettings-7 "Reference 7") [(8)](#ref-for-dfn-selectsettings-8 "Reference 8")

<span class="caret"></span>

<a href="#dfn-applyconstraints-algorithm" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-applyconstraints-algorithm-1 "§ Methods") [(2)](#ref-for-dfn-applyconstraints-algorithm-2 "Reference 2") [(3)](#ref-for-dfn-applyconstraints-algorithm-3 "Reference 3") [(4)](#ref-for-dfn-applyconstraints-algorithm-4 "Reference 4") [(5)](#ref-for-dfn-applyconstraints-algorithm-5 "Reference 5") [(6)](#ref-for-dfn-applyconstraints-algorithm-6 "Reference 6") [(7)](#ref-for-dfn-applyconstraints-algorithm-7 "Reference 7")

<span class="caret"></span>

<a href="#dom-doublerange" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1305047395" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-doublerange-1 "§ 4.3.5 MediaTrackCapabilities") [(2)](#ref-for-dom-doublerange-2 "Reference 2") [(3)](#ref-for-dom-doublerange-3 "Reference 3")
-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-dom-doublerange-4 "§ Dictionary MediaTrackCapabilities Members") [(2)](#ref-for-dom-doublerange-5 "Reference 2") [(3)](#ref-for-dom-doublerange-6 "Reference 3")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-doublerange-7 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-doublerange-8 "Reference 2")

<span class="caret"></span>

<a href="#dom-doublerange-max" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1305047395" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-doublerange-max-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-doublerange-min" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1305047395" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-doublerange-min-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindoublerange" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2000666622" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindoublerange-1 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-constraindoublerange-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-constraindoublerange-exact" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2000666622" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindoublerange-exact-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindoublerange-ideal" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2000666622" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindoublerange-ideal-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-ulongrange" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1217868165" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.5 MediaTrackCapabilities](#ref-for-dom-ulongrange-1 "§ 4.3.5 MediaTrackCapabilities") [(2)](#ref-for-dom-ulongrange-2 "Reference 2") [(3)](#ref-for-dom-ulongrange-3 "Reference 3") [(4)](#ref-for-dom-ulongrange-4 "Reference 4") [(5)](#ref-for-dom-ulongrange-5 "Reference 5")
-   [§ Dictionary MediaTrackCapabilities Members](#ref-for-dom-ulongrange-6 "§ Dictionary MediaTrackCapabilities Members") [(2)](#ref-for-dom-ulongrange-7 "Reference 2") [(3)](#ref-for-dom-ulongrange-8 "Reference 3") [(4)](#ref-for-dom-ulongrange-9 "Reference 4") [(5)](#ref-for-dom-ulongrange-10 "Reference 5")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-ulongrange-11 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-ulongrange-12 "Reference 2")

<span class="caret"></span>

<a href="#dom-ulongrange-max" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1217868165" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-ulongrange-max-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-ulongrange-min" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1217868165" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-ulongrange-min-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainulongrange" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1319739680" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainulongrange-1 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-constrainulongrange-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-constrainulongrange-exact" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1319739680" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainulongrange-exact-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainulongrange-ideal" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1319739680" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainulongrange-ideal-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainbooleanparameters" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-630267860" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainbooleanparameters-1 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-constrainbooleanparameters-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-constrainbooleanparameters-exact" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-630267860" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainbooleanparameters-exact-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainbooleanparameters-ideal" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-630267860" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainbooleanparameters-ideal-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindomstringparameters" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2128815303" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindomstringparameters-1 "§ 11.2 Types for Constrainable Properties") [(2)](#ref-for-dom-constraindomstringparameters-2 "Reference 2")

<span class="caret"></span>

<a href="#dom-constraindomstringparameters-exact" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2128815303" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindomstringparameters-exact-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindomstringparameters-ideal" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-2128815303" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindomstringparameters-ideal-1 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainulong" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-14693557" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-constrainulong-1 "§ 4.3.6 MediaTrackConstraints") [(2)](#ref-for-dom-constrainulong-2 "Reference 2") [(3)](#ref-for-dom-constrainulong-3 "Reference 3") [(4)](#ref-for-dom-constrainulong-4 "Reference 4") [(5)](#ref-for-dom-constrainulong-5 "Reference 5")
-   [§ Dictionary MediaTrackConstraintSet Members](#ref-for-dom-constrainulong-6 "§ Dictionary MediaTrackConstraintSet Members") [(2)](#ref-for-dom-constrainulong-7 "Reference 2") [(3)](#ref-for-dom-constrainulong-8 "Reference 3") [(4)](#ref-for-dom-constrainulong-9 "Reference 4") [(5)](#ref-for-dom-constrainulong-10 "Reference 5")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constrainulong-11 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constrainulong-12 "Reference 2") [(3)](#ref-for-dom-constrainulong-13 "Reference 3") [(4)](#ref-for-dom-constrainulong-14 "Reference 4") [(5)](#ref-for-dom-constrainulong-15 "Reference 5")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainulong-16 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindouble" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-206140352" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-constraindouble-1 "§ 4.3.6 MediaTrackConstraints") [(2)](#ref-for-dom-constraindouble-2 "Reference 2") [(3)](#ref-for-dom-constraindouble-3 "Reference 3")
-   [§ Dictionary MediaTrackConstraintSet Members](#ref-for-dom-constraindouble-4 "§ Dictionary MediaTrackConstraintSet Members") [(2)](#ref-for-dom-constraindouble-5 "Reference 2") [(3)](#ref-for-dom-constraindouble-6 "Reference 3")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constraindouble-7 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constraindouble-8 "Reference 2") [(3)](#ref-for-dom-constraindouble-9 "Reference 3")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindouble-10 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constrainboolean" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-550440922" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-constrainboolean-1 "§ 4.3.6 MediaTrackConstraints") [(2)](#ref-for-dom-constrainboolean-2 "Reference 2") [(3)](#ref-for-dom-constrainboolean-3 "Reference 3")
-   [§ Dictionary MediaTrackConstraintSet Members](#ref-for-dom-constrainboolean-4 "§ Dictionary MediaTrackConstraintSet Members") [(2)](#ref-for-dom-constrainboolean-5 "Reference 2") [(3)](#ref-for-dom-constrainboolean-6 "Reference 3")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constrainboolean-7 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constrainboolean-8 "Reference 2") [(3)](#ref-for-dom-constrainboolean-9 "Reference 3")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constrainboolean-10 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-constraindomstring" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1617827164" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.6 MediaTrackConstraints](#ref-for-dom-constraindomstring-1 "§ 4.3.6 MediaTrackConstraints") [(2)](#ref-for-dom-constraindomstring-2 "Reference 2") [(3)](#ref-for-dom-constraindomstring-3 "Reference 3") [(4)](#ref-for-dom-constraindomstring-4 "Reference 4")
-   [§ Dictionary MediaTrackConstraintSet Members](#ref-for-dom-constraindomstring-5 "§ Dictionary MediaTrackConstraintSet Members") [(2)](#ref-for-dom-constraindomstring-6 "Reference 2") [(3)](#ref-for-dom-constraindomstring-7 "Reference 3") [(4)](#ref-for-dom-constraindomstring-8 "Reference 4")
-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constraindomstring-9 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constraindomstring-10 "Reference 2")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraindomstring-11 "§ 11.2 Types for Constrainable Properties")

<span class="caret"></span>

<a href="#dom-capabilities" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1716666343" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.1 Interface Definition](#ref-for-dom-capabilities-1 "§ 11.1 Interface Definition")
-   [§ 11.3 Capabilities](#ref-for-dom-capabilities-2 "§ 11.3 Capabilities")

<span class="caret"></span>

<a href="#dom-settings" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-1939026694" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 11.1 Interface Definition](#ref-for-dom-settings-1 "§ 11.1 Interface Definition")
-   [§ 11.4 Settings](#ref-for-dom-settings-2 "§ 11.4 Settings")

<span class="caret"></span>

<a href="#dfn-constraints-and-constraintset" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dom-constraintset" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-168034668" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.8 Constrainable Properties](#ref-for-dom-constraintset-1 "§ 4.3.8 Constrainable Properties") [(2)](#ref-for-dom-constraintset-2 "Reference 2")
-   [§ 11.5 Constraints and ConstraintSet](#ref-for-dom-constraintset-3 "§ 11.5 Constraints and ConstraintSet") [(2)](#ref-for-dom-constraintset-4 "Reference 2") [(3)](#ref-for-dom-constraintset-5 "Reference 3")
-   [§ 11.5.1 Dictionary Constraints Members](#ref-for-dom-constraintset-6 "§ 11.5.1 Dictionary Constraints Members")

<span class="caret"></span>

<a href="#dom-constraints" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-26239275" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 4.3.2 Tracks and Constraints](#ref-for-dom-constraints-1 "§ 4.3.2 Tracks and Constraints")
-   [§ 5. The model: sources, sinks, constraints, and settings](#ref-for-dom-constraints-2 "§ 5. The model: sources, sinks, constraints, and settings") [(2)](#ref-for-dom-constraints-3 "Reference 2")
-   [§ Dictionary MediaStreamConstraints Members](#ref-for-dom-constraints-4 "§ Dictionary MediaStreamConstraints Members") [(2)](#ref-for-dom-constraints-5 "Reference 2")
-   [§ 11.1 Interface Definition](#ref-for-dom-constraints-6 "§ 11.1 Interface Definition") [(2)](#ref-for-dom-constraints-7 "Reference 2") [(3)](#ref-for-dom-constraints-8 "Reference 3")
-   [§ 11.2 Types for Constrainable Properties](#ref-for-dom-constraints-9 "§ 11.2 Types for Constrainable Properties")
-   [§ 11.5 Constraints and ConstraintSet](#ref-for-dom-constraints-10 "§ 11.5 Constraints and ConstraintSet")

<span class="caret"></span>

<a href="#dom-constraints-advanced" class="self-link">Permalink</a> <span class="marker dfn-exported" title="Definition can be referenced by other specifications">exported</span> <a href="#webidl-26239275" class="marker idl-block" title="Jump to IDL declaration">IDL</a>

**Referenced in:**

-   [§ 3. Terminology](#ref-for-dom-constraints-advanced-1 "§ 3. Terminology")
-   [§ 11. Constrainable Pattern](#ref-for-dom-constraints-advanced-2 "§ 11. Constrainable Pattern")
-   [§ 11.5 Constraints and ConstraintSet](#ref-for-dom-constraints-advanced-3 "§ 11.5 Constraints and ConstraintSet")

<span class="caret"></span>

<a href="#dfn-camera" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-camera-1 "§ Methods")

<span class="caret"></span>

<a href="#dfn-microphone" class="self-link">Permalink</a>

**Referenced in:**

-   [§ Methods](#ref-for-dfn-microphone-1 "§ Methods")
