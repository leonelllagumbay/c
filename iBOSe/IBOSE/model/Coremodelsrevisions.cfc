<!---
  --- Coremodelrevisions
  --- ----------
  ---
  --- author: Leonell
  --- date:   29/02/16
  --->
<cfcomponent output="false" persistent="true" name="Coremodelsrevisions" table="coremodelsrevisions">

	<cfproperty name="MREVISIONID" fieldtype="id" generator="native" column="MREVISIONID" />
	<cfproperty name="MMODEL" column="MMODEL" length="255" ormType="string" />
	<cfproperty name="MPARENTMODEL" column="MPARENTMODEL"  length="64" ormType="string" />
	<cfproperty name="MDATABASENAME" column="MDATABASENAME"  length="64" ormType="string" />
	<cfproperty name="MTABLENAME" column="MTABLENAME"  length="64" ormType="string" />

</cfcomponent>