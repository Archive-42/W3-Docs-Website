HTML Standard

<a href="https://whatwg.org/" class="logo"><img src="https://resources.whatwg.org/logo.svg" alt="WHATWG" width="100" height="100" /></a>

HTML
====

Living Standard — Last Updated <span class="pubdate">15 October 2021</span>
---------------------------------------------------------------------------

[← 2.7 Safe passing of structured data](structured-data.html) — [Table of Contents](./) — [4 The elements of HTML →](semantics.html)

1.  <span id="toc-dom">[<span class="secno">3</span> Semantics, structure, and APIs of HTML documents](dom.html#dom)</span>
    1.  [<span class="secno">3.1</span> Documents](dom.html#documents)
        1.  [<span class="secno">3.1.1</span> The `Document` object](dom.html#the-document-object)
        2.  [<span class="secno">3.1.2</span> The `DocumentOrShadowRoot` interface](dom.html#the-documentorshadowroot-interface)
        3.  [<span class="secno">3.1.3</span> Resource metadata management](dom.html#resource-metadata-management)
        4.  [<span class="secno">3.1.4</span> Reporting document loading status](dom.html#reporting-document-loading-status)
        5.  [<span class="secno">3.1.5</span> DOM tree accessors](dom.html#dom-tree-accessors)
    2.  [<span class="secno">3.2</span> Elements](dom.html#elements)
        1.  [<span class="secno">3.2.1</span> Semantics](dom.html#semantics-2)
        2.  [<span class="secno">3.2.2</span> Elements in the DOM](dom.html#elements-in-the-dom)
        3.  [<span class="secno">3.2.3</span> HTML element constructors](dom.html#html-element-constructors)
        4.  [<span class="secno">3.2.4</span> Element definitions](dom.html#element-definitions)
            1.  [<span class="secno">3.2.4.1</span> Attributes](dom.html#attributes)
        5.  [<span class="secno">3.2.5</span> Content models](dom.html#content-models)
            1.  [<span class="secno">3.2.5.1</span> The "nothing" content model](dom.html#the-nothing-content-model)
            2.  [<span class="secno">3.2.5.2</span> Kinds of content](dom.html#kinds-of-content)
                1.  [<span class="secno">3.2.5.2.1</span> Metadata content](dom.html#metadata-content)
                2.  [<span class="secno">3.2.5.2.2</span> Flow content](dom.html#flow-content)
                3.  [<span class="secno">3.2.5.2.3</span> Sectioning content](dom.html#sectioning-content)
                4.  [<span class="secno">3.2.5.2.4</span> Heading content](dom.html#heading-content)
                5.  [<span class="secno">3.2.5.2.5</span> Phrasing content](dom.html#phrasing-content)
                6.  [<span class="secno">3.2.5.2.6</span> Embedded content](dom.html#embedded-content-2)
                7.  [<span class="secno">3.2.5.2.7</span> Interactive content](dom.html#interactive-content)
                8.  [<span class="secno">3.2.5.2.8</span> Palpable content](dom.html#palpable-content)
                9.  [<span class="secno">3.2.5.2.9</span> Script-supporting elements](dom.html#script-supporting-elements)
            3.  [<span class="secno">3.2.5.3</span> Transparent content models](dom.html#transparent-content-models)
            4.  [<span class="secno">3.2.5.4</span> Paragraphs](dom.html#paragraphs)
        6.  [<span class="secno">3.2.6</span> Global attributes](dom.html#global-attributes)
            1.  [<span class="secno">3.2.6.1</span> The `title` attribute](dom.html#the-title-attribute)
            2.  [<span class="secno">3.2.6.2</span> The `lang` and `xml:lang` attributes](dom.html#the-lang-and-xml:lang-attributes)
            3.  [<span class="secno">3.2.6.3</span> The `translate` attribute](dom.html#the-translate-attribute)
            4.  [<span class="secno">3.2.6.4</span> The `dir` attribute](dom.html#the-dir-attribute)
            5.  [<span class="secno">3.2.6.5</span> The `style` attribute](dom.html#the-style-attribute)
            6.  [<span class="secno">3.2.6.6</span> Embedding custom non-visible data with the `data-*` attributes](dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        7.  [<span class="secno">3.2.7</span> The `innerText` and `outerText` properties](dom.html#the-innertext-idl-attribute)
        8.  [<span class="secno">3.2.8</span> Requirements relating to the bidirectional algorithm](dom.html#requirements-relating-to-the-bidirectional-algorithm)
            1.  [<span class="secno">3.2.8.1</span> Authoring conformance criteria for bidirectional-algorithm formatting characters](dom.html#authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters)
            2.  [<span class="secno">3.2.8.2</span> User agent conformance criteria](dom.html#user-agent-conformance-criteria)
        9.  [<span class="secno">3.2.9</span> Requirements related to ARIA and to platform accessibility APIs](dom.html#wai-aria)

<span class="secno">3</span> Semantics, structure, and APIs of HTML documents<a href="#dom" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------

### <span class="secno">3.1</span> Documents<a href="#documents" class="self-link"></a>

Every XML and HTML document in an HTML UA is represented by a `Document` object. [\[DOM\]](references.html#refsDOM)

The `Document` object's [URL](https://dom.spec.whatwg.org/#concept-document-url) is defined in DOM. It is initially set when the `Document` object is created, but can change during the lifetime of the `Document` object; for example, it changes when the user <a href="browsing-the-web.html#navigate" id="documents:navigate">navigates</a> to a <a href="browsing-the-web.html#navigate-fragid" id="documents:navigate-fragid">fragment</a> on the page and when the `pushState()` method is called with a new <a href="https://url.spec.whatwg.org/#concept-url" id="documents:url">URL</a>. [\[DOM\]](references.html#refsDOM)

Interactive user agents typically expose the `Document` object's <a href="https://dom.spec.whatwg.org/#concept-document-url" id="documents:the-document&#39;s-address">URL</a> in their user interface. This is the primary mechanism by which a user can tell if a site is attempting to impersonate another.

The `Document` object's [origin](https://dom.spec.whatwg.org/#concept-document-origin) is defined in DOM. It is initially set when the `Document` object is created, and can change during the lifetime of the `Document` only upon setting `document.domain`. A `Document`'s <a href="https://dom.spec.whatwg.org/#concept-document-origin" id="documents:concept-document-origin">origin</a> may differ from the <a href="https://url.spec.whatwg.org/#concept-url-origin" id="documents:concept-url-origin">origin</a> of its <a href="https://dom.spec.whatwg.org/#concept-document-url" id="documents:the-document&#39;s-address-2">URL</a>; for example when a <a href="browsers.html#nested-browsing-context" id="documents:nested-browsing-context">nested browsing context</a> is <span data-lt="creating a new nested browsing context">created</span>, its <a href="browsers.html#active-document" id="documents:active-document">active <code>Document</code></a>'s <a href="https://dom.spec.whatwg.org/#concept-document-origin" id="documents:concept-document-origin-2">origin</a> is set to the <a href="browsers.html#nested-browsing-context" id="documents:nested-browsing-context-2">nested browsing context</a>'s <a href="browsers.html#bc-container-document" id="documents:bc-container-document">container document</a>'s <a href="https://dom.spec.whatwg.org/#concept-document-origin" id="documents:concept-document-origin-3">origin</a>, even though its <a href="browsers.html#active-document" id="documents:active-document-2">active <code>Document</code></a>'s <a href="https://dom.spec.whatwg.org/#concept-document-url" id="documents:the-document&#39;s-address-3">URL</a> is `about:blank`. [\[DOM\]](references.html#refsDOM)

When a `Document` is created by a <a href="webappapis.html#concept-script" id="documents:concept-script">script</a> using the `createDocument()` or `createHTMLDocument()`, the `Document` is <a href="parsing.html#ready-for-post-load-tasks" id="documents:ready-for-post-load-tasks">ready for post-load tasks</a> immediately.

The document's referrer is a string (representing a <a href="https://url.spec.whatwg.org/#concept-url" id="documents:url-2">URL</a>) that can be set when the `Document` is created. If it is not explicitly set, then its value is the empty string.

#### <span class="secno">3.1.1</span> The `Document` object<a href="#the-document-object" class="self-link"></a>

**✔**MDN

[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera3+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

DOM defines a `Document` interface, which this specification extends significantly.

    enum DocumentReadyState { "loading", "interactive", "complete" };
    typedef (HTMLScriptElement or SVGScriptElement) HTMLOrSVGScriptElement;

    [LegacyOverrideBuiltIns]
    partial interface Document {
      // resource metadata management
      [PutForwards=href, LegacyUnforgeable] readonly attribute Location? location;
      attribute USVString domain;
      readonly attribute USVString referrer;
      attribute USVString cookie;
      readonly attribute DOMString lastModified;
      readonly attribute DocumentReadyState readyState;

      // DOM tree accessors
      getter object (DOMString name);
      [CEReactions] attribute DOMString title;
      [CEReactions] attribute DOMString dir;
      [CEReactions] attribute HTMLElement? body;
      readonly attribute HTMLHeadElement? head;
      [SameObject] readonly attribute HTMLCollection images;
      [SameObject] readonly attribute HTMLCollection embeds;
      [SameObject] readonly attribute HTMLCollection plugins;
      [SameObject] readonly attribute HTMLCollection links;
      [SameObject] readonly attribute HTMLCollection forms;
      [SameObject] readonly attribute HTMLCollection scripts;
      NodeList getElementsByName(DOMString elementName);
      readonly attribute HTMLOrSVGScriptElement? currentScript; // classic scripts in a document tree only

      // dynamic markup insertion
      [CEReactions] Document open(optional DOMString unused1, optional DOMString unused2); // both arguments are ignored
      WindowProxy? open(USVString url, DOMString name, DOMString features);
      [CEReactions] undefined close();
      [CEReactions] undefined write(DOMString... text);
      [CEReactions] undefined writeln(DOMString... text);

      // user interaction
      readonly attribute WindowProxy? defaultView;
      boolean hasFocus();
      [CEReactions] attribute DOMString designMode;
      [CEReactions] boolean execCommand(DOMString commandId, optional boolean showUI = false, optional DOMString value = "");
      boolean queryCommandEnabled(DOMString commandId);
      boolean queryCommandIndeterm(DOMString commandId);
      boolean queryCommandState(DOMString commandId);
      boolean queryCommandSupported(DOMString commandId);
      DOMString queryCommandValue(DOMString commandId);

      // special event handler IDL attributes that only apply to Document objects
      [LegacyLenientThis] attribute EventHandler onreadystatechange;
      attribute EventHandler onvisibilitychange;

      // also has obsolete members
    };
    Document includes GlobalEventHandlers;
    Document includes DocumentAndElementEventHandlers;

The `Document` has a policy container (a <a href="origin.html#policy-container" id="the-document-object:policy-container">policy container</a>), initially a new policy container, which contains policies which apply to the `Document`.

The `Document` has a permissions policy, which is a <a href="https://w3c.github.io/webappsec-feature-policy/#permissions-policy" id="the-document-object:concept-permissions-policy">permissions policy</a>, which is initially empty.

The `Document` has a module map, which is a <a href="webappapis.html#module-map" id="the-document-object:module-map">module map</a>, initially empty.

The `Document` has a cross-origin opener policy, which is a <a href="origin.html#cross-origin-opener-policy" id="the-document-object:cross-origin-opener-policy">cross-origin opener policy</a>.

The `Document` has an is initial `about:blank`, which is a boolean, initially false. A <a href="browsers.html#browsing-context" id="the-document-object:browsing-context">browsing context</a> browsingContext is still on its initial `about:blank` `Document` if browsingContext's <a href="history.html#session-history" id="the-document-object:session-history">session history</a>'s <a href="https://infra.spec.whatwg.org/#list-size" id="the-document-object:list-size">size</a> is 1 and browsingContext's <a href="history.html#session-history" id="the-document-object:session-history-2">session history</a>\[0\]'s <a href="history.html#she-document" id="the-document-object:she-document">document</a>'s <a href="#is-initial-about:blank" id="the-document-object:is-initial-about:blank">is initial <code>about:blank</code></a> is true.

The `Document` has a navigation id, which is a <a href="browsing-the-web.html#navigation-id" id="the-document-object:navigation-id">navigation id</a> or null.

#### <span class="secno">3.1.2</span> The `DocumentOrShadowRoot` interface<a href="#the-documentorshadowroot-interface" class="self-link"></a>

DOM defines the `DocumentOrShadowRoot` mixin, which this specification extends.

    partial interface mixin DocumentOrShadowRoot {
      readonly attribute Element? activeElement;
    };

#### <span class="secno">3.1.3</span> Resource metadata management<a href="#resource-metadata-management" class="self-link"></a>

`document.referrer`

**✔**MDN

[Document/referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer "The Document.referrer property returns the URI of the page that linked to this page.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera3+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

Returns the <a href="https://dom.spec.whatwg.org/#concept-document-url" id="resource-metadata-management:the-document&#39;s-address">URL</a> of the `Document` from which the user navigated to this one, unless it was blocked or there was no such document, in which case it returns the empty string.

The `noreferrer` link type can be used to block the referrer.

The `referrer` attribute must return <a href="#the-document&#39;s-referrer" id="resource-metadata-management:the-document&#39;s-referrer">the document's referrer</a>.

------------------------------------------------------------------------

`document.cookie [ = value ]`  
Returns the HTTP cookies that apply to the `Document`. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are <a href="origin.html#sandboxed-origin-browsing-context-flag" id="resource-metadata-management:sandboxed-origin-browsing-context-flag">sandboxed into a unique origin</a> (e.g. in an `iframe` with the `sandbox` attribute), a <a href="https://webidl.spec.whatwg.org/#securityerror" id="resource-metadata-management:securityerror">"<code>SecurityError</code>"</a> `DOMException` will be thrown on getting and setting.

**✔**MDN

[Document/cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie "The Document property cookie lets you read and write cookies associated with the document. It serves as a getter and setter for the actual values of the cookies.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera3+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

The `cookie` attribute represents the cookies of the resource identified by the document's <a href="https://dom.spec.whatwg.org/#concept-document-url" id="resource-metadata-management:the-document&#39;s-address-2">URL</a>.

A `Document` object that falls into one of the following conditions is a cookie-averse `Document` object:

-   A `Document` object whose <a href="browsers.html#concept-document-bc" id="resource-metadata-management:concept-document-bc">browsing context</a> is null.
-   A `Document` whose <a href="https://dom.spec.whatwg.org/#concept-document-url" id="resource-metadata-management:the-document&#39;s-address-3">URL</a>'s <a href="https://url.spec.whatwg.org/#concept-url-scheme" id="resource-metadata-management:concept-url-scheme">scheme</a> is not an <a href="https://fetch.spec.whatwg.org/#http-scheme" id="resource-metadata-management:http(s)-scheme">HTTP(S) scheme</a>.

<a href="https://infra.spec.whatwg.org/#tracking-vector" id="resource-metadata-management:tracking-vector" class="tracking-vector" title="There is a tracking vector here."><img src="https://resources.whatwg.org/tracking-vector.svg" alt="(This is a tracking vector.)" width="46" height="64" /></a> On getting, if the document is a <a href="#cookie-averse-document-object" id="resource-metadata-management:cookie-averse-document-object">cookie-averse <code>Document</code> object</a>, then the user agent must return the empty string. Otherwise, if the `Document`'s <a href="https://dom.spec.whatwg.org/#concept-document-origin" id="resource-metadata-management:concept-document-origin">origin</a> is an <a href="origin.html#concept-origin-opaque" id="resource-metadata-management:concept-origin-opaque">opaque origin</a>, the user agent must throw a <a href="https://webidl.spec.whatwg.org/#securityerror" id="resource-metadata-management:securityerror-2">"<code>SecurityError</code>"</a> `DOMException`. Otherwise, the user agent must return the <a href="infrastructure.html#cookie-string" id="resource-metadata-management:cookie-string">cookie-string</a> for the document's <a href="https://dom.spec.whatwg.org/#concept-document-url" id="resource-metadata-management:the-document&#39;s-address-4">URL</a> for a "non-HTTP" API, decoded using <a href="https://encoding.spec.whatwg.org/#utf-8-decode-without-bom" id="resource-metadata-management:utf-8-decode-without-bom">UTF-8 decode without BOM</a>. [\[COOKIES\]](references.html#refsCOOKIES)

On setting, if the document is a <a href="#cookie-averse-document-object" id="resource-metadata-management:cookie-averse-document-object-2">cookie-averse <code>Document</code> object</a>, then the user agent must do nothing. Otherwise, if the `Document`'s <a href="https://dom.spec.whatwg.org/#concept-document-origin" id="resource-metadata-management:concept-document-origin-2">origin</a> is an <a href="origin.html#concept-origin-opaque" id="resource-metadata-management:concept-origin-opaque-2">opaque origin</a>, the user agent must throw a <a href="https://webidl.spec.whatwg.org/#securityerror" id="resource-metadata-management:securityerror-3">"<code>SecurityError</code>"</a> `DOMException`. Otherwise, the user agent must act as it would when <a href="infrastructure.html#receives-a-set-cookie-string" id="resource-metadata-management:receives-a-set-cookie-string">receiving a set-cookie-string</a> for the document's <a href="https://dom.spec.whatwg.org/#concept-document-url" id="resource-metadata-management:the-document&#39;s-address-5">URL</a> via a "non-HTTP" API, consisting of the new value <a href="https://encoding.spec.whatwg.org/#utf-8-encode" id="resource-metadata-management:utf-8-encode">encoded as UTF-8</a>. [\[COOKIES\]](references.html#refsCOOKIES) [\[ENCODING\]](references.html#refsENCODING)

Since the `cookie` attribute is accessible across frames, the path restrictions on cookies are only a tool to help manage which cookies are sent to which parts of the site, and are not in any way a security feature.

The `cookie` attribute's getter and setter synchronously access shared state. Since there is no locking mechanism, other browsing contexts in a multiprocess user agent can modify cookies while scripts are running. A site could, for instance, try to read a cookie, increment its value, then write it back out, using the new value of the cookie as a unique identifier for the session; if the site does this twice in two different browser windows at the same time, it might end up using the same "unique" identifier for both sessions, with potentially disastrous effects.

------------------------------------------------------------------------

`document.lastModified`

**✔**MDN

[Document/lastModified](https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified "The lastModified property of the Document interface returns a string containing the date and time on which the current document was last modified.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns the date of the last modification to the document, as reported by the server, in the form "`MM/DD/YYYY hh:mm:ss`", in the user's local time zone.

If the last modification date is not known, the current time is returned instead.

The `lastModified` attribute, on getting, must return the date and time of the `Document`'s source file's last modification, in the user's local time zone, in the following format:

1.  The month component of the date.
2.  A U+002F SOLIDUS character (/).
3.  The day component of the date.
4.  A U+002F SOLIDUS character (/).
5.  The year component of the date.
6.  A U+0020 SPACE character.
7.  The hours component of the time.
8.  A U+003A COLON character (:).
9.  The minutes component of the time.
10. A U+003A COLON character (:).
11. The seconds component of the time.

All the numeric components above, other than the year, must be given as two <a href="https://infra.spec.whatwg.org/#ascii-digit" id="resource-metadata-management:ascii-digits">ASCII digits</a> representing the number in base ten, zero-padded if necessary. The year must be given as the shortest possible string of four or more <a href="https://infra.spec.whatwg.org/#ascii-digit" id="resource-metadata-management:ascii-digits-2">ASCII digits</a> representing the number in base ten, zero-padded if necessary.

The `Document`'s source file's last modification date and time must be derived from relevant features of the networking protocols used, e.g. from the value of the HTTP \``Last-Modified`\` header of the document, or from metadata in the file system for local files. If the last modification date and time are not known, the attribute must return the current date and time in the above format.

#### <span class="secno">3.1.4</span> Reporting document loading status<a href="#reporting-document-loading-status" class="self-link"></a>

`document.readyState`  
Returns "`loading`" while the `Document` is loading, "`interactive`" once it is finished parsing but still loading subresources, and "`complete`" once it has loaded.

The `readystatechange` event fires on the `Document` object when this value changes.

The `DOMContentLoaded` event fires after the transition to "`interactive`" but before the transition to "`complete`", at the point where all subresources apart from `async` `script` elements have loaded.

**✔**MDN

[Document/readyState](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState "The Document.readyState property describes the loading state of the document.")

Support in all current engines.

<span class="firefox yes">Firefox3.6+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera11+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer11</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android11+</span>

Each `Document` has a current document readiness, a string, initially "`complete`".

For `Document` objects created via the <a href="browsing-the-web.html#initialise-the-document-object" id="reporting-document-loading-status:initialise-the-document-object">create and initialize a <code>Document</code> object</a> algorithm, this will be immediately reset to "`loading`" before any script can observe the value of `document.readyState`. This default applies to other cases such as <a href="#is-initial-about:blank" id="reporting-document-loading-status:is-initial-about:blank">initial <code>about:blank</code></a> `Document`s or `Document`s without a <a href="browsers.html#concept-document-bc" id="reporting-document-loading-status:concept-document-bc">browsing context</a>.

The `readyState` getter steps are to return <a href="https://webidl.spec.whatwg.org/#this" id="reporting-document-loading-status:this">this</a>'s <a href="#current-document-readiness" id="reporting-document-loading-status:current-document-readiness">current document readiness</a>.

To update the current document readiness for `Document` document to readinessValue:

1.  If document's <a href="#current-document-readiness" id="reporting-document-loading-status:current-document-readiness-2">current document readiness</a> equals readinessValue, then return.
2.  Set document's <a href="#current-document-readiness" id="reporting-document-loading-status:current-document-readiness-3">current document readiness</a> to readinessValue.
3.  If document is associated with an <a href="parsing.html#html-parser" id="reporting-document-loading-status:html-parser">HTML parser</a>, then:

    1.  Let now be the <a href="https://w3c.github.io/hr-time/#dfn-current-high-resolution-time" id="reporting-document-loading-status:current-high-resolution-time">current high resolution time</a> given document's <a href="webappapis.html#concept-relevant-global" id="reporting-document-loading-status:concept-relevant-global">relevant global object</a>.
    2.  If readinessValue is "`complete`", and document's <a href="#load-timing-info" id="reporting-document-loading-status:load-timing-info">load timing info</a>'s <a href="#dom-complete-time" id="reporting-document-loading-status:dom-complete-time">DOM complete time</a> is 0, then set document's <a href="#load-timing-info" id="reporting-document-loading-status:load-timing-info-2">load timing info</a>'s <a href="#dom-complete-time" id="reporting-document-loading-status:dom-complete-time-2">DOM complete time</a> to now.
    3.  Otherwise, if readinessValue is "`interactive`", and document's <a href="#load-timing-info" id="reporting-document-loading-status:load-timing-info-3">load timing info</a>'s <a href="#dom-interactive-time" id="reporting-document-loading-status:dom-interactive-time">DOM interactive time</a> is 0, then set document's <a href="#load-timing-info" id="reporting-document-loading-status:load-timing-info-4">load timing info</a>'s <a href="#dom-interactive-time" id="reporting-document-loading-status:dom-interactive-time-2">DOM interactive time</a> to now.

4.  <a href="https://dom.spec.whatwg.org/#concept-event-fire" id="reporting-document-loading-status:concept-event-fire">Fire an event</a> named `readystatechange` at document.

------------------------------------------------------------------------

A `Document` is said to have an active parser if it is associated with an <a href="parsing.html#html-parser" id="reporting-document-loading-status:html-parser-2">HTML parser</a> or an <a href="xhtml.html#xml-parser" id="reporting-document-loading-status:xml-parser">XML parser</a> that has not yet been <a href="parsing.html#stop-parsing" id="reporting-document-loading-status:stop-parsing">stopped</a> or <a href="parsing.html#abort-a-parser" id="reporting-document-loading-status:abort-a-parser">aborted</a>.

------------------------------------------------------------------------

A `Document` has a <a href="#document-load-timing-info" id="reporting-document-loading-status:document-load-timing-info">document load timing info</a> load timing info.

A `Document` has a <a href="#document-unload-timing-info" id="reporting-document-loading-status:document-unload-timing-info">document unload timing info</a> previous document unload timing.

The document load timing info <a href="https://infra.spec.whatwg.org/#struct" id="reporting-document-loading-status:struct">struct</a> has the following <a href="https://infra.spec.whatwg.org/#struct-item" id="reporting-document-loading-status:struct-item">items</a>:

DOM interactive time (default 0)  
DOM content loaded event start time (default 0)  
DOM content loaded event end time (default 0)  
DOM complete time (default 0)  
load event start time (default 0)  
load event end time (default 0)  
`DOMHighResTimeStamp` values

The document unload timing info <a href="https://infra.spec.whatwg.org/#struct" id="reporting-document-loading-status:struct-2">struct</a> has the following <a href="https://infra.spec.whatwg.org/#struct-item" id="reporting-document-loading-status:struct-item-2">items</a>:

unload event start time (default 0)  
unload event end time (default 0)  
`DOMHighResTimeStamp` values

#### <span class="secno">3.1.5</span> DOM tree accessors<a href="#dom-tree-accessors" class="self-link"></a>

The `html` element of a document is its <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element">document element</a>, if it's an `html` element, and null otherwise.

------------------------------------------------------------------------

`document.head`

**✔**MDN

[Document/head](https://developer.mozilla.org/en-US/docs/Web/API/Document/head "The head read-only property of the Document interface returns the <head> element of the current document.")

Support in all current engines.

<span class="firefox yes">Firefox4+</span><span class="safari yes">Safari5+</span><span class="chrome yes">Chrome4+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera11+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer9+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS4+</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

Returns <a href="#the-head-element-2" id="dom-tree-accessors:the-head-element-2">the <code>head</code> element</a>.

The `head` element of a document is the first `head` element that is a child of <a href="#the-html-element-2" id="dom-tree-accessors:the-html-element-2">the <code>html</code> element</a>, if there is one, or null otherwise.

The `head` attribute, on getting, must return <a href="#the-head-element-2" id="dom-tree-accessors:the-head-element-2-2">the <code>head</code> element</a> of the document (a `head` element or null).

------------------------------------------------------------------------

`document.title [ = value ]`  
Returns the document's title, as given by <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2">the <code>title</code> element</a> for HTML and as given by the <a href="https://svgwg.org/svg2-draft/struct.html#TitleElement" id="dom-tree-accessors:svg-title">SVG <code>title</code></a> element for SVG.

Can be set, to update the document's title. If there is no appropriate element to update, the new value is ignored.

The `title` element of a document is the first `title` element in the document (in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="dom-tree-accessors:tree-order">tree order</a>), if there is one, or null otherwise.

**✔**MDN

[Document/title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title "The document.title property gets or sets the current title of the document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `title` attribute must, on getting, run the following algorithm:

1.  If the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-2">document element</a> is an <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="dom-tree-accessors:svg-svg">SVG <code>svg</code></a> element, then let value be the <a href="https://dom.spec.whatwg.org/#concept-child-text-content" id="dom-tree-accessors:child-text-content">child text content</a> of the first <a href="https://svgwg.org/svg2-draft/struct.html#TitleElement" id="dom-tree-accessors:svg-title-2">SVG <code>title</code></a> element that is a child of the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-3">document element</a>.
2.  Otherwise, let value be the <a href="https://dom.spec.whatwg.org/#concept-child-text-content" id="dom-tree-accessors:child-text-content-2">child text content</a> of <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2-2">the <code>title</code> element</a>, or the empty string if <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2-3">the <code>title</code> element</a> is null.
3.  <a href="https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace" id="dom-tree-accessors:strip-and-collapse-ascii-whitespace">Strip and collapse ASCII whitespace</a> in value.
4.  Return value.

On setting, the steps corresponding to the first matching condition in the following list must be run:

If the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-4">document element</a> is an <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="dom-tree-accessors:svg-svg-2">SVG <code>svg</code></a> element  
1.  If there is an <a href="https://svgwg.org/svg2-draft/struct.html#TitleElement" id="dom-tree-accessors:svg-title-3">SVG <code>title</code></a> element that is a child of the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-5">document element</a>, let element be the first such element.
2.  Otherwise:

    1.  Let element be the result of <a href="https://dom.spec.whatwg.org/#concept-create-element" id="dom-tree-accessors:create-an-element">creating an element</a> given the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-6">document element</a>'s <a href="https://dom.spec.whatwg.org/#concept-node-document" id="dom-tree-accessors:node-document">node document</a>, `title`, and the <a href="https://infra.spec.whatwg.org/#svg-namespace" id="dom-tree-accessors:svg-namespace">SVG namespace</a>.

    2.  Insert element as the <a href="https://dom.spec.whatwg.org/#concept-tree-first-child" id="dom-tree-accessors:first-child">first child</a> of the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-7">document element</a>.

3.  <a href="https://dom.spec.whatwg.org/#string-replace-all" id="dom-tree-accessors:string-replace-all">String replace all</a> with the given value within element.

If the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-8">document element</a> is in the <a href="https://infra.spec.whatwg.org/#html-namespace" id="dom-tree-accessors:html-namespace-2">HTML namespace</a>  
1.  If <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2-4">the <code>title</code> element</a> is null and <a href="#the-head-element-2" id="dom-tree-accessors:the-head-element-2-3">the <code>head</code> element</a> is null, then return.
2.  If <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2-5">the <code>title</code> element</a> is non-null, let element be <a href="#the-title-element-2" id="dom-tree-accessors:the-title-element-2-6">the <code>title</code> element</a>.
3.  Otherwise:

    1.  Let element be the result of <a href="https://dom.spec.whatwg.org/#concept-create-element" id="dom-tree-accessors:create-an-element-2">creating an element</a> given the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-9">document element</a>'s <a href="https://dom.spec.whatwg.org/#concept-node-document" id="dom-tree-accessors:node-document-2">node document</a>, `title`, and the <a href="https://infra.spec.whatwg.org/#html-namespace" id="dom-tree-accessors:html-namespace-2-2">HTML namespace</a>.

    2.  <a href="https://dom.spec.whatwg.org/#concept-node-append" id="dom-tree-accessors:concept-node-append">Append</a> element to <a href="#the-head-element-2" id="dom-tree-accessors:the-head-element-2-4">the <code>head</code> element</a>.

4.  <a href="https://dom.spec.whatwg.org/#string-replace-all" id="dom-tree-accessors:string-replace-all-2">String replace all</a> with the given value within element.

Otherwise  
Do nothing.

------------------------------------------------------------------------

`document.body [ = value ]`

**✔**MDN

[Document/body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body "The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.")

Support in all current engines.

<span class="firefox yes">Firefox60+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera9.6+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android60+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

Returns <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2">the body element</a>.

Can be set, to replace <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-2">the body element</a>.

If the new value is not a `body` or `frameset` element, this will throw a <a href="https://webidl.spec.whatwg.org/#hierarchyrequesterror" id="dom-tree-accessors:hierarchyrequesterror">"<code>HierarchyRequestError</code>"</a> `DOMException`.

The body element of a document is the first of <a href="#the-html-element-2" id="dom-tree-accessors:the-html-element-2-2">the <code>html</code> element</a>'s children that is either a `body` element or a `frameset` element, or null if there is no such element.

The `body` attribute, on getting, must return <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-3">the body element</a> of the document (either a `body` element, a `frameset` element, or null). On setting, the following algorithm must be run:

1.  If the new value is not a `body` or `frameset` element, then throw a <a href="https://webidl.spec.whatwg.org/#hierarchyrequesterror" id="dom-tree-accessors:hierarchyrequesterror-2">"<code>HierarchyRequestError</code>"</a> `DOMException`.
2.  Otherwise, if the new value is the same as <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-4">the body element</a>, return.
3.  Otherwise, if <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-5">the body element</a> is not null, then <a href="https://dom.spec.whatwg.org/#concept-node-replace" id="dom-tree-accessors:concept-node-replace">replace</a> <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-6">the body element</a> with the new value within <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-7">the body element</a>'s parent and return.
4.  Otherwise, if there is no <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-10">document element</a>, throw a <a href="https://webidl.spec.whatwg.org/#hierarchyrequesterror" id="dom-tree-accessors:hierarchyrequesterror-3">"<code>HierarchyRequestError</code>"</a> `DOMException`.
5.  Otherwise, <a href="#the-body-element-2" id="dom-tree-accessors:the-body-element-2-8">the body element</a> is null, but there's a <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-11">document element</a>. <a href="https://dom.spec.whatwg.org/#concept-node-append" id="dom-tree-accessors:concept-node-append-2">Append</a> the new value to the <a href="https://dom.spec.whatwg.org/#document-element" id="dom-tree-accessors:document-element-12">document element</a>.

The value returned by the `body` getter is not always the one passed to the setter.

In this example, the setter successfully inserts a `body` element (though this is non-conforming since SVG does not allow a `body` as child of <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="dom-tree-accessors:svg-svg-3">SVG <code>svg</code></a>). However the getter will return null because the document element is not `html`.

    <svg xmlns="http://www.w3.org/2000/svg">
     <script>
      document.body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
      console.assert(document.body === null);
     </script>
    </svg>

------------------------------------------------------------------------

`document.images`

**✔**MDN

[Document/images](https://developer.mozilla.org/en-US/docs/Web/API/Document/images "The images read-only property of the Document interface returns a collection of the images in the current HTML document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns an `HTMLCollection` of the `img` elements in the `Document`.

`document.embeds`

**✔**MDN

[Document/embeds](https://developer.mozilla.org/en-US/docs/Web/API/Document/embeds "The embeds read-only property of the Document interface returns a list of the embedded <embed> elements within the current document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari10.1+</span><span class="chrome yes">Chrome64+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera51+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS10.3+</span><span class="chrome_android yes">Chrome Android64+</span><span class="webview_android yes">WebView Android64+</span><span class="samsunginternet_android yes">Samsung Internet9.0+</span><span class="opera_android yes">Opera Android47+</span>

`document.plugins`

**✔**MDN

[Document/plugins](https://developer.mozilla.org/en-US/docs/Web/API/Document/plugins "The plugins read-only property of the Document interface returns an HTMLCollection object containing one or more HTMLEmbedElements representing the <embed> elements in the current document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari10.1+</span><span class="chrome yes">Chrome64+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera51+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS10.3+</span><span class="chrome_android yes">Chrome Android64+</span><span class="webview_android yes">WebView Android64+</span><span class="samsunginternet_android yes">Samsung Internet9.0+</span><span class="opera_android yes">Opera Android47+</span>

Returns an `HTMLCollection` of the `embed` elements in the `Document`.

`document.links`

**✔**MDN

[Document/links](https://developer.mozilla.org/en-US/docs/Web/API/Document/links "The links read-only property of the Document interface returns a collection of all <area> elements and <a> elements in a document with a value for the href attribute.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns an `HTMLCollection` of the `a` and `area` elements in the `Document` that have `href` attributes.

`document.forms`

**✔**MDN

[Document/forms](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms "The forms read-only property of the Document interface returns an HTMLCollection listing all the <form> elements contained in the document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns an `HTMLCollection` of the `form` elements in the `Document`.

`document.scripts`

**✔**MDN

[Document/scripts](https://developer.mozilla.org/en-US/docs/Web/API/Document/scripts "The scripts property of the Document interface returns a list of the <script> elements in the document. The returned object is an HTMLCollection.")

Support in all current engines.

<span class="firefox yes">Firefox9+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer4+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android9+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns an `HTMLCollection` of the `script` elements in the `Document`.

The `images` attribute must return an `HTMLCollection` rooted at the `Document` node, whose filter matches only `img` elements.

The `embeds` attribute must return an `HTMLCollection` rooted at the `Document` node, whose filter matches only `embed` elements.

The `plugins` attribute must return the same object as that returned by the `embeds` attribute.

The `links` attribute must return an `HTMLCollection` rooted at the `Document` node, whose filter matches only `a` elements with `href` attributes and `area` elements with `href` attributes.

The `forms` attribute must return an `HTMLCollection` rooted at the `Document` node, whose filter matches only `form` elements.

The `scripts` attribute must return an `HTMLCollection` rooted at the `Document` node, whose filter matches only `script` elements.

------------------------------------------------------------------------

`collection = document.getElementsByName(name)`

**✔**MDN

[Document/getElementsByName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName "The getElementsByName() method of the Document object returns a NodeList Collection of elements with a given name attribute in the document.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera5+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

Returns a `NodeList` of elements in the `Document` that have a `name` attribute with the value name.

The `getElementsByName(elementName)` method steps are to return a <a href="infrastructure.html#live" id="dom-tree-accessors:live">live</a> `NodeList` containing all the <a href="infrastructure.html#html-elements" id="dom-tree-accessors:html-elements">HTML elements</a> in that document that have a `name` attribute whose value is <a href="https://infra.spec.whatwg.org/#string-is" id="dom-tree-accessors:identical-to">identical to</a> the elementName argument, in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="dom-tree-accessors:tree-order-2">tree order</a>. When the method is invoked on a `Document` object again with the same argument, the user agent may return the same as the object returned by the earlier call. In other cases, a new `NodeList` object must be returned.

------------------------------------------------------------------------

`document.currentScript`

**✔**MDN

[Document/currentScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript "The Document.currentScript property returns the <script> element whose script is currently being processed and isn't a JavaScript module. (For modules use import.meta instead.)")

Support in all current engines.

<span class="firefox yes">Firefox4+</span><span class="safari yes">Safari8+</span><span class="chrome yes">Chrome29+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera16+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS8+</span><span class="chrome_android yes">Chrome Android29+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet2.0+</span><span class="opera_android yes">Opera Android16+</span>

Returns the `script` element, or the <a href="https://svgwg.org/svg2-draft/interact.html#ScriptElement" id="dom-tree-accessors:svg-script">SVG <code>script</code></a> element, that is currently executing, as long as the element represents a <a href="webappapis.html#classic-script" id="dom-tree-accessors:classic-script">classic script</a>. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the `Document` is not currently executing a `script` or <a href="https://svgwg.org/svg2-draft/interact.html#ScriptElement" id="dom-tree-accessors:svg-script-2">SVG <code>script</code></a> element (e.g., because the running script is an event handler, or a timeout), or if the currently executing `script` or <a href="https://svgwg.org/svg2-draft/interact.html#ScriptElement" id="dom-tree-accessors:svg-script-3">SVG <code>script</code></a> element represents a <a href="webappapis.html#module-script" id="dom-tree-accessors:module-script">module script</a>.

The `currentScript` attribute, on getting, must return the value to which it was most recently set. When the `Document` is created, the `currentScript` must be initialized to null.

This API has fallen out of favor in the implementer and standards community, as it globally exposes `script` or <a href="https://svgwg.org/svg2-draft/interact.html#ScriptElement" id="dom-tree-accessors:svg-script-4">SVG <code>script</code></a> elements. As such, it is not available in newer contexts, such as when running <a href="webappapis.html#module-script" id="dom-tree-accessors:module-script-2">module scripts</a> or when running scripts in a <a href="https://dom.spec.whatwg.org/#concept-shadow-tree" id="dom-tree-accessors:shadow-tree">shadow tree</a>. We are looking into creating a new solution for identifying the running script in such contexts, which does not make it globally available: see [issue \#1013](https://github.com/whatwg/html/issues/1013).

------------------------------------------------------------------------

The `Document` interface <a href="https://webidl.spec.whatwg.org/#dfn-support-named-properties" id="dom-tree-accessors:support-named-properties">supports named properties</a>. The <a href="https://webidl.spec.whatwg.org/#dfn-supported-property-names" id="dom-tree-accessors:supported-property-names">supported property names</a> of a `Document` object document at any moment consist of the following, in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="dom-tree-accessors:tree-order-3">tree order</a> according to the element that contributed them, ignoring later duplicates, and with values from `id` attributes coming before values from `name` attributes when the same element contributes both:

-   the value of the `name` content attribute for all <a href="#exposed" id="dom-tree-accessors:exposed">exposed</a> `embed`, `form`, `iframe`, `img`, and <a href="#exposed" id="dom-tree-accessors:exposed-2">exposed</a> `object` elements that have a non-empty `name` content attribute and are <a href="https://dom.spec.whatwg.org/#in-a-document-tree" id="dom-tree-accessors:in-a-document-tree">in a document tree</a> with document as their <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="dom-tree-accessors:root">root</a>;

-   the value of the `id` content attribute for all <a href="#exposed" id="dom-tree-accessors:exposed-3">exposed</a> `object` elements that have a non-empty `id` content attribute and are <a href="https://dom.spec.whatwg.org/#in-a-document-tree" id="dom-tree-accessors:in-a-document-tree-2">in a document tree</a> with document as their <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="dom-tree-accessors:root-2">root</a>; and
-   the value of the `id` content attribute for all `img` elements that have both a non-empty `id` content attribute and a non-empty `name` content attribute, and are <a href="https://dom.spec.whatwg.org/#in-a-document-tree" id="dom-tree-accessors:in-a-document-tree-3">in a document tree</a> with document as their <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="dom-tree-accessors:root-3">root</a>.

To <a href="https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property" id="dom-tree-accessors:determine-the-value-of-a-named-property">determine the value of a named property</a> name for a `Document`, the user agent must return the value obtained using the following steps:

1.  Let elements be the list of <a href="#dom-document-nameditem-filter" id="dom-tree-accessors:dom-document-nameditem-filter">named elements</a> with the name name that are <a href="https://dom.spec.whatwg.org/#in-a-document-tree" id="dom-tree-accessors:in-a-document-tree-4">in a document tree</a> with the `Document` as their <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="dom-tree-accessors:root-4">root</a>.

    There will be at least one such element, by definition.

2.  If elements has only one element, and that element is an `iframe` element, and that `iframe` element's <a href="browsers.html#nested-browsing-context" id="dom-tree-accessors:nested-browsing-context">nested browsing context</a> is not null, then return the `WindowProxy` object of the element's <a href="browsers.html#nested-browsing-context" id="dom-tree-accessors:nested-browsing-context-2">nested browsing context</a>.

3.  Otherwise, if elements has only one element, return that element.

4.  Otherwise return an `HTMLCollection` rooted at the `Document` node, whose filter matches only <a href="#dom-document-nameditem-filter" id="dom-tree-accessors:dom-document-nameditem-filter-2">named elements</a> with the name name.

Named elements with the name name, for the purposes of the above algorithm, are those that are either:

-   <a href="#exposed" id="dom-tree-accessors:exposed-4">Exposed</a> `embed`, `form`, `iframe`, `img`, or <a href="#exposed" id="dom-tree-accessors:exposed-5">exposed</a> `object` elements that have a `name` content attribute whose value is name, or
-   <a href="#exposed" id="dom-tree-accessors:exposed-6">Exposed</a> `object` elements that have an `id` content attribute whose value is name, or
-   `img` elements that have an `id` content attribute whose value is name, and that have a non-empty `name` content attribute present also.

An `embed` or `object` element is said to be exposed if it has no <a href="#exposed" id="dom-tree-accessors:exposed-7">exposed</a> `object` ancestor, and, for `object` elements, is additionally either not showing its <a href="#fallback-content" id="dom-tree-accessors:fallback-content">fallback content</a> or has no `object` or `embed` descendants.

------------------------------------------------------------------------

The `dir` attribute on the `Document` interface is defined along with the `dir` content attribute.

### <span class="secno">3.2</span> Elements<a href="#elements" class="self-link"></a>

#### <span class="secno">3.2.1</span> Semantics<a href="#semantics-2" class="self-link"></a>

Elements, attributes, and attribute values in HTML are defined (by this specification) to have certain meanings (semantics). For example, the `ol` element represents an ordered list, and the `lang` attribute represents the language of the content.

These definitions allow HTML processors, such as web browsers or search engines, to present and use documents and applications in a wide variety of contexts that the author might not have considered.

As a simple example, consider a web page written by an author who only considered desktop computer web browsers:

    <!DOCTYPE HTML>
    <html lang="en">
     <head>
      <title>My Page</title>
     </head>
     <body>
      <h1>Welcome to my page</h1>
      <p>I like cars and lorries and have a big Jeep!</p>
      <h2>Where I live</h2>
      <p>I live in a small hut on a mountain!</p>
     </body>
    </html>

Because HTML conveys *meaning*, rather than presentation, the same page can also be used by a small browser on a mobile phone, without any change to the page. Instead of headings being in large letters as on the desktop, for example, the browser on the mobile phone might use the same size text for the whole page, but with the headings in bold.

But it goes further than just differences in screen size: the same page could equally be used by a blind user using a browser based around speech synthesis, which instead of displaying the page on a screen, reads the page to the user, e.g. using headphones. Instead of large text for the headings, the speech browser might use a different volume or a slower voice.

That's not all, either. Since the browsers know which parts of the page are the headings, they can create a document outline that the user can use to quickly navigate around the document, using keys for "jump to next heading" or "jump to previous heading". Such features are especially common with speech browsers, where users would otherwise find quickly navigating a page quite difficult.

Even beyond browsers, software can make use of this information. Search engines can use the headings to more effectively index a page, or to provide quick links to subsections of the page from their results. Tools can use the headings to create a table of contents (that is in fact how this very specification's table of contents is generated).

This example has focused on headings, but the same principle applies to all of the semantics in HTML.

Authors must not use elements, attributes, or attribute values for purposes other than their appropriate intended semantic purpose, as doing so prevents software from correctly processing the page.

For example, the following snippet, intended to represent the heading of a corporate site, is non-conforming because the second line is not intended to be a heading of a subsection, but merely a subheading or subtitle (a subordinate heading for the same section).

    <body>
     <h1>ACME Corporation</h1>
     <h2>The leaders in arbitrary fast delivery since 1920</h2>
     ...

The `hgroup` element is intended for these kinds of situations:

    <body>
     <hgroup>
      <h1>ACME Corporation</h1>
      <h2>The leaders in arbitrary fast delivery since 1920</h2>
     </hgroup>
     ...

The document in this next example is similarly non-conforming, despite being syntactically correct, because the data placed in the cells is clearly not tabular data, and the `cite` element mis-used:

    <!DOCTYPE HTML>
    <html lang="en-GB">
     <head> <title> Demonstration </title> </head>
     <body>
      <table>
       <tr> <td> My favourite animal is the cat. </td> </tr>
       <tr>
        <td>
         —<a href="https://example.org/~ernest/"><cite>Ernest</cite></a>,
         in an essay from 1992
        </td>
       </tr>
      </table>
     </body>
    </html>

This would make software that relies on these semantics fail: for example, a speech browser that allowed a blind user to navigate tables in the document would report the quote above as a table, confusing the user; similarly, a tool that extracted titles of works from pages would extract "Ernest" as the title of a work, even though it's actually a person's name, not a title.

A corrected version of this document might be:

    <!DOCTYPE HTML>
    <html lang="en-GB">
     <head> <title> Demonstration </title> </head>
     <body>
      <blockquote>
       <p> My favourite animal is the cat. </p>
      </blockquote>
      <p>
       —<a href="https://example.org/~ernest/">Ernest</a>,
       in an essay from 1992
      </p>
     </body>
    </html>

Authors must not use elements, attributes, or attribute values that are not permitted by this specification or <a href="infrastructure.html#other-applicable-specifications" id="semantics-2:other-applicable-specifications">other applicable specifications</a>, as doing so makes it significantly harder for the language to be extended in the future.

In the next example, there is a non-conforming attribute value ("carpet") and a non-conforming attribute ("texture"), which is not permitted by this specification:

    <label>Carpet: <input type="carpet" name="c" texture="deep pile"></label>

Here would be an alternative and correct way to mark this up:

    <label>Carpet: <input type="text" class="carpet" name="c" data-texture="deep pile"></label>

DOM nodes whose <a href="https://dom.spec.whatwg.org/#concept-node-document" id="semantics-2:node-document">node document</a>'s <a href="browsers.html#concept-document-bc" id="semantics-2:concept-document-bc">browsing context</a> is null are exempt from all document conformance requirements other than the [HTML syntax](syntax.html#writing) requirements and [XML syntax](xhtml.html#writing-xhtml-documents) requirements.

In particular, the `template` element's <a href="scripting.html#template-contents" id="semantics-2:template-contents">template contents</a>'s <a href="https://dom.spec.whatwg.org/#concept-node-document" id="semantics-2:node-document-2">node document</a>'s <a href="browsers.html#concept-document-bc" id="semantics-2:concept-document-bc-2">browsing context</a> is null. For example, the <a href="#concept-element-content-model" id="semantics-2:concept-element-content-model">content model</a> requirements and attribute value microsyntax requirements do not apply to a `template` element's <a href="scripting.html#template-contents" id="semantics-2:template-contents-2">template contents</a>. In this example an `img` element has attribute values that are placeholders that would be invalid outside a `template` element.

    <template>
     <article>
      <img src="{{src}}" alt="{{alt}}">
      <h1></h1>
     </article>
    </template>

However, if the above markup were to omit the `</h1>` end tag, that would be a violation of the [HTML syntax](syntax.html#writing), and would thus be flagged as an error by conformance checkers.

Through scripting and using other mechanisms, the values of attributes, text, and indeed the entire structure of the document may change dynamically while a user agent is processing it. The semantics of a document at an instant in time are those represented by the state of the document at that instant in time, and the semantics of a document can therefore change over time. User agents must update their presentation of the document as this occurs.

HTML has a `progress` element that describes a progress bar. If its "value" attribute is dynamically updated by a script, the UA would update the rendering to show the progress changing.

#### <span class="secno">3.2.2</span> Elements in the DOM<a href="#elements-in-the-dom" class="self-link"></a>

The nodes representing <a href="infrastructure.html#html-elements" id="elements-in-the-dom:html-elements">HTML elements</a> in the DOM must implement, and expose to scripts, the interfaces listed for them in the relevant sections of this specification. This includes <a href="infrastructure.html#html-elements" id="elements-in-the-dom:html-elements-2">HTML elements</a> in <a href="https://dom.spec.whatwg.org/#xml-document" id="elements-in-the-dom:xml-documents">XML documents</a>, even when those documents are in another context (e.g. inside an XSLT transform).

Elements in the DOM represent things; that is, they have intrinsic *meaning*, also known as semantics.

For example, an `ol` element represents an ordered list.

Elements can be referenced (referred to) in some way, either explicitly or implicitly. One way that an element in the DOM can be explicitly referenced is by giving an `id` attribute to the element, and then creating a <a href="links.html#hyperlink" id="elements-in-the-dom:hyperlink">hyperlink</a> with that `id` attribute's value as the <a href="browsing-the-web.html#navigate-fragid" id="elements-in-the-dom:navigate-fragid">fragment</a> for the <a href="links.html#hyperlink" id="elements-in-the-dom:hyperlink-2">hyperlink</a>'s `href` attribute value. Hyperlinks are not necessary for a reference, however; any manner of referring to the element in question will suffice.

Consider the following `figure` element, which is given an `id` attribute:

    <figure id="module-script-graph">
      <img src="module-script-graph.svg"
           alt="Module A depends on module B, which depends
                on modules C and D.">
      <figcaption>Figure 27: a simple module graph</figcaption>
    </figure>

A <a href="links.html#hyperlink" id="elements-in-the-dom:hyperlink-3">hyperlink</a>-based <a href="#referenced" id="elements-in-the-dom:referenced">reference</a> could be created using the `a` element, like so:

    As we can see in <a href="#module-script-graph">figure 27</a>, ...

However, there are many other ways of <a href="#referenced" id="elements-in-the-dom:referenced-2">referencing</a> the `figure` element, such as:

-   "As depicted in the figure of modules A, B, C, and D..."
-   "In Figure 27..." (without a hyperlink)
-   "From the contents of the 'simple module graph' figure..."
-   "In the figure below..." (but [this is discouraged](grouping-content.html#figure-note-about-references))

The basic interface, from which all the <a href="infrastructure.html#html-elements" id="elements-in-the-dom:html-elements-3">HTML elements</a>' interfaces inherit, and which must be used by elements that have no additional requirements, is the `HTMLElement` interface.

**✔**MDN

[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement "The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari1.3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera8+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

[HTMLUnknownElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement "The HTMLUnknownElement interface represents an invalid HTML element and derives from the HTMLElement interface, but without implementing any additional properties or methods.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari6+</span><span class="chrome yes">Chrome15+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer9+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS6+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

    [Exposed=Window]
    interface HTMLElement : Element {
      [HTMLConstructor] constructor();

      // metadata attributes
      [CEReactions] attribute DOMString title;
      [CEReactions] attribute DOMString lang;
      [CEReactions] attribute boolean translate;
      [CEReactions] attribute DOMString dir;

      // user interaction
      [CEReactions] attribute boolean hidden;
      undefined click();
      [CEReactions] attribute DOMString accessKey;
      readonly attribute DOMString accessKeyLabel;
      [CEReactions] attribute boolean draggable;
      [CEReactions] attribute boolean spellcheck;
      [CEReactions] attribute DOMString autocapitalize;

      [CEReactions] attribute [LegacyNullToEmptyString] DOMString innerText;
      [CEReactions] attribute [LegacyNullToEmptyString] DOMString outerText;

      ElementInternals attachInternals();
    };

    HTMLElement includes GlobalEventHandlers;
    HTMLElement includes DocumentAndElementEventHandlers;
    HTMLElement includes ElementContentEditable;
    HTMLElement includes HTMLOrSVGElement;

    [Exposed=Window]
    interface HTMLUnknownElement : HTMLElement {
      // Note: intentionally no [HTMLConstructor]
    };

The `HTMLElement` interface holds methods and attributes related to a number of disparate features, and the members of this interface are therefore described in various different sections of this specification.

------------------------------------------------------------------------

The <a href="https://dom.spec.whatwg.org/#concept-element-interface" id="elements-in-the-dom:element-interface">element interface</a> for an element with name name in the <a href="https://infra.spec.whatwg.org/#html-namespace" id="elements-in-the-dom:html-namespace-2">HTML namespace</a> is determined as follows:

1.  If name is `applet`, `bgsound`, `blink`, `isindex`, `keygen`, `multicol`, `nextid`, or `spacer`, then return `HTMLUnknownElement`.
2.  If name is `acronym`, `basefont`, `big`, `center`, `nobr`, `noembed`, `noframes`, `plaintext`, `rb`, `rtc`, `strike`, or `tt`, then return `HTMLElement`.
3.  If name is `listing` or `xmp`, then return `HTMLPreElement`.
4.  Otherwise, if this specification defines an interface appropriate for the <a href="infrastructure.html#element-type" id="elements-in-the-dom:element-type">element type</a> corresponding to the local name name, then return that interface.
5.  If <a href="infrastructure.html#other-applicable-specifications" id="elements-in-the-dom:other-applicable-specifications">other applicable specifications</a> define an appropriate interface for name, then return the interface they define.
6.  If name is a <a href="custom-elements.html#valid-custom-element-name" id="elements-in-the-dom:valid-custom-element-name">valid custom element name</a>, then return `HTMLElement`.

7.  Return `HTMLUnknownElement`.

The use of `HTMLElement` instead of `HTMLUnknownElement` in the case of <a href="custom-elements.html#valid-custom-element-name" id="elements-in-the-dom:valid-custom-element-name-2">valid custom element names</a> is done to ensure that any potential future <a href="custom-elements.html#upgrades" id="elements-in-the-dom:upgrades">upgrades</a> only cause a linear transition of the element's prototype chain, from `HTMLElement` to a subclass, instead of a lateral one, from `HTMLUnknownElement` to an unrelated subclass.

Features shared between HTML and SVG elements use the `HTMLOrSVGElement` interface mixin: [\[SVG\]](references.html#refsSVG)

    interface mixin HTMLOrSVGElement {
      [SameObject] readonly attribute DOMStringMap dataset;
      attribute DOMString nonce; // intentionally no [CEReactions]

      [CEReactions] attribute boolean autofocus;
      [CEReactions] attribute long tabIndex;
      undefined focus(optional FocusOptions options = {});
      undefined blur();
    };

An example of an element that is neither an HTML nor SVG element is one created as follows:

    const el = document.createElementNS("some namespace", "example");
    console.assert(el.constructor === Element);

#### <span class="secno">3.2.3</span> HTML element constructors<a href="#html-element-constructors" class="self-link"></a>

To support the [custom elements](custom-elements.html#custom-elements) feature, all HTML elements have special constructor behavior. This is indicated via the `[HTMLConstructor]` IDL <a href="https://webidl.spec.whatwg.org/#dfn-extended-attribute" id="html-element-constructors:extended-attribute">extended attribute</a>. It indicates that the interface object for the given interface will have a specific behavior when called, as defined in detail below.

The `[HTMLConstructor]` extended attribute must take no arguments, and must only appear on <a href="https://webidl.spec.whatwg.org/#idl-constructors" id="html-element-constructors:constructor-operation">constructor operations</a>. It must appear only once on a constructor operation, and the interface must contain only the single, annotated constructor operation, and no others. The annotated constructor operation must be declared to take no arguments.

Interfaces declared with constructor operations that are annotated with the `[HTMLConstructor]` extended attribute have the following <a href="https://webidl.spec.whatwg.org/#overridden-constructor-steps" id="html-element-constructors:overridden-constructor-steps">overridden constructor steps</a>:

1.  Let registry be the <a href="webappapis.html#current-global-object" id="html-element-constructors:current-global-object">current global object</a>'s `CustomElementRegistry` object.
2.  If <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget">NewTarget</a> is equal to the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object">active function object</a>, then throw a `TypeError`.

    This can occur when a custom element is defined using an <a href="https://dom.spec.whatwg.org/#concept-element-interface" id="html-element-constructors:element-interface">element interface</a> as its constructor:

        customElements.define("bad-1", HTMLButtonElement);
        new HTMLButtonElement();          // (1)
        document.createElement("bad-1");  // (2)

    In this case, during the execution of `HTMLButtonElement` (either explicitly, as in (1), or implicitly, as in (2)), both the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-2">active function object</a> and <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-2">NewTarget</a> are `HTMLButtonElement`. If this check was not present, it would be possible to create an instance of `HTMLButtonElement` whose local name was `bad-1`.

3.  Let definition be the entry in registry with <a href="custom-elements.html#concept-custom-element-definition-constructor" id="html-element-constructors:concept-custom-element-definition-constructor">constructor</a> equal to <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-3">NewTarget</a>. If there is no such definition, then throw a `TypeError`.

    Since there can be no entry in registry with a <a href="custom-elements.html#concept-custom-element-definition-constructor" id="html-element-constructors:concept-custom-element-definition-constructor-2">constructor</a> of undefined, this step also prevents HTML element constructors from being called as functions (since in that case <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-4">NewTarget</a> will be undefined).

4.  Let is value be null.
5.  If definition's <a href="custom-elements.html#concept-custom-element-definition-local-name" id="html-element-constructors:concept-custom-element-definition-local-name">local name</a> is equal to definition's <a href="custom-elements.html#concept-custom-element-definition-name" id="html-element-constructors:concept-custom-element-definition-name">name</a> (i.e., definition is for an <a href="custom-elements.html#autonomous-custom-element" id="html-element-constructors:autonomous-custom-element">autonomous custom element</a>), then:

    1.  If the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-3">active function object</a> is not `HTMLElement`, then throw a `TypeError`.

        This can occur when a custom element is defined to not extend any local names, but inherits from a non-`HTMLElement` class:

            customElements.define("bad-2", class Bad2 extends HTMLParagraphElement {});

        In this case, during the (implicit) `super()` call that occurs when constructing an instance of `Bad2`, the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-4">active function object</a> is `HTMLParagraphElement`, not `HTMLElement`.

6.  Otherwise (i.e., if definition is for a <a href="custom-elements.html#customized-built-in-element" id="html-element-constructors:customized-built-in-element">customized built-in element</a>):

    1.  Let valid local names be the list of local names for elements defined in this specification or in <a href="infrastructure.html#other-applicable-specifications" id="html-element-constructors:other-applicable-specifications">other applicable specifications</a> that use the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-5">active function object</a> as their <a href="https://dom.spec.whatwg.org/#concept-element-interface" id="html-element-constructors:element-interface-2">element interface</a>.
    2.  If valid local names does not contain definition's <a href="custom-elements.html#concept-custom-element-definition-local-name" id="html-element-constructors:concept-custom-element-definition-local-name-2">local name</a>, then throw a `TypeError`.

        This can occur when a custom element is defined to extend a given local name but inherits from the wrong class:

            customElements.define("bad-3", class Bad3 extends HTMLQuoteElement {}, { extends: "p" });

        In this case, during the (implicit) `super()` call that occurs when constructing an instance of `Bad3`, valid local names is the list containing `q` and `blockquote`, but definition's <a href="custom-elements.html#concept-custom-element-definition-local-name" id="html-element-constructors:concept-custom-element-definition-local-name-3">local name</a> is `p`, which is not in that list.

    3.  Set is value to definition's <a href="custom-elements.html#concept-custom-element-definition-name" id="html-element-constructors:concept-custom-element-definition-name-2">name</a>.

7.  If definition's <a href="custom-elements.html#concept-custom-element-definition-construction-stack" id="html-element-constructors:concept-custom-element-definition-construction-stack">construction stack</a> is empty, then:

    1.  Let element be the result of <a href="https://webidl.spec.whatwg.org/#internally-create-a-new-object-implementing-the-interface" id="html-element-constructors:internally-create-a-new-object-implementing-the-interface">internally creating a new object implementing the interface</a> to which the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-6">active function object</a> corresponds, given the <a href="https://tc39.es/ecma262/#current-realm" id="html-element-constructors:current-realm-record">current Realm Record</a> and <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-5">NewTarget</a>.
    2.  Set element's <a href="https://dom.spec.whatwg.org/#concept-node-document" id="html-element-constructors:node-document">node document</a> to the <a href="webappapis.html#current-global-object" id="html-element-constructors:current-global-object-2">current global object</a>'s <a href="window-object.html#concept-document-window" id="html-element-constructors:concept-document-window">associated <code>Document</code></a>.
    3.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-namespace" id="html-element-constructors:concept-element-namespace">namespace</a> to the <a href="https://infra.spec.whatwg.org/#html-namespace" id="html-element-constructors:html-namespace-2">HTML namespace</a>.
    4.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-namespace-prefix" id="html-element-constructors:concept-element-namespace-prefix">namespace prefix</a> to null.
    5.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-local-name" id="html-element-constructors:concept-element-local-name">local name</a> to definition's <a href="custom-elements.html#concept-custom-element-definition-local-name" id="html-element-constructors:concept-custom-element-definition-local-name-4">local name</a>.
    6.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-custom-element-state" id="html-element-constructors:custom-element-state">custom element state</a> to "`custom`".
    7.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-custom-element-definition" id="html-element-constructors:concept-element-custom-element-definition">custom element definition</a> to definition.
    8.  Set element's <a href="https://dom.spec.whatwg.org/#concept-element-is-value" id="html-element-constructors:concept-element-is-value"><code>is</code> value</a> to is value.
    9.  Return element.

    This occurs when author script constructs a new custom element directly, e.g. via `new MyCustomElement()`.

8.  Let prototype be <a href="https://tc39.es/ecma262/#sec-get-o-p" id="html-element-constructors:js-get">Get</a>(<a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-6">NewTarget</a>, "prototype"). Rethrow any exceptions.
9.  If <a href="https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values" id="html-element-constructors:js-type">Type</a>(prototype) is not Object, then:

    1.  Let realm be <a href="https://tc39.es/ecma262/#sec-getfunctionrealm" id="html-element-constructors:getfunctionrealm">GetFunctionRealm</a>(<a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-7">NewTarget</a>).
    2.  Set prototype to the <a href="https://webidl.spec.whatwg.org/#dfn-interface-prototype-object" id="html-element-constructors:interface-prototype-object">interface prototype object</a> of realm whose interface is the same as the interface of the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-7">active function object</a>.

    The realm of the <a href="https://tc39.es/ecma262/#active-function-object" id="html-element-constructors:active-function-object-8">active function object</a> might not be realm, so we are using the more general concept of "the same interface" across realms; we are not looking for equality of <a href="https://webidl.spec.whatwg.org/#dfn-interface-object" id="html-element-constructors:interface-object">interface objects</a>. This fallback behavior, including using the realm of <a href="https://tc39.es/ecma262/#sec-built-in-function-objects" id="html-element-constructors:newtarget-8">NewTarget</a> and looking up the appropriate prototype there, is designed to match analogous behavior for the JavaScript built-ins and Web IDL's <a href="https://webidl.spec.whatwg.org/#internally-create-a-new-object-implementing-the-interface" id="html-element-constructors:internally-create-a-new-object-implementing-the-interface-2">internally create a new object implementing the interface</a> algorithm.

10. Let element be the last entry in definition's <a href="custom-elements.html#concept-custom-element-definition-construction-stack" id="html-element-constructors:concept-custom-element-definition-construction-stack-2">construction stack</a>.
11. If element is an <a href="custom-elements.html#concept-already-constructed-marker" id="html-element-constructors:concept-already-constructed-marker"><em>already constructed</em> marker</a>, then throw an <a href="https://webidl.spec.whatwg.org/#invalidstateerror" id="html-element-constructors:invalidstateerror">"<code>InvalidStateError</code>"</a> `DOMException`.

    This can occur when the author code inside the <a href="custom-elements.html#custom-element-constructor" id="html-element-constructors:custom-element-constructor">custom element constructor</a> [non-conformantly](custom-elements.html#custom-element-conformance) creates another instance of the class being constructed, before calling `super()`:

        let doSillyThing = false;

        class DontDoThis extends HTMLElement {
          constructor() {
            if (doSillyThing) {
              doSillyThing = false;
              new DontDoThis();
              // Now the construction stack will contain an already constructed marker.
            }

            // This will then fail with an "InvalidStateError" DOMException:
            super();
          }
        }

    This can also occur when author code inside the <a href="custom-elements.html#custom-element-constructor" id="html-element-constructors:custom-element-constructor-2">custom element constructor</a> [non-conformantly](custom-elements.html#custom-element-conformance) calls `super()` twice, since per the JavaScript specification, this actually executes the superclass constructor (i.e. this algorithm) twice, before throwing an error:

        class DontDoThisEither extends HTMLElement {
          constructor() {
            super();

            // This will throw, but not until it has already called into the HTMLElement constructor
            super();
          }
        }

12. Perform element.\[\[SetPrototypeOf\]\](prototype). Rethrow any exceptions.
13. Replace the last entry in definition's <a href="custom-elements.html#concept-custom-element-definition-construction-stack" id="html-element-constructors:concept-custom-element-definition-construction-stack-3">construction stack</a> with an <a href="custom-elements.html#concept-already-constructed-marker" id="html-element-constructors:concept-already-constructed-marker-2"><em>already constructed</em> marker</a>.
14. Return element.

    This step is normally reached when <a href="custom-elements.html#upgrades" id="html-element-constructors:upgrades">upgrading</a> a custom element; the existing element is returned, so that the `super()` call inside the <a href="custom-elements.html#custom-element-constructor" id="html-element-constructors:custom-element-constructor-3">custom element constructor</a> assigns that existing element to **this**.

------------------------------------------------------------------------

In addition to the constructor behavior implied by `[HTMLConstructor]`, some elements also have <a href="https://webidl.spec.whatwg.org/#dfn-named-constructor" id="html-element-constructors:named-constructor">named constructors</a> (which are really factory functions with a modified `prototype` property).

Named constructors for HTML elements can also be used in an `extends` clause when defining a <a href="custom-elements.html#custom-element-constructor" id="html-element-constructors:custom-element-constructor-4">custom element constructor</a>:

    class AutoEmbiggenedImage extends Image {
      constructor(width, height) {
        super(width * 10, height * 10);
      }
    }

    customElements.define("auto-embiggened", AutoEmbiggenedImage, { extends: "img" });

    const image = new AutoEmbiggenedImage(15, 20);
    console.assert(image.width === 150);
    console.assert(image.height === 200);

#### <span class="secno">3.2.4</span> Element definitions<a href="#element-definitions" class="self-link"></a>

Each element in this specification has a definition that includes the following information:

Categories  
A list of <a href="#content-categories" id="element-definitions:content-categories">categories</a> to which the element belongs. These are used when defining the <a href="#content-models" id="element-definitions:content-models">content models</a> for each element.

Contexts in which this element can be used  
A *non-normative* description of where the element can be used. This information is redundant with the content models of elements that allow this one as a child, and is provided only as a convenience.

For simplicity, only the most specific expectations are listed.

For example, all <a href="#phrasing-content-2" id="element-definitions:phrasing-content-2">phrasing content</a> is <a href="#flow-content-2" id="element-definitions:flow-content-2">flow content</a>. Thus, elements that are <a href="#phrasing-content-2" id="element-definitions:phrasing-content-2-2">phrasing content</a> will only be listed as "where <a href="#phrasing-content-2" id="element-definitions:phrasing-content-2-3">phrasing content</a> is expected", since this is the more-specific expectation. Anywhere that expects <a href="#flow-content-2" id="element-definitions:flow-content-2-2">flow content</a> also expects <a href="#phrasing-content-2" id="element-definitions:phrasing-content-2-4">phrasing content</a>, and thus also meets this expectation.

Content model  
A normative description of what content must be included as children and descendants of the element.

Tag omission in text/html  
A *non-normative* description of whether, in the `text/html` syntax, the <a href="syntax.html#syntax-start-tag" id="element-definitions:syntax-start-tag">start</a> and <a href="syntax.html#syntax-end-tag" id="element-definitions:syntax-end-tag">end</a> tags can be omitted. This information is redundant with the normative requirements given in the <a href="syntax.html#syntax-tag-omission" id="element-definitions:syntax-tag-omission">optional tags</a> section, and is provided in the element definitions only as a convenience.

Content attributes  
A normative list of attributes that may be specified on the element (except where otherwise disallowed), along with non-normative descriptions of those attributes. (The content to the left of the dash is normative, the content to the right of the dash is not.)

Accessibility considerations  
For authors: Conformance requirements for use of ARIA `role` and `aria-*` attributes are defined in ARIA in HTML. [\[ARIA\]](references.html#refsARIA) [\[ARIAHTML\]](references.html#refsARIAHTML)

For implementers: User agent requirements for implementing accessibility API semantics are defined in HTML Accessibility API Mappings. [\[HTMLAAM\]](references.html#refsHTMLAAM)

DOM interface  
A normative definition of a DOM interface that such elements must implement.

This is then followed by a description of what the element <a href="#represents" id="element-definitions:represents">represents</a>, along with any additional normative conformance criteria that may apply to authors and implementations. Examples are sometimes also included.

##### <span class="secno">3.2.4.1</span> Attributes<a href="#attributes" class="self-link"></a>

An attribute value is a string. Except where otherwise specified, attribute values on <a href="infrastructure.html#html-elements" id="attributes:html-elements">HTML elements</a> may be any string value, including the empty string, and there is no restriction on what text can be specified in such attribute values.

#### <span class="secno">3.2.5</span> Content models<a href="#content-models" class="self-link"></a>

Each element defined in this specification has a content model: a description of the element's expected <a href="#concept-html-contents" id="content-models:concept-html-contents">contents</a>. An <a href="infrastructure.html#html-elements" id="content-models:html-elements">HTML element</a> must have contents that match the requirements described in the element's content model. The contents of an element are its children in the DOM.

<a href="https://infra.spec.whatwg.org/#ascii-whitespace" id="content-models:space-characters">ASCII whitespace</a> is always allowed between elements. User agents represent these characters between elements in the source markup as `Text` nodes in the DOM. Empty `Text` nodes and `Text` nodes consisting of just sequences of those characters are considered inter-element whitespace.

<a href="#inter-element-whitespace" id="content-models:inter-element-whitespace">Inter-element whitespace</a>, comment nodes, and processing instruction nodes must be ignored when establishing whether an element's contents match the element's content model or not, and must be ignored when following algorithms that define document and element semantics.

Thus, an element A is said to be *preceded or followed* by a second element B if A and B have the same parent node and there are no other element nodes or `Text` nodes (other than <a href="#inter-element-whitespace" id="content-models:inter-element-whitespace-2">inter-element whitespace</a>) between them. Similarly, a node is the *only child* of an element if that element contains no other nodes other than <a href="#inter-element-whitespace" id="content-models:inter-element-whitespace-3">inter-element whitespace</a>, comment nodes, and processing instruction nodes.

Authors must not use <a href="infrastructure.html#html-elements" id="content-models:html-elements-2">HTML elements</a> anywhere except where they are explicitly allowed, as defined for each element, or as explicitly required by other specifications. For XML compound documents, these contexts could be inside elements from other namespaces, if those elements are defined as providing the relevant contexts.

The Atom Syndication Format defines a `content` element. When its `type` attribute has the value `xhtml`, The Atom Syndication Format requires that it contain a single HTML `div` element. Thus, a `div` element is allowed in that context, even though this is not explicitly normatively stated by this specification. [\[ATOM\]](references.html#refsATOM)

In addition, <a href="infrastructure.html#html-elements" id="content-models:html-elements-3">HTML elements</a> may be orphan nodes (i.e. without a parent node).

For example, creating a `td` element and storing it in a global variable in a script is conforming, even though `td` elements are otherwise only supposed to be used inside `tr` elements.

    var data = {
      name: "Banana",
      cell: document.createElement('td'),
    };

##### <span class="secno">3.2.5.1</span> The "nothing" content model<a href="#the-nothing-content-model" class="self-link"></a>

When an element's content model is nothing, the element must contain no `Text` nodes (other than <a href="#inter-element-whitespace" id="the-nothing-content-model:inter-element-whitespace">inter-element whitespace</a>) and no element nodes.

Most HTML elements whose content model is "nothing" are also, for convenience, <a href="syntax.html#void-elements" id="the-nothing-content-model:void-elements">void elements</a> (elements that have no <a href="syntax.html#syntax-end-tag" id="the-nothing-content-model:syntax-end-tag">end tag</a> in the [HTML syntax](syntax.html#syntax)). However, these are entirely separate concepts.

##### <span class="secno">3.2.5.2</span> Kinds of content<a href="#kinds-of-content" class="self-link"></a>

Each element in HTML falls into zero or more categories that group elements with similar characteristics together. The following broad categories are used in this specification:

-   <a href="#metadata-content-2" id="kinds-of-content:metadata-content-2">Metadata content</a>
-   <a href="#flow-content-2" id="kinds-of-content:flow-content-2">Flow content</a>
-   <a href="#sectioning-content-2" id="kinds-of-content:sectioning-content-2">Sectioning content</a>
-   <a href="#heading-content-2" id="kinds-of-content:heading-content-2">Heading content</a>
-   <a href="#phrasing-content-2" id="kinds-of-content:phrasing-content-2">Phrasing content</a>
-   <a href="#embedded-content-category" id="kinds-of-content:embedded-content-category">Embedded content</a>
-   <a href="#interactive-content-2" id="kinds-of-content:interactive-content-2">Interactive content</a>

Some elements also fall into other categories, which are defined in other parts of this specification.

These categories are related as follows:

Sectioning content, heading content, phrasing content, embedded content, and interactive content are all types of flow content. Metadata is sometimes flow content. Metadata and interactive content are sometimes phrasing content. Embedded content is also a type of phrasing content, and sometimes is interactive content.

Other categories are also used for specific purposes, e.g. form controls are specified using a number of categories to define common requirements. Some elements have unique requirements and do not fit into any particular category.

###### <span class="secno">3.2.5.2.1</span> Metadata content<a href="#metadata-content" class="self-link"></a>

Metadata content is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.

-   `base`
-   `link`
-   `meta`
-   `noscript`
-   `script`
-   `style`
-   `template`
-   `title`

Elements from other namespaces whose semantics are primarily metadata-related (e.g. RDF) are also <a href="#metadata-content-2" id="metadata-content:metadata-content-2">metadata content</a>.

Thus, in the XML serialization, one can use RDF, like this:

    <html xmlns="http://www.w3.org/1999/xhtml"
          xmlns:r="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xml:lang="en">
     <head>
      <title>Hedral's Home Page</title>
      <r:RDF>
       <Person xmlns="http://www.w3.org/2000/10/swap/pim/contact#"
               r:about="https://hedral.example.com/#">
        <fullName>Cat Hedral</fullName>
        <mailbox r:resource="mailto:hedral@damowmow.com"/>
        <personalTitle>Sir</personalTitle>
       </Person>
      </r:RDF>
     </head>
     <body>
      <h1>My home page</h1>
      <p>I like playing with string, I guess. Sister says squirrels are fun
      too so sometimes I follow her to play with them.</p>
     </body>
    </html>

This isn't possible in the HTML serialization, however.

###### <span class="secno">3.2.5.2.2</span> Flow content<a href="#flow-content" class="self-link"></a>

Most elements that are used in the body of documents and applications are categorized as flow content.

-   `a`
-   `abbr`
-   `address`
-   `area` (if it is a descendant of a `map` element)
-   `article`
-   `aside`
-   `audio`
-   `b`
-   `bdi`
-   `bdo`
-   `blockquote`
-   `br`
-   `button`
-   `canvas`
-   `cite`
-   `code`
-   `data`
-   `datalist`
-   `del`
-   `details`
-   `dfn`
-   `dialog`
-   `div`
-   `dl`
-   `em`
-   `embed`
-   `fieldset`
-   `figure`
-   `footer`
-   `form`
-   `h1`
-   `h2`
-   `h3`
-   `h4`
-   `h5`
-   `h6`
-   `header`
-   `hgroup`
-   `hr`
-   `i`
-   `iframe`
-   `img`
-   `input`
-   `ins`
-   `kbd`
-   `label`
-   `link` (if it is <a href="semantics.html#allowed-in-the-body" id="flow-content:allowed-in-the-body">allowed in the body</a>)
-   `main` (if it is a <a href="grouping-content.html#hierarchically-correct-main-element" id="flow-content:hierarchically-correct-main-element">hierarchically correct <code>main</code> element</a>)
-   `map`
-   `mark`
-   <a href="https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel" id="flow-content:mathml-math">MathML <code>math</code></a>
-   `menu`
-   `meta` (if the `itemprop` attribute is present)
-   `meter`
-   `nav`
-   `noscript`
-   `object`
-   `ol`
-   `output`
-   `p`
-   `picture`
-   `pre`
-   `progress`
-   `q`
-   `ruby`
-   `s`
-   `samp`
-   `script`
-   `section`
-   `select`
-   `slot`
-   `small`
-   `span`
-   `strong`
-   `sub`
-   `sup`
-   <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="flow-content:svg-svg">SVG <code>svg</code></a>
-   `table`
-   `template`
-   `textarea`
-   `time`
-   `u`
-   `ul`
-   `var`
-   `video`
-   `wbr`
-   <a href="custom-elements.html#autonomous-custom-element" id="flow-content:autonomous-custom-element">autonomous custom elements</a>
-   <a href="#text-content" id="flow-content:text-content">text</a>

###### <span class="secno">3.2.5.2.3</span> Sectioning content<a href="#sectioning-content" class="self-link"></a>

Sectioning content is content that defines the scope of <a href="#heading-content-2" id="sectioning-content:heading-content-2">headings</a> and <a href="sections.html#the-footer-element" id="sectioning-content:the-footer-element">footers</a>.

-   `article`
-   `aside`
-   `nav`
-   `section`

Each <a href="#sectioning-content-2" id="sectioning-content:sectioning-content-2">sectioning content</a> element potentially has a heading and an <a href="sections.html#outline" id="sectioning-content:outline">outline</a>. See the section on <a href="sections.html#headings-and-sections" id="sectioning-content:headings-and-sections">headings and sections</a> for further details.

There are also certain elements that are <a href="sections.html#sectioning-root" id="sectioning-content:sectioning-root">sectioning roots</a>. These are distinct from <a href="#sectioning-content-2" id="sectioning-content:sectioning-content-2-2">sectioning content</a>, but they can also have an <a href="sections.html#outline" id="sectioning-content:outline-2">outline</a>.

###### <span class="secno">3.2.5.2.4</span> Heading content<a href="#heading-content" class="self-link"></a>

Heading content defines the header of a section (whether explicitly marked up using <a href="#sectioning-content-2" id="heading-content:sectioning-content-2">sectioning content</a> elements, or implied by the heading content itself).

-   `h1`
-   `h2`
-   `h3`
-   `h4`
-   `h5`
-   `h6`
-   `hgroup`

###### <span class="secno">3.2.5.2.5</span> Phrasing content<a href="#phrasing-content" class="self-link"></a>

Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of <a href="#phrasing-content-2" id="phrasing-content:phrasing-content-2">phrasing content</a> form <a href="#paragraph" id="phrasing-content:paragraph">paragraphs</a>.

-   `a`
-   `abbr`
-   `area` (if it is a descendant of a `map` element)
-   `audio`
-   `b`
-   `bdi`
-   `bdo`
-   `br`
-   `button`
-   `canvas`
-   `cite`
-   `code`
-   `data`
-   `datalist`
-   `del`
-   `dfn`
-   `em`
-   `embed`
-   `i`
-   `iframe`
-   `img`
-   `input`
-   `ins`
-   `kbd`
-   `label`
-   `link` (if it is <a href="semantics.html#allowed-in-the-body" id="phrasing-content:allowed-in-the-body">allowed in the body</a>)
-   `map`
-   `mark`
-   <a href="https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel" id="phrasing-content:mathml-math">MathML <code>math</code></a>
-   `meta` (if the `itemprop` attribute is present)
-   `meter`
-   `noscript`
-   `object`
-   `output`
-   `picture`
-   `progress`
-   `q`
-   `ruby`
-   `s`
-   `samp`
-   `script`
-   `select`
-   `slot`
-   `small`
-   `span`
-   `strong`
-   `sub`
-   `sup`
-   <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="phrasing-content:svg-svg">SVG <code>svg</code></a>
-   `template`
-   `textarea`
-   `time`
-   `u`
-   `var`
-   `video`
-   `wbr`
-   <a href="custom-elements.html#autonomous-custom-element" id="phrasing-content:autonomous-custom-element">autonomous custom elements</a>
-   <a href="#text-content" id="phrasing-content:text-content">text</a>

Most elements that are categorized as phrasing content can only contain elements that are themselves categorized as phrasing content, not any flow content.

Text, in the context of content models, means either nothing, or `Text` nodes. <a href="#text-content" id="phrasing-content:text-content-2">Text</a> is sometimes used as a content model on its own, but is also <a href="#phrasing-content-2" id="phrasing-content:phrasing-content-2-2">phrasing content</a>, and can be <a href="#inter-element-whitespace" id="phrasing-content:inter-element-whitespace">inter-element whitespace</a> (if the `Text` nodes are empty or contain just <a href="https://infra.spec.whatwg.org/#ascii-whitespace" id="phrasing-content:space-characters">ASCII whitespace</a>).

`Text` nodes and attribute values must consist of <a href="https://infra.spec.whatwg.org/#scalar-value" id="phrasing-content:scalar-value">scalar values</a>, excluding <a href="https://infra.spec.whatwg.org/#noncharacter" id="phrasing-content:noncharacter">noncharacters</a>, and <a href="https://infra.spec.whatwg.org/#control" id="phrasing-content:control">controls</a> other than <a href="https://infra.spec.whatwg.org/#ascii-whitespace" id="phrasing-content:space-characters-2">ASCII whitespace</a>. This specification includes extra constraints on the exact value of `Text` nodes and attribute values depending on their precise context.

###### <span class="secno">3.2.5.2.6</span> Embedded content<a href="#embedded-content-2" class="self-link"></a>

Embedded content is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

-   `audio`
-   `canvas`
-   `embed`
-   `iframe`
-   `img`
-   <a href="https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel" id="embedded-content-2:mathml-math">MathML <code>math</code></a>
-   `object`
-   `picture`
-   <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="embedded-content-2:svg-svg">SVG <code>svg</code></a>
-   `video`

Elements that are from namespaces other than the <a href="https://infra.spec.whatwg.org/#html-namespace" id="embedded-content-2:html-namespace-2">HTML namespace</a> and that convey content but not metadata, are <a href="#embedded-content-category" id="embedded-content-2:embedded-content-category">embedded content</a> for the purposes of the content models defined in this specification. (For example, MathML or SVG.)

Some embedded content elements can have fallback content: content that is to be used when the external resource cannot be used (e.g. because it is of an unsupported format). The element definitions state what the fallback is, if any.

###### <span class="secno">3.2.5.2.7</span> Interactive content<a href="#interactive-content" class="self-link"></a>

Interactive content is content that is specifically intended for user interaction.

-   `a` (if the `href` attribute is present)
-   `audio` (if the `controls` attribute is present)
-   `button`
-   `details`
-   `embed`
-   `iframe`
-   `img` (if the `usemap` attribute is present)
-   `input` (if the `type` attribute is *not* in the <a href="input.html#hidden-state-(type=hidden)" id="interactive-content:hidden-state-(type=hidden)">Hidden</a> state)
-   `label`
-   `select`
-   `textarea`
-   `video` (if the `controls` attribute is present)

###### <span class="secno">3.2.5.2.8</span> Palpable content<a href="#palpable-content" class="self-link"></a>

As a general rule, elements whose content model allows any <a href="#flow-content-2" id="palpable-content:flow-content-2">flow content</a> or <a href="#phrasing-content-2" id="palpable-content:phrasing-content-2">phrasing content</a> should have at least one node in its <a href="#concept-html-contents" id="palpable-content:concept-html-contents">contents</a> that is palpable content and that does not have the `hidden` attribute specified.

<a href="#palpable-content-2" id="palpable-content:palpable-content-2">Palpable content</a> makes an element non-empty by providing either some descendant non-empty <a href="#text-content" id="palpable-content:text-content">text</a>, or else something users can hear (`audio` elements) or view (`video`, `img`, or `canvas` elements) or otherwise interact with (for example, interactive form controls).

This requirement is not a hard requirement, however, as there are many cases where an element can be empty legitimately, for example when it is used as a placeholder which will later be filled in by a script, or when the element is part of a template and would on most pages be filled in but on some pages is not relevant.

Conformance checkers are encouraged to provide a mechanism for authors to find elements that fail to fulfill this requirement, as an authoring aid.

The following elements are palpable content:

-   `a`
-   `abbr`
-   `address`
-   `article`
-   `aside`
-   `audio` (if the `controls` attribute is present)
-   `b`
-   `bdi`
-   `bdo`
-   `blockquote`
-   `button`
-   `canvas`
-   `cite`
-   `code`
-   `data`
-   `details`
-   `dfn`
-   `div`
-   `dl` (if the element's children include at least one name-value group)
-   `em`
-   `embed`
-   `fieldset`
-   `figure`
-   `footer`
-   `form`
-   `h1`
-   `h2`
-   `h3`
-   `h4`
-   `h5`
-   `h6`
-   `header`
-   `hgroup`
-   `i`
-   `iframe`
-   `img`
-   `input` (if the `type` attribute is *not* in the <a href="input.html#hidden-state-(type=hidden)" id="palpable-content:hidden-state-(type=hidden)">Hidden</a> state)
-   `ins`
-   `kbd`
-   `label`
-   `main`
-   `map`
-   `mark`
-   <a href="https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel" id="palpable-content:mathml-math">MathML <code>math</code></a>
-   `menu` (if the element's children include at least one `li` element)
-   `meter`
-   `nav`
-   `object`
-   `ol` (if the element's children include at least one `li` element)
-   `output`
-   `p`
-   `pre`
-   `progress`
-   `q`
-   `ruby`
-   `s`
-   `samp`
-   `section`
-   `select`
-   `small`
-   `span`
-   `strong`
-   `sub`
-   `sup`
-   <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="palpable-content:svg-svg">SVG <code>svg</code></a>
-   `table`
-   `textarea`
-   `time`
-   `u`
-   `ul` (if the element's children include at least one `li` element)
-   `var`
-   `video`
-   <a href="custom-elements.html#autonomous-custom-element" id="palpable-content:autonomous-custom-element">autonomous custom elements</a>
-   <a href="#text-content" id="palpable-content:text-content-2">text</a> that is not <a href="#inter-element-whitespace" id="palpable-content:inter-element-whitespace">inter-element whitespace</a>

###### <span class="secno">3.2.5.2.9</span> Script-supporting elements<a href="#script-supporting-elements" class="self-link"></a>

Script-supporting elements are those that do not <a href="#represents" id="script-supporting-elements:represents">represent</a> anything themselves (i.e. they are not rendered), but are used to support scripts, e.g. to provide functionality for the user.

The following elements are script-supporting elements:

-   `script`
-   `template`

##### <span class="secno">3.2.5.3</span> Transparent content models<a href="#transparent-content-models" class="self-link"></a>

Some elements are described as transparent; they have "transparent" in the description of their content model. The content model of a <a href="#transparent" id="transparent-content-models:transparent">transparent</a> element is derived from the content model of its parent element: the elements required in the part of the content model that is "transparent" are the same elements as required in the part of the content model of the parent of the transparent element in which the transparent element finds itself.

For instance, an `ins` element inside a `ruby` element cannot contain an `rt` element, because the part of the `ruby` element's content model that allows `ins` elements is the part that allows <a href="#phrasing-content-2" id="transparent-content-models:phrasing-content-2">phrasing content</a>, and the `rt` element is not <a href="#phrasing-content-2" id="transparent-content-models:phrasing-content-2-2">phrasing content</a>.

In some cases, where transparent elements are nested in each other, the process has to be applied iteratively.

Consider the following markup fragment:

    <p><object><param><ins><map><a href="/">Apples</a></map></ins></object></p>

To check whether "Apples" is allowed inside the `a` element, the content models are examined. The `a` element's content model is transparent, as is the `map` element's, as is the `ins` element's, as is the part of the `object` element's in which the `ins` element is found. The `object` element is found in the `p` element, whose content model is <a href="#phrasing-content-2" id="transparent-content-models:phrasing-content-2-3">phrasing content</a>. Thus, "Apples" is allowed, as text is phrasing content.

When a transparent element has no parent, then the part of its content model that is "transparent" must instead be treated as accepting any <a href="#flow-content-2" id="transparent-content-models:flow-content-2">flow content</a>.

##### <span class="secno">3.2.5.4</span> Paragraphs<a href="#paragraphs" class="self-link"></a>

The term <a href="#paragraph" id="paragraphs:paragraph">paragraph</a> as defined in this section is used for more than just the definition of the `p` element. The <a href="#paragraph" id="paragraphs:paragraph-2">paragraph</a> concept defined here is used to describe how to interpret documents. The `p` element is merely one of several ways of marking up a <a href="#paragraph" id="paragraphs:paragraph-3">paragraph</a>.

A paragraph is typically a run of <a href="#phrasing-content-2" id="paragraphs:phrasing-content-2">phrasing content</a> that forms a block of text with one or more sentences that discuss a particular topic, as in typography, but can also be used for more general thematic grouping. For instance, an address is also a paragraph, as is a part of a form, a byline, or a stanza in a poem.

In the following example, there are two paragraphs in a section. There is also a heading, which contains phrasing content that is not a paragraph. Note how the comments and <a href="#inter-element-whitespace" id="paragraphs:inter-element-whitespace">inter-element whitespace</a> do not form paragraphs.

    <section>
      <h1>Example of paragraphs</h1>
      This is the <em>first</em> paragraph in this example.
      <p>This is the second.</p>
      <!-- This is not a paragraph. -->
    </section>

Paragraphs in <a href="#flow-content-2" id="paragraphs:flow-content-2">flow content</a> are defined relative to what the document looks like without the `a`, `ins`, `del`, and `map` elements complicating matters, since those elements, with their hybrid content models, can straddle paragraph boundaries, as shown in the first two examples below.

Generally, having elements straddle paragraph boundaries is best avoided. Maintaining such markup can be difficult.

The following example takes the markup from the earlier example and puts `ins` and `del` elements around some of the markup to show that the text was changed (though in this case, the changes admittedly don't make much sense). Notice how this example has exactly the same paragraphs as the previous one, despite the `ins` and `del` elements — the `ins` element straddles the heading and the first paragraph, and the `del` element straddles the boundary between the two paragraphs.

    <section>
      <ins><h1>Example of paragraphs</h1>
      This is the <em>first</em> paragraph in</ins> this example<del>.
      <p>This is the second.</p></del>
      <!-- This is not a paragraph. -->
    </section>

Let view be a view of the DOM that replaces all `a`, `ins`, `del`, and `map` elements in the document with their <a href="#concept-html-contents" id="paragraphs:concept-html-contents">contents</a>. Then, in view, for each run of sibling <a href="#phrasing-content-2" id="paragraphs:phrasing-content-2-2">phrasing content</a> nodes uninterrupted by other types of content, in an element that accepts content other than <a href="#phrasing-content-2" id="paragraphs:phrasing-content-2-3">phrasing content</a> as well as <a href="#phrasing-content-2" id="paragraphs:phrasing-content-2-4">phrasing content</a>, let first be the first node of the run, and let last be the last node of the run. For each such run that consists of at least one node that is neither <a href="#embedded-content-category" id="paragraphs:embedded-content-category">embedded content</a> nor <a href="#inter-element-whitespace" id="paragraphs:inter-element-whitespace-2">inter-element whitespace</a>, a paragraph exists in the original DOM from immediately before first to immediately after last. (Paragraphs can thus span across `a`, `ins`, `del`, and `map` elements.)

Conformance checkers may warn authors of cases where they have paragraphs that overlap each other (this can happen with `object`, `video`, `audio`, and `canvas` elements, and indirectly through elements in other namespaces that allow HTML to be further embedded therein, like <a href="https://svgwg.org/svg2-draft/struct.html#SVGElement" id="paragraphs:svg-svg">SVG <code>svg</code></a> or <a href="https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel" id="paragraphs:mathml-math">MathML <code>math</code></a>).

A <a href="#paragraph" id="paragraphs:paragraph-4">paragraph</a> is also formed explicitly by `p` elements.

The `p` element can be used to wrap individual paragraphs when there would otherwise not be any content other than phrasing content to separate the paragraphs from each other.

In the following example, the link spans half of the first paragraph, all of the heading separating the two paragraphs, and half of the second paragraph. It straddles the paragraphs and the heading.

    <header>
     Welcome!
     <a href="about.html">
      This is home of...
      <h1>The Falcons!</h1>
      The Lockheed Martin multirole jet fighter aircraft!
     </a>
     This page discusses the F-16 Fighting Falcon's innermost secrets.
    </header>

Here is another way of marking this up, this time showing the paragraphs explicitly, and splitting the one link element into three:

    <header>
     <p>Welcome! <a href="about.html">This is home of...</a></p>
     <h1><a href="about.html">The Falcons!</a></h1>
     <p><a href="about.html">The Lockheed Martin multirole jet
     fighter aircraft!</a> This page discusses the F-16 Fighting
     Falcon's innermost secrets.</p>
    </header>

It is possible for paragraphs to overlap when using certain elements that define fallback content. For example, in the following section:

    <section>
     <h1>My Cats</h1>
     You can play with my cat simulator.
     <object data="cats.sim">
      To see the cat simulator, use one of the following links:
      <ul>
       <li><a href="cats.sim">Download simulator file</a>
       <li><a href="https://sims.example.com/watch?v=LYds5xY4INU">Use online simulator</a>
      </ul>
      Alternatively, upgrade to the Mellblom Browser.
     </object>
     I'm quite proud of it.
    </section>

There are five paragraphs:

1.  The paragraph that says "You can play with my cat simulator. *object* I'm quite proud of it.", where *object* is the `object` element.
2.  The paragraph that says "To see the cat simulator, use one of the following links:".
3.  The paragraph that says "Download simulator file".
4.  The paragraph that says "Use online simulator".
5.  The paragraph that says "Alternatively, upgrade to the Mellblom Browser.".

The first paragraph is overlapped by the other four. A user agent that supports the "cats.sim" resource will only show the first one, but a user agent that shows the fallback will confusingly show the first sentence of the first paragraph as if it was in the same paragraph as the second one, and will show the last paragraph as if it was at the start of the second sentence of the first paragraph.

To avoid this confusion, explicit `p` elements can be used. For example:

    <section>
     <h1>My Cats</h1>
     <p>You can play with my cat simulator.</p>
     <object data="cats.sim">
      <p>To see the cat simulator, use one of the following links:</p>
      <ul>
       <li><a href="cats.sim">Download simulator file</a>
       <li><a href="https://sims.example.com/watch?v=LYds5xY4INU">Use online simulator</a>
      </ul>
      <p>Alternatively, upgrade to the Mellblom Browser.</p>
     </object>
     <p>I'm quite proud of it.</p>
    </section>

#### <span class="secno">3.2.6</span> Global attributes<a href="#global-attributes" class="self-link"></a>

MDN

[Global\_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes "Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.")

The following attributes are common to and may be specified on all <a href="infrastructure.html#html-elements" id="global-attributes:html-elements">HTML elements</a> (even those not defined in this specification):

-   `accesskey`
-   `autocapitalize`
-   `autofocus`
-   `contenteditable`
-   `dir`
-   `draggable`
-   `enterkeyhint`
-   `hidden`
-   `inputmode`
-   `is`
-   `itemid`
-   `itemprop`
-   `itemref`
-   `itemscope`
-   `itemtype`
-   `lang`
-   `nonce`
-   `spellcheck`
-   `style`
-   `tabindex`
-   `title`
-   `translate`

These attributes are only defined by this specification as attributes for <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-2">HTML elements</a>. When this specification refers to elements having these attributes, elements from namespaces that are not defined as having these attributes must not be considered as being elements with these attributes.

For example, in the following XML fragment, the "`bogus`" element does not have a `dir` attribute as defined in this specification, despite having an attribute with the literal name "`dir`". Thus, <a href="#the-directionality" id="global-attributes:the-directionality">the directionality</a> of the inner-most `span` element is '<a href="#concept-rtl" id="global-attributes:concept-rtl">rtl</a>', inherited from the `div` element indirectly through the "`bogus`" element.

    <div xmlns="http://www.w3.org/1999/xhtml" dir="rtl">
     <bogus xmlns="https://example.net/ns" dir="ltr">
      <span xmlns="http://www.w3.org/1999/xhtml">
      </span>
     </bogus>
    </div>

------------------------------------------------------------------------

**✔**MDN

[Global\_attributes/slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot "The slot global attribute assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the <slot> element whose name attribute's value matches that slot attribute's value.")

Support in all current engines.

<span class="firefox yes">Firefox63+</span><span class="safari yes">Safari10+</span><span class="chrome yes">Chrome53+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera40+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge no">Edge (Legacy)No</span><span class="ie unknown">Internet Explorer?</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android63+</span><span class="safari_ios yes">Safari iOS10+</span><span class="chrome_android yes">Chrome Android53+</span><span class="webview_android yes">WebView Android53+</span><span class="samsunginternet_android yes">Samsung Internet6.0+</span><span class="opera_android yes">Opera Android41+</span>

DOM defines the user agent requirements for the `class`, `id`, and `slot` attributes for any element in any namespace. [\[DOM\]](references.html#refsDOM)

The `class`, `id`, and `slot` attributes may be specified on all <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-3">HTML elements</a>.

When specified on <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-4">HTML elements</a>, the `class` attribute must have a value that is a <a href="common-microsyntaxes.html#set-of-space-separated-tokens" id="global-attributes:set-of-space-separated-tokens">set of space-separated tokens</a> representing the various classes that the element belongs to.

Assigning classes to an element affects class matching in selectors in CSS, the `getElementsByClassName()` method in the DOM, and other such features.

There are no additional restrictions on the tokens authors can use in the `class` attribute, but authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content.

When specified on <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-5">HTML elements</a>, the `id` attribute value must be unique amongst all the <a href="https://dom.spec.whatwg.org/#concept-id" id="global-attributes:concept-id">IDs</a> in the element's <a href="https://dom.spec.whatwg.org/#concept-tree" id="global-attributes:tree">tree</a> and must contain at least one character. The value must not contain any <a href="https://infra.spec.whatwg.org/#ascii-whitespace" id="global-attributes:space-characters">ASCII whitespace</a>.

The `id` attribute specifies its element's <a href="https://dom.spec.whatwg.org/#concept-id" id="global-attributes:concept-id-2">unique identifier (ID)</a>.

There are no other restrictions on what form an ID can take; in particular, IDs can consist of just digits, start with a digit, start with an underscore, consist of just punctuation, etc.

An element's <a href="https://dom.spec.whatwg.org/#concept-id" id="global-attributes:concept-id-3">unique identifier</a> can be used for a variety of purposes, most notably as a way to link to specific parts of a document using <a href="https://url.spec.whatwg.org/#concept-url-fragment" id="global-attributes:concept-url-fragment">fragments</a>, as a way to target an element when scripting, and as a way to style a specific element from CSS.

Identifiers are opaque strings. Particular meanings should not be derived from the value of the `id` attribute.

There are no conformance requirements for the `slot` attribute specific to <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-6">HTML elements</a>.

The `slot` attribute is used to <a href="https://dom.spec.whatwg.org/#assign-a-slot" id="global-attributes:assign-a-slot">assign a slot</a> to an element: an element with a `slot` attribute is <a href="https://dom.spec.whatwg.org/#assign-a-slot" id="global-attributes:assign-a-slot-2">assigned</a> to the <a href="https://dom.spec.whatwg.org/#concept-slot" id="global-attributes:concept-slot">slot</a> created by the `slot` element whose <a href="scripting.html#attr-slot-name" id="global-attributes:attr-slot-name">name</a> attribute's value matches that `slot` attribute's value — but only if that `slot` element finds itself in the <a href="https://dom.spec.whatwg.org/#concept-shadow-tree" id="global-attributes:shadow-tree">shadow tree</a> whose <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="global-attributes:root">root</a>'s <a href="https://dom.spec.whatwg.org/#concept-documentfragment-host" id="global-attributes:concept-documentfragment-host">host</a> has the corresponding `slot` attribute value.

------------------------------------------------------------------------

To enable assistive technology products to expose a more fine-grained interface than is otherwise possible with HTML elements and attributes, a set of [annotations for assistive technology products](#wai-aria) can be specified (the ARIA `role` and `aria-*` attributes). [\[ARIA\]](references.html#refsARIA)

------------------------------------------------------------------------

The following <a href="webappapis.html#event-handler-content-attributes" id="global-attributes:event-handler-content-attributes">event handler content attributes</a> may be specified on any <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-7">HTML element</a>:

-   `onauxclick`
-   `onblur`\*
-   `oncancel`
-   `oncanplay`
-   `oncanplaythrough`
-   `onchange`
-   `onclick`
-   `onclose`
-   `oncontextlost`
-   `oncontextmenu`
-   `oncontextrestored`
-   `oncopy`
-   `oncuechange`
-   `oncut`
-   `ondblclick`
-   `ondrag`
-   `ondragend`
-   `ondragenter`
-   `ondragleave`
-   `ondragover`
-   `ondragstart`
-   `ondrop`
-   `ondurationchange`
-   `onemptied`
-   `onended`
-   `onerror`\*
-   `onfocus`\*
-   `onformdata`
-   `oninput`
-   `oninvalid`
-   `onkeydown`
-   `onkeypress`
-   `onkeyup`
-   `onload`\*
-   `onloadeddata`
-   `onloadedmetadata`
-   `onloadstart`
-   `onmousedown`
-   `onmouseenter`
-   `onmouseleave`
-   `onmousemove`
-   `onmouseout`
-   `onmouseover`
-   `onmouseup`
-   `onpaste`
-   `onpause`
-   `onplay`
-   `onplaying`
-   `onprogress`
-   `onratechange`
-   `onreset`
-   `onresize`\*
-   `onscroll`\*
-   `onsecuritypolicyviolation`
-   `onseeked`
-   `onseeking`
-   `onselect`
-   `onslotchange`
-   `onstalled`
-   `onsubmit`
-   `onsuspend`
-   `ontimeupdate`
-   `ontoggle`
-   `onvolumechange`
-   `onwaiting`
-   `onwheel`

The attributes marked with an asterisk have a different meaning when specified on `body` elements as those elements expose <a href="webappapis.html#event-handlers" id="global-attributes:event-handlers">event handlers</a> of the `Window` object with the same names.

While these attributes apply to all elements, they are not useful on all elements. For example, only <a href="media.html#media-element" id="global-attributes:media-element">media elements</a> will ever receive a `volumechange` event fired by the user agent.

------------------------------------------------------------------------

<a href="#custom-data-attribute" id="global-attributes:custom-data-attribute">Custom data attributes</a> (e.g. `data-foldername` or `data-msgid`) can be specified on any <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-8">HTML element</a>, to store custom data, state, annotations, and similar, specific to the page.

------------------------------------------------------------------------

In <a href="https://dom.spec.whatwg.org/#html-document" id="global-attributes:html-documents">HTML documents</a>, elements in the <a href="https://infra.spec.whatwg.org/#html-namespace" id="global-attributes:html-namespace-2">HTML namespace</a> may have an `xmlns` attribute specified, if, and only if, it has the exact value "`http://www.w3.org/1999/xhtml`". This does not apply to <a href="https://dom.spec.whatwg.org/#xml-document" id="global-attributes:xml-documents">XML documents</a>.

In HTML, the `xmlns` attribute has absolutely no effect. It is basically a talisman. It is allowed merely to make migration to and from XML mildly easier. When parsed by an <a href="parsing.html#html-parser" id="global-attributes:html-parser">HTML parser</a>, the attribute ends up in no namespace, not the "`http://www.w3.org/2000/xmlns/`" namespace like namespace declaration attributes in XML do.

In XML, an `xmlns` attribute is part of the namespace declaration mechanism, and an element cannot actually have an `xmlns` attribute in no namespace specified.

------------------------------------------------------------------------

XML also allows the use of the `xml:space` attribute in the <a href="https://infra.spec.whatwg.org/#xml-namespace" id="global-attributes:xml-namespace">XML namespace</a> on any element in an <a href="https://dom.spec.whatwg.org/#xml-document" id="global-attributes:xml-documents-2">XML document</a>. This attribute has no effect on <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-9">HTML elements</a>, as the default behavior in HTML is to preserve whitespace. [\[XML\]](references.html#refsXML)

There is no way to serialize the `xml:space` attribute on <a href="infrastructure.html#html-elements" id="global-attributes:html-elements-10">HTML elements</a> in the `text/html` syntax.

##### <span class="secno">3.2.6.1</span> The `title` attribute<a href="#the-title-attribute" class="self-link"></a>

**✔**MDN

[Global\_attributes/title](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title "The title global attribute contains text representing advisory information related to the element it belongs to.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

The `title` attribute <a href="#represents" id="the-title-attribute:represents">represents</a> advisory information for the element, such as would be appropriate for a tooltip. On a link, this could be the title or a description of the target resource; on an image, it could be the image credit or a description of the image; on a paragraph, it could be a footnote or commentary on the text; on a citation, it could be further information about the source; on <a href="#interactive-content-2" id="the-title-attribute:interactive-content-2">interactive content</a>, it could be a label for, or instructions for, use of the element; and so forth. The value is text.

Relying on the `title` attribute is currently discouraged as many user agents do not expose the attribute in an accessible manner as required by this specification (e.g., requiring a pointing device such as a mouse to cause a tooltip to appear, which excludes keyboard-only users and touch-only users, such as anyone with a modern phone or tablet).

If this attribute is omitted from an element, then it implies that the `title` attribute of the nearest ancestor <a href="infrastructure.html#html-elements" id="the-title-attribute:html-elements">HTML element</a> with a `title` attribute set is also relevant to this element. Setting the attribute overrides this, explicitly stating that the advisory information of any ancestors is not relevant to this element. Setting the attribute to the empty string indicates that the element has no advisory information.

If the `title` attribute's value contains U+000A LINE FEED (LF) characters, the content is split into multiple lines. Each U+000A LINE FEED (LF) character represents a line break.

Caution is advised with respect to the use of newlines in `title` attributes.

For instance, the following snippet actually defines an abbreviation's expansion *with a line break in it*:

    <p>My logs show that there was some interest in <abbr title="Hypertext
    Transport Protocol">HTTP</abbr> today.</p>

Some elements, such as `link`, `abbr`, and `input`, define additional semantics for the `title` attribute beyond the semantics described above.

The advisory information of an element is the value that the following algorithm returns, with the algorithm being aborted once a value is returned. When the algorithm returns the empty string, then there is no advisory information.

1.  If the element has a `title` attribute, then return its value.
2.  If the element has a parent element, then return the parent element's <a href="#advisory-information" id="the-title-attribute:advisory-information">advisory information</a>.
3.  Return the empty string.

User agents should inform the user when elements have <a href="#advisory-information" id="the-title-attribute:advisory-information-2">advisory information</a>, otherwise the information would not be discoverable.

------------------------------------------------------------------------

**✔**MDN

[HTMLElement/title](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title "The HTMLElement.title property represents the title of the element: the text usually displayed in a 'tooltip' popup when the mouse is over the node.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `title` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-title-attribute:reflect">reflect</a> the `title` content attribute.

##### <span class="secno">3.2.6.2</span> The `lang` and `xml:lang` attributes<a href="#the-lang-and-xml:lang-attributes" class="self-link"></a>

**✔**MDN

[Global\_attributes/lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang "The lang global attribute helps define the language of an element: the language that non-editable elements are written in, or the language that the editable elements should be written in by the user. The attribute contains a single “language tag” in the format defined in Tags for Identifying Languages (BCP47).")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

The `lang` attribute (in no namespace) specifies the primary language for the element's contents and for any of the element's attributes that contain text. Its value must be a valid BCP 47 language tag, or the empty string. Setting the attribute to the empty string indicates that the primary language is unknown. [\[BCP47\]](references.html#refsBCP47)

The [`lang`](https://www.w3.org/TR/xml/#sec-lang-tag) attribute in the <a href="https://infra.spec.whatwg.org/#xml-namespace" id="the-lang-and-xml:lang-attributes:xml-namespace">XML namespace</a> is defined in XML. [\[XML\]](references.html#refsXML)

If these attributes are omitted from an element, then the language of this element is the same as the language of its parent element, if any.

The `lang` attribute in no namespace may be used on any <a href="infrastructure.html#html-elements" id="the-lang-and-xml:lang-attributes:html-elements">HTML element</a>.

The <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-2"><code>lang</code> attribute in the <span>XML namespace</span></a> may be used on <a href="infrastructure.html#html-elements" id="the-lang-and-xml:lang-attributes:html-elements-2">HTML elements</a> in <a href="https://dom.spec.whatwg.org/#xml-document" id="the-lang-and-xml:lang-attributes:xml-documents">XML documents</a>, as well as elements in other namespaces if the relevant specifications allow it (in particular, MathML and SVG allow <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-3"><code>lang</code> attributes in the <span>XML namespace</span></a> to be specified on their elements). If both the `lang` attribute in no namespace and the <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-4"><code>lang</code> attribute in the <span>XML namespace</span></a> are specified on the same element, they must have exactly the same value when compared in an <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="the-lang-and-xml:lang-attributes:ascii-case-insensitive">ASCII case-insensitive</a> manner.

Authors must not use the <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-5"><code>lang</code> attribute in the <span>XML namespace</span></a> on <a href="infrastructure.html#html-elements" id="the-lang-and-xml:lang-attributes:html-elements-3">HTML elements</a> in <a href="https://dom.spec.whatwg.org/#html-document" id="the-lang-and-xml:lang-attributes:html-documents">HTML documents</a>. To ease migration to and from XML, authors may specify an attribute in no namespace with no prefix and with the literal localname "`xml:lang`" on <a href="infrastructure.html#html-elements" id="the-lang-and-xml:lang-attributes:html-elements-4">HTML elements</a> in <a href="https://dom.spec.whatwg.org/#html-document" id="the-lang-and-xml:lang-attributes:html-documents-2">HTML documents</a>, but such attributes must only be specified if a `lang` attribute in no namespace is also specified, and both attributes must have the same value when compared in an <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="the-lang-and-xml:lang-attributes:ascii-case-insensitive-2">ASCII case-insensitive</a> manner.

The attribute in no namespace with no prefix and with the literal localname "`xml:lang`" has no effect on language processing.

------------------------------------------------------------------------

To determine the language of a node, user agents must look at the nearest ancestor element (including the element itself if the node is an element) that has a <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-6"><code>lang</code> attribute in the <span>XML namespace</span></a> set or is an <a href="infrastructure.html#html-elements" id="the-lang-and-xml:lang-attributes:html-elements-5">HTML element</a> and has a `lang` in no namespace attribute set. That attribute specifies the language of the node (regardless of its value).

If both the `lang` attribute in no namespace and the <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-7"><code>lang</code> attribute in the <span>XML namespace</span></a> are set on an element, user agents must use the <a href="https://www.w3.org/TR/xml/#sec-lang-tag" id="the-lang-and-xml:lang-attributes:attr-xml-lang-8"><code>lang</code> attribute in the <span>XML namespace</span></a>, and the `lang` attribute in no namespace must be <a href="infrastructure.html#ignore" id="the-lang-and-xml:lang-attributes:ignore">ignored</a> for the purposes of determining the element's language.

If node's <a href="https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor" id="the-lang-and-xml:lang-attributes:inclusive-ancestor">inclusive ancestors</a> do not have either attribute set, but there is a <a href="semantics.html#pragma-set-default-language" id="the-lang-and-xml:lang-attributes:pragma-set-default-language">pragma-set default language</a> set, then that is the language of the node. If there is no <a href="semantics.html#pragma-set-default-language" id="the-lang-and-xml:lang-attributes:pragma-set-default-language-2">pragma-set default language</a> set, then language information from a higher-level protocol (such as HTTP), if any, must be used as the final fallback language instead. In the absence of any such language information, and in cases where the higher-level protocol reports multiple languages, the language of the node is unknown, and the corresponding language tag is the empty string.

If the resulting value is not a recognized language tag, then it must be treated as an unknown language having the given language tag, distinct from all other languages. For the purposes of round-tripping or communicating with other services that expect language tags, user agents should pass unknown language tags through unmodified, and tagged as being BCP 47 language tags, so that subsequent services do not interpret the data as another type of language description. [\[BCP47\]](references.html#refsBCP47)

Thus, for instance, an element with `lang="xyzzy"` would be matched by the selector `:lang(xyzzy)` (e.g. in CSS), but it would not be matched by `:lang(abcde)`, even though both are equally invalid. Similarly, if a web browser and screen reader working in unison communicated about the language of the element, the browser would tell the screen reader that the language was "xyzzy", even if it knew it was invalid, just in case the screen reader actually supported a language with that tag after all. Even if the screen reader supported both BCP 47 and another syntax for encoding language names, and in that other syntax the string "xyzzy" was a way to denote the Belarusian language, it would be *incorrect* for the screen reader to then start treating text as Belarusian, because "xyzzy" is not how Belarusian is described in BCP 47 codes (BCP 47 uses the code "be" for Belarusian).

If the resulting value is the empty string, then it must be interpreted as meaning that the language of the node is explicitly unknown.

------------------------------------------------------------------------

User agents may use the element's language to determine proper processing or rendering (e.g. in the selection of appropriate fonts or pronunciations, for dictionary selection, or for the user interfaces of form controls such as date pickers).

------------------------------------------------------------------------

**✔**MDN

[HTMLElement/lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang "The HTMLElement.lang property gets or sets the base language of an element's attribute values and text content.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `lang` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-lang-and-xml:lang-attributes:reflect">reflect</a> the `lang` content attribute in no namespace.

##### <span class="secno">3.2.6.3</span> The `translate` attribute<a href="#the-translate-attribute" class="self-link"></a>

MDN

[Global\_attributes/translate](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate "The translate global attribute is an enumerated attribute that is used to specify whether an element's translateable attribute values and its Text node children should be translated when the page is localized, or whether to leave them unchanged.")

<span class="firefox no">FirefoxNo</span><span class="safari yes">Safari6+</span><span class="chrome yes">Chrome19+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera15+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge no">Edge (Legacy)No</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android no">Firefox AndroidNo</span><span class="safari_ios yes">Safari iOS6+</span><span class="chrome_android yes">Chrome Android25+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.5+</span><span class="opera_android yes">Opera Android14+</span>

The `translate` attribute is an <a href="common-microsyntaxes.html#enumerated-attribute" id="the-translate-attribute:enumerated-attribute">enumerated attribute</a> that is used to specify whether an element's attribute values and the values of its `Text` node children are to be translated when the page is localized, or whether to leave them unchanged.

The attribute's keywords are the empty string, `yes`, and `no`. The empty string and the `yes` keyword map to the *yes* state. The `no` keyword maps to the *no* state. In addition, there is a third state, the *inherit* state, which is the *[missing value default](common-microsyntaxes.html#missing-value-default)* and the *[invalid value default](common-microsyntaxes.html#invalid-value-default)*.

Each element (even non-HTML elements) has a translation mode, which is in either the <a href="#translate-enabled" id="the-translate-attribute:translate-enabled">translate-enabled</a> state or the <a href="#no-translate" id="the-translate-attribute:no-translate">no-translate</a> state. If an <a href="infrastructure.html#html-elements" id="the-translate-attribute:html-elements">HTML element</a>'s `translate` attribute is in the *yes* state, then the element's <a href="#translation-mode" id="the-translate-attribute:translation-mode">translation mode</a> is in the <a href="#translate-enabled" id="the-translate-attribute:translate-enabled-2">translate-enabled</a> state; otherwise, if the element's `translate` attribute is in the *no* state, then the element's <a href="#translation-mode" id="the-translate-attribute:translation-mode-2">translation mode</a> is in the <a href="#no-translate" id="the-translate-attribute:no-translate-2">no-translate</a> state. Otherwise, either the element's `translate` attribute is in the *inherit* state, or the element is not an <a href="infrastructure.html#html-elements" id="the-translate-attribute:html-elements-2">HTML element</a> and thus does not have a `translate` attribute; in either case, the element's <a href="#translation-mode" id="the-translate-attribute:translation-mode-3">translation mode</a> is in the same state as its parent element's, if any, or in the <a href="#translate-enabled" id="the-translate-attribute:translate-enabled-3">translate-enabled</a> state, if the element is a <a href="https://dom.spec.whatwg.org/#document-element" id="the-translate-attribute:document-element">document element</a>.

When an element is in the translate-enabled state, the element's <a href="#translatable-attributes" id="the-translate-attribute:translatable-attributes">translatable attributes</a> and the values of its `Text` node children are to be translated when the page is localized.

When an element is in the no-translate state, the element's attribute values and the values of its `Text` node children are to be left as-is when the page is localized, e.g. because the element contains a person's name or a name of a computer program.

The following attributes are translatable attributes:

-   `abbr` on `th` elements
-   `alt` on `area`, `img`, and `input` elements
-   `content` on `meta` elements, if the `name` attribute specifies a metadata name whose value is known to be translatable
-   `download` on `a` and `area` elements
-   `label` on `optgroup`, `option`, and `track` elements
-   `lang` on <a href="infrastructure.html#html-elements" id="the-translate-attribute:html-elements-3">HTML elements</a>; must be "translated" to match the language used in the translation
-   `placeholder` on `input` and `textarea` elements
-   `srcdoc` on `iframe` elements; must be parsed and recursively processed
-   `style` on <a href="infrastructure.html#html-elements" id="the-translate-attribute:html-elements-4">HTML elements</a>; must be parsed and recursively processed (e.g. for the values of <a href="https://drafts.csswg.org/css2/#content%E2%91%A0" id="the-translate-attribute:&#39;content&#39;">'content'</a> properties)
-   `title` on all <a href="infrastructure.html#html-elements" id="the-translate-attribute:html-elements-5">HTML elements</a>
-   `value` on `input` elements with a `type` attribute in the <a href="input.html#button-state-(type=button)" id="the-translate-attribute:button-state-(type=button)">Button</a> state or the <a href="input.html#reset-button-state-(type=reset)" id="the-translate-attribute:reset-button-state-(type=reset)">Reset Button</a> state

Other specifications may define other attributes that are also <a href="#translatable-attributes" id="the-translate-attribute:translatable-attributes-2">translatable attributes</a>. For example, ARIA would define the `aria-label` attribute as translatable.

------------------------------------------------------------------------

The `translate` IDL attribute must, on getting, return true if the element's <a href="#translation-mode" id="the-translate-attribute:translation-mode-4">translation mode</a> is <a href="#translate-enabled" id="the-translate-attribute:translate-enabled-4">translate-enabled</a>, and false otherwise. On setting, it must set the content attribute's value to "`yes`" if the new value is true, and set the content attribute's value to "`no`" otherwise.

In this example, everything in the document is to be translated when the page is localized, except the sample keyboard input and sample program output:

    <!DOCTYPE HTML>
    <html lang=en> <!-- default on the document element is translate=yes -->
     <head>
      <title>The Bee Game</title> <!-- implied translate=yes inherited from ancestors -->
     </head>
     <body>
      <p>The Bee Game is a text adventure game in English.</p>
      <p>When the game launches, the first thing you should do is type
      <kbd translate=no>eat honey</kbd>. The game will respond with:</p>
      <pre><samp translate=no>Yum yum! That was some good honey!</samp></pre>
     </body>
    </html>

##### <span class="secno">3.2.6.4</span> The `dir` attribute<a href="#the-dir-attribute" class="self-link"></a>

**✔**MDN

[Global\_attributes/dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir "The dir global attribute is an enumerated attribute that indicates the directionality of the element's text.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge no">Edge (Legacy)No</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

The `dir` attribute specifies the element's text directionality. The attribute is an <a href="common-microsyntaxes.html#enumerated-attribute" id="the-dir-attribute:enumerated-attribute">enumerated attribute</a> with the following keywords and states:

The `ltr` keyword, which maps to the ltr state  
Indicates that the contents of the element are explicitly directionally isolated left-to-right text.

The `rtl` keyword, which maps to the rtl state  
Indicates that the contents of the element are explicitly directionally isolated right-to-left text.

The `auto` keyword, which maps to the auto state  
Indicates that the contents of the element are explicitly directionally isolated text, but that the direction is to be determined programmatically using the contents of the element (as described below).

The heuristic used by this state is very crude (it just looks at the first character with a strong directionality, in a manner analogous to the Paragraph Level determination in the bidirectional algorithm). Authors are urged to only use this value as a last resort when the direction of the text is truly unknown and no better server-side heuristic can be applied. [\[BIDI\]](references.html#refsBIDI)

For `textarea` and `pre` elements, the heuristic is applied on a per-paragraph level.

The attribute has no *[invalid value default](common-microsyntaxes.html#invalid-value-default)* and no *[missing value default](common-microsyntaxes.html#missing-value-default)*.

------------------------------------------------------------------------

The directionality of an element (any element, not just an <a href="infrastructure.html#html-elements" id="the-dir-attribute:html-elements">HTML element</a>) is either 'ltr' or 'rtl', and is determined as per the first appropriate set of steps from the following list:

If the element's `dir` attribute is in the <a href="#attr-dir-ltr-state" id="the-dir-attribute:attr-dir-ltr-state">ltr</a> state  
If the element is a <a href="https://dom.spec.whatwg.org/#document-element" id="the-dir-attribute:document-element">document element</a> and the `dir` attribute is not in a defined state (i.e. it is not present or has an invalid value)  
If the element is an `input` element whose `type` attribute is in the <a href="input.html#telephone-state-(type=tel)" id="the-dir-attribute:telephone-state-(type=tel)">Telephone</a> state, and the `dir` attribute is not in a defined state (i.e. it is not present or has an invalid value)  
<a href="#the-directionality" id="the-dir-attribute:the-directionality">The directionality</a> of the element is '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr">ltr</a>'.

If the element's `dir` attribute is in the <a href="#attr-dir-rtl-state" id="the-dir-attribute:attr-dir-rtl-state">rtl</a> state  
<a href="#the-directionality" id="the-dir-attribute:the-directionality-2">The directionality</a> of the element is '<a href="#concept-rtl" id="the-dir-attribute:concept-rtl">rtl</a>'.

If the element is an `input` element whose `type` attribute is in the <a href="input.html#text-(type=text)-state-and-search-state-(type=search)" id="the-dir-attribute:text-(type=text)-state-and-search-state-(type=search)">Text</a>, <a href="input.html#text-(type=text)-state-and-search-state-(type=search)" id="the-dir-attribute:text-(type=text)-state-and-search-state-(type=search)-2">Search</a>, <a href="input.html#telephone-state-(type=tel)" id="the-dir-attribute:telephone-state-(type=tel)-2">Telephone</a>, <a href="input.html#url-state-(type=url)" id="the-dir-attribute:url-state-(type=url)">URL</a>, or <a href="input.html#email-state-(type=email)" id="the-dir-attribute:email-state-(type=email)">Email</a> state, and the `dir` attribute is in the <a href="#attr-dir-auto-state" id="the-dir-attribute:attr-dir-auto-state">auto</a> state  
If the element is a `textarea` element and the `dir` attribute is in the <a href="#attr-dir-auto-state" id="the-dir-attribute:attr-dir-auto-state-2">auto</a> state  
If the element's <a href="form-control-infrastructure.html#concept-fe-value" id="the-dir-attribute:concept-fe-value">value</a> contains a character of bidirectional character type AL or R, and there is no character of bidirectional character type L anywhere before it in the element's <a href="form-control-infrastructure.html#concept-fe-value" id="the-dir-attribute:concept-fe-value-2">value</a>, then <a href="#the-directionality" id="the-dir-attribute:the-directionality-3">the directionality</a> of the element is '<a href="#concept-rtl" id="the-dir-attribute:concept-rtl-2">rtl</a>'. [\[BIDI\]](references.html#refsBIDI)

Otherwise, if the element's <a href="form-control-infrastructure.html#concept-fe-value" id="the-dir-attribute:concept-fe-value-3">value</a> is not the empty string, or if the element is a <a href="https://dom.spec.whatwg.org/#document-element" id="the-dir-attribute:document-element-2">document element</a>, <a href="#the-directionality" id="the-dir-attribute:the-directionality-4">the directionality</a> of the element is '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr-2">ltr</a>'.

Otherwise, <a href="#the-directionality" id="the-dir-attribute:the-directionality-5">the directionality</a> of the element is the same as the element's parent element's <a href="#the-directionality" id="the-dir-attribute:the-directionality-6">directionality</a>.

If the element's `dir` attribute is in the <a href="#attr-dir-auto-state" id="the-dir-attribute:attr-dir-auto-state-3">auto</a> state  
If the element is a `bdi` element and the `dir` attribute is not in a defined state (i.e. it is not present or has an invalid value)  
Find the first character in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-dir-attribute:tree-order">tree order</a> that matches the following criteria:

-   The character is from a `Text` node that is a descendant of the element whose <a href="#the-directionality" id="the-dir-attribute:the-directionality-7">directionality</a> is being determined.
-   The character is of bidirectional character type L, AL, or R. [\[BIDI\]](references.html#refsBIDI)
-   The character is not in a `Text` node that has an ancestor element that is a descendant of the element whose <a href="#the-directionality" id="the-dir-attribute:the-directionality-8">directionality</a> is being determined and that is either:

    -   A `bdi` element.
    -   A `script` element.
    -   A `style` element.
    -   A `textarea` element.
    -   An element with a `dir` attribute in a defined state.

If such a character is found and it is of bidirectional character type AL or R, <a href="#the-directionality" id="the-dir-attribute:the-directionality-9">the directionality</a> of the element is '<a href="#concept-rtl" id="the-dir-attribute:concept-rtl-3">rtl</a>'.

If such a character is found and it is of bidirectional character type L, <a href="#the-directionality" id="the-dir-attribute:the-directionality-10">the directionality</a> of the element is '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr-3">ltr</a>'.

Otherwise, if the element is a <a href="https://dom.spec.whatwg.org/#document-element" id="the-dir-attribute:document-element-3">document element</a>, <a href="#the-directionality" id="the-dir-attribute:the-directionality-11">the directionality</a> of the element is '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr-4">ltr</a>'.

Otherwise, <a href="#the-directionality" id="the-dir-attribute:the-directionality-12">the directionality</a> of the element is the same as the element's parent element's <a href="#the-directionality" id="the-dir-attribute:the-directionality-13">directionality</a>.

If the element has a parent element and the `dir` attribute is not in a defined state (i.e. it is not present or has an invalid value)  
<a href="#the-directionality" id="the-dir-attribute:the-directionality-14">The directionality</a> of the element is the same as the element's parent element's <a href="#the-directionality" id="the-dir-attribute:the-directionality-15">directionality</a>.

Since the `dir` attribute is only defined for <a href="infrastructure.html#html-elements" id="the-dir-attribute:html-elements-2">HTML elements</a>, it cannot be present on elements from other namespaces. Thus, elements from other namespaces always just inherit their <a href="#the-directionality" id="the-dir-attribute:the-directionality-16">directionality</a> from their parent element, or, if they don't have one, default to '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr-5">ltr</a>'.

This attribute [has rendering requirements involving the bidirectional algorithm](#bidireq).

------------------------------------------------------------------------

The directionality of an attribute of an <a href="infrastructure.html#html-elements" id="the-dir-attribute:html-elements-3">HTML element</a>, which is used when the text of that attribute is to be included in the rendering in some manner, is determined as per the first appropriate set of steps from the following list:

If the attribute is a <a href="#directionality-capable-attribute" id="the-dir-attribute:directionality-capable-attribute">directionality-capable attribute</a> and the element's `dir` attribute is in the <a href="#attr-dir-auto-state" id="the-dir-attribute:attr-dir-auto-state-4">auto</a> state  
Find the first character (in logical order) of the attribute's value that is of bidirectional character type L, AL, or R. [\[BIDI\]](references.html#refsBIDI)

If such a character is found and it is of bidirectional character type AL or R, the <a href="#directionality-of-the-attribute" id="the-dir-attribute:directionality-of-the-attribute">directionality of the attribute</a> is '<a href="#concept-rtl" id="the-dir-attribute:concept-rtl-4">rtl</a>'.

Otherwise, the <a href="#directionality-of-the-attribute" id="the-dir-attribute:directionality-of-the-attribute-2">directionality of the attribute</a> is '<a href="#concept-ltr" id="the-dir-attribute:concept-ltr-6">ltr</a>'.

Otherwise  
The <a href="#directionality-of-the-attribute" id="the-dir-attribute:directionality-of-the-attribute-3">directionality of the attribute</a> is the same as <a href="#the-directionality" id="the-dir-attribute:the-directionality-17">the element's directionality</a>.

The following attributes are directionality-capable attributes:

-   `abbr` on `th` elements
-   `alt` on `area`, `img`, and `input` elements
-   `content` on `meta` elements, if the `name` attribute specifies a metadata name whose value is primarily intended to be human-readable rather than machine-readable
-   `label` on `optgroup`, `option`, and `track` elements
-   `placeholder` on `input` and `textarea` elements
-   `title` on all <a href="infrastructure.html#html-elements" id="the-dir-attribute:html-elements-4">HTML elements</a>

------------------------------------------------------------------------

`document.dir [ = value ]`  
Returns <a href="#the-html-element-2" id="the-dir-attribute:the-html-element-2">the <code>html</code> element</a>'s `dir` attribute's value, if any.

Can be set, to either "`ltr`", "`rtl`", or "`auto`" to replace <a href="#the-html-element-2" id="the-dir-attribute:the-html-element-2-2">the <code>html</code> element</a>'s `dir` attribute's value.

If there is no <a href="#the-html-element-2" id="the-dir-attribute:the-html-element-2-3"><code>html</code> element</a>, returns the empty string and ignores new values.

**✔**MDN

[HTMLElement/dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir "The HTMLElement.dir property gets or sets the text writing directionality of the content of the current element.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `dir` IDL attribute on an element must <a href="common-dom-interfaces.html#reflect" id="the-dir-attribute:reflect">reflect</a> the `dir` content attribute of that element, <a href="common-dom-interfaces.html#limited-to-only-known-values" id="the-dir-attribute:limited-to-only-known-values">limited to only known values</a>.

**✔**MDN

[Document/dir](https://developer.mozilla.org/en-US/docs/Web/API/Document/dir "The Document.dir property is a DOMString representing the directionality of the text of the document, whether left to right (default) or right to left. Possible values are 'rtl', right to left, and 'ltr', left to right.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari10.1+</span><span class="chrome yes">Chrome64+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera51+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS10.3+</span><span class="chrome_android yes">Chrome Android64+</span><span class="webview_android yes">WebView Android64+</span><span class="samsunginternet_android yes">Samsung Internet9.0+</span><span class="opera_android yes">Opera Android47+</span>

The `dir` IDL attribute on `Document` objects must <a href="common-dom-interfaces.html#reflect" id="the-dir-attribute:reflect-2">reflect</a> the `dir` content attribute of <a href="#the-html-element-2" id="the-dir-attribute:the-html-element-2-4">the <code>html</code> element</a>, if any, <a href="common-dom-interfaces.html#limited-to-only-known-values" id="the-dir-attribute:limited-to-only-known-values-2">limited to only known values</a>. If there is no such element, then the attribute must return the empty string and do nothing on setting.

Authors are strongly encouraged to use the `dir` attribute to indicate text direction rather than using CSS, since that way their documents will continue to render correctly even in the absence of CSS (e.g. as interpreted by search engines).

This markup fragment is of an IM conversation.

    <p dir=auto class="u1"><b><bdi>Student</bdi>:</b> How do you write "What's your name?" in Arabic?</p>
    <p dir=auto class="u2"><b><bdi>Teacher</bdi>:</b> ما اسمك؟</p>
    <p dir=auto class="u1"><b><bdi>Student</bdi>:</b> Thanks.</p>
    <p dir=auto class="u2"><b><bdi>Teacher</bdi>:</b> That's written "شكرًا".</p>
    <p dir=auto class="u2"><b><bdi>Teacher</bdi>:</b> Do you know how to write "Please"?</p>
    <p dir=auto class="u1"><b><bdi>Student</bdi>:</b> "من فضلك", right?</p>

Given a suitable style sheet and the default alignment styles for the `p` element, namely to align the text to the *start edge* of the paragraph, the resulting rendering could be as follows:

<img src="/images/im.png" alt="Each paragraph rendered as a separate block, with the paragraphs left-aligned except the second paragraph and the last one, which would be right aligned, with the usernames (&#39;Student&#39; and &#39;Teacher&#39; in this example) flush right, with a colon to their left, and the text first to the left of that." width="366" height="157" />

As noted earlier, the `auto` value is not a panacea. The final paragraph in this example is misinterpreted as being right-to-left text, since it begins with an Arabic character, which causes the "right?" to be to the left of the Arabic text.

##### <span class="secno">3.2.6.5</span> The `style` attribute<a href="#the-style-attribute" class="self-link"></a>

**✔**MDN

[Global\_attributes/style](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style "The style global attribute contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

All <a href="infrastructure.html#html-elements" id="the-style-attribute:html-elements">HTML elements</a> may have the `style` content attribute set. This is a <a href="https://drafts.csswg.org/css-style-attr/#style-attribute" id="the-style-attribute:css-styling-attribute">style attribute</a> as defined by CSS Style Attributes. [\[CSSATTR\]](references.html#refsCSSATTR)

In user agents that support CSS, the attribute's value must be parsed when the attribute is added or has its value changed, according to the rules given for <a href="https://drafts.csswg.org/css-style-attr/#style-attribute" id="the-style-attribute:css-styling-attribute-2">style attributes</a>. [\[CSSATTR\]](references.html#refsCSSATTR)

However, if the <a href="https://w3c.github.io/webappsec-csp/#should-block-inline" id="the-style-attribute:should-element&#39;s-inline-behavior-be-blocked-by-content-security-policy">Should element's inline behavior be blocked by Content Security Policy?</a> algorithm returns "`Blocked`" when executed upon the attribute's <a href="https://dom.spec.whatwg.org/#interface-element" id="the-style-attribute:element">element</a>, "`style attribute`", and the attribute's value, then the style rules defined in the attribute's value must not be applied to the <a href="https://dom.spec.whatwg.org/#interface-element" id="the-style-attribute:element-2">element</a>. [\[CSP\]](references.html#refsCSP)

Documents that use `style` attributes on any of their elements must still be comprehensible and usable if those attributes were removed.

In particular, using the `style` attribute to hide and show content, or to convey meaning that is otherwise not included in the document, is non-conforming. (To hide and show content, use the `hidden` attribute.)

------------------------------------------------------------------------

`element.style`  
Returns a `CSSStyleDeclaration` object for the element's `style` attribute.

The `style` IDL attribute is defined in CSS Object Model. [\[CSSOM\]](references.html#refsCSSOM)

In the following example, the words that refer to colors are marked up using the `span` element and the `style` attribute to make those words show up in the relevant colors in visual media.

    <p>My sweat suit is <span style="color: green; background:
    transparent">green</span> and my eyes are <span style="color: blue;
    background: transparent">blue</span>.</p>

##### <span class="secno">3.2.6.6</span> Embedding custom non-visible data with the `data-*` attributes<a href="#embedding-custom-non-visible-data-with-the-data-*-attributes" class="self-link"></a>

**✔**MDN

[Global\_attributes/data-\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-* "The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

A custom data attribute is an attribute in no namespace whose name starts with the string "`data-`", has at least one character after the hyphen, is <a href="infrastructure.html#xml-compatible" id="embedding-custom-non-visible-data-with-the-data-*-attributes:xml-compatible">XML-compatible</a>, and contains no <a href="https://infra.spec.whatwg.org/#ascii-upper-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:uppercase-ascii-letters">ASCII upper alphas</a>.

All attribute names on <a href="infrastructure.html#html-elements" id="embedding-custom-non-visible-data-with-the-data-*-attributes:html-elements">HTML elements</a> in <a href="https://dom.spec.whatwg.org/#html-document" id="embedding-custom-non-visible-data-with-the-data-*-attributes:html-documents">HTML documents</a> get ASCII-lowercased automatically, so the restriction on ASCII uppercase letters doesn't affect such documents.

<a href="#custom-data-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:custom-data-attribute">Custom data attributes</a> are intended to store custom data, state, annotations, and similar, private to the page or application, for which there are no more appropriate attributes or elements.

These attributes are not intended for use by software that is not known to the administrators of the site that uses the attributes. For generic extensions that are to be used by multiple independent tools, either this specification should be extended to provide the feature explicitly, or a technology like <a href="microdata.html#microdata" id="embedding-custom-non-visible-data-with-the-data-*-attributes:microdata">microdata</a> should be used (with a standardized vocabulary).

For instance, a site about music could annotate list items representing tracks in an album with custom data attributes containing the length of each track. This information could then be used by the site itself to allow the user to sort the list by track length, or to filter the list for tracks of certain lengths.

    <ol>
     <li data-length="2m11s">Beyond The Sea</li>
     ...
    </ol>

It would be inappropriate, however, for the user to use generic software not associated with that music site to search for tracks of a certain length by looking at this data.

This is because these attributes are intended for use by the site's own scripts, and are not a generic extension mechanism for publicly-usable metadata.

Similarly, a page author could write markup that provides information for a translation tool that they are intending to use:

    <p>The third <span data-mytrans-de="Anspruch">claim</span> covers the case of <span
    translate="no">HTML</span> markup.</p>

In this example, the "`data-mytrans-de`" attribute gives specific text for the MyTrans product to use when translating the phrase "claim" to German. However, the standard `translate` attribute is used to tell it that in all languages, "HTML" is to remain unchanged. When a standard attribute is available, there is no need for a <a href="#custom-data-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:custom-data-attribute-2">custom data attribute</a> to be used.

In this example, custom data attributes are used to store the result of a feature detection for `PaymentRequest`, which could be used in CSS to style a checkout page differently.

    <script>
     if ('PaymentRequest' in window) {
       document.documentElement.dataset.hasPaymentRequest = '';
     }
    </script>

Here, the `data-has-payment-request` attribute is effectively being used as a <a href="common-microsyntaxes.html#boolean-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:boolean-attribute">boolean attribute</a>; it is enough to check the presence of the attribute. However, if the author so wishes, it could later be populated with some value, maybe to indicate limited functionality of the feature.

Every <a href="infrastructure.html#html-elements" id="embedding-custom-non-visible-data-with-the-data-*-attributes:html-elements-2">HTML element</a> may have any number of <a href="#custom-data-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:custom-data-attribute-3">custom data attributes</a> specified, with any value.

Authors should carefully design such extensions so that when the attributes are ignored and any associated CSS dropped, the page is still usable.

User agents must not derive any implementation behavior from these attributes or values. Specifications intended for user agents must not define these attributes to have any meaningful values.

JavaScript libraries may use the <a href="#custom-data-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:custom-data-attribute-4">custom data attributes</a>, as they are considered to be part of the page on which they are used. Authors of libraries that are reused by many authors are encouraged to include their name in the attribute names, to reduce the risk of clashes. Where it makes sense, library authors are also encouraged to make the exact name used in the attribute names customizable, so that libraries whose authors unknowingly picked the same name can be used on the same page, and so that multiple versions of a particular library can be used on the same page even when those versions are not mutually compatible.

For example, a library called "DoQuery" could use attribute names like `data-doquery-range`, and a library called "jJo" could use attributes names like `data-jjo-range`. The jJo library could also provide an API to set which prefix to use (e.g. `J.setDataPrefix('j2')`, making the attributes have names like `data-j2-range`).

------------------------------------------------------------------------

`element.dataset`

**✔**MDN

[HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset "The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.")

Support in all current engines.

<span class="firefox yes">Firefox6+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome8+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera11+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer11</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android6+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android11+</span>

[SVGElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement/dataset "The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.")

Support in all current engines.

<span class="firefox yes">Firefox51+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome55+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera41+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)17+</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android51+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android55+</span><span class="webview_android yes">WebView Android55+</span><span class="samsunginternet_android yes">Samsung Internet6.0+</span><span class="opera_android yes">Opera Android41+</span>

Returns a `DOMStringMap` object for the element's `data-*` attributes.

Hyphenated names become camel-cased. For example, `data-foo-bar=""` becomes `element.dataset.fooBar`.

The `dataset` IDL attribute provides convenient accessors for all the `data-*` attributes on an element. On getting, the `dataset` IDL attribute must return a `DOMStringMap` whose associated element is this element.

The `DOMStringMap` interface is used for the `dataset` attribute. Each `DOMStringMap` has an associated element.

    [Exposed=Window,
     LegacyOverrideBuiltIns]
    interface DOMStringMap {
      getter DOMString (DOMString name);
      [CEReactions] setter undefined (DOMString name, DOMString value);
      [CEReactions] deleter undefined (DOMString name);
    };

To get a `DOMStringMap`'s name-value pairs, run the following algorithm:

1.  Let list be an empty list of name-value pairs.
2.  For each content attribute on the `DOMStringMap`'s <a href="#concept-domstringmap-element" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-element">associated element</a> whose first five characters are the string "`data-`" and whose remaining characters (if any) do not include any <a href="https://infra.spec.whatwg.org/#ascii-upper-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:uppercase-ascii-letters-2">ASCII upper alphas</a>, in the order that those attributes are listed in the element's <a href="https://dom.spec.whatwg.org/#concept-element-attribute" id="embedding-custom-non-visible-data-with-the-data-*-attributes:attribute-list">attribute list</a>, add a name-value pair to list whose name is the attribute's name with the first five characters removed and whose value is the attribute's value.
3.  For each name in list, for each U+002D HYPHEN-MINUS character (-) in the name that is followed by an <a href="https://infra.spec.whatwg.org/#ascii-lower-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:lowercase-ascii-letters">ASCII lower alpha</a>, remove the U+002D HYPHEN-MINUS character (-) and replace the character that followed it by the same character <a href="https://infra.spec.whatwg.org/#ascii-uppercase" id="embedding-custom-non-visible-data-with-the-data-*-attributes:converted-to-ascii-uppercase">converted to ASCII uppercase</a>.
4.  Return list.

The <a href="https://webidl.spec.whatwg.org/#dfn-supported-property-names" id="embedding-custom-non-visible-data-with-the-data-*-attributes:supported-property-names">supported property names</a> on a `DOMStringMap` object at any instant are the names of each pair returned from <a href="#concept-domstringmap-pairs" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-pairs">getting the <code>DOMStringMap</code>'s name-value pairs</a> at that instant, in the order returned.

To <a href="https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property" id="embedding-custom-non-visible-data-with-the-data-*-attributes:determine-the-value-of-a-named-property">determine the value of a named property</a> name for a `DOMStringMap`, return the value component of the name-value pair whose name component is name in the list returned from <a href="#concept-domstringmap-pairs" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-pairs-2">getting the <code>DOMStringMap</code>'s name-value pairs</a>.

To <a href="https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-named-property" id="embedding-custom-non-visible-data-with-the-data-*-attributes:set-the-value-of-a-new-named-property">set the value of a new named property</a> or <a href="https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-named-property" id="embedding-custom-non-visible-data-with-the-data-*-attributes:set-the-value-of-an-existing-named-property">set the value of an existing named property</a> for a `DOMStringMap`, given a property name name and a new value value, run the following steps:

1.  If name contains a U+002D HYPHEN-MINUS character (-) followed by an <a href="https://infra.spec.whatwg.org/#ascii-lower-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:lowercase-ascii-letters-2">ASCII lower alpha</a>, then throw a <a href="https://webidl.spec.whatwg.org/#syntaxerror" id="embedding-custom-non-visible-data-with-the-data-*-attributes:syntaxerror">"<code>SyntaxError</code>"</a> `DOMException`.
2.  For each <a href="https://infra.spec.whatwg.org/#ascii-upper-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:uppercase-ascii-letters-3">ASCII upper alpha</a> in name, insert a U+002D HYPHEN-MINUS character (-) before the character and replace the character with the same character <a href="https://infra.spec.whatwg.org/#ascii-lowercase" id="embedding-custom-non-visible-data-with-the-data-*-attributes:converted-to-ascii-lowercase">converted to ASCII lowercase</a>.
3.  Insert the string `data-` at the front of name.
4.  If name does not match the XML `Name` production, throw an <a href="https://webidl.spec.whatwg.org/#invalidcharactererror" id="embedding-custom-non-visible-data-with-the-data-*-attributes:invalidcharactererror">"<code>InvalidCharacterError</code>"</a> `DOMException`.
5.  <a href="https://dom.spec.whatwg.org/#concept-element-attributes-set-value" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-element-attributes-set-value">Set an attribute value</a> for the `DOMStringMap`'s <a href="#concept-domstringmap-element" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-element-2">associated element</a> using name and value.

To <a href="https://webidl.spec.whatwg.org/#dfn-delete-an-existing-named-property" id="embedding-custom-non-visible-data-with-the-data-*-attributes:delete-an-existing-named-property">delete an existing named property</a> name for a `DOMStringMap`, run the following steps:

1.  For each <a href="https://infra.spec.whatwg.org/#ascii-upper-alpha" id="embedding-custom-non-visible-data-with-the-data-*-attributes:uppercase-ascii-letters-4">ASCII upper alpha</a> in name, insert a U+002D HYPHEN-MINUS character (-) before the character and replace the character with the same character <a href="https://infra.spec.whatwg.org/#ascii-lowercase" id="embedding-custom-non-visible-data-with-the-data-*-attributes:converted-to-ascii-lowercase-2">converted to ASCII lowercase</a>.
2.  Insert the string `data-` at the front of name.
3.  <a href="https://dom.spec.whatwg.org/#concept-element-attributes-remove" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-element-attributes-remove">Remove an attribute by name</a> given name and the `DOMStringMap`'s <a href="#concept-domstringmap-element" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-element-3">associated element</a>.

This algorithm will only get invoked by Web IDL for names that are given by the earlier algorithm for <a href="#concept-domstringmap-pairs" id="embedding-custom-non-visible-data-with-the-data-*-attributes:concept-domstringmap-pairs-3">getting the <code>DOMStringMap</code>'s name-value pairs</a>. [\[WEBIDL\]](references.html#refsWEBIDL)

If a web page wanted an element to represent a space ship, e.g. as part of a game, it would have to use the `class` attribute along with `data-*` attributes:

    <div class="spaceship" data-ship-id="92432"
         data-weapons="laser 2" data-shields="50%"
         data-x="30" data-y="10" data-z="90">
     <button class="fire"
             onclick="spaceships[this.parentNode.dataset.shipId].fire()">
      Fire
     </button>
    </div>

Notice how the hyphenated attribute name becomes camel-cased in the API.

Given the following fragment and elements with similar constructions:

    <img class="tower" id="tower5" data-x="12" data-y="5"
         data-ai="robotarget" data-hp="46" data-ability="flames"
         src="towers/rocket.png" alt="Rocket Tower">

...one could imagine a function `splashDamage()` that takes some arguments, the first of which is the element to process:

    function splashDamage(node, x, y, damage) {
      if (node.classList.contains('tower') && // checking the 'class' attribute
          node.dataset.x == x && // reading the 'data-x' attribute
          node.dataset.y == y) { // reading the 'data-y' attribute
        var hp = parseInt(node.dataset.hp); // reading the 'data-hp' attribute
        hp = hp - damage;
        if (hp < 0) {
          hp = 0;
          node.dataset.ai = 'dead'; // setting the 'data-ai' attribute
          delete node.dataset.ability; // removing the 'data-ability' attribute
        }
        node.dataset.hp = hp; // setting the 'data-hp' attribute
      }
    }

#### <span class="secno">3.2.7</span> The `innerText` and `outerText` properties<a href="#the-innertext-idl-attribute" class="self-link"></a>

**✔**MDN

[HTMLElement/innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText "The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants.")

Support in all current engines.

<span class="firefox yes">Firefox45+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera9.6+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android45+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android4.4+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

`element.innerText [ = value ]`  
Returns the element's text content "as rendered".

Can be set, to replace the element's children with the given value, but with line breaks converted to `br` elements.

`element.outerText [ = value ]`  
Returns the element's text content "as rendered".

Can be set, to replace the element with the given value, but with line breaks converted to `br` elements.

The `innerText` and `outerText` getter steps are:

1.  If <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this">this</a> is not <a href="rendering.html#being-rendered" id="the-innertext-idl-attribute:being-rendered">being rendered</a> or if the user agent is a non-CSS user agent, then return <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-2">this</a>'s <a href="https://dom.spec.whatwg.org/#concept-descendant-text-content" id="the-innertext-idl-attribute:descendant-text-content">descendant text content</a>.

    This step can produce surprising results, as when the `innerText` getter is invoked on an element not <a href="rendering.html#being-rendered" id="the-innertext-idl-attribute:being-rendered-2">being rendered</a>, its text contents are returned, but when accessed on an element that is <a href="rendering.html#being-rendered" id="the-innertext-idl-attribute:being-rendered-3">being rendered</a>, all of its children that are not <a href="rendering.html#being-rendered" id="the-innertext-idl-attribute:being-rendered-4">being rendered</a> have their text contents ignored.

2.  Let results be a new empty <a href="https://infra.spec.whatwg.org/#list" id="the-innertext-idl-attribute:list">list</a>.
3.  For each child node node of <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-3">this</a>:

    1.  Let current be the <a href="https://infra.spec.whatwg.org/#list" id="the-innertext-idl-attribute:list-2">list</a> resulting in running the <a href="#rendered-text-collection-steps" id="the-innertext-idl-attribute:rendered-text-collection-steps">rendered text collection steps</a> with node. Each item in results will either be a <a href="https://infra.spec.whatwg.org/#string" id="the-innertext-idl-attribute:string">string</a> or a positive integer (a *required line break count*).

        Intuitively, a *required line break count* item means that a certain number of line breaks appear at that point, but they can be collapsed with the line breaks induced by adjacent *required line break count* items, reminiscent to CSS margin-collapsing.

    2.  For each item item in current, append item to results.

4.  <a href="https://infra.spec.whatwg.org/#list-remove" id="the-innertext-idl-attribute:list-remove">Remove</a> any items from results that are the empty string.
5.  <a href="https://infra.spec.whatwg.org/#list-remove" id="the-innertext-idl-attribute:list-remove-2">Remove</a> any runs of consecutive *required line break count* items at the start or end of results.
6.  <a href="https://infra.spec.whatwg.org/#list-replace" id="the-innertext-idl-attribute:list-replace">Replace</a> each remaining run of consecutive *required line break count* items with a string consisting of as many U+000A LF code points as the maximum of the values in the *required line break count* items.
7.  Return the concatenation of the string items in results.

The rendered text collection steps, given a <a href="https://dom.spec.whatwg.org/#interface-node" id="the-innertext-idl-attribute:node">node</a> node, are as follows:

1.  Let items be the result of running the <a href="#rendered-text-collection-steps" id="the-innertext-idl-attribute:rendered-text-collection-steps-2">rendered text collection steps</a> with each child node of node in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-innertext-idl-attribute:tree-order">tree order</a>, and then concatenating the results to a single <a href="https://infra.spec.whatwg.org/#list" id="the-innertext-idl-attribute:list-3">list</a>.
2.  If node's <a href="https://drafts.csswg.org/css-cascade/#computed-value" id="the-innertext-idl-attribute:computed-value">computed value</a> of <a href="https://drafts.csswg.org/css2/#propdef-visibility" id="the-innertext-idl-attribute:&#39;visibility&#39;">'visibility'</a> is not 'visible', then return items.
3.  If node is not <a href="rendering.html#being-rendered" id="the-innertext-idl-attribute:being-rendered-5">being rendered</a>, then return items. For the purpose of this step, the following elements must act as described if the <a href="https://drafts.csswg.org/css-cascade/#computed-value" id="the-innertext-idl-attribute:computed-value-2">computed value</a> of the <a href="https://drafts.csswg.org/css2/#display-prop" id="the-innertext-idl-attribute:&#39;display&#39;">'display'</a> property is not 'none':

    -   `select` elements have an associated non-replaced inline <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box">CSS box</a> whose child boxes include only those of `optgroup` and `option` element child nodes;
    -   `optgroup` elements have an associated non-replaced block-level <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-2">CSS box</a> whose child boxes include only those of `option` element child nodes; and
    -   `option` element have an associated non-replaced block-level <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-3">CSS box</a> whose child boxes are as normal for non-replaced block-level <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-4">CSS boxes</a>.

    items can be non-empty due to 'display:contents'.

4.  If node is a `Text` node, then for each CSS text box produced by node, in content order, compute the text of the box after application of the CSS <a href="https://drafts.csswg.org/css-text/#white-space-property" id="the-innertext-idl-attribute:&#39;white-space&#39;">'white-space'</a> processing rules and <a href="https://drafts.csswg.org/css-text/#text-transform-property" id="the-innertext-idl-attribute:&#39;text-transform&#39;">'text-transform'</a> rules, set items to the <a href="https://infra.spec.whatwg.org/#list" id="the-innertext-idl-attribute:list-4">list</a> of the resulting strings, and return items. The CSS <a href="https://drafts.csswg.org/css-text/#white-space-property" id="the-innertext-idl-attribute:&#39;white-space&#39;-2">'white-space'</a> processing rules are slightly modified: collapsible spaces at the end of lines are always collapsed, but they are only removed if the line is the last line of the block, or it ends with a `br` element. Soft hyphens should be preserved. [\[CSSTEXT\]](references.html#refsCSSTEXT)
5.  If node is a `br` element, then <a href="https://infra.spec.whatwg.org/#list-append" id="the-innertext-idl-attribute:list-append">append</a> a string containing a single U+000A LF code point to items.
6.  If node's <a href="https://drafts.csswg.org/css-cascade/#computed-value" id="the-innertext-idl-attribute:computed-value-3">computed value</a> of <a href="https://drafts.csswg.org/css2/#display-prop" id="the-innertext-idl-attribute:&#39;display&#39;-2">'display'</a> is <a href="https://drafts.csswg.org/css-tables/#table-cell" id="the-innertext-idl-attribute:&#39;table-cell&#39;">'table-cell'</a>, and node's <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-5">CSS box</a> is not the last <a href="https://drafts.csswg.org/css-tables/#table-cell" id="the-innertext-idl-attribute:&#39;table-cell&#39;-2">'table-cell'</a> box of its enclosing <a href="https://drafts.csswg.org/css-tables/#table-row" id="the-innertext-idl-attribute:&#39;table-row&#39;">'table-row'</a> box, then <a href="https://infra.spec.whatwg.org/#list-append" id="the-innertext-idl-attribute:list-append-2">append</a> a string containing a single U+0009 TAB code point to items.
7.  If node's <a href="https://drafts.csswg.org/css-cascade/#computed-value" id="the-innertext-idl-attribute:computed-value-4">computed value</a> of <a href="https://drafts.csswg.org/css2/#display-prop" id="the-innertext-idl-attribute:&#39;display&#39;-3">'display'</a> is <a href="https://drafts.csswg.org/css-tables/#table-row" id="the-innertext-idl-attribute:&#39;table-row&#39;-2">'table-row'</a>, and node's <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-6">CSS box</a> is not the last <a href="https://drafts.csswg.org/css-tables/#table-row" id="the-innertext-idl-attribute:&#39;table-row&#39;-3">'table-row'</a> box of the nearest ancestor <a href="https://drafts.csswg.org/css-tables/#table" id="the-innertext-idl-attribute:&#39;table&#39;">'table'</a> box, then <a href="https://infra.spec.whatwg.org/#list-append" id="the-innertext-idl-attribute:list-append-3">append</a> a string containing a single U+000A LF code point to items.
8.  If node is a `p` element, then <a href="https://infra.spec.whatwg.org/#list-append" id="the-innertext-idl-attribute:list-append-4">append</a> 2 (a *required line break count*) at the beginning and end of items.
9.  If node's <a href="https://drafts.csswg.org/css-cascade/#used-value" id="the-innertext-idl-attribute:used-value">used value</a> of <a href="https://drafts.csswg.org/css2/#display-prop" id="the-innertext-idl-attribute:&#39;display&#39;-4">'display'</a> is <a href="https://drafts.csswg.org/css-display/#block-level" id="the-innertext-idl-attribute:block-level">block-level</a> or <a href="https://drafts.csswg.org/css-tables/#table-caption" id="the-innertext-idl-attribute:&#39;table-caption&#39;">'table-caption'</a>, then <a href="https://infra.spec.whatwg.org/#list-append" id="the-innertext-idl-attribute:list-append-5">append</a> 1 (a *required line break count*) at the beginning and end of items. [\[CSSDISPLAY\]](references.html#refsCSSDISPLAY)

    Floats and absolutely-positioned elements fall into this category.

10. Return items.

Note that descendant nodes of most replaced elements (e.g., `textarea`, `input`, and `video` — but not `button`) are not rendered by CSS, strictly speaking, and therefore have no <a href="https://drafts.csswg.org/css-display/#css-box" id="the-innertext-idl-attribute:css-box-7">CSS boxes</a> for the purposes of this algorithm.

This algorithm is amenable to being generalized to work on <a href="https://dom.spec.whatwg.org/#concept-range" id="the-innertext-idl-attribute:concept-range">ranges</a>. Then we can use it as the basis for `Selection`'s stringifier and maybe expose it directly on <a href="https://dom.spec.whatwg.org/#concept-range" id="the-innertext-idl-attribute:concept-range-2">ranges</a>. See [Bugzilla bug 10583](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10583).

------------------------------------------------------------------------

The `innerText` setter steps are:

1.  Let fragment be the <a href="#rendered-text-fragment" id="the-innertext-idl-attribute:rendered-text-fragment">rendered text fragment</a> for the given value given <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-4">this</a>'s <a href="https://dom.spec.whatwg.org/#concept-node-document" id="the-innertext-idl-attribute:node-document">node document</a>.
2.  <a href="https://dom.spec.whatwg.org/#concept-node-replace-all" id="the-innertext-idl-attribute:concept-node-replace-all">Replace all</a> with fragment within <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-5">this</a>.

The `outerText` setter steps are:

1.  If <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-6">this</a>'s parent is null, then throw a <a href="https://webidl.spec.whatwg.org/#nomodificationallowederror" id="the-innertext-idl-attribute:nomodificationallowederror">"<code>NoModificationAllowedError</code>"</a> `DOMException`.
2.  Let next be <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-7">this</a>'s <a href="https://dom.spec.whatwg.org/#concept-tree-next-sibling" id="the-innertext-idl-attribute:next-sibling">next sibling</a>.
3.  Let previous be <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-8">this</a>'s <a href="https://dom.spec.whatwg.org/#concept-tree-previous-sibling" id="the-innertext-idl-attribute:previous-sibling">previous sibling</a>.
4.  Let fragment be the <a href="#rendered-text-fragment" id="the-innertext-idl-attribute:rendered-text-fragment-2">rendered text fragment</a> for the given value given <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-9">this</a>'s <a href="https://dom.spec.whatwg.org/#concept-node-document" id="the-innertext-idl-attribute:node-document-2">node document</a>.
5.  <a href="https://dom.spec.whatwg.org/#concept-node-replace" id="the-innertext-idl-attribute:concept-node-replace">Replace</a> <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-10">this</a> with fragment within <a href="https://webidl.spec.whatwg.org/#this" id="the-innertext-idl-attribute:this-11">this</a>'s parent.
6.  If next is non-null and next's <a href="https://dom.spec.whatwg.org/#concept-tree-previous-sibling" id="the-innertext-idl-attribute:previous-sibling-2">previous sibling</a> is a `Text` node, then <a href="#merge-with-the-next-text-node" id="the-innertext-idl-attribute:merge-with-the-next-text-node">merge with the next text node</a> given next's <a href="https://dom.spec.whatwg.org/#concept-tree-previous-sibling" id="the-innertext-idl-attribute:previous-sibling-3">previous sibling</a>.
7.  If previous is a `Text` node, then <a href="#merge-with-the-next-text-node" id="the-innertext-idl-attribute:merge-with-the-next-text-node-2">merge with the next text node</a> given previous.

The rendered text fragment for a string input given a `Document` document is the result of running the following steps:

1.  Let position be a <a href="https://infra.spec.whatwg.org/#string-position-variable" id="the-innertext-idl-attribute:position-variable">position variable</a> for input, initially pointing at the start of input.
2.  Let text be the empty string.
3.  While position is not past the end of input:

    1.  <a href="https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points" id="the-innertext-idl-attribute:collect-a-sequence-of-code-points">Collect a sequence of code points</a> that are not U+000A LF or U+000D CR from input given position, and set text to the result.
    2.  If text is not the empty string, then <a href="https://dom.spec.whatwg.org/#concept-node-append" id="the-innertext-idl-attribute:concept-node-append">append</a> a new `Text` node whose <a href="https://dom.spec.whatwg.org/#concept-cd-data" id="the-innertext-idl-attribute:concept-cd-data">data</a> is text and <a href="https://dom.spec.whatwg.org/#concept-node-document" id="the-innertext-idl-attribute:node-document-3">node document</a> is document to fragment.
    3.  While position is not past the end of input, and the code point at position is either U+000A LF or U+000D CR:

        1.  If the code point at position is U+000D CR and the next code point is U+000A LF, then advance position to the next code point in input.
        2.  Advance position to the next code point in input.
        3.  <a href="https://dom.spec.whatwg.org/#concept-node-append" id="the-innertext-idl-attribute:concept-node-append-2">Append</a> the result of <a href="https://dom.spec.whatwg.org/#concept-create-element" id="the-innertext-idl-attribute:create-an-element">creating an element</a> given document, `br`, and the <a href="https://infra.spec.whatwg.org/#html-namespace" id="the-innertext-idl-attribute:html-namespace-2">HTML namespace</a> to fragment.

To merge with the next text node given a `Text` node node:

1.  Let next be node's <a href="https://dom.spec.whatwg.org/#concept-tree-next-sibling" id="the-innertext-idl-attribute:next-sibling-2">next sibling</a>.
2.  If next is not a `Text` node, then return.
3.  <a href="https://dom.spec.whatwg.org/#concept-cd-replace" id="the-innertext-idl-attribute:replace-data">Replace data</a> with node, node's <a href="https://dom.spec.whatwg.org/#concept-cd-data" id="the-innertext-idl-attribute:concept-cd-data-2">data</a>'s <a href="https://infra.spec.whatwg.org/#string-length" id="the-innertext-idl-attribute:length">length</a>, 0, and next's <a href="https://dom.spec.whatwg.org/#concept-cd-data" id="the-innertext-idl-attribute:concept-cd-data-3">data</a>.
4.  If next's parent is non-null, then <a href="https://dom.spec.whatwg.org/#concept-node-remove" id="the-innertext-idl-attribute:concept-node-remove">remove</a> next.

    The parent check is necessary as the previous step might have triggered mutation events.

#### <span class="secno">3.2.8</span> Requirements relating to the bidirectional algorithm<a href="#requirements-relating-to-the-bidirectional-algorithm" class="self-link"></a>

##### <span class="secno">3.2.8.1</span> Authoring conformance criteria for bidirectional-algorithm formatting characters<a href="#authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters" class="self-link"></a>

<a href="#text-content" id="authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters:text-content">Text content</a> in <a href="infrastructure.html#html-elements" id="authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters:html-elements">HTML elements</a> with `Text` nodes in their <a href="#concept-html-contents" id="authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters:concept-html-contents">contents</a>, and text in attributes of <a href="infrastructure.html#html-elements" id="authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters:html-elements-2">HTML elements</a> that allow free-form text, may contain characters in the ranges U+202A to U+202E and U+2066 to U+2069 (the bidirectional-algorithm formatting characters). [\[BIDI\]](references.html#refsBIDI)

Authors are encouraged to use the `dir` attribute, the `bdo` element, and the `bdi` element, rather than maintaining the bidirectional-algorithm formatting characters manually. The bidirectional-algorithm formatting characters interact poorly with CSS.

##### <span class="secno">3.2.8.2</span> User agent conformance criteria<a href="#user-agent-conformance-criteria" class="self-link"></a>

User agents must implement the Unicode bidirectional algorithm to determine the proper ordering of characters when rendering documents and parts of documents. [\[BIDI\]](references.html#refsBIDI)

The mapping of HTML to the Unicode bidirectional algorithm must be done in one of three ways. Either the user agent must implement CSS, including in particular the CSS <a href="https://drafts.csswg.org/css-writing-modes/#unicode-bidi" id="user-agent-conformance-criteria:&#39;unicode-bidi&#39;">'unicode-bidi'</a>, <a href="https://drafts.csswg.org/css-writing-modes/#direction" id="user-agent-conformance-criteria:&#39;direction&#39;">'direction'</a>, and <a href="https://drafts.csswg.org/css2/#content%E2%91%A0" id="user-agent-conformance-criteria:&#39;content&#39;">'content'</a> properties, and must have, in its user agent style sheet, the rules using those properties given in this specification's [rendering](rendering.html#rendering) section, or, alternatively, the user agent must act as if it implemented just the aforementioned properties and had a user agent style sheet that included all the aforementioned rules, but without letting style sheets specified in documents override them, or, alternatively, the user agent must implement another styling language with equivalent semantics. [\[CSSGC\]](references.html#refsCSSGC)

The following elements and attributes have requirements defined by the [rendering](rendering.html#rendering) section that, due to the requirements in this section, are requirements on all user agents (not just those that [support the suggested default rendering](infrastructure.html#renderingUA)):

-   `dir` attribute
-   `bdi` element
-   `bdo` element
-   `br` element
-   `pre` element
-   `textarea` element
-   `wbr` element

#### <span class="secno">3.2.9</span> Requirements related to ARIA and to platform accessibility APIs<a href="#wai-aria" class="self-link"></a>

User agent requirements for implementing Accessibility API semantics on <a href="infrastructure.html#html-elements" id="wai-aria:html-elements">HTML elements</a> are defined in HTML Accessibility API Mappings. In addition to the rules there, for a <a href="custom-elements.html#custom-element" id="wai-aria:custom-element">custom element</a> element, the default ARIA role semantics are determined as follows: [\[HTMLAAM\]](references.html#refsHTMLAAM)

1.  Let map be element's <a href="custom-elements.html#native-accessibility-semantics-map" id="wai-aria:native-accessibility-semantics-map">native accessibility semantics map</a>.
2.  If map\["`role`"\] <a href="https://infra.spec.whatwg.org/#map-exists" id="wai-aria:map-exists">exists</a>, then return it.
3.  Return no role.

Similarly, for a <a href="custom-elements.html#custom-element" id="wai-aria:custom-element-2">custom element</a> element, the default ARIA state and property semantics, for a state or property named stateOrProperty, are determined as follows:

1.  Let map be element's <a href="custom-elements.html#native-accessibility-semantics-map" id="wai-aria:native-accessibility-semantics-map-2">native accessibility semantics map</a>.
2.  If map\[stateOrProperty\] <a href="https://infra.spec.whatwg.org/#map-exists" id="wai-aria:map-exists-2">exists</a>, then return it.
3.  Return the default value for stateOrProperty.

The "default semantics" referred to here are sometimes also called "native", "implicit", or "host language" semantics in ARIA. [\[ARIA\]](references.html#refsARIA)

One implication of these definitions is that the default semantics can change over time. This allows custom elements the same expressivity as built-in elements; e.g., compare to how the default ARIA role semantics of an `a` element change as the `href` attribute is added or removed.

For an example of this in action, see [the custom elements section](custom-elements.html#custom-elements-accessibility-example).

------------------------------------------------------------------------

Conformance checker requirements for checking use of ARIA `role` and `aria-*` attributes on <a href="infrastructure.html#html-elements" id="wai-aria:html-elements-2">HTML elements</a> are defined in ARIA in HTML. [\[ARIAHTML\]](references.html#refsARIAHTML)

[← 2.7 Safe passing of structured data](structured-data.html) — [Table of Contents](./) — [4 The elements of HTML →](semantics.html)
