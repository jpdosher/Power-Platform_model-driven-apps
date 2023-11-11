this.formOnLoad = function(executionContext) 
{
    
   //obtain the main object  
   var formContext = executionContext.getFormContext();
    

    //get attribute to see if it is null
    jpdName = formContext.getAttribute("jpd_name").getValue();
    console.log(jpdName);

    if(jpdName !== null){

    //get current asset id
    currentAssetId = formContext.data.entity.getId();
       
    //grid context and fetch xml
    gridContext = formContext.getControl("Subgrid_new_1");
    exampleFetch = gridContext.getFetchXml();

    
    //build xml with filtered Asset Id
    var fetchXml = "<fetch version='1.0' mapping='logical' 
savedqueryid='79f7e750-6a6b-4b11-b812-67cc6cac844c' r
eturntotalrecordcount='true' page='1' count='4' no-lock='false'>" +
    "<entity name='jpd_alocacaodeativo'>"+
    "<attribute name='jpd_alocacaodeativoid'/>"+
    "<attribute name='jpd_name'/>"+
    "<order attribute='jpd_name' descending='false'/>"+
    "<filter type='and'>"+
    "condition attribute='statecode' operator='eq' value='0'/>"+
    "<condition attribute='jpd_iddoativo' operator='eq' value="+"'"+
    currentAssetId+"'"+
    "/>"+
    "</filter>"+
    "<attribute name='jpd_colaborador'/>"+
    "<attribute name='jpd_datadealocacao'/>"+
    "<attribute name='jpd_retornarate'/>"+
    "<attribute name='jpd_iddoativo'/>"+
    "<link-entity alias='a_e5d2f7baeafd4024b33652d6c13sk11' 
    name='jpd_ativo' to='jpd_iddoativo' from='jpd_ativoid' 
    link-type='outer' visible='false'>"+
    "<attribute name='jpd_nomedoativo'/>"+
    "</link-entity>"+
    "</entity>"+
    "</fetch>";
    console.log(fetchXml);

    gridContext.setFilterXml(fetchXml);    

    //refresh grid to show filtered data
     formContext.getControl('Subgrid_new_1').refresh();
    }

}