-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Images of Text (No Exception)](images-of-text-no-exception)
-   [Next SC: Non-text Contrast](non-text-contrast)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.10: Reflow
==============================================

> Success Criterion [1.4.10 Reflow](https://www.w3.org/TR/WCAG21/#reflow) (Level AA): Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:
>
> -   Vertical scrolling content at a width equivalent to 320 [CSS pixels](#dfn-css-pixel);
> -   Horizontal scrolling content at a height equivalent to 256 [CSS pixels](#dfn-css-pixel).
>
> Except for parts of the content which require two-dimensional layout for usage or meaning.
>
> 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.
>
> Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.

Intent
------

The intent of this Success Criterion is to support people with low vision who need to enlarge text and read it in a single column. When the browser zoom is used to scale content to 400%, it reflows - i.e., it is presented in one column so that scrolling in more than one direction is not necessary.

For people with low vision, enlarged text with reflow enables reading. It is critical. Enlargement enables perception of characters. Reflow enables tracking. Tracking is following along lines of text, including getting from the end of one line to the beginning of the next line.

Avoiding the need to scroll in the direction of reading in order to reveal lines that are cut off by the viewport is important, because such scrolling significantly increases the effort required to read. It is also important that content is not hidden off-screen. For example, zooming into a vertically scrolling page should not cause content to be hidden to one side.

### How reflow works

User agents for technologies such as HTML/CSS, PDF, and ePub have methods for reflowing content to fit the width of the window (viewport). When appropriately authored, page content can reflow (wrap) to stay within the window's boundaries (viewport) when users zoom in to enlarge the size of content. Spatial relationships of content may change when users zoom, but all information and functionality should continue to be available.

Supporting the reflow of content is also known as 'Responsive Web Design'. It is enabled by CSS media queries which reformat the web content for different viewport widths (at particular break points) in order to provide optimised layouts for mobile devices such as tablets or smartphones. Importantly, these breakpoints are not only triggered by narrower viewports, but also when users employ the browser zoom function to zoom into the page.

In a desktop browser at 100% (default) scale, typical web pages that support reflow display content in two, three or more columns. Zooming in will at some point trigger a change of layout, so content will now be displayed in fewer columns. At a higher magnification scale of 200% or more, content will usually be rendered in a single column. Parts of content that were in the marginal columns, like a navigation menu or supplementary content, will now typically appear on top of or below the main content.

### Viewing distance and display resolution

The value of 320 CSS pixels was chosen as a reasonable minimum size that authors can achieve. This value lines up with the reported viewport width of small displays of common mobile devices. The width of 320 CSS pixels exactly corresponds to a desktop browser window set to a width of 1280px and zoomed in to 400%. It should be noted that 400% applies to the dimension, not the area. It means four times the default width and four times the default height.

<figure><img src="img/css-pixel-by-device.png" alt="Figure 1 A letter of the same CSS pixel size on different displays with different resolutions" width="462" height="198" /><figcaption>Figure 1 A letter of the same CSS pixel size on different displays with different resolutions</figcaption></figure>When we read, the size of the print is not as important as the image it projects on the retina of our eye. Phones are designed for close viewing while desktops are designed for viewing farther away. As a consequence 16px print on a phone is physically smaller than 16px print on a desktop. This is not a problem because both print sizes cast the same image on our retina if they are viewed at their intended distance.

### Visibility and availability of content

How much of the content is visible may change at different scales. For example, navigation menus that are fully visible in the desktop layout are often collapsed into fewer items, or even into a single menu button (the 'hamburger' icon pattern) so they take up less screen space.

The Success Criterion is met as long as all content and functionality are still fully available - either directly, or revealed via accessible controls, or accessible via direct links.

### Content exceptions for reflow

Content which requires two-dimensional layout for usage or meaning cannot reflow without losing meaning, and is therefore out of scope of this Success Criterion. For example, graphics and video are by their nature two-dimensional. Cutting up an image and stacking the blocks would render the content unusable so that is out of scope. However, it is possible to have these elements stay within the bounds of viewport at zoom levels to 400% (see advisory techniques).

Complex data tables have a two-dimensional relationship between the headings and data cells. This relationship is essential to convey the content. This Success Criterion therefore does not apply to whole data tables. However, cells within data tables should fit within the size requirement unless the cell contains types of content that also requires two-dimensional layout for usage or meaning.

Interfaces which provide toolbars to edit content need to show both the content and the toolbar in the viewport. Depending on the number of toolbar buttons, the toolbar may need to scroll in the direction of text (e.g., horizontally in a vertically scrolling page). This Success Criterion therefore does not apply to interfaces which provide toolbars.

### Responsive web design and other ways to meet this Success Criterion

Using the responsive web design approach is the most effective method of achieving the goal of allowing people to zoom in to 400%. Each variation (CSS break point) of the page at the same URL should conform (compare [Conformance for WCAG 2.1](https://www.w3.org/TR/WCAG21/#h-note-27)).

For organisations which are using legacy systems or are not able to update their layout methods for some reason, an alternative conforming version could be a mobile site which has a fixed 320px wide layout. The user should be able to find that version from the default website.

### Avoiding scrolling in horizontally and vertically written languages

The success Criterion applies to both horizontally and verticaly written languages. Zooming the page for horizontally written languages where pages scroll vertically by default (e.g. English) should not require horizontal scrolling. Zooming the page for vertically written languages which scroll horizontally by default should not require vertical scrolling.

### The relation of Reflow to the Success Criterion 1.4.4 Resize Text

The focus of the Reflow Success Criterion is to enable users to zoom in without having to scroll in two directions. <a href="resize-text" class="sc">Success Criterion 1.4.4 Resize Text</a> also applies, so it should be possible to increase the size of all text to at least 200% while simultaneously meeting the reflow requirement. For most implementations, the text is expected to continue to enlarge as the magnification increases, so that users can magnify text up to (and beyond) 400%. In an implementation where text does not consistently increase its size as people zoom in (such as when it is tranformed based on a media query to adapt to small-screen usage), it must still be possible to get to 200% enlargement in order to satisfy the Resize Text criterion.

For example, if at the default browser setting of 100% zoom, text is set at 20px when the window is 1280px wide, the same 20px at 200% zoom would mean a text size of 200%. At 400% zoom, the author may decide to set the text size to 10px: the text would now still be enlarged to 200% compared to the default browser setting of 100% zoom. It is not required to achieve 200% text enlargement at every breakpoint, but it should be possible to get 200% text enlargement in some way.

### Browsers on mobile operating systems

Most browsers on mobile operating systems do not combine reflow and zoom in the same way as on desktop browsers. These mobile browsers normally support reflow when changing the orientation of the device -- content will be adjusted to the new viewport width. However, these mobile browsers can only magnify content to achieve 1.4.4. Resize Text in manners which do not constrain reflow to a single dimension, for example by using a pinch gesture to scale up content or a double tap on a particular column to make it fill the viewport width. This means that zoomed content in most mobile browsers involves two-dimensional scrolling regardless of what an author does.

Mobile user agents *can* offer reflow when users zoom into content, as evidenced by the Dolphin browser for Android. The lack of magnified reflow support in browsers on mobile operating systems can therefore be regarded as a user agent support issue.

Benefits
--------

-   **One column view in responsive design**  
    A site uses responsive design. When a person zooms in to over 300%, the layout is reflowed to one column. The user can read the content easily and does not have to scroll sideways to read.
-   **PDF offering reflow**  
    In a PDF created to conform to PDF/Universal Accessibility (ISO 14289), the content can be reflowed and zoomed in to make reading possible for someone with low-vision.

Examples
--------

### Example 1: Responsive Design

Animation of zooming in on a responsive site. The content reflows to fit the screen.

Note that as the zoom percentage increases, the navigation changes first to hide options behind a "More" dropdown menu. As zooming continues, most navigation options are eventually behind a "hamburger" menu button. All the information and functionality is still available from this web page. There is no horizontal scrolling.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Operational Overhead Caused by Horizontal Scrolling Text](http://nosetothepage.org/Fitz/2dScroll.html) by Wayne Dick, 2017. The study shows the impact of horizontal scrolling on reading effort
-   [Accessibility Requirements for People with Low Vision](https://www.w3.org/TR/low-vision-needs/). W3C First Public Working Draft 17 March 2016
-   [Responsive design resources](https://developer.mozilla.org/en-US/Apps/Progressive/Responsive) from MDN Web docs
-   [Responsive web design basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) tutorial from Google

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [C32: Using media queries and grid CSS to reflow columns](https://www.w3.org/WAI/WCAG21/Techniques/css/C32)
-   [C31: Using CSS Flexbox to reflow content](https://www.w3.org/WAI/WCAG21/Techniques/css/C31)
-   [C33: Allowing for Reflow with Long URLs and Strings of Text](https://www.w3.org/WAI/WCAG21/Techniques/css/C33)
-   [C38: Using CSS width, max-width and flexbox to fit labels and inputs](https://www.w3.org/WAI/WCAG21/Techniques/css/C38)
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34" class="script">SCR34: Calculating size and position in a way that scales with text size</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G206" class="general">G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text</a>
-   @@ New: Using PDF/UA when creating PDFs.

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [C34: Using media queries to un-fixing sticky headers / footers](https://www.w3.org/WAI/WCAG21/Techniques/css/C34)
-   [C37: Using CSS max-width and height to fit images](https://www.w3.org/WAI/WCAG21/Techniques/css/C37)
-   @@ CSS, Reflowing simple data tables.
-   @@ CSS, Fitting data cells within the width of the viewport.
-   @@ Mechanism to allow mobile view at any time

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F102" class="failure">F102: Failure of Success Criterion 1.4.10 due to content disappearing and not being available when content has reflowed</a>

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [meta viewport allows for zoom](/WAI/standards-guidelines/act/rules/meta-viewport-b4f0c3/)

Key Terms
---------

css pixel

visual angle of about 0.0213 degrees

A CSS pixel is the canonical unit of measure for all lengths and measurements in CSS. This unit is density-independent, and distinct from actual hardware pixels present in a display. User agents and operating systems should ensure that a CSS pixel is set as closely as possible to the [CSS Values and Units Module Level 3 reference pixel](https://www.w3.org/TR/css3-values/#reference-pixel) \[\[!css3-values\]\], which takes into account the physical dimensions of the display and the assumed viewing distance (factors that cannot be determined by content authors).
