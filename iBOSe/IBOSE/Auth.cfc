<!---
  --- Auth
  --- ----
  ---
  --- author: Leonell
  --- date:   13/03/16
  --->
<cfcomponent name="Auth" ExtDirect="true">
	<cffunction name="Login" ExtDirect="true" ExtFormHandler="true">

		<cfset retStruct = StructNew() />
		<cfset retStruct["success"] = "true" />

		<cfset pwdlcase = Lcase(form.password)/ >
		<cfif form.username eq "admin" AND pwdlcase eq "c2fdb2070c9a514c4fa79324b31dfce8cf6815013365b5198ab5966bc2c780ddb6aa8c4f4ef31fb8809642dd4915a51b1b853c93f92ec532ead42e68152f68f2">

			<cfset retStruct["message"] = "notauthenticated" />
			<cfset retStruct["detail"] = "User name or password is not found. Forgot password." />

			<cflogin>
				<cfloginuser name = "#form.username#" password = "#pwdlcase#" roles = "admin" />
				<cfset retStruct["message"] = "authenticated" />
				<cfset retStruct["detail"] = "" />
				<cfset session["uid"] = "1" />
				<cfset session["pid"] = "P020160319" />
				<cfset session["userdefaultapp"] = "home" />
				<cfset session["usertype"] = "classic" />
				<cfset session["useremail"] = "leonelllagumbay@gmail.com" />
				<cfset session["usersalutation"] = "Mr" />
				<cfset session["usersuffix"] = "Jr" />
				<cfset session["userfirstname"] = "Leonell" />
				<cfset session["userlastname"] = "Lagumbay" />
				<cfset session["usermiddlename"] = "Adizas" />
				<cfset session["usermessagestatus"] = "Hello everyone" />
				<cfset session["userimage"] = "sample image" />
				<cfset session["usercompanycode"] = "FBC" />
				<cfset session["usercompanyname"] = "Filinvest Baseline" />
				<cfset session["usersubcompanycode"] = "Filinvest Baseline Sub" />
				<cfset session["usercompanyemail"] = "leonelllagumbay@gmail.com" />
				<cfset session["usercompanyslogan"] = "We make your dreams" />
				<cfset session["accesskey"] = "" />
				<cfset session["applicationkey"] = "" />

			</cflogin>


			<cfset retStruct["duration"] = 5000 />
			<cfset retStruct["username"] = "username!" /> pwd
			<cfset retStruct["hash"] = "hash!" />
			<cfset retStruct["type"] = "type!" />

		<cfelse>

		    <cfset retStruct["message"] = "Wrong username or password just logged out" />
			<cfset retStruct["detail"] = "Wrong username or password logged out detail" />
			<cfset retStruct["duration"] = 5000 />
			<cfset retStruct["username"] = "username!" /> pwd
			<cfset retStruct["hash"] = "hash!" />
			<cfset retStruct["type"] = "type!" />
		</cfif>

		<cfreturn retStruct />
	</cffunction>
</cfcomponent>