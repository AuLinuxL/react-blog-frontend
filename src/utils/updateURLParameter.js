export default function updateURLParameter(url,param,paramValue){
    let newUrl = new URL(url);
    newUrl.searchParams.set(param,paramValue);
    return newUrl.toString();
}