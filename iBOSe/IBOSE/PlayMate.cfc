<!---
  --- PlayMate
  --- --------
  ---
  --- author: Leonell
  --- date:   19/03/16
  --->
<cfcomponent accessors="true" output="false" access="remote" persistent="false" ExtDirect="true">

	<cffunction name="getPlayMateProfile" returntype="struct" ExtDirect="true">
		<cfset rs = StructNew() />
		<cfset rs["fullname"] = "Leonell A. Lagumbay" />
		<cfset rs["profileimage"] = "<img src='./IBOSE/filespublic/profile/Lagumbay_Leonell_197x245 RGB.jpg' width='37px' height='37px' style='border-radius: 20px;'>" />

		<cfreturn rs />
	</cffunction>

</cfcomponent>