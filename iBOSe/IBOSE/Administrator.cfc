<!---
  --- Administrator
  --- -------------
  ---
  --- author: Leonell
  --- date:   05/03/16
  --->
<cfcomponent ExtDirect="true" name="Administrator">
	<cffunction name="hasComponentAccess" access="remote" ExtDirect="true">
		<cfargument name="xtype" type="string" required="true" hint="" displayname="xtype">

		<cfset returnValue = StructNew() />
		<cfset returnValue["success"] = "true" />
		<cfset returnValue["allowed"] = "true" />
		<cfset returnValue["requiresauthentication"] = "false" />
		<cfset returnValue["xtype"] = "iboselogin" />

		<cfif IsDefined("session.uid")>


		<cfelse>
			<cfset returnValue["allowed"] = "false" />
			<cfset returnValue["requiresauthentication"] = "true" />
			<cfset returnValue["xtype"] = "iboselogin" />
		</cfif>

		<cfreturn returnValue />
	</cffunction>

	<cffunction name="signOutAccount" access="remote" ExtDirect="true" >
		<cfset rs = StructNew() />
		<cfset rs["success"] = "true">
		<cfset rs["redirect_url"] = "./">

		<cflogout />


		<cfset StructDelete(session, "uid") />
		<cfset StructDelete(session, "pid") />
		<cfset StructDelete(session, "userdefaultapp") />
		<cfset StructDelete(session, "usertype") />
		<cfset StructDelete(session, "useremail") />
		<cfset StructDelete(session, "usersalutation") />
		<cfset StructDelete(session, "usersuffix") />
		<cfset StructDelete(session, "userfirstname") />
		<cfset StructDelete(session, "userlastname") />
		<cfset StructDelete(session, "usermiddlename") />
		<cfset StructDelete(session, "usermessagestatus") />
		<cfset StructDelete(session, "userimage") />
		<cfset StructDelete(session, "usercompanycode") />
		<cfset StructDelete(session, "usercompanyname") />
		<cfset StructDelete(session, "usersubcompanycode") />
		<cfset StructDelete(session, "usercompanythemefile") />
		<cfset StructDelete(session, "usercompanyemail") />
		<cfset StructDelete(session, "usercompanyslogan") />

		<cfset StructDelete(session, "domain") />
		<cfset StructDelete(session, "moodleurl") />
		<cfset StructDelete(session, "eroomsserver") />
		<cfset StructDelete(session, "ms") />
		<cfset StructDelete(session, "mu") />
		<cfset StructDelete(session, "mt") />
		<cfset StructDelete(session, "mpt") />
		<cfset StructDelete(session, "mtls") />
		<cfset StructDelete(session, "mssl") />
		<cfset StructDelete(session, "ldapserver") />
		<cfset StructDelete(session, "ldapstart") />
		<cfset StructDelete(session, "ldapattributes") />
		<cfset StructDelete(session, "ldapport") />

		<cfreturn rs>
	</cffunction>
</cfcomponent>