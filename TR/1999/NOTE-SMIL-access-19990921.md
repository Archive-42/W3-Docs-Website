[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Accessibility Features of SMIL
==============================

W3C NOTE 21 September 1999
--------------------------

This Version:  
<http://www.w3.org/TR/1999/NOTE-SMIL-access-19990921>

Previous Version:  
<http://www.w3.org/TR/1999/NOTE-SMIL-access-19990920>

Latest Version:  
<http://www.w3.org/TR/SMIL-access>

<!-- -->

Editors:  
Marja-Riitta Koivunen ([mrk@w3.org](mailto:marja@w3.org))

[Ian Jacobs](http://www.w3.org/People/Jacobs) (<ij@w3.org>)

[  
Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 1999 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software) rules apply.

------------------------------------------------------------------------

<span id="Abstract">Abstract</span>
-----------------------------------

This document summarizes the accessibility features of the Synchronized Multimedia Language (SMIL), version 1.0 Recommendation (\[[SMIL10](#ref-SMIL10)\]). This document has been written so that other documents may refer in a consistent manner to the accessibility features of SMIL.

<span id="Status">Status of this Document</span>
------------------------------------------------

This document is a W3C Note made available by the W3C and the W3C Web Accessibility Initiative. This Note has been jointly approved by the WAI Education and Outreach Working Group (EOWG), the WAI Protocols and Formats Working Group (PFWG), and the Synchronized Multimedia (SYMM) Working Group.

Publication of a W3C Note does not imply endorsement by the W3C Membership. A list of current W3C technical reports and publications, including Working Drafts and Notes, can be found at <http://www.w3.org/TR>.

Information about [changes from the previous version](http://www.w3.org/WAI/EO/SMIL-access-errata#Changes-19990921) and [errata](http://www.w3.org/WAI/EO/SMIL-access-errata#Errata) is available online.

<span id="Contents">Table of Contents</span>
--------------------------------------------

-   [1. Introduction](#Introduction)
-   [2. Equivalent Alternatives](#Equivalent)
-   [3. Layout and Style](#LayoutStyle)
-   [4. Navigation and Linking](#Navigation)
-   [5. Adapting Content to User and System Settings](#Testing)
-   [6. To Learn More about Accessibility and SMIL](#More)
-   [Appendix A. Index of SMIL 1.0 elements and attributes that affect accessibility](#Index)
-   [Appendix B. Sample Accessible SMIL Presentation](#Sample)
-   [About the Web Accessibility Initiative](#About-WAI)
-   [About the World Wide Web Consortium (W3C)](#About-W3C)
-   [Acknowledgements](#Acknowledgments)
-   [References](#References)

<span id="Introduction">1. Introduction</span>
----------------------------------------------

Multimedia presentations rich in text, audio, video, and graphics are becoming more and more common on the Web. They include newscasts, educational material, entertainment, etc. Formats such as SMIL 1.0 can be used to create dynamic multimedia presentations by synchronizing the various media elements in time and space.

Authors can make SMIL 1.0 presentations accessible to people with disabilities by observing the principles discussed in the "Web Content Accessibility Guidelines 1.0" \[ [WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\]. The Guidelines explain how to create documents that account for the diverse abilities, tools, and software of all Web users, including people with combinations of visual, auditory, physical, cognitive, and neurological disabilities. This does not mean creating a great number of separate presentations but rather one integrated and accessible presentation. This Note applies the principles of the Web Content Accessibility Guidelines to SMIL 1.0 and explains which SMIL 1.0 features will help you create accessible presentations.

### <span id="Challenges">1.1 Accessibility Challenges of Synchronized Multimedia</span>

Dynamic multimedia presents a number of challenges to people with disabilities and to authors of accessible content:

-   Authors must provide [alternative equivalent content](#Equivalent) to audio and video so that users with visual or auditory impairments may make use of the presentation. Text content is most valuable to users with a wide range of disabilities, as it may be rendered on the screen, as speech, or on a refreshable braille display. In addition, search engines may process this text content. While there is cost to producing alternative content, the effort may be reduced by using accessible authoring tools (refer to \[[WAI-AUTOOLS](#ref-WAI-AUTOOLS)\]).
-   [Alternatives](#Equivalent) to video and audio content must be synchronized with video and audio tracks. Alternatives that are improperly synchronized may be so confusing as to be unusable.
-   A presentation may occupy multiple sensory channels (eyes, ears, and touch) in parallel. Any content, including [alternative content](#Equivalent), that is presented to a given sense must be coordinated to ensure that it remains intelligible when rendered with other content meant for that sense.
-   The very nature of synchronized multimedia - content changes without user interaction - poses an orientation challenge to some users with blindness, low vision, or cognitive disabilities. These users may still access a presentation as long as the author has provided adequate alternatives and players allow sufficient control over the presentation.

### <span id="PromoteAccess">1.2 How Authors and Players Promote Accessibility</span>

Part of the responsibility for making SMIL 1.0 presentations accessible lies with the author and part with the user's software, the SMIL player. Authors must include equivalent alternatives for images, video, audio, and other inaccessible media. Authors must synchronize media objects correctly and describe relationships among objects. Authors should design documents that transform gracefully for players that do not support a particular feature (e.g., style sheets). Authors should also design documents so that players can ensure user control of rendering (e.g. by using the <span class="attribute">system-captions</span> [test attribute](#Testing) to tell the player which text streams are captions).

In turn, SMIL players must allow users to control document presentation to ensure its accessibility, even if that means overriding the author's preferences. For instance, users with low vision must be able to enlarge a presentation and users with color deficiencies must be able to specify suitable color contrasts. The "User Agent Accessibility Guidelines" \[[WAI-USERAGENT](#ref-WAI-USERAGENT)\] explain principles for creating accessible user agents - tools used to browse the Web. User agents are graphical desktop browsers, multimedia players, text and voice browsers, and software used in conjunction with other browsers, including screen readers, screen magnifiers, braille displays, and voice input software.

User control of presentation and configuration are central to user agent accessibility. Players must provide users access to author-supplied media objects, their accessible alternatives, or both. Users must also be able to turn on and off alternatives (e.g., captions and auditory descriptions) and control their size, position, and volume. For instance, users with both low vision and hearing loss must be able to enlarge text captions. Users might also want to specify how to render synchronized audio tracks, for instance, by changing the volume or other available attributes of an auditory description to distinguish it from the audio track.

Since users with some cognitive disabilities or people using combinations of assistive technologies such as refreshable braille and speech synthesis may require additional time to view a presentation or its captions, players must allow them to start, stop, and pause a presentation (as one can do with most home video players). Where possible, users should be able to control the global presentation rate. Some users may require that time-sensitive information be rendered in a time-independent form altogether. For example, SMIL 1.0 allows authors to designate graphical regions that are linked to different resources at different times. Some users may not have enough time to select a link with a limited lifespan, or even to notice it. Therefore, players should provide access to them in a time-independent manner. Multimedia players may also offer an index to time-dependent information in a time-independent form.

This Note describes the accessibility features of \[[SMIL10](#ref-SMIL10)\] and explains how authors and SMIL players should make use of them. Explanations of implementation approaches for authors and SMIL players in this Note are made in accordance with the guidelines and checkpoints of \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\] and \[[WAI-USERAGENT](#ref-WAI-USERAGENT)\].

**Note.** Most of \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\] explains how authors should design their pages and sites to promote accessibility. However, \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\] also recognizes that some needs would be better met by user agents, including SMIL players. Since user agents may not yet implement some features that promote accessibility, \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\] asks authors to compensate until they do by providing additional support in their content. In the current Note, the phrase "Until SMIL players..." refers to cases when the author should provide additional support. Each time the phrase appears, the requirement from \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\] that motivated it is listed. In addition, the importance of the requirement to accessibility is indicated, using the vocabulary of \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], section four.

<span id="Equivalent">2. Equivalent Alternatives</span>
-------------------------------------------------------

Multimedia presentations may include two main types of equivalent alternatives: discrete and continuous. Discrete equivalents do not contain any time references and have no intrinsic duration. In SMIL, discrete text equivalents are generally specified by attributes such as the <span class="attribute">alt</span> attribute of the <span class="element">img</span> element.

Continuous equivalents, such as [text captions](#def-caption) or [auditory descriptions](#def-auditory-desc), have intrinsic duration and may contain references to time. For instance, a continuous text equivalent consists of pieces of text associated with a time code. Continuous equivalents may be constructed out of discrete equivalents, for instance by using the SMIL elements <span class="element">par</span> (parallel) or <span class="element">seq</span> (sequential) and the timing attributes <span class="attribute">begin</span>, <span class="attribute">end</span> and <span class="attribute">dur</span>.

Text equivalents are fundamental to accessibility since they may be rendered graphically, as speech, or by a braille device. In multimedia presentations, continuous text equivalents must be synchronized with other time-dependent media (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoint 1.4, Priority 1).

The Web Content Accessibility Guidelines also require that, until user agents can automatically read aloud the text equivalent of a video track, authors provide an auditory description of the important information of the video track of a multimedia presentation (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoint 1.3, Priority 1). This benefits users who may not be able to read text or may not have access to software or hardware for speech synthesis or braille. **Note.** If you have captions and text-to-speech software, you can generate auditory descriptions. However, you must still ensure the proper synchronization of a generated speech track with other tracks.

Other forms of continuous equivalents also promote accessibility but are not discussed in this document. Representations of sign language (for example, a video that includes a sign language representation of the audio track) benefit people with auditory limitations. Simplified sound tracks may help people with some cognitive difficulties, such as disabilities that limit one's ability to concentrate.

The following sections describe in more detail the SMIL features for specifying discrete and continuous equivalents for video, audio, text, and other SMIL elements.

### <span id="Discrete">2.1 Discrete Equivalents</span>

Discrete text equivalents, when rendered by players or assistive technologies to the screen, as speech, or on a dynamic braille display, allow users to make use of the presentation even if they cannot make use of all of its content. For instance, providing a text equivalent of an image that is part of a link will enable someone with blindness to decide whether to follow the link. Authors specify discrete text equivalents for SMIL elements through the following attributes:

<span class="attribute">alt</span>  
For media objects (image, video, audio, textstream, etc.). Specifies a short text equivalent that conveys the same function as the media object. Players may render alternative text in place of or in addition to media content, for instance when images or sound are turned off or not supported.

<span class="attribute">longdesc</span>  
For media objects. Specifies a link to a long, more complete description of media content supplementing the description provided by <span class="attribute">alt</span> attribute. Authors should provide long descriptions of complex content, such as charts and graphs. Authors may use longdesc to designate a text transcript of audio and video information.

<span class="attribute">title</span>  
For most SMIL 1.0 elements. Provides advisory information about the nature of the element. The SMIL 1.0 specification explains how to use "title" for a given element type. For example, for links, use it to describe the target of the link.

Other SMIL attributes including <span class="attribute">author</span> and <span class="attribute">abstract</span> specify text metadata about document elements. Metadata generally promotes accessibility by providing more context and orientation. Text metadata may be rendered to the screen, as speech, or on a refreshable braille display. Authors are encouraged to enrich their presentations with metadata (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoints 13.2, Priority 2 and Guidelines 12 and 13 in general).

The following example includes a <span class="element">video</span> element that presents a dynamic graph illustrating trends in Web commerce and privacy. The <span class="attribute">alt</span>, <span class="attribute">title</span>, and <span class="attribute">abstract</span> attributes specify discrete text equivalents that provide information with different granularity. The <span class="attribute">longdesc</span> attribute designates a more complete text equivalent of the video presentation, with details about what information is being displayed in the graph, the units of the graph, etc. The long description itself might also include links back to anchors associated with key points of the presentation (not shown here) so that users can navigate back and forth.

    <video src="http://www.fou.fr/graph.mpeg"
         title="Web Trends: Graph 1"
         alt="The number of online stores
              and consumers is increasing, but privacy
              is decreasing."
         abstract="The number of Web users, online stores, and      
                   the influence of Web communities are 
                   all steadily increasing while privacy for
                   Web users is slowly diminishing. This graph
                   explains the trends and Web technologies
                   that will most impact the future of
                   Web commerce."
         longdesc="http://www.fou.fr/graph-description.htm"/>

**Note.** The above example shows one usage of the <span class="attribute">alt</span> and <span class="attribute">title</span> attributes together. The SMIL 1.0 specification does not clearly explain the relationship between the two attributes. We recommend that authors use <span class="attribute">title</span> when <span class="attribute">alt</span> is not available (e.g., to describe <span class="element">par</span> and <span class="element">seq</span> synchronization, link destinations, layout, etc.) The relationship between the attributes should be clarified by W3C Working Groups in an future version of SMIL.

**Note.** In the examples in this document, "rt" suggests a "real text" media object file, "rm" a real audio file, and "mpeg" an MPEG file.

### <span id="Continuous">2.2 Continuous Equivalents</span>

Two continuous equivalents that promote accessibility are captions and auditory descriptions. A <span id="def-caption">caption</span> is a text transcript of spoken words and non-spoken sound effects that provides the same information as a presentation's audio stream and is synchronized with the video track of the presentation. Captions benefit people who are deaf, hard of hearing, or who have auditory learning disabilities. They also benefit anyone in a setting where audio tracks would cause disturbance, where ambient noise in the audio track or listening environment prevents them from hearing the audio track, or when they have difficulties understanding spoken language.

An <span id="def-auditory-desc">auditory description</span> is a recorded or synthesized voice that describes key visual elements of the presentation including information about actions, body language, graphics, and scene changes. Like captions, auditory descriptions must be synchronized with the video stream they describe. Additionally, they must be synchronized with other audio streams. Auditory descriptions are generally timed to play during natural pauses in dialog. However, there may be cases where these natural pauses are not long enough to accommodate a sufficient auditory description. In such cases, it will be necessary to pause the video in order to provide enough time for an extended auditory description. At the end of the description, the video should resume play automatically. Auditory descriptions benefit people with blindness, low vision, or some kinds of visual perceptive learning disabilities. They also benefit anyone in an eyes-busy setting or whose devices cannot show the original video or graphical media object.

Below we discuss in more detail how to associate captions and auditory descriptions with multimedia presentations in SMIL 1.0 in a manner that allows users to control the presentation of the alternative stream. We also examine how SMIL 1.0 supports multilingual presentations and how this affects continuous equivalents for accessibility. For more information about synchronizing media objects, please consult the SMIL 1.0 specification (\[[SMIL10](#ref-SMIL10)\]).

#### <span id="Captions">2.2.1 Captions</span>

In SMIL 1.0, captions may be included in a presentation with the textstream element. The following example plays an audio track, a video track, and captions (via the textstream element) in parallel.

    <par>
       <audio alt="Interview with Harvey, English audio" 
              src="audio.rm"/>
       <video alt="Interview with Harvey" src="video.rm"/>
       <textstream alt="English captions for interview with Harvey"
                   src="closed-caps.rt"/>
    </par>

The limitation of the example is that the user cannot easily turn on or off the captions. This is corrected in the next example.

Since user control of presentation is vital to accessibility, SMIL 1.0 allows authors to create presentations whose behavior varies depending on current player settings. When a SMIL element such as textstream has the <span class="attribute">system-captions</span> test attribute with value "on" and the user has turned on captioning, the element will be rendered.

The following example is a movie that consists of four media object elements: a video track, an audio soundtrack, and text streams of captions and stock values (for the avid stock market tracker!). All the elements are to be played in parallel due to the <span class="element">par</span> element. The captions will only be rendered if the user has turned on captioning.

     <par>
       <audio alt="My Favorite Movie, English audio" src="audio.rm"/>
       <video alt="My Favorite Movie" src="video.rm"/>
       <textstream alt="Stock ticker" src="stockticker.rt"/>
       <textstream alt="English captions for My Favorite Movie"
                   system-captions="on"
                   src="closed-caps.rt"/>
    </par>

The <span class="attribute">system-captions</span> attribute can also be used with elements other than textstream. Like the other SMIL [test attributes](#Testing) (described in \[[SMIL](#ref-SMIL10)\], section 4.4), <span class="attribute">system-captions</span> acts like a boolean flag that returns "true" or "false" according to player settings. [Section 3.1](#Layout) below illustrates how <span class="attribute">system-captions</span> can be used to specify different presentation layouts according to whether the user has captioning turned on.

**Note.** Authors should use <span class="attribute">system-captions="on"</span> with elements that specify captions and <span class="attribute">system-captions="off"</span> for caption-related effects such as layout changes.

#### <span id="AudioDesc">2.2.2 Auditory Descriptions</span>

In SMIL 1.0, auditory descriptions may be included in a presentation with the audio element. However, SMIL 1.0 does not provide a mechanism that allows users to turn on or off player support for auditory descriptions. Authors may wish to create one presentation with no auditory description and another with an auditory description.

#### <span id="Multilingual">2.2.3 Multilingual Presentations and Continuous Equivalents</span>

SMIL 1.0 allows authors to create multilingual presentations by using subtitles (which are text streams) and overdubs (which are audio streams) in another language. Multilingual presentations themselves do not pose accessibility problems. Indeed, providing additional tracks (even in a different language) will help many users.

However, since subtitles and overdubs may co-exist with text and audio streams provided for accessibility, authors of accessible multilingual presentations should be aware of how they interact. For instance, authors should lay out presentations so that captions and subtitles do not overlap on the screen. Audio tracks should not overlap unless carefully synchronized.

In SMIL 1.0, the <span class="attribute">system-overdub-or-caption</span> test attribute allows users to select (through the player's user interface) whether they would rather have the player render overdubs or subtitles. **Note.** The term "caption" in "system-overdub-or-caption" does not refer to accessibility captions. Authors must not use this attribute to create accessibility captions; use <span class="attribute">system-captions</span> instead.

The following example offers a movie in both Spanish and English. If the player is set for preferences of Spanish *and* overdubs, the Spanish audio track will be rendered. Otherwise the second audio track of the first switch element (the English audio track) will be rendered. The second textstream specifies English captions that will be rendered when the player is set for captioning.

    <par>
       <switch> <!-- audio -->
         <audio alt="My Favorite Movie, Spanish audio"
                src="audio-es.rm"
                system-overdub-or-caption="overdub"
                system-language="es"/>
         <audio alt="My Favorite Movie, English audio"
                src="audio.rm"/>
       </switch>
       <video alt="My Favorite Movie" src="video.rm"/>
       <textstream alt="Stock ticker" src="stockticker.rt"/>
       <textstream alt="English captions for My Favorite Movie"
                   src="closed-caps.rt"
                   system-captions="on"/>
    </par>

To add Spanish subtitles to the example, the author would specify a second textstream element. The first textstream in the switch element will be rendered if the player is set for captioning. Otherwise, the second textstream element will be rendered if the user has set the player to prefer subtitles and Spanish.

    <par>
       <switch> <!-- audio -->
         <audio alt="My Favorite Movie, Spanish audio"
                src="audio-es.rm"
                system-overdub-or-caption="overdub"
                system-language="es"/>
         <audio alt="My Favorite Movie, English audio"
                src="audio.rm"/>
       </switch>
       <video alt="My Favorite Movie" src="video.rm"/>
       <textstream alt="Stock ticker" src="stockticker.rt"/>
       <switch> <!-- captions or subtitles -->
         <textstream alt="English captions for My Favorite Movie"
                     src="closed-caps.rt"
                     system-captions="on"/>
         <textstream alt="Spanish subtitles for My Favorite Movie"
                     src="subtitles-es.rt"
                     system-overdub-or-caption="caption"
                     system-language="es"/>
       </switch>
    </par>

While subtitles only capture dialog in text, captions include dialog as well as text descriptions of off-screen information (e.g., sounds); authors should provide captions when possible.

In the <span class="element">switch</span> element, the three textstream elements are rendered in order of preference for Spanish captions, Spanish subtitles, or the default (English) captions. This design allows authors to reuse the captions as subtitles and to ensure that the textstream is not rendered twice when the player is set to support both.

    <par>
       <switch> <!-- audio -->
         <audio alt="My Favorite Movie, Spanish audio"
                src="audio-es.rm"
                system-overdub-or-caption="overdub"
                system-language="es"/>
         <audio alt="My Favorite Movie, English audio"
                src="audio.rm"/>
       </switch>
       <video alt="My Favorite Movie" src="video.rm"/>
       <textstream alt="Stock ticker" src="stockticker.rt"/>
       <switch> <!-- captions or subtitles -->
         <textstream alt="Spanish captions for My Favorite Movie"
                     src="closed-caps-es.rt"
                     system-captions="on"
                     system-language="es"/>
         <textstream alt="Spanish subtitles for My Favorite Movie"
                     src="closed-caps-es.rt"
                     system-overdub-or-caption="caption"
                     system-language="es"/>
         <textstream alt="English captions for My Favorite Movie"
                     src="closed-caps.rt"
                     system-captions="on"/>
       </switch>
    </par>

**Note.** In SMIL 1.0, values for <span class="attribute">system-overdub-or-caption</span> only refer to user preferences for *either* subtitles *or* overdubs; there are no values for the test attribute that refer to neither or both.

<span id="LayoutStyle">3. Layout and Style</span>
-------------------------------------------------

While it is important for players to respect author-specified layout and style for a presentation, the author's design may not take into consideration variations in a user's abilities, hardware, software, or viewing environment. Players must allow users to control styles and layout, otherwise users with some disabilities may not be able to make use of a presentation at all. For instance, players must allow users to control colors (e.g., for users with color deficiencies), text size (e.g., for users with low vision), caption position (e.g., if a caption overlaps other content), etc. Please refer to \[[WAI-USERAGENT](#ref-WAI-USERAGENT)\] for more information about user control of styles.

Authors may specify the graphical layout of SMIL 1.0 media objects through SMIL's basic layout language or with a style sheet language such as CSS \[[CSS1](#ref-CSS1), [CSS2](#ref-CSS2)\]. **Note.** Media objects referenced from a SMIL 1.0 presentation may have associated style sheets. SMIL 1.0 does not specify how they interact with style sheets for the SMIL presentation itself.

**Note.** While SMIL 1.0 includes support for style sheets, SMIL 1.0 players, as of the publication of this document, do not support CSS. Please refer to \[[SMIL-CSS-LAYOUT](#ref-SMIL-CSS-LAYOUT)\] for information about rendering SMIL basic layout with a CSS2 engine. The Web Content Accessibility Guidelines recommend that authors specify style through style sheets when supported by user agents (including SMIL players). One reason the guidelines recommend style sheets (refer to \[[CSS-ACCESS](#ref-CSS-ACCESS)\]) is that in the CSS2 cascade, user-specified style sheets can override author-specified style sheets (refer to the "!important" mechanism described in section 6.4.2 of \[[CSS2](#ref-CSS2)\]).

### <span id="Layout">3.1 Layout</span>

Authors specify the graphical layout of a SMIL 1.0 presentation inside the <span class="element">layout</span> element, using either the SMIL basic layout language or style sheets. SMIL's layout facilities allow authors to arrange rectangular regions graphically (via the <span class="element">region</span> element), much like positioning in CSS2.

The following example illustrates how to regain space when captions are turned off or not supported. In this example, the same layout is specified with both the SMIL basic layout language and CSS2 style sheets. Due to their order in the <span class="element">switch</span> element, the SMIL player will use the CSS style sheet if supported, otherwise it will use the SMIL layout. The <span class="attribute">type</span> attribute of the <span class="element">layout</span> element specifies the MIME type of the style sheet language, here "text/css".

The example specifies two layouts. When the user has chosen to view captions, they appear in a region (the "captext" region) that takes up 20% of available vertical space below a region for the video presentation (the "capvideo" region), which takes up the other 80%. When the user does not wish to view captions, the video region takes up all available vertical space (the "video" region). The choice of which layout to use depends on the value of the <span class="attribute">system-captions</span> test attribute.

    <smil>
      <head>
        <switch>
          <layout type="text/css">
            { top: 20px; left: 20px }
            [region="video"] {top: 0px; height: 100%}
            [region="capvideo"] {top: 0px; height: 80%}
            [region="captext"] {top: 80%; height: 20%; overflow: scroll}
          </layout>
          <layout>
            <region id="video" title="Full-size video pane"
                    top="0" height="100%" fit="meet"/>
            <region id="capvideo" 
                    title="Video pane for use with caption window"
                    top="0" height="80%" fit="meet"/>
            <region id="captext" title="Caption pane"
                    top="80%" height="20%" fit="scroll"/>
          </layout>
        </switch>
    </head>
    <body>
        <switch> <!-- if captions off use first region, else second -->
        <par system-captions="on">
            <video region="capvideo" src="movie-vid.rm"
                alt="Video presentation of soccer match"
                title="Finals of Womens World Cup 1999"/>
            <textstream region="captext" src="closed-caps.rt"
                alt="English caption of soccer match"/>
        </par>
        <video region="video" src="movie-vid.rm"
                alt="Video presentation of soccer match"
                title="Finals of Womens World Cup 1999" 
                system-captions="off"/>
        </switch>
    </body>
    </smil>

### <span id="Style">3.2 Style</span>

In the SMIL 1.0 basic layout language, the only style attribute that can be specified is <span class="attribute">background-color</span>. Authors must ensure sufficient contrast between foreground and background colors of content, otherwise users with color deficiencies will not be able to perceive them (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoint 2.2, Priority 2). If <span class="attribute">background-color</span> is set and media objects (e.g., video, text, etc.) have transparent backgrounds, authors must ensure that the colors exhibit sufficient contrast. Players must allow users to control background colors to ensure accessibility.

### <span id="Popups">3.3 Opening New Windows</span>

The <span class="attribute">show</span> attribute on the <span class="element">a</span> and <span class="element">anchor</span> elements controls the behavior of the source document containing the link when the link is followed. The default value of the attribute is "replace", which means that the destination presentation replaces the current presentation (in the same window, in audio, etc.).

Two other values for the attribute, "new" and "pause", cause the destination presentation to appear in a new context (e.g., window). Opening new windows without warning may disorient users with blindness or some cognitive impairments and may simply bother others. SMIL players must help orient users when windows open or focus changes (e.g., by using audio cues, by providing a history mechanism so users can return to a familiar state, etc.). Until players do so, authors should provide clues in content (e.g., via the <span class="attribute">title</span> attribute) whenever they intend to open a new window (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoint 10.1, Priority 2).

<span id="Navigation">4. Navigation and Linking</span>
------------------------------------------------------

SMIL 1.0 includes a number of hyperlink features, including HTML-like hyperlinks and image maps (as well as video maps). SMIL 1.0 also allows authors to create time-dependent hyperlinks that are only active during author-specified intervals of a presentation. This section discusses the accessibility of these features.

### <span id="Maps">4.1 Accessible Image/Video Maps</span>

To create an accessible image or video map, authors must describe the nature of each link in the map for users who cannot see or use the visual information. Authors provide the description via the <span class="attribute">title</span> attribute on the <span class="element">a</span> and <span class="element">anchor</span> elements. This text description may be rendered by SMIL players on the screen or by assistive technologies as speech or dynamic braille.

Here is an example of a video clip with an associated map. Each link describes an active rectangular region of the video via the <span class="attribute">coords</span> attribute.

    <video src="http://www.w3.org/CoolStuff.rm">
      <anchor href="http://www.w3.org/AudioVideo" 
              coords="0%,0%,50%,50%"
              title="W3C Multimedia Activity"/>
      <anchor href="http://www.w3.org/Style"      
              coords="50%,50%,100%,100%"
              title="W3C Style Sheet Activity"/>
    </video>

With the <span class="element">anchor</span> element, authors may associate a link source with spatial and temporal subparts of a media object. With the <span class="element">a</span> element, authors may only associate a link source with a complete media object.

SMIL players should provide an equivalent text link for each graphical link (for example, using link text derived from the <span class="attribute">title</span> attribute of the linking element or the <span class="attribute">alt</span> attribute of an active media object inside the link). Text links are important to users with blindness or low vision who often navigate documents by jumping from link to link and having the link text rendered by a speech synthesizer or refreshable braille display. Until SMIL players provide alternative text links, authors should include text links in addition to non-text links (refer to \[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\], Checkpoint 1.5, Priority 3).

For example:

    <par>
       <video title="Introduction to W3C Activities"
              alt="W3C Activities"
              longdesc="http://www.w3.org/Activity/Summary"
              src="http://www.w3.org/CoolStuff.rm">
         <anchor href="http://www.w3.org/AudioVideo" 
                 coords="0%,0%,50%,50%"
                 title="W3C Multimedia Activity"/>
         <anchor href="http://www.w3.org/Style"      
                 coords="50%,50%,100%,100%"
                 title="W3C Style Sheet Activity"/>
       </video>
       <par>
         <a href="http://www.w3.org/AudioVideo">
         <text title="W3C Multimedia Activity" src="AV.txt"/></a>
         <a href="http://www.w3.org/Style">    
         <text title="W3C Style Sheet Activity" src="SS.txt"/></a>
       </par>
    </par>

### <span id="TimeLinks">4.2 Accessible Time-dependent Links</span>

The time-dependent linking mechanisms offered by SMIL 1.0 pose an accessibility challenge to both authors and players. The following example from the SMIL 1.0 specification illustrates time-dependent linking. In the example, the duration of a video clip is split into two time intervals: from 0 to 5 seconds and from 5 to 10 seconds. A different link is associated with each of these intervals.

    <video title="Introduction to W3C Activities"
              alt="W3C Activities"
              longdesc="http://www.w3.org/Activity/Summary"
              src="http://www.w3.org/CoolStuff.rm">
      <anchor href="http://www.w3.org/AudioVideo" 
              title="W3C Multimedia Activity"
              begin="0s" end="5s"/>
      <anchor href="http://www.w3.org/Style" 
              title="W3C Style Sheet Activity"     
              begin="5s" end="10s"/>
    </video>

Some users require more time to interact with the presentation than anticipated by the author. SMIL players may make time-dependent links accessible to users in a number of ways, including allowing the user to control the overall timing of the presentation (e.g., easy to control pause and rewind functionalities) or by providing users with time-independent access to those links (e.g., a list of static links). Authors may facilitate access to time-dependent links by providing a catalog of them in a separate document (linked from the presentation). In this catalog, the static list of links may include information about when the links are active during the presentation. This type of catalog will help all users, and allow people to find information about all links associated with a particular media object or that are active at a particular moment of the presentation.

### <span id="UsefulNav">4.3 Useful Navigation Mechanisms</span>

Navigation mechanisms help all users but are particularly important for users with blindness or some cognitive impairments who may not be able to grasp the structure of a presentation through visual clues. In addition to HTML-like linking mechanisms that may be used to create site maps and navigation bars, SMIL allows authors to create "temporal navigation bars" that allow users to navigate directly to important points in time of a presentation.

As an example, we first identify key points in a presentation that includes three interviews conducted sequentially (Joe, Tim, then Judy). Each segment is marked by an anchor (identified by the "id" attribute).

    <smil>
    <head>
       <layout>
         <region id="video" top="0" height="100%" fit="meet"/>
       </layout>
    </head>
    <body>
       <video src="http://www.w3.org/BBC.rm" 
          region="video"
          title="Future of the Web"
          alt="Interview with Joe, Tim, and Judy for BBC"
          abstract="The BBC interviews Joe, Tim, and Judy about 
              the Future of the Web. Joe and Tim talk about
              social and technological impact. Judy 
              addresses the benefits to accessibility of
              good design.">
         <anchor id="joe" begin="0s" end="5s"
             href="http://www.w3.org/Interviews/BBC/Joe"
             title="Joe interview on Web trends"/>
         <anchor id="tim" begin="5s" end="10s"
             href="http://www.w3.org/Interviews/BBC/Tim"
             title="Tim interview on Web trends"/>
         <anchor id="judy" begin="10s" end="60s"
             href="http://www.w3.org/Interviews/BBC/Judy"
             title="Judy interview on Web accessibility"/>
       </video>
    </body>
    </smil>

Authors might add a temporal navigation bar in parallel with the presentation. The navigation bar takes up the lower 10% of the presentation, and consists of a photo of each of the interviewees that links to their interview. Selecting a link causes player to play that part of the video. Refer to [section 3.3 on opening new windows](#Popups) for information about where the interview will be played.

    <smil>
    <head>
     <layout>
       <region id="video" top="0" height="90%" fit="meet"/>
       <region id="joe-region" top="90%" height="10%" fit="meet"/>
       <region id="tim-region" top="90%" height="10%" 
                        left="35%" fit="meet"/>
       <region id="judy-region" top="90%" height="10%" 
                        left="70%" fit="meet"/>
     </layout>
    </head>
    <body>
       <par>
           <!-- Video presentation -->
           <video src="http://www.w3.org/BBC.rm" 
                  region="video"
                  title="Future of the Web"
                  alt="Interview with Joe, Tim, and Judy for BBC"
                  abstract="The BBC interviews Joe, Tim, and Judy about 
                   the Future of the Web. Joe and Tim talk about
                   social and technological impact. Judy 
                   addresses the benefits to accessibility of
                   good design.">
               <anchor id="joe" begin="0s" end="5s"
                       href="http://www.w3.org/Interviews/BBC/Joe"
                       title="Joe interview on Web trends"/>
               <anchor id="tim" begin="5s" end="10s"
                       href="http://www.w3.org/Interviews/BBC/Tim"
                       title="Tim interview on Web trends"/>
               <anchor id="judy" begin="10s" end="60s"
                       href="http://www.w3.org/Interviews/BBC/Judy"
                       title="Judy interview on Web accessibility"/>
          </video>

          <!-- Navigation Bar -->
          <a href="#joe" title="Joe interview on Web trends">
             <img alt="Joe" title="Photo of Joe" 
                  region="joe-region" src="joe-photo.png"/>
          </a>
          <a href="#tim" title="Tim interview on Web trends">
             <img alt="Tim" title="Photo of Tim" 
                  region="tim-region" src="tim-photo.png"/>
          </a>
          <a href="#judy" title="Judy interview on Web accessibility">
             <img alt="Judy" title="Photo of Judy" 
                  region="judy-region" src="judy-photo.png"/>
          </a>
       </par>
    </body>
    </smil>

<span id="Testing">5. Adapting Content to User and System Settings</span>
-------------------------------------------------------------------------

SMIL 1.0 includes "test attributes" that the author may use to suggest how a presentation should vary according to user preferences for subtitles, overdubs, captions, content language, connection speed, screen depth, and screen size. For each test attribute, players should allow users to set appropriate preferences. The use of test attributes for captions, overdubs, and language is described above in [Section 2.2](#Continuous). The other test attributes are used in a similar manner.

For example, the author may use the <span class="attribute">system-bitrate</span> attribute to suggest that, for slow connections, a player should download text instead of video or audio. Some users may desire higher bandwidth content even over a slow connection while others may desire lower bandwidth content over a fast connection (e.g., users with some cognitive impairments). Therefore, players should let users know that content is available at different bit rates (or in different languages, for different screen sizes, etc.) and give users access to that content.

The player may also choose to override the author's bandwidth hints. For instance, the player might be capable of automatically adjusting the presentation quality according to the available bandwidth. This would help preserve synchronization when there is high traffic load.

These are the SMIL 1.0 test attributes that may be used with synchronization elements (defined in section 4.2 of \[[SMIL10](#ref-SMIL10)\]):

<span class="attribute">system-captions</span>  
Tests user preferences for captions (refer to [Section 2.2](#Continuous)).

<span class="attribute">system-overdub-or-caption</span>  
Tests user preferences for overdubs or subtitles (refer to [Section 2.2](#Continuous)).

<span class="attribute">system-language</span>  
Tests natural language preferences. **Note.** This test attribute does not specify the natural of language of an element's contents or an attribute's value; this is the role of the "xml:lang" attribute, defined in XML 1.0 (\[[XML10](#ref-XML10)\], section 2.12). However, "xml:lang" is not included in the SMIL 1.0 DTD. Therefore documents that include it will not validate to this DTD.

<span class="attribute">system-bitrate</span>  
Tests preferences for the minimum approximate bandwidth (in bits per second) required to display the element. This attribute can be used to suggest changes in a presentation based on available bandwidth.

<span class="attribute">system-screen-depth</span>  
Tests preferences for the minimum depth of the screen color palette (in bits) required to display the element. This attribute can be used to suggest changes in a presentation based on the ability of the screen to display images or video at a certain color depth.

<span class="attribute">system-screen-size</span>  
Tests preferences for the minimum required screen size (in X and Y pixels) to display the element. This attribute can be used to suggest changes in a presentation based on screen size.

The following example suggests that different video tracks be delivered according to the user's connection speed preferences. The player evaluates each of the choices in the <span class="element">switch</span> element in order and chooses the first one whose <span class="attribute">system-bitrate</span> value is equal to or greater than the user's preferred connection speed. No video will be played for connection speeds less than 10,000 bits per second.

    <switch>
       <video title="My Favorite Movie" longdesc="MyFavMovie"
              src="high-quality-movie.rm" system-bitrate="40000"/>
       <video title="My Favorite Movie" longdesc="MyFavMovie"
              src="medium-quality-movie.rm" system-bitrate="24000"/>
       <video title="My Favorite Movie" longdesc="MyFavMovie"
              src="low-quality-movie.rm" system-bitrate="10000"/>
    </switch>

### <span id="Relative">5.1 Relative Attribute Values</span>

Presentations that are specified in relative rather than absolute terms may be more easily adapted to a variety of output devices and viewing contexts.

In SMIL 1.0, relative attribute values are:

-   Percentage values for the <span class="attribute">coords</span>, <span class="attribute">height</span>, <span class="attribute">width</span>, <span class="attribute">top</span>, and <span class="attribute">left</span> attributes.
-   Relative length values for the <span class="attribute">height</span>, <span class="attribute">width</span>, <span class="attribute">top</span>, and <span class="attribute">left</span> attributes. The only relative length unit supported in SMIL 1.0 is "px", defined in \[[CSS2](#ref-CSS2)\], section 4.3.2.
-   The <span class="element">region</span> element's <span class="attribute">fit</span> attribute describes how to scale graphical media objects.

Players may offer other scaling strategies such as graphical zoom.

### <span id="Relative">5.1 Relative Timing</span>

Specifying synchronization in SMIL offers some advantages over relying on time codes in external resources. One advantage is that authors may use relative timing with the <span class="element">par</span>, <span class="element">seq</span>, <span class="element">begin</span>, <span class="element">end</span>, and <span class="element">dur</span> elements instead of absolute time codes alone. This may promote accessibility since timing relationships described relatively may be more easily controlled and changed according to user needs. Therefore they may be adapted to a variety of output devices and scenarios (just as relative layouts may be scaled graphically).

In most of the examples in this document, the only synchronization among media objects specified in SMIL is done by using the <span class="element">par</span> element to synchronize beginnings. We assume that other necessary synchronization has been specified in the formats that encode the media objects.

<span id="More">6. To Learn More about Accessibility and SMIL</span>
--------------------------------------------------------------------

The first place to learn more about SMIL is the Recommendation itself \[[SMIL10](#ref-SMIL10)\]. The Synchronized Multimedia Home Page (\[[SYMM](#ref-SYMM)\]) at the [W3C Web site](http://www.w3.org/) also includes information about SMIL tutorials, SMIL authoring tricks, examples of interesting presentations, player support for SMIL, and links to other sources of information about SMIL.

For more information about making SMIL presentations accessible, authors should consult the Web Content Accessibility Guidelines (\[[WAI-WEBCONTENT](#ref-WAI-WEBCONTENT)\]). The Guidelines Document assigns a priority to each checkpoint based on the checkpoint's importance to accessibility. The accompanying Techniques Document (\[[WAI-WEBCONTENT-TECHS](#ref-WAI-WEBCONTENT-TECHS)\]) explains the guidelines and checkpoints in detail and includes many examples of ways to satisfy them. Although the Techniques Document emphasizes HTML and CSS, many of the principles and examples apply to SMIL as well.

Player developers should consult the User Agent Accessibility Guidelines (\[[WAI-USERAGENT](#ref-WAI-USERAGENT)) and accompanying techniques document (\[[WAI-USERAGENT-TECHS](#ref-WAI-USERAGENT-TECHS)\]), which explains how to design accessible user agents, including synchronized multimedia players.

Developers of SMIL authoring tools should consult the Authoring Tool Accessibility Guidelines (\[[WAI-AUTOOLS](#ref-WAI-AUTOOLS)\]).

<span id="Index">Appendix A. Index of SMIL 1.0 Attributes that Promote Accessibility</span>
-------------------------------------------------------------------------------------------

The SMIL 1.0 attributes discussed in this document are listed here, followed by links to their definitions in the SMIL 1.0 specification.

The <span class="attribute">'alt'</span> attribute  
In SMIL 1.0: [4.2.3 media elements](http://www.w3.org/TR/REC-smil/#media-object)

In this Note: [2.1 Discrete Text Equivalents](#Discrete)

The <span class="attribute">'background-color'</span> attribute  
In SMIL 1.0: [3.3.1 region element](http://www.w3.org/TR/REC-smil/#region). Also discussed in [3.3.2 root layout](http://www.w3.org/TR/REC-smil/#root-layout).

In this Note: [3.2 Style](#Style)

The <span class="attribute">'longdesc'</span> attribute  
In SMIL 1.0: [4.2.3 media object elements](http://www.w3.org/TR/REC-smil/#media-object)

In this Note: [2.1 Discrete Text Equivalents](#Discrete)

The <span class="attribute">'system-captions'</span> attribute  
In SMIL 1.0: [4.4 Test Attributes](http://www.w3.org/TR/REC-smil/#test). Also discussed in [4.2.1 par element](http://www.w3.org/TR/REC-smil/#par), [4.2.2 seq element](http://www.w3.org/TR/REC-smil/#seq), and [4.2.3 media object elements](http://www.w3.org/TR/REC-smil/#media-object).

In this Note:

-   [2.2.1 Captions](#Captions)
-   [2.2.3 Multilingual Presentations and Continuous Equivalents](#Multilingual)
-   [3.1 Layout](#Layout)
-   [4.1 Accessible Image/Video Maps](#Maps)
-   [6. Adapting Content to User and System Settings](#Testing)

The <span class="attribute">'system-overdub-or-caption'</span> attribute  
In SMIL 1.0: [4.4 Test Attributes](http://www.w3.org/TR/REC-smil/#test). Also discussed in [4.2.1 par element](http://www.w3.org/TR/REC-smil/#par), [4.2.2 seq element](http://www.w3.org/TR/REC-smil/#seq), and [4.2.3 media object elements](http://www.w3.org/TR/REC-smil/#media-object).

In this Note:

-   [2.2.3 Multilingual Presentations and Continuous Equivalents](#Multilingual)
-   [6. Adapting Content to User and System Settings](#Testing)

The <span class="attribute">'title'</span> attribute  
In SMIL 1.0: [3.3.1 region element](http://www.w3.org/TR/REC-smil/#region). Also discussed in [3.4 meta element](http://www.w3.org/TR/REC-smil/#meta), [4.2.1 par element](http://www.w3.org/TR/REC-smil/#par) [4.2.2 seq element](http://www.w3.org/TR/REC-smil/#seq), [4.2.3 media object elements](http://www.w3.org/TR/REC-smil/#media-object), [4.3 switch element](http://www.w3.org/TR/REC-smil/#switch), [4.5.1 a element](http://www.w3.org/TR/REC-smil/#a), and [4.5.2 anchor element](http://www.w3.org/TR/REC-smil/#a).

In this Note:

-   [2.1 Discrete Text Equivalents](#Discrete)
-   [3.1 Layout](#Layout)
-   [3.3 Opening New Windows](#Popups)
-   [4.1 Accessible Image/Video Maps](#Maps)
-   [4.2 Accessible Time-dependent Links](#TimeLinks)
-   [4.3 Useful Navigation Mechanisms](#UsefulNav)

<span id="Sample">Appendix B. Sample Accessible SMIL Presentation</span>
------------------------------------------------------------------------

The following sample has been provided by the CPB/WGBH National Center for Accessible Media (refer to \[[WGBH-NCAM](#ref-WGBH-NCAM)\]). The presentation contains captions, subtitles and auditory descriptions in English and German. To play the presentation, you will need to download the G2 player from \[[REAL](#ref-REAL)\]. Information about this and other SMIL players is available at the W3C Synchronized Multimedia Home Page (\[[SYMM](#ref-SYMM)\]).

Once you have installed the player, follow the instructions below:

1.  Download the [sample presentation](SMIL-access-sample.zip), which is stored in a zip file.
2.  Unzip the zip file, which contains "car.smi" and other files.
3.  Start the player. Before playing the movie, you'll need to set preferences to display captions (or subtitles) and descriptions in either English or German:
    1.  Open the Options menu.
    2.  Choose Preferences.
    3.  Choose the Content tab.
    4.  Choose English or German from the Language listbox.
    5.  Check the Enable Captions box at the bottom of the window.
4.  Open "car.smi" and play it. You should see captions or subtitles below the video window and hear audio descriptions interspersed with the program narration.

Here is an English transcript of the presentation. It includes the text of the presentation's auditory description and the narration.

Description:  
An animation of a car and a clock.

Narrator:  
Someone watching a car accelerate toward light speed would see something very strange. It would seem as though the car itself were getting shorter and that time for the person in the car was slowing down.

Description:  
The car shrinks.

Narrator:  
However, you wouldn't see these effects until the car began to approach the speed of light. At 90% of the speed of light, the car would appear to shrink to 44% of its usual length.

Description:  
An animation of a lightwave.

Narrator:  
This thought experiment answered Einstein's old question about what he would see if he traveled along with a beam of light. He simply couldn't make the trip, for at the speed of light, length would contract to zero and time would stop.

Description:  
An animation of Albert Einstein running alongside a lightwave. He keeps up for a moment, then falls behind. The lightwave breaks up in a series of large colored dots.

<span id="About-WAI">About the Web Accessibility Initiative</span>
------------------------------------------------------------------

W3C's Web Accessibility Initiative (WAI) addresses accessibility of the Web through five complementary activities that:

1.  Ensure that the technology of the Web supports accessibility
2.  Develop accessibility guidelines
3.  Develop tools to facilitate evaluation and repair of Web sites
4.  Conduct education and outreach
5.  Coordinate with research and development

WAI's International Program Office enables partnering of industry, disability organizations, accessibility research organizations, and governments interested in creating an accessible Web. WAI sponsors include the US National Science Foundation and Department of Education's National Institute on Disability and Rehabilitation Research; the European Commission's DG XIII Telematics for Disabled and Elderly Programme; Telematics Applications Programme for Disabled and Elderly; Government of Canada, Industry Canada; IBM, Lotus Development Corporation, and NCR.

Additional information on WAI is available at <http://www.w3.org/WAI>.

<span id="About-W3C">About the World Wide Web Consortium (W3C)</span>
---------------------------------------------------------------------

The W3C was created to lead the Web to its full potential by developing common protocols that promote its evolution and ensure its interoperability. It is an international industry consortium jointly run by the MIT Laboratory for Computer Science (LCS) in the USA, the National Institute for Research in Computer Science and Control (INRIA) in France and Keio University in Japan. Services provided by the Consortium include: a repository of information about the World Wide Web for developers and users; reference code implementations to embody and promote standards; and various prototype and sample applications to demonstrate use of new technology. To date, more than 350 organizations are Members of the Consortium. For more information about the World Wide Web Consortium, see <http://www.w3.org/>

<span id="Acknowledgments">Acknowledgements</span>
--------------------------------------------------

Many people in W3C and WAI have given valuable comments to this document. The authors would like to thank Charles McCathieNevile, Philipp Hoschka, and Judy Brewer of W3C, Geoff Freed and Madeleine Rothberg of WGBH, Lloyd Rutledge of CWI, and the W3C SYMM Working Group for their contributions and review.

<span id="References">References</span>
---------------------------------------

A list of current W3C Recommendations and other technical documents can be found at <http://www.w3.org/TR>.

<span id="ref-CSS-ACCESS" class="refname">\[CSS-ACCESS\]</span>  
["Accessibility Features of CSS"](http://www.w3.org/TR/CSS-access), I. Jacobs, J. Brewer, eds. The latest version is available at http://www.w3.org/TR/CSS-access.

<span id="ref-CSS2" class="refname">\[CSS2\]</span>  
["Cascading Style Sheets, level 2"](http://www.w3.org/TR/1998/REC-CSS2-19980512), B. Bos, H. W. Lie, C. Lilley, and I. Jacobs, 17 May 1998. This document is http://www.w3.org/TR/1998/REC-CSS2-19980512.

<span id="ref-CSS1" class="refname">\[CSS1\]</span>  
["Cascading Style Sheets, level 1"](http://www.w3.org/TR/1999/REC-CSS1-19990111), H. W. Lie and B. Bos, 17 December 1996. Revised 11 January 1999. This document is http://www.w3.org/TR/1999/REC-CSS1-19990111.

<span id="ref-HTML40" class="refname">\[HTML40\]</span>  
["HTML 4.0 Recommendation"](http://www.w3.org/TR/1998/REC-html40-19980424), D. Raggett, A. Le Hors, and I. Jacobs, eds., 18 December 1997, revised 24 April 1998. This document is http://www.w3.org/TR/1998/REC-html40-19980424.

<span id="ref-REAL" class="refname">\[REAL\]</span>  
The [Real Networks Home Page](http://www.real.com/) is http://www.real.com/.

<span id="ref-SMIL10" class="refname">\[SMIL10\]</span>  
["Synchronized Multimedia Integration Language (SMIL) Specification"](http://www.w3.org/TR/1998/REC-smil-19980615), Philipp Hoschka, 15 June 1998. This document is http://www.w3.org/TR/1998/REC-smil-19980615.

<span id="ref-SMIL-CSS-LAYOUT" class="refname">\[SMIL-CSS-LAYOUT\]</span>  
["Displaying SMIL Basic Layout with a CSS2 Rendering Engine"](http://www.w3.org/TR/1998/NOTE-CSS-smil-19980720), Philipp Hoschka, Chris Lilly, 20 July 1998. This document is http://www.w3.org/TR/1998/NOTE-CSS-smil-19980720.

<span id="ref-SYMM" class="refname">\[SYMM\]</span>  
The [W3C Synchronized Multimedia Home Page](http://www.w3.org/AudioVideo) is http://www.w3.org/AudioVideo.

<span id="ref-XML10" class="refname">\[XML10\]</span>  
["Extensible Markup Language (XML) 1.0"](http://www.w3.org/TR/1998/REC-xml-19980210), T. Bray, J. Paoli, C. M. Sperberg-McQueen, 10 February 1998. This document is http://www.w3.org/TR/1998/REC-xml-19980210.

<span id="ref-XML-STYLE" class="refname">\[XML-STYLE\]</span>  
["Associating Style Sheets with XML documents Version 1.0"](http://www.w3.org/1999/06/REC-xml-stylesheet-19990629), James Clark, 29 June 1999. This document is http://www.w3.org/1999/06/REC-xml-stylesheet-19990629.

<span id="ref-WAI-AUTOOLS" class="refname">\[WAI-AUTOOLS\]</span>  
["Authoring Tool Accessibility Guidelines"](http://www.w3.org/TR/WAI-AUTOOLS/), J. Treviranus, J. Richards, I. Jacobs, C. McCathieNevile, eds. The latest version is available at http://www.w3.org/TR/WAI-AUTOOLS/.

<span id="ref-WAI-WEBCONTENT" class="refname">\[WAI-WEBCONTENT\]</span>  
["Web Content Accessibility Guidelines 1.0"](http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505), W. Chisholm, G. Vanderheiden, and I. Jacobs, eds., 5 May 1999. This document is http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505

<span id="ref-WAI-WEBCONTENT-TECHS" class="refname">\[WAI-WEBCONTENT-TECHS\]</span>  
["Techniques for Web Content Accessibility Guidelines 1.0"](http://www.w3.org/TR/WAI-WEBCONTENT-TECHS), W. Chisholm, G. Vanderheiden, and I. Jacobs, eds. The latest version is available at http://www.w3.org/TR/WAI-WEBCONTENT-TECHS.

<span id="ref-WAI-USERAGENT" class="refname">\[WAI-USERAGENT\]</span>  
["User Agent Accessibility Guidelines"](http://www.w3.org/TR/WAI-USERAGENT/), J. Gunderson and I. Jacobs, eds. The latest version is available at http://www.w3.org/TR/WAI-USERAGENT/.

<span id="ref-WAI-USERAGENT-TECHS" class="refname">\[WAI-USERAGENT-TECHS\]</span>  
["Techniques for User Agent Accessibility Guidelines"](http://www.w3.org/TR/WAI-USERAGENT-TECHS/), J. Gunderson and I. Jacobs, eds. The latest version is available at http://www.w3.org/TR/WAI-USERAGENT-TECHS/.

<span id="ref-WGBH-NCAM" class="refname">\[WGBH-NCAM\]</span>  
The [National Center for Accessible Media at WGBH](http://www.wgbh.org/ncam) is located at http://www.wgbh.org/ncam.
