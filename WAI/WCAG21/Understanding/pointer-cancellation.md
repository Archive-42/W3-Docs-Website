-   [Contents](. "Table of Contents")
-   [GL: Input Modalities](input-modalities)
-   [Previous SC: Pointer Gestures](pointer-gestures)
-   [Next SC: Label in Name](label-in-name)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.5.2: Pointer Cancellation
===========================================================

> Success Criterion [2.5.2 Pointer Cancellation](https://www.w3.org/TR/WCAG21/#pointer-cancellation) (Level A): For [functionality](#dfn-functionality) that can be operated using a [single pointer](#dfn-single-pointer), at least one of the following is true:
>
> No Down-Event  
> The [down-event](#dfn-down-event) of the pointer is not used to execute any part of the function;
>
> Abort or Undo  
> Completion of the function is on the [up-event](#dfn-up-event), and a [mechanism](#dfn-mechanism) is available to abort the function before completion or to undo the function after completion;
>
> Up Reversal  
> The up-event reverses any outcome of the preceding down-event;
>
> Essential  
> Completing the function on the down-event is [essential](#dfn-essential).
>
> Functions that emulate a keyboard or numeric keypad key press are considered essential.
>
> This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).

Intent
------

The intent of this success criterion is to make it easier for users to prevent accidental or erroneous pointer input. People with various disabilities can inadvertently initiate touch or mouse events with unwanted results. Each of the following subsections roughly aligns with the bullets of this Success Criterion, and outlines a means of allowing users to cancel pointer operations.

### Up-Event activation or completion

The most accessible way to incorporate pointer cancellation is to make activation occur on the up-event.

Up-event activation refers to the activation of a target when the pointer is released. In a touchscreen interaction, when the finger touches a target, the up-event activation only occurs when the finger is lifted while still being within the target boundary. Similarly in mouse interaction, the up-event occurs when the mouse button is released while the cursor is still within the boundary of the initial target set when the mouse button was pressed.

Authors can reduce the problem of users inadvertently triggering an action by using generic platform activation/click events that activate functionality on the up-event. For example, the `click` event in JavaScript triggers on release of the primary mouse button, and is an example of an implicit up-event. Despite its name, the `click` event is device-independent and also works for touch and keyboard interaction.

The preference for up-events is implicit in the Success Criterion wording of the first bullet: “The down-event of the pointer is not used to execute any part of the function.” Authors meet the first bullet by using only the up-event.

### Up-Event Abort or Undo

Where the interaction is equivalent to a simple "click", up-event activation has a built-in ability to cancel. There is a distinction between when someone touches a screen and when they remove their finger. Similarly, in mouse interaction, there is a difference between pressing and releasing the mouse button. When activation occurs only as the pointer is released, users have the opportunity to Abort (cancel) the activation. Users who have difficulty accurately using a mouse or touchscreen benefit greatly from this basic behaviour. They normally receive visual feedback when an item is pressed. If they discover they have selected the wrong item, they can cancel the action by moving their pointer or finger away from the target before releasing.

For more complex interactions, such as drag and drop, the down- and up-events may initiate and end a series of actions to complete a process. For example, with drag and drop, the item may be:

1.  selected with a press (down-event),
2.  moved to a new location, while still being depressed, and
3.  released (up-event) to conclude the drop action.

In such a complex action, the need for an Abort or Undo function increases. Designers may elect to confirm the move through something like a confirmation dialog or an undo button, giving the user the ability to Undo the process just completed. Alternatively, the ability to Abort the action can be acheived if, before completing step 3, the user returns the selected item to its original location and concludes the process there. If other parts of the screen disallow a move, the user can conclude the drag and drop there, effectively nullifying the operation.

### Up Reversal

In other interactions, the down-event may trigger a behaviour which can be reversed when the up-event concludes. Examples of this include press-and-hold actions such as where a transient popup appears (or a video plays) when the user presses on an object (down-event), but the popup (or video) disappears as soon as the user releases the pointer (up-event). Since the up-event reverses the preceding down event, the user is returned to their prior point, and has effectively cancelled the operation.

### Down-Event

Completing the function on the down-event is only permitted when it is essential that the up-event not be used.

The most prevalent essential down-event activation occurs in keyboard emulation. On a physical keyboard, keys by default activate on the down-event -- a letter appears when the key is pressed. If a software keyboard emulator tried to override this expected behaviour by making letters appear when the key is released, the behaviour would be unexpected and would adversely affect expected interaction.

Note that a keyboard has a built-in Backspace or Delete button, which effectively provides an Undo option. Undo is not a requirement of the down-event Essential exception; however, providing an easy way for users to undo any action is a recommended practice (and may be a functional necessity), even where it is not a requirement of this Success Criterion.

Other examples where the timing of an activation is essential and requires the down-event would be:

-   An activity that emulates a physical on-press trigger, such as when playing an on-screen piano keyboard. Activation on the up-event would significantly alter the desired behaviour.
-   A program for shooting skeets where waiting for the "up" event would invalidate the precise timing necessary for the activation.

Benefits
--------

-   Makes it easier for all users to recover from hitting the wrong target.
-   Helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a control will be accidentally activated or an action will occur unexpectedly, and also ensures that where complex controls are activated, a means of Undoing or Aborting the action is available.
-   Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site.

Examples
--------

-   For interface elements that have a single tap or long press as input, the corresponding event is triggered when the finger is lifted inside that element.
-   A drag-and-drop interface allows users to sort vertically stacked cards by picking up one card with the pointer (down-event), move it to a new position, and insert it at the new location when the pointer is released (up-event). Releasing the pointer outside the drop target area reverts the action, i.e., it moves the card back to the old position before the interaction started.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G210" class="general">G210: Ensuring that drag-and-drop actions can be cancelled</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G212" class="general">G212: Using native controls to ensure functionality is triggered on the up-event.</a>
-   @@ Touch events are only triggered when touch is removed from a control.

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F101: Failure of Success Criterion 2.5.2 due to activating a control on the down-event](https://www.w3.org/WAI/WCAG21/Techniques/failures/F101)

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

conformance

satisfying all the requirements of a given standard, guideline or specification

down-event

platform event that occurs when the trigger stimulus of a pointer is depressed

The down-event may have different names on different platforms, such as "touchstart" or "mousedown".

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

functionality

[processes](#dfn-process) and outcomes achievable through user action

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

single pointer

pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

up-event

platform event that occurs when the trigger stimulus of a pointer is released

The up-event may have different names on different platforms, such as "touchend" or "mouseup".

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
