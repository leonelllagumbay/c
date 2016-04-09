<!---
  --- Security
  --- --------
  ---
  --- author: Leonell
  --- date:   09/04/16
  --->
<cfcomponent accessors="true" output="false" persistent="false">

	<cffunction name="replaceSQLInjection" access="public" >
		<cfargument name="dString" >
			<cfset dString  = replace(dString,"INSERT","","all") >
			<cfset dString  = replace(dString,"UPDATE","","all") >
			<cfset dString  = replace(dString,"TRUNCATE","","all") >
			<cfset dString  = replace(dString,"DELETE","","all") >
			<cfset dString  = replace(dString,"GRANT","","all") >
			<cfset dString  = replace(dString,"REVOKE","","all") >
			<cfset dString  = replace(dString,"CREATE","","all") >
		<cfreturn dString >
	</cffunction>

</cfcomponent>