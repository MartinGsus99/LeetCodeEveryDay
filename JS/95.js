var generateTrees = function(n) {
    if(n < 1) {
      return []
    }
    return getAns(1, n)
  
  
    function getAns(start, end) {
      const list = []
  
      if(start > end) {
        list.push(null)
        return list
      }
  
      for(let i = start; i <= end; i++) {
          let lefts = getAns(start, i - 1)
          let rights = getAns(i + 1, end)
  
          for(let l of lefts) {
              for (let r of rights) {
                  let root = new TreeNode(i)
                  root.left = l
                  root.right = r
                  list.push(root)
              }
          }
      }
  
      return list
    }
  
  };
  
 