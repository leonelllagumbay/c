﻿<!--- Configure API Namespace and Description variable names --->
<cfset args = StructNew() />
<cfset args['ns'] = "Ext.administrator" />
<cfset args['desc'] = "APIDesc" />
<cfinvoke component="Direct" method="getAPIScript" argumentcollection="#args#" returnVariable="apiScript" />
<cfcontent reset="true" />
<cfoutput>#apiScript#</cfoutput>
<!--- Extra --->
<cfsetting showdebugoutput="false"  />