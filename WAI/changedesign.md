-   [![](/Icons/downinpage.png) Skip to Content](#skip)
-   [| Change text size or colors](/WAI/changedesign.html)

[![W3C logo](/Icons/w3c_home)](http://www.w3.org/ "W3C Home")[![Web Accessibility initiative](/WAI/images/wai-temp)](http://www.w3.org/WAI/ "WAI Home")

WAI: Strategies, guidelines, resources to make the Web accessible to people with disabilities

Navigation: [W3C Home](http://www.w3.org/) &gt; [WAI Home](http://www.w3.org/WAI/)

<span id="skip">-</span>

How to Change Text Size or Colors
=================================

Page Contents
-------------

-   [To Change Text Size](#text)
-   [For a Plain Layout View](#nocss)
-   [Other Text and Color Changes](#disable)
-   [Should all sites include this?](#alldoit)
-   [Note: No Browser Endorsement](#disclaimer)
-   [Related Pages](#related)

The WAI website is designed to let you change the text size, text and background colors, and other display settings **through standard browser settings**.

This page shows you how to use some of these browser display settings.

-   "[Why doesn't this work with some other Web sites?](#notworky)" explains that these settings may not work on browsers and Web sites that do not meet [accessibility guidelines](guid-tech).
-   "[Should all sites include this?](#alldoit)" explains that including these instructions is not an accessibility requirement.

<span id="text">To Change Text Size</span>
------------------------------------------

Most Web browsers include functionality to let you increase or decrease the text in a Web page. For example, to increase text size:

<table><colgroup><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /></colgroup><thead><tr class="header"><th>Browser</th><th>Example</th><th>Menu Items</th><th><strong>Macintosh Shortcut</strong></th><th><strong>Windows Shortcut</strong></th></tr></thead><tbody><tr class="odd"><td>Internet Explorer</td><td><p><img src="about/textsize-ie.png" alt="Internet Explorer screen capture as described in the page" class="border1c60" /><br />
</p></td><td>View &gt;<br />
Text Size &gt;<br />
Largest</td><td>.</td><td>.</td></tr><tr class="even"><td>Firefox,<br />
Netscape</td><td><img src="about/textsize-mozilla.png" alt="Firefox/Netscape screen capture as described in the page" class="border1c60" /><br />
</td><td>View &gt;<br />
Text Size &gt;<br />
Increase</td><td><strong>Command+</strong></td><td><strong>Ctrl++</strong></td></tr><tr class="odd"><td>Opera</td><td><img src="about/textsize-opera.png" alt="Opera screen capture as described in the page" class="border1c60" /><br />
</td><td>View &gt;<br />
Zoom &gt;<br />
%</td><td><p><strong>Command+</strong></p></td><td><p><strong>+</strong></p><p><em>or</em></p><p><strong>0</strong></p></td></tr><tr class="even"><td>Safari</td><td><img src="about/textsize-safari.png" alt="Safari screen capture as described in the page" class="border1c60" /></td><td>View &gt;<br />
Make Text Bigger</td><td><strong>Command+</strong></td><td>.</td></tr></tbody></table>

### <span id="notworky"></span>Why doesn't this work with some other websites?

The browser settings on this page should work when browsers and websites meet [WAI guidelines](guid-tech) and are designed for accessibility, flexibility, and user control. However, some browsers do not provide as much user control, and some websites are designed to defeat browser settings. Text resizing does not work well in browsers and websites that do not meet accessibility guidelines.

-   In **Internet Explorer** Version 6 and earlier, the text may not resize because the Web site is designed with "hard-coded" or "absolute" text sizes. To override Web site setting:
    1.  *Menu items:* Tools &gt; Internet Options
    2.  *In Internet Options dialog box:* Accessibility button (bottom right)
    3.  *In Accessibility dialog box:*  
        \[/\] Ignore colors specified on Web pages  
        \[/\] Ignore font styles specified on Web pages  
        \[/\] Ignore font sizes specified on Web pages
-   In **Firefox** early versions, the text should resize even if the Web site text is not "coded" for flexibility. However the sections of the Web site may not resize, making it difficult to use the site with large text. This is because the Web site was designed with "hard-coded" or "absolute" sizes. Firefox does not resize images.
-   **Opera** resizes all aspects of a Web site, including font, images, and sections. **Resizing should work fairly well in Opera**, even if the Web site is not "coded" for flexibility.

<span id="nocss">For a Plain Layout View</span>
-----------------------------------------------

Turning off the style sheet gives a plain layout view, which:

-   makes text black on a white background (or however your browser is set)
-   puts all the information in one column (called "linearized")
-   leaves content images
-   removes background images

<table><thead><tr class="header"><th>Browser</th><th>Example</th><th>Menu Items</th></tr></thead><tbody><tr class="odd"><td>Firefox</td><td><img src="about/plainlayout-firefox-mac.png" alt="Firefox screen capture as described in the page" class="border1c60" /></td><td>View &gt;<br />
Page Style &gt;<br />
No Style</td></tr><tr class="even"><td>Opera</td><td><img src="about/plainlayout-opera-mac.png" alt="Opera screen capture as described in the page" class="border1c60" /></td><td>View &gt;<br />
Style &gt;<br />
User Mode</td></tr></tbody></table>

<span id="disable">Other Text and Color Changes</span>
------------------------------------------------------

Many browsers provide functionality to set different aspects of font and color. Below are examples of how to access this functionality.

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Browser</th><th>Example</th><th>To access functionality:</th></tr></thead><tbody><tr class="odd"><td>Firefox</td><td><img src="about/other-firefox-mac.png" alt="Firefox screen capture as described in the page" class="border1c60" /></td><td><p><em>Windows Menu items:</em>Tools &gt; Options<br />
<em>Macintosh Menu items:</em> Firefox &gt; Preferences</p><p><em>In dialog box:</em> General (in the left pane), Fonts &amp; Colors (button)</p></td></tr><tr class="even"><td>Opera</td><td>.</td><td><p><em>Windows Menu items:</em> Tools &gt; Preferences<br />
<em>Macintosh Menu items:</em> Opera &gt; Preferences</p><p><em>In dialog box:</em> Fonts and Page Style (in the left pane)</p></td></tr></tbody></table>

<span id="alldoit">Should all websites include instructions like this?</span>
-----------------------------------------------------------------------------

It is not an accessibility requirement that websites include information on changing text sizes and colors like this page. WAI chose to include this information to help people who want to know how to change their browser settings and may not know how.

Web browsers and websites **should** be designed following [WAI guidelines](guid-tech) so that people can easily change text sizes and colors.

<span id="disclaimer">Note: No Browser Endorsement</span>
---------------------------------------------------------

W3C WAI does not endorse specific Web browsers and does not recommend one browser over another. While some common browsers are included in this page, mention of a specific browser does not imply endorsement or recommendation.

<span id="related">Related Pages</span>
---------------------------------------

-   [Help with the WAI Web Site](sitehelp) includes instructions on navigating the WAI Web site and other topics

Document Information
--------------------

**Status: Draft updated 2005**  
Editor: Shawn Lawton Henry. Developed with input from the Education and Outreach Working Group ([EOWG](/WAI/EO/)).

\[[WAI Site Map](http://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](http://www.w3.org/WAI/sitehelp.html)\] \[[Search](http://www.w3.org/WAI/search.php)\] \[[Contacting WAI](/WAI/contacts)\]  
**Feedback welcome to <wai-eo-editors@w3.org>** (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

[Copyright](/Consortium/Legal/ipr-notice#Copyright) © 1994-2012 [W3C](/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
