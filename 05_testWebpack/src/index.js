import tripleMe from './tripleMe'

console.log(tripleMe(3));

if (module.hot){
    module.hot.accept();           //webpage is reloaded instantly if hot is true in webpack
}