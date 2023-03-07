var isValidBST=function(root){
    

    var checkFunction=function(root,min,max){
        if(root==null) return true;
        if(min!=null && root.val <= min.val){
            return false;
        }
        if(max!=null && root.val >=max.val){
            return false;
        }

        return checkFunction(root.left,min,root) && checkFunction(root.right,root,max);
    }

    return checkFunction(root,null,null);
}