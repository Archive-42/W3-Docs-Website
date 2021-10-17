<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Pointer Events
==============

Level 2
-------

W3C Recommendation 4 April 2019
-------------------------------

This version:  
<a href="https://www.w3.org/TR/2019/REC-pointerevents2-20190404/" class="u-url">https://www.w3.org/TR/2019/REC-pointerevents2-20190404/</a>

Latest published version:  
<https://www.w3.org/TR/pointerevents2/>

Latest editor's draft:  
<https://w3c.github.io/pointerevents/>

Test suite:  
<https://wpt.fyi/pointerevents/>

Implementation report:  
<http://w3c.github.io/test-results/pointerevents/all.html>

Previous version:  
<a href="https://www.w3.org/TR/2019/PR-pointerevents2-20190221/" class="u-url">https://www.w3.org/TR/2019/PR-pointerevents2-20190221/</a>

Latest Recommendation:  
<https://www.w3.org/TR/pointerevents1/>

Editors:  
<span class="p-name fn">Matt Brubeck</span> (<a href="https://www.mozilla.org/" class="p-org org h-org h-card">Mozilla</a>)

<span class="p-name fn">Rick Byers</span> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>)

<span class="p-name fn">Patrick H. Lauke</span> (<a href="https://www.paciellogroup.com/" class="p-org org h-org h-card">The Paciello Group</a>)

<span class="p-name fn">Navid Zolghadr</span> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>)

