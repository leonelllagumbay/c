<!---
  --- Coremodels
  --- ----------
  ---
  --- author: Leonell
  --- date:   29/02/16
  --->
<cfcomponent output="false" persistent="true" name="Coremodels" table="coremodels">

	<cfproperty name="MMODEL" fieldtype="id" generator="assigned" column="MMODEL" length="255" ormType="string" />
	<cfproperty name="MPARENTMODEL" column="MPARENTMODEL"  length="64" ormType="string" />
	<cfproperty name="MDATABASENAME" column="MDATABASENAME"  length="64" ormType="string" />
	<cfproperty name="MTABLENAME" column="MTABLENAME"  length="64" ormType="string" />

	<cfproperty name="Coremodelfields" fieldtype="one-to-many" cfc="Coremodelfields" fkcolumn="FK_MMODEL" type="array" singularname="Coremodel">

</cfcomponent>