<!---
  --- Coremodelfields
  --- ----------
  ---
  --- author: Leonell
  --- date:   29/02/16
  --->
<cfcomponent output="false" persistent="true" name="Coremodelfields" table="coremodelfields">

	<cfproperty name="MMODELFIELDS" fieldtype="id" generator="native" column="MMODELFIELDS" />
	<cfproperty name="FK_MMODEL" column="FK_MMODEL"  length="255" ormType="string" />

	<cfproperty name="MDESCRIPTION" column="MDESCRIPTION"  length="255" ormType="string" />
	<cfproperty name="MLENGTH" column="MLENGTH"  ormType="int" />
	<cfproperty name="MFIELDTYPE" column="MFIELDTYPE"  length="15" ormType="string" />
	<cfproperty name="MORMTYPE" column="MORMTYPE"  length="15" ormType="string"/>
	<cfproperty name="MGENERATOR" column="MGENERATOR"  length="20" ormType="string" />
	<cfproperty name="MCOLUMN" column="MCOLUMN"  length="200" ormType="string" />
	<cfproperty name="MFKCOLUMN" column="MFKCOLUMN"  length="200" ormType="string" />
	<cfproperty name="MDISPLAYNAME" column="MDISPLAYNAME"  length="255" ormType="string" />
	<cfproperty name="MCFC" column="MCFC"  length="64" ormType="string" />
	<cfproperty name="MCASCADE" column="MCASCADE"  length="20" ormType="string" />
	<cfproperty name="MSINGULARNAME" column="MSINGULARNAME"  length="200" ormType="string"/>
	<cfproperty name="MNOTNULL" column="MNOTNULL"  length="5" ormType="string" />
	<cfproperty name="MINVERSEJOINCOLUMN" column="MINVERSEJOINCOLUMN"  length="200" ormType="string" />
	<cfproperty name="MTYPE" column="MTYPE"  length="12" ormType="string" />
	<cfproperty name="MDEFAULT" column="MDEFAULT"  length="255" ormType="string" />
	<cfproperty name="MPRECISION" column="MPRECISION"  length="64" ormType="string" />
	<cfproperty name="MINVERSE" column="MINVERSE"  length="5" ormType="string" />
	<cfproperty name="MDATECREATED" ormtype="timestamp">
	<cfproperty name="MDATEUPDATED" ormtype="timestamp">
	<cfproperty name="MEXTRAPROP" column="MEXTRAPROP"  ormType="text" >

</cfcomponent>