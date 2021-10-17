!(() => {
  "use strict";
  const e = (e, t) => {
            e.classList ? e.classList.add( t ) : e.className += " " + t
          },
        t = (e, t) => {
          e.classList ? e.classList.remove( t ) : e.className = e.className.replace( new RegExp( "(^|\\b)" + t.split( " " ).join( "|" ) + "(\\b|$)", "gi" ), " " )
        },
        n = (e, t) => {
          return e.classList ? e.classList.contains( t ) : new RegExp( "(^| )" + t + "( |$)", "gi" ).test( e.className )
        };
  "fragmention" in window.location || (() => {
    function e( t, n ) {
      for ( let i, o = t.childNodes, a = 0; i = o[ a ]; ++a )
        if ( 1 == i.nodeType && -1 !== ( i.innerText || i.textContent || "" ).replace( /\s+/g, " " ).indexOf( n ) ) return e( i, n );
      return t
    }

    function t() {
      location.fragmention = decodeURIComponent( ( location.href.match( /#(#|%23)(.+)/ ) || [ 0, 0, "" ] )[ 2 ].replace( /\+/g, " " ) ), n && ( n.removeAttribute( "fragmention" ), n.runtimeStyle && ( n.runtimeStyle.windows = n.runtimeStyle.windows ) ), location.fragmention && ( n = e( document, location.fragmention ), n !== document ? ( n.scrollIntoView(), n.setAttribute( "fragmention", "" ), n.setAttribute( "tabindex", "-1" ), n.focus(), n.runtimeStyle && ( n.runtimeStyle.windows = n.runtimeStyle.windows ) ) : n = null )
    }
    location.fragmention = location.fragmention || "";
    var n;
    "addEventListener" in window ? ( window.addEventListener( "hashchange", t ), document.addEventListener( "DOMContentLoaded", t ) ) : ( window.attachEvent( "onhashchange", t ), document.attachEvent( "onreadystatechange", () => {
      "c" === document.readyState[ 0 ] && t()
    } ) )
  })(), document.addEventListener( "DOMContentLoaded", () => {
    const i = ( document.createTextNode( " " ), document.querySelectorAll( ".content h2[id], .content h3[id], .content h4[id]" ) ), o = i[ 0 ];
    if ( o ) {
      e( o, "first" );
      const a = i;
      let r = 1;
      let s = 1;
      const c = document.createElement( "figure" );
      c.setAttribute( "role", "navigation" ), c.setAttribute( "aria-describedby", "toc_desc" ), c.innerHTML = '<figcaption id="toc_desc">On this page <a href="#skipotp" class="visuallyhidden focusable">(skip)</a></figcaption><div class="figcontent"></div>', c.classList ? c.classList.add( "toc" ) : c.className += " toc";
      let l;
      let d;
      let u;
      let h;
      const f = document.createElement( "ul" );
      const p = document.createElement( "li" );
      let m = !1;
      let w = !1;
      Array.prototype.forEach.call( a, (e, t) => {
        const i = p.cloneNode( !0 );
        "h4" === e.localName && w === !1 && ( d = f.cloneNode( !1 ) ), "h3" === e.localName && m === !1 && ( l = f.cloneNode( !1 ) ), "h3" === e.localName && w === !0 && ( h.appendChild( d ), w = !1 ), "h2" === e.localName && m === !0 && ( w === !0 && ( h.appendChild( d ), w = !1 ), u.appendChild( l ), m = !1 ), n( e, "ex" ) && ( e.insertAdjacentHTML( "afterbegin", "<b>Example " + r + ":</b> " ), r++, n( e, "inap" ) || ( s = 1 ) ), n( e, "ap" ) && ( e.insertAdjacentHTML( "afterbegin", "<b>Approach " + s + ":</b> " ), s++ ), n( e, "newex" ) && ( r = 1 ), n( e, "newap" ) && ( s = 1 ), i.innerHTML = '<a class="' + e.getAttribute( "class" ) + '" href="#' + e.getAttribute( "id" ) + '">' + e.innerHTML + "</a>", "h4" === e.localName ? ( d.appendChild( i ), w = !0 ) : "h3" === e.localName ? ( l.appendChild( i ), m = !0, h = i ) : ( f.appendChild( i ), u = i )
      } ), m === !0 && ( u.appendChild( l ), m = !1 ), c.querySelectorAll( ".figcontent" )[ 0 ].innerHTML = f.outerHTML;
      const b = document.querySelectorAll( ".inner > :first-child" )[ 0 ];
      b.insertAdjacentHTML( "beforebegin", c.outerHTML + '<span id="skipotp" class="visuallyhidden"></span>' )
    }
    const v = document.createElement( "a" );
    v.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024"><path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path></svg>\xa0SHARE';
    const y = document.createElement( "div" );
    e( y, "permalink" );
    const g = document.createElement( "div" );
    e( g, "sharebox" );
    const E = '<p><label>Link to this section:<input type="url" value="%s" readonly> Shortcut to copy the link: <kbd>ctrl</kbd>+<kbd>C</kbd> <em>or</em> <kbd>\u2318</kbd><kbd>C</kbd></label></p><p><a href="mailto:?subject=Web%20Accessibility%20Tutorials&body=Hi!%0AYou%20might%20be%20interested%20in%20this%20section%20of%20W3C%20WAI%E2%80%99s%20Web%20Accessibility%20Tutorials%3A%0A%0A%s">E-mail a link to this section</a><button>Close</button></p>', L = window.location.origin + window.location.pathname, N = i;
    Array.prototype.forEach.call( N, (i, o) => {
      const a = v.cloneNode( !0 );
      a.setAttribute( "href", "#" + i.id ), a.setAttribute( "aria-label", "Share Link to the section \u201c" + i.textContent + "\u201d" );
      const r = E.replace( "%s", L + "#" + i.id ).replace( "%s", L + "#" + i.id ), s = g.cloneNode( !0 );
      s.innerHTML = r;
      const c = y.cloneNode( !0 );
      c.appendChild( a ), c.appendChild( s ), e( c, i.localName ), a.addEventListener( "click", function ( i ) {
        const o = this.nextSibling;
        n( o, "open" ) ? t( this.nextSibling, "open" ) : ( e( this.nextSibling, "open" ), this.nextSibling.querySelector( "input" ).select() ), i.preventDefault()
      } ), i.parentNode.insertBefore( c, i )
    } );
    const A = document.querySelectorAll( ".sharebox button" );
    if ( Array.prototype.forEach.call( A, (e, n) => {
        e.addEventListener( "click", () => {
          for ( let n = document.querySelectorAll( ".sharebox.open" ), i = n.length - 1; i >= 0; i-- ) t( n[ i ], "open" );
          e.parentNode.parentNode.parentNode.querySelector( "a" ).focus()
        } )
      } ), document.addEventListener( "click", e => {
        for ( var i = !1, o = e.target; o != document.body; o = o.parentNode )
          if ( n( o, "permalink" ) ) {
            i = !0;
            break
          } if ( !i )
          for ( let a = document.querySelectorAll( ".sharebox.open" ), r = a.length - 1; r >= 0; r-- ) t( a[ r ], "open" )
      } ), "www.w3.org" !== window.location.hostname && "w3.org" !== window.location.hostname ) {
      const k = document.createElement( "div" );
      k.className = "not-w3c-notification", k.innerHTML = 'This is an Editor\u2019s draft, for <em>preview purposes only</em>. Please see, and link to, released tutorials at <a href="http://w3.org/WAI/tutorials">w3.org/WAI/tutorials/</a>.', document.getElementsByClassName( "w3c-wai-header" )[ 0 ].insertAdjacentHTML( "beforebegin", k.outerHTML ), document.getElementsByTagName( "title" )[ 0 ].innerHTML = "[PREVIEW] " + document.getElementsByTagName( "title" )[ 0 ].innerHTML
    }
  } )
})(), /* fontfaceobserver Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
(() => {
  "use strict";

  function e( e ) {
    this.a = c, this.b = void 0, this.d = [];
    const t = this;
    try {
      e( e => {
        i( t, e )
      }, e => {
        o( t, e )
      } )
    } catch ( n ) {
      o( t, n )
    }
  }

  function t( t ) {
    return new e( (e, n) => {
      n( t )
    } );
  }

  function n( t ) {
    return new e( e => {
      e( t )
    } );
  }

  function i( e, t ) {
    if ( e.a === c ) {
      if ( t === e ) throw new TypeError( "Promise resolved with itself." );
      let n = !1;
      try {
        const r = t && t.then;
        if ( null !== t && "object" == typeof t && "function" == typeof r ) return void r.call( t, t => {
          n || i( e, t ), n = !0
        }, t => {
          n || o( e, t ), n = !0
        } );
      } catch ( s ) {
        return void( n || o( e, s ) )
      }
      e.a = 0, e.b = t, a( e )
    }
  }

  function o( e, t ) {
    if ( e.a === c ) {
      if ( t === e ) throw new TypeError( "Promise rejected with itself." );
      e.a = 1, e.b = t, a( e )
    }
  }

  function a( e ) {
    setTimeout( () => {
      if ( e.a !== c )
        for ( ; e.d.length; ) {
          var t = e.d.shift();
          const n = t[ 0 ];
          const i = t[ 1 ];
          const o = t[ 2 ];
          const t = t[ 3 ];
          try {
            0 === e.a ? o( "function" == typeof n ? n.call( void 0, e.b ) : e.b ) : 1 === e.a && ( "function" == typeof i ? o( i.call( void 0, e.b ) ) : t( e.b ) )
          } catch ( a ) {
            t( a )
          }
        }
    }, 0 )
  }

  function r( t ) {
    return new e( (e, n) => {
      function i( n ) {
        return i => {
          a[ n ] = i, o += 1, o === t.length && e( a )
        };
      }
      var o = 0,
        a = [];
      0 === t.length && e( a );
      for ( let r = 0; r < t.length; r += 1 ) t[ r ].c( i( r ), n )
    } );
  }

  function s( t ) {
    return new e( (e, n) => {
      for ( let i = 0; i < t.length; i += 1 ) t[ i ].c( e, n )
    } );
  }
  var c = 2;
  e.prototype.e = function ( e ) {
    return this.c( void 0, e )
  }, e.prototype.c = function ( t, n ) {
    const i = this;
    return new e( (e, o) => {
      i.d.push( [ t, n, e, o ] ), a( i )
    } );
  }, window.Promise || ( window.Promise = e, window.Promise.resolve = n, window.Promise.reject = t, window.Promise.race = s, window.Promise.all = r, window.Promise.prototype.then = e.prototype.c, window.Promise.prototype[ "catch" ] = e.prototype.e )
})(), (() => {
  "use strict";

  function e( e ) {
    this.a = document.createElement( "div" ), this.a.setAttribute( "aria-hidden", "true" ), this.a.appendChild( document.createTextNode( e ) ), this.b = document.createElement( "span" ), this.c = document.createElement( "span" ), this.f = document.createElement( "span" ), this.e = document.createElement( "span" ), this.d = -1, this.b.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;", this.c.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;", this.e.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;", this.f.style.cssText = "display:inline-block;width:200%;height:200%;", this.b.appendChild( this.f ), this.c.appendChild( this.e ), this.a.appendChild( this.b ), this.a.appendChild( this.c )
  }

  function t( e, t, n ) {
    e.a.style.cssText = "min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:" + t + ";" + n
  }

  function n( e ) {
    const t = e.a.offsetWidth, n = t + 100;
    return e.e.style.width = n + "px", e.c.scrollLeft = n, e.b.scrollLeft = e.b.scrollWidth + 100, e.d !== t ? ( e.d = t, !0 ) : !1
  }

  function i( e, t ) {
    e.b.addEventListener( "scroll", () => {
      n( e ) && null !== e.a.parentNode && t( e.d )
    }, !1 ), e.c.addEventListener( "scroll", () => {
      n( e ) && null !== e.a.parentNode && t( e.d )
    }, !1 ), n( e )
  }

  function o( e, t ) {
    this.family = e, this.style = t.style || "normal", this.variant = t.variant || "normal", this.weight = t.weight || "normal", this.stretch = t.stretch || "stretch", this.featureSettings = t.featureSettings || "normal"
  }
  let a = null;
  o.prototype.a = function ( n ) {
    n = n || "BESbswy";
    const o = "font-style:" + this.style + ";font-variant:" + this.variant + ";font-weight:" + this.weight + ";font-stretch:" + this.stretch + ";font-feature-settings:" + this.featureSettings + ";-moz-font-feature-settings:" + this.featureSettings + ";-webkit-font-feature-settings:" + this.featureSettings + ";";
    const r = document.createElement( "div" );
    const s = new e( n );
    const c = new e( n );
    const l = new e( n );
    let d = -1;
    let u = -1;
    let h = -1;
    let f = -1;
    let p = -1;
    let m = -1;
    const w = this;
    return t( s, "sans-serif", o ), t( c, "serif", o ), t( l, "monospace", o ), r.appendChild( s.a ), r.appendChild( c.a ), r.appendChild( l.a ), document.body.appendChild( r ), f = s.a.offsetWidth, p = c.a.offsetWidth, m = l.a.offsetWidth, new Promise( (e, n) => {
      function b() {
        null !== r.parentNode && document.body.removeChild( r )
      }

      function v() {
        if ( -1 !== d && -1 !== u && -1 !== h && d === u && u === h ) {
          if ( null === a ) {
            const t = /AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec( window.navigator.userAgent );
            a = !!t && ( 536 > parseInt( t[ 1 ], 10 ) || 536 === parseInt( t[ 1 ], 10 ) && 11 >= parseInt( t[ 2 ], 10 ) )
          }
          a ? d === f && u === f && h === f || d === p && u === p && h === p || d === m && u === m && h === m || ( b(), e( w ) ) : ( b(), e( w ) )
        }
      }
      setTimeout( () => {
        b(), n( w )
      }, 3e3 ), i( s, e => {
        d = e, v()
      } ), t( s, w.family + ",sans-serif", o ), i( c, e => {
        u = e, v()
      } ), t( c, w.family + ",serif", o ), i( l, e => {
        h = e, v()
      } ), t( l, w.family + ",monospace", o )
    } );
  }, window.FontFaceObserver = o, window.FontFaceObserver.prototype.check = o.prototype.a
})(), (e => {
  if ( !( e.document.documentElement.className.indexOf( "vollkorn-loaded" ) > -1 ) ) {
    const t = new e.FontFaceObserver( "Noto Sans", {
              weight: 400
            } ),
          n = new e.FontFaceObserver( "Noto Sans", {
            weight: 600
          } ),
          i = new e.FontFaceObserver( "Noto Sans", {
            weight: 400,
            style: "italic"
          } ),
          o = new e.FontFaceObserver( "Noto Sans", {
            weight: 600,
            style: "italic"
          } );
    e.Promise.all( [ t.check(), n.check(), i.check(), o.check() ] ).then( () => {
      e.document.documentElement.className += " fonts-loaded"
    } )
  }
})(this);