Participate:  
[GitHub w3c/pointerevents](https://github.com/w3c/pointerevents/)

[File a bug](https://github.com/w3c/pointerevents/issues/)

[Commit history](https://github.com/w3c/pointerevents/commits/gh-pages)

[Pull requests](https://github.com/w3c/pointerevents/pulls/)

Mailing list:  
[Mailing list archive.](https://lists.w3.org/Archives/Public/public-pointer-events/)

Please check the [**errata**](http://www.w3.org/2019/04/pe2-errata.html) for any errors or issues reported since publication.

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2019 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

The features in this specification extend or modify those found in Pointer Events, a W3C Recommendation that describes events and related interfaces for handling hardware agnostic pointer input from devices including a mouse, pen, touchscreen, etc. For compatibility with existing mouse based content, this specification also describes a mapping to fire Mouse Events for other pointer device types.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [Pointer Events Working Group](https://www.w3.org/2012/pointerevents/) as a Recommendation. The [implementation report](http://w3c.github.io/test-results/pointerevents/all.html) demonstrates interoperability. This document supersedes \[<a href="#bib-pointerevents1" class="bibref">PointerEvents1</a>\].

This specification is an update to \[<a href="#bib-pointerevents1" class="bibref">PointerEvents1</a>\] which was shipped broadly only by Microsoft Internet Explorer and Microsoft Edge (though a further independent and mostly interoperable implementation was present in a pre-release build of Mozilla Firefox when the Pointer Events specification was published as a W3C Recommendation). Level 2 includes editorial clarifications, new features and minor breaking changes that address certain limitations and concerns that have been raised about aspects of the design, in an effort to enable wider browser adoption.

No changes were applied since previous publication.

[GitHub Issues](https://github.com/w3c/pointerevents/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-pointer-events@w3.org> ([archives](https://lists.w3.org/Archives/Public/public-pointer-events/)).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/59096/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#intro" class="tocxref"><span class="secno">1. </span>Introduction</a>
2.  <a href="#conformance" class="tocxref"><span class="secno">2. </span>Conformance</a>
3.  <a href="#examples" class="tocxref"><span class="secno">3. </span>Examples</a>
4.  <a href="#glossary" class="tocxref"><span class="secno">4. </span>Glossary</a>
5.  <a href="#pointer-events-and-interfaces" class="tocxref"><span class="secno">5. </span>Pointer Events and Interfaces</a>
    1.  <a href="#pointerevent-interface" class="tocxref"><span class="secno">5.1 </span><code>PointerEvent</code> Interface</a>
        1.  <a href="#button-states" class="tocxref"><span class="secno">5.1.1 </span>Button States</a>
            1.  <a href="#chorded-button-interactions" class="tocxref"><span class="secno">5.1.1.1 </span><span data-dfn-type="dfn">Chorded Button Interactions</span></a>
            2.  <a href="#the-button-property" class="tocxref"><span class="secno">5.1.1.2 </span>The <code>button</code> property</a>
            3.  <a href="#the-buttons-property" class="tocxref"><span class="secno">5.1.1.3 </span>The <code>buttons</code> property</a>
        2.  <a href="#the-primary-pointer" class="tocxref"><span class="secno">5.1.2 </span>The <span data-dfn-type="dfn" data-plurals="primary pointers">Primary Pointer</span></a>
        3.  <a href="#firing-events-using-the-pointerevent-interface" class="tocxref"><span class="secno">5.1.3 </span>Firing events using the <code>PointerEvent</code> interface</a>
            1.  <a href="#attributes-and-default-actions" class="tocxref"><span class="secno">5.1.3.1 </span>Attributes and Default Actions</a>
            2.  <a href="#process-pending-pointer-capture" class="tocxref"><span class="secno">5.1.3.2 </span>Process Pending Pointer Capture</a>
    2.  <a href="#pointer-event-types" class="tocxref"><span class="secno">5.2 </span>Pointer Event types</a>
        1.  <a href="#the-pointerover-event" class="tocxref"><span class="secno">5.2.1 </span>The <span data-dfn-type="dfn"><code>pointerover</code> event</span></a>
        2.  <a href="#the-pointerenter-event" class="tocxref"><span class="secno">5.2.2 </span>The <span data-dfn-type="dfn"><code>pointerenter</code> event</span></a>
        3.  <a href="#the-pointerdown-event" class="tocxref"><span class="secno">5.2.3 </span>The <span data-dfn-type="dfn"><code>pointerdown</code> event</span></a>
        4.  <a href="#the-pointermove-event" class="tocxref"><span class="secno">5.2.4 </span>The <span data-dfn-type="dfn"><code>pointermove</code> event</span></a>
        5.  <a href="#the-pointerup-event" class="tocxref"><span class="secno">5.2.5 </span>The <span data-dfn-type="dfn"><code>pointerup</code> event</span></a>
        6.  <a href="#the-pointercancel-event" class="tocxref"><span class="secno">5.2.6 </span>The <span data-dfn-type="dfn"><code>pointercancel</code> event</span></a>
        7.  <a href="#the-pointerout-event" class="tocxref"><span class="secno">5.2.7 </span>The <span data-dfn-type="dfn"><code>pointerout</code> event</span></a>
        8.  <a href="#the-pointerleave-event" class="tocxref"><span class="secno">5.2.8 </span>The <span data-dfn-type="dfn"><code>pointerleave</code> event</span></a>
        9.  <a href="#the-gotpointercapture-event" class="tocxref"><span class="secno">5.2.9 </span>The <span data-dfn-type="dfn"><code>gotpointercapture</code> event</span></a>
        10. <a href="#the-lostpointercapture-event" class="tocxref"><span class="secno">5.2.10 </span>The <span data-dfn-type="dfn"><code>lostpointercapture</code> event</span></a>
6.  <a href="#extensions-to-the-element-interface" class="tocxref"><span class="secno">6. </span>Extensions to the <span data-dfn-type="dfn" data-idl="interface" data-title="Element" data-dfn-for=""><code>Element</code></span> interface</a>
7.  <a href="#extensions-to-the-globaleventhandlers-mixin" class="tocxref"><span class="secno">7. </span>Extensions to the <code>GlobalEventHandlers</code> mixin</a>
8.  <a href="#extensions-to-the-navigator-interface" class="tocxref"><span class="secno">8. </span>Extensions to the <code>Navigator</code> interface</a>
9.  <a href="#declaring-candidate-regions-for-default-touch-behaviors" class="tocxref"><span class="secno">9. </span>Declaring candidate regions for default touch behaviors</a>
    1.  <a href="#the-touch-action-css-property" class="tocxref"><span class="secno">9.1 </span>The <code>touch-action</code> CSS property</a>
    2.  <a href="#determining-supported-touch-behavior" class="tocxref"><span class="secno">9.2 </span>Determining supported touch behavior</a>
    3.  <a href="#details-of-touch-action-values" class="tocxref"><span class="secno">9.3 </span>Details of <code>touch-action</code> values</a>
10. <a href="#pointer-capture" class="tocxref"><span class="secno">10. </span><span data-dfn-type="dfn">Pointer Capture</span></a>
    1.  <a href="#introduction" class="tocxref"><span class="secno">10.1 </span>Introduction</a>
    2.  <a href="#setting-pointer-capture" class="tocxref"><span class="secno">10.2 </span>Setting Pointer Capture</a>
    3.  <a href="#releasing-pointer-capture" class="tocxref"><span class="secno">10.3 </span>Releasing Pointer Capture</a>
    4.  <a href="#implicit-pointer-capture" class="tocxref"><span class="secno">10.4 </span><span data-dfn-type="dfn">Implicit Pointer Capture</span></a>
    5.  <a href="#implicit-release-of-pointer-capture" class="tocxref"><span class="secno">10.5 </span>Implicit Release of Pointer Capture</a>
11. <a href="#compatibility-mapping-with-mouse-events" class="tocxref"><span class="secno">11. </span><span data-lt="compatibility mouse events|compatibility mapping with mouse events" data-dfn-type="dfn">Compatibility Mapping with Mouse Events</span></a>
    1.  <a href="#tracking-the-effective-position-of-the-legacy-mouse-pointer" class="tocxref"><span class="secno">11.1 </span><span data-dfn-type="dfn">Tracking the effective position of the legacy mouse pointer</span></a>
    2.  <a href="#mapping-for-devices-that-support-hover" class="tocxref"><span class="secno">11.2 </span>Mapping for devices that support hover</a>
    3.  <a href="#mapping-for-devices-that-do-not-support-hover" class="tocxref"><span class="secno">11.3 </span>Mapping for devices that do not support hover</a>
12. <a href="#security-and-privacy-considerations" class="tocxref"><span class="secno">12. </span>Security and privacy considerations</a>
13. <a href="#acknowledgments" class="tocxref"><span class="secno">A. </span>Acknowledgments</a>
14. <a href="#revision-history" class="tocxref"><span class="secno">B. </span>Revision History</a>
15. <a href="#references" class="tocxref"><span class="secno">C. </span>References</a>
    1.  <a href="#normative-references" class="tocxref"><span class="secno">C.1 </span>Normative references</a>
    2.  <a href="#informative-references" class="tocxref"><span class="secno">C.2 </span>Informative references</a>

<span class="secno">1. </span>Introduction<a href="#intro" class="self-link"></a>
---------------------------------------------------------------------------------

*This section is non-normative.*

Today, most \[<a href="#bib-html5" class="bibref">HTML5</a>\] content is used with and/or designed for mouse input. Those that handle input in a custom manner typically code to \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] Mouse Events. Newer computing devices today, however, incorporate other forms of input, including touchscreens, pen input, etc. Event types have been proposed for handling each of these forms of input individually. However, that approach often incurs unnecessary duplication of logic and event handling overhead when adding support for a new input type. This often creates a compatibility problem when content is written with only one device type in mind. Additionally, for compatibility with existing mouse-based content, most <a href="#dfn-user-agent" class="internalDFN">user agents</a> fire Mouse Events for all input types. This makes it ambiguous whether a Mouse Event represents an actual mouse device or is being produced from another input type for compatibility, which makes it hard to code to both device types simultaneously.

To reduce the cost of coding to multiple input types and also to help with the above described ambiguity with Mouse Events, this specifications defines a more abstract form of input, called a <a href="#dfn-pointer" class="internalDFN">pointer</a>. A pointer can be any point of contact on the screen made by a mouse cursor, pen, touch (including multi-touch), or other pointing input device. This model makes it easier to write sites and applications that work well no matter what hardware the user has. For scenarios when device-specific handling is desired, this specification also defines properties for inspecting the device type which produced the event. The primary goal is to provide a single set of events and interfaces that allow for easier authoring for cross-device pointer input while still allowing for device-specific handling only when necessary for an augmented experience.

An additional key goal is to enable multi-threaded user agents to handle default touch actions, such as scrolling, without blocking on script execution.

Note

While this specification defines a unified event model for a variety of pointer inputs, this model does not cover other forms of input such as keyboards or keyboard-like interfaces (for instance, a screenreader or similar assistive technology running on a touchscreen-only device, which allows users sequential navigation through focusable controls and elements). While user agents might choose to also generate pointer events in response to these interfaces, this scenario is not covered in this specification.

In the first instance, authors are encouraged to provide equivalent functionality for all forms of input by responding to high-level events such as `focus`, `blur` and `click`. However, when using low-level events (such as Pointer Events), authors are encouraged to ensure that all types of input are supported. In the case of keyboards and keyboard-like interfaces, this might require the addition of explicit keyboard event handling. See [WCAG 2.0 Guideline 2.1](http://www.w3.org/TR/WCAG20/#keyboard-operation) for further details.

<figure><img src="pointer.png" alt="Figure 1 A pointer is a hardware agnostic representation of input devices that can target a specific coordinate (or set of coordinates) on a screen." width="264" height="272" /><figcaption>Figure <span class="figno">1</span> <span class="fig-title">A pointer is a hardware agnostic representation of input devices that can target a specific coordinate (or set of coordinates) on a screen.</span></figcaption></figure>The events for handling generic pointer input look a lot like those for mouse: pointerdown, pointermove, pointerup, pointerover, pointerout, etc. This facilitates easy content migration from Mouse Events to Pointer Events. Pointer Events provide all the usual properties present in Mouse Events (client coordinates, target element, button states, etc.) in addition to new properties for other forms of input: pressure, contact geometry, tilt, etc. So authors can easily code to Pointer Events to share logic between different input types where it makes sense, and customize for a particular type of input only where necessary to get the best experience.

While Pointer Events are sourced from a variety of input devices, they are not defined as being generated from some other set of device-specific events. While possible and encouraged for compatibility, this spec does not require other device-specific events be supported (e.g. mouse events, touch events, etc.). A user agent could support pointer events without supporting any other device events. For compatibility with content written to mouse-specific events, this specification does provide an optional section describing how to generate <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a> based on pointer input from devices other than a mouse.

Note

This specification does not provide any advice on the expected behavior of user agents that support both Touch Events (as defined in \[<a href="#bib-touch-events" class="bibref">TOUCH-EVENTS</a>\]) and Pointer Events. For more information on the relationship between these two specifications, see the [Touch Events Community Group](http://www.w3.org/community/touchevents/).

<span class="secno">2. </span>Conformance<a href="#conformance" class="self-link"></a>
--------------------------------------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *OPTIONAL*, *SHOULD*, and *SHOULD NOT* are to be interpreted as described in \[<a href="#bib-rfc2119" class="bibref">RFC2119</a>\].

<span class="secno">3. </span>Examples<a href="#examples" class="self-link"></a>
--------------------------------------------------------------------------------

*This section is non-normative.*

The following are example author code that demonstrates how the APIs in this specification might be used.

<a href="#example_1" class="self-link">Example 1</a><span class="example-title">: Feature detection and event binding</span>

    /* Bind to either Pointer Events or traditional touch/mouse */

    if (window.PointerEvent) {
        // if Pointer Events are supported, only listen to pointer events
        target.addEventListener("pointerdown", function(e) {
            // if necessary, apply separate logic based on e.pointerType
            // for different touch/pen/mouse behavior
            ...
        });
        ...
    } else {
        // traditional touch/mouse event handlers
        target.addEventListener('touchstart', function(e) {
            // prevent compatibility mouse events and click
            e.preventDefault();
            ...
        });
        ...
        target.addEventListener('mousedown', ...);
        ...
    }

    // additional event listeners for keyboard handling
    ...

<a href="#example_2" class="self-link">Example 2</a><span class="example-title">: Detecting the type of input from a user</span>

    window.addEventListener("pointerdown", detectInputType);

    function detectInputType(event) {
        switch(event.pointerType) {
            case "mouse":
                /* mouse input detected */
                break;
            case "pen":
                /* pen/stylus input detected */
                break;
            case "touch":
                /* touch input detected */
                break;
            default:
                /* pointerType is empty (could not be detected)
                or UA-specific custom type */
        }
    }

<a href="#example_3" class="self-link">Example 3</a><span class="example-title">: Basic HTML5 Canvas painting application</span>

    <style>
      /* Disable intrinsic user agent touch behaviors (such as panning or zooming) so
      that all events on the canvas element are given to the application instead. */

      canvas { touch-action: none; }
    </style>

    <canvas id="drawSurface" width="500px" height="500px" style="border:1px solid black;"></canvas>

    <script>
        var canvas = document.getElementById("drawSurface"),
        context = canvas.getContext("2d");

        if (window.PointerEvent) {
            canvas.addEventListener("pointermove", paint);
            if(window.navigator.maxTouchPoints>1)
               // user agent and hardware support multi-touch
               ...
        } else {
            // provide fallback for user agents that do not support Pointer Events
            canvas.addEventListener("mousemove", paint);
        }

        function paint(event) {
            if(event.buttons>0)
               context.fillRect(event.clientX, event.clientY, 5, 5);
        }

        // additional event listeners/functions for keyboard handling
        ...
    </script>

<a href="#example_4" class="self-link">Example 4</a><span class="example-title">: Resizing an element to match the contact geometry</span>

    <div style="position:absolute; top:0px; left:0px; width:100px;height:100px;"></div>
    <script>
    window.addEventListener("pointerdown", checkPointerSize);

    function checkPointerSize(event) {
        event.target.style.width = event.width + "px";
        event.target.style.height = event.height + "px";
    }
    </script>

<a href="#example_5" class="self-link">Example 5</a><span class="example-title">: Firing an untrusted pointer event from script</span>

    var event = new PointerEvent("pointerover",
      { bubbles: true,
        cancelable: true,
        composed: true,
        pointerId: 42,
        pointerType: "pen",
        clientX: 300,
        clientY: 500
      });
    eventTarget.dispatchEvent(event);

<span class="secno">4. </span>Glossary<a href="#glossary" class="self-link"></a>
--------------------------------------------------------------------------------

*This section is non-normative.*

active buttons state  
The condition when a pointer has a non-zero value for the `buttons` property. For mouse, this is when the device has at least one button depressed. For touch, this is when there is physical contact with the digitizer. For pen, this is when either the pen has physical contact with the digitizer, or at least one button is depressed while hovering.

active pointer  
Any touch contact, pen stylus, mouse cursor, or other pointer that can produce events. If it is possible for a given pointer (identified by a unique `pointerId`) to produce additional events within the document, then that pointer is still considered active. Examples:

-   A mouse connected to the device is always active.
-   A touch contact on the screen is considered active.
-   If a touch contact or pen stylus is lifted beyond the range of the digitizer, then it is no longer considered active.

Note

On some platforms, the set of active pointers includes all pointer input to the device, including any that are not targeted at the user agent (e.g. those targeted at other applications).

Note

Each active pointer should have the same id within the scope of the [top-level browsing context](https://www.w3.org/TR/html5/browsers.html#top-level-browsing-context) (as defined by \[<a href="#bib-html5" class="bibref">HTML5</a>\]). However, there is no such guarantee across multiple [top-level browsing contexts](https://www.w3.org/TR/html5/browsers.html#top-level-browsing-context).

canceled event  
An event whose default action was prevented by means of `preventDefault()`, returning `false` in an event handler, or other means as defined by \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] and \[<a href="#bib-html5" class="bibref">HTML5</a>\].

contact geometry  
The bounding box of an input (most commonly, touch) on a digitizer. This typically refers to devices with coarser pointer input resolution than a single pixel. Some devices do not report this data at all.

digitizer  
A type of input sensing device in which a surface can detect input which is in contact and/or in close proximity. Most commonly, this is the surface that senses input from the touch contact or a pen stylus.

hit test  
The process by which a user agent determines a target element for a pointer event. Typically, this is determined by considering the pointer's location and also the visual layout of elements in a document on screen media.

pointer  
A hardware agnostic representation of input devices that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact.

user agent  
A program, such as a browser or content authoring tool, normally running on a client machine, which acts on a user's behalf in retrieving, interpreting, executing, presenting, or creating content.

queue a task  
Adding the task to events task queue of the relevant event loop, as defined in \[<a href="#bib-html5" class="bibref">HTML5</a>\].

<span class="secno">5. </span>Pointer Events and Interfaces<a href="#pointer-events-and-interfaces" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------

### <span class="secno">5.1 </span>`PointerEvent` Interface<a href="#pointerevent-interface" class="self-link"></a>

    dictionary PointerEventInit : MouseEventInit {
        long        pointerId = 0;
        double      width = 1;
        double      height = 1;
        float       pressure = 0;
        float       tangentialPressure = 0;
        long        tiltX = 0;
        long        tiltY = 0;
        long        twist = 0;
        DOMString   pointerType = "";
        boolean     isPrimary = false;
    };

    [Constructor(DOMString type, optional PointerEventInit eventInitDict), Exposed=Window]
    interface PointerEvent : MouseEvent {
        readonly        attribute long        pointerId;
        readonly        attribute double      width;
        readonly        attribute double      height;
        readonly        attribute float       pressure;
        readonly        attribute float       tangentialPressure;
        readonly        attribute long        tiltX;
        readonly        attribute long        tiltY;
        readonly        attribute long        twist;
        readonly        attribute DOMString   pointerType;
        readonly        attribute boolean     isPrimary;
    };

`pointerId`  
A unique identifier for the pointer causing the event. This identifier *MUST* be unique from all other <a href="#dfn-active-pointer" class="internalDFN">active pointers</a> in the [top-level browsing context](https://www.w3.org/TR/html5/browsers.html#top-level-browsing-context) (as defined by \[<a href="#bib-html5" class="bibref">HTML5</a>\]) at the time. A user agent *MAY* recycle previously retired values for `pointerId` from previous active pointers, if necessary.

Note

The `pointerId` selection algorithm is implementation specific. Therefore authors cannot assume values convey any particular meaning other than an identifier for the pointer that is unique from all other active pointers. As an example, user agents may simply assign a number, starting from `1`, to any active pointers, in the order that they become active - but these values are not guaranteed to be monotonically increasing. Other user agents may opt to assign a completely randomized and unique number to each active pointer. However, in the latter scenarios user agents *MUST* ensure that the `pointerId` that is assigned remains the same only for the lifetime of the current page, and that any new `pointerId` values are not predictable (e.g. generated randomly with cryptographically strong randomness), to minimize the possibility of users being uniquely fingerprinted and tracked across different pages.

`width`  
The width (magnitude on the X axis), in CSS pixels (see \[<a href="#bib-css21" class="bibref">CSS21</a>\]), of the <a href="#dfn-contact-geometry" class="internalDFN">contact geometry</a> of the pointer. This value *MAY* be updated on each event for a given pointer. For inputs that typically lack contact geometry (such as a traditional mouse), and in cases where the actual geometry of the input is not detected by the hardware, the <a href="#dfn-user-agent" class="internalDFN">user agent</a> *MUST* return a default value of 1.

`height`  
The height (magnitude on the Y axis), in CSS pixels (see \[<a href="#bib-css21" class="bibref">CSS21</a>\]), of the <a href="#dfn-contact-geometry" class="internalDFN">contact geometry</a> of the pointer. This value *MAY* be updated on each event for a given pointer. For inputs that typically lack contact geometry (such as a traditional mouse), and in cases where the actual geometry of the input is not detected by the hardware, the <a href="#dfn-user-agent" class="internalDFN">user agent</a> *MUST* return a default value of 1.

`pressure`  
The normalized pressure of the pointer input in the range of \[0,1\], where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively. For hardware and platforms that do not support pressure, the value *MUST* be 0.5 when in the <a href="#dfn-active-buttons-state" class="internalDFN">active buttons state</a> and 0 otherwise. Note: all `pointerup` events will have pressure 0.

`tangentialPressure`  
The normalized tangential pressure (also known as barrel pressure), typically set by an additional control (e.g. a finger wheel on an airbrush stylus), of the pointer input in the range of \[-1,1\], where 0 is the neutral position of the control. Note that some hardware may only support positive values in the range of \[0,1\]. For hardware and platforms that do not support tangential pressure, the value *MUST* be 0.

`tiltX`  
The plane angle (in degrees, in the range of \[-90,90\]) between the Y-Z plane and the plane containing both the transducer (e.g. pen stylus) axis and the Y axis. A positive `tiltX` is to the right. `tiltX` can be used along with `tiltY` to represent the tilt away from the normal of a transducer with the digitizer. For hardware and platforms that do not report tilt, the value *MUST* be 0.

<figure><img src="tiltX_600px.png" alt="Figure 2 Positive tiltX." width="600" height="352" /><figcaption>Figure <span class="figno">2</span> <span class="fig-title">Positive <code>tiltX</code>.</span></figcaption></figure>

`tiltY`  
The plane angle (in degrees, in the range of \[-90,90\]) between the X-Z plane and the plane containing both the transducer (e.g. pen stylus) axis and the X axis. A positive `tiltY` is towards the user. `tiltY` can be used along with `tiltX` to represent the tilt away from the normal of a transducer with the digitizer. For hardware and platforms that do not report tilt, the value *MUST* be 0.

<figure><img src="tiltY_600px.png" alt="Figure 3 Negative tiltY." width="600" height="445" /><figcaption>Figure <span class="figno">3</span> <span class="fig-title">Negative <code>tiltY</code>.</span></figcaption></figure>

`twist`  
The clockwise rotation (in degrees, in the range of \[0,359\]) of a transducer (e.g. pen stylus) around its own major axis. For hardware and platforms that do not report twist, the value *MUST* be 0.

`pointerType`  
Indicates the device type that caused the event (mouse, pen, touch, etc.). If a user agent is to [fire a pointer event](#firing-events-using-the-pointerevent-interface) for a mouse, pen stylus, or touch input device, then the value of `pointerType` *MUST* be according to the following table:

<table><thead><tr class="header"><th>Pointer Device Type</th><th><code>pointerType</code> Value</th></tr></thead><tbody><tr class="odd"><td>Mouse</td><td><code>mouse</code></td></tr><tr class="even"><td>Pen Stylus</td><td><code>pen</code></td></tr><tr class="odd"><td>Touch Contact</td><td><code>touch</code></td></tr></tbody></table>

If the device type cannot be detected by the user agent, then the value *MUST* be an empty string. If a user agent supports pointer device types other than those listed above, the value of `pointerType` *SHOULD* be vendor prefixed to avoid conflicting names for different types of devices. Future specifications *MAY* provide additional normative values for other device types.

Note

See [Example 2](#example_2 "examples") for a basic demonstration of how the `pointerType` can be used. Also note that developers should include some form of default handling to cover user agents that may have implemented their own custom `pointerType` values and for situations where `pointerType` is simply an empty string.

`isPrimary`  
Indicates if the pointer represents the <a href="#dfn-primary-pointer" class="internalDFN">primary pointer</a> of this pointer type.

The `PointerEventInit` dictionary is used by the `PointerEvent` interface's constructor to provide a mechanism by which to construct untrusted (synthetic) pointer events. It inherits from the `MouseEventInit` dictionary defined in \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\]. The steps for constructing an event are defined in \[<a href="#bib-dom4" class="bibref">DOM4</a>\]. See the [examples](#examples "examples") for sample code demonstrating how to fire an untrusted pointer event.

Note

The `PointerEvent` interface inherits from `MouseEvent`, defined in \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] and extended by \[<a href="#bib-cssom-view" class="bibref">CSSOM-VIEW</a>\].

#### <span class="secno">5.1.1 </span>Button States<a href="#button-states" class="self-link"></a>

##### <span class="secno">5.1.1.1 </span>Chorded Button Interactions<a href="#chorded-button-interactions" class="self-link"></a>

Some pointer devices, such as mouse or pen, support multiple buttons. In the \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] Mouse Event model, each button press produces a `mousedown` and `mouseup` event. To better abstract this hardware difference and simplify cross-device input authoring, Pointer Events do not fire overlapping `pointerdown` and `pointerup` events for <a href="#dfn-chorded-button-interactions" class="internalDFN">chorded button presses</a> (depressing an additional button while another button on the pointer device is already depressed).

Instead, chorded button presses can be detected by inspecting changes to the `button` and `buttons` properties. The `button` and `buttons` properties are inherited from the \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] `MouseEvent` interface, but with a change in semantics and values, as outlined in the following sections.

Note

The modifications to the `button` and `buttons` properties apply only to pointer events. For any <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a> the value of `button` and `buttons` should follow \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\].

##### <span class="secno">5.1.1.2 </span>The `button` property<a href="#the-button-property" class="self-link"></a>

To identify button state transitions in any pointer event (and not just `pointerdown` and `pointerup`), the `button` property indicates the device button whose state-change fired the event.

<table><thead><tr class="header"><th>Device Button Changes</th><th><code>button</code></th></tr></thead><tbody><tr class="odd"><td>Neither buttons nor touch/pen contact changed since last event</td><td>-1</td></tr><tr class="even"><td>Left Mouse,<br />
Touch Contact,<br />
Pen contact</td><td>0</td></tr><tr class="odd"><td>Middle Mouse</td><td>1</td></tr><tr class="even"><td>Right Mouse,<br />
Pen barrel button</td><td>2</td></tr><tr class="odd"><td>X1 (back) Mouse</td><td>3</td></tr><tr class="even"><td>X2 (forward) Mouse</td><td>4</td></tr><tr class="odd"><td>Pen eraser button</td><td>5</td></tr></tbody></table>

Note

During a mouse drag, the value of the `button` property in a `pointermove` event will be different from that in a `mousemove` event. For example, while moving the mouse with the right button pressed, the `pointermove` events will have the `button` value -1, but the `mousemove` events will have the `button` value 2.

##### <span class="secno">5.1.1.3 </span>The `buttons` property<a href="#the-buttons-property" class="self-link"></a>

The `buttons` property gives the current state of the device buttons as a bitmask (same as in `MouseEvent`, but with an expanded set of possible values).

<table><thead><tr class="header"><th>Current state of device buttons</th><th><code>buttons</code></th></tr></thead><tbody><tr class="odd"><td><strong>Mouse moved with no buttons pressed</strong>,<br />
Pen moved while hovering with no buttons pressed</td><td>0</td></tr><tr class="even"><td>Left Mouse,<br />
Touch Contact,<br />
Pen contact</td><td>1</td></tr><tr class="odd"><td>Middle Mouse</td><td>4</td></tr><tr class="even"><td>Right Mouse,<br />
Pen barrel button</td><td>2</td></tr><tr class="odd"><td>X1 (back) Mouse</td><td>8</td></tr><tr class="even"><td>X2 (forward) Mouse</td><td>16</td></tr><tr class="odd"><td>Pen eraser button</td><td>32</td></tr></tbody></table>

#### <span class="secno">5.1.2 </span>The Primary Pointer<a href="#the-primary-pointer" class="self-link"></a>

In a multi-pointer (e.g. multi-touch) scenario, the `isPrimary` property is used to identify a master pointer amongst the set of <a href="#dfn-active-pointer" class="internalDFN">active pointers</a> for each pointer type.

-   At any given time, there can only ever be at most one primary pointer for each pointer type.
-   The first pointer to become active for a particular pointer type (e.g. the first finger to touch the screen in a multi-touch interaction) becomes the primary pointer for that pointer type.
-   Only a primary pointer will produce <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a>. In the case where there are multiple <a href="#dfn-primary-pointer" class="internalDFN">primary pointers</a>, these pointers will all produce <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a>.

Note

Authors who desire single-pointer interaction can achieve this by ignoring non-primary pointers (however, see the note below on [multiple primary pointers](#multiple-primary-pointers)).

Note

When two or more pointer device types are being used concurrently, multiple pointers (one for each `pointerType`) are considered primary. For example, a touch contact and a mouse cursor moved simultaneously will produce pointers that are both considered primary.

Note

Some devices, operating systems and user agents may ignore the concurrent use of more than one type of pointer input to avoid accidental interactions. For instance, devices that support both touch and pen interactions may ignore touch inputs while the pen is actively being used, to allow users to rest their hand on the touchscreen while using the pen (a feature commonly referred to as "palm rejection"). Currently, it is not possible for authors to suppress this behavior.

Note

In some cases, it is possible for the user agent to fire pointer events in which no pointer is marked as a primary pointer. For instance, when there are multiple active pointers of a particular type like multi-touch and the primary pointer is removed (e.g. it leaves the screen), there will be no primary pointer events. Also on the platforms where the primary pointer is determined using all active pointers on the device (including those targeted at an application other than the user agent), if the first touch interaction is targeted outside the user agent and a secondary (multi-touch) touch interaction is targeted inside the user agent, then the user agent may fire pointer events for the second contact with a value of `false` for `isPrimary`.

Note

Current operating systems and user agents don't usually have a concept of multiple mouse inputs. When more than one mouse device is present (for instance, on a laptop with both a trackpad and an external mouse), all mouse devices are generally treated as a single device - movements on any of the devices are translated to movement of a single mouse pointer, and there is no distinction between button presses on different mouse devices. For this reason, there will usually only be a single mouse pointer, and that pointer will be primary.

#### <span class="secno">5.1.3 </span>Firing events using the `PointerEvent` interface<a href="#firing-events-using-the-pointerevent-interface" class="self-link"></a>

To fire a pointer event named e means to fire an event named e as defined in \[<a href="#bib-dom4" class="bibref">DOM4</a>\] with an event using the <a href="#dom-pointerevent" class="internalDFN"><code>PointerEvent</code></a> interface whose attributes are set as defined in [`PointerEvent` Interface](#pointerevent-interface) and [Attributes and Default Actions](#attributes-and-default-actions).

If the event is not `gotpointercapture` or `lostpointercapture`, run [Process Pending Pointer Capture](#process-pending-pointer-capture) steps for this `PointerEvent`.

The target object at which the event is fired is determined as follows:

-   If the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> has been set for the pointer, set the target to <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> object.
-   Otherwise, set the target to the object returned by normal hit test mechanisms (out of scope for this specification).

If this is a `pointerdown` event, the associated device is a direct manipulation device and the target is an `Element`, then [set pointer capture](#setting-pointer-capture) for this `pointerId` to the target element as described in <a href="#dfn-implicit-pointer-capture" class="internalDFN">implicit pointer capture</a>.

Fire the event to the determined target.

Note

Using the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> as the target instead of the normal hit-test result may fire some boundary events. This is the same as the pointer leaving its previous target and entering this new capturing target - and if they are different targets, boundary events should be dispatched first. When the capture is released, the same scenario may happen, as the pointer is leaving the capturing target and entering the hit-test target.

##### <span class="secno">5.1.3.1 </span>Attributes and Default Actions<a href="#attributes-and-default-actions" class="self-link"></a>

The `bubbles` and `cancelable` properties and the default actions for the event types defined in this specification appear in the following table. Details of each of these event types are provided in [Pointer Event types](#pointer-event-types).

<table><thead><tr class="header"><th>Event Type</th><th>Bubbles</th><th>Cancelable</th><th>Default Action</th></tr></thead><tbody><tr class="odd"><td><code>pointerover</code></td><td>Yes</td><td>Yes</td><td>None</td></tr><tr class="even"><td><code>pointerenter</code></td><td>No</td><td>No</td><td>None</td></tr><tr class="odd"><td><code>pointerdown</code></td><td>Yes</td><td>Yes</td><td>Varies: when the pointer is primary, all default actions of the <code>mousedown</code> event<br />
Canceling this event also sets the <code>PREVENT MOUSE EVENT</code> flag for this <code>pointerType</code>, which prevents subsequent firing of certain <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a>.</td></tr><tr class="even"><td><code>pointermove</code></td><td>Yes</td><td>Yes</td><td>Varies: when the pointer is primary, all default actions of <code>mousemove</code></td></tr><tr class="odd"><td><code>pointerup</code></td><td>Yes</td><td>Yes</td><td>Varies: when the pointer is primary, all default actions of <code>mouseup</code></td></tr><tr class="even"><td><code>pointercancel</code></td><td>Yes</td><td>No</td><td>None</td></tr><tr class="odd"><td><code>pointerout</code></td><td>Yes</td><td>Yes</td><td>None</td></tr><tr class="even"><td><code>pointerleave</code></td><td>No</td><td>No</td><td>None</td></tr><tr class="odd"><td><code>gotpointercapture</code></td><td>Yes</td><td>No</td><td>None</td></tr><tr class="even"><td><code>lostpointercapture</code></td><td>Yes</td><td>No</td><td>None</td></tr></tbody></table>

For all pointer events in the table above except `pointerenter` and `pointerleave` the `composed` (\[<a href="#bib-dom4" class="bibref">DOM4</a>\]) attribute *SHOULD* be `true`. For all pointer events in the table above the [`detail`](https://www.w3.org/TR/uievents/#dom-uievent-detail) \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] attribute *SHOULD* be 0.

Note

Many user agents expose non-standard attributes `fromElement` and `toElement` in MouseEvents to support legacy content. In those user agents, the values of those (inherited) attributes in PointerEvents must be `null` to encourage the use of the standardized alternates (i.e. `target` and `relatedTarget`).

Similar to the [MouseEvents](https://www.w3.org/TR/uievents/#interface-mouseevent) \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] the `relatedTarget` should be initialized to the element whose bounds the pointer just left (in the case of a `pointerover` or `pointerenter` event) or the element whose bounds the pointer is entering (in the case of a `pointerout` or `pointerleave`). For other pointer events, this value will default to null. Note that when an element receives the pointer capture all the following events for that pointer are considered to be inside the boundary of the capturing element.

For `gotpointercapture` and `lostpointercapture` all the attributes except the ones defined in the table above should be the same as the Pointer Event that caused the user agent to run [Process Pending Pointer Capture](#process-pending-pointer-capture) and fire the `gotpointercapture` and `lostpointercapture` events.

##### <span class="secno">5.1.3.2 </span>Process Pending Pointer Capture<a href="#process-pending-pointer-capture" class="self-link"></a>

The user agent *MUST* run the following steps when [implicitly releasing pointer capture](#implicit-release-of-pointer-capture) as well as when firing Pointer Events that are not `gotpointercapture` or `lostpointercapture`.

1.  If the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> for this pointer is set and is not equal to the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a>, then fire a pointer event named `lostpointercapture` at the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> node.
2.  If the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a> for this pointer is set and is not equal to the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a>, then fire a pointer event named `gotpointercapture` at the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a>.
3.  Set the pointer capture target override to the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a>, if set. Otherwise, clear the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a>.

### <span class="secno">5.2 </span>Pointer Event types<a href="#pointer-event-types" class="self-link"></a>

Below are the event types defined in this specification.

In the case of the <a href="#dfn-primary-pointer" class="internalDFN">primary pointer</a>, these events (with the exception of `gotpointercapture` and `lostpointercapture`) may also fire <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a>.

#### <span class="secno">5.2.1 </span>The `pointerover` event<a href="#the-pointerover-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerover` when a pointing device is moved into the hit test boundaries of an element. Note that `setPointerCapture` or `releasePointerCapture` might have changed the hit test target and while a pointer is captured it is considered to be always inside the boundaries of the capturing element for the purpose of firing boundary events. A user agent *MUST* also fire this event prior to firing a `pointerdown` event for [devices that do not support hover](#mapping-for-devices-that-do-not-support-hover) (see `pointerdown`).

#### <span class="secno">5.2.2 </span>The `pointerenter` event<a href="#the-pointerenter-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerenter` when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a `pointerdown` event from a device that [does not support hover](#mapping-for-devices-that-do-not-support-hover) (see `pointerdown`). Note that `setPointerCapture` or `releasePointerCapture` might have changed the hit test target and while a pointer is captured it is considered to be always inside the boundaries of the capturing element for the purpose of firing boundary events. This event type is similar to `pointerover`, but differs in that it does not bubble.

Note

There are similarities between this event type, the `mouseenter` event described in \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\], and the CSS `:hover` pseudo-class described in \[<a href="#bib-css21" class="bibref">CSS21</a>\]. See also the `pointerleave` event.

#### <span class="secno">5.2.3 </span>The `pointerdown` event<a href="#the-pointerdown-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerdown` when a pointer enters the <a href="#dfn-active-buttons-state" class="internalDFN">active buttons state</a>. For mouse, this is when the device transitions from no buttons depressed to at least one button depressed. For touch, this is when physical contact is made with the <a href="#dfn-digitizer" class="internalDFN">digitizer</a>. For pen, this is when the pen either makes physical contact with the digitizer without any button depressed, or transitions from no buttons depressed to at least one button depressed while hovering.

Note

For mouse (or other multi-button pointer devices), this means `pointerdown` and `pointerup` are not fired for all of the same circumstances as `mousedown` and `mouseup`. See [chorded buttons](#chorded-button-interactions) for more information.

For input [devices that do not support hover](#mapping-for-devices-that-do-not-support-hover), a user agent *MUST* also [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerover` followed by a pointer event named `pointerenter` prior to dispatching the `pointerdown` event.

Note

Authors can prevent the firing of certain <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a> by canceling the `pointerdown` event (if the `isPrimary` property is `true`). This sets the `PREVENT MOUSE EVENT` flag on the pointer. Note, however, that this does not prevent the `mouseover`, `mouseenter`, `mouseout`, or `mouseleave` events from firing.

#### <span class="secno">5.2.4 </span>The `pointermove` event<a href="#the-pointermove-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointermove` when a pointer changes coordinates. Additionally, when a pointer changes button state, pressure, tangential pressure, tilt, twist, or contact geometry (e.g. `width` and `height`) and the circumstances produce no other pointer events defined in this specification then a user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointermove`.

#### <span class="secno">5.2.5 </span>The `pointerup` event<a href="#the-pointerup-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerup` when a pointer leaves the <a href="#dfn-active-buttons-state" class="internalDFN">active buttons state</a>. For mouse, this is when the device transitions from at least one button depressed to no buttons depressed. For touch, this is when physical contact is removed from the <a href="#dfn-digitizer" class="internalDFN">digitizer</a>. For pen, this is when the pen is removed from the physical contact with the digitizer while no button is depressed, or transitions from at least one button depressed to no buttons depressed while hovering.

For input [devices that do not support hover](#mapping-for-devices-that-do-not-support-hover), a user agent *MUST* also [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerout` followed by a pointer event named `pointerleave` after dispatching the `pointerup` event.

Note

For mouse (or other multi-button pointer devices), this means `pointerdown` and `pointerup` are not fired for all of the same circumstances as `mousedown` and `mouseup`. See [chorded buttons](#chorded-button-interactions) for more information.

#### <span class="secno">5.2.6 </span>The `pointercancel` event<a href="#the-pointercancel-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointercancel` in the following circumstances:

-   The user agent has determined that a pointer is unlikely to continue to produce events (for example, because of a hardware event).
-   After having fired the `pointerdown` event, if the pointer is subsequently used to manipulate the page viewport (e.g. panning or zooming).
    Note

    User agents can trigger panning or zooming through multiple pointer types (such as touch and pen), and therefore the start of a pan or zoom action may result in the cancellation of various pointers, including pointers with different pointer types.

-   Immediately before [drag operation starts](https://www.w3.org/TR/html51/editing.html#initiated) \[<a href="#bib-html" class="bibref">HTML</a>\], for the pointer that caused the drag operation.
    Note

    If the start of the drag operation is prevented through any means (e.g. through calling `preventDefault` on the `dragstart` event) there will be no `pointercancel` event.

After firing the `pointercancel` event, a user agent *MUST* also fire a pointer event named `pointerout` followed by firing a pointer event named `pointerleave`.

Note

*This section is non-normative.*

Examples of scenarios in which a user agent might determine that a pointer is unlikely to continue to produce events include:

-   A device's screen orientation is changed while a pointer is active.
-   The user inputs a greater number of simultaneous pointers than is supported by the device.
-   The user agent interprets the input as accidental (for example, the hardware supports palm rejection).
-   The user agent interprets the input as a pan or zoom gesture.

Methods for changing the device's screen orientation, recognizing accidental input, or using a pointer to manipulate the viewport (e.g. panning or zooming) are out of scope for this specification.

#### <span class="secno">5.2.7 </span>The `pointerout` event<a href="#the-pointerout-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerout` when any of the following occurs:

-   A pointing device is moved out of the hit test boundaries of an element. Note that `setPointerCapture` or `releasePointerCapture` might have changed the hit test target and while a pointer is captured it is considered to be always inside the boundaries of the capturing element for the purpose of firing boundary events.
-   After firing the `pointerup` event for a device that [does not support hover](#mapping-for-devices-that-do-not-support-hover) (see `pointerup`).
-   After firing the `pointercancel` event (see `pointercancel`).
-   When a pen stylus leaves the hover range detectable by the digitizer.

#### <span class="secno">5.2.8 </span>The `pointerleave` event<a href="#the-pointerleave-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerleave` when a pointing device is moved out of the hit test boundaries of an element and all of its descendants, including as a result of a `pointerup` and `pointercancel` events from a device that [does not support hover](#mapping-for-devices-that-do-not-support-hover) (see `pointerup` and `pointercancel`). Note that `setPointerCapture` or `releasePointerCapture` might have changed the hit test target and while a pointer is captured it is considered to be always inside the boundaries of the capturing element for the purpose of firing boundary events. User agents *MUST* also [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointerleave` when a pen stylus leaves hover range detectable by the digitizer. This event type is similar to `pointerout`, but differs in that it does not bubble and that it *MUST* not be fired until the pointing device has left the boundaries of the element and the boundaries of all of its descendants.

Note

There are similarities between this event type, the `mouseleave` event described in \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\], and the CSS `:hover` pseudo-class described in \[<a href="#bib-css21" class="bibref">CSS21</a>\]. See also the `pointerenter` event.

#### <span class="secno">5.2.9 </span>The `gotpointercapture` event<a href="#the-gotpointercapture-event" class="self-link"></a>

A user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `gotpointercapture` when an element receives pointer capture. This event is fired at the element that is receiving pointer capture. Subsequent events for that pointer will be fired at this element. See the [Setting Pointer Capture](#setting-pointer-capture) and [Process Pending Pointer Capture](#process-pending-pointer-capture) sections.

#### <span class="secno">5.2.10 </span>The `lostpointercapture` event<a href="#the-lostpointercapture-event" class="self-link"></a>

A user agent *MUST* [fire a pointer](#firing-events-using-the-pointerevent-interface) event named `lostpointercapture` after pointer capture is released for a pointer. This event *MUST* be fired prior to any subsequent events for the pointer after capture was released. This event is fired at the element from which pointer capture was removed. Subsequent events for the pointer follow normal hit testing mechanisms (out of scope for this specification) for determining the event target. See the [Releasing Pointer Capture](#releasing-pointer-capture), [Implicit Release of Pointer Capture](#implicit-release-of-pointer-capture), and [Process Pending Pointer Capture](#process-pending-pointer-capture) sections.

<span class="secno">6. </span>Extensions to the `Element` interface<a href="#extensions-to-the-element-interface" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------------

The following section describes extensions to the existing `Element` interface, defined in \[<a href="#bib-html5" class="bibref">HTML5</a>\], to facilitate the setting and releasing of pointer capture.

    partial interface Element {
      void setPointerCapture (long pointerId);
      void releasePointerCapture (long pointerId);
      boolean hasPointerCapture (long pointerId);
    };

`setPointerCapture`  
[Sets](#setting-pointer-capture) <a href="#dfn-pointer-capture" class="internalDFN">pointer capture</a> for the pointer identified by the argument `pointerId` to the element on which this method is invoked. For subsequent events of the pointer, the capturing target will substitute the normal hit testing result as if the pointer is always over the capturing target, and they *MUST* always be targeted at this element until capture is released. The pointer *MUST* be in its <a href="#dfn-active-buttons-state" class="internalDFN">active buttons state</a> for this method to be effective, otherwise it fails silently. Throws a `DOMException` with the name `NotFoundError` when the provided method's argument does not match any of the <a href="#dfn-active-pointer" class="internalDFN">active pointers</a>.

`releasePointerCapture`  
[Releases](#releasing-pointer-capture) <a href="#dfn-pointer-capture" class="internalDFN">pointer capture</a> for the pointer identified by the argument `pointerId` from the element on which this method is invoked. Subsequent events for the pointer follow normal hit testing mechanisms (out of scope for this specification) for determining the event target. Throws a `DOMException` with the name `NotFoundError` when the provided method's argument does not match any of the <a href="#dfn-active-pointer" class="internalDFN">active pointers</a>.

`hasPointerCapture`  
Indicates whether the element on which this method is invoked has <a href="#dfn-pointer-capture" class="internalDFN">pointer capture</a> for the pointer identified by the argument `pointerId`. In particular, returns `true` if the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a> for `pointerId` is set to the element on which this method is invoked, and `false` otherwise.

Note

This method will return true immediately after a call to <a href="#dom-element-setpointercapture" class="internalDFN"><code>setPointerCapture</code></a>, even though that element will not yet have received a <a href="#dfn-gotpointercapture-event" class="internalDFN">gotpointercapture event</a>. As a result it can be useful for detecting <a href="#dfn-implicit-pointer-capture" class="internalDFN">implicit pointer capture</a> from inside of a <a href="#dfn-pointerdown-event" class="internalDFN">pointerdown event</a> listener.

<span class="secno">7. </span>Extensions to the `GlobalEventHandlers` mixin<a href="#extensions-to-the-globaleventhandlers-mixin" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------------------------------

The following section describes extensions to the existing `GlobalEventHandlers` mixin, defined in \[<a href="#bib-html5" class="bibref">HTML5</a>\], to facilitate the event handler registration.

    partial interface mixin GlobalEventHandlers {
        attribute EventHandler ongotpointercapture;
        attribute EventHandler onlostpointercapture;
        attribute EventHandler onpointerdown;
        attribute EventHandler onpointermove;
        attribute EventHandler onpointerup;
        attribute EventHandler onpointercancel;
        attribute EventHandler onpointerover;
        attribute EventHandler onpointerout;
        attribute EventHandler onpointerenter;
        attribute EventHandler onpointerleave;
    };

`ongotpointercapture`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `gotpointercapture` event type.

`onlostpointercapture`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `lostpointercapture` event type.

`onpointerdown`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerdown` event type.

`onpointermove`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointermove` event type.

`onpointerup`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerup` event type.

`onpointercancel`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointercancel` event type.

`onpointerover`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerover` event type.

`onpointerout`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerout` event type.

`onpointerenter`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerenter` event type.

`onpointerleave`  
The event handler IDL attribute (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]) for the `pointerleave` event type.

<span class="secno">8. </span>Extensions to the `Navigator` interface<a href="#extensions-to-the-navigator-interface" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------------------

The `Navigator` interface is defined in \[<a href="#bib-html5" class="bibref">HTML5</a>\]. This specification extends the `Navigator` interface to provide device detection support.

    partial interface Navigator {
        readonly  attribute long maxTouchPoints;
    };

`maxTouchPoints`  
The maximum number of simultaneous touch contacts supported by the device. In the case of devices with multiple digitizers (e.g. multiple touchscreens), the value *MUST* be the maximum of the set of maximum supported contacts by each individual digitizer.

For example, suppose a device has 3 touchscreens, which support 2, 5, and 10 simultaneous touch contacts, respectively. The value of `maxTouchPoints` should be `10`.

Note

While a `maxTouchPoints` value of greater than 0 indicates the user's device is capable of supporting touch input, it does not necessarily mean the user *will* use touch input. Authors should be careful to also consider other input modalities that could be present on the system, such as mouse, pen, screen readers, etc.

Note

`maxTouchPoints` is often used to ensure that the interaction model of the content can be recognized by the current hardware. UI affordances can be provided to users with less capable hardware. On platforms where the precise number of touch points is not known, the minimum number guaranteed to be recognized is provided. Therefore, it is possible for the number of recognized touch points to exceed the value of `maxTouchPoints`.

<span class="secno">9. </span>Declaring candidate regions for default touch behaviors<a href="#declaring-candidate-regions-for-default-touch-behaviors" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For touch input, the default action of any and all pointer events *MUST NOT* be a manipulation of the viewport (e.g. panning or zooming).

Note

Touch manipulations are intentionally not a default action of pointer events. Removing this dependency on the cancellation of events facilitates performance optimizations by the user agent.

Note

While the issue of pointers used to manipulate the viewport is generally limited to touch input (where a user's finger can both interact with content and pan/zoom the page), certain user agents may also allow the same types of (direct or indirect) manipulation for other pointer types. For instance, on mobile/tablet devices, users may also be able to pan using a stylus. This section applies to these scenarios as well (despite the specification's use of "touch").

### <span class="secno">9.1 </span>The `touch-action` CSS property<a href="#the-touch-action-css-property" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td><code>touch-action</code></td></tr><tr class="even"><td>Value:</td><td><code>auto</code> | <code>none</code> | [ <code>pan-x</code> || <code>pan-y</code> ] | <code>manipulation</code></td></tr><tr class="odd"><td>Initial:</td><td><code>auto</code></td></tr><tr class="even"><td>Applies to:</td><td>all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups.</td></tr><tr class="odd"><td>Inherited:</td><td>no</td></tr><tr class="even"><td>Percentages:</td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td>Computed value:</td><td>Same as specified value.</td></tr></tbody></table>

The `touch-action` CSS property determines whether touch input *MAY* trigger default behavior supplied by user agent. This includes, but is not limited to, behaviors such as panning or zooming. See the section on [`touch-action` values](#details-of-touch-action-values).

Note

As noted previously, in the case of user agents that allow default behaviors (such as panning or zooming) for other pointer types, these user agents *MUST* apply the same consideration for those pointer types. For instance, if a user agent allows panning/zooming with a stylus, the user agent must take into account the relevant `touch-action` value when determining which default behaviors it should handle.

During the execution of a user agent touch behavior, the user agent *MUST NOT* fire subsequent pointer events for the pointer. The user agent *MUST* [fire a pointer event](#firing-events-using-the-pointerevent-interface) named `pointercancel` (and subsequently a `pointerout` event and one or more `pointerleave` events) whenever all of the following are true, in order to end the stream of events for the pointer:

-   The user agent has determined (via methods out of scope for this specification) that touch input is to be consumed for a touch behavior,
-   a `pointerdown` event has been sent for the pointer, and
-   a `pointerup` or `pointercancel` event (following the above mentioned `pointerdown`) has not yet been sent for the pointer.

Note

User agents may implement complex gestures for default behaviors that involve a series of separate discrete gestures, but which are all treated as part of a single continuous gesture. For example, consider a "fling to scroll" gesture on a touchscreen: a user starts panning the document with a rapid finger movement, lifts the finger from the touchscreen, and the document continues scrolling with simulated inertia. While the document is still moving, the user may place their finger on the touchscreen and execute another "fling" to provide further momentum for the scrolling, or counteract the current scrolling to slow it down, stop scrolling altogether, or reverse the direction of the scrolling. As this specification does not normatively define how gestures and default behaviors are implemented, it is left up to the user agent to decide whether or not the second touch (before it is interpreted as a second "fling" or counteraction of the current scrolling) should fire pointer events or not.

### <span class="secno">9.2 </span>Determining supported touch behavior<a href="#determining-supported-touch-behavior" class="self-link"></a>

When a user touches an element, the effect of that touch is determined by the value of the `touch-action` property, and the default touch behaviors of the element and its ancestors, as follows:

-   A touch behavior conforms to an element's `touch-action` if the behavior is allowed in the coordinate space of the element. Note that if CSS transforms have been applied, the element's coordinate space may differ from the screen coordinate in a way to affect the conformity here; for example, the X axis of an element rotated by 90 degrees with respect to the screen will be parallel to the Y-axis of the screen coodinate.
-   A touch behavior is supported if it <a href="#dfn-conforming-touch-behavior" class="internalDFN">conforms</a> to the `touch-action` property of each element between the hit tested element and its nearest ancestor with the default touch behavior (including both the hit tested element and the element with the default touch behavior).
-   Once a touch action has been started, and the user agent has already determined whether or not the action should be handled as a user agent touch behavior, any changes to the relevant `touch-action` value will be ignored for the duration of the touch action. For instance, programmatically changing the `touch-action` value for an element from `auto` to `none` as part of a `pointerdown` handler script will not result in the user agent aborting or suppressing any default touch behavior for that touch for as long as that pointer is active.

Note

Some user agents support touch actions triggered by interactions of multiple concurrent pointers (e.g. multi-touch). Methods for processing or associating the `touch-action` values of multiple concurrent pointers is out of scope for this specification.

### <span class="secno">9.3 </span>Details of `touch-action` values<a href="#details-of-touch-action-values" class="self-link"></a>

auto  
The user agent *MAY* determine any permitted touch behaviors, such as panning and zooming of the viewport, for touches that begin on the element.

none  
Touches that begin on the element *MUST NOT* trigger default touch behaviors.

pan-x  
pan-y  
The user agent *MAY* consider touches that begin on the element only for the purposes of scrolling that starts in any of the directions specified by all of the listed values. Once scrolling is started, the direction may be reversed by the user even if scrolls that start in the reversed direction are disallowed. In contrast, when scrolling is restricted to starting along a single axis (eg. `pan-y`), the axis cannot be changed during the scroll.

manipulation  
The user agent *MAY* consider touches that begin on the element only for the purposes of scrolling and continuous zooming. Any additional behaviors supported by `auto` are out of scope for this specification.

Note

Additional `touch-action` values common in implementations [are defined](https://compat.spec.whatwg.org/#touch-action) in \[<a href="#bib-compat" class="bibref">COMPAT</a>\].

Note

The terms "pan" and "scroll" are considered synonymous. Defining an interaction or gesture for triggering panning or scrolling, or for triggering behavior for the `auto` or `none` values are out of scope for this specification.

Note

The `touch-action` property only applies to elements that support both the CSS `width` and `height` properties (see \[<a href="#bib-css21" class="bibref">CSS21</a>\]). This restriction is designed to facilitate user agent optimizations for low-latency touch actions. For elements not supported by default, such as `<span>` which is a non-replaced inline element (see \[<a href="#bib-html5" class="bibref">HTML5</a>\]), authors can set the `display` CSS property to a value, such as `block`, that supports `width` and `height`. Future specifications could extend this API to all elements.

Note

Disabling some default touch behaviors may allow user agents to respond to other behaviors more quickly. For example, with `auto` user agents typically add 300ms of delay before `click` to allow for double-tap gestures to be handled. In these cases, explicitly setting `touch-action: none` or `touch-action: manipulation` will remove this delay. Note that the methods for determining a tap or double-tap gesture are out of scope for this specification.

<a href="#example_6" class="self-link">Example 6</a><span class="example-title">: Disallowing all touch behaviors</span>

    <div style="touch-action: none;">
        This element receives pointer events for all touches.
    </div>

<a href="#example_7" class="self-link">Example 7</a><span class="example-title">: Allowing horizontal panning only</span>

    <div style="touch-action: pan-x;">
        This element receives pointer events when not panning in the horizontal direction.
    </div>

<a href="#example_8" class="self-link">Example 8</a><span class="example-title">: Child regions that disallow touch behaviors</span>

    <div style="overflow: auto;">
        <div style="touch-action: none;">
            This element receives pointer events for all touches.
        </div>
        <div>
            Touches on this element MAY be consumed for manipulating the parent.
        </div>
    </div>

<a href="#example_9" class="self-link">Example 9</a><span class="example-title">: Intermediate parent that disallows touch behaviors</span>

    <div style="overflow: auto;">
        <div style="touch-action: pan-y;">
            <div style="touch-action: pan-x;">
                This element receives pointer events for all touches because
                it allows only horizontal panning yet an intermediate ancestor
                (between it and the pannable element) only allows vertical panning.
                Therefore, no touch behaviors are allowed.
            </div>
        </div>
    </div>

<span class="secno">10. </span>Pointer Capture<a href="#pointer-capture" class="self-link"></a>
-----------------------------------------------------------------------------------------------

### <span class="secno">10.1 </span>Introduction<a href="#introduction" class="self-link"></a>

*This section is non-normative.*

Pointer capture allows the events for a particular pointer (including any <a href="#dfn-compatibility-mouse-events" class="internalDFN">compatibility mouse events</a>) to be retargeted to a particular element other than the normal hit test result of the pointer's location. This is useful in scenarios like a custom slider control (e.g. similar to the \[<a href="#bib-html5" class="bibref">HTML5</a>\] `<input type="range">` control). Pointer capture can be set on the slider thumb element, allowing the user to slide the control back and forth even if the pointer slides off of the thumb.

<figure><img src="slider.png" alt="Figure 4 Example of a custom slider control that chooses a value by sliding the thumb element back and forth. After pointerdown on the thumb, pointer capture can be used to allow the user to slide the thumb even if the pointer drifts off of it." width="404" height="37" /><figcaption>Figure <span class="figno">4</span> <span class="fig-title">Example of a custom slider control that chooses a value by sliding the thumb element back and forth. After <code>pointerdown</code> on the thumb, pointer capture can be used to allow the user to slide the thumb even if the pointer drifts off of it.</span></figcaption></figure>

### <span class="secno">10.2 </span>Setting Pointer Capture<a href="#setting-pointer-capture" class="self-link"></a>

Pointer capture is set on an element by calling the `element.setPointerCapture(pointerId)` method. When this method is invoked, a user agent *MUST* run the following steps:

1.  If the `pointerId` provided as the method's argument does not match any of the <a href="#dfn-active-pointer" class="internalDFN">active pointers</a>, then throw a `DOMException` with the name `NotFoundError`.
2.  If the `Element` on which this method is invoked is not [`connected`](https://dom.spec.whatwg.org/#connected) (\[<a href="#bib-dom4" class="bibref">DOM4</a>\]), throw an exception with the name `InvalidStateError`.
3.  If this method is invoked while the document has a locked element (\[<a href="#bib-pointerlock" class="bibref">PointerLock</a>\]), throw an exception with the name `InvalidStateError`.
4.  If the pointer is not in the <a href="#dfn-active-buttons-state" class="internalDFN">active buttons state</a>, then terminate these steps.
5.  For the specified `pointerId`, set the pending pointer capture target override to the `Element` on which this method was invoked.

### <span class="secno">10.3 </span>Releasing Pointer Capture<a href="#releasing-pointer-capture" class="self-link"></a>

Pointer capture is released on an element explicitly by calling the `element.releasePointerCapture(pointerId)` method. When this method is called, a user agent *MUST* run the following steps:

1.  If the `pointerId` provided as the method's argument does not match any of the <a href="#dfn-active-pointer" class="internalDFN">active pointers</a> and these steps are not being invoked as a result of the [implicit release of pointer capture](#implicit-release-of-pointer-capture), then throw a `DOMException` with the name `NotFoundError`.
2.  If [hasPointerCapture](#dom-element-haspointercapture) is false for the `Element` with the specified `pointerId`, then terminate these steps.
3.  For the specified `pointerId`, clear the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a>, if set.

### <span class="secno">10.4 </span>Implicit Pointer Capture<a href="#implicit-pointer-capture" class="self-link"></a>

Some input devices (such as touchscreens) implement a "direct manipulation" metaphor where a pointer is intended to act primarily on the UI element it became active upon (providing a physical illusion of direct contact, instead of indirect contact via a cursor that conceptually floats above the UI). Such devices are identified by the [InputDeviceCapabilities.pointerMovementScrolls property](https://wicg.github.io/InputDeviceCapabilities/#dfn-pointermovementscrolls) and should have "implicit pointer capture" behavior as follows.

Direct manipulation devices should behave exactly as if <a href="#dom-element-setpointercapture" class="internalDFN"><code>setPointerCapture</code></a> was called on the target element just before the invocation of any `pointerdown` listeners. The <a href="#dom-element-haspointercapture" class="internalDFN"><code>hasPointerCapture</code></a> API may be used (eg. within any `pointerdown` listener) to determine whether this has occurred. If <a href="#dom-element-releasepointercapture" class="internalDFN"><code>releasePointerCapture</code></a> is not called for the pointer before the next pointer event is fired, then a <a href="#dfn-gotpointercapture-event" class="internalDFN">gotpointercapture event</a> will be dispatched to the target (as normal) indicating that capture is active.

Note

This is a breaking change from \[<a href="#bib-pointerevents1" class="bibref">PointerEvents1</a>\], but does not impact the vast majority of existing content. In addition to matching typical platform UX conventions, this design for implicit capture enables user agents to make a performance optimization which prevents the need to invoke hit-testing on touch movement events without explicit developer opt-in (consistent with the performance properties of existing dominant native and web APIs for touch input).

Note

In addition, user agents may implement implicit pointer capture behavior for all input devices on specific UI widgets such as input range controls (allowing some finger movement to stray outside of the form control itself during the interaction).

### <span class="secno">10.5 </span>Implicit Release of Pointer Capture<a href="#implicit-release-of-pointer-capture" class="self-link"></a>

Immediately after firing the `pointerup` or `pointercancel` events, a user agent *MUST* clear the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a> for the `pointerId` of the `pointerup` or `pointercancel` event that was just dispatched, and then run [Process Pending Pointer Capture](#process-pending-pointer-capture) steps to fire `lostpointercapture` if necessary. After running [Process Pending Pointer Capture](#process-pending-pointer-capture) steps, if the pointer supports hover, user agent *MUST* also send corresponding boundary events necessary to reflect the current position of the pointer with no capture.

If the user agent supports firing the `click` event (see [compatibility mouse events](#dfn-compatibility-mouse-events "compatibility mouse events")), and if in an implicit release scenario both `click` and `lostpointercapture` events are fired, `click` *SHOULD* be fired before `lostpointercapture`.

When the <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> is no longer [`connected`](https://dom.spec.whatwg.org/#connected) (\[<a href="#bib-dom4" class="bibref">DOM4</a>\]), the <a href="#dfn-pending-pointer-capture-target-override" class="internalDFN">pending pointer capture target override</a> and <a href="#dfn-pointer-capture-target-override" class="internalDFN">pointer capture target override</a> nodes *SHOULD* be cleared and also a PointerEvent named `lostpointercapture` corresponding to the captured pointer *SHOULD* be fired at the document.

When a pointer lock (\[<a href="#bib-pointerlock" class="bibref">PointerLock</a>\]) is successfully applied on an element, a user agent *MUST* run the steps as if the releasePointerCapture() method has been called if any element is set to be captured or pending to be captured.

<span class="secno">11. </span>Compatibility Mapping with Mouse Events<a href="#compatibility-mapping-with-mouse-events" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------------------

The vast majority of web content existing today codes only to Mouse Events. The following describes an algorithm for how a user agent *MAY* map generic pointer input to mouse events for compatibility with this content.

The compatibility mapping with mouse events are an *OPTIONAL* feature of this specification. User agents are encouraged to support the feature for best compatibility with existing legacy content. User agents that do not support compatibility mouse events are still encouraged to support the `click` and `contextmenu` events (see the note below).

Note

The `click` event, defined in \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\], and the `contextmenu` event, defined in \[<a href="#bib-html5" class="bibref">HTML5</a>\], are not considered [compatibility mouse events](#dfn-compatibility-mouse-events "compatibility mouse events") as they are typically tied to user interface activation and are fired from other input devices, like keyboards.

In user agents that support firing `click` and/or `contextmenu`, calling `preventDefault` during a pointer event typically does not have an effect on whether `click` and/or `contextmenu` are fired or not. Because they are not compatibility mouse events, user agents typically fire `click` and `contextmenu` for all pointing devices, including pointers that are not primary pointers.

The relative ordering of these high-level events (`click`, `contextmenu`, `focus`, `blur`, etc.) with pointer events is undefined and varies between user agents. For example, in some user agents `contextmenu` will often follow a `pointerup`, in others it'll often precede a `pointerup` or `pointercancel`, and in some situations it may be fired without any corresponding pointer event (such as a keyboard shortcut).

Unless otherwise noted, the target of any mapped mouse event *SHOULD* be the same target as the respective pointer event unless the target is no longer participating in its `ownerDocument`'s tree. In this case, the mouse event should be fired at the original target's nearest ancestor node (at the time it was removed from the tree) that still participates in its `ownerDocument`'s tree, meaning that a new event path (based on the new target node) is built for the mouse event.

Authors can prevent the production of certain compatibility mouse events by canceling the `pointerdown` event.

Note

Mouse events can only be prevented when the pointer is down. Hovering pointers (e.g. a mouse with no buttons pressed) cannot have their mouse events prevented. And, the `mouseover`, `mouseout`, `mouseenter`, and `mouseleave` events are never prevented (even if the pointer is down).

### <span class="secno">11.1 </span>Tracking the effective position of the legacy mouse pointer<a href="#tracking-the-effective-position-of-the-legacy-mouse-pointer" class="self-link"></a>

While only the <a href="#dfn-primary-pointer" class="internalDFN">primary pointers</a> can produce compatibility mouse events, [multiple primary pointers](#multiple-primary-pointers) can be active simultaneously, each producing its own compatibility mouse events. Since all these compatibility events would appear to MouseEvent code to be coming from a single mouse device, user agents are encouraged to guarantee that the compatibility mouse events are consistent from a single device perspective. For mouse transition events (i.e., `mouseover`, `mouseout`, `mouseenter` and `mouseleave`), this means the entry/exit state for every event target is valid as implied by \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\]. Users agents *SHOULD* guarantee this by maintaining the effective position of the legacy mouse pointer in the document as follows.

Right before firing a `pointerdown`, `pointerup` or `pointermove` event, or a `pointerleave` event at the `window`, the user agent *SHOULD* run the following steps:

1.  Let `T` be the target of the `pointerdown`, `pointerup` or `pointermove` event being dispatched. For the `pointerleave` event, unset `T`.
2.  If `T` and current <a href="#dfn-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">effective legacy mouse pointer position</a> are both unset or they are equal, terminate these steps.
3.  Dispatch `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events as per \[<a href="#bib-uievents" class="bibref">UIEVENTS</a>\] for a mouse moving from the current <a href="#dfn-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">effective legacy mouse pointer position</a> to `T`. Consider an unset value of either current <a href="#dfn-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">effective legacy mouse pointer position</a> or `T` as an out-of-window mouse position.
4.  Set <a href="#dfn-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">effective legacy mouse pointer position</a> to `T`.

### <span class="secno">11.2 </span>Mapping for devices that support hover<a href="#mapping-for-devices-that-support-hover" class="self-link"></a>

Whenever a user agent is to dispatch a pointer event for a device that supports hover, it *SHOULD* run the following steps:

1.  If the `isPrimary` property for the pointer event to be dispatched is `false` then dispatch the pointer event and terminate these steps.
2.  If the pointer event to be dispatched is a `pointerdown`, `pointerup` or `pointermove` event, or a `pointerleave` event at the `window`, dispatch compatibility mouse transition events as described in <a href="#dfn-tracking-the-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">Tracking the effective position of the legacy mouse pointer</a>.
3.  Dispatch the pointer event.
4.  If the pointer event dispatched was `pointerdown` and the event was <a href="#dfn-canceled-event" class="internalDFN">canceled</a>, then set the `PREVENT MOUSE EVENT` flag for this `pointerType`.
5.  If the `PREVENT MOUSE EVENT` flag is **not** set for this `pointerType` and the pointer event dispatched was:
    -   `pointerdown`, then fire a `mousedown` event.
    -   `pointermove`, then fire a `mousemove` event.
    -   `pointerup`, then fire a `mouseup` event.
    -   `pointercancel`, then fire a `mouseup` event at the `window`.
6.  If the pointer event dispatched was `pointerup` or `pointercancel`, clear the `PREVENT MOUSE EVENT` flag for this `pointerType`.

### <span class="secno">11.3 </span>Mapping for devices that do not support hover<a href="#mapping-for-devices-that-do-not-support-hover" class="self-link"></a>

Some devices, such as most touchscreens, do not support hovering a coordinate (or set of coordinates) while not in the active state. Much existing content coded to mouse events assumes that a mouse is producing the events and thus certain qualities are generally true:

-   The input can hover independently of activation (e.g. moving a mouse cursor without any buttons pressed).
-   The input will likely produce the `mousemove` event on an element before clicking it.

Note

Hover is sometimes used to toggle the visibility of UI elements in content designed for mouse (e.g. "hover menus"). This content is often incompatible with [devices that do not support hover](#mapping-for-devices-that-do-not-support-hover). This specification does not define a mapping or behavior for compatibility with this scenario. It will be considered in a future version of the specification.

This requires that user agents provide a different mapping for these types of input devices. Whenever a user agent is to dispatch a pointer event for a device that [does not support hover](#mapping-for-devices-that-do-not-support-hover), it *SHOULD* run the following steps:

1.  If the `isPrimary` property for the pointer event to be dispatched is `false` then dispatch the pointer event and terminate these steps.
2.  If the pointer event to be dispatched is `pointerover` and the `pointerdown` event has not yet been dispatched for this pointer, then fire a `mousemove` event (for compatibility with legacy mouse-specific code).
3.  If the pointer event to be is dispatched is a `pointerdown`, `pointerup` or `pointermove` event, or a `pointerleave` event at the `window`, dispatch compatibility mouse transition events as described in <a href="#dfn-tracking-the-effective-position-of-the-legacy-mouse-pointer" class="internalDFN">Tracking the effective position of the legacy mouse pointer</a>.
4.  Dispatch the pointer event.
5.  If the pointer event dispatched was `pointerdown` and the event was <a href="#dfn-canceled-event" class="internalDFN">canceled</a>, then set the `PREVENT MOUSE EVENT` flag for this `pointerType`.
6.  If the `PREVENT MOUSE EVENT` flag is **not** set for this `pointerType` and the pointer event dispatched was:
    -   `pointerdown`, then fire a `mousedown` event.
    -   `pointermove`, then fire a `mousemove` event.
    -   `pointerup`, then fire a `mouseup` event.
    -   `pointercancel`, then fire a `mouseup` event at the `window`.
7.  If the pointer event dispatched was `pointerup` or `pointercancel`, clear the `PREVENT MOUSE EVENT` flag for this `pointerType`.

Note

If the user agent supports both Touch Events (as defined in \[<a href="#bib-touch-events" class="bibref">TOUCH-EVENTS</a>\]) and Pointer Events, the user agent *SHOULD NOT* generate compatibility mouse events as described in this section as it is likely to introduce compatibility problems for sites that expect mouse events to be generated in accordance with the [model](https://www.w3.org/TR/touch-events/#mouse-events) outlined in \[<a href="#bib-touch-events" class="bibref">TOUCH-EVENTS</a>\].

Note

The activation of an element (`click`) with a primary pointer that [does not support hover](#mapping-for-devices-that-do-not-support-hover) (e.g. single finger on a touchscreen) would typically produce the following event sequence:

1.  `mousemove`
2.  `pointerover`
3.  `pointerenter`
4.  `mouseover`
5.  `mouseenter`
6.  `pointerdown`
7.  `mousedown`
8.  Zero or more `pointermove` and `mousemove` events, depending on movement of the pointer
9.  `pointerup`
10. `mouseup`
11. `click`
12. `pointerout`
13. `pointerleave`
14. `mouseout`
15. `mouseleave`

If, however, the `pointerdown` event is <a href="#dfn-canceled-event" class="internalDFN">canceled</a> during this interaction then the sequence of events would be:

1.  `mousemove`
2.  `pointerover`
3.  `pointerenter`
4.  `mouseover`
5.  `mouseenter`
6.  `pointerdown`
7.  Zero or more `pointermove` events, depending on movement of the pointer
8.  `pointerup`
9.  `click`
10. `pointerout`
11. `pointerleave`
12. `mouseout`
13. `mouseleave`

<span class="secno">12. </span>Security and privacy considerations<a href="#security-and-privacy-considerations" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------------------

This appendix discusses security and privacy considerations for Pointer Events implementations. The discussion is limited to security and privacy issues that arise directly from implementation of the event model, APIs and events defined in this specification.

Many of the event types defined in this specification are dispatched in response to user actions. This allows malicious event listeners to gain access to information users would typically consider confidential, e.g., the exact path/movement of a user's mouse/stylus/finger while interacting with a page.

Pointer events contain additional information (where supported by the user's device), such as the angle or tilt at which a pen input is held, the geometry of the contact surface, and the pressure exerted on the stylus or touch screen. Information about angle, tilt, geometry and pressure are directly related to sensors on the user's device, meaning that this specification allows an origin access to these sensors.

This sensor data, as well as the ability to determine the type of input mechanism (mouse, touch, pen) used, may be used to infer characteristics of a user, or of the user's device and environment. These inferred characteristics and any device/environment information may themselves be sensitive - for instance, they may allow a malicious site to further infer if a user is using assistive technologies. This information can also be potentially used for the purposes of building a user profile and/or attempting to "fingerprint" and track a particular user.

As mitigation, user agents may consider including the ability for users to disable access to particular sensor data (such as angle, tilt, pressure), and/or to make it available only after an explicit opt-in from the user.

Beyond these considerations, the working group believes that this specification:

-   Does not expose personally-identifiable information.
-   Does not deal with high-value data.
-   Does not introduce new state for an origin that persists across browsing sessions.
-   Does not expose persistent, cross-origin state to the web.
-   Does not expose any other data to an origin that it doesn’t currently have access to.
-   Does not enable new script execution/loading mechanisms.
-   Does not allow an origin access to a user’s location.
-   Does not require any special handling when the user agent is in "incognito" mode.
-   Does not allow an origin access to other devices.
-   Does not allow an origin control over a user agent’s native UI.
-   Does not expose temporary identifiers to the web.
-   Does not distinguish between behavior in first-party and third-party contexts.
-   Does not persist data to a user’s local device.
-   Does not allow downgrading default security characteristics.

<span class="secno">A. </span>Acknowledgments<a href="#acknowledgments" class="self-link"></a>
----------------------------------------------------------------------------------------------

Many thanks to lots of people for their proposals and recommendations, some of which are incorporated into this document. The group's Chair acknowledges contributions from the following past and present group members and participants: Mustaq Ahmed, Arthur Barstow, Matt Brubeck, Rick Byers, Cathy Chan, Ted Dinklocker, Dave Fleck, Ella Ge, Scott González, Philippe Le Hégaret, Hayato Ito, Patrick Kettner, Patrick H. Lauke, Scott Low, Sangwhan Moon, Olli Pettay, Jacob Rossi, Doug Schepers, Ming-Chou Shih, Brenton Simpson, Dave Tapuska, Asir Vedamuthu, Lan Wei, Navid Zolghadr

Special thanks to those that helped pioneer the first edition of this model, including especially: Charu Chandiram, Peter Freiling, Nathan Furtwangler, Thomas Olsen, Matt Rakow, Ramu Ramanathan, Justin Rogers, Jacob Rossi, Reed Townsend and Steve Wright.

<span class="secno">B. </span>Revision History<a href="#revision-history" class="self-link"></a>
------------------------------------------------------------------------------------------------

*This section is non-normative.*

The following is an informative summary of substantial and major editorial changes between publications of this specification, relative to the first \[<a href="#bib-pointerevents1" class="bibref">PointerEvents1</a>\] specification. See the [complete revision history of the Editor's Drafts of this specification](https://github.com/w3c/pointerevents/commits).

-   [Remove normative references from informative sections](https://github.com/w3c/pointerevents/commit/d2779fe71e3b1c26d6b4657ad0330bed378b8b69) (and mark `[COMPAT]` as purely informative)
-   [Fix Pointer Capture section erroneously marked as informative](https://github.com/w3c/pointerevents/pull/270)
-   [Add boundary events in implicit capture scenarios](https://github.com/w3c/pointerevents/pull/251)
-   [Replace prose about `ownerDocument` tree with DOM4 concept of `connected`](https://github.com/w3c/pointerevents/pull/246)
-   [Add security and privacy considerations section](https://github.com/w3c/pointerevents/pull/235)
-   [Add note about legacy attributes `fromElement` and `toElement` (inherited from MouseEvents) must be `null`](https://github.com/w3c/pointerevents/pull/234)
-   [Add `[Exposed=Window]` to Constructor](https://github.com/w3c/pointerevents/pull/218)
-   [Don't send boundary events during capture](https://github.com/w3c/pointerevents/pull/138)
-   [Implicit capture for direct manipulation pointing devices](https://github.com/w3c/pointerevents/pull/129)
-   [Add pointer capture processing follow delayed model except implicit release and set the pointer capture events attributes](https://github.com/w3c/pointerevents/pull/122)
-   [Add `hasPointerCapture`](https://github.com/w3c/pointerevents/pull/127)
-   [Removed "pen contact" condition on button/buttons](https://github.com/w3c/pointerevents/pull/96)
-   [Make all pointer events composed events](https://github.com/w3c/pointerevents/pull/92)
-   [Add digitizer/pen tangential (barrel) pressure](https://github.com/w3c/pointerevents/pull/87)
-   [Add digitizer/pen twist](https://github.com/w3c/pointerevents/pull/79)
-   [Make width/height default to 1, remove UA "guessing"/faking geometry](https://github.com/w3c/pointerevents/pull/69)
-   [Made mouseover/out/enter/leave event firing independent of corresponding PEs](https://github.com/w3c/pointerevents/pull/56)
-   [Rewrite of primary pointer section](https://github.com/w3c/pointerevents/pull/53) to simplify the wording and allow for possibility of multiple mouse input devices
-   [Cover the case when primary pointer is removed](https://github.com/w3c/pointerevents/pull/50)
-   [Clarification about dynamic `touch-action` changes](https://github.com/w3c/pointerevents/pull/43)
-   [Add the missing pointerover/enter events](https://github.com/w3c/pointerevents/pull/36) to the "Process Pending Pointer Capture" section
-   [Clarify the button value for mouse drag](https://github.com/w3c/pointerevents/pull/34)
-   [Fix the `touch-action` processing model for zoom scenarios](https://github.com/w3c/pointerevents/pull/24)

<span class="secno">C. </span>References<a href="#references" class="self-link"></a>
------------------------------------------------------------------------------------

### <span class="secno">C.1 </span>Normative references<a href="#normative-references" class="self-link"></a>

\[CSS21\]  
[Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). Bert Bos; Tantek Çelik; Ian Hickson; Håkon Wium Lie et al. W3C. 7 June 2011. W3C Recommendation. URL: <https://www.w3.org/TR/CSS2/>

\[DOM4\]  
[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://dom.spec.whatwg.org/>

\[HTML\]  
[HTML Standard](https://html.spec.whatwg.org/multipage/). Anne van Kesteren; Domenic Denicola; Ian Hickson; Philip Jägenstedt; Simon Pieters. WHATWG. Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[HTML5\]  
[HTML5](https://www.w3.org/TR/html5/). Steve Faulkner; Arron Eicholz; Travis Leithead; Alex Danilo; Sangwhan Moon. W3C. 14 December 2017. W3C Recommendation. URL: <https://www.w3.org/TR/html5/>

\[PointerLock\]  
[Pointer Lock](https://www.w3.org/TR/pointerlock/). Vincent Scheib. W3C. 27 October 2016. W3C Recommendation. URL: <https://www.w3.org/TR/pointerlock/>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[UIEVENTS\]  
[UI Events](https://www.w3.org/TR/uievents/). Gary Kacmarcik; Travis Leithead; Doug Schepers. W3C. 8 November 2018. W3C Working Draft. URL: <https://www.w3.org/TR/uievents/>

\[WEBIDL\]  
[Web IDL](https://heycam.github.io/webidl/). Cameron McCormack; Boris Zbarsky; Tobie Langel. W3C. 15 December 2016. W3C Editor's Draft. URL: <https://heycam.github.io/webidl/>

### <span class="secno">C.2 </span>Informative references<a href="#informative-references" class="self-link"></a>

\[COMPAT\]  
[Compatibility Standard](https://compat.spec.whatwg.org/). Mike Taylor. WHATWG. Living Standard. URL: <https://compat.spec.whatwg.org/>

\[CSSOM-VIEW\]  
[CSSOM View Module](https://www.w3.org/TR/cssom-view-1/). Simon Pieters. W3C. 17 March 2016. W3C Working Draft. URL: <https://www.w3.org/TR/cssom-view-1/>

\[PointerEvents1\]  
[Pointer Events](https://www.w3.org/TR/pointerevents1/). Jacob Rossi; Matt Brubeck. W3C. 24 February 2015. W3C Recommendation. URL: <https://www.w3.org/TR/pointerevents1/>

\[TOUCH-EVENTS\]  
[Touch Events](https://www.w3.org/TR/touch-events/). Doug Schepers; Sangwhan Moon; Matt Brubeck; Arthur Barstow. W3C. 10 October 2013. W3C Recommendation. URL: <https://www.w3.org/TR/touch-events/>

[↑](#toc)
