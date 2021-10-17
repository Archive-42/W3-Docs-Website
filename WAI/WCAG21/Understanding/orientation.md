-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Sensory Characteristics](sensory-characteristics)
-   [Next SC: Identify Input Purpose](identify-input-purpose)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.3.4: Orientation
==================================================

> Success Criterion [1.3.4 Orientation](https://www.w3.org/TR/WCAG21/#orientation) (Level AA): Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is [essential](#dfn-essential).
>
> Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.

Intent
------

The intent of this Success Criterion is to ensure that content displays in the orientation (portrait or landscape) preferred by the user. Some websites and applications automatically set and restrict the screen to a particular display orientation and expect that users will respond by rotating their device to match, but this can create problems. Some users have their devices mounted in a fixed orientation (e.g. on the arm of a power wheelchair). Therefore, websites and applications need to support both orientations by not restricting the orientation. Changes in content or functionality due to the size of display are not covered by this criterion which is focused on restrictions of orientation.

Historically, devices tended to have a fixed-orientation display, and all content was created to match that display orientation. Today, most handhelds and many other devices (e.g., monitors) have a hardware-level ability to dynamically adjust default display orientation based on sensor information. The goal of this Success Criterion is that authors should never restrict content's orientation, thus ensuring that it always match the device display orientation.

It is important to distinguish between an author's responsibility not to restrict content to a specific orientation, and device-specific settings governing the locking of display orientation.

Many hand-held devices offer a mechanical switch or a system setting (or both) to allow the user to lock the device display to a specific orientation. Where a user decides to lock their entire device to an orientation, all applications are expected to pick up that setting and to display content accordingly.

This Success Criterion complements device "lock orientation" settings. A web page that does not restrict its display orientation will always support the system-level orientation setting, since the system setting is picked up by the user agent. Alternatively, where a device-level orientation lock is not in place, the user agent should display the page according to the orientation of the device (either its default, or the current orientation determined by any device sensors).

The exception for things considered essential is aimed at situations where the content would only be understood in a particular orientation, or where the technology restricts the possible orientations. If content is aimed at a specific environment which is only available in one orientation (such as a television) then the content can restrict the orientation. Technologies such as virtual reality use screens within goggles that cannot change orientation relative to the user's eyes.

Benefits
--------

-   Users with dexterity impairments, who have a mounted device will be able to use the content in their fixed orientation.
-   Users with low-vision will be able to view content in the orientation that works best for them, for example to increase the text size by viewing content in landscape.

Examples
--------

-   **Example 1: Online video site**  
    A video is shown in either portrait or in landscape based on the user's chosen orientation.
-   **Example 2: Messaging website**  
    A messaging website can display messages in both portrait and landscape orientations.
-   **Example 3: eReader web app**  
    An eReader web app can display the contents of a book in both portrait and landscape orientation.
-   **Example 4: Check deposit in banking app**  
    An example where orientation is essential could be a banking app that requires the device be in landscape mode to easily and accurately capture an image of a check for deposit. These paper forms are typically about twice as wide as they are high.
-   **Example 5: Piano app**  
    An example where orientation is essential could be a piano app that requires the device to be in landscape mode to allow room for enough of the piano keys to be functionally usable. Since a piano app is emulating a physical piano keyboard that needs to retain relative physical characteristics between keys, either too few keys would be available, or the keys would be much too narrow.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Managing Screen Orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
-   [Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
-   [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
-   [Orientation Lock](https://css-tricks.com/snippets/css/orientation-lock/)
-   [Responsive Design for Landscape Orientation](https://css-tricks.com/forums/topic/responsive-design-for-landscape-orientation/)
-   [The Orientation Descriptor](https://www.w3.org/TR/css-device-adapt-1/#orientation-desc)
-   [The Screen Orientation API](https://www.w3.org/TR/screen-orientation/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [G214: Using a control to allow access to content in different orientations which is otherwise restricted](https://www.w3.org/WAI/WCAG21/Techniques/general/G214)

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F97: Failure due to locking the orientation to landscape or portrait view](https://www.w3.org/WAI/WCAG21/Techniques/failures/F97)
-   [F100: Failure of Success Criterion 1.3.4 due to showing a message asking to reorient device](https://www.w3.org/WAI/WCAG21/Techniques/failures/F100)

Key Terms
---------

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform
