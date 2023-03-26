//判断是否为合理的BST
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

//查找BST
var isInBts=function(root,target){
    if(root==null){
        return false;
    }
    if(root.val==target){
        return true;
    }

    if(root.val<target){
        return isInBts(root.right,target);
    }

    if(root.val>target){
        return isInBts(root.left,target);
    }
}

//在BST插入一个数
var insertIntoBST=function(root,val){
    if(root==null){
        return new TreeNode(val);
    }
    if(root.val<val){
        root.right=insertIntoBST(root.right,val);
    }
    if(root.val>val){
        root.left=insertIntoBST(root.left,val);
    }
    return root;
}

//删除一个BST中的数
var deleteFromBST=function(root,key){
    if(root.val==key){
        //删除
        if(root.left==null) return root.right;
        if(root.right==null) return root.left;
        minNode=gteMin(root.right);
        root.val=minNode.val;
        root.right=deleteFromBST(root.right,minNode.val);

    }else if(root.val>key){
        root.left=deleteFromBST(root.left,key);
    }else if(root.val<key){
        root.right=deleteFromBST(root.right,key);
    }
    return root;
}

