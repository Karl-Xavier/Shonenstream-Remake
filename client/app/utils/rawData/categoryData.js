import getProfileImg from "@/app/services/profile/getRandomImg"

const imgSrc = await getProfileImg()

export const categoryData = {
  title: 'How Not to pick up girls from a dungeon Season 5',
  imgURL: imgSrc,
  description: 'lorem ipsum bullshit by your side Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum facere voluptas magni neque vitae delectus, repudiandae tempore consequatur atque impedit porro modi qui maxime sunt sint dolorem quis voluptates iusto!Eum animi quas ipsam repellat nihil magnam tempore eius perspiciatis, dolorum pariatur id officiis quaerat placeat corrupti neque natus aliquid laboriosam fugiat magni molestiae. Cupiditate quia impedit magni asperiores. Minus! Veniam quas eaque molestias veritatis dolores a animi officiis saepe ipsa. Rerum minima eligendi, deserunt fuga, aliquam recusandae magni repellendus excepturi quos dignissimos hic provident, animi vel commodi pariatur nesciunt!',
  altName: ['data1', 'data2', 'data3', 'data4'],
  genre: ['Action', 'Bloody Hentai', 'Fiction'],
  releaseDate: 'Oct May, 2029',
  status: 'Releasing'
}