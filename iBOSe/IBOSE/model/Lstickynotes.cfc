<!---
  --- Lstickynotes
  --- ------------
  ---
  --- author: Leonell
  --- date:   07/03/16
  --->
<cfcomponent accessors="true" output="false" persistent="true" table="lstickynotes">
	<cfproperty name="ID" fieldtype="id" generator="native" column="ID" />
	<cfproperty name="BODY" column="BODY" ormType="text" default="" />
	<cfproperty name="DATECREATED" ormtype="date" default="">
	<cfproperty name="CREATEDBYUSERID" column="CREATEDBYUSERID"  length="50" ormType="string" default=""/>

	<cffunction name="init" returntype="Any">
		<cfset variables.BODY = "" />
		<cfset variables.DATECREATED = "" />
		<cfset variables.CREATEDBYUSERID = "" />
	</cffunction>

</cfcomponent>