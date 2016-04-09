
<!--- <cfset retArray = ArrayNew(1) />
<cfset qryMsg = ORMExecuteQuery("SELECT DATECREATED FROM Lstickynotes WHERE DATECREATED >= '2016-02-28' AND DATECREATED <= '2016-04-09' AND CREATEDBYUSERID = 'administrator'" ) />
			<cfif IsDefined("qryMsg")>
				<cfloop array="#qryMsg#" index="qry">
					<cfset ArrayAppend(retArray, dateformat(qry, "YYYY-MM-DD")) >
				</cfloop>
			</cfif>
<cfdump var="#retArray#">
<cfdump var="#qryMsg#"> --->

<!--- <cfoutput>#Hash("leonell", "SHA-512")#</cfoutput>
<cfoutput>#Ucase("18dbe923e5ccdaf1d0fa082a3e7ece05465dd3f09a8997afd00b0401cf4d5467d55642567311abede0ec7211da4e7a5e77ec61e3a76d452216ae021366d765b5")#</cfoutput>
<cfdump var="#session#"> --->
<cfdump var="#CGI#">
