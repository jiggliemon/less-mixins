(function(tree){
var shard = function( path, base, shards){
	
    var  sum = 0
        ,i=0
        ,len = path.value.length 
        ,newPath = []
        ,shards = shards || 1
        ,localShard

    for(;i<len;i++)
        sum += path.toString().charCodeAt(i);

    localShard = 1 + sum % shards;
    
    newPath.push( base.value.replace(/{#}/, localShard ) );
    newPath = newPath.join('/');
    
    return new(tree.Quoted)('"'+ newPath +'"',newPath);
};

exports.shard = shard;
})(require('less/tree'))



