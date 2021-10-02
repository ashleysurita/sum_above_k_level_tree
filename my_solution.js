function sumAboveKLEvelTree(root, k) {
  let currLEvel = -1
  let sum = 0
  let queue = [root]
  
  while(queue.length && currLevel + 1 <= k) {
    currLevel++
    let level = queue
    queue = []
    
    sum += level.reduce( (total, node) => total + node.value, 0)
    
    level.forEach(node => {
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    })
  }
  
  if(currLevel < k) return -1
  
  return sum
}
