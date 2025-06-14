export function buildCommentTree(comments){
  const map = {}

  const roots = []

  comments.forEach(comment => {
    map[comment._id] = { ...comment, children: [] }
  })

  comments.forEach(comment => {
    if(comment.parentId === null) {
      roots.push(map[comment._id])
    }else{

      map[comment.parentId]?.children.push(map[comment._id])
    }
  })

  return roots
}