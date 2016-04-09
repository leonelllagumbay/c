<cfcomponent displayname="Main Application" hint="This is the main application. It is called in every page requests.">
	<!--- Variable: name
		  Default: no name
		  Description: The application name. If you do not set this variable, or set it to the empty string,
		  				your CFC applies to the unnamed application scope,
		  				which is the ColdFusion J2EE servlet context.
		  				For more information on unnamed scopes see Integrating JSP and servlets in a
		  				ColdFusion application in the Developing ColdFusion Applications.
		  Tip: Changing the name property would force the CF engine to restart checking files. Useful way if developing ORM apps.
    --->
	<cfset this.name = "bdg" />

	<!--- Array of structs containing the channels you want to provide.--->
	<cfset this.wschannels = [{name="chat"}] />

	<!--- Variable: clientManagement
		  Default: Administrator value
		  Description: Whether the application supports Client scope variables.
    --->
	<cfset this.clientmanagement = "true" />

	<!--- Variable: sessionManagement
		  Default: no
		  Description: Whether the application supports Session scope variables.
    --->
	<cfset this.sessionmanagement = "true" />

	<!--- Variable: setClientCookies
		  Default: True
		  Description: Whether to send CFID and CFTOKEN cookies to the client browser.
    --->
	<cfset this.setclientcookies = "true" />

	<!--- Variable: applicationTimeout
		  Default: Administrator value
		  Description: Life span, as a real number of days, of the application,
		  				including all Application scope variables.
		  				Use the CFML CreateTimeSpan function to generate this variable’s value.
    --->
	<cfset this.applicationTimeout = "#CreateTimeSpan(2,0,0,0)#" />

	<!--- Variable: ormenabled
		  Default: False
		  Description: Whether to support ColdFusion ORM.
    --->
	<cfset this.ormenabled = "true" />

	<!--- Variable: ormsettings
		  Default:
		  Description: ORM Settings.
    --->
	<cfset this.datasource = "IBOSE">

	<cfset this.ormsettings.dbcreate = "update">

	<!---
		turn off automatic ORM session flushing
	--->
	<cfset this.ormsettings.flushAtRequestEng = "false" >

	<!--- Variable: clientStorage
		  Default: Administrator value
		  Description: Where Client variables are stored; can be cookie, registry, or the name of a data source.
		  <cfset this.clientStorage = "" />
    --->
	<!--- Variable: googleMapKey
		  Default:
		  Description: The Google Maps API key required to embed Google Maps in your web pages.
		  <cfset this.googleMapKey = "" />
    --->
	<!--- Variable: datasource
		  Default:
		  Description: Name of the data source from which the query retrieves data.
		  <cfset this.datasource = "" />
    --->
	<!--- Variable: loginStorage
		  Default: cookie
		  Description: Whether to store login information in the Cookie scope or the Session scope.
		  <cfset this.loginStorage = "" />
    --->
	<!--- Variable: mappings
		  Default: Administrator value
		  Description: A structure that contains ColdFusion mappings.
		  				Each element in the structure consists of a key and a value.
		  				The logical path is the key and the absolute path is the value.
						To use this variable, select the Enable Per App SETTINGS OPTION in the
						Administrator Server Settings > Settings page.
						The mappings that you define here take precedence over the mappings defined
						in the Administrator Server Settings > Mappings page for the current application.
		  <cfset this.mappings = "" />
    --->
	<!--- Variable: serverSideFormValidation
		  Default: yes
		  Description: Whether to enable validation on cfform fields when the form is submitted.
		  <cfset this.serverSideFormValidation = "" />
    --->
	<!--- Variable: setDomainCookies
		  Default: False
		  Description: Whether to set CFID and CFTOKEN cookies for a domain (not just a host).
		  <cfset this.setDomainCookies = "" />
    --->
	<!--- Variable: scriptProtect
		  Default: Administrator value
		  Description: Whether to protect variables from cross-site scripting attacks.
		  <cfset this.scriptProtect = "" />
    --->




	<!---
		When run: The application first starts: when the first request for a page is
		processed or the first CFC method is invoked by an event gateway instance,
		Flash Remoting request, or a web service invocation.
		This method is useful for setting application-wide (Application scope) variables,
		such as the names of data sources.
	--->
	<cffunction name="onApplicationStart" returnType="boolean">
	    <!---code goes here...--->
	    <cfreturn true>
	</cffunction>

	<!---
		When run: The application ends: when the application times out or the server shuts down.
	--->
	<cffunction name="onApplicationEnd" returnType="void">
	    <cfargument name="ApplicationScope" required=true/>
	    <!---code goes here...--->
	</cffunction>

	<!---
		When run: ColdFusion receives any of the following: a request,
		an HTTP request (for example, from a browser), a message to an event gateway,
		a SOAP request, or a Flash Remoting request.
	--->
	<cffunction name="onRequestStart" returnType="boolean">
	    <cfargument name="requestname" required=true/>
	    <!--- force ColdFusion to reload ORM settings>
	    	  you may remove this line in production or not
	    --->
	    <cfif ( StructKeyExists( url, "ormreload" ) ) >
	    	<cfset ORMReload() />
	    </cfif>
	    <!--- Begin route which page to run --->
   		<!--- Mostly an ajax request is made here --->
	    <cfif Not IsDefined("URL.profile")>
   			<cfoutput><p style="font-family: Arial; font-size: .8em;">Loading.......</p></cfoutput>
	    </cfif>
		<!--- <cflogin>
			<cfif IsDefined("form.password") OR IsDefined("form.newpassword")>
				<cfif IsDefined("form.password") >
					<cfset pswrd = trim(form.password) />
				<cfelse>
					<cfset pswrd = trim(form.newpassword) />
				</cfif>
				<cfloginuser name = "#trim(form.name)#" password = "#pswrd#" roles = "#trim(form.role)#" />
			</cfif>
		</cflogin> --->
		<!--- End --->
		<cfreturn true>
	</cffunction>

	<!---
		When run: All pages and CFCs in the request have been processed: equivalent to the OnRequestEnd.cfm page.
	--->
	<cffunction name="onRequestEnd" returnType="void">
	    <cfargument type="String" name="targetPage" required=true/>
	    <!---code goes here...--->
	</cffunction>

	<!---
		When run: When an exception occurs that is not caught by a try/catch block.
	--->
	<cffunction name="onError" returnType="void">
	    <cfargument name="Exception" required=true/>
	    <cfargument name="EventName" type="String" required=true/>

		<p><cfoutput>Cause: #Exception.ErrorCode#, #Exception.Message#</cfoutput></p>
		<p><cfoutput>Detail: #Exception.Detail#</cfoutput></p>
		<p><cfoutput>Message: #Exception.Message#</cfoutput></p>
		<p><cfoutput>Root Cause: #Exception.ErrorCode#, #Exception.Message#</cfoutput></p>
		<!--- <cfdump var="#Exception#" /> --->
		<cfdump var="#Exception#">
		<cfsetting showdebugoutput="false">
	</cffunction>

	<!---
		When run: When ColdFusion receives a request for a nonexistent page.
	--->
	<cffunction name="onMissingTemplate" returnType="boolean">
	    <cfargument type="string" name="targetPage" required=true/>
	    <cfoutput>Missing page #targetPage#</cfoutput>
	    <cfsetting showdebugoutput="false">
	    <cfreturn true />
	</cffunction>

	<!---
		When run: A new session is created as a result of a request that is not in an existing session,
		including ColdFusion event gateway sessions.
		The application must enable sessions for this event to happen.
	--->
	<cffunction name="onSessionStart" returnType="void">
	    <!---code goes here...--->
			<!---<cfoutput>Session started</cfoutput>--->
	</cffunction>

	<!---
		When run: A session time-out setting is reached. This event is not triggered when the
		application ends or the server shuts down.
	--->
	<cffunction name="onSessionEnd" returnType="void" output="true">
	    <cfargument name="SessionScope" required=True/>
	    <cfargument name="ApplicationScope" required=False/>
	    <cfoutput>Session Out</cfoutput>
	</cffunction>
</cfcomponent>


