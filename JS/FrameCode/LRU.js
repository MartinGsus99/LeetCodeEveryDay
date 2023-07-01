//LRU算法
//设计数据结构：接受一个capacity参数，表示缓存最多能存储多少数据，不会超过这个容量
//set(key,value)：将记录(key,value)插入该结构
//get(key)：返回key对应的value值，如果不存在则返回-1
//要求set和get方法的时间复杂度为O(1)
//hash表查找快，但是没有固定的户型；链表有顺序之分，插入删除快，查找慢
//结合一下使用哈希+双向链表

class Node {
  constructor(k, v, next, pre) {
    this.key = k
    this.val = v
    this.next = next
    this.pre = pre
  }
}

class DoubleList {
  constructor(head) {
    this.head = head
  }

  addFirst (x) {
    
  };

  //使用
  remove (x) {

  };

  removeLast () {

  }

  getSize () {

  }
}

class LRUcache {
  constructor(cap) {
    this.map = new Set()
    this.cache = new DoubleList()
    this.capacity = cap
  }

  get (key) {
    if (!this.map.has(key)) {
      return -1
    }
    else {
      //将数据（key,val）移动到开头
      this.put(key, val)
      return val
    }
  }

  put (key, val) {
    let newNode = new Node(key, val, null, null)
    if (this.map.has(key)) {
      console.log(" 删除旧数据，将结点放到开头")
      this.cache.remove(map.get(key))
      this.cache.addFirst(newNode)
    } else {
      if (this.cache.getSize() == this.capacity) {
        console("删除最后一个数据，删除映射")
        let lastUsed = this.cache.removeLast()
        this.map.remove(lastUsed.ley)
      }
      console.log("将新节点插入开头，新建map映射")
      this.cache.addFirst(newNode)
      this.map.put(key, newNode)
    }
  }
}
