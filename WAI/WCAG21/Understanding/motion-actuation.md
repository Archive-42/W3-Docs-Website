-   [Contents](. "Table of Contents")
-   [GL: Input Modalities](input-modalities)
-   [Previous SC: Label in Name](label-in-name)
-   [Next SC: Target Size](target-size)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.5.4: Motion Actuation
=======================================================

> Success Criterion [2.5.4 Motion Actuation](https://www.w3.org/TR/WCAG21/#motion-actuation) (Level A): [Functionality](#dfn-functionality) that can be operated by device motion or user motion can also be operated by [user interface components](#dfn-user-interface-component) and responding to the motion can be disabled to prevent accidental actuation, except when:
>
> Supported Interface  
> The motion is used to operate functionality through an [accessibility supported](#dfn-accessibility-supported) interface;
>
> Essential  
> The motion is [essential](#dfn-essential) for the function and doing so would invalidate the activity.

Intent
------

The intent of this success criterion is to ensure that functions triggered by moving a device (for example, shaking or tilting) or by gesturing towards the device (so that sensors like a camera can pick up and interpret the gesturing), can also be operated by more conventional user interface components.

Note

This criterion concerns input through sensors which respond directly to motions such as gesturing towards, tilting or shaking a device. It does not cover the movement of users through space as registered by geolocation sensors or beacons, or events observed by the device other than intentional gesturing by the user. It also does not cover incidental motion associated with operating a keyboard, pointer, or assistive technology.

Devices often have sensors that can act as inputs, such as accelerometer and gyroscope sensors on a phone or tablet device. These sensors can allow the user to control something by simply changing the orientation or moving the device in particular ways. In other situations, web content can interpret user gestures via the camera or other sensors to actuate functions. For example, shaking the device might issue an "Undo" command, or a gentle hand wave might be used to move forward or backward in a sequence of pages. Some users with disabilities are not able to operate these device sensors (either not at all, or not precisely enough) because the device is on a fixed mount (perhaps a wheelchair) or due to motor impairments. Therefore, functionality offered through motion must also be available by another mechanism.

In addition, some users may accidentally activate sensors due to tremors or other motor impairments. The user must have the ability to turn off motion actuation to prevent such accidental triggering of functions. Applications may be able to meet this requirement by supporting operating system settings which allow the user to disable motion detection at the system level.

There is an exception where motion is essential for the function or not using motions or gestures would invalidate the activity. Some applications are specifically created to use device sensor data. Examples of content that are exempt from this requirement include a pedometer that relies on device motion to count steps.

Benefits
--------

-   This Success Criterion helps people who may be unable to perform particular motions (such as tilting, shaking, or gesturing) because the device may be mounted or users may be physically unable to perform the necessary movement. This success criterion ensures that users can still operate all functionality by other means such as touch or via assistive technologies.
-   Other users will benefit in situations where they are unable to move their devices.

Examples
--------

-   A user can choose an application setting which turns off Shake to Undo and other motion-activated features.
-   After text is input in a field, shaking a device shows a dialog offering users to undo the input. A cancel button next to the text field offers the same functionality.
-   A user can tilt a device to advance to the next or a previous page. Buttons are also provided to perform the same function.
-   A user can move or pan a device to change the view in an interactive photo. A control is also available to perform these same functions.
-   A user can gesture towards the device to navigate content. Controls are also available to navigate.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Detecting device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
-   [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213)
-   GXXX: Supporting system level features which allow the user to disable motion actuation

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F106: Failure due to inability to deactivate motion actuation](https://www.w3.org/WAI/WCAG21/Techniques/failures/F106)
-   FXXX: Failure of Success Criterion 2.5.4 due to disrupting or disabling system level features which allow the user to disable motion actuation

Key Terms
---------

accessibility supported

supported by users' [assistive technologies](#dfn-assistive-technology) as well as the accessibility features in browsers and other [user agents](#dfn-user-agent)

To qualify as an accessibility-supported use of a Web content technology (or feature of a technology), both 1 and 2 must be satisfied for a Web content technology (or feature):

1.  **The way that the [Web content technology](#dfn-technology) is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the [human language(s)](#dfn-human-language) of the content,

    **AND**

2.  **The Web content technology must have accessibility-supported user agents that are available to users.** This means that at least one of the following four statements is true:

    1.  The technology is supported natively in widely-distributed user agents that are also accessibility supported (such as HTML and CSS);

        **OR**

    2.  The technology is supported in a widely-distributed plug-in that is also accessibility supported;

        **OR**

    3.  The content is available in a closed environment, such as a university or corporate network, where the user agent required by the technology and used by the organization is also accessibility supported;

        **OR**

    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:

        -   does not cost a person with a disability any more than a person without a disability **and**
        -   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.

Note

The Accessibility Guidelines Working Group and the W3C do not specify which or how much support by assistive technologies there must be for a particular use of a Web technology in order for it to be classified as accessibility supported. (See [Level of Assistive Technology Support Needed for "Accessibility Support"](https://www.w3.org/WAI/WCAG21/Understanding/conformance#support-level).)

Note

Web technologies can be used in ways that are not accessibility supported as long as they are not [relied upon](#dfn-relied-upon) and the page as a whole meets the conformance requirements, including [Conformance Criterion 4](#cc4) and [Conformance Criterion 5](#cc5), are met.

Note

When a [Web Technology](#dfn-technology) is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements.

Note

When citing Web content technologies that have multiple versions, the version(s) supported should be specified.

Note

One way for authors to locate uses of a technology that are accessibility supported would be to consult compilations of uses that are documented to be accessibility supported. (See [Understanding Accessibility-Supported Web Technology Uses](https://www.w3.org/WAI/WCAG21/Understanding/conformance#documented-lists).) Authors, companies, technology vendors, or others may document accessibility-supported ways of using Web content technologies. However, all ways of using technologies in the documentation would need to meet the definition of accessibility-supported Web content technologies above.

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

conformance

satisfying all the requirements of a given standard, guideline or specification

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

functionality

[processes](#dfn-process) and outcomes achievable through user action

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

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
