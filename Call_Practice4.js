//Define a function getGlobalContext that logs the value of this when invoked. Use the call method to invoke getGlobalContext without explicitly passing a context.
function getGlobalContext()
{
    console.log(this);
}
getGlobalContext.call(null);