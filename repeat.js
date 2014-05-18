/**
 * Sending users to youtube on repeat service on demand.
 * @author me@nishantarora.in (Nishant Arora)
 */


/**
 * Thanks to http://www.jquery4u.com/snippets/url-parameters-jquery/
 * should return the parameter value from the url for the given.
 */
$.urlParam = function(name){
    var results = new RegExp('[\\?&amp;]' + name +
        '=([^&#$]*)').exec(window.location.href);
    return results[1] || 0;
}


/**
 * Icon data uri
 */
youtubeOnRepeatIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAcCAYAAAD4IkbVAAAAAXNS' +
  'R0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9' +
  '4EEBIwBfH3k8IAAAQ6SURBVFjDxZhfiBVlGMZ/z3HVDRe1tpQEm+NduZRgECUInSGEspkIIunP' +
  'RVQQXUTWRX8MugkqguoqiYooQyK7iTlGhTmHLMwL7Q+FBCrNZFiaEpmpaevTxYzr2eOqM+tufV' +
  'fncL755nnf93ne9/mOsjikmaQA5HF4iWEI00IsElwGDAIzgengaSAmYR0GjmB+R+wx/ABsEmwB' +
  'dgdJOpxH4ak353H4FOYB8HxLkwOpwjKj0nEYSLAfCtqd/QLIo/Bx42dBDf1fKE+HbZBcfF4vdJ' +
  'uyqDUoaRsQTEZyjBHqSdh4oHtJn2BhAfS8zzu5BKwGvgaWyLoVMXvsKtcK/v4G0vUYJlg4m4Mk' +
  'fSNI0nuDdnohsALIegDUCR6JGxvAoklQ09/dX4IkXWf7CptnjE/Y9bNr61JlUWsrcLXqK8tdkf' +
  'eW9ytgPWZN0E53dT+Ux+EjwEsGq3o5TaF+XVwHXFf99tp8BrzdA9TAYuBpi515HH6Rx+E1Zdch' +
  'SNKXgVcFcnU6FFTIo9YBpIsqK9x+19I7mO3gn0EDErvK4TH6GRuEsI5aRM0k/RQgi1pTkL4VDN' +
  'UpZQNpesXItgODQbtzZzNJP5LIm+3OMPgwsBH79GekMoH0YzbkUWsWQLPdGZZ53jV51wD6K1Jg' +
  'oc0veRw+WDKe8sXHMRuRhs8YqLAwSK+UvAXYJvitFlhjVaBOKSJPs5lyWiTi4zLDPjNgAVybx+' +
  'GsIEmxvMf2/jpg+zQi5ipUEBI/lhkli8MXBIuAJ0E7bBaP0VROAMPAVGAAmAP8ATokfKRmZut0' +
  'ZwMcL8uIoN+wDPgSCE5O8h7+HAMes70OM6Or3zWo2S8bKutYDa0ABoLSUgK7yqJMLbqBxipHPz' +
  'Cz2e6sQMwDdpecn1Vm2nU4Wwq28rqqK2vvqWD8uaK9IY/DC4Ik/bOZpEfzqIWkAWB61zTzubuB' +
  'dbSmL7gdoDTtvwKvyeZMDd5FFpdizx4Zv+0OmAx8ucQqwz9VytuQRs/xczQwY67I49ZNzSQlj0' +
  'MMK8sGP2aGZLugpu4pBwJ5HM5DLAU9Z/ywoK9KeZXF4U+C+TXt2n7bQ812Z18BIJwr8SJw11m8' +
  '7V7sR5HuAIawF5QNptdnnFVgB+raNduDSGvzOJxR6m5vkKR3G5qG1YadNidG9hdg5hqtBW4Gmm' +
  'iUjVEVj6osDj8Q3DLOq8CHwMogSXf27smicLPEdRN2+7DVwHw/jquAC5fCcvCWPG6tGmNTn+0J' +
  'woosDiqPwmWITybgwGPAW8AGIDO8CVypichqUci28rg1x+g72XMY/9W2PLDbSRYjT+d/XzJFq4' +
  'gaQdLZJ1jDqVk5ntqpV8ylfnR+PB05dKtgU6P84Qnj14EjY6hywohX+aJ0ylqC2YK5L0jSg8qi' +
  'VuGgolDCCxDLQcso3NRc29P03/3zYZu/JHbY/lzifdA3QZIeyqKQfwG5J8SZyYP9NQAAAABJRU' +
  '5ErkJggg==';


/**
 * Adding the button with link to the video title
 */
$(document).ready(_load_icon).bind("DOMSubtreeModified",_load_icon);


/**
 * Loading icon
 */
function _load_icon() {
  if($('#youtube-repeat-icon').length == 0 &&
     window.location.href.indexOf('watch') != -1) {
    $('h1#watch-headline-title').before(
        '<a href="http://youtubeonrepeat.com/watch?v=' + $.urlParam('v') +
        '"><img id="youtube-repeat-icon" style="float:left; ' +
        'padding-right:10px;" width="43" height="28" '+
        'title="Repeat This Video" alt="Repeat This Video" src="' +
        youtubeOnRepeatIcon + '" /></a>');
  }
};
