<cfcomponent name="Notes" ExtDirect="true">
	<cffunction name="getDatesToMarkArray" ExtDirect="true" >
		<cfargument name="startDate" required="true" type="string" >
		<cfargument name="endDate" required="true" type="string" >

		<cftry>
			<cfset retArray = ArrayNew(1) >
			<cfif Ucase(startDate) eq "TODAY" >
				<cfset startDate = dateformat(now(),"YYYY-MM-DD") >
			<cfelse>
				<cfset startDate = dateformat("#startDate#","YYYY-MM-DD") >
			</cfif>

			<cfif Ucase(endDate) eq "TODAY" >
				<cfset endDate = dateformat(now(),"YYYY-MM-DD") >
			<cfelse>
				<cfset endDate = dateformat("#endDate#","YYYY-MM-DD") >
			</cfif>

			<cfset qryMsg = ORMExecuteQuery("SELECT DATECREATED FROM Lstickynotes WHERE DATECREATED >= '#startDate#' AND DATECREATED <= '#endDate#' AND CREATEDBYUSERID = 'administrator'" ) />
			<cfif IsDefined("qryMsg")>
				<cfloop array="#qryMsg#" index="qry">
					<cfset ArrayAppend(retArray, dateformat(qry, "YYYY-MM-DD")) >
				</cfloop>
			</cfif>

			<cfreturn qryMsg >
		<cfcatch>
			<cfreturn cfcatch.detail & ' ' & cfcatch.message >
		</cfcatch>
		</cftry>
	</cffunction>

	<cffunction name="getDateNotes" ExtDirect="true" >
		<cfargument name="selectedDate" required="true" type="date" >
		<cftry>

		<cfset qryMsg = EntityLoad("lstickynotes", {DATECREATED = '#selectedDate#', CREATEDBYUSERID = 'administrator'}, "true") />
		<cfif IsDefined("qryMsg")>
			<cfreturn qryMsg.getBODY() />
		<cfelse>
		    <cfreturn "" />
		</cfif>
		<cfcatch>
			<cfreturn cfcatch.detail & ' ' & cfcatch.message >
		</cfcatch>
		</cftry>
	</cffunction>

	<cffunction name="saveDateNotes" ExtDirect="true" >
		<cfargument name="msgBody" required="true" type="string" >
		<cfargument name="selectedDate" required="true" type="date" >
		<cftry>
		<cfset qrtMsg = EntityLoad("lstickynotes", {DATECREATED = '#selectedDate#', CREATEDBYUSERID = 'administrator'}) />
		<cfif Not IsDefined("qryMsg")>
			<cfset qrtMsg = ArrayNew(1) />
		</cfif>
       	<cfif ArrayLen(qrtMsg) gt 0 >
			<cfset qry = EntityLoad("lstickynotes", {DATECREATED = '#selectedDate#', CREATEDBYUSERID = 'administrator'}, true) />
			<cfset qry.setBODY(msgBody) />
			<cfset EntitySave(qry) />
       	<cfelse>
			<cfset qry = EntityNew("lstickynotes") />
			<cfset qry.setBODY(msgBody) />
			<cfset qry.setDATECREATED(dateformat(selectedDate, 'YYYY-MM-DD')) />
			<cfset qry.setCREATEDBYUSERID("administrator") />
			<cfset EntitySave(qry) />
       	</cfif>
		<cfreturn "true" >
		<cfcatch>
			<cfreturn cfcatch.detail & ' ' & cfcatch.message >
		</cfcatch>
		</cftry>
	</cffunction>

</cfcomponent>