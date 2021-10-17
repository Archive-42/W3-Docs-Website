[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](https://www.w3.org/)

Geolocation API Specification 2nd Edition
=========================================

W3C Recommendation 8 November 2016 (GitHub reference added 31 January 2018)
---------------------------------------------------------------------------

This version:  
<https://www.w3.org/TR/2016/REC-geolocation-API-20161108/>

Latest version:  
<https://www.w3.org/TR/geolocation-API/>

Previous versions:  
<https://www.w3.org/TR/2015/PER-geolocation-API-20150528/>

<https://www.w3.org/TR/2013/REC-geolocation-API-20131024/>

Editor:  
Andrei Popescu, Google, Inc

Please check the [**errata**](https://www.w3.org/2008/geolocation/geoapi-errata.html) for any errors or issues reported since publication.

See also [**translations**](https://www.w3.org/2003/03/Translations/byTechnology?technology=geolocation-API).

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

This specification defines an API that provides scripted access to geographical location information associated with the hosting device.

Status of This Document
-----------------------

Status Update (January 2018): A reference to the GitHub repository was added on 31 January 2018 for comments.

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document is an edited version of the [2013 Geolocation API Recommendation](http://www.w3.org/TR/2013/REC-geolocation-API-20131024/), and incorporates changes made against the 2013 Recommendation that resolve all the [errata](http://www.w3.org/2008/geolocation/geoapi-errata.html#1st-edition). A [diff-marked version](diff.html) of this document from the previous Recommendation is also available for comparison purposes. Please note that there is [an open issue regarding insecure contexts](https://groups.google.com/forum/#!topic/mozilla.dev.platform/BvcsTpAqIsQ) which is not filed on the Errata yet.

This document was published by the [Geolocation Working Group](https://www.w3.org/2008/geolocation/) as a Recommendation. If you wish to make comments regarding this document, please use [file a bug](https://github.com/w3c/geolocation-api/issues) on GitHub (or send them to <public-geolocation@w3.org> if you cannot use GitHub ([archives](http://lists.w3.org/Archives/Public/public-geolocation/)). All comments are welcome.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

The group generated an [Implementation Report](http://www.w3.org/2008/geolocation/drafts/API/Implementation-Report.html) which shows the exit criteria for the Candidate Recommendation have been met. There were at least five User Agent implementations, and all the features of the Geolocation API specification were implemented by two or more User Agents. Also there were at least two Websites that passed the Website Tests.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/42891/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2015/Process-20150901/" id="w3c_process_revision">1 September 2015 W3C Process Document</a>.

Table of Contents
-----------------

1.  [<span class="secno">1 </span>Conformance requirements](#conformance)
2.  [<span class="secno">2 </span>Introduction](#introduction)
3.  [<span class="secno">3 </span>Scope](#scope)
4.  [<span class="secno">4 </span>Security and privacy considerations](#security)
    -   [<span class="secno">4.1 </span>Privacy considerations for implementers of the Geolocation API](#privacy_for_uas)
    -   [<span class="secno">4.2 </span>Privacy considerations for recipients of location information](#privacy_for_recipients)
    -   [<span class="secno">4.3 </span>Additional implementation considerations](#implementation_considerations)
5.  [<span class="secno">5 </span>API Description](#api_description)
    -   [<span class="secno">5.1 </span>Geolocation interface](#geolocation_interface)
    -   [<span class="secno">5.2 </span>PositionOptions interface](#position_options_interface)
    -   [<span class="secno">5.3 </span>Position interface](#position_interface)
    -   [<span class="secno">5.4 </span>Coordinates interface](#coordinates_interface)
    -   [<span class="secno">5.5 </span>PositionError interface](#position_error_interface)
6.  [<span class="secno">6 </span>Use-Cases and Requirements](#usecases)
    -   [<span class="secno">6.1 </span>Use-Cases](#usecases_section)
    -   [<span class="secno">6.2 </span>Requirements](#requirements_section)
7.  [Acknowledgments](#acknowledgments)
8.  [References](#references)

<span class="secno">1 </span>Conformance requirements
-----------------------------------------------------

All diagrams, examples, and notes in this specification are non-normative, as are all sections explicitly marked non-normative. Everything else in this specification is normative.

The key words "MUST", "MUST NOT", "REQUIRED", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in the normative parts of this document are to be interpreted as described in RFC2119. For readability, these words do not appear in all uppercase letters in this specification. [\[RFC2119\]](#ref-rfc2119)

Requirements phrased in the imperative as part of algorithms (such as "strip any leading space characters" or "return false and abort these steps") are to be interpreted with the meaning of the key word ("must", "should", "may", etc) used in introducing the algorithm.

Conformance requirements phrased as algorithms or specific steps may be implemented in any manner, so long as the end result is equivalent. (In particular, the algorithms defined in this specification are intended to be easy to follow, and not intended to be performant.)

User agents may impose implementation-specific limits on otherwise unconstrained inputs, e.g. to prevent denial of service attacks, to guard against running out of memory, or to work around platform-specific limitations.

Implementations that use ECMAScript to implement the APIs defined in this specification must implement them in a manner consistent with the ECMAScript Bindings defined in the Web IDL specification, as this specification uses that specification's terminology. [\[WEBIDL\]](#ref-webidl)

<span class="secno">2 </span>Introduction
-----------------------------------------

*This section is non-normative.*

The Geolocation API defines a high-level interface to location information associated only with the device hosting the implementation, such as latitude and longitude. The API itself is agnostic of the underlying location information sources. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs, as well as user input. No guarantee is given that the API returns the device's actual location.

The API is designed to enable both "one-shot" position requests and repeated position updates, as well as the ability to explicitly query the cached positions. Location information is represented by latitude and longitude coordinates. The Geolocation API in this specification builds upon earlier work in the industry, including [\[AZALOC\]](#ref-azaloc), [\[GEARSLOC\]](#ref-gears), and [\[LOCATIONAWARE\]](#ref-locationaware).

The following code extracts illustrate how to obtain basic location information:

Example of a "one-shot" position request.

        function showMap(position) {
          // Show a map centered at (position.coords.latitude, position.coords.longitude).
        }

        // One-shot position request.
        navigator.geolocation.getCurrentPosition(showMap);
        

Example of requesting repeated position updates.

        function scrollMap(position) {
          // Scrolls the map so that it is centered at (position.coords.latitude, position.coords.longitude).
        }

        // Request repeated updates.
        var watchId = navigator.geolocation.watchPosition(scrollMap);

        function buttonClickHandler() {
          // Cancel the updates when the user clicks a button.
          navigator.geolocation.clearWatch(watchId);
        }
        

Example of requesting repeated position updates and handling errors.

        function scrollMap(position) {
          // Scrolls the map so that it is centered at (position.coords.latitude, position.coords.longitude).
        }

        function handleError(error) {
          // Update a div element with error.message.
        }

        // Request repeated updates.
        var watchId = navigator.geolocation.watchPosition(scrollMap, handleError);

        function buttonClickHandler() {
          // Cancel the updates when the user clicks a button.
          navigator.geolocation.clearWatch(watchId);
        }
        

Example of requesting a potentially cached position.

        // Request a position. We accept positions whose age is not
        // greater than 10 minutes. If the user agent does not have a
        // fresh enough cached position object, it will automatically
        // acquire a new one.
        navigator.geolocation.getCurrentPosition(successCallback,
                                                 errorCallback,
                                                 {maximumAge:600000});

        function successCallback(position) {
          // By using the 'maximumAge' option above, the position
          // object is guaranteed to be at most 10 minutes old.
        }

        function errorCallback(error) {
          // Update a div element with error.message.
        }

        

Forcing the user agent to return a fresh cached position.

        // Request a position. We only accept cached positions whose age is not
        // greater than 10 minutes. If the user agent does not have a fresh
        // enough cached position object, it will immediately invoke the error
        // callback.
        navigator.geolocation.getCurrentPosition(successCallback,
                                                 errorCallback,
                                                 {maximumAge:600000, timeout:0});

        function successCallback(position) {
          // By using the 'maximumAge' option above, the position
          // object is guaranteed to be at most 10 minutes old.
          // By using a 'timeout' of 0 milliseconds, if there is
          // no suitable cached position available, the user agent 
          // will asynchronously invoke the error callback with code
          // TIMEOUT and will not initiate a new position
          // acquisition process.
        }

        function errorCallback(error) {
          switch(error.code) {
            case error.TIMEOUT:
              // Quick fallback when no suitable cached position exists.
              doFallback();
              // Acquire a new position object.
              navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
              break;
            case ... // treat the other error cases.
          };
        }

        function doFallback() {
          // No fresh enough cached position available.
          // Fallback to a default position.
        }
        

Forcing the user agent to return any available cached position.

        // Request a position. We only accept cached positions, no matter what 
        // their age is. If the user agent does not have a cached position at
        // all, it will immediately invoke the error callback.
        navigator.geolocation.getCurrentPosition(successCallback,
                                                 errorCallback,
                                                 {maximumAge:Infinity, timeout:0});

        function successCallback(position) {
          // By setting the 'maximumAge' to Infinity, the position
          // object is guaranteed to be a cached one.
          // By using a 'timeout' of 0 milliseconds, if there is
          // no cached position available at all, the user agent 
          // will immediately invoke the error callback with code
          // TIMEOUT and will not initiate a new position
          // acquisition process.
          if (position.timestamp < freshness_threshold && 
              position.coords.accuracy < accuracy_threshold) {
            // The position is relatively fresh and accurate.
          } else {
            // The position is quite old and/or inaccurate.
          }
        }

        function errorCallback(error) {
          switch(error.code) {
            case error.TIMEOUT:
              // Quick fallback when no cached position exists at all.
              doFallback();
              // Acquire a new position object.
              navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
              break;
            case ... // treat the other error cases.
          };
        }

        function doFallback() {
          // No cached position available at all.
          // Fallback to a default position.
        }
        

<span class="secno">3 </span>Scope
----------------------------------

*This section is non-normative.*

This specification is limited to providing a scripting API for retrieving geographic position information associated with a hosting device. The geographic position information is provided in terms of World Geodetic System coordinates [\[WGS84\]](#ref-wgs).

The scope of this specification does not include providing a markup language of any kind.

The scope of this specification does not include defining new URI schemes for building URIs that identify geographic locations.

<span class="secno">4 </span>Security and privacy considerations
----------------------------------------------------------------

The API defined in this specification is used to retrieve the geographic location of a hosting device. In almost all cases, this information also discloses the location of the user of the device, thereby potentially compromising the user's privacy. A conforming implementation of this specification must provide a mechanism that protects the user's privacy and this mechanism should ensure that no location information is made available through this API without the user's express permission.

### <span class="secno">4.1 </span>Privacy considerations for implementers of the Geolocation API

User agents must not send location information to Web sites without the express permission of the user. User agents must acquire permission through a user interface, unless they have prearranged trust relationships with users, as described below. The user interface must include the host component of the document's URI [\[URI\]](#ref-uri). Those permissions that are acquired through the user interface and that are preserved beyond the current browsing session (i.e. beyond the time when the browsing context [\[BROWSINGCONTEXT\]](#ref-context) is navigated to another URL) must be revocable and user agents must respect revoked permissions.

Some user agents will have prearranged trust relationships that do not require such user interfaces. For example, while a Web browser will present a user interface when a Web site performs a geolocation request, a VOIP telephone may not present any user interface when using location information to perform an E911 function.

### <span id="privacy_for_" class="secno">4.2 </span>Privacy considerations for recipients of location information

Recipients must only request location information when necessary. Recipients must only use the location information for the task for which it was provided to them. Recipients must dispose of location information once that task is completed, unless expressly permitted to retain it by the user. Recipients must also take measures to protect this information against unauthorized access. If location information is stored, users should be allowed to update and delete this information.

The recipient of location information must not retransmit the location information without the user’s express permission. Care should be taken when retransmitting and use of encryption is encouraged.

Recipients must clearly and conspicuously disclose the fact that they are collecting location data, the purpose for the collection, how long the data is retained, how the data is secured, how the data is shared if it is shared, how users may access, update and delete the data, and any other choices that users have with respect to the data. This disclosure must include an explanation of any exceptions to the guidelines listed above.

### <span class="secno">4.3 </span>Additional implementation considerations

*This section is non-normative.*

Further to the requirements listed in the previous section, implementers of the Geolocation API are also advised to consider the following aspects that may negatively affect the privacy of their users: in certain cases, users may inadvertently grant permission to the user agent to disclose their location to Web sites. In other cases, the content hosted at a certain URL changes in such a way that the previously granted location permissions no longer apply as far as the user is concerned. Or the users might simply change their minds.

Predicting or preventing these situations is inherently difficult. Mitigation and in-depth defensive measures are an implementation responsibility and not prescribed by this specification. However, in designing these measures, implementers are advised to enable user awareness of location sharing, and to provide easy access to interfaces that enable revocation of permissions.

<span class="secno">5 </span>API Description
--------------------------------------------

### <span class="secno">5.1 </span>Geolocation interface

The `Geolocation` object is used by scripts to programmatically determine the location information associated with the hosting device. The location information is acquired by applying a user-agent specific algorithm, creating a `Position` object, and populating that object with appropriate data accordingly.

     partial interface Navigator {
       readonly attribute Geolocation geolocation;
     };

      

  

     [NoInterfaceObject]
     interface Geolocation { 
       void getCurrentPosition(PositionCallback successCallback,
                               optional PositionErrorCallback errorCallback,
                               optional PositionOptions options);

       long watchPosition(PositionCallback successCallback,
                          optional PositionErrorCallback errorCallback,
                          optional PositionOptions options);

       void clearWatch(long watchId);
     };

     callback PositionCallback = void (Position position);

     callback PositionErrorCallback = void (PositionError positionError);
     

The `getCurrentPosition()` method takes one, two or three arguments. When called, it must immediately return and then asynchronously attempt to obtain the current location of the device. If the attempt is successful, the `successCallback` must be invoked (i.e. the `handleEvent` operation must be called on the callback object) with a new `Position` object, reflecting the current location of the device. If the attempt fails, the `errorCallback` must be invoked with a new `PositionError` object, reflecting the reason for the failure.

The implementation of the `getCurrentPosition` method must execute the following set of steps:

1.  If a cached `Position` object, whose age is no greater than the value of the maximumAge variable, is available, invoke the `successCallback` with the cached `Position` object as a parameter and exit this set of steps.
2.  If the value of the timeout variable is 0, invoke the `errorCallback` (if present) with a new `PositionError` object whose `code` attribute is set to TIMEOUT and exit this set of steps.
3.  Start a location acquisition operation (e.g. by invoking a platform-specific API), possibly taking into account the value of the enableHighAccuracy variable (see the definition of `enableHighAccuracy` for details).
4.  Start a timer that will fire after the number of milliseconds denoted by the value of the timeout variable. When the timer fires, cancel any ongoing location acquisition operations associated with this instance of the steps, invoke the `errorCallback` (if present) with a new `PositionError` object whose `code` attribute is set to TIMEOUT, and exit this set of steps.
5.  If the operation completes successfully before the timeout expires, cancel the pending timer, invoke the `successCallback` with a new `Position` object that reflects the result of the acquisition operation and exit this set of steps.
6.  If the operation fails before the timeout expires, cancel the pending timer and invoke the `errorCallback` (if present) with a new `PositionError` object whose `code` is set to POSITION\_UNAVAILABLE.

The `watchPosition()` method takes one, two or three arguments. When called, it must immediately return a long value that uniquely identifies a *watch operation* and then asynchronously start the watch operation. This operation must first attempt to obtain the current location of the device. If the attempt is successful, the `successCallback` must be invoked (i.e. the `handleEvent` operation must be called on the callback object) with a new `Position` object, reflecting the current location of the device. If the attempt fails, the `errorCallback` must be invoked with a new `PositionError` object, reflecting the reason for the failure. The watch operation then must continue to monitor the position of the device and invoke the appropriate callback every time this position changes. The watch operation must continue until the `clearWatch` method is called with the corresponding identifier.

The implementation of the watch process must execute the following set of steps:

1.  If a cached `Position` object, whose age is no greater than the value of the maximumAge variable, is available, invoke the `successCallback` with the cached `Position` object as a parameter.
2.  Register to receive system events that indicate that the position of the device may have changed (e.g. by listening or polling for changes in WiFi or cellular signals).
3.  Start a location acquisition operation (e.g. by invoking a platform-specific API), possibly taking into account the value of the enableHighAccuracy variable (see the definition of `enableHighAccuracy` for details).
4.  Run the following acquisition steps:
    1.  If the timer is not already running, start a timer that will fire after the number of milliseconds denoted by the value of the timeout variable. When the timer fires, invoke the `errorCallback` (if present) with a new `PositionError` object whose `code` attribute is set to TIMEOUT and jump to step 6.
    2.  If the location acquisition operation successfully yields a new position before the timeout expires, perform the following two steps:
        1.  Cancel the pending timer. Note that the timer must be restarted once this algorithm jumps back to the beginning of the acquisition steps.
        2.  If the new position differs significantly from the previous position, invoke the `successCallback` with a new `Position` object that reflects the result of the acquisition operation. This step may be subject to callback rate limitation ([see below](#rate-limit)).
    3.  Else, if the location acquisition operation reports an error before the timeout expires, invoke the `errorCallback` (if present) with a new `PositionError` object whose `code` is set to POSITION\_UNAVAILABLE. This step may be subject to callback rate limitation ([see below](#rate-limit)).
5.  Wait for a system event to be received. When such an event is received jump to the acquisition steps above.

In step 5.2.2 of the watch process, the `successCallback` is only invoked when a new position is obtained and this position differs significantly from the previously reported position. The definition of what constitutes a significant difference is left to the implementation. Furthermore, in steps 5.2.2 and 5.2.3, implementations may impose limitations on the frequency of callbacks so as to avoid inadvertently consuming a disproportionate amount of resources.

For both `getCurrentPosition` and `watchPosition`, the implementation must never invoke the `successCallback` without having first obtained permission from the user to share location. Furthermore, the implementation should always obtain the user's permission to share location before executing any of the `getCurrentPosition` or `watchPosition` steps described above. If the user grants permission, the appropriate callback must be invoked as described above. If the user denies permission, the `errorCallback` (if present) must be invoked with `code` PERMISSION\_DENIED, irrespective of any other errors encountered in the above steps. The time that is spent obtaining the user permission must not be included in the period covered by the `timeout` attribute of the `PositionOptions` parameter. The `timeout` attribute must only apply to the location acquisition operation.

The `clearWatch()` method takes one argument. When called, it must first check the value of the given `watchId` argument. If this value does not correspond to any previously started watch process, then the method must return immediately without taking any further action. Otherwise, the watch process identified by the `watchId` argument must be immediately stopped and no further callbacks must be invoked.

### <span class="secno">5.2 </span>PositionOptions interface

The `getCurrentPosition()` and `watchPosition()` methods accept `PositionOptions` objects as their third argument.

In ECMAScript, `PositionOptions` objects are represented using regular native objects with optional properties named `enableHighAccuracy`, `timeout` and `maximumAge`.

      dictionary PositionOptions {
        boolean enableHighAccuracy = false;
        [Clamp] unsigned long timeout = 0xFFFFFFFF;
        [Clamp] unsigned long maximumAge = 0;
      };

      

In ECMAScript, the `enableHighAccuracy`, `timeout` and `maximumAge` properties are all optional: when creating a PositionOptions object, the developer may specify any of these properties.

The `enableHighAccuracy` attribute provides a hint that the application would like to receive the best possible results. This may result in slower response times or increased power consumption. The user might also deny this capability, or the device might not be able to provide more accurate results than if the flag wasn't specified. The intended purpose of this attribute is to allow applications to inform the implementation that they do not require high accuracy geolocation fixes and, therefore, the implementation can avoid using geolocation providers that consume a significant amount of power (e.g. GPS). This is especially useful for applications running on battery-powered devices, such as mobile phones.

The `timeout` attribute denotes the maximum length of time (expressed in milliseconds) that is allowed to pass from the call to `getCurrentPosition()` or `watchPosition()` until the corresponding `successCallback` is invoked. If the implementation is unable to successfully acquire a new `Position` before the given timeout elapses, and no other errors have occurred in this interval, then the corresponding `errorCallback` must be invoked with a `PositionError` object whose `code` attribute is set to [TIMEOUT](#timeout_error). Note that the time that is spent obtaining the user permission is *not* included in the period covered by the `timeout` attribute. The `timeout` attribute only applies to the location acquisition operation.

In case of a `getCurrentPosition()` call, the `errorCallback` would be invoked at most once. In case of a `watchPosition()`, the `errorCallback` could be invoked repeatedly: the first timeout is relative to the moment `watchPosition()` was called or the moment the user's permission was obtained, if that was necessary. Subsequent timeouts are relative to the moment when the implementation determines that the position of the hosting device has changed and a new `Position` object must be acquired.

The `maximumAge` attribute indicates that the application is willing to accept a cached position whose age is no greater than the specified time in milliseconds. If `maximumAge` is set to 0, the implementation must immediately attempt to acquire a new position object. Setting the `maximumAge` to Infinity must determine the implementation to return a cached position regardless of its age. If an implementation does not have a cached position available whose age is no greater than the specified `maximumAge`, then it must acquire a new position object. In case of a `watchPosition()`, the `maximumAge` refers to the first position object returned by the implementation.

### <span class="secno">5.3 </span>Position interface

The `Position` interface is the container for the geolocation information returned by this API. This version of the specification allows one attribute of type `Coordinates` and a `timestamp`. Future versions of the API may allow additional attributes that provide other information about this position (e.g. street addresses).

      [NoInterfaceObject]
      interface Position {
        readonly attribute Coordinates coords;
        readonly attribute DOMTimeStamp timestamp;
      };
      

The `coords` attribute contains a set of geographic coordinates together with their associated accuracy, as well as a set of other optional attributes such as altitude and speed.

The `timestamp` attribute represents the time when the `Position` object was acquired and is represented as a DOMTimeStamp [\[DOMTIMESTAMP\]](#ref-domtimestamp).

### <span class="secno">5.4 </span>Coordinates interface

      [NoInterfaceObject]
      interface Coordinates {
        readonly attribute double latitude;
        readonly attribute double longitude;
        readonly attribute double? altitude;
        readonly attribute double accuracy;
        readonly attribute double? altitudeAccuracy;
        readonly attribute double? heading;
        readonly attribute double? speed;
      };
      

The geographic coordinate reference system used by the attributes in this interface is the World Geodetic System (2d) [\[WGS84\]](#ref-wgs). No other reference system is supported.

The `latitude` and `longitude` attributes are geographic coordinates specified in decimal degrees.

The `altitude` attribute denotes the height of the position, specified in meters above the [\[WGS84\]](#ref-wgs) ellipsoid. If the implementation cannot provide altitude information, the value of this attribute must be null.

The `accuracy` attribute denotes the accuracy level of the latitude and longitude coordinates. It is specified in meters and must be supported by all implementations. The value of the accuracy attribute must be a non-negative real number.

The `altitudeAccuracy` attribute is specified in meters. If the implementation cannot provide altitude information, the value of this attribute must be null. Otherwise, the value of the altitudeAccuracy attribute must be a non-negative real number.

The `accuracy` and `altitudeAccuracy` values returned by an implementation should correspond to a 95% confidence level.

The `heading` attribute denotes the direction of travel of the hosting device and is specified in degrees, where 0° ≤ heading &lt; 360°, counting clockwise relative to the true north. If the implementation cannot provide heading information, the value of this attribute must be null. If the hosting device is stationary (i.e. the value of the `speed` attribute is 0), then the value of the heading attribute must be NaN.

The `speed` attribute denotes the magnitude of the horizontal component of the hosting device's current velocity and is specified in meters per second. If the implementation cannot provide speed information, the value of this attribute must be null. Otherwise, the value of the speed attribute must be a non-negative real number.

### <span class="secno">5.5 </span>PositionError interface

      [NoInterfaceObject]
      interface PositionError {
        const unsigned short PERMISSION_DENIED = 1;
        const unsigned short POSITION_UNAVAILABLE = 2;
        const unsigned short TIMEOUT = 3;
        readonly attribute unsigned short code;
        readonly attribute DOMString message;
      };
      

The `code` attribute must return the appropriate code from the following list:

`PERMISSION_DENIED` (numeric value 1)   
The location acquisition process failed because the document does not have permission to use the Geolocation API.

`POSITION_UNAVAILABLE` (numeric value 2)   
The position of the device could not be determined. For instance, one or more of the location providers used in the location acquisition process reported an internal error that caused the process to fail entirely.

`TIMEOUT` (numeric value 3)   
The length of time specified by the `timeout` property has elapsed before the implementation could successfully acquire a new `Position` object.

The `message` attribute must return an error message describing the details of the error encountered. This attribute is primarily intended for debugging and developers should not use it directly in their application user interface.

<span class="secno">6 </span>Use-Cases and Requirements
-------------------------------------------------------

### <span class="secno">6.1 </span>Use-Cases

#### <span class="secno">6.1.1 </span>Find points of interest in the user's area

Someone visiting a foreign city could access a Web application that allows users to search or browse through a database of tourist attractions. Using the Geolocation API, the Web application has access to the user's approximate position and it is therefore able to rank the search results by proximity to the user's location.

#### <span class="secno">6.1.2 </span>Annotating content with location information

A group of friends is hiking through the Scottish highlands. Some of them write short notes and take pictures at various points throughout the journey and store them using a Web application that can work offline on their hand-held devices. Whenever they add new content, the application automatically tags it with location data from the Geolocation API (which, in turn, uses the on-board GPS device). Every time they reach a town or a village, and they are again within network coverage, the application automatically uploads their notes and pictures to a popular blogging Web site, which uses the geolocation data to construct links that point to a mapping service. Users who follow the group's trip can click on these links to see a satellite view of the area where the notes were written and the pictures were taken. Another example is a life blog where a user creates content (e.g. images, video, audio) that records her every day experiences. This content can be automatically annotated with information such as time, geographic position or even the user's emotional state at the time of the recording.

#### <span class="secno">6.1.3 </span>Show the user's position on a map

A user finds herself in an unfamiliar city area. She wants to check her position so she uses her hand-held device to navigate to a Web-based mapping application that can pinpoint her exact location on the city map using the Geolocation API. She then asks the Web application to provide driving directions from her current position to her desired destination.

#### <span class="secno">6.1.4 </span>Turn-by-turn route navigation

A mapping application can help the user navigate along a route by providing detailed turn-by-turn directions. The application does this by registering with the Geolocation API to receive repeated location updates of the user's position. These updates are delivered as soon as the implementing user agent determines that the position of the user has changed, which allows the application to anticipate any changes of direction that the user might need to do.

#### <span class="secno">6.1.5 </span>Alerts when points of interest are in the user's vicinity

A tour-guide Web application can use the Geolocation API to monitor the user's position and trigger visual or audio notifications when interesting places are in the vicinity. An online task management system can trigger reminders when the user is in the proximity of landmarks that are associated with certain tasks.

#### <span class="secno">6.1.6 </span>Up-to-date local information

A widget-like Web application that shows the weather or news that are relevant to the user's current area can use the Geolocation API to register for location updates. If the user's position changes, the widget can adapt the content accordingly.

#### <span class="secno">6.1.7 </span>Location-tagged status updates in social networking applications

A social network application allows its users to automatically tag their status updates with location information. It does this by monitoring the user's position with the Geolocation API. Each user can control the granularity of the location information (e.g. city or neighborhood level) that is shared with the other users. Any user can also track his network of friends and get real-time updates about their current location.

### <span class="secno">6.2 </span>Requirements

#### <span class="secno">6.2.1 </span>The Geolocation API must provide location data in terms of a pair of latitude and longitude coordinates.

#### <span class="secno">6.2.2 </span>The Geolocation API must provide information about the accuracy of the retrieved location data.

#### <span class="secno">6.2.3 </span>The Geolocation API must support "one-shot" position updates.

#### <span class="secno">6.2.4 </span>The Geolocation API must allow an application to register to receive updates when the position of the hosting device changes.

#### <span class="secno">6.2.5 </span>The Geolocation API must allow an application to request a cached position whose age is no greater than a specified value.

#### <span class="secno">6.2.6 </span>The Geolocation API must provide a way for the application to receive updates about errors that may have occurred while obtaining a location fix.

#### <span class="secno">6.2.7 </span>The Geolocation API must allow an application to specify a desired accuracy level of the location information.

#### <span class="secno">6.2.8 </span>The Geolocation API must be agnostic to the underlying sources of location information.

Acknowledgments
---------------

Alec Berntson, Alissa Cooper, Steve Block, Greg Bolsinga, Lars Erik Bolstad, Aaron Boodman, Dave Burke, Chris Butler, Max Froumentin, Shyam Habarakada, Marcin Hanclik, Ian Hickson, Brad Lassey, Angel Machin, Cameron McCormack, Daniel Park, Stuart Parmenter, Olli Pettay, Chris Prince, Arun Ranganathan, Aza Raskin, Carl Reed, Thomas Roessler, Dirk Segers, Allan Thomson, Martin Thomson, Doug Turner, Erik Wilde, Matt Womer, Mohamed Zergaoui

References
----------

<span id="ref-azaloc">\[AZALOC\]</span>   
*(Non-normative)* [Geolocation in Firefox and Beyond](http://www.azarask.in/blog/post/geolocation-in-firefox-and-beyond/), Aza Raskin. See http://azarask.in/blog/post/geolocation-in-firefox-and-beyond

<span id="ref-context">\[BROWSINGCONTEXT\]</span>   
[The browsing context in HTML5](http://www.w3.org/TR/2014/REC-html5-20141028/browsers.html#windows), Ian Hickson, Robin Berjon, Steve Faulkner, Travis Leithead, Erika Doyle Navara, Theresa O'Connor, Silvia Pfeiffer, Editors. World Wide Web Consortium. See http://www.w3.org/TR/2014/REC-html5-20141028/browsers.html\#windows

<span id="ref-uri">\[URI\]</span>   
[Uniform Resource Identifiers (URI): Generic Syntax](http://www.ietf.org/rfc/rfc2396.txt), T. Berners-Lee, R. Fielding, L. Masinter, Editors. Internet Engineering Task Force. See http://www.ietf.org/rfc/rfc2396.txt

<span id="ref-navigator">\[NAVIGATOR\]</span>   
[Navigator interface in HTML5](http://www.w3.org/TR/2014/REC-html5-20141028/webappapis.html#navigator), Ian Hickson, Robin Berjon, Steve Faulkner, Travis Leithead, Erika Doyle Navara, Theresa O'Connor, Silvia Pfeiffer, Editors. World Wide Web Consortium. See http://www.w3.org/TR/2014/REC-html5-20141028/webappapis.html\#navigator

<span id="ref-domtimestamp">\[DOMTIMESTAMP\]</span>   
[The DOMTimeStamp Type](http://www.w3.org/TR/2012/CR-WebIDL-20120419/#common-DOMTimeStamp), Cameron McCormack, Editor. World Wide Web Consortium, 19 April 2012. See http://www.w3.org/TR/2012/CR-WebIDL-20120419/\#common-DOMTimeStamp

<span id="ref-gears">\[GEARSLOC\]</span>   
*(Non-normative)* [Gears Geolocation API](http://code.google.com/apis/gears/api_geolocation.html). See http://code.google.com/apis/gears/api\_geolocation.html \[historical\]

<span id="ref-locationaware">\[LOCATIONAWARE\]</span>   
*(Non-normative)* [LocationAware.org](http://cdn.oreillystatic.com/en/assets/1/event/4/LocationAware_%20Standardizing%20a%20Geolocation%20API%20in%20the%20Browser%20Presentation.pdf). See http://cdn.oreillystatic.com/en/assets/1/event/4/LocationAware\_%20Standardizing%20a%20Geolocation%20API%20in%20the%20Browser%20Presentation.pdf \[historical\]

<span id="ref-rfc2119">\[RFC2119\]</span>   
[Key words for use in RFCs to Indicate Requirement Levels](http://www.ietf.org/rfc/rfc2119.txt), Scott Bradner. Internet Engineering Task Force, March 1997. See http://www.ietf.org/rfc/rfc2119.txt

<span id="ref-webidl">\[WEBIDL\]</span>   
[web IDL](http://www.w3.org/TR/2012/CR-WebIDL-20120419/), Cameron McCormack, Editor. World Wide Web Consortium, 19 April 2012. See http://www.w3.org/TR/2012/CR-WebIDL-20120419/

<span id="ref-wgs">\[WGS84\]</span>   
[National Imagery and Mapping Agency Technical Report 8350.2, Third Edition](http://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf). National Imagery and Mapping Agency, 3 January 2000. See http://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf

[↑](#toc)
