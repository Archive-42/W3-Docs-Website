/******************************************************************************
 * This code handles:                                                         *
 * - the obsolete warning on outdated specs                                   *
 ******************************************************************************/
(() => {
  "use strict";

  const ESCAPEKEY = 27;
  /* Deprecation warning */
  if (
    document.location.hostname === "www.w3.org" &&
    ( /^\/TR\/(\d{4}\/|(NOTE|WD|PR|REC)\-)/.test( document.location.pathname ) ||
      !/^\/TR\//.test( document.location.pathname ) )
  ) {
    const request = new XMLHttpRequest();

    request.open( "GET", "https://www.w3.org/TR/tr-outdated-spec" );
    request.onload = () => {
      if ( request.status < 200 || request.status >= 400 ) {
        return;
      }
      try {
        var currentSpec = JSON.parse( request.responseText );
      } catch ( err ) {
        console.error( err );
        return;
      }
      document.body.classList.add( "outdated-spec" );
      const w3cCSS = document.querySelector(
        'link[href*="www.w3.org/StyleSheets/TR/W3C-"]'
      ); //old specs don't have the TR stylesheets
      const node = document.createElement( "p" );
      node.classList.add( "outdated-warning" );
      node.tabIndex = -1;
      node.setAttribute( "role", "dialog" );
      node.setAttribute( "aria-modal", "true" );
      node.setAttribute( "aria-labelledby", "outdatedWarning" );
      if ( currentSpec.style ) {
        node.classList.add( currentSpec.style );
      }

      const frag = document.createDocumentFragment();
      const heading = document.createElement( "strong" );
      heading.id = "outdatedWarning";
      heading.innerHTML = currentSpec.header;
      frag.appendChild( heading );

      const anchor = document.createElement( "a" );
      anchor.href = currentSpec.latestUrl;
      anchor.innerText = `${currentSpec.latestUrl}.`;

      const warning = document.createElement( "span" );
      warning.innerText = currentSpec.warning;
      warning.appendChild( anchor );
      frag.appendChild( warning );

      if ( w3cCSS ) {
        var button = document.createElement( "button" );
        const handler = makeClickHandler( node );
        button.addEventListener( "click", handler );
        button.innerHTML = "&#9662; collapse";
        frag.appendChild( button );
      }
      node.appendChild( frag );

      function makeClickHandler({classList}) {
        let isOpen = true;
        return function collapseWarning( event ) {
          const button = event.target;
          isOpen = !isOpen;
          classList.toggle( "outdated-collapsed" );
          document.body.classList.toggle( "outdated-spec" );
          button.innerText = isOpen ? "\u25BE collapse" : "\u25B4 expand";
        };
      }

      document.body.appendChild( node );

      if ( w3cCSS ) {
        button.focus();
        window.onkeydown = ({keyCode}) => {
          const isCollapsed = node.classList.contains( "outdated-collapsed" );
          if ( keyCode === ESCAPEKEY && !isCollapsed ) {
            button.click();
          }
        };

        window.addEventListener( "click", ({target}) => {
          if (
            !node.contains( target ) &&
            !node.classList.contains( "outdated-collapsed" )
          ) {
            button.click();
          }
        } );

        document.addEventListener(
          "focus",
          event => {
            const isCollapsed = node.classList.contains( "outdated-collapsed" );
            const containsTarget = node.contains( event.target );
            if ( !isCollapsed && !containsTarget ) {
              event.stopPropagation();
              node.focus();
            }
          },
          true
        ); // use capture to enable event delegation as focus doesn't bubble up
      }
    };

    request.onerror = () => {
      console.error(
        "Request to https://www.w3.org/TR/tr-outdated-spec failed."
      );
    };

    request.send();
  }

  /* Matomo analytics */
  if (
    document.location.hostname === "www.w3.org" &&
    /^\/TR\//.test( document.location.pathname )
  ) {
    const _paq = ( window._paq = window._paq || [] );
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push( [ "trackPageView" ] );
    _paq.push( [ "enableLinkTracking" ] );
    (() => {
      const u = "https://www.w3.org/analytics/piwik/";
      _paq.push( [ "setTrackerUrl", `${u}matomo.php` ] );
      _paq.push( [ "setSiteId", "447" ] );
      const d = document;
      const g = d.createElement( "script" );
      const s = d.getElementsByTagName( "script" )[ 0 ];
      g.type = "text/javascript";
      g.async = true;
      g.src = `${u}matomo.js`;
      s.parentNode.insertBefore( g, s );
    })();
  }
})();
