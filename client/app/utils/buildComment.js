export function buildCommentTree(comments){
  const map = {}

  const roots = []

  comments.forEach(comment => {
    map[comment.id] = { ...comment, children: [] }
  })

  comments.forEach(comment => {
    if(comment.parentId === null) {
      roots.push(map[comment.id])
    }else{

      map[comment.parentId]?.children.push(map[comment.id])
    }
  })

  return roots
}