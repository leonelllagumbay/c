<!---
  --- Coremodel
  --- ---------
  ---
  --- author: Leonell
  --- date:   19/03/16
  --->
<cfcomponent accessors="true" output="false" persistent="false" name="Coremodel" ExtDirect="true">

	<cffunction name="ReadModel" ExtDirect="true">
		<cfargument name="dquery">
		<cfargument name="dorder">
		<cfargument name="dorderdirection">

		<cfset rs1 = StructNew() />
		<cfset rs1["MMODEL"] = "Housewares">
		<cfset rs1["MPARENTMODEL"] = "1.25">
		<cfset rs1["MDATABASENAME"] = "Tommy Maintz">
		<cfset rs1["iconCls"] = "Ttask-folderl">
		<cfset rs1["expanded"] = "true">

		<cfset children1 = ArrayNew(1) />
		<cfset ArrayAppend(children1, rs1) />

		<cfset rs2 = StructNew() />
		<cfset rs2["MMODEL"] = "Lcalendar">
		<cfset rs2["MPARENTMODEL"] = "Root">
		<cfset rs2["MDATABASENAME"] = "IBOSE">
		<cfset rs2["MTABLENAME"] = "lcalendar">
		<cfset rs2["iconCls"] = "task-folder">
		<cfset rs2["expanded"] = "true">
		<cfset rs2["children"] = children1 />

		<cfset children2 = ArrayNew(1) />
		<cfset ArrayAppend(children2, rs2) />

		<cfset rs3 = StructNew() />
		<cfset rs3["text"] = "." />
		<cfset rs3["children"] = children2 />
		<cfset rs3["expanded"] = "true" />


		<cfreturn rs3 />
	</cffunction>



	<cffunction name="CreateModel" ExtDirect="true">
		<cfset rs = StructNew() />

		<cfreturn rs />
	</cffunction>

	<cffunction name="UpdateModel" ExtDirect="true">
		<cfset rs = StructNew() />

		<cfreturn rs />
	</cffunction>

	<cffunction name="DestroyModel" ExtDirect="true">
		<cfset rs = StructNew() />

		<cfreturn rs />
	</cffunction>

	<cffunction name="ReadModelFields" ExtDirect="true">
		<cfargument name="page" >
		<cfargument name="start" >
		<cfargument name="limit" >
		<cfargument name="sort" >
		<cfargument name="filter" >
		<cfargument name="args" >

		<cfset rs = StructNew() />
		<cfset resultArr = ArrayNew(1) >

		<cfset tmpresult = StructNew() >
		<cfset tmpresult['MCOLUMN']      = "test"  >
		<cfset ArrayAppend(resultArr, tmpresult) />
		<cfset tmpresult = StructNew() >
		<cfset tmpresult['MCOLUMN']      = "test2"  >

		<cfset ArrayAppend(resultArr, tmpresult) />

		<cfset rs["topics"] = resultArr />
		<cfset rs["totalCount"] = 120 />
		<cfreturn rs />
	</cffunction>
</cfcomponent>